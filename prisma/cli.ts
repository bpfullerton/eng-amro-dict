#!/usr/bin/env tsx

// prisma/cli.ts
// A custom CLI for Prisma-related tasks

const args = process.argv.slice(2);
const command = args[0];

console.log(`Running command: ${command}`);

try {
  (async () => {
    const { backup } = await import('./scripts/amro-backup');
    const { deleteDuplicates } = await import('./scripts/delete-duplicates');
    const { link } = await import('./scripts/link');
    const { clear } = await import('./scripts/clear');
    const { seedAmro } = await import('./scripts/seedAmro');
    const { seedEng } = await import('./scripts/seedEnglish');
    const { manual } = await import('./scripts/seedEnglishManual');

    switch (command) {
      case 'amro-backup':
        await backup();
        break;

      case 'clear-db':
        await clear();
        break;

      case 'link':
        await link();
        break;

      case 'reset-db':
        await deleteDuplicates();
        await backup();
        await clear();
        await seedAmro();
        await seedEng();
        await manual();
        await link();
        break;

      case 'seed':
        await seedAmro();
        await seedEng();
        await manual();
        await link();
        break;

      case 'seed-amro':
        await seedAmro();
        break;

      case 'seed-english':
        await seedEng();
        await manual();
        break;

      default:
        console.log(`Unknown command: ${command}`);
        console.log(`
  Usage: npm run prisma-custom -- <command>

  Available commands:
    amro-backup   Backup Amro words to CSV
    clear-db      Clears all data in the database
    link          Link Amro ↔ English translations
    reset-db      Reset the database, clearing and re-seeding all data
    seed          Seed both Amro and English words
    seed-english  Seed English words from the Merriam-Webster API
    seed-amro     Seed Amro words from the amro.csv file
  `);
        process.exit(1);
    }
  })();
} catch (err) {
  console.error(`❌ Error running command "${command}":`, err);
  process.exit(1);
}

export {};