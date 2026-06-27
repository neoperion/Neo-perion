# Service Pages Video Hero — Implementation Plan

> **For agentic workers:** Implement task-by-task. Steps use checkbox (`- [ ]`) syntax.
> **No test runner exists** in this repo (no `test`/`typecheck` script). "Verify" = `cd frontend && npm run build` succeeds (this is the only TS check) + visual review at `npm run dev`. **Do NOT commit** unless the user explicitly asks (project memory: no-auto-build-or-commit — building for verification is allowed, committing is not).

**Goal:** Give the 5 "What We Do" service-detail pages a video hero and a research-backed, reusable section system on the existing black + orange theme, piloted on AI Solutions then rolled to the other 4.

**Architecture:** Build a set of reusable presentational components in `components/services/` driven by optional fields on `ServiceData`. Each desktop service page composes these in the canonical order. Mobile keeps the existing `MobileShell` path with a mobile video hero. Data-only per-service customization.

**Tech Stack:** Vite + React 18 + TS (strict off), Tailwind 3 (`neo-*`/`brand` tokens, all orange), lucide-react, framer-motion (already present), React Router.

## Global Constraints

- Scope = exactly these 5 slugs: `ai-systems-automation`, `enterprise-product-engineering`, `cloud-native-web-platforms`, `intelligent-operations-automation`, `startup-to-scale-engineering`. Leave `deep-ai-engineering`, `mobile-product-engineering`, and all admin pages untouched.
- Theme tokens only — no hardcoded blue; no solid light surfaces. Layered dark: page `bg-background`/`#0A0A0B`, card `bg-card`/`#121113`, hover lift `#1A1A1D`; hairline borders `border-white/[0.08]` (or `border-hairline`); `rounded-xl`; section padding `py-24`–`py-32`.
- **Ration orange:** primary CTA fills, ONE big stat number per region, focus/hover rings only.
- Video hero: `autoplay muted loop playsinline preload="none"`, poster = LCP, IntersectionObserver lazy-load + pause offscreen, `prefers-reduced-motion` → poster + manual play, legibility scrim.
- `ServiceData` additions are OPTIONAL; absent field → section renders nothing (no crash). The 2 out-of-scope pages and every other page must still build.
- Headlines ≤9 words, benefit-led. No invented metrics/logos/testimonials — use clearly-marked `[ADD …]` placeholders.

---

### Task 1: Extend the `ServiceData` model + populate the 5 in-scope services

**Files:**
- Modify: `frontend/src/data/servicesData.ts` (interface `ServiceData` ~line 3-19; the 5 in-scope entries)

**Interfaces:**
- Produces: optional fields on `ServiceData` consumed by Tasks 2-9:
  ```ts
  heroVideo?: string;
  heroPoster?: string;
  problem?: { headline: string; body: string };
  outcomes?: { value: string; label: string }[];
  caseStudy?: { client?: string; problem: string; solution: string; result: string };
  testimonials?: { quote: string; name: string; title: string; company?: string }[];
  trustLogos?: { src: string; alt: string }[];
  ```

- [ ] **Step 1:** Add the optional fields above to the `ServiceData` interface (after `faqs`).
- [ ] **Step 2:** For each of the 5 in-scope entries, set `heroVideo`/`heroPoster` per the mapping:
  - `ai-systems-automation` → `/images/technical.mp4`, poster `/images/services/ai-poster.jpg`
  - `enterprise-product-engineering` → `/images/product.mp4`, poster `/images/services/product-poster.jpg`
  - `cloud-native-web-platforms` → `/images/web.mp4`, poster `/images/services/web-poster.jpg`
  - `intelligent-operations-automation` → `/images/cloud.mp4`, poster `/images/services/cloud-poster.jpg`
  - `startup-to-scale-engineering` → `/images/technical.mp4`, poster `/images/services/consulting-poster.jpg`
- [ ] **Step 3:** For `ai-systems-automation` only (the pilot), populate `problem`, `outcomes` (3-4 items; use `[ADD METRIC]` where a real number is unknown — e.g. `{ value: "[ADD]", label: "Faster document retrieval" }`), `caseStudy` (Problem/Solution/Result with `[ADD …]` placeholders), and one `testimonials` entry with `[ADD NAME]`/`[ADD TITLE]` placeholders. Leave the other 4 services' optional content fields unset for now (filled in Task 11).
- [ ] **Step 4: Verify** `cd frontend && npm run build` → succeeds. (Posters may 404 at runtime until added; that's fine — `<img>`/poster will just show the container bg.)

---

### Task 2: `ServiceVideoHero` component (the centerpiece)

**Files:**
- Create: `frontend/src/components/services/ServiceVideoHero.tsx`

**Interfaces:**
- Consumes: `ServiceData` fields `tagline, heroHeadline, heroSubtext, ctaText, heroVideo, heroPoster`.
- Produces: `export function ServiceVideoHero({ service, secondaryCtaLabel, secondaryCtaHref }: ServiceVideoHeroProps)` — full-bleed hero `<section>`.

- [ ] **Step 1:** Implement the component with this behavior (complete code):

```tsx
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import type { ServiceData } from "@/data/servicesData";

interface ServiceVideoHeroProps {
  service: ServiceData;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function ServiceVideoHero({ service, secondaryCtaLabel = "See case studies", secondaryCtaHref = "/company/case-studies" }: ServiceVideoHeroProps) {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [manualPlay, setManualPlay] = useState(false);

  // Respect reduced-motion: show poster, offer manual play
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Lazy-load + play when near viewport; pause when offscreen
  useEffect(() => {
    if (reducedMotion && !manualPlay) return;
    const el = sectionRef.current;
    const vid = videoRef.current;
    if (!el || !vid || !service.heroVideo) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            if (!vid.src) vid.src = service.heroVideo as string;
            vid.play().catch(() => {});
          } else {
            vid.pause();
          }
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reducedMotion, manualPlay, service.heroVideo]);

  const showVideo = service.heroVideo && (!reducedMotion || manualPlay);

  return (
    <section ref={sectionRef} className="relative min-h-[88vh] flex items-center overflow-hidden bg-[#0A0A0B] border-b border-white/[0.08]">
      {/* Media layer */}
      <div className="absolute inset-0 z-0">
        {service.heroPoster && (
          <img src={service.heroPoster} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
        )}
        {showVideo && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            autoPlay
            preload="none"
            poster={service.heroPoster}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>
      {/* Legibility scrim: left-to-right + bottom, with subtle orange */}
      <div aria-hidden className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(10,10,11,0.92)_0%,rgba(10,10,11,0.55)_45%,rgba(10,10,11,0.15)_100%)]" />
      <div aria-hidden className="absolute inset-0 z-10 bg-[radial-gradient(60%_80%_at_85%_100%,rgba(247,126,13,0.12),transparent_70%)]" />

      {/* Content */}
      <div className="container relative z-20 mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.25em] text-brand">{service.tagline}</p>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-white">
            {service.heroHeadline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-neutral-300 leading-relaxed">{service.heroSubtext}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button onClick={() => navigate("/contact")} className="inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-4 text-sm font-bold text-[#0A0A0B] transition-colors hover:bg-[#FB8C2A]">
              {service.ctaText} <ArrowRight size={16} />
            </button>
            <button onClick={() => navigate(secondaryCtaHref)} className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-7 py-4 text-sm font-bold text-white transition-colors hover:border-brand/50">
              {secondaryCtaLabel}
            </button>
            {service.heroVideo && reducedMotion && !manualPlay && (
              <button onClick={() => setManualPlay(true)} className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 hover:text-white">
                <Play size={16} /> Play video
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify** `npm run build` succeeds.
- [ ] **Step 3:** Visual check at `/services/ai-systems-automation` once wired (Task 10): poster shows immediately, video fades in, text legible over any frame, reduced-motion shows Play button.

---

### Task 3: `ServiceTrustStrip` (logo row / headline stat)

**Files:**
- Create: `frontend/src/components/services/ServiceTrustStrip.tsx`

**Interfaces:**
- Consumes: `service.trustLogos?`.
- Produces: `export function ServiceTrustStrip({ service }: { service: ServiceData })`. Returns `null` if no `trustLogos`.

- [ ] **Step 1:** Implement: a thin band under the hero. If `trustLogos` present, render a single grayscale row (`opacity-60 grayscale hover:grayscale-0`); else render `null`. Use `bg-[#0A0A0B] border-b border-white/[0.08] py-10`, label eyebrow "Trusted by teams shipping real products" in `text-neutral-500`. Logos `<img>` `h-7 w-auto`.
- [ ] **Step 2: Verify** build succeeds.

---

### Task 4: `ServiceProblemOutcome` (problem → outcome band)

**Files:**
- Create: `frontend/src/components/services/ServiceProblemOutcome.tsx`

**Interfaces:**
- Consumes: `service.problem?`. Produces `ServiceProblemOutcome({ service })`; `null` if absent.

- [ ] **Step 1:** Implement a 2-column band (`py-24`): left = eyebrow "THE PROBLEM" + `problem.headline` (H2 `clamp(1.75rem,3vw,2.5rem)`); right = `problem.body` in `text-neutral-300 leading-relaxed`. Card-free, generous whitespace. `bg-[#0A0A0B]`.
- [ ] **Step 2: Verify** build succeeds.

---

### Task 5: `ServiceStatsBand` (outcome stats — orange numbers)

**Files:**
- Create: `frontend/src/components/services/ServiceStatsBand.tsx`

**Interfaces:**
- Consumes: `service.outcomes?`. Produces `ServiceStatsBand({ service })`; `null` if absent/empty.

- [ ] **Step 1:** Implement a 3-4 column grid on `bg-card`/`#121113` `border-y border-white/[0.08] py-16`. Each: `value` in `text-brand font-bold text-[clamp(2.5rem,4vw,3.5rem)]`, `label` in `text-neutral-400 text-sm mt-2`. This is the ONLY orange-number region rule in action.
- [ ] **Step 2: Verify** build succeeds.

---

### Task 6: `ServiceCapabilities` (verb-led capability tour)

**Files:**
- Create: `frontend/src/components/services/ServiceCapabilities.tsx`

**Interfaces:**
- Consumes: `service.features[]` (existing: `{title, description}[]`), `service.overview`. Produces `ServiceCapabilities({ service })`.

- [ ] **Step 1:** Implement: section eyebrow "WHAT WE DO" + H2 from `service.overview` (or a fixed "Capabilities"). Render `features` as alternating rows (icon/diagram block on alternating side via `i % 2`) OR a bento grid of `border border-white/[0.08] bg-card rounded-xl p-8 hover:border-brand/30` cards (use the grid — simpler, matches existing). Card: lucide icon in `text-brand`, `title` H3 `text-white`, `description` `text-neutral-400`. `py-24`.
- [ ] **Step 2: Verify** build succeeds.

---

### Task 7: `ServiceProof` (case study card) + `ServiceTestimonials`

**Files:**
- Create: `frontend/src/components/services/ServiceProof.tsx`
- Create: `frontend/src/components/services/ServiceTestimonials.tsx`

**Interfaces:**
- Consumes: `service.caseStudy?`, `service.testimonials?`. Each returns `null` if its data absent.

- [ ] **Step 1:** `ServiceProof`: a horizontal card `bg-card border border-white/[0.08] rounded-xl p-8/10` with three labeled blocks — "Challenge" (`caseStudy.problem`), "Approach" (`caseStudy.solution`), "Result" (`caseStudy.result`, result value emphasized `text-brand`). Eyebrow "PROOF". `py-24`.
- [ ] **Step 2:** `ServiceTestimonials`: 1-3 quote cards `bg-card border border-white/[0.08] rounded-xl p-8`; `quote` `text-lg text-neutral-200`; footer `name` (white) · `title`/`company` (`text-neutral-400`). `py-20`.
- [ ] **Step 3: Verify** build succeeds.

---

### Task 8: `ServiceFaq` with FAQ JSON-LD schema

**Files:**
- Modify: `frontend/src/components/services/ServiceFaq.tsx` (read first; extend, don't break existing usage)

**Interfaces:**
- Consumes: `service.faqs[]`. Produces same component API as today + injects `<script type="application/ld+json">` FAQPage schema.

- [ ] **Step 1:** Read the existing `ServiceFaq.tsx` and confirm its props. Keep its current visual/API. Add a JSON-LD `FAQPage` object built from `service.faqs` (map each to `{ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } }`), rendered via the existing `SEO`/`jsonLd` pattern if the page passes it, OR a local `<script>`.  Ensure dark theme (orange accents).
- [ ] **Step 2: Verify** build succeeds; FAQ still renders on existing pages that use it.

---

### Task 9: `ServiceStickyCta` (persistent CTA)

**Files:**
- Create: `frontend/src/components/services/ServiceStickyCta.tsx`

**Interfaces:**
- Consumes: `service.ctaText`. Produces a fixed bottom-right (desktop) / bottom bar (mobile) CTA that appears after scrolling past the hero.

- [ ] **Step 1:** Implement with an IntersectionObserver or scroll listener: hidden until user scrolls > 1 viewport; then a `fixed` `rounded-full bg-brand text-[#0A0A0B] px-6 py-3 shadow-lg z-40` button → `/contact`. Respect safe-area on mobile (`pb-safe`). Use `z-mobile-nav`-compatible z-index.
- [ ] **Step 2: Verify** build succeeds.

---

### Task 10: Compose the AI Solutions pilot page (desktop + mobile)

**Files:**
- Modify: `frontend/src/pages/services/AiSystemsPage.tsx`
- Create: `frontend/src/components/services/index.ts` (barrel export of the new components)

**Interfaces:**
- Consumes: all components from Tasks 2-9 via the barrel.

- [ ] **Step 1:** Add a barrel `components/services/index.ts` re-exporting `ServiceVideoHero, ServiceTrustStrip, ServiceProblemOutcome, ServiceStatsBand, ServiceCapabilities, ServiceProof, ServiceTestimonials, ServiceStickyCta` (+ keep existing shared exports working).
- [ ] **Step 2:** In `AiSystemsPage` desktop branch, replace the current text hero with `<ServiceVideoHero service={service} />` and reorder the body to: `ServiceTrustStrip` → `ServiceProblemOutcome` → `ServiceStatsBand` → `ServiceCapabilities` → existing AI Maturity slider (keep — it's a strong bespoke element, place under capabilities as the "how it works") → `ServiceProof` → `ServiceTestimonials` → existing `TechStack` → `ServiceFaq` (add if not present) → `BusinessOutcomes`/`EnterpriseCTA` (final CTA) → `ServiceStickyCta` → `FooterTransition`. Keep `SEO` + JSON-LD.
- [ ] **Step 3:** In the mobile (`MobileShell`) branch, swap the mobile hero for a mobile video hero (reuse `ServiceVideoHero` — it's responsive; verify it fits, else add a `compact` prop) and render the same new sections (they're responsive single-column). Keep the mobile AI maturity slider.
- [ ] **Step 4: Verify** `npm run build` succeeds; run `npm run dev` and review `/services/ai-systems-automation` desktop + mobile (DevTools device mode). Check: video hero, scrim legibility, orange rationed, no light blocks, sticky CTA appears, FAQ schema in DOM.
- [ ] **Step 5: PILOT REVIEW GATE** — stop and get user approval before rolling out.

---

### Task 11: Roll out to the other 4 service pages

**Files:**
- Modify: `frontend/src/pages/services/EnterpriseProductPage.tsx`, `CloudWebPlatformPage.tsx`, `IntelligentOpsPage.tsx`, `StartupScalePage.tsx`
- Modify: `frontend/src/data/servicesData.ts` (populate optional content fields for these 4)

**Interfaces:**
- Consumes: same components; per-service data only.

- [ ] **Step 1:** For each of the 4, populate `problem`, `outcomes`, `caseStudy`, `testimonials` in `servicesData.ts` from existing copy + `[ADD …]` placeholders for real numbers/names.
- [ ] **Step 2:** For each page, apply the same composition as the AI Solutions pilot (video hero + section order), preserving any strong bespoke section that page already has (place it as the "how it works"/deep-dive slot).
- [ ] **Step 3: Verify** `npm run build` succeeds; visually review all 4 desktop + mobile.
- [ ] **Step 4:** Confirm the 2 out-of-scope pages (`deep-ai-engineering`, `mobile-product-engineering`) still build and render unchanged.

---

## Self-Review

- **Spec coverage:** Hero video (T2), trust strip (T3), problem→outcome (T4), stats (T5), capabilities (T6), proof+testimonials (T7), FAQ+schema (T8), sticky CTA (T9), data model (T1), pilot (T10), rollout (T11). Engagement-model/"how it works" = existing AI maturity slider/process reused in T10. All spec sections covered.
- **Placeholder scan:** Content placeholders are intentional (`[ADD …]`) and flagged; no plan-step placeholders.
- **Type consistency:** Component names match across T2-T10 barrel; `ServiceData` optional fields defined in T1 are consumed with the same names downstream.
- **No-test-runner adaptation:** every task verifies via `npm run build` + visual review, not unit tests (none exist).
