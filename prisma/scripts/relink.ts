import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Extract meanings from CSV meaning field
// COPIED CODE FROM seedEnglish.ts - refactor this later
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

export async function relink() {
  console.log('Re-linking Amro ↔ English translations...');

  // Clear existing data in the amroEnglishMap table if it exists
  if (!(await prisma.amroEnglishMap.count()) || (await prisma.amroEnglishMap.count()) === 0) {
    console.log('Clearing existing data in amroEnglishMap table...');
    await prisma.amroEnglishMap.deleteMany({});
  }

  // Get all Amro words that have meanings defined
  const amroWords = await prisma.amroWord.findMany({
    where: {
      meaning: {
        not: '',
      },
    },
  });

  let relinked = 0;

  for (const amro of amroWords) {
    // Extract meanings and parts of speech from the Amro word
    if (!amro.meaning || !amro.partOfSpeech) {
      console.warn(`Skipping Amro word "${amro.asr}" due to missing meaning or part of speech.`);
      continue;
    }
    const meanings = extractMeanings(amro.meaning);
    const partsOfSpeech = extractPartsOfSpeech(amro.partOfSpeech);

    // Try to find all EnglishWord entries whose word is included in this meaning
    const englishWords = await prisma.englishWord.findMany({});

    for (const meaning of meanings) {
      const english = englishWords.find(ew => ew.word.toLowerCase() === meaning && extractPartsOfSpeech(ew.partOfSpeech).some(pos => partsOfSpeech.includes(pos)));
      if (english) {
        await prisma.amroEnglishMap.upsert({
          where: {
            englishWordId_amroWordId_partOfSpeech: {
                                englishWordId: english.id,
                                amroWordId: amro.id,
                                partOfSpeech: english.partOfSpeech,
                            }
          },
          update: {},
          create: {
            amroWordId: amro.id,
            englishWordId: english.id,
            partOfSpeech: amro.partOfSpeech ?? null,
          },
        });
        console.log(`Re-linked Amro word "${amro.asr}" with English word "${english.word}"`);
        relinked++;
      }
    }
  }

  console.log(`✅ Re-linked ${relinked} translation entries.`);
  await prisma.$disconnect();
}

if (require.main === module) {
  relink().catch((err) => {
    console.error('❌ Error re-linking:', err);
    prisma.$disconnect();
    process.exit(1);
  });
}
