import Prisma from '@prisma/client';
import axios from 'axios';

const prisma = new Prisma.PrismaClient();
const MW_API_KEY = process.env.MW_API_KEY;

// Define the type for the definition object
type Definition = {
    id: string;
    word: string;
    prn: string;
    partOfSpeech: string;
    example: string;
    et: any[];
};

// Extract meanings from CSV meaning field
function extractMeanings(meanings: string): string[] {
    return meanings
    .split(';') // Split by semicolon
    .map(m => m.trim()) // Trim whitespace
    .filter(m => m); // Filter out empty strings
}

// Utility: parse a parts-of-speech field like "verb; noun"
function extractPartsOfSpeech(posRaw: string): string[] {
  return posRaw
    .split(';')
    .map((p) => p.trim().toLowerCase())
    .filter(Boolean);
}

// Fetch the definitions for a word from the API
async function fetchDefinition(word: string): Promise<Definition[]> {
  if (!MW_API_KEY) {
    console.error('MW_API_KEY is not set');
    return [];
  }

  const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${MW_API_KEY}`;

  try {
    const { data } = await axios.get(url);
    const entries = data.filter((entry: any) => entry.meta 
                                                && entry.shortdef.length > 0 
                                                && entry.meta.id.includes(word));
    if (!entries || entries.length === 0) {
      console.warn(`No definition found for ${word}`);
      return [];
    }

    return entries.map((entry: any) => ({
      id: entry.meta.id,
      word: entry.hwi.hw,
      prn: entry.hwi.prs?.[0]?.mw || '',
      partOfSpeech: entry.fl || '',
      example: entry.def?.[0]?.sseq?.[0]?.[0]?.dt?.[0]?.[1] || '',
      et: entry.et || [],
    }));
  } catch (error) {
    console.error(`Error fetching definition for ${word}:`, error);
    return [];
  }
}

async function main() {
    // Clear existing data in the EnglishWord table
    //console.log('Clearing existing data in EnglishWord table...');
    //await prisma.englishWord.deleteMany({});
    
    const allAmroWords = await prisma.amroWord.findMany();
    console.log("Found", allAmroWords.length, "Ammro words, processing now...");
    // Iterate through each Ammro word
    for (const word of allAmroWords) {
        if (!word.meaning) {
            console.warn(`No meaning found for word: ${word.asr}`);
            continue;
        }
        
        // Extract meanings from the Ammro word
        const meanings = extractMeanings(word.meaning);
        if (meanings.length === 0) {
            console.warn(`No meanings found for word: ${word.asr}`);
            continue;
        }

        // For each meaning, fetch the definition from the API...
        for (const meaning of meanings) {
            const definitions = await fetchDefinition(meaning);
            if (!definitions || definitions.length === 0) {
                console.warn(`No entry found for meaning: ${meaning}`);
                continue;
            }

            for (const d of definitions) {
                // ...Fetch the parts of speech...
                const partsOfSpeech = extractPartsOfSpeech(d.partOfSpeech);
                if (partsOfSpeech.length === 0) {
                    console.warn(`No parts of speech found for entry: ${d.word}`);
                    continue;
                }

                // ...And upsert the word into the EnglishWord table
                await prisma.englishWord.upsert({
                    where: { id: d.id },
                    update: {},
                    create: {
                        ...d,
                        et: JSON.stringify(d.et),
                    },
                });

                // Link the Amro and English word together
                if (partsOfSpeech.includes(word.partOfSpeech.toLowerCase())) {
                
                    await prisma.amroEnglishMap.upsert({
                        where: {
                            englishWordId_amroWordId_partOfSpeech: {
                                englishWordId: d.id,
                                amroWordId: word.id,
                                partOfSpeech: d.partOfSpeech,
                            }
                        },
                        update: {},
                        create: {
                            amroWord: { connect: { id: word.id } },
                            englishWord: { connect: { id: d.id } },
                            partOfSpeech: d.partOfSpeech,
                        },
                    });
                }
            }

            
        }
    }
    console.log("Seeding complete");
    await prisma.$disconnect();
}

main()
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());