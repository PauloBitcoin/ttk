import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const rootDir = path.dirname(fileURLToPath(import.meta.url)) + '/..';
const sourceLogo = path.join(rootDir, 'public/assets/logo.webp');
const outDir = path.join(rootDir, 'public/favicon');

const BACKGROUND = { r: 0, g: 0, b: 0, alpha: 1 };

async function renderPng(size) {
  return sharp(sourceLogo)
    .resize(size, size, { fit: 'contain', background: BACKGROUND })
    .png()
    .toBuffer();
}

async function main() {
  await mkdir(outDir, { recursive: true });

  const targets = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 },
  ];

  for (const { name, size } of targets) {
    const buffer = await renderPng(size);
    await writeFile(path.join(outDir, name), buffer);
  }

  const icoBuffers = await Promise.all([16, 32, 48].map(renderPng));
  const icoBuffer = await pngToIco(icoBuffers);
  await writeFile(path.join(outDir, 'favicon.ico'), icoBuffer);

  console.log('favicons: regenerated from public/assets/logo.webp');
}

main();
