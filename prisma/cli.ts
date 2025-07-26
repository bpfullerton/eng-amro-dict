#!/usr/bin/env tsx

const args = process.argv.slice(2);
const command = args[0];

console.log(`Running command: ${command}`);

try {
  (async () => {
    const { backup } = await import('./scripts/amro-backup');
    const { deleteDuplicates } = await import('./scripts/delete-duplicates');
    const { relink } = await import('./scripts/relink');
    const { clear } = await import('./scripts/clear');
    const { seedAmro } = await import('./scripts/seedAmro');
    const { seedEng } = await import('./scripts/seedEnglish');
    const { manual } = await import('./scripts/seedEnglishManual');

    switch (command) {
      case 'relink':
        
        await relink();
        break;

      case 'reset':
        await deleteDuplicates();
        await backup();
        await clear();
        await seedAmro();
        await seedEng();
        await manual();
        await relink();
        break;

      case 'seed-english':
        await seedEng();
        await manual();
        break;

      case 'seed-amro':
        await seedAmro();
        break;

      case 'amro-backup':
        await backup();
        break;

      case 'clear':
        await clear();
        break;

      default:
        console.log(`Unknown command: ${command}`);
        console.log(`
  Usage: npm run prisma-custom -- <command>

  Available commands:
    amro-backup   Backup Amro words to CSV
    clear-db      Clears all data in the database
    relink        Re-link Amro ↔ English translations
    reset-db      Reset the database and re-seed all data
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