# Formal domain and email forwarding

Updated 2026-10-11T17:20:09.682Z UTC. The user owns moriohhighguide.wiki at Spaceship and authorized this site and contact-mail forwarding. The private destination stays out of public source and reports.

## Completed and verified

- Spaceship nameservers for this domain alone were saved as armfazh.ns.cloudflare.com and laura.ns.cloudflare.com. Public signed NS matches. No other domains changed.
- Cloudflare Free zone c917d0811a9b554a510282eaecdbd91e is active; Pages custom domain 4ca17326-6c68-4527-a593-ae0321284775 is active. HTTPS production https://moriohhighguide.wiki passes the live audit.
- Proxied apex CNAME points to moriohhigh-wiki.pages.dev; old parking A records are backed up.
- DNSSEC was enabled at Cloudflare and its exact new DS saved at Spaceship. Google DoH authenticated A/MX/NS/TXT/DS (AD=true). Cloudflare's last DNSSEC status read still says pending; recheck its status later, without changing the verified matching DS.
- contact@moriohhighguide.wiki exact forwarding rule d4b11591c9ac45c39caffffd1d50d61e is enabled and read back to the correct already-verified private destination. Catch-all stays disabled.
- Email service is ready/enabled/synced. Provider-created MX/SPF/DKIM records are installed; public MX/SPF verified. Enabling apex routing required POST /email/routing/dns without a name field; earlier403 Active zone required and422 subdomain-only error are preserved as history.
- Native site/contact/origin and CI settings changed only after actual domain and service activation. Source 7f1de4600643729cb6eda26c664c1daeb7a7ffb4, successful production deployment3989ef5f-0030-4720-a5f6-1373c027dafd. Live20HTML/27targets/11sitemapURLs pass; Contact mailto and Pagefind search verified in the real browser.
- Formal GSC domain ownership verified, sitemap-index submitted. Initial processing report still Couldn't fetch/0discovered, not proven indexing. Existing GA4 stream URL updated, consent-gated formal Contact test collected in the correct Realtime property.

## Explicitly skipped / not verified

The user said to skip the actual mail receipt test. Do not treat it as a blocker or ask again during this delivery. Enabled configuration does not prove delivery. This is inbound forwarding; domain-address sending has not been configured. No test messages were sent.

Google indexing/impressions and actual organic traffic remain unverified. No payment or new paid service was used.

## Resume

Read current-delivery-status.md and the existing JSON receipts. Do not recreate the zone, destination, rule, Google property or stream. Check the formal origin, native marker and current Git state before deploying any future authorized change. Keep credentials session-only and the private Gmail out of published source. Recheck sitemap processing and DNSSEC status at scheduled inspections; mail testing only if newly requested.
