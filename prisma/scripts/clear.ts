// prisma/scripts/clear.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * This function deletes all entries from the AmroWord, EnglishWord,
 * and AmroEnglishMap tables in the correct order to maintain referential integrity.
 */
export async function clear() {
  console.log('Deleting all data...');

  // Delete from the bridge table first
  await prisma.amroEnglishMap.deleteMany();

  // Delete base tables
  await prisma.amroWord.deleteMany();
  await prisma.englishWord.deleteMany();

  console.log('✅ All data deleted.');
  await prisma.$disconnect();
}

if (require.main === module) {
clear().catch((err) => {
  console.error('❌ Error wiping database:', err);
  prisma.$disconnect();
  process.exit(1);
});
}