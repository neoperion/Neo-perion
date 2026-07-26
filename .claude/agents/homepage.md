Home page
Primary landing page — highest traffic, highest stakes
Mobile: 3/10
Tablet: 5/10
Desktop: 6/10
Trust: 2/10
Conversion: 4/10
1 — Current UI problems
Hero headline "Build Software That Scales" is generic — every agency on the internet uses this phrase. Zero differentiation, zero memory.
The 3D crystal/diamond hero visual is a stock-looking low-quality render. It signals "template site" and has zero connection to software engineering or AI.
White navigation on a light hero background creates near-zero contrast — logo and nav links are barely readable before the dark section begins.
The word "Scales" is italicized in blue — cheap typographic trick. The weakest word on the page gets the most visual attention.
Technology ticker (Azure, Supabase, PostgreSQL…) is meaningless noise without narrative. It doesn't tell me why these technologies matter for my project.
Industry cards use 5px bullet points — inaccessible, fails WCAG AA contrast at those sizes.
The capabilities accordion requires interaction to reveal content — a first-time visitor will not click through 4 items to understand what you do.
The dark quote banner mid-page (Vasantharaj quote) causes jarring visual rhythm break — light → dark → light creates cognitive whiplash.
Contact form embedded on homepage before any trust has been established — premature conversion ask.
Floating right-side widget icons (chat, expand, avatar) overlap content area on screens under 1200px.
2 — Current UX problems
No social proof above the fold. Stripe, Linear, Vercel all have client logos or metrics within 300px of page top. This site has nothing until far below the fold.
CTA hierarchy is broken — "Initiate Project" and "Explore Our Work" have equal visual weight. One primary CTA must dominate.
No clear identity statement in the first 5 seconds — is this an agency, a SaaS, a consulting firm? A VP of Engineering can't tell.
"Featured Work" section is buried too far below the fold — the most persuasive content arrives too late in the scroll journey.
The "How We Build" process section uses oversized decorative step numbers (01–05) that feel cosmetic, not informative.
No pricing anchor, engagement model, or project scope anywhere — enterprise buyers need orientation before committing to a discovery call.
3 — Content review
Remove
"Build Software That Scales" — replace with specific, differentiated claim about Neo Perion's philosophy

Remove
3D crystal hero asset — replace with animated terminal, architecture diagram, or real project preview

Remove
Standalone technology ticker — merge into capabilities section with context

Remove
Homepage contact form — move to dedicated contact page only

Improve
Hero headline → "The product engineering firm that doesn't disappear after launch." — specific, differentiated, memorable

Improve
Industry cards → add micro-case-study excerpt per industry card, not just bullet list

Improve
Capabilities accordion → show all 4 items by default, no interaction required to see them

Keep
Founder quote — strong brand statement, keep but move it closer to hero, not mid-page orphan

Keep
Featured Work / Case Studies section — move higher up the page (directly after hero)

Add
Client logo strip or 4-metric proof band immediately below hero (client count, years, projects, satisfaction)

Add
Engagement model summary section — "MVP Sprint / Ongoing Partner / AI Integration" with rough scope

4 — Mobile redesign concept (320–640px)
Hero
Single column. Headline: 36px max, 2 lines. Subhead: 15px. Stack: headline → subtext → ONE primary CTA button (full width, 48px height) → secondary text link below. No visual asset on mobile — pure typography hero.

Navigation
Hamburger menu (44×44px tap target). Full-screen overlay on open. Logo left, hamburger right. CONTACT button replaced with hamburger on mobile. Menu items 18px, line-height 2x for tap comfort.

Proof band
2×2 metric grid below hero. Each metric: large number (28px/500) + small label (11px). Full width, light gray background strip. No horizontal scroll.

Services
Single column cards. Each card: icon (20px) + title + 2-line description. Full width. 12px border-radius. Tap to expand details (accordion). Remove "Explore Capability →" links — too much UI density.

Case Studies
Stacked vertical cards. Image: 16:9 ratio, full width, above text. Industry tag + headline + metric stat + "Read →" link. 2 cards initially, "Load more" button.

CTA section
Full-width dark section. "Ready to build?" headline (28px). Subtext (14px). Two buttons stacked: "Book a strategy call" (filled, full width) + "See our work" (outlined, full width). 16px gap between buttons.

Mobile AI design prompt
Design a mobile-first homepage for Neo Perion Solutions (AI product engineering company). Single column layout, 375px base. Hero: 36px headline "The product engineering firm that doesn't disappear after launch", 15px subtext, full-width 48px CTA button "Book a strategy call" in #0A0A0A, secondary link "See our work" below. Below hero: 2×2 metrics grid on #F4F4F5 strip. Then: stacked full-width service cards with icon + title + 2-line description, expandable. Then: stacked case study cards (image top, content below, colored industry tag, large metric stat). Footer: accordion nav grouped by category. No floating widgets. Font: Inter. Clean, thumb-friendly, fast.

5 — Tablet improvements (641–1024px)
Hero
2-column at 768px+: headline + subtext left (55%), animated terminal or architecture mockup right (45%). Headline 44px. CTA inline (not full-width).

Grid
Services: 2-column. Case studies: 2-column. Metrics: 4-column single row. Industry cards: 2×2 grid. Nav: full horizontal bar (no hamburger at 768px+).

6 — Desktop improvements (1024px+)
Layout
Max-width 1200px centered. Hero: 55/45 split. Services: 3-column grid. Case studies: 3-column or 2-column large cards. Capabilities: tabbed side panel (tabs left, content right). Ultra-wide (1440px+): increase side margins, content stays max 1200px — never stretch.

Enhancements
Magnetic cursor effect on CTA buttons (60px radius). Hover: cards lift 2px with border color change. Number counters animate on scroll-into-view. Floating right-side widgets: remove completely.

7 — White theme concept
Visual direction
Background: #FAFAFA. Surface cards: #FFFFFF, 0.5px #E4E4E7 border, 12px radius. No shadows — borders do the work. Typography: DM Sans 600 for display, Inter 400 for body. Accent: #1D4ED8. Hero: pure white, left-aligned, headline in #09090B, subhead in #71717A. Tech stack shown as pill tags (not a ticker). Case studies: image-left + stats-right horizontal card. Footer: 5-column grid, #F9F9F9 background, 0.5px top border.

White theme AI prompt
Design a Stripe-level premium white homepage for Neo Perion Solutions. Background: #FAFAFA. Hero: full-width white, left-aligned, DM Sans 600 56px headline "The product engineering firm that doesn't disappear after launch", Inter 16px subhead in #71717A, one dark button "Book a strategy call" (#09090B, white text, 6px radius, 44px height) + ghost button "See our work". Below hero: 4-metric strip on #F4F4F5. Services: 3-column card grid, white cards, 0.5px #E4E4E7 border, 12px radius, Lucide icons 20px, hover: border darkens to #A1A1AA + translateY(-2px). Case studies: 2-column cards, image top, colored industry pill tag, large metric stat in accent blue. No gradients, no decorative backgrounds. Benchmark: stripe.com, linear.app aesthetic.

8 — Dark theme concept
Visual direction
Background: #0A0A0A. Surface: #111111. Cards: #111111, rgba(255,255,255,0.08) border. Hero: subtle radial blue gradient at 5% opacity top-left. Headline: #FAFAFA, 64px. Subhead: #A1A1AA. Right side: glassmorphic terminal card (backdrop-filter blur 12px, rgba(255,255,255,0.04) bg) showing animated deployment log. Card hover: border lightens to rgba(255,255,255,0.15) + subtle blue glow. CTA: white fill button with glow on hover. Tech ticker replaced with inline pills on dark surface.

Dark theme AI prompt
Design a Linear.app-level dark homepage for Neo Perion Solutions. Background: #0A0A0A. Subtle CSS dot grid at 2% opacity. Radial blue gradient (rgba(29,78,216,0.05)) top-left corner. Hero: Geist 500 64px white headline "Engineering that outlasts the hype", #A1A1AA 16px subhead. Right: glassmorphic card (backdrop-filter blur 12px, bg rgba(255,255,255,0.04)) containing animated SVG architecture diagram. Below: 4-metric strip on #111111. Services: dark cards #111111, rgba(255,255,255,0.08) border, Lucide icons in #60A5FA, hover glow rgba(29,78,216,0.15). Case studies: 2px left colored border per industry, large metric stats in accent colors. Footer: dark, clean, no gradient. No heavy glassmorphism overuse. Benchmark: linear.app, resend.com, openai.com.

9 — Animations & interactions
Scroll reveal: All sections fade in (opacity 0→1) + translateY 24px→0 over 500ms ease-out. Stagger children by 80ms. IntersectionObserver, not scroll listener.
Number counters: Metric numbers count up from 0 to target in 1.2s using requestAnimationFrame + easeOutCubic. Triggers once per session via sessionStorage.
Magnetic cursor: CTA buttons attract cursor within 60px radius. 2–4 lines of vanilla JS. Desktop only, no touch.
Terminal animation: Hero terminal types deployment log lines at 40ms per character delay. Cursor blinks. Lines appear sequentially.
Card hover: White theme: translateY(-2px) + border darken. Dark theme: border lighten + box-shadow rgba(29,78,216,0.15). Transition: 150ms ease-out.
Tab capability: Tab switch cross-fades content panel: opacity 0→1 over 200ms ease-in-out. No layout shift. Active tab gets 2px bottom accent line.
CTA pulse: Homepage nav CONTACT button has subtle 2s loop pulse animation (opacity 0.6→1) to draw attention. Stops on first hover.
10 — Performance & SEO
Convert all images to WebP or AVIF. Estimated 30–50% size reduction per image.
Add loading="lazy" to all below-fold images (case study thumbnails, team photos, blog images).
Preconnect to Calendly CDN: <link rel="preconnect" href="https://calendly.com"> in HTML head. Saves 200–400ms on contact page.
Split JS bundle — ROI calculator and AI Maturity Assessment widgets load on scroll-into-view only.
Meta title: "Neo Perion Solutions | AI Product Engineering for Enterprise" (under 60 chars). Meta description: "We build AI-powered SaaS platforms and enterprise software that scales. Chennai-based product engineering team." (under 160 chars).
Add OG tags: og:image (1200×630px branded card), og:title, og:description for social sharing.
Add structured data: Organization schema with name, url, logo, foundingDate, contactPoint.
Core Web Vitals targets: LCP under 2.5s, CLS under 0.1, INP under 200ms.
11 — Accessibility
All body text must meet WCAG AA: 4.5:1 minimum contrast ratio. Current muted gray text on dark bg needs checking.
All CTA buttons must be 44×44px minimum touch target. Current "Explore Capability →" links are too small.
Every image needs descriptive alt text. Stock images should have alt="" (decorative) since they carry no information.
Navigation must be keyboard-navigable. Dropdown menus need focus trapping and Escape-to-close behavior.
All form inputs need visible labels (not just placeholder text). Placeholder disappears on typing — fails WCAG 1.3.1.
Add aria-label to icon-only buttons (hamburger menu, social icons).
Add skip-to-main-content link as first element in body for screen reader users.
12 — Awwwards-level ideas
Scroll storytelling hero
As user scrolls, the hero headline morphs: "Build Software" → "Build Software That Scales" → "Build Software That Lasts for Years" using ScrollTimeline or GSAP ScrollTrigger. Creates cinematic page entry.

Live project ticker
A strip below hero: "Currently: 3 projects in active build · 1 in discovery · 2 in maintenance" — real-feeling operational data signals a live, active company.

Architecture diagram easter egg
Clicking the hero terminal shows a real interactive system architecture diagram of one of your real projects. Surprise delight moment for technical buyers.

Cursor trail on dark theme
Small dot trail follows cursor on the hero section only. Fades out after 300ms. Adds premium tactile feel. 10 lines of CSS + JS. Seen on Framer, Superhuman.

