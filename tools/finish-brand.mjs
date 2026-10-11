import fs from 'node:fs';
for (const name of ['about', 'contact', 'copyright', 'privacy-policy', 'terms-of-service']) {
  const file = `src/pages/${name}.astro`;
  fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('2026-08-11', '2026-10-11'));
}
const png = fs.readFileSync('public/favicon-32x32.png');
const header = Buffer.alloc(22);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header[6] = 32;
header[7] = 32;
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(png.length, 14);
header.writeUInt32LE(22, 18);
fs.writeFileSync('public/favicon.ico', Buffer.concat([header, png]));
