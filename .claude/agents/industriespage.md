Industry pages
Healthcare · Education · Startups
Mobile: 5/10
Tablet: 6/10
Desktop: 7/10
Trust: 3/10
1 — UI problems
Healthcare compliance checklist widget: on mobile, the list items clip at container edges — checklist text extends beyond the card boundary on screens under 375px.
Startups page: the "Startup Journey" 4-step progress bar (Ideation/Build/Launch/Scale) renders at a fixed width that doesn't adapt on mobile — steps overlap on small screens.
Education page "From Curriculum to Code" process step carousel shows only Step 1 (Curriculum Analysis) — other steps are invisible. Broken UI element.
Healthcare "Compliance-First Development" step carousel: same problem — only Step 1 visible. Both carousels are broken on desktop and mobile.
The education and healthcare pages use green and teal CTA banners respectively — these clash with the dark site palette and look like they belong to a different brand.
Startups page "Built for Startup Speed" benefit cards use a light lavender-tinted background (#F5F3FF) inconsistently with the otherwise white/dark card system.
2 — UX problems
Industry pages are only accessible via "Industries" dropdown in nav — they're invisible from any other page. No homepage section links to them directly.
Healthcare page claims "HIPAA Compliant", "SOC 2 Type II", "HL7/FHIR Ready" — but these are aspirational claims, not certified statuses. This is a legal risk if uncertified.
Startups "120+ founders" claim on the page — this is an inflated number for a company founded in 2024. Unverifiable claims destroy credibility with startup founders who are savvy.
Each industry page has its own color scheme (purple=startups, green=healthcare, teal=education) but shares the same layout structure — the unique colors aren't enough to feel like differentiated offerings.
3 — Content review
Keep
Healthcare compliance checklist widget — innovative and useful. Make it interactive and downloadable.

Keep
Startup journey 4-step roadmap widget — strong visual communication of the process

Keep
Education "Learning Platform Architecture" diagram — well-structured technical visual

Improve
Fix broken step carousels on all industry pages — replace with always-visible step list or properly functional stepper

Improve
All industry CTA banners → match site palette, stop using clashing green/teal/purple banners

Remove
"120+ founders" unverifiable claim — replace with honest "Built for founding teams at every stage"

Remove
HIPAA/SOC2 certification claims unless actually certified — replace with "Compliance-ready approach" language

Add
At least one real, named client reference per industry page — even "A Chennai-based hospital group (NDA)" is better than fictional names

4 — Mobile redesign
Step carousels
Replace broken carousel with accordion. Each step: number badge + title + description. Expanded by default for Step 1, tap to expand others. No horizontal scroll needed. Works at any viewport width.

Startup journey widget
4-step progress: stack vertically on mobile. Each step is a numbered row (circle badge + title + week). Active step highlighted. Progress bar becomes vertical line on mobile.

Healthcare checklist
Full-width card, all checklist items visible, no overflow. Each item: checkbox + label + HIPAA/SOC2/HL7 tag pill. Tap any item to see tooltip explanation. "Download this checklist as PDF" button at bottom.

Featured project
Full-width dark card on mobile. Large metric number (top, accent color), title, description, "Read Case Study" button (full-width). Remove the side metric placement — stack everything.

Mobile AI prompt
Design a mobile healthcare industry page for Neo Perion. 375px single column. Hero: 2-line 32px headline "Build Secure, Compliant Healthcare Solutions", paragraph, 2 stacked CTA buttons. Compliance checklist card: full-width, checklist items with HIPAA/SOC2 tag pills, interactive tap-to-expand tooltips, "Download PDF" button. Capabilities: stacked cards, icon 32px + title + description. Process: accordion replaces carousel, step 1 open by default. Benefits: stacked green-tinted cards (HIPAA Compliant, SOC 2, HL7 Ready). FAQ: 2 items, accordion. CTA banner: dark themed (not green), "Discuss Your Health-Tech Project" full-width button. Inter font. Compliance-focused, professional, mobile-optimized.

5–6 — Tablet / Desktop
Tablet 768px+
Hero: 2-column (text + interactive widget card). Process: 2-column step grid (not carousel). Benefits: 3-column card row. FAQ: 2 questions visible, expand for more.

Desktop 1024px+
Step carousel works properly at 1024px+ (enough width). Healthcare checklist: full interactive state with live progress bar "X/6 requirements covered". Startup journey widget: animated horizontal progress. Education: architecture diagram is fully interactive SVG with node details on click.

7–8 — White / Dark themes
White theme AI prompt
White-theme industry pages for Neo Perion. Each industry has a unique accent: Healthcare = #059669 teal-green, Education = #0891B2 teal-blue, Startups = #7C3AED purple. White #FAFAFA background. Compliance checklist: white card, item tags in industry accent color on light tint. Process accordion: white, 0.5px borders, numbered badges in accent color. Benefits: white cards with accent-colored icon and left border accent. CTA: dark #09090B button (not industry color — avoids brand clash). DM Sans headings. Minimal, professional, compliant-feeling. Benchmark: healthtech.com, stripe.com/healthcare aesthetic.

Dark theme AI prompt
Dark industry pages for Neo Perion. Background #0A0A0A, cards #111111. Healthcare accent: #34D399 (glowing teal). Education accent: #22D3EE (cyan). Startups accent: #A78BFA (purple). Checklist items: accent-colored checkbox, tag pills in accent tint on dark. Process: dark accordion, accent-numbered step badges. Benefits (HIPAA/SOC2 etc.): dark surface cards with accent left border 2px and small "CERTIFIED" badge in accent tint. FAQ: dark accordion. CTA: white button with industry-accent glow on hover. No clashing banners — stay in dark palette throughout.

9 — Animations
Healthcare checklist: As user taps items, checkboxes animate (scale 0→1 with bounce), progress bar fills, percentage counter updates. Visual reward for engagement.
Startup journey: Active step has a pulsing dot animation (CSS keyframe, 2s loop). Completed steps show checkmark that draws in (SVG stroke). Upcoming steps are muted.
Education architecture: Layer connections animate (draw-in SVG stroke) top-to-bottom showing data flow. Triggered on scroll-into-view.
10–11 — Performance & Accessibility
Industry pages need unique meta descriptions targeting industry-specific search terms: "HIPAA-compliant healthcare software development Chennai".
Healthcare checklist: each item needs aria-checked state for screen readers. Checkboxes without aria attributes are invisible to assistive technology.
Interactive widgets (checklist, journey) must be keyboard-navigable — tab through items, Space to toggle, Enter to expand.
12 — Awwwards ideas
Healthcare: Live compliance score
The compliance checklist shows a live "Compliance Score: 0/6" that fills a circular progress ring as items are checked. At 6/6: confetti burst + "Your platform meets enterprise healthcare standards. Let's build it." → CTA button appears. Powerful conversion moment.

Startups: Funding runway calculator
Simple widget: current runway (months) + team size → shows "You need to ship MVP by [date] to raise Series A before runway ends." Creates urgency that drives direct contact. Relevant, specific, actionable
