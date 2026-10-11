import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const live = process.argv.includes('--live');
const origin = 'https://moriohhighguide.wiki';
const assets = new Map();
const failures = [];
const pages = [];
const attr = (tag, key) => tag.match(new RegExp(`\\b${key}="([^"]*)"`))?.[1];
async function walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (entry.name.endsWith('.html')) {
      const html = await fs.readFile(file, 'utf8');
      const canonical = attr(html.match(/<link\b[^>]*rel="canonical"[^>]*>/)?.[0] ?? '', 'href');
      let count = 0;
      for (const match of html.matchAll(/<img\b[^>]*>/g)) {
        const tag = match[0];
        const src = attr(tag, 'src');
        if (!src) { failures.push({ file, error: 'Image without src' }); continue; }
        if (!attr(tag, 'alt')) failures.push({ file, src, error: 'Image without a descriptive ALT' });
        if (!attr(tag, 'width') || !attr(tag, 'height')) failures.push({ file, src, error: 'Image dimensions missing' });
        assets.set(src, { url: new URL(src, origin).href });
        for (const candidate of (attr(tag, 'srcset') ?? '').split(',')) {
          const srcsetUrl = candidate.trim().split(/\s+/)[0];
          if (srcsetUrl) assets.set(srcsetUrl, { url: new URL(srcsetUrl, origin).href });
        }
        count++;
      }
      const ogTag = html.match(/<meta\b[^>]*property="og:image"[^>]*>/)?.[0];
      const og = ogTag && attr(ogTag, 'content');
      if (!og) failures.push({ file, error: 'Share image missing' });
      else {
        assets.set(new URL(og).pathname, { url: og });
        const dims = ['width', 'height'].map(key => attr(html.match(new RegExp(`<meta\\b[^>]*property="og:image:${key}"[^>]*>`))?.[0] ?? '', 'content'));
        const metadata = await sharp(path.join('dist', new URL(og).pathname)).metadata();
        if (Number(dims[0]) !== metadata.width || Number(dims[1]) !== metadata.height) failures.push({ file, error: 'Share image dimensions mismatch', dims, actual: [metadata.width, metadata.height] });
        if (/en-(guides|resources)-.*\.png/.test(og)) failures.push({ file, error: 'Old typographic cover still referenced' });
      }
      pages.push({ file: file.replaceAll('\\', '/'), canonical, visibleImages: count, og });
    }
  }
}
await walk('dist');
const results = [];
for (const [source, asset] of assets) {
  const localPath = path.join('dist', new URL(asset.url).pathname);
  const buffer = await fs.readFile(localPath);
  const metadata = await sharp(buffer).metadata();
  const result = { source, url: asset.url, width: metadata.width, height: metadata.height, bytes: buffer.length, format: metadata.format };
  if (live) {
    const response = await fetch(asset.url);
    const actual = Buffer.from(await response.arrayBuffer());
    result.status = response.status;
    result.contentType = response.headers.get('content-type');
    result.matchesBuild = response.ok && actual.equals(buffer);
    if (!result.matchesBuild) failures.push({ source, error: 'Live image differs from verified build or is unavailable', status: response.status });
  }
  results.push(result);
}
const report = { checkedAt: new Date().toISOString(), mode: live ? 'live' : 'local', origin, htmlCount: pages.length, assetCount: results.length, pages, assets: results, failures };
await fs.writeFile(`reports/images-audit-${live ? 'live' : 'local'}.json`, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ mode: report.mode, htmlCount: report.htmlCount, assetCount: report.assetCount, failures }, null, 2));
if (failures.length) process.exitCode = 1;
