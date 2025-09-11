// prisma/scripts/amro-backup.ts

import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { unparse } from 'papaparse';

const prisma = new PrismaClient();

/**
 * Backs up all Amro words from the database to a CSV file.
 * The CSV file will be saved to `prisma/amro.csv`.
 */
export async function backup() {
  console.log('Backing up Amro words...');
  
  // Get all the words from the database
  const words = await prisma.amroWord.findMany();

  const output = unparse(
    words.map(({ ...fields }) => fields),
    {
      quotes: true, // wrap all fields in quotes for safety
    }
  );

  const filePath = path.join(__dirname, '../../prisma/amro.csv');
  // IMPORTANT: Use 'utf8' encoding to avoid BOM issues with Excel
  fs.writeFileSync(filePath, output, 'utf8');

  console.log(`✅ Exported ${words.length} Amro words to ${filePath}`);
  await prisma.$disconnect();
}

if (require.main === module) {
  backup().catch((err) => {
    console.error('❌ Error exporting Amro words:', err);
    prisma.$disconnect();
    process.exit(1);
  });
}
