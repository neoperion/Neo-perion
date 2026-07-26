Case studies page
Your most important trust page — currently your biggest liability
Mobile: 2/10
Trust: 1/10
Design: 5/10
Conversion: 2/10
1 — UI problems
Stock photos are used for all case study thumbnails (factory woman, laptop with coffee, retail clothing rack). They have zero connection to the described projects. Enterprise buyers recognize stock photos instantly — this destroys trust.
On mobile, the horizontal card layout (image left, text right) with a 260px image collapses poorly — images either squash to unrecognizable thumbnails or the text becomes too narrow to read. Needs a full redesign for mobile.
The dual filter system (Filter by Industry + Filter by Service) is a good design idea but both filter rows are on the same visual level — users don't know which filter is active or how they interact.
Tech tags (Python, TensorFlow, OpenAPI, etc.) are small, borderless chips that look like body text — they need a distinct visual treatment to be scannable.
"Read Full Case Study →" links — where do they go? If to empty pages, this is a critical conversion failure. Broken or empty links are worse than no links.
2 — UX problems
CRITICAL: "MediCare Health Network", "Global EduTech", "RetailCorp Inc." are obviously fictional names. Any enterprise CTO will identify this in seconds. This is the single most damaging element on the entire website.
Only 3 case studies for a company claiming "120+ startup partnerships" — the math doesn't add up and undermines every other claim on the site.
No filter memory — if user selects "Healthcare" then clicks back from a case study, the filter resets to "All". Frustrating UX.
No date on any case study — are these recent projects or old work? Recency matters for enterprise buyers evaluating your current capabilities.
3 — Content review
Remove
All stock photo thumbnails — replace with abstract data visualizations, architecture diagrams, or labeled "Project Screenshots (Anonymized)"

Remove
All fictional client names — replace with real names (with permission) or honest "Client in Healthcare sector (under NDA)"

Remove
Case study links that go to empty or 404 pages — either build full pages or remove the links

Keep
Filter system design — good UX concept, fix implementation

Keep
Tech stack tag pills design — just needs better visual treatment

Improve
3 case studies → minimum 1 fully documented real case study with: challenge / approach / tech stack / measurable result / client quote

Add
Project date or "Completed [Year]" badge on each card

Add
"More work available under NDA — contact us to learn more" section at bottom

4 — Mobile redesign
Full mobile redesign
Filter system: horizontal scroll container (single row, no wrap) with pill filter buttons. Active filter: filled background. Card: image top (16:9, full width), industry + service tags, headline, 2-line excerpt, 1 key metric (large), tech tags, "Read case study" full-width button. Single column only. No horizontal layout at mobile.

Mobile AI prompt
Design a mobile case studies page for Neo Perion. 375px single column. Filter: horizontal scrolling pill row (no wrap), active state filled in dark. Case study cards: full-width, image on top 16:9 ratio (abstract architecture diagram, not stock photo), colored industry tag pill, large headline 18px, 2-line excerpt, large metric stat (e.g. "98% error reduction"), tech stack pill tags, "Read full case study" full-width button. 3 cards stacked. "More work available under NDA — contact us" section at bottom. Load more pagination button. Inter font. Clean, confident, professional.

5–8 — Tablet / Desktop / Themes
White theme AI prompt
White case studies page for Neo Perion. Background #FAFAFA. Filter: white pill buttons with 0.5px border, active state #09090B fill white text. Cards: white, 0.5px border, 12px radius, image top (abstract SVG diagram or real project screenshot), industry tag in colored pill, bold headline, 2-line text, metric stat in accent blue large, tech tags as small outlined pills, "Read Case Study" link in #1D4ED8. 2-column grid. Hover: card lifts 2px, border darkens. "Work under NDA" teaser section at bottom: dashed border card. DM Sans 600 headings.

Dark theme AI prompt
Dark case studies page for Neo Perion. Background #0A0A0A. Filter pills: #111111 bg, rgba(255,255,255,0.1) border, active: white fill, #0A0A0A text. Cards: #111111, rgba(255,255,255,0.08) border, colored 2px left border per industry (Healthcare=teal, Education=blue, Retail=amber). Image area: dark SVG architecture diagram or data visualization on #0D0D0D bg. Metric stat: large, accent-colored. Tech tags: #1A1A1A bg, rgba(255,255,255,0.15) border. "Read Case Study" link in industry accent color. Hover: card bg lightens to #1A1A1A + glow on colored left border.

9–12 — Animations, Performance, Accessibility, Awwwards
Filter animation: When filter changes, cards that don't match fade out (opacity 0, scale 0.96) then match cards fade in. 200ms transition. Smooth visual feedback.
Case study reveal: Cards slide up from below fold with staggered timing (0ms, 100ms, 200ms offsets). Triggered by IntersectionObserver on card container.
Add Article schema for each case study: headline, description, datePublished, author (Neo Perion Solutions), image URL.
Filter buttons: aria-pressed="true/false" to communicate active state to screen readers. Not just visual color change.
Case study depth carousel
On desktop hover, the card expands horizontally to reveal: Challenge → Approach → Result sliding panels. Like a film strip unrolling. Click to go to full page. Memorable, unique, shows depth of work without needing the user to click away
