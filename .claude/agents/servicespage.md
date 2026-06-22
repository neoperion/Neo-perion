Service pages
AI Systems Automation · Deep AI Engineering · Intelligent Operations
Mobile: 5/10
Tablet: 5/10
Desktop: 6/10
Conversion: 5/10
1 — UI problems
All three service pages use identical page structure (hero split → capabilities grid → process steps → featured project → CTA). Template repetition destroys distinctiveness.
The RAG Architecture Flow on AI Systems page is a simple numbered list styled as a diagram — not an actual diagram. For an AI company, this is embarrassing. Build a real SVG flow diagram.
The comparison table (Basic AI vs Deep AI Engineering) has ✓ and ✗ icons at 12px — too small for scanning on any device. Increase to 16px minimum.
The "Automation ROI Calculator" is the strongest UX element on the site but it's trapped on the Intelligent Ops inner page. Almost nobody will find it.
Process step cards (numbered 1–4) switch from light background to dark background abruptly — no transition, no rationale for the theme change mid-page.
On mobile, the 2-column capability cards collapse to single column but the icon is still sized at 24px — too small on high-DPI mobile screens. Needs to be 32px at mobile.
2 — UX problems
No engagement model or pricing signal on any service page. Enterprise buyers need to understand if this is retainer, project, or sprint before investing time in a discovery call.
Each service page ends with the same "Ready to build the future?" CTA — removes the distinctiveness of each service offering.
The "AI Maturity Assessment" (4-level slider) is cut off — only Level 1 "Basic Automation" is visible. The other 3 levels don't render.
Service page breadcrumbs/back navigation are missing — users who land on a service page from Google have no context about where they are.
3 — Content review
Keep
ROI Calculator — best interactive element on the site

Keep
Before/After automation comparison visual — strong persuasion tool

Keep
Basic vs Deep AI comparison table — well-executed differentiation

Improve
Each service page hero → unique visual, not the same left-text-right-widget template

Improve
Service CTAs → make unique per page: AI Systems: "Design your AI architecture", Automation: "Calculate your ROI first", Deep AI: "See our fine-tuning work"

Improve
RAG Architecture Flow → build a real interactive SVG diagram with clickable nodes

Add
Engagement model section on each service page: typical project size, timeline, and what you deliver

Add
Breadcrumb navigation: Home > Services > [Service Name]

4 — Mobile redesign
Hero
Stack: eyebrow label → headline → paragraph → primary CTA → secondary link. Widget/diagram card moves BELOW the text on mobile (not side-by-side). Diagram card: full-width, max-height 280px, scrollable if needed.

Capabilities
Single column. Icon (32px) + bold title + 3-line description. Tap to expand full description. No 2-column grid at mobile — too narrow for the content density.

ROI Calculator
Sliders need 44px touch targets minimum. Labels must be above the slider, not beside it (no room). Output metrics: stacked vertically, not side-by-side. "Hours Saved" and "Cost Reduced" each get their own full-width card.

Comparison table
On mobile: stack the two columns vertically. "Basic AI Integration" section → then "Deep AI Engineering" section. Use colored headers to distinguish. Table format collapses on mobile — prose comparison is better.

Mobile AI prompt
Design a mobile service page for "Intelligent AI Integration" by Neo Perion. 375px base. Hero: eyebrow "AI-First Solutions" in blue, 32px headline "Intelligent AI Integration", subtext, full-width CTA button "Integrate AI" 48px. RAG diagram card below (full-width, 280px height, scrollable). Enterprise AI Capabilities: single column stacked cards, 32px Lucide icons, title + 3 lines, tap to expand. AI Maturity Assessment: 4-step horizontal progress bar + current level card (full-width). Featured project: full-width dark card, metric number large. CTA: full-width "Start your AI integration" button. Font: Inter. Thumb-friendly. No horizontal scroll.

5–6 — Tablet / Desktop
Tablet 768px+
Hero 2-column restored. Capabilities 2-column grid. Comparison table: side-by-side columns restored. ROI Calculator: sliders + output cards in 2-column layout.

Desktop 1024px+
Hero: 50/50 split with real animated diagram (not static). Capabilities: 2-column large cards. ROI Calculator: full interactive widget with real-time chart updating as sliders move. Comparison table: full side-by-side with sticky header.

7 — White theme
Direction
Each service page gets a unique accent color: AI Systems = Blue (#1D4ED8), Automation = Amber (#D97706), Deep AI = Purple (#7C3AED). This accent is used for: eyebrow labels, icon colors, CTA buttons, comparison table headers. Otherwise: white background, DM Sans headings, Inter body, 0.5px card borders. The "Before/After" diagram gets a split card design with red→green color transition.

White theme AI prompt
Design white-theme service pages for Neo Perion with unique accent colors per service (AI: #1D4ED8, Automation: #D97706, Deep AI: #7C3AED). White #FAFAFA background. Hero: 2-column, text left, animated diagram card right (white card, 0.5px border). Capabilities: 2-column grid, white cards, Lucide icons in service accent color. ROI Calculator: white card with real-time updating output cards. Comparison table: white/light-gray alternating rows, accent color for "Neo Perion" column header. Featured project: large dark card with accent-colored metric stat. Service-specific CTA button in accent color. DM Sans headings, Inter body. Minimal, editorial, functional.

8 — Dark theme
Direction
Same unique accent system but in dark: AI=blue glow (#60A5FA), Automation=amber glow (#FCD34D), Deep AI=purple glow (#A78BFA). Background #0A0A0A, cards #111111. ROI Calculator: dark inputs, accent-colored output numbers. Comparison table: dark rows, accent column highlighted with subtle left border in accent color. Featured project card: dark with accent-colored metric.

Dark theme AI prompt
Design dark service pages for Neo Perion. Each service has unique glow accent: AI = #60A5FA blue, Automation = #FCD34D amber, Deep AI = #A78BFA purple. Background #0A0A0A, cards #111111 rgba(255,255,255,0.08) border. Eyebrow labels in accent color. ROI Calculator sliders: accent-colored thumb, dark track. Output cards: accent-colored large number on #1A1A1A surface. Comparison table: "Deep AI Engineering" column with accent-colored 2px left border, row bg #1A1A1A vs #111111 alternating. Featured project: full-width dark card, accent metric number, "Read Full Case Study" link in accent. Benchmark: supabase.com service pages.

9 — Animations
RAG flow diagram: Nodes light up sequentially (opacity 0→1, 400ms each) on page load to show data flow: Source → Vector DB → LLM → UI.
ROI Calculator: Output numbers animate (count up/down) in real-time as sliders move. Transition: 300ms ease-out. No jank — use requestAnimationFrame.
Comparison table: Neo Perion column checkmarks draw in one by one (SVG stroke-dashoffset) as table enters viewport. Subtle but memorable.
Process steps: Step cards slide in sequentially from right, staggered 100ms apart. Triggered by IntersectionObserver on the section container.
10 — Performance & SEO
Each service page needs a unique meta title: "Intelligent AI Integration Services | Neo Perion Solutions".
Add Service schema markup with serviceType, provider, areaServed for Google rich results.
ROI Calculator: all JS for the calculator should be in a deferred module script, not blocking render.
11 — Accessibility
ROI Calculator sliders: each needs aria-label="Team size slider", aria-valuemin, aria-valuemax, aria-valuenow attributes. Screen readers can't interpret unlabeled range inputs.
Comparison table: needs a caption element and scope="col" on column headers for screen reader navigation.
12 — Awwwards ideas
Live ROI → contact bridge
After user completes the ROI Calculator, add a button: "Save this analysis and share it with your team →" which captures their email and sends the calculator results as a PDF. Best-in-class lead capture tied to a value moment.

Interactive architecture
Replace the static RAG diagram with a clickable SVG — clicking "Vector Database" shows a tooltip explaining Pinecone vs Weaviate. Clicking "LLM Processing" shows Claude vs GPT-4 comparison. Turns a static diagram into a learning experience

