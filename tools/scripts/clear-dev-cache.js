#!/usr/bin/env node

import { execSync } from 'child_process';

console.log('🧹 Clearing all development caches...');

const commands = [
  // Clear Next.js cache
  'rm -rf .next',

  // Clear node_modules cache (optional)
  // 'rm -rf node_modules/.cache',

  // Clear npm cache
  'npm cache clean --force',

  // Clear TypeScript cache
  'rm -f tsconfig.tsbuildinfo',
];

commands.forEach(cmd => {
  try {
    console.log(`Running: ${cmd}`);
    execSync(cmd, { stdio: 'inherit' });
  } catch (error) {
    console.log(`Warning: ${cmd} failed (this might be normal)`);
  }
});

console.log('✅ Cache cleared! Now run: npm run dev:fresh');
console.log('');
console.log('💡 Pro tips:');
console.log('   • Use npm run dev:no-cache for development without cache');
console.log('   • Use npm run dev:fresh to start with cleared cache');
console.log('   • Use Ctrl+Shift+R in browser for hard refresh');
