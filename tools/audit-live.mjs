import fs from 'node:fs';
const build = JSON.parse(fs.readFileSync('reports/build-seo-audit.json', 'utf8'));
const origin = build.origin;
const failures = [];
const results = [];
const canonicalOf = html => html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
async function inspect(url, expectedStatus, expectedCanonical) {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(20000) });
    const body = await response.text();
    const canonical = canonicalOf(body);
    const record = { url, status: response.status, finalUrl: response.url, canonical,
      contentType: response.headers.get('content-type'),
      noindex: /name="robots"[^>]*content="[^"]*noindex/.test(body) };
    results.push(record);
    if (response.status !== expectedStatus) failures.push({ url, error: `expected ${expectedStatus}, got ${response.status}` });
    if (expectedCanonical && canonical !== expectedCanonical) failures.push({ url, error: 'canonical mismatch' });
    return body;
  } catch (error) {
    failures.push({ url, error: error.message });
    return '';
  }
}
// 404 is an error response, not a live content route.
const pages = build.pages.filter(page => page.file !== 'dist/404.html');
for (let start = 0; start < pages.length; start += 4) {
  await Promise.all(pages.slice(start, start + 4).map(async page => {
    const html = await inspect(page.canonical, 200, page.canonical);
    if (/name="robots"[^>]*content="[^"]*noindex/.test(html) !== page.noindex)
      failures.push({ url: page.canonical, error: 'indexing policy differs from build' });
  }));
}
const [robots, sitemap] = await Promise.all([
  inspect(`${origin}/robots.txt`, 200),
  inspect(`${origin}/sitemap-0.xml`, 200),
  inspect(`${origin}/sitemap-index.xml`, 200),
  inspect(`${origin}/pagefind/pagefind.js`, 200),
  inspect(`${origin}/pagefind/pagefind-entry.json`, 200),
  inspect(`${origin}/images/hero.webp`, 200),
  inspect(`${origin}/morioh-high-nonexistent-audit-path/`, 404),
]);
if (!robots.includes(`${origin}/sitemap-index.xml`)) failures.push({ url: `${origin}/robots.txt`, error: 'wrong Sitemap origin' });
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
if (sitemapUrls.length !== build.sitemapCount) failures.push({ url: `${origin}/sitemap-0.xml`, error: 'Sitemap count mismatch' });
for (const url of sitemapUrls) if (!pages.some(page => page.canonical === url && !page.noindex)) failures.push({ url, error: 'Sitemap includes unindexable route' });
const report = { checkedAt: new Date().toISOString(), origin, https: true,
  validHtmlRoutes: pages.length, sitemapUrls, results, failures,
  limitations: ['HTTP verification does not establish Google indexing, game playability or browser search functionality.'] };
fs.writeFileSync('reports/online-acceptance.json', JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ validHtmlRoutes: pages.length, sitemapCount: sitemapUrls.length, checks: results.length, failures }));
if (failures.length) process.exitCode = 1;
