#!/usr/bin/env node
/**
 * Downloads real brand/tech logos (devicon, MIT-licensed) into public/tech/ and writes
 * a manifest at src/content/generated/tech-icons.json. Self-hosting the SVGs keeps the
 * site offline-safe and avoids runtime CDN dependencies. Run via `npm run sync:icons`.
 *
 * Failures are skipped (the manifest only lists icons that downloaded), so a missing
 * upstream file never breaks the build.
 */
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = resolve(__dirname, '../public/tech');
const MANIFEST = resolve(__dirname, '../src/content/generated/tech-icons.json');
const BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

// label → devicon path. Ordered roughly by prominence in the real stack.
const ICONS = [
  ['React', 'react/react-original.svg'],
  ['Next.js', 'nextjs/nextjs-original.svg'],
  ['TypeScript', 'typescript/typescript-original.svg'],
  ['JavaScript', 'javascript/javascript-original.svg'],
  ['Node.js', 'nodejs/nodejs-original.svg'],
  ['Express', 'express/express-original.svg'],
  ['Angular', 'angularjs/angularjs-original.svg'],
  ['MongoDB', 'mongodb/mongodb-original.svg'],
  ['Redis', 'redis/redis-original.svg'],
  ['Amazon AWS', 'amazonwebservices/amazonwebservices-original-wordmark.svg'],
  ['Google Cloud', 'googlecloud/googlecloud-original.svg'],
  ['Docker', 'docker/docker-original.svg'],
  ['Jenkins', 'jenkins/jenkins-original.svg'],
  ['Git', 'git/git-original.svg'],
  ['GitHub', 'github/github-original.svg'],
  ['Tailwind CSS', 'tailwindcss/tailwindcss-original.svg'],
  ['Sass', 'sass/sass-original.svg'],
  ['HTML5', 'html5/html5-original.svg'],
  ['CSS3', 'css3/css3-original.svg'],
  ['Firebase', 'firebase/firebase-plain.svg'],
  ['Flutter', 'flutter/flutter-original.svg'],
  ['Dart', 'dart/dart-original.svg'],
  ['Kotlin', 'kotlin/kotlin-original.svg'],
  ['Rust', 'rust/rust-original.svg'],
  ['Linux', 'linux/linux-original.svg'],
];

const slug = (label) => label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

async function main() {
  await mkdir(PUBLIC_DIR, { recursive: true });
  await mkdir(dirname(MANIFEST), { recursive: true });
  const ok = [];

  for (const [label, path] of ICONS) {
    try {
      const res = await fetch(`${BASE}/${path}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const svg = await res.text();
      if (!svg.includes('<svg')) throw new Error('not an svg');
      const file = `${slug(label)}.svg`;
      await writeFile(resolve(PUBLIC_DIR, file), svg);
      ok.push({ label, src: `/tech/${file}` });
    } catch (err) {
      console.warn(`[tech-icons] skip ${label}: ${err.message}`);
    }
  }

  await writeFile(MANIFEST, JSON.stringify({ icons: ok }, null, 2) + '\n');
  console.log(`[tech-icons] saved ${ok.length}/${ICONS.length} icons`);
}

main();
