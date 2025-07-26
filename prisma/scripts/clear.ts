import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function clear() {
  console.log('Deleting all data...');

  // Step 1: Delete from the bridge table first
  await prisma.amroEnglishMap.deleteMany();

  // Step 2: Delete base tables
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