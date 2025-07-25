import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import Papa from 'papaparse'; // Ensure you have papaparse installed

// Ensure you have the Prisma Client installed and configured
const prisma = new PrismaClient();

// Define the type for the CSV rows
type AmroCsvRow = {
  asr?: string;
  cecamro?: string;
  ipa?: string;
  partOfSpeech?: string;
  middle?: string;
  old?: string;
  meaning?: string;
};

async function main() {
  // Read the CSV file
  const csvPath = path.join(__dirname, 'amro.csv');
  const file = fs.readFileSync(csvPath, 'utf8');

  // Parse the CSV file
  if (!file) {
    console.error('Failed to read CSV file');
    return;
  }
  const { data } = Papa.parse<AmroCsvRow>(file, {
    header: true,
    skipEmptyLines: true
  });

  if (!data || data.length === 0) {
    console.error('No valid data found');
    return;
  }

  // Clear existing data in the amroWord table
  console.log('Clearing existing data in amroWord table...');
  await prisma.amroWord.deleteMany({});

  // Insert the parsed data into the amroWord table
  console.log('Inserting data into amroWord table...');
  await prisma.amroWord.createMany({
    data: data.map(row => ({
      asr: row.asr || '',
      cecamro: row.cecamro || '',
      ipa: row.ipa || '',
      partOfSpeech: row.partOfSpeech || '',
      ex_amro: '',
      ex_english: '',
      meaning: row.meaning || '',
      var_middle: row.middle || '',
      var_old: row.old || '',
    })),
  });

  console.log('Seed complete');
}

main()
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
