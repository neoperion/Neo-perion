# Phase 7 — Measurement & Maintenance Runbook

Owner-executable. No code paths here. Pair this doc with `frontend/scripts/seo-check.mjs` (CI guard) and the shipped Phase 7 changes (`SITE_URL` now `https://www.neoperion.com`, unconditional GA4 loader removed, sitemap served directly from `frontend/public/sitemap.xml`).

## 1. Canonical host and redirects

- Preferred host: `https://www.neoperion.com`. Apex `https://neoperion.com` 301-redirects to www at the edge.
- Confirm DNS or CDN (Cloudflare / Vercel) is configured to redirect apex to www with HTTPS.
- In Google Search Console → Settings → Preferred domain → select `www`.

## 2. Google Search Console

- Verify ownership via the existing `<meta name="google-site-verification" content="nIQl-Botzx-FdIdKpwCOm4TKCUTwBplxjJwFPvc5OCI">` in `frontend/index.html`.
- Submit `https://www.neoperion.com/sitemap.xml` (Sitemaps → Add/test sitemap).
- URL Inspection spot-check (Request Indexing) for:
  - `https://www.neoperion.com/`
  - `https://www.neoperion.com/services`
  - `https://www.neoperion.com/company/about`
  - `https://www.neoperion.com/for-us-clients`
  - `https://www.neoperion.com/industries/startups`
  - `https://www.neoperion.com/company/case-studies`
  - `https://www.neoperion.com/company/blog/how-much-does-custom-web-platform-cost-india` (one of the Phase 6 posts)
  - `https://www.neoperion.com/contact`
- Coverage report: expect previously de-indexed sub-pages to move from "Duplicate, Google chose different canonical" to "Indexed" within 24–72h after the www-aligned deploy.

## 3. Bing Webmaster Tools

- Site ownership: owner supplies an `msvalidate.01` token. When available, add `<meta name="msvalidate.01" content="...">` next to the existing Google meta in `frontend/index.html`. Do not commit a token to the repo.
- Submit `https://www.neoperion.com/sitemap.xml`.
- URL Inspection for the same five URLs as GSC.
- Bing feeds ChatGPT search, so this doubles as a GEO input.

## 4. AI / generative-engine spot-check (monthly)

`robots.txt` already allows `GPTBot`, `ClaudeBot`, `anthropic-ai`, `Claude-Web`, `PerplexityBot`, `Google-Extended`, `CCBot`. Run the same five queries monthly in:

- ChatGPT (web + browsing, when available)
- Perplexity (Pro/Online mode)
- Claude.ai (with web search enabled)
- Google AI Overviews (in a US-served Google session)
- Bing Chat (Copilot) — overlap with §3

Seed questions (use verbatim, copy from `docs/MEASUREMENT.md`):

1. `Neo Perion Solutions review`
2. `AI development companies in Tamil Nadu`
3. `affordable AI automation agency India for startups`
4. `How much does a custom web platform cost in India` (Phase 6 post 1)
5. `Freelancer vs agency vs in-house for an MVP` (Phase 6 post 3)

Record per engine:

| Date | Engine | Question | Cited? | Cited URL(s) | Notes |
|---|---|---|---|---|---|

Reconcile against `docs/MEASUREMENT.md` again the same week, and file gaps as off-site registration work in the project backlog (LinkedIn, Clutch, GoodFirms, GitHub org — all still owner off-site per Phase 6 memory).

## 5. Analytics handoff (GA4 + Microsoft Clarity)

Required env vars on Vercel (project-level, not committed):

- `VITE_SITE_URL=https://www.neoperion.com`
- `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
- `VITE_CLARITY_ID=xxxxxxxxxx`

Verify:

1. Open `https://www.neoperion.com/` in an incognito window with DevTools → Network.
2. Click "Accept all cookies" in the cookie banner.
3. GA4 DebugView should show a `page_view` event with `page_path` matching the React Router path (e.g. `/`, `/services`).
4. Microsoft Clarity → Recordings tab should show the same session within ~30s.
5. Re-load, click "Reject" on cookies, navigate. No requests to `googletagmanager.com` or `clarity.ms`.
6. Run `npm run seo:check` locally — it should report no hardcoded `G-[A-Z0-9]{6,}` IDs in source or `dist/`.

If neither loads:

- Confirm env vars are set on Vercel and a redeploy was triggered after the change.
- Clear `localStorage` key `np_cookie_consent` and re-accept to re-init the loaders.
- Confirm `frontend/src/shared/analytics.ts` is the only GA4/Clarity loader after Phase 7 (the inline GA4 block in `index.html` has been removed).

## 6. Sitemap and robots maintenance

- New blog/case-study ships → append `<url>` entry to `frontend/public/sitemap.xml` with today's `<lastmod>` and run `npm run seo:check` locally before merging.
- Route removed → drop the `<url>` entry.
- Run `npm run seo:check` in CI on every PR touching `frontend/public/sitemap.xml`, `frontend/public/robots.txt`, `frontend/index.html`, `frontend/src/`, or `frontend/scripts/seo-check.mjs` (the CI workflow already runs it after build).
- Quarterly: validate the entire sitemap XML parses and every `<loc>` is `https://www.neoperion.com/...`.

## 7. Lighthouse baseline

The CI step uploads a Lighthouse report to temporary public storage (no assertions). After two weeks of stable weekly runs, review `frontend/dist/` performance budgets and add a real assertion block to `.github/workflows/frontend.yml` (separate, follow-up work — not part of Phase 7).

Local manual: `npx vite preview` then `lighthouse http://localhost:4173 --view --preset=desktop` (mobile preset default). Record scores in the project memory after each run.

## 8. Known deferred work (do NOT silently fix)

These remain out of scope for Phase 7; track in the project backlog:

- DNS + mailbox setup for `hello@neoperion.com` — blocks backend Resend lead capture.
- Off-site registrations (LinkedIn company page, Clutch, GoodFirms, GitHub org, Crunchbase) — owner task, deferred after Phase 7.
- `BlogDetailPage.tsx` still uses path `/blog/<slug>` for canonicals/JSON-LD, while `BlogPost.tsx`, `sitemap.xml`, and the route table use `/company/blog/<slug>`. Schema URLs and schema image references in this file are now `https://www.neoperion.com`; the path divergence is documented but not changed in this phase.
- Stats drift (years, projects, clients, founding year) per `open-conflicts.md`.
- FounderRotator.tsx placeholder, `BlogPage.tsx` newsletter no-op, About page black-on-black headings, dead `frontend/src/routes/index.tsx`, stale `backend/supabase/seeds/seed.sql`, broad admin RLS policies.
- `VITE_SUPABASE_SERVICE_KEY` already leaked to the browser via `frontend/.env.local`. Project owner action: rotate in Supabase, remove from `frontend/.env*`, rebuild `frontend/dist/`.
