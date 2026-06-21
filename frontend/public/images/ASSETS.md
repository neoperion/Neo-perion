# Homepage Asset Drop-In Manifest (Redesign Pass 1)

Replace the placeholder files below with real assets at the same path (or update
the path in the referencing component). Placeholders are plain grey SVGs.

| Slot | Component | Placeholder path | Target size (@2x) | Ratio | Shape |
|------|-----------|------------------|-------------------|-------|-------|
| Hero visual | `Hero.tsx` | `home/placeholder-hero.svg` | 1240×930 | 4:3 | BrowserFrame screenshot |
| Services lead visual | `Services.tsx` | `home/placeholder-screenshot.svg` | 1120×700 | 16:10 | BrowserFrame screenshot |
| Who-we-are photo | `features/home/WhoWeAre.tsx` | `home/placeholder-team.svg` | 960×1200 | 4:5 | rounded portrait |
| Case study (featured) | `features/home/CaseStudiesPreview.tsx` | `study.cover_image` → `home/placeholder-screenshot.svg` | 1280×800 | 16:10 | BrowserFrame |
| Client logos ×6 | `LogoWall` | `logos/logo-1..6.svg` | 160×48 | — | mono SVG |
| Testimonial avatars ×3 | `Testimonials` | `testimonials/avatar-1..3.svg` | 160×160 | 1:1 | circle |

## Already-present real assets you can wire in now

- `founder.jpg`, `tamilselvan.jpg`, `adhi.png` — real people photos (Who-we-are / testimonials).
- `np-logo.png`, `neo-perion-text.png` — brand logo lockup (navbar/footer).

## Placeholder content (NOT real — replace before launch)

- Stat numbers in `WhoWeAre.tsx` (e.g. "23 products shipped").
- Price anchors in `EngagementModel.tsx` (e.g. "from $15k").
- Testimonial quotes/names in the homepage testimonials section.
- Client logos in the logo wall.
