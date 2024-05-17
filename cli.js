#!/usr/bin/env node

console.clear();
console.log('\n\x1b[36m', 'Hi I am Aman singh 👋', '\x1b[0m\n');

const greenStr = (str) => `\x1b[32m${str}\x1b[32m`;

const info = {
  status: 'CS student',
  web: 'https://portfolio-amancodes26s-projects.vercel.app/',
  gh: 'https://github.com/amancodes26',
  desc: 'A full stack dev getting hands dirty in open source',
  skills: {
    langs: ['.js', '.ts', '.py', '.sh'],
    skils: [ 'git', 'docker', 'networking', ],
  },
};

console.log(greenStr(JSON.stringify(info, null, 2)));