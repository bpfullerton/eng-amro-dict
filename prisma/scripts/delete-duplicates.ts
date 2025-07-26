import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();



export async function deleteDuplicates() {
  console.log('Deleting duplicate Amro words...');

    // Step 1: Get all records grouped by 'asr'
    const all = await prisma.amroWord.findMany({
    orderBy: { id: 'asc' },
    });
  // Step 2: Group and identify duplicates
  const seen = new Set<string>();
  const toDelete: number[] = [];

    for (const word of all) {
    const key = word.asr;
    if (seen.has(key)) {
        toDelete.push(word.id);
    } else {
        seen.add(key);
    }
    }

    // Step 3: Delete duplicates
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
