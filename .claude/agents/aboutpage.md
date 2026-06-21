About page
Identity, story, team, and philosophy
Mobile: 4/10
Tablet: 5/10
Desktop: 7/10
Trust: 3/10
1 — UI problems
Hero headline "We are engineers first. Consultants second." renders at ~96px display size — breaks into ugly 3-line wrap on tablet and any viewport under 900px.
The zigzag timeline (left card, right card, alternating) collapses completely on mobile — there isn't enough width for 2 columns. Currently broken below 640px.
Engineering Principles cards use 1px solid borders that look heavy and tabular — should be 0.5px or use subtle background color instead.
Leadership team photos have inconsistent vertical crops — Vasantharaj's photo shows more chest/shoulders than Tamilselvan's. Looks like different-era photos.
The founder quote pullout card uses light gray italic text on white — lowest contrast possible for your most important brand statement.
The "OUR JOURNEY" label above "How we got here" is unnecessary — the heading says it all. Remove the eyebrow label or make it more distinctive.
2 — UX problems
Timeline milestones use internal project names (FUNNOVA, Lexzify) — enterprise clients don't know what these are. Needs client-facing framing.
No company stats anywhere: team size, years operating, total clients, projects shipped. These are critical trust signals that every competitor includes.
Leadership section has no individual links — no LinkedIn profiles, no "Read their story" depth. These are the humans someone is about to pay money to.
Zero press mentions, media features, awards, or external validation. The page is entirely self-referential.
3 — Content review
Keep
"We are engineers first. Consultants second." — strongest brand statement on the page, fix only the font size

Keep
Timeline structure — good narrative device, just fix the content and mobile layout

Keep
Engineering Principles section — Build for Scale, Measure Everything, Avoid Complexity, Own Outcomes are excellent positioning

Improve
Timeline content → rewrite each milestone with client impact language, not internal project names

Improve
Leadership cards → consistent professional photos, add LinkedIn URL, GitHub handle, area of expertise

Improve
Founder quote card → increase contrast, increase font size, make it a full-section moment not a quiet card

Add
Company stats row: Founded / Team size / Projects shipped / Clients served — even rough numbers like "10+ projects" are better than nothing

Add
Press / recognition section placeholder — even "As seen in" with one real mention builds credibility

Add
CTA at bottom of page — "Read the Founder's Letter" link and "Start a project" button

4 — Mobile redesign (320–640px)
Hero headline
Font-size: clamp(28px, 8vw, 56px). Will auto-fit from 28px on small screens to 56px on large. Never hard-code 96px on this page.

Timeline
Collapse to single-column vertical timeline. Vertical line down center-left. Cards full-width on right. Year badge floats on the line. No alternating left/right — impossible at mobile widths.

Team cards
Circular photo (80px), name (16px/500), title (13px/400), LinkedIn icon link. Single column stack. No grid at mobile — grid starts at 640px.

Principles
Single column, icon + title + 2-line description. Tap expands to full description. Removes content density problem on small screens.

Mobile AI prompt
Design a mobile-first about page for Neo Perion Solutions. 375px base. Hero: clamp(28px,8vw,56px) bold headline "We are engineers first. Consultants second." with short paragraph below. Stats row: 2×2 grid of company metrics (Founded 2024, 10+ projects, 3-person core team, Chennai-based). Vertical timeline: single-column, year badges on left dot, card content full-width right. Engineering principles: stacked cards with Lucide icon + title + 2-line description, tap to expand. Team: circular photo 80px + name + title + LinkedIn link, single column. Footer CTA: "Start a project" button + "Read the Founder's Letter" link. Font: Inter. Clean, editorial, human.

5 — Tablet improvements
At 768px+
Timeline returns to zigzag alternating layout. Team: 3-column grid. Principles: 2-column grid. Hero headline: 52px. Company stats: 4-column single row (not 2×2).

6 — Desktop improvements
At 1024px+
Hero: full-width centered, headline 64px max. Timeline: full zigzag with card hover lift. Team: 3 columns with expanded bio on hover (slide-in overlay). Principles: 2-column grid with icon animation on hover (icon rotates 5° and scales to 110%). Max-width 1200px. Ultra-wide: generous side margins, content stays contained.

7 — White theme
Direction
Light editorial feel. #FAFAFA background, white cards, 0.5px borders. Timeline: vertical line in #E4E4E7, year bubbles in #09090B fill + white text. Team photos: circular, 120px, thin #E4E4E7 ring. Principles: icon in blue (#1D4ED8), card background #FFFFFF. Company stats: large number in #09090B, label in #71717A. Fonts: DM Sans 600 for display, Inter 400 for body.

White theme AI prompt
Design a premium white about page. Background #FAFAFA, white cards 0.5px #E4E4E7 border 12px radius. Hero: centered "We are engineers first. Consultants second." DM Sans 600 56px. Below: 4-column stats row (Founded 2024, 10+ projects, etc.) on white cards. Timeline: alternating left/right cards with center vertical line in #E4E4E7, year bubbles filled #09090B. Engineering principles: 2-column icon cards, Lucide icons in #1D4ED8. Team: 3-column, circular photos 120px, name DM Sans 500 16px, title Inter 400 13px #71717A, LinkedIn icon. Subtle fade-in scroll animations. Clean editorial spacing. Benchmark: notion.so/about aesthetic.

8 — Dark theme
Direction
Background #0A0A0A. Timeline line: rgba(255,255,255,0.12). Year bubbles: #1D4ED8 fill. Team cards: #111111 bg, rgba(255,255,255,0.08) border, circular photos with rgba(255,255,255,0.1) ring. Principles icons: colored per category (AI=blue, Scale=green, Complexity=amber). Stats: number in white (#FAFAFA), label in #A1A1AA. Hover: cards get rgba(255,255,255,0.04) bg change + border brightens.

Dark theme AI prompt
Design a premium dark about page for Neo Perion. Background #0A0A0A, surface cards #111111, rgba(255,255,255,0.08) borders. Hero: centered Geist 500 56px white headline. Stats: 4-column grid on #111111 surface, large white numbers, #A1A1AA labels. Timeline: vertical rgba(255,255,255,0.12) line, #1D4ED8 year bubbles, dark cards with subtle hover. Engineering principles: 2-column cards, colored Lucide icons (blue/green/amber/teal). Team: circular photos, rgba(255,255,255,0.1) ring, name in white, title in #A1A1AA, LinkedIn in #60A5FA. Scroll reveal animations. Benchmark: linear.app/about aesthetic.

9 — Animations
Timeline reveal: Each card slides in from its side (left card from left, right card from right) as user scrolls past it. Transform: translateX(-40px)→0. 400ms ease-out.
Team card hover: Circular photo scales to 1.05. Name color shifts to accent blue. LinkedIn icon slides in from below with opacity 0→1. 200ms transition.
Stats counter: Company metrics count up on scroll-into-view. "2024" doesn't animate (it's a year) — only numerical quantities animate.
Principle icons: On scroll-into-view, icons rotate from 0° to 5° and back (subtle bob). One-time animation, 600ms ease-in-out.
10 — Performance & SEO
Meta title: "About Neo Perion Solutions | AI Product Engineering Team, Chennai" — under 60 chars.
Team photos: serve at 2x resolution (240×240px for 120px display size) in WebP. Lazy-load below-fold team photos.
Add Person schema for each team member: name, jobTitle, worksFor, sameAs (LinkedIn URL).
11 — Accessibility
Circular team photos: alt text "Photo of [Name], [Title] at Neo Perion Solutions" — not "team-photo.jpg".
Timeline year badges: ensure year text has 4.5:1 contrast against bubble background color.
LinkedIn icon links: add aria-label="Vasantharaj S on LinkedIn" — icon-only links must have accessible names.
12 — Awwwards ideas
Interactive team cards
Hover on team member photo: card flips (CSS 3D transform, rotateY 180deg) to show their personal philosophy quote + area of expertise + 2 tech icons. Adds depth and personality.

Animated principles
Each of the 4 engineering principles has a minimal SVG animation (a scale icon that weighs, a chart that plots, a complexity knot untangling). Plays on scroll-into-view. Built in pure SVG + CSS
