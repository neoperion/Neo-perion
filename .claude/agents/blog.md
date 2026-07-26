Blog page
Insights, AI & Product Engineering
Mobile: 5/10
Design: 6/10
Content: 4/10
SEO: 4/10
1–2 — UI & UX problems
Featured article uses a humanoid robot on a bench — overused AI stock imagery used by thousands of tech blogs. Signals lazy content curation, not original thinking.
Category filter + search bar are in the same horizontal row but visually disconnected — the search floats to the far right with no visual relationship to the filter pills.
Blog publish dates (June 2026) don't match newsletter dates (October 2024) — temporal inconsistency signals unreliable content management.
Only 4 articles total — for a prominent blog infrastructure (featured article, category filters, search), this content-to-infrastructure ratio is embarrassing. Write more or hide the infrastructure.
On mobile, the featured article card's image + text side-by-side layout collapses awkwardly — image squashes, text overflows. Stack vertically on mobile.
Article cards use inconsistent image aspect ratios — featured is landscape, secondary cards are square, no consistent visual system.
3 — Content review
Keep
Category filter system — well-designed, useful for content discovery

Keep
Article topics (AI architecture, serverless, PostgreSQL scaling) — good technical positioning

Improve
All featured images → replace with custom-illustrated technical diagrams or abstract data visuals specific to each article topic

Improve
Date consistency → use actual publish dates, all in same format (Jan 1, 2025)

Add
Author bylines with circular photo + name + role on every article card

Add
Reading time + view count on each article card (even estimated: "5 min read · 1.2k views")

Add
Newsletter subscription CTA embedded in blog list (after 3rd article: "Enjoying these insights? Subscribe to NP Insights →")

4 — Mobile redesign
Featured article
Stack vertically: image (16:9, full-width) → category tag → headline (20px) → excerpt (14px, 3 lines) → author row (photo + name + date + reading time) → "Read Article" button (full-width). No side-by-side on mobile.

Filters
Horizontal scroll pill row on mobile (same treatment as case studies). Search bar below the filter row, full-width. Active filter pill has filled dark background.

Article grid
Single column card stack. Each card: image top (3:2 ratio), category tag, headline, excerpt, author photo (24px circular) + name + date + read time. No grid until 640px+.

Newsletter CTA
After 3rd article: full-width band "Get engineering insights weekly" + email input + "Subscribe" button (48px, full-width). Simple, native, not an interruptive modal.

Mobile AI prompt
Design a mobile blog page for Neo Perion. 375px. Filter pills: horizontal scroll row, active = filled dark. Search: full-width below filters. Featured article: stacked (16:9 custom diagram image → category tag → 20px headline → excerpt → author circular 24px + name + date + read time → "Read Article" full-width button). Article cards: single column, same stacked layout, 3:2 image. After card 3: newsletter subscription band (email input + subscribe button, full-width). Author bios: team photos not AI stock. Content width: 344px max. Inter font. Clean, editorial, fast-loading.

5–8 — Tablet / Desktop / Themes
White theme AI prompt
White blog for Neo Perion. #FAFAFA background. Featured: 2-column card, white bg, 0.5px border, 12px radius, left 55% image (custom diagram), right 45% content. Category tags: colored pill per category. Article grid: 3-column at desktop, 2-column tablet, 1-column mobile. Cards: white, 0.5px border, image top 3:2 ratio (custom illustrations), author row with circular 28px photo, reading time, date. Inline newsletter: #F4F4F5 band between rows 1 and 2 of articles, email input + button. DM Sans 600 headings, Inter 400 body. Editorial, NYT/Vercel blog aesthetic.

Dark theme AI prompt
Dark blog for Neo Perion. #0A0A0A background, cards #111111 rgba(255,255,255,0.08) border. Featured: left image (dark data viz, custom SVG), right content (white headline, #A1A1AA excerpt, author with photo). Category tags: distinct color per category (AI=blue, Engineering=green, Design=purple). Article grid: same dark cards. Author photos: circular, real team headshots. Newsletter band: #1A1A1A bg, white headline, dark input (#0D0D0D), blue subscribe button. Reading time + views in #52525B muted text. Hover: card bg lightens to #1A1A1A.

9 — Animations & 10 — Performance & SEO
Featured article image: On page load, image scales from 1.03 to 1.0 over 600ms — subtle zoom-out entrance. Feels premium and intentional.
Category filter: Active pill gets a filled background transition (200ms). Cards not matching fade to 30% opacity then fade out. Matching cards fade in. Smooth, not jarring.
Each article page needs: unique title tag, meta description, canonical URL, OG image, and Article schema markup. Without these, blog SEO is zero.
Add sitemap.xml with all article URLs for Google indexing. Blog articles without sitemaps take 4–8 weeks to index.
Images: use custom-illustrated SVG diagrams where possible (0KB if inline SVG). No AI stock art that needs image optimization.
Target: LCP under 2.5s on mobile 4G. Articles with heavy featured images will fail this — use WebP, lazy load, and blur-up placeholder technique.
11 — Accessibility
All article images need meaningful alt text: "Architecture diagram showing RAG pipeline with vector database and LLM processing" not just "blog-image.webp".
Category filter buttons need aria-pressed and aria-label. Screen reader must announce "AI filter, selected" when active.
12 — Awwwards ideas
Reading progress bar
On article pages: a 2px progress bar at top of viewport that fills as user scrolls through the article. Standard on premium editorial sites (The Verge, CSS-Tricks). 10 lines of JS. Keeps readers engaged and aware of article length.

Article diagram previews
Each article card's image is a mini version of the article's actual main diagram — a real technical illustration specific to that post. This signals "we actually drew this" and immediately differentiates from stock-photo-using competitors. Takes effort but is worth 10× more than any stock image

