# Neo Perion — Full Redesign Design Spec

**Date:** 2026-06-21
**Status:** Pass 1 design (awaiting implementation plan)
**Direction:** Linear / Vercel restraint
**Scope decision:** Whole application, sequenced into 4 passes. This spec details **Pass 1**; Passes 2–4 are recorded as roadmap.

---

## 1. Goal & Context

Neo Perion is a marketing + admin web app (Vite + React + TS + Tailwind + shadcn) for an AI/product-engineering firm. A full design audit found the public site reads as "AI-generated template" and lacks the proof a buyer needs to commit to a $50k+ engagement.

This redesign makes the site feel handcrafted by a senior designer, removes the template signals, and adds real social proof — committing to a **Linear/Vercel restraint** aesthetic that fits the firm's "senior architects, no fluff" positioning.

### Audit flaws this redesign resolves (Pass 1)

1. Card monoculture — 5 consecutive identical "bordered white card grid" sections.
2. AI-template signals — eyebrow kicker repeated identically on ~8 sections, uniform layouts.
3. Color chaos — 4 competing blues (`#2563EB`, `neo` ramp `#1E5DFF→#74C8FF`, cyan `#06B6D4`, ClickSpark `#00d4ff`), rainbow icons in WhyNeoPerion, heavy gradient-text + glow utilities.
4. Zero social proof — no client logos, no testimonials on home, no team/faces, no real product screenshots, no stats band.
5. Fake terminal in hero (cliché, buzzword copy).
6. Redundant CTAs — Hero + HomeCTA + Footer all repeat the same two buttons/words.
7. Monotonous vertical rhythm — every section `py-24`.
8. 3 button languages + inconsistent radii (`rounded-xl/2xl/3xl/32px`).
9. Pricing/Engagement tiers with no price anchors.
10. No FAQ — buyer objections unhandled.
11. Footer — broken legal links (Privacy + Terms both 404 to `/security`), decorative blur blob, gradient text, abrupt light→dark tonal cliff.
12. Two design languages — a separate dark "liquid glass" `MobileHome` swapped in via `MobileGate`.

---

## 2. Scope: Pass Sequencing

| Pass | Covers |
|---|---|
| **Pass 1 (this spec)** | Design-system foundation + homepage (12 sections) + navbar + footer + retire MobileHome for `/` |
| Pass 2 | Inner pages — Services, Industries, Case Studies, About, Contact, Careers, Blog, Technologies, Security, Newsletter, etc. (inherit foundation) |
| Pass 3 | Mobile reconciliation across the app (unify away from the dark-glass system) |
| Pass 4 | Polish + cross-app QA + real legal pages if not already added |

Each pass is reviewed and approved before the next begins.

---

## 3. Design-System Foundation (Pass 1, built first)

Everything else depends on this. Implemented via CSS variables in `frontend/src/index.css` + `frontend/tailwind.config.ts`.

### 3.1 Color

Single accent, single ink, disciplined neutrals. **Remove** cyan `--accent #06B6D4`, ClickSpark `#00d4ff`, the multi-stop `neo` ramp usage, all gradient-text utilities (`text-neo-gradient`, `text-neo-numbers`), and blue-glow shadows (`shadow-glow`, `neo-glow-*`).

| Token | Value | Use |
|---|---|---|
| `brand` | `#1E5DFF` | primary buttons, links, small accents, focus rings — used sparingly |
| `brand-hover` | `#1A52E6` | hover (darken, never brighten) |
| `brand-tint` | `rgba(30,93,255,.06)` | faint fills |
| `ink` | `#0A0A0B` | headings |
| `body` | `#3F3F46` | paragraphs |
| `muted` | `#71717A` | captions / labels |
| `faint` | `#A1A1AA` | placeholder / disabled |
| `hairline` | `#E4E4E7` | borders |
| `canvas` | `#FAFAFA` | section background |
| `paper` | `#FFFFFF` | cards |
| `navy` | `#08090D` | the single dark surface (accent cell + closing CTA band) |

Rules: headings are **ink, not blue**. Blue is rare by design. One dark surface tone only.

### 3.2 Typography (Inter / Inter Tight — already loaded)

Use a real scale (the `display-*` tokens already exist but are bypassed today).

| Role | Size / line-height | Weight | Tracking | Measure |
|---|---|---|---|---|
| Display (hero) | `clamp(40px,7vw,64px)` / 1.05 | 700 | −0.03em | — |
| H2 (section) | `clamp(28px,4vw,40px)` / 1.1 | 700 | −0.02em | — |
| H3 (card) | 22px / 1.25 | 600 | −0.01em | — |
| Eyebrow | 12px / 1 | 600 | +0.08em | uppercase |
| Lead | 18px / 1.6 | 450 | 0 | max 36ch |
| Body | 16px / 1.6 | 450 | 0 | max 65ch |
| Small | 14px / 1.5 | 500 | 0 | — |
| Caption | 13px / 1.5 | 500 | 0 | — |

Rules: **eyebrow used on ≤3 sections**, not every one; tracking `+0.08em` (was `0.25em`). Two body sizes max. Cap measures.

### 3.3 Spacing & Radius

Single 8pt scale: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`.

Section vertical rhythm (breaks the universal `py-24`):
- Hero: `py-32` (128)
- Primary sections: `py-24` (96)
- Supporting sections: `py-20` (80)
- Closing CTA: `py-32` (128)

Radii: **12px controls, 16px cards** only. Retire `rounded-2xl/3xl` and the 32px `.premium-card`.
Container: `max-w-[1200px]` + `px-6 lg:px-8` (keep existing).

### 3.4 Motion

- One easing: `cubic-bezier(.4,0,.2,1)`, ~200ms.
- One reveal: opacity 0→1 + translateY 16px→0, children staggered 60ms (keep existing `.reveal` mechanism, standardize).
- Hover differentiated by element type (see components), **not** a universal `-translate-y-0.5` on everything.
- **Remove:** `ClickSpark` wrapper, decorative animated SVGs in WhyNeoPerion, `nav-float` / `crystal-float` / `orb-*` keyframes from active use.
- Honor `prefers-reduced-motion` (verify JS-driven animations pause, not just CSS).

---

## 4. Shared Component System (Pass 1, built second)

One source of truth per primitive. Location: `frontend/src/components/ui/` (extend) and a new `frontend/src/components/sections/` for composed marketing blocks. Function components, named exports, `cn()` for classes, project conventions.

| Component | Purpose | Replaces |
|---|---|---|
| `Button` | variants `primary` (brand solid) / `secondary` (outline) / `ghost` (text); sizes sm/md/lg | `.btn-primary` CSS, inline-black hero buttons, `bg-neo-gradient` footer button |
| `Card` | roles `surface` / `feature` / `metric`; hover = border-brighten + soft shadow | the single bordered-white-card-for-everything |
| `Section` | consistent container + padding-rhythm variant prop | ad-hoc `<section className="py-24 ...">` |
| `SectionHeading` | optional `Eyebrow` + H2 + optional lead | duplicated eyebrow/heading markup |
| `Eyebrow` | restrained kicker (≤3 uses) | repeated `text-[10px] tracking-[0.25em]` |
| `Badge` / `Pill` | small status/labels | inline pill markup |
| `BrowserFrame` | wraps a screenshot in subtle browser chrome | (new) |
| `LogoWall` | monochrome client-logo row | (new) |
| `Testimonial` | lead pull-quote (face + logo) + secondary quotes | (new on home) |
| `StatBand` | row of real credibility metrics | (new) |
| `FAQ` | Radix accordion of objection-handling Q&A | (new; `@radix-ui` accordion already installed) |

---

## 5. Homepage Information Architecture (Pass 1, built third)

Responsive-first (mobile → desktop), single codebase for all screens. New order leads with proof.

1. **Hero** — headline + one brand-blue primary CTA + real product screenshot in `BrowserFrame` (replaces fake terminal). "See our work" as a quiet text link. `min-h-[80vh]`.
2. **Logo Wall** — "Trusted by" + 5–6 monochrome logos. *(new)*
3. **Who We Are** — 2-sentence positioning + founder/team photo + 3 stats (`StatBand`). *(new)*
4. **Services** — asymmetric: 1 lead service (with screenshot) + 3 text rows with hairline dividers. **Breaks the card grid.**
5. **Why Neo Perion** — keep bento structure; **monochrome icons**; remove decorative SVGs; the one dark cell = `navy`.
6. **Case Studies** — 1 featured (big metric hero + screenshot in `BrowserFrame`) + 2 compact. Metric is the dominant element.
7. **Testimonials** — one large pull-quote (real face + company logo) + secondary quotes. *(new on home)*
8. **Engagement / Pricing** — 3 tiers **with price anchors**, distinct background band, dominant "popular" tier.
9. **Process** — keep timeline; restrained, monochrome.
10. **FAQ** — objections: timeline, IP ownership, pricing model, offshoring, post-launch support. *(new)*
11. **Closing CTA** — single, specific, human headline on a `navy`/brand band. Merges the previously redundant CTAs. Footer CTA becomes a small inline strip (or removed).
12. **Footer** — drop blur blob + gradient text; tighten wordmark (`tracking-tight`); tonal (light) to avoid the cliff; **real Privacy + Terms routes** wired (broken links fixed; if pages don't exist yet, create minimal real pages or flag for Pass 4).

### Navbar
- Slim the mega-menu ~60%: per-item descriptions removed except one promoted card; panels anchored under triggers (~520px), not full-width.
- Top-level items: **Logo · Services · Work · Pricing · Company · [Contact]** (promote Work + Pricing).
- Single inline-SVG logo (replace dual-PNG).
- Hover-intent delay (~120ms) before open; subtle scrim behind open panel.

---

## 6. Decisions Made (defaults; flip on request)

- **Primary CTA = brand blue** (not Vercel-black). Black becomes the strong neutral / secondary.
- **Footer = light/tonal** to match the restrained page; dark reserved for one accent cell + closing CTA band.

---

## 7. Asset Drop-In Spec (user supplies real files)

Build with tasteful placeholders; swap in real assets. Place under `frontend/public/images/`.

| Slot | Type | Size | Ratio | Shape | Path suggestion |
|---|---|---|---|---|---|
| Hero visual | Product screenshot | ~1240×860 @2x | 4:3 / 16:10 | BrowserFrame, rounded-xl | `/images/home/hero-product.png` |
| Logo wall | Client logos (mono SVG) | ~120×40 each | — | inline SVG, grayscale | `/images/logos/*.svg` |
| Who-we-are | Team/founder photo | ~960×1200 @2x | 4:5 | rounded-2xl portrait | `/images/home/team.jpg` |
| Services lead | Screenshot/diagram | ~1120×700 @2x | 16:10 | BrowserFrame | `/images/home/services-lead.png` |
| Case study (featured) | Dashboard screenshot | ~1280×800 @2x | 16:10 | BrowserFrame | `/images/case/<slug>.png` |
| Testimonial | Client headshot + logo | 96px circle + ~100px logo | 1:1 / — | circle + mono SVG | `/images/testimonials/*` |

No images: navbar (logo only), footer (logo only), pricing, FAQ, process.

---

## 8. Build Sequence (Pass 1)

1. Foundation — tokens into `index.css` + `tailwind.config.ts`; strip conflicting colors/animations; remove `ClickSpark` from `App.tsx`.
2. Components — build Part 4 primitives.
3. Homepage — rebuild sections 1–12 responsive-first in `frontend/src/components/...`; update `Index.tsx`.
4. Navbar + Footer.
5. Retire `MobileGate`/`MobileHome` for `/` — make `Index` fully responsive (remove the swap; keep MobileHome file until Pass 3 if other routes use it — verify usages first).
6. Asset drop-in — placeholders + documented paths.
7. Quality gate — `react-reviewer`, `typescript-reviewer`, `code-reviewer` agents; `cd frontend && npm run lint`; `cd frontend && npm run build`.

---

## 9. Constraints & Conventions

- Follow project rules: `@/` alias, function components, shadcn primitives, `cn()`, TanStack Query for data, react-hook-form + zod for the contact form, `neo-*`/token palette via Tailwind.
- TypeScript strict is OFF — write defensive code, avoid `any`.
- No new UI libraries; use Radix primitives already present.
- Do not touch admin routes, Supabase, env, or migrations in Pass 1.
- Run lint + build before any commit (per `.claude/rules/01-project.md`).

---

## 10. Out of Scope (Pass 1)

- Inner pages (Pass 2), full mobile reconciliation (Pass 3), final QA (Pass 4).
- Backend, database, RLS, auth, admin dashboard.
- Copywriting beyond replacing the most template-y strings and adding price/FAQ content (final copy can be a follow-up).
- The committed `VITE_SUPABASE_SERVICE_KEY` leak (separate security follow-up, already tracked).

---

## 11. Success Criteria (Pass 1)

- Homepage renders one consistent design language across all breakpoints (no separate MobileHome on `/`).
- One blue, monochrome icons, no gradient-text/glow, no ClickSpark.
- ≥4 real proof elements present (logo wall, testimonials, stats, screenshots) with documented asset slots.
- No two adjacent sections share the same layout pattern.
- One `Button`, one `Card` system; 2 radii; varied section rhythm.
- FAQ + price anchors present; CTAs deduplicated.
- `npm run lint` and `npm run build` pass; ECC reviewers clear.
