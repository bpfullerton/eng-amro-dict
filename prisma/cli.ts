#!/usr/bin/env tsx

const args = process.argv.slice(2);
const command = args[0];

console.log(`Running command: ${command}`);

try {
  (async () => {
    switch (command) {
      case 'relink':
        await import('./scripts/relink');
        break;

      case 'reset-db':
        console.log('Backing up Amro words...');
        await import('./scripts/amro-backup');
        console.log('Seeding Amro words...');
        await import('./scripts/seedAmro');
        console.log('Seeding English words...');
        await import('./scripts/seedEnglish');
        console.log('Seeding unmatched English phrases manually...');
        await import('./scripts/seedEnglishManual');
        console.log('Re-linking Amro ↔ English translations...');
        await import('./scripts/relink');
        console.log('✅ Seeding complete');
        break;

      case 'seed-english':
        await import('./scripts/seedEnglish');
        break;

      case 'seed-amro':
        await import('./scripts/seedAmro');
        break;

      case 'amro-backup':
        console.log('Backing up Amro words to CSV...');
        await import('./scripts/amro-backup');
        break;

      default:
        console.log(`Unknown command: ${command}`);
        console.log(`
  Usage: npx prisma <command>

  Available commands:
    amro-backup   Backup Amro words to CSV
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