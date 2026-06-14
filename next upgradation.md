**NEO PERION SOLUTIONS**

Website V2.0 --- Master Implementation Document

Full Architecture · File Structure · Backend · Frontend · Admin · Cookie System

*Version: 1.0 \| June 2026 \| CONFIDENTIAL*

**1. PROJECT OVERVIEW & TECH STACK**

**1.1 Project Vision**

Transform the existing Neo Perion website into a premium enterprise-grade digital platform positioning Neo Perion Solutions as an AI-first Product Engineering, SaaS Development, and Technology Consulting company --- comparable in feel to OpenAI, Stripe, Vercel, Linear, Supabase, and Accenture Digital.

**1.2 Final Tech Stack**

**Frontend**

- React 18 + TypeScript 5

- Vite 5 (Build Tool)

- Tailwind CSS 3 (Styling)

- Framer Motion 11 (Animations)

- React Router v6 (Routing)

- React Query v5 (Server State)

- Three.js + React Three Fiber (3D Visualizations)

- Zustand (Global State Management)

**Backend / Infrastructure**

- Supabase (Database + Auth + Storage + Realtime)

- PostgreSQL (Primary Database via Supabase)

- Supabase Edge Functions (Serverless API Logic)

- Resend (Email Delivery)

- Calendly API (Booking Integration)

**Analytics & Monitoring**

- Google Analytics 4 (GA4)

- Microsoft Clarity (Heatmaps + Session Recordings)

**SEO & Meta**

- React Helmet Async (Dynamic Meta Tags)

- Dynamic Sitemap Generation

- JSON-LD Schema Markup (Organization, Service, FAQ, Blog, LocalBusiness)

**2. COMPLETE FILE & FOLDER STRUCTURE**

Below is the canonical folder structure for the entire project. Every file listed must be created.

> neo-perion-v2/
>
> ├── public/
>
> │ ├── favicon.ico
>
> │ ├── robots.txt
>
> │ ├── sitemap.xml (auto-generated)
>
> │ └── og-default.png
>
> ├── src/
>
> │ ├── main.tsx
>
> │ ├── App.tsx
>
> │ ├── vite-env.d.ts
>
> │ ├── index.css
>
> │ ├── assets/
>
> │ │ ├── logos/
>
> │ │ ├── icons/
>
> │ │ └── images/
>
> │ ├── components/
>
> │ │ ├── layout/
>
> │ │ │ ├── Navbar.tsx
>
> │ │ │ ├── Footer.tsx
>
> │ │ │ ├── MobileMenu.tsx
>
> │ │ │ └── PageWrapper.tsx
>
> │ │ ├── ui/
>
> │ │ │ ├── Button.tsx
>
> │ │ │ ├── Badge.tsx
>
> │ │ │ ├── Card.tsx
>
> │ │ │ ├── GlassCard.tsx
>
> │ │ │ ├── SectionHeading.tsx
>
> │ │ │ ├── AnimatedCounter.tsx
>
> │ │ │ ├── Tag.tsx
>
> │ │ │ ├── Divider.tsx
>
> │ │ │ ├── Modal.tsx
>
> │ │ │ ├── Spinner.tsx
>
> │ │ │ ├── Toast.tsx
>
> │ │ │ └── Tooltip.tsx
>
> │ │ ├── home/
>
> │ │ │ ├── HeroSection.tsx
>
> │ │ │ ├── HeroCanvas.tsx (Three.js)
>
> │ │ │ ├── TechEcosystem.tsx (Marquee)
>
> │ │ │ ├── IndustriesSection.tsx
>
> │ │ │ ├── ServicesSection.tsx
>
> │ │ │ ├── WhyNeoPerion.tsx (Bento Grid)
>
> │ │ │ ├── TechExpertise.tsx (Interactive Grid)
>
> │ │ │ ├── ProcessTimeline.tsx
>
> │ │ │ ├── CaseStudiesPreview.tsx
>
> │ │ │ ├── TestimonialsCarousel.tsx
>
> │ │ │ └── FinalCTA.tsx
>
> │ │ ├── services/
>
> │ │ │ ├── ServiceHero.tsx
>
> │ │ │ ├── ServiceCard.tsx
>
> │ │ │ ├── ServiceProcess.tsx
>
> │ │ │ ├── ServiceFAQ.tsx
>
> │ │ │ └── ServiceTechStack.tsx
>
> │ │ ├── shared/
>
> │ │ │ ├── CookieConsent.tsx ← COOKIE BANNER
>
> │ │ │ ├── CookieModal.tsx ← COOKIE SETTINGS MODAL
>
> │ │ │ ├── CookieManager.ts ← COOKIE LOGIC
>
> │ │ │ ├── AIConsultant.tsx
>
> │ │ │ ├── AIChatBot.tsx
>
> │ │ │ └── SEOHead.tsx
>
> │ │ └── admin/
>
> │ │ ├── AdminSidebar.tsx
>
> │ │ ├── AdminHeader.tsx
>
> │ │ ├── DashboardStats.tsx
>
> │ │ ├── DataTable.tsx
>
> │ │ ├── RichTextEditor.tsx
>
> │ │ ├── ImageUploader.tsx
>
> │ │ └── ConfirmDialog.tsx
>
> │ ├── pages/
>
> │ │ ├── Home.tsx
>
> │ │ ├── Services.tsx
>
> │ │ ├── service/
>
> │ │ │ ├── ProductDevelopment.tsx
>
> │ │ │ ├── WebDevelopment.tsx
>
> │ │ │ ├── MobileDevelopment.tsx
>
> │ │ │ ├── ArtificialIntelligence.tsx
>
> │ │ │ ├── AdvancedAI.tsx
>
> │ │ │ ├── BusinessAutomation.tsx
>
> │ │ │ └── StartupSupport.tsx
>
> │ │ ├── Industries.tsx
>
> │ │ ├── CaseStudies.tsx
>
> │ │ ├── CaseStudyDetail.tsx
>
> │ │ ├── About.tsx
>
> │ │ ├── Blog.tsx
>
> │ │ ├── BlogPost.tsx
>
> │ │ ├── Careers.tsx
>
> │ │ ├── Contact.tsx
>
> │ │ ├── ClientPortal.tsx
>
> │ │ ├── NotFound.tsx
>
> │ │ └── admin/
>
> │ │ ├── AdminLogin.tsx
>
> │ │ ├── AdminDashboard.tsx
>
> │ │ ├── AdminServices.tsx
>
> │ │ ├── AdminBlogs.tsx
>
> │ │ ├── AdminBlogEditor.tsx
>
> │ │ ├── AdminCaseStudies.tsx
>
> │ │ ├── AdminCareers.tsx
>
> │ │ ├── AdminTestimonials.tsx
>
> │ │ ├── AdminLeads.tsx
>
> │ │ ├── AdminNewsletter.tsx
>
> │ │ ├── AdminAnalytics.tsx
>
> │ │ └── AdminSettings.tsx
>
> │ ├── hooks/
>
> │ │ ├── useSupabase.ts
>
> │ │ ├── useCookieConsent.ts
>
> │ │ ├── useAnalytics.ts
>
> │ │ ├── useScrollAnimation.ts
>
> │ │ ├── useIntersectionObserver.ts
>
> │ │ ├── useAdminAuth.ts
>
> │ │ └── useCMS.ts
>
> │ ├── lib/
>
> │ │ ├── supabase.ts
>
> │ │ ├── queryClient.ts
>
> │ │ ├── analytics.ts
>
> │ │ ├── seo.ts
>
> │ │ ├── resend.ts
>
> │ │ └── constants.ts
>
> │ ├── store/
>
> │ │ ├── cookieStore.ts
>
> │ │ ├── uiStore.ts
>
> │ │ └── authStore.ts
>
> │ ├── types/
>
> │ │ ├── index.ts
>
> │ │ ├── cms.ts
>
> │ │ ├── lead.ts
>
> │ │ ├── cookie.ts
>
> │ │ └── admin.ts
>
> │ └── utils/
>
> │ ├── formatDate.ts
>
> │ ├── slugify.ts
>
> │ ├── validateForm.ts
>
> │ └── cn.ts
>
> ├── supabase/
>
> │ ├── migrations/
>
> │ │ ├── 001_initial_schema.sql
>
> │ │ ├── 002_cms_tables.sql
>
> │ │ ├── 003_leads.sql
>
> │ │ ├── 004_cookie_consents.sql
>
> │ │ └── 005_rls_policies.sql
>
> │ └── functions/
>
> │ ├── send-lead-email/
>
> │ │ └── index.ts
>
> │ ├── qualify-lead/
>
> │ │ └── index.ts
>
> │ └── newsletter-signup/
>
> │ └── index.ts
>
> ├── .env.local
>
> ├── .env.example
>
> ├── tailwind.config.ts
>
> ├── vite.config.ts
>
> ├── tsconfig.json
>
> └── package.json

**3. DATABASE SCHEMA (PostgreSQL via Supabase)**

All tables are in the public schema. Row Level Security (RLS) is enabled on all tables. Admin-only tables restrict writes to the service role; public tables allow authenticated reads.

**3.1 Core CMS Tables**

**Table: blogs**

> CREATE TABLE blogs (
>
> id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
>
> title TEXT NOT NULL,
>
> slug TEXT UNIQUE NOT NULL,
>
> excerpt TEXT,
>
> content TEXT NOT NULL, \-- Rich HTML
>
> cover_image TEXT, \-- Supabase Storage URL
>
> author TEXT DEFAULT \'Neo Perion Team\',
>
> category TEXT NOT NULL, \-- \'AI\',\'SaaS\',\'Startups\' etc
>
> tags TEXT\[\] DEFAULT \'{}\',
>
> read_time INT DEFAULT 5,
>
> published BOOLEAN DEFAULT false,
>
> featured BOOLEAN DEFAULT false,
>
> views INT DEFAULT 0,
>
> seo_title TEXT,
>
> seo_desc TEXT,
>
> og_image TEXT,
>
> created_at TIMESTAMPTZ DEFAULT now(),
>
> updated_at TIMESTAMPTZ DEFAULT now()
>
> );

**Table: case_studies**

> CREATE TABLE case_studies (
>
> id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
>
> title TEXT NOT NULL,
>
> slug TEXT UNIQUE NOT NULL,
>
> client_name TEXT,
>
> industry TEXT NOT NULL,
>
> service_type TEXT NOT NULL,
>
> problem TEXT NOT NULL,
>
> solution TEXT NOT NULL,
>
> tech_stack TEXT\[\] DEFAULT \'{}\',
>
> outcome TEXT,
>
> duration TEXT,
>
> cover_image TEXT,
>
> gallery TEXT\[\] DEFAULT \'{}\',
>
> client_quote TEXT,
>
> published BOOLEAN DEFAULT false,
>
> featured BOOLEAN DEFAULT false,
>
> created_at TIMESTAMPTZ DEFAULT now()
>
> );

**Table: testimonials**

> CREATE TABLE testimonials (
>
> id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
>
> name TEXT NOT NULL,
>
> company TEXT,
>
> designation TEXT,
>
> feedback TEXT NOT NULL,
>
> avatar TEXT,
>
> industry TEXT,
>
> rating INT DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
>
> active BOOLEAN DEFAULT true,
>
> created_at TIMESTAMPTZ DEFAULT now()
>
> );

**Table: careers**

> CREATE TABLE careers (
>
> id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
>
> title TEXT NOT NULL,
>
> department TEXT NOT NULL,
>
> type TEXT NOT NULL, \-- \'Full-time\',\'Internship\',\'Contract\'
>
> location TEXT DEFAULT \'Chennai, Tamil Nadu (Hybrid)\',
>
> description TEXT NOT NULL,
>
> requirements TEXT\[\] DEFAULT \'{}\',
>
> perks TEXT\[\] DEFAULT \'{}\',
>
> open BOOLEAN DEFAULT true,
>
> created_at TIMESTAMPTZ DEFAULT now()
>
> );

**3.2 Lead & Contact Tables**

**Table: leads**

> CREATE TABLE leads (
>
> id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
>
> name TEXT NOT NULL,
>
> email TEXT NOT NULL,
>
> phone TEXT,
>
> company TEXT,
>
> industry TEXT,
>
> budget TEXT,
>
> project_type TEXT,
>
> message TEXT,
>
> source TEXT DEFAULT \'website\', \-- \'contact\',\'hero-cta\',\'service-page\'
>
> lead_score INT DEFAULT 0,
>
> category TEXT, \-- AI-qualified: startup/edu/smb/health
>
> status TEXT DEFAULT \'new\', \-- new/contacted/qualified/converted
>
> created_at TIMESTAMPTZ DEFAULT now()
>
> );

**Table: newsletter_subscribers**

> CREATE TABLE newsletter_subscribers (
>
> id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
>
> email TEXT UNIQUE NOT NULL,
>
> name TEXT,
>
> active BOOLEAN DEFAULT true,
>
> source TEXT DEFAULT \'footer\',
>
> subscribed_at TIMESTAMPTZ DEFAULT now()
>
> );

**Table: job_applications**

> CREATE TABLE job_applications (
>
> id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
>
> career_id UUID REFERENCES careers(id),
>
> name TEXT NOT NULL,
>
> email TEXT NOT NULL,
>
> phone TEXT,
>
> resume_url TEXT,
>
> cover_letter TEXT,
>
> linkedin TEXT,
>
> portfolio TEXT,
>
> status TEXT DEFAULT \'pending\',
>
> created_at TIMESTAMPTZ DEFAULT now()
>
> );

**3.3 Cookie Consent Table**

**Table: cookie_consents**

> CREATE TABLE cookie_consents (
>
> id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
>
> session_id TEXT NOT NULL,
>
> necessary BOOLEAN DEFAULT true,
>
> analytics BOOLEAN DEFAULT false,
>
> marketing BOOLEAN DEFAULT false,
>
> preferences BOOLEAN DEFAULT false,
>
> consent_version TEXT DEFAULT \'1.0\',
>
> ip_hash TEXT, \-- Hashed for privacy
>
> user_agent TEXT,
>
> consented_at TIMESTAMPTZ DEFAULT now(),
>
> updated_at TIMESTAMPTZ DEFAULT now()
>
> );

**4. COOKIE CONSENT SYSTEM (Full Implementation)**

The cookie consent system must be GDPR/CCPA-compliant, granular, persistent, and properly gated. No analytics or marketing scripts may fire until the user explicitly accepts the relevant category.

**4.1 Cookie Categories**

- Necessary --- Always ON, cannot be disabled. Session cookies, CSRF tokens, auth state.

- Analytics --- Controls GA4 + Microsoft Clarity. Default: OFF. Requires explicit opt-in.

- Marketing --- Controls any remarketing or ad pixels. Default: OFF.

- Preferences --- Controls UI preferences (theme, language). Default: OFF.

**4.2 Cookie Banner Component --- CookieConsent.tsx**

This component renders at the bottom of the screen on first visit. It must NOT block page content. It overlaps the footer with a fixed-position banner.

**Visual Layout**

> ┌────────────────────────────────────────────────────────────────────────┐
>
> │ 🍪 We use cookies to deliver and improve our services, analyze site │
>
> │ usage, and if you agree, to customize your experience and market our │
>
> │ services to you. You can read our Cookie Policy \[here\]. │
>
> │ │
>
> │ \[Customize cookie settings\] \[Reject all cookies\] \[Accept all\] │
>
> └────────────────────────────────────────────────────────────────────────┘

**Styling**

- Position: fixed, bottom: 0, left: 0, right: 0, z-index: 9999

- Background: rgba(15, 23, 42, 0.97) with backdrop-filter: blur(12px)

- Border-top: 1px solid rgba(0, 229, 255, 0.2)

- Text: White. \'here\' link in accent cyan \#00E5FF, underlined

- Buttons: \'Customize\' = ghost border; \'Reject all\' = red/danger; \'Accept all\' = cyan primary

- Mobile: Stack buttons vertically. Reduce font to 13px.

**Logic --- CookieManager.ts**

> // Store: localStorage key = \'np_cookie_consent\'
>
> // Structure stored:
>
> {
>
> version: \'1.0\',
>
> necessary: true,
>
> analytics: false,
>
> marketing: false,
>
> preferences: false,
>
> timestamp: \'2026-06-13T10:00:00Z\'
>
> }

On page load: Read localStorage. If \'np_cookie_consent\' exists AND version matches, do not show banner. If missing or version mismatch, show banner.

> // Functions to implement in CookieManager.ts:
>
> export function getConsent(): CookieConsentState \| null
>
> export function setConsent(prefs: CookieConsentPrefs): void
>
> export function hasConsented(): boolean
>
> export function acceptAll(): void
>
> export function rejectAll(): void
>
> export function updateCategory(cat: CookieCategory, val: boolean): void
>
> export function resetConsent(): void // For \'Change preferences\' link

**4.3 Cookie Settings Modal --- CookieModal.tsx**

Opens when user clicks \'Customize cookie settings\'. A centered modal with individual toggles per category.

**Visual Layout**

> ┌─────────────────────────────────────────────────────────┐
>
> │ Cookie Settings \[×\] │
>
> │─────────────────────────────────────────────────────────│
>
> │ Necessary Cookies \[Always ON\] │
>
> │ Required for the website to function. Cannot be │
>
> │ disabled. │
>
> │─────────────────────────────────────────────────────────│
>
> │ Analytics Cookies \[Toggle\] │
>
> │ Help us understand how visitors interact with our site │
>
> │ (GA4, Microsoft Clarity) │
>
> │─────────────────────────────────────────────────────────│
>
> │ Marketing Cookies \[Toggle\] │
>
> │ Used for personalized advertising. │
>
> │─────────────────────────────────────────────────────────│
>
> │ Preference Cookies \[Toggle\] │
>
> │ Remember your UI settings and preferences. │
>
> │─────────────────────────────────────────────────────────│
>
> │ \[Reject All\] \[Save My Preferences\] │
>
> └─────────────────────────────────────────────────────────┘

**Styling**

- Modal: max-width 560px, centered. Background \#111827. Border: 1px solid rgba(255,255,255,0.1).

- Toggle: Custom pill toggle. ON = \#00E5FF background. OFF = \#374151.

- \'Always ON\' badge: small gray pill label replacing toggle for Necessary.

- Overlay: rgba(0,0,0,0.7) backdrop. Close on overlay click.

**4.4 Analytics Gating --- analytics.ts**

Analytics must only initialize AFTER the user has granted analytics consent.

> // lib/analytics.ts
>
> export function initAnalytics(): void {
>
> const consent = getConsent();
>
> if (!consent?.analytics) return; // Do NOT load if not consented
>
> // Load GA4
>
> const script = document.createElement(\'script\');
>
> script.src = \'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID\';
>
> document.head.appendChild(script);
>
> window.gtag(\'config\', \'GA_MEASUREMENT_ID\');
>
> // Load Microsoft Clarity
>
> // Clarity snippet injected here
>
> }
>
> export function trackEvent(name: string, params?: Record\<string, unknown\>): void {
>
> const consent = getConsent();
>
> if (!consent?.analytics) return;
>
> window.gtag?.(\'event\', name, params);
>
> }

**4.5 Cookie Policy Page Link**

The cookie policy text links to /privacy-policy#cookies. The footer must include a \'Cookie Settings\' link that calls resetConsent() and shows the banner again.

**4.6 Server-Side Consent Logging**

After user saves preferences, silently POST to Supabase to log consent for compliance audit trail.

> // POST to /api/cookie-consent (Supabase Edge Function)
>
> {
>
> session_id: nanoid(),
>
> necessary: true,
>
> analytics: boolean,
>
> marketing: boolean,
>
> preferences: boolean,
>
> consent_version: \'1.0\',
>
> ip_hash: sha256(userIP), // Never store raw IP
>
> user_agent: navigator.userAgent
>
> }

**5. HOME PAGE --- SECTION-BY-SECTION IMPLEMENTATION**

**5.1 Hero Section --- HeroSection.tsx + HeroCanvas.tsx**

**Layout**

> ┌──────────────────────────────────────────────────────────────────┐
>
> │ NAVBAR (Transparent over hero) │
>
> ├───────────────────────────┬──────────────────────────────────────┤
>
> │ │ │
>
> │ \[Badge: AI-First Company\]│ THREE.JS CANVAS │
>
> │ │ • Neural network node graph │
>
> │ From Idea to Product │ • Floating tech icons │
>
> │ --- Powered by AI │ • Data flow particle animation │
>
> │ │ • Soft glow pulses │
>
> │ \[Subheadline text\] │ │
>
> │ │ │
>
> │ \[Book Free Consultation\] │ │
>
> │ \[Explore Services →\] │ │
>
> │ │ │
>
> │ ✓ AI First ✓ Enterprise │ │
>
> │ ✓ Startup Friendly │ │
>
> └───────────────────────────┴──────────────────────────────────────┘

**Implementation Notes --- HeroCanvas.tsx**

- Use @react-three/fiber + @react-three/drei

- Create 40--60 nodes as SphereGeometry (radius 0.08) in random 3D positions

- Connect nodes with LineSegments where distance \< threshold

- Animate nodes with slow sine-wave drift on all axes

- Add PointLight at (0,0,5) in \#00E5FF color

- Particles: 200 small dots floating upward, fading at top

- Canvas: width 100%, height 100vh, pointer-events: none

**Framer Motion --- Left Column**

- Container: staggerChildren 0.15s

- Badge: fadeIn from top -20px

- H1: fadeIn from left -40px, delay 0.1s

- Subheadline: fadeIn from left -40px, delay 0.25s

- Buttons: fadeIn from bottom +20px, delay 0.4s

- Trust indicators: fadeIn, delay 0.55s

**Responsive Behavior**

- Desktop (\>1024px): Two-column 50/50 split

- Tablet (768-1024px): Canvas height 60vh below text

- Mobile (\<768px): Single column, Canvas hidden or replaced with static gradient

**5.2 Tech Ecosystem Marquee --- TechEcosystem.tsx**

**Layout**

> ┌──────────────────────────────────────────────────────────────────┐
>
> │ Technologies We Build With │
>
> │ ────────────────────────────────────────────────────────────── │
>
> │ \[OpenAI\] \[Anthropic\] \[GCP\] \[AWS\] \[Azure\] \[Supabase\] \[React\] │
>
> │ → → → → → → → → → → infinite scroll left → → → → → → → → │
>
> └──────────────────────────────────────────────────────────────────┘

**Implementation**

- Duplicate logo array twice for seamless loop

- CSS animation: translateX(-50%) over 30s linear infinite

- Logos: SVG or PNG, max-height 40px, grayscale filter by default

- Hover: remove grayscale, scale(1.1), transition 200ms

- Edge fade: mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)

**5.3 Industries Section --- IndustriesSection.tsx**

**Layout --- 4 Glass Cards in 2x2 grid (desktop), 1 column (mobile)**

> ┌───────────────────────┬───────────────────────┐
>
> │ 🎓 Education & EdTech│ 🚀 Startups & Founders│
>
> │ \[Icon\] │ \[Icon\] │
>
> │ LMS Platforms │ MVP Development │
>
> │ School Mgmt Systems │ SaaS Development │
>
> │ Student Analytics │ AI Product Dev │
>
> │ AI Learning Asst │ Product Scaling │
>
> │ \[Learn More →\] │ \[Learn More →\] │
>
> ├───────────────────────┼───────────────────────┤
>
> │ 🏢 SMBs │ 🏥 Healthcare │
>
> │ \... │ \... │
>
> └───────────────────────┴───────────────────────┘

**Card Specs**

- Background: rgba(17,24,39,0.8) --- GlassCard component

- Border: 1px solid rgba(255,255,255,0.08)

- Hover: border-color rgba(0,229,255,0.4), translateY(-4px), box-shadow 0 20px 40px rgba(0,229,255,0.1)

- Icon: 48x48px, colored gradient matching industry

- Transition: all 300ms ease

**5.4 Services Section --- ServicesSection.tsx**

**Layout --- Horizontal scrollable cards on mobile, 3-column grid on desktop**

7 animated service cards. Each card has an icon, title, 4 feature bullets, and a hover glow.

**Card Hover Animation**

- Default: dark card, icon gray

- Hover: gradient border appears (cyan to purple), icon glows, subtle background shift

- Use CSS clip-path or border-image for gradient border effect

**5.5 Why Neo Perion --- Bento Grid**

**Layout --- Asymmetric Bento Grid**

> ┌─────────────────────┬──────────┬──────────┐
>
> │ │ Card 2 │ Card 3 │
>
> │ Card 1 │ │ │
>
> │ (2 cols tall) ├──────────┴──────────┤
>
> │ │ Card 4 │
>
> ├──────────┬──────────┤ │
>
> │ Card 5 │ Card 6 │ │
>
> └──────────┴──────────┴─────────────────────┘

**Stats Strip (below grid)**

> ┌──────────┬──────────┬──────────┬──────────┐
>
> │ 25+ │ 4 │ 15+ │ 98% │
>
> │ Projects │Industries│ Tech │ Satisf. │
>
> └──────────┴──────────┴──────────┴──────────┘

Stats use AnimatedCounter component: count up from 0 on viewport entry. Use requestAnimationFrame, duration 2000ms.

**5.6 Process Timeline --- ProcessTimeline.tsx**

**Layout --- Horizontal on desktop, vertical on mobile**

> Discover ------●------ Design ------●------ Develop ------●------ Deploy ------●------ Scale
>
> 01 02 03 04 05

**Animation**

- Line draws left-to-right using SVG stroke-dashoffset animation triggered on scroll

- Each node scales in sequentially with stagger 200ms

- Click on step: expands description panel below

**5.7 Case Studies Preview --- CaseStudiesPreview.tsx**

Fetches from Supabase: SELECT \* FROM case_studies WHERE published = true AND featured = true LIMIT 3

Each card shows: cover image, industry badge, title, 1-line outcome, tech stack chips, \'Read Case Study\' link.

**5.8 Testimonials Carousel --- TestimonialsCarousel.tsx**

Auto-rotating carousel. Interval: 4000ms. Pause on hover. Uses Framer Motion AnimatePresence for slide transitions.

Fetches from Supabase: SELECT \* FROM testimonials WHERE active = true

**6. NAVBAR & FOOTER IMPLEMENTATION**

**6.1 Navbar --- Navbar.tsx**

**Desktop Layout**

> ┌────────────────────────────────────────────────────────────────────┐
>
> │ \[Neo Perion Logo\] Services Industries Case Studies About │
>
> │ Blog Careers \[Book Call\] CTA │
>
> └────────────────────────────────────────────────────────────────────┘

**Behavior**

- Default: transparent background when at top of hero section

- Scrolled (\>80px): background rgba(5,8,22,0.95) + backdrop-blur(12px) + border-bottom

- \'Services\' dropdown on hover: shows 7 service links in a mega-menu panel

- Active page: underline or text-accent indicator

- Mobile: hamburger menu → full-screen slide-in from right

**Services Mega-Menu**

> ┌─────────────────────────────────────────────────┐
>
> │ Product Development Business Automation │
>
> │ Web Development Startup Support │
>
> │ Mobile Development Advanced AI │
>
> │ Artificial Intelligence │
>
> └─────────────────────────────────────────────────┘

**6.2 Footer --- Footer.tsx**

**Layout --- 5 Column Grid**

> ┌──────┬────────────┬────────────┬────────────┬──────────────────┐
>
> │ Logo │ Services │ Industries │ Resources │ Contact Info │
>
> │ Desc │ • Product │ • Education│ • Blog │ Chennai, India │
>
> │ │ • Web Dev │ • Startups │ • Careers │ hello@neo\... │
>
> │ SM │ • Mobile │ • SMBs │ • Privacy │ +91-XXXXXXX │
>
> │icons │ • AI │ • Health │ • Terms │ Calendly link │
>
> │ │ \... │ │ │ │
>
> ├──────┴────────────┴────────────┴────────────┴──────────────────┤
>
> │ Newsletter: \[Email input\] \[Subscribe\] │
>
> ├──────────────────────────────────────────────────────────────── │
>
> │ © 2026 Neo Perion Solutions \| Cookie Settings \| MIT │
>
> └──────────────────────────────────────────────────────────────────┘
>
> *⚠️ NOTE: \'Cookie Settings\' in footer must call resetConsent() from CookieManager.ts to re-show the cookie banner.*

**7. SERVICES PAGES --- ARCHITECTURE**

Each of the 7 service pages shares the same component structure. Create a ServicePageTemplate.tsx that accepts a config object and renders all sections.

**7.1 Service Page Template Structure**

> interface ServicePageConfig {
>
> slug: string
>
> hero: { title, subtitle, badge, bgGradient }
>
> challenges: { title, items: { icon, title, desc }\[\] }
>
> solutions: { title, items: { icon, title, desc, features: string\[\] }\[\] }
>
> techStack: { category, items: { name, logo }\[\] }\[\]
>
> process: { step, title, desc }\[\]
>
> faqs: { q, a }\[\]
>
> cta: { headline, sub }
>
> }

**7.2 Service Page Sections --- Each Page**

**Section A --- Hero**

- Full-width hero with gradient background per service

- Headline + subtitle + badge chip

- Two CTAs: \'Start Project\' + \'View Case Studies\'

**Section B --- Challenges We Solve**

- 3--4 pain point cards in a grid

- Icon + short title + 2-line description

**Section C --- Our Solution**

- Detailed solution cards with feature bullet lists

**Section D --- Technology Stack**

- Grouped logo grid: AI Tools, Frameworks, Database, Cloud

**Section E --- Our Process**

- Numbered vertical timeline. Each step: number circle, title, description

**Section F --- Related Case Studies**

- Filter case_studies by service_type matching current service slug

**Section G --- FAQ**

- Accordion-style. Click to expand. Framer Motion height animation.

**Section H --- CTA**

- Dark gradient CTA block. \'Ready to get started?\' + two buttons

**8. ADMIN DASHBOARD --- FULL IMPLEMENTATION**

The admin dashboard is a protected internal tool at /admin/\*. Only authenticated users with admin role can access it. Use Supabase Auth with role-based checks.

**8.1 Admin Route Protection**

> // AdminGuard.tsx
>
> const AdminGuard = ({ children }) =\> {
>
> const { user, role } = useAdminAuth();
>
> if (!user) return \<Navigate to=\'/admin/login\' /\>;
>
> if (role !== \'admin\') return \<AccessDenied /\>;
>
> return children;
>
> };

**8.2 Admin Layout**

**Sidebar + Header + Content Area**

> ┌────────────┬────────────────────────────────────────────────────┐
>
> │ │ HEADER: \[Page Title\] \[Profile\] \[Logout\] │
>
> │ SIDEBAR ├────────────────────────────────────────────────────┤
>
> │ │ │
>
> │ Dashboard │ CONTENT AREA │
>
> │ Services │ │
>
> │ Blogs │ │
>
> │ Case Studies│ │
>
> │ Careers │ │
>
> │ Testimonials│ │
>
> │ Leads │ │
>
> │ Newsletter │ │
>
> │ Analytics │ │
>
> │ Settings │ │
>
> │ │ │
>
> └────────────┴────────────────────────────────────────────────────┘

**8.3 Admin Dashboard --- AdminDashboard.tsx**

**Stats Cards Row**

> ┌───────────┬───────────┬───────────┬───────────┐
>
> │ Total Leads│ New Today │ Published │Subscribers│
>
> │ 142 │ 8 │ Blogs:12 │ 284 │
>
> │ +12%↑ │ │ Cases:6 │ │
>
> └───────────┴───────────┴───────────┴───────────┘

**Recent Leads Table**

> \| Name \| Email \| Source \| Category \| Status \| Date \|
>
> Each row has: \[View\] \[Change Status\] \[Delete\] actions

**Quick Actions**

- \+ New Blog Post → /admin/blogs/new

- \+ New Case Study → /admin/case-studies/new

- \+ New Job Opening → /admin/careers/new

**8.4 Admin Blogs --- AdminBlogs.tsx + AdminBlogEditor.tsx**

**List View**

- DataTable with columns: Title \| Category \| Status \| Views \| Date \| Actions

- Actions: Edit \| Publish/Unpublish \| Delete

- Filters: Category dropdown, Published status toggle

**Blog Editor**

> ┌─────────────────────────────────────────────────────────┐
>
> │ \[← Back\] Blog Editor \[Save\] │
>
> ├──────────────────────────────┬──────────────────────────┤
>
> │ Title: \[ \] │ SEO Title: \[ \] │
>
> │ Slug: \[ \] │ SEO Desc: \[ \] │
>
> │ Category: \[dropdown\] │ OG Image: \[upload\] │
>
> │ Tags: \[tag input\] │ Read Time: \[auto calc\] │
>
> ├──────────────────────────────┴──────────────────────────┤
>
> │ Cover Image: \[Drag & Drop / Supabase Storage Upload\] │
>
> ├─────────────────────────────────────────────────────────┤
>
> │ Rich Text Editor (TipTap or Quill) │
>
> │ \[B\] \[I\] \[U\] \[H1\] \[H2\] \[Link\] \[Image\] \[Code\] \[Quote\] │
>
> │ │
>
> │ Content area\... │
>
> └─────────────────────────────────────────────────────────┘

**Blog Editor Functions**

- Auto-generate slug from title on input blur (using slugify util)

- Auto-calculate read_time: Math.ceil(wordCount / 200) minutes

- Image upload: Supabase Storage bucket \'blog-images\', returns public URL

- Save as draft vs Publish: two separate action buttons

**8.5 Admin Leads --- AdminLeads.tsx**

**Layout**

> ┌──────────────────────────────────────────────────────────────┐
>
> │ Leads \[Export CSV\] \[Filter\] \[Search\...\] │
>
> ├──────────────────────────────────────────────────────────────┤
>
> │ Name │ Email │ Company │ Industry │ Budget │ Status │ Date │
>
> ├──────────────────────────────────────────────────────────────┤
>
> │ \... │ \... │ \... │ \[badge\] │ \... │\[select\]│ \... │
>
> └──────────────────────────────────────────────────────────────┘

**Lead Detail Drawer**

Click any row → opens right-side drawer showing full lead details, AI-generated category, lead score, and internal notes field.

**Status Options**

- new → contacted → qualified → converted → rejected

Status change triggers a Supabase update + optional email notification to team via Resend.

**8.6 Admin Analytics --- AdminAnalytics.tsx**

**Metrics Displayed**

- Total Leads (all time + this month chart)

- Lead Sources: pie chart (contact form vs hero CTA vs service page)

- Industry Distribution: bar chart (Education / Startups / SMB / Healthcare)

- Blog Performance: views per post, top 5 posts

- Newsletter growth line chart

> *⚠️ NOTE: All charts use Recharts. Fetch data from Supabase with GROUP BY queries via Edge Functions or direct RPC.*

**8.7 Admin Settings --- AdminSettings.tsx**

**Sections**

- Company Info: Update company name, address, phone, email, WhatsApp number

- Social Links: LinkedIn, Twitter/X, Instagram, YouTube, GitHub

- SEO Defaults: Default OG image, default meta description

- Notification Email: Where lead notification emails are sent

- Cookie Version: Bump cookie consent version (forces re-consent on all users)

- Admin Password Change

**9. CONTACT PAGE & LEAD CAPTURE SYSTEM**

**9.1 Contact Form Layout**

> ┌─────────────────────────────────────────────────────────────┐
>
> │ LEFT: Company contact info + Calendly embed │
>
> │ RIGHT: Lead capture form │
>
> │ │
>
> │ Fields: Name\* \| Email\* \| Phone \| Company \| Industry │
>
> │ Budget (dropdown) \| Project Type \| Message\* │
>
> │ │
>
> │ \[Send Message\] │
>
> │ ✓ We respond within 24 hours │
>
> └─────────────────────────────────────────────────────────────┘

**9.2 Lead Submission Flow**

1.  User fills form + submits

2.  Frontend validates (Zod schema) → shows inline errors

3.  POST to Supabase Edge Function: /functions/v1/submit-lead

4.  Edge Function: Insert into leads table

5.  Edge Function: Call /qualify-lead to AI-score the lead

6.  Edge Function: Send email notification via Resend to admin

7.  Edge Function: Send confirmation email to lead

8.  Frontend: Show success toast \'We\'ll be in touch within 24 hours!\'

**9.3 AI Lead Qualification --- qualify-lead Edge Function**

> // Calls Anthropic API with lead data
>
> // Prompt: Given this lead data, return JSON:
>
> // { category: \'startup\'\|\'education\'\|\'smb\'\|\'healthcare\',
>
> // score: 0-100, priority: \'high\'\|\'medium\'\|\'low\',
>
> // reason: string }
>
> // Updates leads table with category + lead_score

**10. AI FEATURES IMPLEMENTATION**

**10.1 AI Project Consultant Widget --- AIConsultant.tsx**

**Flow**

9.  User selects service type (dropdown)

10. User selects estimated scope (Small / Medium / Large / Enterprise)

11. User describes their idea in a textarea (optional)

12. Click \'Generate Requirements\' → calls Anthropic API

13. Returns: Project summary, recommended tech stack, estimated timeline, next steps

14. Option to \'Send this to Neo Perion\' → pre-fills contact form

**10.2 AI Chat Assistant --- AIChatBot.tsx**

**UI Layout --- Floating chat bubble**

> ┌──────────────────────┐
>
> │ Neo Perion Assistant │
>
> │ ─────────────────── │
>
> │ Hi! I can answer │
>
> │ questions about our │
>
> │ services, pricing, │
>
> │ and process. 👋 │
>
> │ ─────────────────── │
>
> │ \[User message\...\] │
>
> │ ─────────────────── │
>
> │ \[Type a message\...\] │
>
> └──────────────────────┘
>
> \[💬\]

**System Prompt**

System prompt includes: company name, all services, industries, pricing approach (custom quotes), contact info, and instruction to always end responses with \'Book a free call\' CTA.

**11. SEO IMPLEMENTATION**

**11.1 SEOHead Component --- SEOHead.tsx**

> // Uses react-helmet-async
>
> interface SEOProps {
>
> title: string
>
> description: string
>
> canonical?: string
>
> ogImage?: string
>
> ogType?: \'website\' \| \'article\'
>
> schema?: Record\<string, unknown\>
>
> }

**11.2 Schema Types Per Page**

- Home: Organization + LocalBusiness + WebSite schema

- Service pages: Service schema

- Blog posts: Article schema + BreadcrumbList

- Case Studies: Article + Organization schema

- Contact: LocalBusiness schema

- FAQ sections: FAQPage schema

**11.3 Sitemap Generation**

Generate /public/sitemap.xml at build time using a Vite plugin or post-build script. Include: all static pages, all published blog slugs (fetched from Supabase at build time), all published case study slugs.

**12. ENVIRONMENT VARIABLES & CONFIGURATION**

**12.1 .env.local**

> VITE_SUPABASE_URL=https://xxxx.supabase.co
>
> VITE_SUPABASE_ANON_KEY=eyJ\...
>
> VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
>
> VITE_CLARITY_ID=xxxxxxxxxx
>
> VITE_CALENDLY_URL=https://calendly.com/neoperion/free-call
>
> VITE_WHATSAPP_NUMBER=919xxxxxxxxx
>
> VITE_COOKIE_VERSION=1.0
>
> \# Server-side only (Edge Functions)
>
> SUPABASE_SERVICE_ROLE_KEY=eyJ\...
>
> RESEND_API_KEY=re\_\...
>
> ANTHROPIC_API_KEY=sk-ant-\...
>
> ADMIN_EMAIL=admin@neoperion.com

**12.2 tailwind.config.ts --- Custom Theme**

> theme: {
>
> extend: {
>
> colors: {
>
> bg: { primary: \'#050816\', secondary: \'#0F172A\', card: \'#111827\' },
>
> accent: { cyan: \'#00E5FF\', purple: \'#8B5CF6\', teal: \'#22D3EE\' },
>
> success: \'#10B981\', warning: \'#F59E0B\', danger: \'#EF4444\'
>
> },
>
> fontFamily: {
>
> sans: \[\'Inter\', \'Space Grotesk\', \'system-ui\'\],
>
> display: \[\'Sora\', \'Inter\', \'sans-serif\'\]
>
> },
>
> animation: {
>
> \'marquee\': \'marquee 30s linear infinite\',
>
> \'float\': \'float 6s ease-in-out infinite\',
>
> \'pulse-slow\': \'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite\'
>
> }
>
> }
>
> }

**13. PERFORMANCE CHECKLIST**

**13.1 Code Splitting**

- Use React.lazy() + Suspense for all page-level components

- Three.js canvas only imported on Home page (dynamic import)

- Admin dashboard is a completely separate lazy chunk

**13.2 Image Optimization**

- All images served from Supabase Storage with transformation params

- Use WebP format. Provide fallback JPEG.

- Hero images: preload with \<link rel=\'preload\'\>

- Below-fold images: loading=\'lazy\'

**13.3 Font Loading**

- Fonts: self-hosted via Fontsource or Google Fonts with display=swap

- Preconnect to fonts.googleapis.com and fonts.gstatic.com

**13.4 Analytics Deferral**

- GA4 and Clarity scripts only load after cookie consent AND window.load

- Use requestIdleCallback for non-critical scripts

**14. IMPLEMENTATION SPRINT PLAN**

**Sprint 1 --- Foundation (Week 1)**

- Project setup: Vite + React + TypeScript + Tailwind + Framer Motion

- Supabase project: Create all tables + RLS policies

- Global layout: Navbar + Footer + PageWrapper

- Cookie Consent System: CookieConsent + CookieModal + CookieManager + analytics gating

- Color system + typography system + global CSS

- SEOHead component + react-helmet-async setup

**Sprint 2 --- Home Page (Week 2)**

- HeroSection + HeroCanvas (Three.js)

- TechEcosystem marquee

- IndustriesSection

- ServicesSection

- WhyNeoPerion bento grid + AnimatedCounter

- ProcessTimeline

- TestimonialsCarousel (with Supabase data)

- FinalCTA section

**Sprint 3 --- Services & Industries (Week 3)**

- ServicePageTemplate component

- All 7 service pages with config objects

- Industries page with 4 industry sections

**Sprint 4 --- CMS Pages (Week 4)**

- Blog listing + Blog post detail + SEO

- Case Studies listing + Case study detail

- Careers page + job application form

- Contact page + lead submission + Resend email

**Sprint 5 --- Admin Dashboard (Week 5)**

- Admin auth + route protection

- Dashboard overview + stats

- Blog editor with TipTap + Supabase Storage

- Case Study editor

- Leads management + status updates

- Testimonials + Careers management

- Analytics dashboard with Recharts

- Settings panel

**Sprint 6 --- AI Features + Polish (Week 6)**

- AI Project Consultant widget

- AI Chat Bot (floating bubble)

- AI Lead Qualification Edge Function

- Performance audit: Lighthouse 95+ on all pages

- SEO: Schema markup, sitemap, robots.txt

- Responsive QA: Mobile + Tablet

- Cross-browser testing

- Deployment: Vercel / Netlify

**15. QUICK REFERENCE --- KEY COMPONENT FUNCTIONS**

**useCookieConsent.ts**

> export const useCookieConsent = () =\> {
>
> const \[visible, setVisible\] = useState(false)
>
> const \[modalOpen, setModalOpen\] = useState(false)
>
> const \[prefs, setPrefs\] = useState\<CookieConsentState \| null\>(null)
>
> useEffect(() =\> { if (!hasConsented()) setVisible(true) }, \[\])
>
> const accept = () =\> { acceptAll(); setVisible(false); initAnalytics() }
>
> const reject = () =\> { rejectAll(); setVisible(false) }
>
> const save = (p) =\> { setConsent(p); setModalOpen(false); setVisible(false) }
>
> return { visible, modalOpen, setModalOpen, accept, reject, save, prefs }
>
> }

**useAdminAuth.ts**

> export const useAdminAuth = () =\> {
>
> const \[user, setUser\] = useState(null)
>
> const \[role, setRole\] = useState\<string \| null\>(null)
>
> useEffect(() =\> {
>
> supabase.auth.getUser().then(({ data }) =\> {
>
> setUser(data.user)
>
> setRole(data.user?.user_metadata?.role ?? null)
>
> })
>
> }, \[\])
>
> const logout = () =\> supabase.auth.signOut()
>
> return { user, role, logout }
>
> }

**AnimatedCounter.tsx**

> export const AnimatedCounter = ({ end, duration = 2000, suffix = \'\' }) =\> {
>
> const ref = useRef(null)
>
> const inView = useIntersectionObserver(ref)
>
> const \[count, setCount\] = useState(0)
>
> useEffect(() =\> {
>
> if (!inView) return
>
> let start = 0
>
> const step = (timestamp) =\> {
>
> const progress = Math.min((timestamp - startTime) / duration, 1)
>
> setCount(Math.floor(progress \* end))
>
> if (progress \< 1) requestAnimationFrame(step)
>
> }
>
> let startTime: number
>
> requestAnimationFrame((ts) =\> { startTime = ts; step(ts) })
>
> }, \[inView\])
>
> return \<span ref={ref}\>{count}{suffix}\</span\>
>
> }

**--- END OF NEO PERION SOLUTIONS V2.0 MASTER IMPLEMENTATION DOCUMENT ---**

*Prepared by Neo Perion Solutions \| Confidential*
