# AINCURU UI Migration — Project Memory

> Persistent session memory. Update this before context fills.

---

## 1. PROJECT IDENTITY

Company: AINCURU LLP  
Visual Brand: Living Engineering Manuscript  
Brand Tagline: Context Before Intelligence  
Domain: neoperion.com (legacy domain, brand is AINCURU)

---

## 2. CODEBASE OVERVIEW

Framework: React 18 + TypeScript + Vite  
CSS: Tailwind CSS  
Animation: Framer Motion  
Routing: React Router DOM  
Data: Supabase (backend)  
Components: shadcn/ui primitives + custom components  
Mobile: MobileGate pattern (MobileGate mobileOnly fallback={desktop} > mobile)

---

## 3. DESIGN SYSTEM — EXISTING TOKENS

### Tailwind manuscript.* palette (tailwind.config.ts)
```
manuscript.parchment       #F5ECDC
manuscript.parchmentWarm   #EFE2C8
manuscript.parchmentLight  #F7EFDB
manuscript.parchmentDeep   #E8D8B8
manuscript.ink             #1F1A14
manuscript.inkSoft         #2C241B
manuscript.inkMuted        #5A4A3A
manuscript.walnut          #5B3A1F
manuscript.walnutDeep      #3F2812
manuscript.rust            #A6432A
manuscript.rustDeep        #8B3A1F
manuscript.gold            #B68A35
manuscript.goldWarm        #D4A857
manuscript.goldDeep        #8E6A20
manuscript.copper          #A84A28
manuscript.copperMuted     #C17A55
manuscript.sage            #6B7F5A
manuscript.sageSoft        #8DA37C
```

### AINCURU Brand Colors (from brief — map to manuscript tokens)
```
PRIMARY PARCHMENT   #F7EED9  → manuscript.parchmentLight
PAPER CARD          #F0E3C8  → manuscript.parchmentWarm
PRIMARY INK         #2D2417  → manuscript.inkSoft
MUTED INK           #6B5E4A  → manuscript.inkMuted
COPPER / ACCENT     #B85C2B  → manuscript.copper
BORDER              #D9C3A1  → between manuscript.parchmentDeep and ink-10
DARK INK            #0B0A08  → manuscript.walnutDeep approx
DARK SURFACE        #12100D  → manuscript.ink approx
COPPER DARK         #8B4513  → manuscript.rustDeep
```

### Font families (tailwind.config.ts)
```
font-manuscript         Cormorant Garamond — display/editorial headers
font-manuscriptBody     Inter — body text
font-manuscriptHand     Caveat — handwritten/marginalia accents
font-display            Inter Tight — legacy (pre-manuscript)
font-mono               JetBrains Mono — technical labels
```

### Existing CSS utility classes (src/styles/manuscript.css)
```
.parchment-surface          Background layered parchment gradient
.parchment-surface--warm    Warmer parchment variant
.parchment-surface--light   Lighter parchment
.parchment-surface--deep    Deeper parchment
.ink-rule                   Ink hairline divider
.ink-rule--rust             Rust colored divider
.ink-rule--gold             Gold colored divider
.ornament-dots              Three-dot ornament with flanking rules
.ornament-fleuron           Diamond/fleuron ornament
.chapter-eyebrow            Small uppercase tracked label (gold)
.heading-manuscript         Cormorant Garamond heading
.heading-manuscript--italic Italic variant
.pull-quote                 Caveat blockquote
.manuscript-card            Paper card with shadow
.btn-manuscript-primary     Ink/parchment button
.btn-manuscript-secondary   Gold outline button
.tag-sage                   Sage badge
.wax-seal                   Circular logo frame (rust)
.marginalia                 Handwritten aside (rotated Caveat)
.prose-manuscript           Typography for blog/case-study prose
```

---

## 4. ARCHITECTURE PATTERNS

### Page structure (desktop)
```tsx
<div className="parchment-surface min-h-screen">
  <Header />
  <main>
    {/* sections with parchment-surface variants */}
  </main>
  <Footer />
</div>
```

### Mobile gate pattern
```tsx
<MobileGate mobileOnly fallback={<DesktopVersion />}>
  <MobileVersion />
</MobileGate>
```
— NEVER remove the mobile gate pattern
— Desktop fallback is what we're migrating visually

### Completed service page reference
File: /services/ai-systems-automation
Template: ServiceVideoHero + ServicePage sections
Visual DNA: parchment-surface, heading-manuscript, chapter-eyebrow, manuscript-card, copper accents, ink-rule

---

## 5. WHAT MUST NOT BE CHANGED

- MobileGate wrapper structure
- All Supabase calls
- ContactForm logic
- CalendlyEmbed
- Form submissions
- Routes / URLs
- Navigation links
- SEO metadata (just visual wrapper)
- Admin pages (entirely out of scope)
- LOCKED pages: Home, Services, AI Systems & Automation

---

## 6. GLOBAL VISUAL RULES FOR ALL REMAINING PAGES

### Background
- Base: `parchment-surface` (or `parchment-surface--warm/light/deep` for variety)
- Wrapper class: `manuscript-root` on outermost div
- Optional: subtle SVG pattern overlay via inline style

### Section rhythm (desktop)
- Hero/title section: py-32 to py-40
- Content sections: py-24
- CTA sections: py-20

### Section label convention (above every h2)
```tsx
<p className="chapter-eyebrow mb-4">Section Label</p>
```

### Heading convention
```tsx
<h2 className="heading-manuscript text-4xl md:text-5xl mb-6">Title</h2>
```

### Cards
- Use `.manuscript-card` for content cards on parchment
- For dark panel sections use: `bg-[#1F1A14]` with `border border-manuscript-walnut/20`

### CTA buttons
- Primary: `.btn-manuscript-primary`
- Secondary: `.btn-manuscript-secondary`

### Copper accents
- Eyebrows, metadata, small labels: `text-manuscript-copper`
- Dividers: `.ink-rule--rust` or `.ink-rule--gold`

### Dark sections (for contrast rhythm)
- bg: `bg-[#1F1A14]` or `bg-manuscript-ink`
- text: `text-manuscript-parchmentLight`

---

## 7. COMPLETION LOG

### Phase A — Audit ✅ COMPLETE
- Full codebase mapped
- Existing design tokens catalogued
- All 27 page files reviewed
- Component directories mapped
- manuscript.css and tailwind tokens documented

### Phase B — Locked pages confirmed ✅
- Home: LOCKED
- Services: LOCKED
- AI Systems & Automation: LOCKED

### Phase C — Service detail pages: ⬜ PENDING

### Phase D — About, Founder Letter: ⬜ PENDING

### Phase E — Industries: ⬜ PENDING

### Phase F — Technologies: ⬜ PENDING

### Phase G — Blog: ⬜ PENDING

### Phase H — Case Studies: ⬜ PENDING

### Phase I — Careers: ⬜ PENDING

### Phase J — Contact, Newsletter: ⬜ PENDING

### Phase K — Success Stories, Testimonials, Insights, ForUsClients: ⬜ PENDING

### Phase L — Portfolio, Portfolio Detail: ⬜ PENDING

### Phase M — Legal (Security, Privacy, Terms, Refund): ⬜ PENDING

### Phase N — 404: ⬜ PENDING

### Phase O — Global QA: ⬜ PENDING

---

## 8. CURRENT SESSION STATE

Currently executing: Phase C — Service detail pages (other services)
Next: Phase D — About, Founder Letter

---

## 9. KNOWN ISSUES / WARNINGS

- AboutHero uses the old video hero (orange brand) — keep the cinematic hero, just change the body sections to manuscript
- IndustriesPage: FloatingLines purple gradient — must be replaced with manuscript treatment
- CaseStudies.tsx: dark blue bg (#050816) — full parchment migration needed
- Technologies.tsx: #02040A background — simple page, straightforward migration
- SuccessStories.tsx: Hardcoded story data — DO NOT change data, only visual
- 404 (NotFound.tsx): Currently a bare minimum page — needs full manuscript 404 treatment
- FounderLetter.tsx: Has `text-[#09090B]` on a dark bg — visual bug in desktop view (content color mismatch)
- Privacy.tsx: Already uses Section bg="paper" — closest to manuscript, just needs adjustments

---

## 10. ASSETS AVAILABLE

- /images/founder.jpg — Founder photo
- /images/np-logo.png — Logo
- /images/7565824-hd_2048_1080_25fps.mp4 — Cinematic video (used in AboutHero)
- Cormorant Garamond + Caveat: loaded via manuscript.css Google Fonts import
- Inter Tight + Inter: loaded in index.html
