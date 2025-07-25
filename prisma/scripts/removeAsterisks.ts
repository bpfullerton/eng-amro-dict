import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const entries = await prisma.englishWord.findMany({
    where: {
      word: {
        contains: '*',
      },
    },
  });

  for (const entry of entries) {
    const cleaned = entry.word.replace(/\*/g, '').trim();

    if (cleaned !== entry.word) {
      await prisma.englishWord.update({
        where: { id: entry.id },
        data: {
          word: cleaned,
        },
      });

      console.log(`✔️ Cleaned: "${entry.word}" → "${cleaned}"`);
    }
  }

  console.log(`✅ Finished cleaning ${entries.length} entries.`);
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error('❌ Error:', err);
  prisma.$disconnect();
  process.exit(1);
});
