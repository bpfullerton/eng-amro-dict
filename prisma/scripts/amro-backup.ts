import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { unparse } from 'papaparse';

const prisma = new PrismaClient();

async function main() {
  const words = await prisma.amroWord.findMany();

  const output = unparse(
    words.map(({ ...fields }) => fields), // exclude the numeric id if you want auto-generation later
    {
      quotes: true, // wrap all fields in quotes for safety
    }
  );

  const filePath = path.join(__dirname, '../../prisma/amro.csv');
  fs.writeFileSync(filePath, output, 'utf8');

  console.log(`✅ Exported ${words.length} Amro words to ${filePath}`);
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error('❌ Error exporting Amro words:', err);
  prisma.$disconnect();
  process.exit(1);
});
