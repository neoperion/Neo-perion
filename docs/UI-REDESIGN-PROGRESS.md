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
| **3.2** | **Workshop + Codex (current)** | ✅ **shipped** (pending commit) | `components/Services.tsx` → "AINCURU Workshop"; `components/WhyNeoPerion.tsx` → "AINCURU Codex" |
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

### WhyNeoPerion → "The AINCURU Codex"

**Concept:** *Seven principles behind every system we build.*

**Layout:** Single vertical timeline. One continuous hand-drawn SVG ink line runs down the centre of the section; seven numbered folios alternate left/right around it. On mobile, folios stack under a left-aligned ink line.

**Each folio has:**
- A wax-seal-style circular marker centered on the ink line (with the discipline's lucide icon)
- A card with: chapter-eyebrow "Folio N · AINCURU Codex" → serif title → body → chip pair → Caveat marginalia annotation ("first we learn", "one team, the whole bench", etc.)
- An opposite-side plate: small glyph (per-folio SVG technical diagram) + chapter-eyebrow "Evidence" + serif headline (`back.headline`) + bullet list (`back.points`) + optional sepia-tinted image

**The ink line is alive:** `useScroll` + `useTransform` drives `strokeDashoffset` from 1 → 0 as the user scrolls past the section, so the line draws itself as they read. Static fallback for `useReducedMotion`.

**Reveal mechanism:** Each folio's card uses `useInView({ once: true, margin: "-15% 0px -15% 0px" })` so its content fades + slides in once it crosses ~15% into the viewport. Folio marker changes colour (border + icon flip from ink-muted to rust-deep) when the folio is in view.

**Hard constraints preserved:** 7 reasons + their titles + descriptions + chips + back.headline + back.points + image paths byte-identical.

**Avoided:** seven cards, glassmorphism, gradient blobs, rounded cards.

### Accessibility + motion hygiene

- All hover-triggered animations short-circuit to 0ms when `prefers-reduced-motion` is set
- Keyboard: every interactive element is a real `<button>` with focus styles; the Workshop uses `role="tablist"` semantics; Codex folios animate on scroll only (no hover requirement to read content)
- Colour contrast: manuscript-ink on parchment-light stays well above WCAG AA
- Mobile: ink line moves to left edge; folios stack under it; both sections remain fully readable down to 375px

### Verification done

- `npm run lint` — clean
- `npm run build` — green (only pre-existing bundle-size warning remains)
- Static review at 1440 / 1280 / 1024 / 768 / 390 / 375 — grid collapses cleanly, ink line stays visible, no horizontal overflow

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