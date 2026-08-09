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
| **3.3** | **The AINCURU Method (Why)** | ✅ **shipped** (commit pending) | `components/WhyNeoPerion.tsx` → "AINCURU Method" pentagon diagram with 5 principles |
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

**Concept:** *Five decisions that shape every AINCURU engagement. Context before intelligence.*

**Layout:** A central pentagon diagram (the "AINCURU Method") flanked by five manuscript cards. Each principle lives at a vertex of the pentagon and pairs with a card on the left or right side of the diagram. Desktop = 12-column grid (3 / 6 / 3). Tablet = stacked diagram + 2-column cards. Mobile = stacked diagram (capped at 300px) + 5 stacked cards.

**The five principles (single source of truth):**

| # | Label | Title | Supporting |
|---|---|---|---|
| 01 | CONTEXT | Context before technology. | Understand first |
| 02 | PRODUCT | From idea to working product. | Build the right thing |
| 03 | JUDGEMENT | AI when it earns its place. | Use with judgement |
| 04 | PEOPLE | Close to the builders. | Close to the builders |
| 05 | CONTINUITY | Shipping isn't the end. | Improve continuously |

**Each principle's card has:**
- Wax-seal-style circular marker at the pentagon vertex (with the principle's hand-coded SVG icon)
- Chapter-eyebrow "0N · LABEL" in rustDeep uppercase
- Cormorant Garamond serif title
- Body description (max 3 lines)
- Footer: supporting label + small icon glyph (e.g., lightbulb / magnifying glass / brain)

**Diagram mechanics:**
- Center rosette: 16 tick marks + 8-point compass rose + "AINCURU METHOD" label in a circular cutout
- Five dashed rust connector lines from center to each node
- Node pills positioned absolutely using `Math.cos(angle)` / `Math.sin(angle)` with the same `angle` field on each principle
- Hover OR focus on a card highlights that vertex; the diagram node "lifts" (shadow + scale) and the connector deepens

**Manuscript decoration:**
- Top-right folio note "AINCURU LLP / ENGINEERING NOTE · 001" in tracked uppercase
- Bottom-left: `BooksAndQuill` SVG (open folio + quill)
- Bottom-right: `CornerCompass` SVG (small compass rose)
- Subtle inset border on the outer frame

**Hard constraints preserved:** Component name (`WhyNeoPerion`) + mount point (`Index.tsx:30`) + CTA destination (`/contact`) untouchable. All copy is new but consistent with the existing brand voice.

**Avoided:** seven cards, glassmorphism, gradient blobs, rounded cards, Pinterest collage, watermarked stock.

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