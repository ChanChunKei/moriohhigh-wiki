import fs from 'node:fs';
const saveJson = (file, value) => fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n');
const standUrl = '/guides/how-to-get-a-stand/';
const sources = [
  { id: 'E17', url: 'https://www.youtube.com/watch?v=taOqWP56Mrk', author: 'Abitsane',
    checkedAt: new Date().toISOString(), time: '0:10',
    evidence: 'Readable in-game Encyclopedia, enlarged in the real browser; auto captions used only as an index.',
    facts: ['Start without a Stand', 'Real-fight knockout by another fighter: 1 in 10; one chance per minute',
      'Resetting, falling, and a tap at 1 health are excluded', 'Hold Stand Arrow until compatibility is 100%',
      'Awakening result is random by rarity', 'Reroll result differs from current Stand'],
    authority: 'Game UI reproduced in same-game player footage; not a developer announcement or a live-client test',
    limits: ['Build number unknown', 'The second clip does not independently measure the odds'] },
  { id: 'E18', url: 'https://www.youtube.com/watch?v=w9rdSW-8ULE', author: 'SuperZydan',
    checkedAt: new Date().toISOString(), time: '0:50–1:05; 1:35–1:47',
    evidence: 'Auto captions plus browser viewing of Arrow competition in a different player recording.',
    facts: ['Players contest a Stand Arrow', 'Creator reports an awakened Stand later in the clip'],
    authority: 'Independent player footage, narrower than Encyclopedia documentation',
    limits: ['Does not establish an event interval, fixed spawn route, interaction key or exact holding duration',
      'Does not independently prove the documented fight probability'] },
];
saveJson('research/mechanics-2026-10-11.json', { collectedDate: '2026-10-11', incremental: true,
  previousState: 'Initial E11 had a video title but inaccessible footage/captions. Browser export and viewing later succeeded.',
  gameIdentity: { placeId: '111838814545019', universeId: '10768944846' }, sources,
  publicationDecision: 'Publish the documented Stand acquisition methods with source/date/build limits; no oral-only code or probability claim promoted.' });
let ledger = fs.readFileSync('research/evidence-ledger.md', 'utf8');
if (!ledger.includes('## Incremental mechanics evidence')) ledger += `\n## Incremental mechanics evidence — later on October 11\n\nThe earlier E11 access failure remains historical evidence. Later, the browser transcript export and actual video viewing succeeded. This changes the Stand-guide decision; it does not retrospectively claim the initial fetch worked. Full transcripts and frame captures stay local, excluded from public Git history. No game image is reused as a website asset.\n\n| ID | Fact / claim | Exact evidence | Date / build | Authority / dispute | Decision |\n| --- | --- | --- | --- | --- | --- |\n| E17 | First Stand: qualifying real-fight knockout or Arrow held to 100% compatibility; documented fight chance 1 in 10 with one chance per minute; reset/fall/1-health tap excluded; outcome random by rarity | [Abitsane](https://www.youtube.com/watch?v=taOqWP56Mrk&t=10s), 0:10, readable Encyclopedia in enlarged real-browser frame; local evidence-images/stand-encyclopedia-00m10s.jpg | Viewed 2026-10-11; build number unknown | Game UI primary for documented rule, via player recording. Odds were read on screen, not promoted from oral narration. No live-client statistical test; second video does not test odds | Publish as documented Encyclopedia rules with explicit limits; not a claimed hands-on test |\n| E18 | Arrow contest; player subsequently reports an awakened Stand | [SuperZydan](https://www.youtube.com/watch?v=w9rdSW-8ULE), transcript 0:50–1:05 and 1:35–1:47; actual browser viewing of contest | Viewed 2026-10-11; build unknown | Different player/source. Corroborates event/possession context, not all numeric rules | Use to explain Arrow competition. Do not infer fixed spawns, interval or exact hold duration |\n\nCodes mentioned orally in E17 remain unverified and are excluded. The wiki has not joined a Roblox server. The narrower documented acquisition question now has a useful answer; full beginner progression and a current complete Stand roster remain deferred.\n`;
fs.writeFileSync('research/evidence-ledger.md', ledger);
const matrix = JSON.parse(fs.readFileSync('research/page-matrix.json', 'utf8'));
const page = matrix.pages.find(item => item.slug === standUrl);
Object.assign(page, { secondary: ['morioh high stand arrow', 'morioh high stand awakening'],
  intent: 'Get a first Stand through documented acquisition methods',
  answer: 'Qualifying fight knockout, conditions and documented chance; Arrow possession to 100% compatibility; unknown spawn/timer values excluded',
  evidence: 'Readable same-game Encyclopedia plus different player Arrow footage', sources: ['E01', 'E17', 'E18'],
  format: 'MDX steps, rule table, six FAQ answers and timestamped source notes',
  links: ['/guides/how-to-play/', '/resources/community-links/', '/resources/release-information/', '/faq/'],
  maintenance: 'Only when documented acquisition rules change or an important error is found',
  value: 'Historical tutorial search intent; current same-game videos observed; current volume unknown', status: '完整回答',
  reason: 'Minimum documented acquisition answer supplied; current live-client behavior and exact Arrow spawn/timing remain untested' });
matrix.counts = { total: matrix.pages.length, localEditorialReady: 6, completeAnswers: 4, qualifiedPartialAnswers: 2, deferred: 14 };
matrix.note = 'Stand acquisition documented in viewed Encyclopedia footage. Three other resource pages, homepage and FAQ retained. Full beginner/roster gate still incomplete.';
saveJson('research/page-matrix.json', matrix);
fs.writeFileSync('research/page-matrix.md', `# 页面矩阵（增量证据后的状态）\n\n2026-10-11。20 个页面意图：6 个本地编辑页面，4 完整回答、2 限定部分回答，14 暂缓。完整回答指文内限定的玩家问题，不代表整站已成为完整游戏百科。法律和归档页不计精品攻略。\n\n| 页面 | 主词 | URL | 状态 |\n| --- | --- | --- | --- |\n${matrix.pages.map(p => `| ${p.name} | ${p.primary} | ${p.slug} | ${p.status} |`).join('\n')}\n\n${matrix.pages.map(p => `## ${p.name}\n\n- 次词：${p.secondary.join(', ') || '暂无验证变体'}\n- 独立意图：${p.intent}\n- 最小答案：${p.answer}\n- 所需证据：${p.evidence}\n- 已取得：${p.sources.join(', ') || '不足'}\n- 形式：${p.format}\n- 内链：${p.links.join(', ')}\n- 更新频率：${p.maintenance}\n- SEO 价值：${p.value}\n- 状态：${p.status}${p.reason ? '；' + p.reason : ''}\n`).join('\n')}`);
const keywords = JSON.parse(fs.readFileSync('research/keywords.json', 'utf8'));
const keywordRows = keywords.keywords ?? keywords.rows;
for (const row of keywordRows) if (row.intent === 'stand-acquisition') {
  row.current.answerEvidence = 'E17 readable Encyclopedia rules and E18 independent Arrow footage; live client not tested';
  row.current.pageType = 'source-checked acquisition guide'; row.current.separatePage = true;
  row.current.targetUrl = standUrl; row.current.priority = 'P0 ready';
}
keywords.incrementalEvidenceDate = '2026-10-11';
saveJson('research/keywords.json', keywords);
const counts = JSON.parse(fs.readFileSync('research/research-counts.json', 'utf8'));
Object.assign(counts, { localEditorialPages: 6, mdxArticles: 4, deferredPages: 14 });
saveJson('research/research-counts.json', counts);
const appendOnce = (file, marker, content) => { if (!fs.readFileSync(file, 'utf8').includes(marker)) fs.appendFileSync(file, content); };
appendOnce('research/site-architecture.md', '## Incremental change', '\n\n## Incremental change\n\n/guides/how-to-get-a-stand/ now answers documented first-Stand acquisition from E17/E18. Actual allocated primary origin is https://moriohhigh-wiki.pages.dev. Earlier localhost text records the initial setup stage.\n');
appendOnce('research/internal-link-plan.md', 'Stand acquisition is now linked', '\n\nStand acquisition is now linked from the homepage start card, quick links, the play guide, FAQ coverage and native related articles. Its own page links play, community, release and FAQ. Counts must be refreshed after this new build.\n');
appendOnce('reports/content-audit.md', '## Incremental Stand gate', '\n\n## Incremental Stand gate\n\nE17 was actually read in the enlarged game Encyclopedia frame; numeric rules are on-screen documentation, not oral-only values. E18 is a different player, supporting the Arrow contest but not testing odds. New Stand acquisition page supplies the documented minimum answer, with no current-build or live-client test claim. Four MDX / six editorial pages are now ready locally; 14 candidates remain deferred. No codes or unverified roster were promoted. This supersedes the earlier Stand deferral, while preserving its initial access history.\n');
const localePath = 'src/locales/en.json';
const locale = JSON.parse(fs.readFileSync(localePath, 'utf8'));
locale.home.meta.title = 'Morioh High Wiki | Stand Guide & Roblox Resources';
locale.home.meta.description = 'Learn how to get a Stand in Morioh High, find the Roblox game, and check community links. Independent wiki with clear sources and verification dates.';
locale.home.hero.description = 'School life in Morioh, with a bizarre twist. Find the Roblox game, learn the documented Stand awakening methods, and connect with other players. Sources checked October 11, 2026.';
locale.home.start.cards[1] = { number: '02', title: 'Get your first Stand', description: 'Fight awakening and Stand Arrow rules, checked against the game’s Encyclopedia in footage.', icon: 'lucide:sparkles', href: standUrl };
if (!locale.home.popular.quickLinks.some(link => link.href === standUrl)) locale.home.popular.quickLinks.splice(1, 0, { label: 'How to get a Stand', href: standUrl });
locale.home.faq.items.find(item => /Stand and codes/.test(item.question)).answer = 'The Stand guide documents qualifying fight knockouts and holding a Stand Arrow to full compatibility, using readable game Encyclopedia footage. A complete Stand roster and working code redemption remain unverified here.';
saveJson(localePath, locale);
console.log(JSON.stringify({ editorialReady: 6, deferred: 14, newSources: sources.map(s => s.id) }));
