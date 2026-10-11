# Low-maintenance publication policy

Freeze editorial URLs after the initial release. Do not run scheduled article generators, rewrite text daily, or change dates without a substantive correction. Ads, GA4 and optional comments stay disabled until explicitly configured and this site's privacy notice is updated.

Update only for: a major game change that invalidates a guide; a material factual error; a valuable new search intent; a GSC content gap; a technical/indexing fault; or a changed official game entry or important rule. New codes need a developer source and successful same-game validation. A video title alone is insufficient for a mechanic guide.

The initial edition has narrow resource coverage. Stand acquisition, beginner progression, a current Stand roster and other game data remain deferred in `research/page-matrix.md`. Do not publish their empty routes or fill them with JoJo lore or mechanics from another Roblox game.

## Checks after publication

Use the deployment acceptance date in `reports/online-acceptance.json` as day 0. If that file does not show a verified deployment, the clock has not started.

| Day | Check | Action only when warranted |
|---|---|---|
| 3 | HTTPS, official game link, all sitemap URLs, Pagefind and GSC verification if accessible | Fix an actual break or complete authorized account setup |
| 7 | GSC sitemap status and indexed pages; 7/30-day Trends if available | Distinguish unindexed from indexed-but-low-ranking; no forced content rewrite |
| 14 | GSC impressions/queries/clicks and GA4 Organic Search if enabled and verified | Address a demonstrated content or CTR gap with supported facts |
| 28 | Trend direction, indexed-page exposure, useful long tails, competition and maintenance time | Continue, freeze further investment, or add only a proven valuable page |

This file records the check plan. It does not claim that reminders, background execution, GSC submission, or GA4 collection have been created. Use the app's scheduling tool only when a working deployment and the required monitoring access are available.

## Measurement rules

Track GSC impressions, clicks, query/page rankings, indexed page count; verified GA4 Organic Search sessions; and, later, actual ad impressions/RPM/revenue. Do not estimate revenue from missing analytics. Separate: not indexed; indexed with low rank; ranked with little demand; impressions with weak CTR.

Stop adding paid effort if measured heat falls persistently, indexed content has no meaningful exposure over an appropriate observation period, long-tail demand is limited, competition wins decisively, or maintenance exceeds plausible value. Retain a working low-cost static site if useful. No automatic deletion is required.

## Recovery and deployment

Read `reports/current-delivery-status.md`, inspect Git and the evidence ledger, then resume the unfinished step. Node >=22.13, pnpm 11.1.1. Install with the frozen lockfile. The Windows optional-native repair is documented in `scripts/repair-windows-deps.ps1`; use only if a native package download failed.

For content edits, run the template's content and link gates plus the appropriate build checks. For a deployment, build with the verified `SITE_URL` and run the build SEO audit; deploy `dist` through Wrangler using credentials supplied in the process environment. Never put tokens in tracked files. Recheck the live sitemap, canonical origin, 404 status and search after upload.

A future custom domain must be owned/authorized, pass the cost decision, and be bound before changing the primary origin. Rebuild canonical/sitemap metadata at that point, update the real domain mailbox, and verify mail routing separately. Avoid indexing two hosts with conflicting canonical signals.
