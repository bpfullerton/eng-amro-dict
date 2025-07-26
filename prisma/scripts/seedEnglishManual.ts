// scripts/seedManualEnglishWords.ts

import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export async function manual() {
  console.log('Seeding unmatched English phrases manually...');
  
  const filePath = path.join(__dirname, './logs/missed-words.txt');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Extract one phrase per line
  const phrases = Array.from(
    new Set(
      fileContent
        .split('\n')
        .map((line) => line.replace(/^No definition found for/i, '').replace(/^No entry found for meaning:/i, '').trim())
        .filter(Boolean)
    )
  );

  for (const phrase of phrases) {
    const id = `manual:${phrase.toLowerCase()}`;

    // Insert the phrase into EnglishWord table
    const english = await prisma.englishWord.upsert({
      where: { id },
      update: {},
      create: {
        id,
        word: phrase,
        prn: '',
        partOfSpeech: '',
        example: '',
        et: '',
      },
    });

    // Link it to any AmroWord where the meaning field contains the phrase (case-insensitive)
    const matchingAmroWords = await prisma.amroWord.findMany({
      where: {
        meaning: {
          contains: phrase,
          mode: 'insensitive',
        },
      },
    });

    for (const amro of matchingAmroWords) {
      await prisma.amroEnglishMap.upsert({
        where: {
          englishWordId_amroWordId_partOfSpeech: {
                                englishWordId: id,
                                amroWordId: amro.id,
                                partOfSpeech: amro.partOfSpeech,
            }
        },
        update: {},
        create: {
          amroWord: { connect: { id: amro.id } },
          englishWord: { connect: { id: english.id } },
          partOfSpeech: amro.partOfSpeech ?? null,
        },
      });
    }
  }

  console.log('✅ Manual phrases added and linked');
  await prisma.$disconnect();
}

if (require.main === module) {
  manual().catch((err) => {
    console.error(err);
    prisma.$disconnect();
    process.exit(1);
  });
}