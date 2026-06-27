# Neo Perion — Service Page Redesign (Video Hero + Section System)

**Date:** 2026-06-27
**Status:** Approved direction (refined evolution), pending spec review
**Author:** Design pass with senior product-design framing, research-backed

## Goal

Redesign the **"What We Do" service-detail pages** with a **video hero** and a research-backed
section anatomy, built as **one reusable system** so all pages stay consistent and
CMS/data-authorable. Visual direction: **refined evolution** of the current pages (keep layout
DNA + components, elevate), on the existing **black + orange (#F77E0D)** theme.

## Scope

Exactly the **5 services linked in the "What We Do" menu** (`components/Header.tsx`):

| "What We Do" label   | slug                                 | desktop page component   | hero video      |
|----------------------|--------------------------------------|--------------------------|-----------------|
| AI Solutions         | `ai-systems-automation`              | `AiSystemsPage`          | `technical.mp4` |
| Product Development  | `enterprise-product-engineering`     | `EnterpriseProductPage`  | `product.mp4`   |
| Web Development      | `cloud-native-web-platforms`         | `CloudWebPlatformPage`   | `web.mp4`       |
| Cloud & DevOps       | `intelligent-operations-automation`  | `IntelligentOpsPage`     | `cloud.mp4`     |
| Technical Consulting | `startup-to-scale-engineering`       | `StartupScalePage`       | `technical.mp4` |

**Out of scope:** `deep-ai-engineering`, `mobile-product-engineering` (exist in `servicesData.ts`
and have page files, but are NOT in the "What We Do" menu). Leave their pages as-is for now.
Admin pages untouched.

**Pilot:** Build the full system on **AI Solutions** (`AiSystemsPage`, desktop + mobile) first for
live review, then roll the same components to the other 4.

## Existing architecture (must follow)

- Route `/services/:slug` → `ServicePageTemplate.tsx` → `switch(slug)` → bespoke desktop page
  component; mobile path via `MobileGate` / `MobileShell`.
- Content from `ServiceData` (`@/data/servicesData.ts`): `title, tagline, color, description,
  heroHeadline, heroSubtext, overview, ctaText, features[], process[], technologies[], faqs[]`.
- Shared bottom sections already exist: `TechStack`, `BusinessOutcomes`, `EnterpriseCTA`,
  `FooterTransition` (`components/services/shared/`).
- Theme tokens: `bg-background/card/paper` (dark), `text-ink/body/foreground` (light),
  `brand`/`neo-*` (orange). Reuse these — do NOT hardcode new hex.

## Section anatomy (applied to every page, in order)

1. **Video hero** — benefit H1 + subtext + single orange primary CTA, over full-bleed video.
2. **Trust strip** — client logos OR one headline metric, directly under hero.
3. **Problem → Outcome** — name the pain + the impact of solving it (200–300 words).
4. **Capability blocks** — 3–4 benefit-led blocks (from `features[]`), alternating/bento.
5. **How we work** — engagement model (from `process[]`): discovery → build → evaluate → ship.
6. **Proof** — case-study card (Problem → Solution → quantified Result) + stats band.
7. **Testimonials** — curated quotes w/ name, title, company.
8. **FAQ** — from `faqs[]`, rendered with **FAQ JSON-LD schema** for SEO.
9. **Final CTA** — full-width book-a-call block. Plus a persistent **sticky/mobile CTA**.

Existing pages already have 1 (text hero), 4 (features), 5 (process), 8 (FAQ), 9 (CTA). This
redesign: converts hero → video, reorders into the above, and adds the missing high-impact bands
(trust strip, problem→outcome, proof/stats, sticky CTA).

## Video hero — requirements

Component: **`ServiceVideoHero`** (`components/services/ServiceVideoHero.tsx`), reused by all 5.

**Markup / behavior**
- `<video autoplay muted loop playsinline preload="none" poster={heroPoster}>` with `<source>` mp4.
- **Poster is the LCP element** — a real WebP/JPG poster per service; video lazy-loads.
- **Lazy-load**: `preload="none"` + IntersectionObserver (`rootMargin: ~200px`) to start load near
  viewport; pause when offscreen (Page Visibility / IO).
- **`prefers-reduced-motion: reduce`** → do not autoplay; show poster + a manual play control.
- **Legibility scrim**: dark→orange gradient overlay (`from-black/80 via-black/50` + subtle orange
  radial) so H1/subtext are always readable.
- **No CLS**: fixed-height hero container, `position:absolute` video, container bg matches video.
- Content: `tagline` (eyebrow) · `heroHeadline` (H1) · `heroSubtext` · primary CTA (`ctaText` →
  `/contact`). Orange used only on CTA + key numbers.

**Assets:** videos already in `public/images/*.mp4`. Posters: generate/placeholder per service
(`public/images/<service>-poster.jpg`); until provided, use a dark branded placeholder + the
video's first frame.

## Data model changes (backward-compatible)

Extend `ServiceData` with **optional** fields (absence → section is skipped, nothing breaks):

```ts
heroVideo?: string;      // e.g. "/images/technical.mp4"
heroPoster?: string;     // e.g. "/images/ai-poster.jpg"
problem?: { headline: string; body: string };
outcomes?: { value: string; label: string }[];   // stats band
caseStudy?: { client?: string; problem: string; solution: string; result: string };
testimonials?: { quote: string; name: string; title: string; company?: string }[];
trustLogos?: string[];   // logo asset paths, optional
```

Populate `heroVideo`/`heroPoster` for the 5 in-scope services per the mapping table. Other fields:
fill from existing copy where possible; where genuine numbers/names are required, insert
**clearly-marked placeholders** (e.g. `result: "[ADD METRIC]"`) — **do not invent metrics or
client names.**

## Components to build (one system)

- `ServiceVideoHero` — the video hero (above).
- `ServiceTrustStrip` — logos / headline stat.
- `ServiceProblemOutcome` — problem→outcome band.
- `ServiceCapabilities` — benefit blocks (refine existing features grid).
- `ServiceEngagement` — "how we work" (refine existing process).
- `ServiceProof` — case-study card + stats band.
- `ServiceTestimonials` — quote cards.
- `ServiceFaq` — FAQ + JSON-LD (extend existing `ServiceFaq.tsx`).
- `ServiceStickyCta` — persistent CTA.
- Reuse existing `TechStack`, `BusinessOutcomes`, `EnterpriseCTA`, `FooterTransition`.

All components: optional props, skip-when-empty, theme tokens only, desktop + mobile.

## Content approach

Keep existing per-service copy; **restructure** into the anatomy and sharpen H1s to benefit-led.
No fabricated stats/logos/testimonials — placeholders where real data is needed.

## Visual execution kit (grounded in real reference pages)

Reference pages read: stripe.com/payments, stripe.com/connect, linear.app,
vercel.com/solutions/web-apps, basicagency.com, cloudflare.com/products/workers.

- **Layer the dark, don't flatten it:** page `#0A0A0B` → card `#111113` → hover `#1A1A1D`.
  Separate cards with **hairline borders** (`border border-white/[0.08]`), not shadows
  (shadows vanish on near-black). Maps to existing `bg-background`/`bg-card`/`border-hairline`.
- **Ration orange:** accent only on (a) primary CTA fills, (b) ONE big stat number per region,
  (c) focus/hover rings. Everything else white/gray. This is what reads "premium, not loud."
- **Hero:** full-bleed split — copy left, video/visual right; OR full-bleed video with a
  **left→right legibility scrim** `linear-gradient(90deg, rgba(10,10,11,0.85), transparent 60%)`
  behind the copy. Headline ≤9 words, benefit-led; type `clamp(2.5rem,5vw,4rem)`, leading ~1.05.
  Exactly 2 CTAs (orange primary + ghost secondary).
- **Capability sections = a product tour:** each is a verb-led H2 + one line + a real
  screenshot/diagram on the alternating side (Linear pattern).
- **Open with proof:** grayscale logo row directly under hero, then a 3–4 number stat band with
  orange figures tied to named outcomes (Vercel/Stripe Connect pattern).
- **Conventions:** cards `rounded-xl` (12px), section padding `py-24`–`py-32`, card padding
  `p-6`/`p-8`; hover = tonal lift + orange hairline, no scale-bounce. One sans family; hierarchy
  by size/weight, not color. Stat numbers `clamp(2.5rem,4vw,3.5rem)`/700/orange; eyebrows
  `0.75rem` uppercase tracking-widest.

## Success criteria

- AI Solutions pilot renders the full anatomy, desktop + mobile, on the black+orange theme.
- Hero: poster is LCP, video autoplays muted/looped/inline, respects reduced-motion, text legible.
- No hardcoded light surfaces or blue; tokens only.
- `ServiceData` change is additive; the 2 out-of-scope pages and all other pages still build.
- After pilot approval, same components applied to the other 4 with per-service data only.

## Non-goals

- No new state/data libraries. No CMS schema migration (data file only).
- No redesign of the `/services` overview hub in this pass (can follow later).
- No real metrics/testimonials invented.
