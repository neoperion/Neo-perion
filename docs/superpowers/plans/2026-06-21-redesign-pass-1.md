# Neo Perion Redesign — Pass 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Neo Perion homepage (12 sections), navbar, and footer on a unified "Linear/Vercel restraint" design system — white + one blue (`#1E5DFF`) + neutrals — fixing every flaw from the design audit, responsive-first.

**Architecture:** Establish design tokens (CSS vars + Tailwind) first, then a small set of shared marketing primitives, then compose the homepage sections from them. Existing shadcn `button.tsx` is *extended* (additive `brand` variant) to avoid blast radius across 46 pages. `Index.tsx` becomes fully responsive and stops swapping to the separate dark-glass `MobileHome` (which stays intact for the 30+ other pages still using `MobileGate`).

**Tech Stack:** Vite 5 + React 18 + TS (strict off) + Tailwind 3 + shadcn/Radix + Framer Motion + `cn()` (clsx + tailwind-merge). No test runner exists.

## Global Constraints

- **No test runner exists** — adding one is out of scope. Per-task verification = `cd frontend && npm run lint` passes (no *new* errors) AND `cd frontend && npm run build` succeeds AND the page renders. Final gate runs ECC reviewers.
- **Brand blue is exactly `#1E5DFF`** (existing `neo.deep`). It is the only blue. Remove use of `#2563EB`, `#2563FF`, `#3B82F6`, `#4AA8FF`, `#74C8FF`, cyan `#06B6D4`, and ClickSpark `#00d4ff`.
- **Headings are ink `#0A0A0B`, never blue.** Body `#3F3F46`, muted `#71717A`, hairline `#E4E4E7`, canvas `#FAFAFA`, paper `#FFFFFF`, dark surface navy `#08090D`.
- **Radii:** 12px controls, 16px cards. No `rounded-2xl/3xl` or 32px `.premium-card` in new code.
- **Eyebrow** kicker used on **≤3 sections total**, tracking `+0.08em` (not `0.25em`).
- **Section rhythm:** hero `py-32`, primary `py-24`, supporting `py-20`, closing `py-32`. Not uniform.
- **Motion:** one easing `cubic-bezier(.4,0,.2,1)` ~200ms; one reveal (fade + 16px rise, 60ms stagger). No `ClickSpark`, no decorative animated SVGs, no `nav-float`/`crystal-float`/`orb-*`. Honor `prefers-reduced-motion`.
- **Conventions:** `@/` alias, function components, named exports (default only for router-imported pages), `cn()` for classes, shadcn/Radix primitives only (no new UI libs), react-hook-form + zod for forms, TanStack Query for data. Avoid `any`; write defensively (strict is off).
- **Do not touch** admin routes, Supabase, env, or migrations.
- **`MobileGate` stays** for all pages except `Index.tsx`. Do not delete `MobileGate` or `MobileHome` files.
- **Assets:** build with placeholders under `frontend/public/images/`; document drop-in paths/sizes/ratios.
- **Commits:** on branch `redesign/pass-1-foundation-homepage`. End messages with the Co-Authored-By trailer. Do not push to `main`.

---

## File Structure

**Foundation**
- Modify: `frontend/src/index.css` — token vars, motion cleanup, retire glow/gradient utilities.
- Modify: `frontend/tailwind.config.ts` — token colors, font sizes, retire unused keyframes from active set.
- Modify: `frontend/src/App.tsx` — remove `ClickSpark` wrapper.

**Primitives** (new — `frontend/src/components/marketing/`)
- `Section.tsx`, `SectionHeading.tsx`, `Eyebrow.tsx`, `MarketingCard.tsx`, `BrowserFrame.tsx`, `LogoWall.tsx`, `StatBand.tsx`, `Testimonials.tsx`, `FaqAccordion.tsx`
- Modify: `frontend/src/components/ui/button.tsx` — add `brand` variant (additive).

**Homepage sections** (rebuild in place / new under `frontend/src/components/`)
- `Hero.tsx`, `Services.tsx`, `WhyNeoPerion.tsx`, `ProcessTimeline.tsx`, `HomeCTA.tsx`, `Footer.tsx`, `Header.tsx` (modify)
- `features/home/CaseStudiesPreview.tsx`, `features/home/IndustriesSection.tsx`, `features/home/EngagementModel.tsx`, `features/home/TechnologyExpertise.tsx` (modify/restyle)
- New: `features/home/WhoWeAre.tsx`, `features/home/HomeFaq.tsx`
- Modify: `frontend/src/pages/Index.tsx` — new section order, drop `MobileGate`.

---

## Phase 0 — Foundation

### Task 0.1: Design tokens (colors, type, motion)

**Files:**
- Modify: `frontend/src/index.css`
- Modify: `frontend/tailwind.config.ts`

**Produces:** Tailwind utilities `text-ink`, `text-body`, `text-muted`, `bg-canvas`, `bg-paper`, `border-hairline`, `bg-navy`, and `brand` already exists as `neo.deep` (`#1E5DFF`). Easing var `--ease-1`. `.reveal` standardized.

- [ ] **Step 1: Add token colors to `tailwind.config.ts`** under `theme.extend.colors`:
```ts
ink: "#0A0A0B",
body: "#3F3F46",
muted2: "#71717A",
faint: "#A1A1AA",
hairline: "#E4E4E7",
canvas: "#FAFAFA",
paper: "#FFFFFF",
navy: "#08090D",
brand: { DEFAULT: "#1E5DFF", hover: "#1A52E6", tint: "rgba(30,93,255,0.06)" },
```
(Keep existing `neo` palette for now so other pages don't break; new code uses the tokens above + `brand`.)

- [ ] **Step 2: In `index.css`**, set `--ease-1: cubic-bezier(.4,0,.2,1);` in `:root`. Update `.reveal` transition to `transform .5s var(--ease-1), opacity .5s var(--ease-1)` and reduce translate to `16px`.

- [ ] **Step 3: Neutralize legacy gradient/glow utilities** so new code can't pull them in: leave the class definitions (other pages may use them) but DO NOT use them in any Pass-1 file. Add a comment banner in `index.css`: `/* LEGACY — do not use in redesign (Pass 1+). */` above `.text-neo-gradient`, `.text-neo-numbers`, `.bg-neo-*`, `.neo-glow-*`, `.premium-card`.

- [ ] **Step 4: Verify**
Run: `cd frontend && npm run build`
Expected: build succeeds.

- [ ] **Step 5: Commit**
```bash
git add frontend/src/index.css frontend/tailwind.config.ts
git commit -m "feat(design): add restraint design tokens (one blue, ink/neutrals, motion)"
```

### Task 0.2: Remove ClickSpark

**Files:** Modify `frontend/src/App.tsx`

- [ ] **Step 1:** Remove the `import ClickSpark from "@/components/ClickSpark";` line and unwrap the `<ClickSpark ...>` element, keeping its children (`<QueryClientProvider>...`). Leave the `ClickSpark.tsx` file on disk (unused).
- [ ] **Step 2: Verify** `cd frontend && npm run build` succeeds and app renders.
- [ ] **Step 3: Commit**
```bash
git add frontend/src/App.tsx
git commit -m "refactor(home): remove ClickSpark cyan spark effect"
```

---

## Phase 1 — Core Primitives

### Task 1.1: Extend Button with `brand` variant

**Files:** Modify `frontend/src/components/ui/button.tsx`

**Interfaces — Produces:** `<Button variant="brand">`, `<Button variant="brandSecondary">`. Existing variants untouched.

- [ ] **Step 1:** In the `buttonVariants` CVA `variants.variant` map, add:
```ts
brand: "bg-brand text-white hover:bg-brand-hover shadow-sm hover:shadow-md transition-all",
brandSecondary: "bg-paper text-ink border border-hairline hover:border-faint transition-all",
```
- [ ] **Step 2:** Confirm `size` already supports `lg` (height ~44px). If not, ensure an `lg` size exists (`h-11 px-6`).
- [ ] **Step 3: Verify** `cd frontend && npm run build` succeeds.
- [ ] **Step 4: Commit**
```bash
git add frontend/src/components/ui/button.tsx
git commit -m "feat(ui): add brand button variants"
```

### Task 1.2: Section, Eyebrow, SectionHeading

**Files:** Create `frontend/src/components/marketing/Section.tsx`, `Eyebrow.tsx`, `SectionHeading.tsx`

**Interfaces — Produces:**
- `<Section as? rhythm="hero|primary|supporting|closing" bg="canvas|paper|navy" className?>` → wraps children in `<section>` with the right `py-*`/bg + inner `container mx-auto px-6 lg:px-8 max-w-[1200px]`.
- `<Eyebrow>text</Eyebrow>` → `text-[12px] font-semibold tracking-[0.08em] uppercase text-brand`.
- `<SectionHeading eyebrow? title align="left|center" lead?>` → composes Eyebrow + `<h2>` (`text-[clamp(28px,4vw,40px)] font-display font-bold text-ink tracking-[-0.02em] leading-[1.1]`) + optional lead (`text-body text-base md:text-lg max-w-[65ch] leading-relaxed`).

- [ ] **Step 1:** Implement the three components per the interfaces above, using `cn()`. `rhythm` map: hero `py-32`, primary `py-24`, supporting `py-20`, closing `py-32`. `bg` map: canvas `bg-canvas`, paper `bg-paper`, navy `bg-navy text-white`. Add `border-b border-hairline/60` option via prop `divider?: boolean`.
- [ ] **Step 2: Verify** import them in a scratch render or rely on build: `cd frontend && npm run build` succeeds.
- [ ] **Step 3: Commit**
```bash
git add frontend/src/components/marketing/Section.tsx frontend/src/components/marketing/Eyebrow.tsx frontend/src/components/marketing/SectionHeading.tsx
git commit -m "feat(marketing): Section, Eyebrow, SectionHeading primitives"
```

### Task 1.3: MarketingCard + BrowserFrame

**Files:** Create `frontend/src/components/marketing/MarketingCard.tsx`, `BrowserFrame.tsx`

**Interfaces — Produces:**
- `<MarketingCard role="surface|feature|metric" className? children>` → base `rounded-2xl` → **use `rounded-[16px]`**, `bg-paper border border-hairline`, hover `hover:border-faint hover:shadow-[0_8px_30px_rgba(15,23,42,.06)] transition-[border-color,box-shadow] duration-200`. `feature` adds `p-8`, `surface`/`metric` add `p-6`. No translate-on-hover.
- `<BrowserFrame src alt ratio="16/10|4/3" className?>` → a div with subtle top chrome (3 dots `bg-hairline`), `rounded-[16px] border border-hairline overflow-hidden shadow-[0_40px_80px_rgba(15,23,42,.10)]`, image `w-full object-cover` constrained by `aspect-[16/10]` (use `AspectRatio` from `@/components/ui/aspect-ratio`).

- [ ] **Step 1:** Implement both per interfaces.
- [ ] **Step 2: Verify** `cd frontend && npm run build` succeeds.
- [ ] **Step 3: Commit**
```bash
git add frontend/src/components/marketing/MarketingCard.tsx frontend/src/components/marketing/BrowserFrame.tsx
git commit -m "feat(marketing): MarketingCard + BrowserFrame primitives"
```

### Task 1.4: Trust primitives — LogoWall, StatBand, Testimonials, FaqAccordion

**Files:** Create `frontend/src/components/marketing/LogoWall.tsx`, `StatBand.tsx`, `Testimonials.tsx`, `FaqAccordion.tsx`

**Interfaces — Produces:**
- `<LogoWall label? logos={{src,alt}[]}>` → centered label (`text-muted2 text-[12px] tracking-[0.08em] uppercase`) + flex-wrap row of `img` (`h-8 w-auto opacity-60 grayscale hover:opacity-100 transition`).
- `<StatBand stats={{value,label}[]}>` → grid (`grid-cols-2 md:grid-cols-3` or count), value `text-[clamp(28px,4vw,40px)] font-display font-bold text-ink`, label `text-muted2 text-sm`. Optionally reuse `@/components/ui/AnimatedCounter` for value if numeric.
- `<Testimonials lead={{quote,name,title,company,avatar,logo}} secondary={{quote,name,title}[]}>` → big lead pull-quote (`text-[clamp(22px,3vw,32px)] text-ink font-display leading-snug`) with avatar (circle 64px) + logo, then `grid md:grid-cols-2 gap-6` of secondary quotes in `MarketingCard role="surface"`.
- `<FaqAccordion items={{q,a}[]}>` → wraps shadcn `@/components/ui/accordion` (`Accordion type="single" collapsible`), question `text-ink font-semibold`, answer `text-body`.

- [ ] **Step 1:** Implement all four. Use existing `@/components/ui/accordion`, `@/components/ui/avatar`, `@/components/ui/aspect-ratio` where helpful.
- [ ] **Step 2: Verify** `cd frontend && npm run build` succeeds.
- [ ] **Step 3: Commit**
```bash
git add frontend/src/components/marketing/LogoWall.tsx frontend/src/components/marketing/StatBand.tsx frontend/src/components/marketing/Testimonials.tsx frontend/src/components/marketing/FaqAccordion.tsx
git commit -m "feat(marketing): LogoWall, StatBand, Testimonials, FaqAccordion"
```

### Task 1.5: Placeholder assets + manifest

**Files:** Create `frontend/public/images/home/.gitkeep`, `frontend/public/images/logos/.gitkeep`, `frontend/public/images/testimonials/.gitkeep`, and `frontend/public/images/ASSETS.md`

- [ ] **Step 1:** Create `ASSETS.md` listing every slot from spec §7 (slot, type, size, ratio, path). Until real files exist, components reference `/images/home/placeholder-*.svg`.
- [ ] **Step 2:** Add minimal placeholder SVGs (grey rounded rect with centered label text) for: `placeholder-hero.svg`, `placeholder-screenshot.svg`, `placeholder-team.svg`, 6× `logos/logo-1..6.svg`, 3× `testimonials/avatar-1..3.svg`.
- [ ] **Step 3: Commit**
```bash
git add frontend/public/images
git commit -m "chore(assets): placeholder images + drop-in manifest"
```

---

## Phase 2 — Homepage Sections

> For each section task: rebuild responsive-first using Phase 1 primitives + tokens. Verification per task = `npm run build` succeeds and section renders with no console errors. Keep all existing copy unless listed as a copy change. Each task ends with a commit.

### Task 2.1: Hero

**Files:** Modify `frontend/src/components/Hero.tsx`

- [ ] **Step 1:** Layout `grid lg:grid-cols-12 gap-12 items-center`, left `lg:col-span-6`, right `lg:col-span-6`. `Section rhythm="hero" bg="paper"` with `min-h-[80vh]`.
- [ ] **Step 2:** Left column: keep headline copy *"The product engineering firm that doesn't disappear after launch."* with "doesn't disappear" in `text-brand`. Headline `text-[clamp(40px,7vw,64px)] font-display font-bold text-ink tracking-[-0.03em] leading-[1.05]`. Remove the top metric badge. Subhead `text-body text-lg max-w-[36ch]`. **One** primary CTA `<Button variant="brand" size="lg">Book a strategy call <ArrowRight/></Button>`; secondary as a quiet text link "See our work →" (`text-muted2 hover:text-brand`). Keep the emerald availability tag but recolor dot to a single tone; remove `animate-ping` (use static dot).
- [ ] **Step 3:** Right column: replace `HeroTerminal` with `<BrowserFrame src="/images/home/placeholder-hero.svg" alt="Neo Perion product" ratio="4/3" />`. Remove the `HeroTerminal` import/usage (leave the file on disk).
- [ ] **Step 4:** Keep the subtle background grid; drop the radial blue blob (or reduce to `opacity-10`). Keep `useMagnetic` on the primary button if present, max 6px.
- [ ] **Step 5: Verify** `cd frontend && npm run build`; render `/`.
- [ ] **Step 6: Commit** `git commit -am "feat(home): rebuild Hero (real screenshot, one CTA, restraint)"`

### Task 2.2: Logo wall + Who We Are

**Files:** Create `frontend/src/components/features/home/WhoWeAre.tsx`

- [ ] **Step 1:** `<Section rhythm="supporting" bg="canvas">` containing `<LogoWall label="Trusted by teams building real products" logos={6 placeholders} />`.
- [ ] **Step 2:** Below it (same or adjacent Section), Who-We-Are row: `grid lg:grid-cols-2 gap-12 items-center`. Left: 2-sentence positioning (`text-ink text-[clamp(22px,3vw,30px)] font-display`) + `<StatBand>` with 3 placeholder stats (e.g. "23 products shipped", "0 abandoned post-launch", "8 yrs avg seniority" — mark as placeholder in a comment). Right: `placeholder-team.svg` in `aspect-[4/5] rounded-[16px]`.
- [ ] **Step 3: Verify** build + render.
- [ ] **Step 4: Commit** `git add -A && git commit -m "feat(home): add LogoWall + WhoWeAre trust section"`

### Task 2.3: Services (break the card grid)

**Files:** Modify `frontend/src/components/Services.tsx`

- [ ] **Step 1:** `<Section rhythm="primary" bg="paper">` + `<SectionHeading eyebrow="Capabilities" title="Engineering Excellence" lead="..."/>` (eyebrow allowed here — counts toward the ≤3).
- [ ] **Step 2:** Asymmetric layout `grid lg:grid-cols-12 gap-8`. Lead service (AI Systems) in `lg:col-span-7` as a `MarketingCard role="feature"` containing icon (mono `text-ink`), title `text-2xl`, description, and `<BrowserFrame src="/images/home/placeholder-screenshot.svg" ratio="16/10"/>`. Right `lg:col-span-5`: the other 3 services as **text rows** with `divide-y divide-hairline`, each row `py-6` flex: inline mono icon + title (`text-base font-bold text-ink`) + one-line desc + hover slides title 4px right and reveals `ArrowRight`.
- [ ] **Step 3:** Rewrite "Explore Capability" ×4 → outcome links (e.g. "See how we build RAG systems →").
- [ ] **Step 4:** Icons mono: 24px (lead) / 20px (rows), `strokeWidth={1.75}`, `text-ink`/`text-muted2`. No colored boxes on the 3 rows.
- [ ] **Step 5: Verify** build + render.
- [ ] **Step 6: Commit** `git commit -am "feat(home): rebuild Services as asymmetric editorial layout"`

### Task 2.4: WhyNeoPerion (monochrome bento)

**Files:** Modify `frontend/src/components/WhyNeoPerion.tsx`

- [ ] **Step 1:** Keep bento grid + copy. Replace all 6 rainbow icon colors with a single `text-ink` (or `text-brand` for the one feature cell). `strokeWidth={1.75}`, 24px.
- [ ] **Step 2:** Delete the decorative animated SVGs (spinning circles, bar chart) and their `animate-[spin_*]`/`animate-pulse`. Replace large cells with whitespace (or one static, meaningful micro-mark at low contrast — optional).
- [ ] **Step 3:** Dark cell uses `bg-navy` (not `#09090B`). Cards use `rounded-[16px] border-hairline`, standardized hover (border-brighten + shadow, no rainbow).
- [ ] **Step 4:** Drop the serif-italic accent in the heading OR keep it as the single page-wide editorial moment (decide: keep here only).
- [ ] **Step 5: Verify** build + render.
- [ ] **Step 6: Commit** `git commit -am "feat(home): monochrome WhyNeoPerion, remove decorative SVGs"`

### Task 2.5: Case Studies (metric is hero)

**Files:** Modify `frontend/src/components/features/home/CaseStudiesPreview.tsx`

- [ ] **Step 1:** `<Section rhythm="primary" bg="canvas">`. Header keeps copy; eyebrow NOT used here (budget).
- [ ] **Step 2:** Layout: 1 featured (`lg:col-span-7`) + 2 compact (`lg:col-span-5` stacked) via `grid lg:grid-cols-12 gap-6`. Featured: `BrowserFrame` screenshot top, then big metric `text-[clamp(28px,4vw,40px)] font-display font-bold text-brand` (the `outcome`), client name, one line of `problem`. Compacts: smaller, metric-led, `MarketingCard role="metric"`.
- [ ] **Step 3:** Use `study.cover_image` in `BrowserFrame`; if absent, placeholder. Promote outcome metric to dominant element; demote the `text-[9px]` labels to `text-[11px]`.
- [ ] **Step 4: Verify** build + render.
- [ ] **Step 5: Commit** `git commit -am "feat(home): case studies — featured + compact, metric-led"`

### Task 2.6: Testimonials (new on home)

**Files:** Create `frontend/src/components/features/home/HomeTestimonials.tsx`; add to `Index.tsx` in Task 2.10.

- [ ] **Step 1:** `<Section rhythm="primary" bg="paper">` rendering `<Testimonials lead={placeholder} secondary={[2 placeholders]} />`. Placeholder quotes/names/avatars/logos marked as such in comments; real ones swapped later.
- [ ] **Step 2: Verify** build + render.
- [ ] **Step 3: Commit** `git add -A && git commit -m "feat(home): add Testimonials section"`

### Task 2.7: Engagement / Pricing (price anchors)

**Files:** Modify `frontend/src/components/features/home/EngagementModel.tsx`

- [ ] **Step 1:** `<Section rhythm="primary" bg="canvas">` — give it a faint distinguishing treatment (e.g. inner `bg-paper rounded-[16px] border border-hairline p-8 md:p-12` band, or keep canvas but add a top divider) so pricing feels like a destination.
- [ ] **Step 2:** Add **price anchors** per tier (placeholder values, clearly marked): MVP Sprint "from $15k", Ongoing "from $8k/mo", AI Sprint "from $6k". Render price as the loudest element: `text-3xl font-bold text-ink`.
- [ ] **Step 3:** Make "Most popular" tier dominant: `ring-1 ring-brand` + brand-blue header strip + `md:scale-[1.03]`. Primary CTA `Button variant="brand"`. Check icons `text-brand` 16px.
- [ ] **Step 4: Verify** build + render.
- [ ] **Step 5: Commit** `git commit -am "feat(home): engagement tiers with price anchors + dominant popular tier"`

### Task 2.8: Process timeline (restrained)

**Files:** Modify `frontend/src/components/ProcessTimeline.tsx`

- [ ] **Step 1:** `<Section rhythm="supporting" bg="paper">`. Keep alternating timeline + copy. Node badge `border-brand/30`→hover `border-brand`. Cards `rounded-[16px] border-hairline`, standardized hover. Numbers `font-mono text-brand`.
- [ ] **Step 2: Verify** build + render.
- [ ] **Step 3: Commit** `git commit -am "feat(home): restrained ProcessTimeline on tokens"`

### Task 2.9: FAQ (new)

**Files:** Create `frontend/src/components/features/home/HomeFaq.tsx`

- [ ] **Step 1:** `<Section rhythm="supporting" bg="canvas">` + `<SectionHeading title="Questions, answered" align="left"/>` (no eyebrow) + `<FaqAccordion items={[...]} />`. Six Q&A handling: timeline ("How fast can you ship?"), IP ownership, pricing model, offshoring ("Who actually writes the code?"), post-launch support, getting started. Concrete copy written here (no placeholders).
- [ ] **Step 2: Verify** build + render.
- [ ] **Step 3: Commit** `git add -A && git commit -m "feat(home): add FAQ section"`

### Task 2.10: Closing CTA + Index wiring + Industries/TechExpertise restyle

**Files:** Modify `frontend/src/components/HomeCTA.tsx`, `frontend/src/pages/Index.tsx`, `frontend/src/components/features/home/IndustriesSection.tsx`, `frontend/src/components/features/home/TechnologyExpertise.tsx`

- [ ] **Step 1:** HomeCTA → single, specific headline (replace "Your next product deserves engineering…" / drop the duplicate; new: *"Tell us what you're building. We'll tell you how we'd ship it."*) on `<Section rhythm="closing" bg="navy">`, one `Button variant="brand"` + one quiet link. Remove `Sparkles` badge.
- [ ] **Step 2:** Restyle `IndustriesSection` + `TechnologyExpertise` onto tokens (canvas/paper, hairline, mono `text-brand` accents, `rounded-[16px]`, standardized hover, dot indicators lose the blue glow). No eyebrow on these (budget spent on Hero/Services; 3rd reserved for nothing — keep ≤3 total).
- [ ] **Step 3:** Update `Index.tsx`: remove `MobileGate`/`MobileHome` for `/`; render directly. New order: `Header, Hero, WhoWeAre(+LogoWall), Services, WhyNeoPerion, CaseStudiesPreview, HomeTestimonials, EngagementModel, ProcessTimeline, TechnologyExpertise, IndustriesSection, HomeFaq, HomeCTA, Footer`. Remove unused `HomeContact` import. Keep `min-h` wrapper but use `bg-canvas text-ink`.
- [ ] **Step 4: Verify** `cd frontend && npm run build`; render `/` at mobile + desktop widths.
- [ ] **Step 5: Commit** `git add -A && git commit -m "feat(home): single closing CTA, token restyle, responsive Index (retire MobileHome on /)"`

---

## Phase 3 — Navbar + Footer

### Task 3.1: Header / Navbar

**Files:** Modify `frontend/src/components/Header.tsx`

- [ ] **Step 1:** Top-level items: Logo · Services · Work · Pricing · Company · [Contact button]. "Work" links `/company/case-studies`, "Pricing" anchors the engagement section (`/#engagement` or scroll). Promote both out of the Company menu.
- [ ] **Step 2:** Slim mega-menu: remove per-item descriptions except one promoted card; constrain panel width (~520px) anchored under trigger, not full-bleed. Keep Framer fade; add ~120ms hover-intent open delay; add `bg-ink/5` scrim behind open panel.
- [ ] **Step 3:** Replace dual-PNG logo with a single image (use existing `np-logo.png` + text as one lockup, or inline SVG if available). Scrolled state border fades `border-hairline/0 → /60` (no snap). CTA button `Button variant="brand"`.
- [ ] **Step 4:** Mega-menu accents mono `text-brand`/`text-muted2`; remove the multi-color service icon set variety (consistent `strokeWidth={1.75}`).
- [ ] **Step 5: Verify** build + render; open each dropdown.
- [ ] **Step 6: Commit** `git commit -am "feat(nav): slim mega-menu, promote Work/Pricing, token restyle"`

### Task 3.2: Footer

**Files:** Modify `frontend/src/components/Footer.tsx`; create `frontend/src/pages/Privacy.tsx`, `frontend/src/pages/Terms.tsx`; modify `frontend/src/App.tsx`

- [ ] **Step 1:** Footer → tonal light (`bg-canvas` or a soft `bg-[#0A0A0B]` only if committing to dark; spec default = light). Remove the `blur-[120px]` blob and `text-neo-gradient`/`neo-glow-text` on the CTA word. Tighten wordmark to `tracking-tight`. Hairline dividers. Social icons single brand hover.
- [ ] **Step 2:** Create minimal real `Privacy.tsx` and `Terms.tsx` pages (Header + Footer + a placeholder legal body with real headings and a "last updated" line). Add routes `/privacy` and `/terms` in `App.tsx`.
- [ ] **Step 3:** Fix footer Legal links: Privacy → `/privacy`, Terms → `/terms`, Security → `/security`. Add real entity line "© {year} Neo Perion · Chennai, India".
- [ ] **Step 4:** Reduce the footer's top CTA to a small inline strip (the big closing CTA now lives in HomeCTA) to remove duplication.
- [ ] **Step 5: Verify** `cd frontend && npm run build`; click all footer links.
- [ ] **Step 6: Commit** `git add -A && git commit -m "feat(footer): tonal restyle, real Privacy/Terms pages, fix legal links"`

---

## Phase 4 — Quality Gate

### Task 4.1: Lint, build, reviewers

- [ ] **Step 1:** `cd frontend && npm run lint` — fix any *new* errors introduced (legacy decorative lint noise is pre-existing; don't chase it).
- [ ] **Step 2:** `cd frontend && npm run build` — must succeed.
- [ ] **Step 3:** Run ECC reviewers on the diff: `react-reviewer`, `typescript-reviewer`, `code-reviewer`. Address actionable findings.
- [ ] **Step 4:** Manual render pass at 390px, 768px, 1280px: verify (a) one blue only, (b) no two adjacent sections share a layout, (c) no ClickSpark, (d) FAQ + price anchors + testimonials + logo wall present, (e) footer links resolve, (f) `/` is responsive with no MobileHome swap.
- [ ] **Step 5: Commit** any fixes `git commit -am "chore(home): quality-gate fixes (lint/build/review)"`

---

## Self-Review (spec coverage)

- Audit flaws 1–12 (spec §1) → Tasks: card monoculture (2.3/2.5/2.6), AI signals (1.2 eyebrow budget, varied layouts), color chaos (0.1/0.2/2.4/3.x), no proof (1.4/2.2/2.5/2.6), fake terminal (2.1), redundant CTAs (2.10/3.2), monotonous rhythm (1.2 rhythm prop), button/radii (1.1/1.3), price anchors (2.7), no FAQ (2.9), footer (3.2), two design languages (2.10 Index). ✅ all covered.
- Placeholder scan: copy for FAQ (2.9) written at execution as real copy; stats/testimonials/prices explicitly marked placeholder for later swap (intended, per asset decision). ✅
- Type consistency: `Section`/`Eyebrow`/`SectionHeading`/`MarketingCard`/`BrowserFrame`/`LogoWall`/`StatBand`/`Testimonials`/`FaqAccordion` names used consistently across Phase 2–3. ✅
- `MobileGate` only removed from `Index.tsx`; file kept for 30+ other pages. ✅
