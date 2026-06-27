# Neo Perion — AI Solutions Page Redesign (UX Strategy + Build Spec)

**Date:** 2026-06-27 · **Status:** Proposed, pending approval to implement
**Page:** `/services/ai-systems-automation` ("AI Solutions")
**Author framing:** Senior product design + CRO, enterprise SaaS.

---

## 1. Strategy: the positioning shift

The current page reads like **developer documentation** — RAG, vector DBs, GPT/Claude, fine-tuning,
architecture. But the buyer is a **founder / CEO / CTO / ops leader**. They don't buy "RAG." They buy
**"my team stops wasting hours hunting for answers."**

> **Move the technology down the page. Lead with the business outcome.**
> Positioning line: **"From idea to intelligent product."**
> Page promise: **"Production-ready AI that solves expensive business problems — not experiments."**

Every section answers one buyer question, in this order:

1. What does Neo Perion do? → **Hero**
2. Can I trust them? (fast) → **Trust bar**
3. What's the impact? → **Business Impact (KPIs)**
4. Do they get my pain? → **Business Problems**
5. How do they solve it? → **AI Solutions (by business value)**
6. How does it actually work? → **How It Works (journey → expandable tech)**
7. Why can't I just use ChatGPT/Copilot? → **Why Neo Perion / differentiation**
8. Does it fit my industry? → **Industries**
9. Has it worked for others? → **Case Studies**
10. Objections? → **FAQ**
11. How do I start? → **Final CTA**

---

## 2. Final information architecture (sitemap)

```
HERO  (outcome promise + dual CTA + ambient motion)
  ↓
TRUST BAR  (logos / one-line proof)            ← borrow credibility before scroll
  ↓
BUSINESS IMPACT  (4–6 premium KPI cards, count-up)
  ↓
BUSINESS PROBLEMS  (pain-point card grid, 6–8)
  ↓
AI SOLUTIONS  (business-category solution cards, 6, with use cases)
  ↓
HOW IT WORKS  (6-step customer journey → expandable technical architecture)
  ↓
WHY NEO PERION  (differentiation / enterprise trust, 6 pillars)
  ↓
INDUSTRIES  (industry showcase grid + use cases)
  ↓
CASE STUDIES  (premium success cards: problem → solution → impact → ROI → time)
  ↓
FAQ  (objection-ordered accordion + schema)
  ↓
FINAL CTA  (premium enterprise close + booking)
  ↓
(sticky CTA persists from after Hero)
```

This is intentionally **outcome → proof → mechanism → trust → fit → evidence → objections → close** —
the classic enterprise consideration funnel, not a feature dump.

---

## 3. Design system / tokens (black + orange, restrained)

**Color (layer the dark, ration the orange):**
| Token | Value | Use |
|-------|-------|-----|
| `bg` | `#0A0A0B` | page base |
| `surface` | `#121113` | cards |
| `elevated` | `#1A1A1D` | hover / nested |
| `hairline` | `rgba(255,255,255,0.08)` | borders/dividers (NOT shadows) |
| `text` | `#FAFAFA` | headings |
| `text-secondary` | `#A1A1AA` | body |
| `text-tertiary` | `#71717A` | eyebrows/captions |
| `brand` | `#F77E0D` | **CTA fills, ONE stat number/region, focus rings only** |
| `brand-hover` | `#FB8C2A` | hover |
| `brand-tint` | `rgba(247,126,13,0.10)` | icon tiles, soft glows |

**Type** (existing `Inter Tight` display + `Inter` body):
- Display/H1: `clamp(2.5rem,5vw,4rem)` / 700 / leading-1.05 / tracking-tight
- H2: `clamp(1.75rem,3vw,2.5rem)` / 700
- H3 (card): `1.25rem` / 600 · KPI number: `clamp(2.5rem,4vw,3.5rem)` / 700 / brand
- Body: `1–1.125rem` / 400 / `text-secondary` / leading-relaxed
- Eyebrow: `0.75rem` / 700 / uppercase / `tracking-[0.25em]` / brand

**Spacing/grid:** 4px base. Section `py-20`→`py-28`. Container `max-w-[1200px]`, `px-6 lg:px-8`, 12-col.
Card padding `p-6`/`p-8`, grid `gap-6`. **Radius:** cards/buttons `rounded-xl` (12px), feature panels `rounded-2xl`, pills `rounded-full`.

**Buttons:** Primary = orange fill, dark text (`text-[#0A0A0B]`), `rounded-xl px-7 py-4`. Secondary = ghost,
`border-white/15`, hover `border-brand/50`. Tertiary = `text-brand` link w/ arrow.

**Icons:** lucide, 1.5–2px stroke, inside a 48px `rounded-xl` tile (`bg-brand-tint` or `surface` + hairline), icon in `text-brand`.

**Motion philosophy:** *calm, purposeful, never bouncy.* Scroll-reveal = fade + 8–16px rise, 0.5s `ease-1`.
Hover = tonal lift (`surface`→`elevated`) + orange hairline. Numbers count up once in view. Connection lines
draw-in on How It Works. **All gated by `prefers-reduced-motion`.** Reuse existing `.reveal`/`.in-view`.

**Glass:** only on the hero ambient layer. Elsewhere use solid `surface` + hairline (glass over content hurts legibility & perf).

---

## 4. Section-by-section spec

> Each block: Purpose · UX reasoning · Desktop wireframe · Mobile · Content direction · CTA · Motion/Interaction · Components · Icons · A11y · CRO.

### 4.1 HERO
- **Purpose:** In <5s say what we build, for whom, and the value.
- **UX reasoning:** Outcome headline beats buzzwords; one dominant message + one primary action reduces decision load.
- **Desktop wireframe:**
```
┌───────────────────────────────────────────────────────────┐
│ [eyebrow] AI SOLUTIONS · FROM IDEA TO INTELLIGENT PRODUCT   │
│                                                            │
│  Production-ready AI that runs                ╔══════════╗ │
│  your business — not demos.                   ║ ambient  ║ │
│                                               ║ neural / ║ │
│  We build AI agents, copilots & automation    ║ motion   ║ │
│  your team can actually trust.                ║ (right)  ║ │
│                                               ╚══════════╝ │
│  [ Book a strategy call → ]  [ See what we build ]         │
│  ── trusted by · 4 logos · or "50+ AI systems shipped" ──  │
└───────────────────────────────────────────────────────────┘
```
- **Mobile:** stack; motion becomes a contained banner above headline OR subtle full-bleed at 40vh; CTAs full-width stacked; trust row scrolls horizontally.
- **Content:** H1 "Production-ready AI that runs your business — not demos." Sub: "We design, build, and ship AI agents, copilots, and automation your team can trust — secure, auditable, and live in weeks." Primary CTA "Book a strategy call"; secondary "See what we build" (scrolls to Solutions).
- **CTA:** primary (orange) + secondary (ghost). Sticky CTA initialized here.
- **Motion:** ambient particle/neural drift (existing `feed your mind` gif or canvas) at low opacity behind scrim; headline reveal on load.
- **Components:** `ServiceVideoHero` (extended — already supports image/neural/video + scrim + full-height).
- **Icons:** none (keep clean); arrow on CTA.
- **A11y:** ambient motion `aria-hidden`, reduced-motion → static; H1 is the only h1; contrast ≥ 4.5 via scrim.
- **CRO:** outcome H1 + single primary CTA + instant proof = higher above-fold conversion.

### 4.2 TRUST BAR
- **Purpose:** Borrow credibility immediately.
- **Wireframe:** `── logo  logo  logo  logo  logo  ──` (grayscale) OR one line: "50+ AI systems shipped · 0 data used to train external models."
- **Mobile:** horizontal scroll, snap.
- **Content:** real client logos if available; else 3 headline proof stats (NO fabricated logos).
- **Motion:** subtle fade-in; optional slow marquee.
- **Components:** `ServiceTrustStrip` (exists).
- **A11y:** logos have `alt`; marquee pausable.
- **CRO:** social proof before the ask lifts downstream conversion.

### 4.3 BUSINESS IMPACT (KPI cards)
- **Purpose:** Lead with quantified outcomes, not features.
- **UX reasoning:** Numbers are scannable proof; premium cards signal seriousness.
- **Desktop wireframe:**
```
┌── Outcomes our clients see ───────────────────────────────┐
│ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐               │
│ │  70%   │ │ 100s   │ │  24/7  │ │   0    │               │
│ │ faster │ │ hrs    │ │ always │ │ data   │               │
│ │ answers│ │ saved  │ │ on AI  │ │ leaked │               │
│ └────────┘ └────────┘ └────────┘ └────────┘               │
└───────────────────────────────────────────────────────────┘
```
- **Mobile:** 2×2 grid.
- **Content:** 4–6 KPIs: faster knowledge retrieval, hours saved/week, automation level, productivity ↑, support resolution ↑, "0 data used to train 3rd-party models." Use `[ADD METRIC]` until real.
- **Motion:** **count-up** when in view; staggered reveal.
- **Components:** `ServiceStatsBand` (exists) → upgrade to bordered KPI **cards** variant.
- **Icons:** small trend/clock/shield glyph per card, `text-brand`.
- **A11y:** final value present in DOM for SR (count-up is visual only); not color-only meaning.
- **CRO:** outcomes-first reframes price as ROI.

### 4.4 BUSINESS PROBLEMS (pain grid)
- **Purpose:** Show we understand their world → earn the right to pitch.
- **Desktop wireframe:** 3-col (×2–3 rows) cards:
```
┌─ The problems we remove ──────────────────────────────────┐
│ [icon] Knowledge      [icon] Hours lost     [icon] Manual   │
│ trapped in docs       to searching          busywork        │
│ 1-line desc           1-line desc           1-line desc     │
│ [icon] Disconnected   [icon] AI that        [icon] Slow     │
│ tools                 hallucinates          support         │
└───────────────────────────────────────────────────────────┘
```
- **Mobile:** 1-col; or horizontal snap carousel.
- **Content:** 6–8: knowledge trapped in documents · employees waste time searching · manual repetitive work · disconnected tools · AI hallucinations / untrustworthy outputs · poor/slow customer support · compliance & data risk · information silos. Each: title + one-line.
- **Motion:** scroll-reveal stagger; on hover icon micro-animation (e.g. magnifier nudges, lock clicks) — subtle.
- **Components:** new `ServiceProblemGrid` (card grid).
- **Icons:** FileLock, Search, Repeat, Unplug, AlertTriangle, MessageSquareWarning, ShieldAlert, Boxes.
- **A11y:** cards are not links unless they go somewhere; icons decorative.
- **CRO:** problem-resonance ("they get me") builds trust cheaply and primes the solution.

### 4.5 AI SOLUTIONS (by business value)
- **Purpose:** Map solutions to **business outcomes**, not tech.
- **UX reasoning:** Buyers self-identify by need; group accordingly.
- **Desktop wireframe:** 3-col cards (×2 rows), each expandable / linkable:
```
┌─ What we build ───────────────────────────────────────────┐
│ [icon] AI Knowledge     [icon] AI Agents     [icon] Workflow│
│ Assistant               (do work, not        Automation     │
│ "Ask anything across    just chat)           "Kill manual   │
│  your company."         • use cases…         steps."        │
│ • benefit · benefit                                          │
│ [icon] Document Intel   [icon] Internal      [icon] Customer │
│                         Copilot               Support AI     │
└───────────────────────────────────────────────────────────┘
```
- **Mobile:** 1-col; optional accordion to keep it short.
- **Content:** 6 categories: AI Knowledge Assistant · AI Agents · AI Workflow Automation · Document Intelligence / Enterprise Search · Internal Copilot · Customer Support AI (Sales/Ops AI optional). Each: headline + 1-line value + 2–3 benefits + 1 example use case.
- **CTA:** each card → relevant CTA or deep section; section-level "Book a strategy call."
- **Motion:** hover lift; optional expand-in-place for benefits/use cases.
- **Components:** reuse/extend `ServiceCapabilities` → richer `ServiceSolutionCards` (benefits + use case).
- **Icons:** Sparkles, Bot, Workflow, FileSearch, MessagesSquare, Headset.
- **A11y:** expanders are `<button aria-expanded>`; keyboard operable.
- **CRO:** outcome-named solutions convert better than "RAG/LLM."

### 4.6 HOW IT WORKS (journey first, tech on demand)
- **Purpose:** Make the mechanism feel simple and safe; defer jargon.
- **Desktop wireframe:**
```
Connect data → AI understands → Team asks → AI finds answers → AI acts → Business speeds up
   (1)             (2)             (3)           (4)              (5)        (6)
[ ▸ See the technical architecture (RAG, vectors, evals) ]   ← expandable
```
- **Mobile:** vertical stepper with connecting line.
- **Content:** 6 plain-language steps (above). Expandable reveals the **technical** layer (the existing RAG cards) for technical buyers — progressive disclosure.
- **Motion:** connection line **draws in** on scroll; active step highlights; expandable slides open.
- **Components:** new `ServiceJourney` + collapsible `ServiceTechArchitecture` (wraps existing RAG cards).
- **Icons:** Database, BrainCircuit, MessageSquare, Search, Zap, TrendingUp.
- **A11y:** stepper as ordered list; expander labeled; line decorative.
- **CRO:** "simple to adopt" lowers perceived risk; tech-on-demand serves CTOs without scaring CEOs.

### 4.7 WHY NEO PERION (differentiation / trust)
- **Purpose:** Answer "why not ChatGPT/Copilot/an offshore team?"
- **Desktop wireframe:** 3×2 pillar grid (icon + title + 1-line):
```
Enterprise security · Private/on-prem deploy · Custom (not wrappers)
Production-ready (not POCs) · Senior team, no offshoring · Long-term partnership
```
- **Mobile:** 1-col.
- **Content:** the 6 pillars above; each one line of proof.
- **Motion:** reveal stagger; subtle icon draw.
- **Components:** reuse `WhyNeoPerion` pattern or new `ServiceDifferentiators`.
- **Icons:** ShieldCheck, ServerLock, Wrench, Rocket, Users, Handshake.
- **A11y:** semantic list; contrast.
- **CRO:** directly defuses the biggest objection ("we'll just use ChatGPT").

### 4.8 INDUSTRIES
- **Purpose:** Help buyer see themselves; signal breadth + relevance.
- **Desktop wireframe:** responsive icon grid (3–5 col), each → tooltip/expand with use cases:
```
Healthcare  Finance  Manufacturing  Legal  Education
Retail  Real Estate  SaaS  Startups  Enterprise
```
- **Mobile:** 2-col grid or horizontal chips.
- **Content:** per industry: icon + 1-line + 2 AI use cases. Keep copy generic-true (no fake clients).
- **Motion:** hover reveals use cases; subtle.
- **Components:** new `ServiceIndustries`.
- **Icons:** HeartPulse, Landmark, Factory, Scale, GraduationCap, ShoppingBag, Building2, Cloud, Rocket, Building.
- **A11y:** if hover reveals content, also expose on focus/tap.
- **CRO:** relevance ("works for my sector") increases qualified intent.

### 4.9 CASE STUDIES (premium success cards)
- **Purpose:** Evidence with ROI.
- **Desktop wireframe:** 1–2 horizontal premium cards:
```
┌──────────────────────────────────────────────────────────┐
│ [client/sector]                                           │
│ Problem  →  Solution  →  Business impact                  │
│ ┌ ROI: [x] ┐ ┌ Time to live: [x wks] ┐ ┌ metric: [x] ┐    │
│ [ Read the story → ]                                      │
└──────────────────────────────────────────────────────────┘
```
- **Mobile:** stacked card; metric chips wrap.
- **Content:** Problem · Solution · Business Impact · ROI · Implementation time. **Needs real data — placeholders until provided; will not fabricate clients/ROI.**
- **Motion:** reveal; metric count-up.
- **Components:** upgrade `ServiceProof` → `ServiceCaseStudyCard` (metric chips + ROI/time).
- **A11y:** "Read the story" descriptive link text.
- **CRO:** quantified proof next to a CTA is the single strongest converter.

### 4.10 FAQ
- **Purpose:** Remove last objections; SEO.
- **Order (objection-priority):** security/data → accuracy/hallucination → time-to-value → cost/engagement model → integration → ownership/lock-in.
- **Wireframe:** single-open accordion, first item open.
- **Mobile:** same; large tap targets (≥44px).
- **Motion:** smooth height; chevron rotate (exists).
- **Components:** `ServiceFaqSection` (exists, has FAQPage JSON-LD).
- **A11y:** `aria-expanded`, keyboard, focus-visible.
- **CRO:** answers objections at the decision point; can embed a soft CTA in answers.

### 4.11 FINAL CTA
- **Purpose:** Confident enterprise close.
- **Desktop wireframe:**
```
┌─ raised surface, soft orange glow ────────────────────────┐
│   Ready to ship AI your team can trust?                   │
│   Book a 30-min strategy call — leave with a plan.        │
│   [ Book a strategy call → ]   [ See pricing/engagement ] │
└───────────────────────────────────────────────────────────┘
```
- **Mobile:** full-width; primary button full-width.
- **Content:** outcome restate + low-friction offer (strategy call, not "buy").
- **Motion:** subtle glow pulse (reduced-motion safe).
- **Components:** reuse `EnterpriseCTA` (restyled) + `ServiceStickyCta` (persistent).
- **A11y:** strong contrast; button ≥44px.
- **CRO:** specific low-commitment CTA ("leave with a plan") beats "Contact us."

---

## 5. Motion & interaction summary
Scroll-reveal (fade+rise) globally · KPI/metric count-up · How-It-Works connection-line draw-in ·
card hover tonal lift + orange hairline · solution/industry expand-in-place · FAQ accordion · hero ambient
drift. **Everything reduced-motion gated.** No parallax-heavy or bouncy effects (off-brand for enterprise trust).

## 6. Content I need from you (to remove placeholders)
- Real **KPIs/outcomes** (even ranges) · real **client logos** (or permission) · **1–2 case studies** with
  problem/solution/impact/ROI/time · which **industries** to feature · any compliance certs (SOC2/ISO/HIPAA).
Until provided, these render as clearly-marked `[ADD …]` placeholders — I won't invent clients or numbers.

## 7. Implementation mapping (reuse-first)
- **Exists, reuse:** `ServiceVideoHero` (hero), `ServiceTrustStrip`, `ServiceStatsBand`→KPI-card variant,
  `ServiceCapabilities`→solution cards, `ServiceFaqSection`, `EnterpriseCTA`, `ServiceStickyCta`, existing RAG cards (→ inside expandable tech).
- **New components:** `ServiceProblemGrid`, `ServiceSolutionCards` (benefits+use cases), `ServiceJourney` + collapsible `ServiceTechArchitecture`, `ServiceDifferentiators`, `ServiceIndustries`, `ServiceCaseStudyCard`.
- **Data:** extend `ServiceData` with optional `impact[]`, `problems[]`, `solutions[]`, `journey[]`,
  `differentiators[]`, `industries[]`, `caseStudies[]` (all optional → section skips when absent).
- **Build order (pilot AI Solutions):** Hero ✓ → Trust → Impact → Problems → Solutions → How-It-Works → Why → Industries → Case Studies → FAQ ✓ → CTA. Verify each via `npm run build` + visual.

## 8. Accessibility & performance baseline
Semantic landmarks (`main`, `section`, headings in order) · contrast ≥4.5 (≥3 for large) · all hover content
also on focus/tap · keyboard + visible focus · reduced-motion paths · images `alt` · gif/video `aria-hidden` ·
lazy-load below-fold media · keep hero asset light (the gif is ~3.7MB — consider a webm/poster later for LCP).
