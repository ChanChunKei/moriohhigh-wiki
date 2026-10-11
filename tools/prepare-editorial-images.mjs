import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

// Mechanical compression of already generated images, not an image-generation fallback.
const sourceDir = process.argv[2];
if (!sourceDir) throw new Error('Pass the directory containing the four selected image_gen outputs.');
const inputs = [
  ['campus-v2.webp', 'exec-878da2b1-22c3-4069-828e-72e564f356c9.png'],
  ['stand-awakening-v2.webp', 'exec-290f7d4f-cd62-42fd-970a-26f42fe279c7.png'],
  ['release-notice-v2.webp', 'exec-dd23eb5b-8ef9-4bc0-b711-7ee8bc008430.png'],
  ['community-board-v2.webp', 'exec-fcf2f590-ce69-47c8-a793-7e1037c8dacc.png'],
];
await fs.mkdir('.tools/image-originals', { recursive: true });
const assets = [];
for (const [outName, inName] of inputs) {
  const input = path.join(sourceDir, inName);
  const output = `src/assets/covers/${outName}`;
  await fs.copyFile(input, `.tools/image-originals/${inName}`);
  await sharp(input).resize(1200, 675, { fit: 'cover' }).webp({ quality: 84 }).toFile(output);
  const metadata = await sharp(output).metadata();
  assets.push({ file: output, width: metadata.width, height: metadata.height, bytes: (await fs.stat(output)).size });
}
const sharePath = 'public/images/hero-v2.webp';
await sharp('src/assets/covers/campus-v2.webp').resize(1200, 630, { fit: 'cover' }).webp({ quality: 86 }).toFile(sharePath);
assets.push({ file: sharePath, width: 1200, height: 630, bytes: (await fs.stat(sharePath)).size });
await fs.writeFile('research/image-assets-2026-10-12.json', JSON.stringify({
  createdAt: new Date().toISOString(),
  method: 'Built-in image_gen; mechanical Sharp resizing and WebP encoding only',
  originals: 'Local copies in .tools/image-originals/ (Git ignored); generation originals retained',
  assets,
}, null, 2) + '\n');
console.log(JSON.stringify(assets, null, 2));
