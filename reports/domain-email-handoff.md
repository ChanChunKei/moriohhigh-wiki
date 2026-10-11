# Formal domain and email forwarding

Updated 2026-10-11 22:28 Asia/Shanghai.

The user owns `moriohhighguide.wiki` at Spaceship and explicitly requested a domain email that forwards to their provided Gmail. Public address: **contact@moriohhighguide.wiki**. Keep the private destination out of published source and reports.

## Completed and verified

- Cloudflare Free zone `c917d0811a9b554a510282eaecdbd91e` created through the existing authenticated dashboard; the API token could not create zones, but can read/write this newly created zone.
- Assigned nameservers: `armfazh.ns.cloudflare.com` and `laura.ns.cloudflare.com`.
- Existing Pages project `moriohhigh-wiki` associated with the apex custom domain, domain ID `4ca17326-6c68-4527-a593-ae0321284775`.
- Backed up and replaced the two imported parking A records with proxied apex CNAME `moriohhigh-wiki.pages.dev`. No other domains changed.
- The user-provided destination already had verified status in the Cloudflare account, since 2026-09-13. No extra verification email needed.
- Exact `contact@` forward rule `d4b11591c9ac45c39caffffd1d50d61e` saved enabled and read back; it points to the correct private verified destination. Catch-all remains unchanged/disabled.

## External blocker and precise next action

Public NS still resolves to `launch1.spaceship.net` / `launch2.spaceship.net`. The Cloudflare zone is pending. The Spaceship browser session is logged out. A user-input request is pending for local login or manual nameserver change; no password requested.

In Spaceship domain management, replace the existing nameservers for **moriohhighguide.wiki only** with:

1. `armfazh.ns.cloudflare.com`
2. `laura.ns.cloudflare.com`

Wait for actual activation, then enable Cloudflare Email Routing. The attempted enable returned HTTP403 / code2009 / **Active zone required**; a saved enabled rule alone does not mean mail can be received. Routing currently has no live delivery proof.

## Resume without reinitializing

1. Read `domain-binding.json`, `domain-web-dns.json`, `pages-custom-domain.json`, and `email-routing.json`.
2. Re-read public NS and the exact Cloudflare zone. After the zone reports active, POST its `/email/routing/dns` endpoint to add/lock the provider's real MX/SPF/DKIM records. Do not invent MX priorities or keys.
3. Re-read service ready/enabled status and the existing contact rule. Do not create duplicate rules or destinations.
4. Verify public MX/TXT and the user's received test message using a separate authorized sender. Until then distinguish configuration verification from end-to-end delivery.
5. Publish the domain email in native `src/config/site.ts` only after the service is enabled. No Gmail in public site contact information.
6. Once Pages custom domain and HTTPS are actually active, switch the site origin, build/deployment audit guards and CI environment to the formal domain; rebuild, deploy and recheck all Canonical/Sitemap/robots/HTTPS routes. Existing Pages production stays valid while waiting.
7. Add/verify the formal GSC property and submit its sitemap; update the existing GA4 web stream URL, reusing property/stream/Measurement ID. Do not create duplicate Google properties.
8. Update delivery status and maintenance checks using observed results; Google indexing/exposure and mail delivery are not implied by API success.

No source-site or production-origin changes were made while the destination domain/email remained unreachable. Receipts are sanitized; credentials remain session-only.
