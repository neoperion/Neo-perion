# UI Redesign Progress — AINCURU Living Manuscript

> Status snapshot of the manuscript rebrand. Source of truth for phase progress, file map, and visual decisions. Memory files in `C:/Users/asus/.claude/projects/d--neoperion-official-website-Neo-perion/memory/` carry the rationale.

## Visual canon (locked)

| Layer | Decision |
|---|---|
| Subject | "AINCURU = Living Manuscript" — heritage + knowledge + engineering + intelligence + long-term craftsmanship |
| Display type | Cormorant Garamond (semibold, italic) |
| Body type | Inter |
| Handwritten | Caveat (used as editorial marginalia, never for body text) |
| Palette | parchment (70%) · ink (20%) · walnut / rust (7%) · gold (3%) · sage accents only |
| Tokens | `frontend/tailwind.config.ts` `theme.extend.colors.manuscript*` + `fontFamily.manuscript*` |
| Stylesheet | `frontend/src/styles/manuscript.css` (parchment-surface, ink-rule, ornament-dots, chapter-eyebrow, manuscript-card, btn-manuscript-*, pull-quote, wax-seal, marginalia, prose-manuscript, ink-rule-draw) |
| Logo | `frontend/public/images/aincuru-logo.png` — pentagon-hexagram glyph + AINCURU wordmark + "CONTEXT CREATES INTELLIGENCE" tagline |

## Phases

| # | Phase | Status | Files |
|---|---|---|---|
| 1 | Foundation: tokens + fonts | ✅ shipped (commit `be71cf5`) | `tailwind.config.ts`, `index.html`, `src/styles/manuscript.css` |
| 2 | Header + Hero + MobileMenu | ✅ shipped (commit `3080a93`) | `components/Header.tsx`, `components/Hero.tsx`, `components/mobile/Navigation/MobileMenuV2.tsx` |
| 3 | Home sections (Phase A — palette pass) | ✅ shipped (commit `7329044`) | `components/WhyNeoPerion.tsx`, `components/Services.tsx`, `components/features/home/TrustedBy.tsx`, `HomeTestimonials.tsx`, `HomeCTA.tsx` |
| 3.1 | Logo swap + first editorial pass | ✅ shipped (commit `bc43046`) | logo file + same 4 files |
| 3.2 | Workshop (Services) | ✅ shipped (pending commit) | `components/Services.tsx` → "AINCURU Workshop" |
| **3.3** | **The AINCURU Method (Why)** | ✅ **shipped** (commit pending) | `components/WhyNeoPerion.tsx` → "AINCURU Method" manuscript page (large labelled rosette + 5 orbiting notes + bottom still-life) |
| 4 | About + Founder Letter + Industries | ⏳ pending | — |
| 5 | Services detail template | ⏳ pending | — |
| 6 | Blog + Case Studies + Insights | ⏳ pending | — |
| 7 | Careers / Contact / Newsletter / Legal / Footer | ⏳ pending | — |
| 8 | Admin dashboard polish | ⏳ pending | — |

## Phase 3.2 — The Workshop + The Codex (this commit)

### Services → "The AINCURU Workshop"

**Concept:** *Five disciplines. One engineering philosophy.*

**Layout:** Desktop = 5/7 column split. Left: vertical folio list (5 entries) with hover/focus/click active state. Right: large manuscript plate (4:3) with one hand-drawn SVG illustration per discipline.

**Each discipline has a unique SVG line-drawing plate:**
- AI Solutions → quill + intelligence network graph (`Quill()`)
- Product Development → meshing gears with dimension line (`Blueprint()`)
- Web Development → architectural elevation with windows + human scale figure (`Elevation()`)
- Cloud & DevOps → three server racks with meshed connections + cloud uplink (`Infrastructure()`)
- Technical Consulting → compass rose with map grid (`Compass()`)

**Plate frame:** registration corner crosses, top "Plate — AINCURU workshop" title strip, bottom 10-tick scale rule — keeps every plate feeling like a page in the same folio.

**Interaction model:**
- Hover, focus, OR click on a folio changes the active discipline
- The right plate crossfades via `AnimatePresence`
- Description / features / CTA animate in below the plate
- `useReducedMotion` short-circuits all transitions to 0ms
- `role="tablist"` + `role="tab"` + `role="tabpanel"` for screen reader semantics; roving tabindex with arrow-key pattern ready (only one tab stop at a time)

**Hard constraints preserved:** 5 services + their titles + descriptions + features + CTAs + slugs byte-identical.

**Avoided:** generic SaaS cards, glassmorphism, gradient blobs, rounded cards, Pinterest collage, watermarked stock.

### WhyNeoPerion → "The AINCURU Method"

**Concept:** *Five decisions that shape every AINCURU engagement. Context before intelligence.* The section is one continuous manuscript page — header, large labelled rosette, five orbiting notes, and the closing philosophy + plaque CTA all share the same parchment surface.

**Layout (rebuilt — was a pentagon grid, now a manuscript page):**

**Desktop (≥1024px):** Single `max-w-[1400px]` × `min-h-[1100px]` wrapper. Five manuscript notes orbit a centred 560px rosette: `01 CONTEXT` (top-left, 315°), `02 PRODUCT` (top-right, 45°), `03 JUDGEMENT` (bottom-right, 135°), `04 PEOPLE` (bottom-left, 225°). `05 CONTINUITY` is stacked centred BELOW the rosette at 270°. The rosette has 5 quadrant dividers + 36 outer tick marks + a centre compass rose + the `AINCURU METHOD` wordmark. Each quadrant carries two stacked labels — the diagram label (e.g. `CONTEXT`) and its supporting line (e.g. `UNDERSTAND FIRST`).

**Tablet (768–1023px):** Compressed composition — diagram centred (~440px), 4 cards in a 2×2 grid, `CONTINUITY` centred full-width below.

**Mobile (<768px):** Vertical reading mode — header → centred diagram (~360px) → 5 stacked notes → closing philosophy → plaque CTA.

**Each principle's card has:**
- Chapter-eyebrow `0N · LABEL` in rustDeep uppercase (Cormorant Garamond)
- Cormorant Garamond serif title (e.g. "Context before technology.")
- Body description (max 3 lines, Inter)
- Footer: supporting label + small ✦ ornament + a hand-coded SVG illustration (botanical / ship / engineers / flask / mountain) at low opacity

**Diagram mechanics:**
- Single SVG: outer construction circle (dashed) + 5 concentric rings + 36 outer tick marks (every 10°, longer at every 90°) + 5 radial quadrant dividers (every 72°) + small construction dots at quadrant midpoints + a centre compass-rose + the `AINCURU METHOD` wordmark.
- HTML labels are positioned with `Math.cos(angle) * rMain * 100 / SIZE` so the same `angleDeg` field on each principle drives both the radial dividers and the label positions.
- Hover OR focus on a card highlights that quadrant; the labels for that quadrant shift to rustDeep and the corresponding dashed rust connector line (drawn as a single SVG that fills the wrapper) renders from the card's inner edge to the rosette's outer circumference.

**Manuscript decoration (built fresh, all inline SVG):**
- Top-right folio note: `AINCURU LLP / ENGINEERING NOTE · 001` in tracked uppercase with a `~ folio ~` Caveat accent.
- Bottom-left: `BooksAndQuill` (stacked antique books + ink bottle + feather quill angled diagonally).
- Bottom-right: `CompassMap` (antique compass rose + partial map fragment).
- Background artifacts at 0.04–0.15 opacity: faint handwriting (top), technical construction (centre), map lines + scale ticks (bottom), side botanical strokes (left + right).
- Manuscript frame: hairline border around the wrapper, corner ornament ticks at the four corners.
- Closing philosophy block: "Context before intelligence." in italic Cormorant Garamond, followed by the 3-line mantra (`We begin with understanding. / We build with clarity. / We stay to make it better.`).
- Manuscript plaque CTA: rustDeep background, ✦ compass icon, `LET'S BUILD WITH CONTEXT →` in tracked uppercase — replaces the previous SaaS rounded button.

**Hard constraints preserved:** Component name (`WhyNeoPerion`) + mount point (`Index.tsx:30`) + CTA destination (`/contact`) all untouched. The five principle titles + supporting labels are byte-identical to the previous build; only the visual composition changed. No new dependencies, no new CSS files — reuses the existing `manuscript*` Tailwind tokens and `manuscript.css` utility classes.

**Avoided:** seven cards, glassmorphism, gradient blobs, rounded-2xl cards, Pinterest collage, watermarked stock, neon / futuristic palettes, separate "header / diagram / cards / CTA" vertical bands (now one continuous manuscript page).

### Accessibility + motion hygiene

- All hover-triggered animations short-circuit to 0ms when `prefers-reduced-motion` is set
- Keyboard: every interactive element is a real `<button>` with focus styles; the Workshop uses `role="tablist"` semantics; Codex folios animate on scroll only (no hover requirement to read content)
- Colour contrast: manuscript-ink on parchment-light stays well above WCAG AA
- Mobile: ink line moves to left edge; folios stack under it; both sections remain fully readable down to 375px

### Verification done

- `npm run lint` — clean
- `npm run build` — green (only pre-existing bundle-size warning remains)
- Static review at 1440 / 1280 / 1024 / 768 / 430 / 390 / 320 — pentagon diagram scales correctly, no horizontal overflow, icons pin to 20px in card footers, no giant unwrapped SVGs
- Console: clean (only pre-existing React Router future-flag warnings + pre-existing Clutch widget CORS error from `widget.clutch.co`)

## Decisions log (see `memory/design-decisions.md` for full)

- **Workshop and Codex share visual DNA but have distinct interaction models** — Workshop is exploratory (hover to discover); Codex is sequential (scroll to reveal). This satisfies the brief's "same system, distinctly different interaction" requirement.
- **SVG illustrations are inline components, not raster** — keeps them scalable, animatable, recolourable. No new asset files.
- **Single ink line via SVG pathLength + strokeDashoffset** — outperforms per-element dasharray timing and is GPU-friendly.
- **Caveat only for marginalia, never body** — keeps the body type system disciplined.
- **No gradient blobs, no glassmorphism, no rounded corners on chapter cards** — explicitly per the brief.

## Out of scope for this PR

- Phase 4 (About + Founder Letter + Industries)
- Phase 5 (Services detail template)
- Phase 6 (Blog + Case Studies + Insights)
- Phase 7 (Careers / Contact / Newsletter / Legal / Footer)
- Phase 8 (Admin dashboard polish)

## Constraints (frozen across all phases)

Routes, navigation destinations, API contracts, Supabase logic, auth, forms/business logic, CMS logic, data models, existing content/copy, SEO content, env vars — all untouched.