// prisma/scripts/delete-duplicates.ts

import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Deletes duplicate entries in the AmroWord table based on the 'asr' field.
 * Keeps the entry with the lowest 'id' and removes others.
 */
export async function deleteDuplicates() {
  console.log('Deleting duplicate Amro words...');

  // Get all Amro words, ordering by ascending 'id'
  const all = await prisma.amroWord.findMany({
    orderBy: { id: 'asc' },
  });

  // Group and identify duplicates
  const seen = new Set<string>();
  const toDelete: number[] = [];

  for (const word of all) {
    const key = word.asr;
    // If the word is already in the set, this means there's a duplicate.
    // Otherwise, add it to the set.
    if (seen.has(key)) {
        toDelete.push(word.id);
    } else {
        seen.add(key);
    }
  }

  // Delete duplicates if there are any
  if (toDelete.length) {
    await prisma.amroWord.deleteMany({
        where: {
        id: { in: toDelete },
        },
    });
  }
}

if (require.main === module) {
  deleteDuplicates().catch((err) => {
    console.error('❌ Error deleting duplicates:', err);
    prisma.$disconnect();
    process.exit(1);
  });
}
