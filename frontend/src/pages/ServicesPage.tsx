import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { FAQBlock, type FAQItem } from "@/components/shared/FAQBlock";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MobileGate, MobileShell } from "@/components/mobile";
import { SITE_URL, buildFAQSchema } from "@/lib/seo";

const servicesFaqs: FAQItem[] = [
  {
    question: 'What services does Neo Perion Solutions offer?',
    answer:
      'We design, build, and ship production-grade software across seven capabilities: AI Systems & Automation, Deep AI Engineering, Enterprise Product Engineering, Cloud-Native Web Platforms, Mobile Product Engineering, Intelligent Operations Automation, and Startup-to-Scale Engineering. Each is delivered by senior engineers — no offshoring, no juniors hidden behind account managers.',
  },
  {
    question: 'How long does a typical engagement take?',
    answer:
      'Engagements are scope-dependent. Most MVPs and AI pilots land in 6–10 weeks; full enterprise platforms run 3–6 months. We share a written timeline — broken into milestone-level delivery gates — before any work begins, so you know exactly what ships when.',
  },
  {
    question: 'Do you work with US clients? What about time zones?',
    answer:
      'Yes. We serve clients in India and the United States. Our daily overlap with US Eastern and Pacific time zones is more than four hours, we invoice in USD when preferred, and we start every engagement with a written agreement that names deliverables, timeline, and IP terms before work begins.',
  },
  {
    question: 'Who owns the code and IP at the end of the project?',
    answer:
      'You do. IP transfers to the client on final payment — repositories, design assets, documentation, and production credentials all hand over at the end. The written agreement names this on day one so there is no ambiguity later.',
  },
  {
    question: 'How do engagements start? What does the process look like?',
    answer:
      'Every engagement starts with a written agreement that defines scope, timeline, and delivery gates. We then run weekly demos through development, formal UAT before launch, and sign-off before invoice. You only pay for work that is signed off — never for hours logged.',
  },
];

const services = [
  {
    num: "01", title: "AI Systems & Automation", slug: "ai-systems-automation",
    tagline: "LLM · RAG · AI Agents",
    desc: "We design and deploy enterprise-grade RAG pipelines, autonomous AI agents, and LLM-powered assistants that operate directly on your proprietary data. Every response is cited, auditable, and governed by strict guardrails — eliminating hallucinations and compliance risks. From intelligent document Q&A to multi-step agentic workflows that act on your behalf, our AI systems are built for real production load, integrate with your existing tools, and scale securely as your business grows.",
    tech: ["RAG", "LLM", "Agents", "Vector DB"],
    png: "/images/ai.png",
    bg: "/images/2rQVx.jpg",
  },
  {
    num: "02", title: "Enterprise Product Engineering", slug: "enterprise-product-engineering",
    tagline: "SaaS · APIs · Architecture",
    desc: "From zero to production-ready SaaS in weeks, not months. We architect multi-tenant platforms, build clean REST and GraphQL APIs, and engineer the data models that hold up at scale. Our teams own the full product lifecycle — discovery, architecture, development, and launch — so you get a product that your users love, your investors trust, and your engineers can actually maintain and evolve over time.",
    tech: ["React", "Node.js", "PostgreSQL"],
    png: "/images/product-development.png",
    bg: "/images/produc_hero.jpg",
  },
  {
    num: "03", title: "Web Applications", slug: "cloud-native-web-platforms",
    tagline: "React · Next.js · Performance",
    desc: "We craft fast, accessible, and conversion-optimised web applications that score at the top of Core Web Vitals. Whether you need a customer-facing portal, an enterprise dashboard, or a content-heavy marketing platform, we engineer pixel-perfect React frontends backed by robust APIs. Every site we ship is optimised for SEO, built for global edge delivery, and designed to grow traffic and convert visitors into loyal customers.",
    tech: ["React", "Next.js", "TypeScript"],
    png: "/images/global-network.png",
    bg: "/images/webprod.jpg",
  },
  {
    num: "04", title: "Cloud-Native Platforms", slug: "intelligent-operations-automation",
    tagline: "AWS · Kubernetes · CI/CD",
    desc: "We architect and operate cloud-native infrastructure that scales elastically with your traffic, costs nothing when idle, and recovers automatically from failures. From containerised microservices on Kubernetes to fully managed serverless pipelines, we build CI/CD workflows that ship code multiple times a day with zero downtime. Your team gets observability dashboards, automated alerting, and runbooks — so on-call is calm, not chaotic.",
    tech: ["AWS", "Docker", "Kubernetes"],
    png: "/images/cloud-computing.png",
    bg: "/images/cloud_hro.jpg",
  },
  {
    num: "05", title: "Startup-to-Scale CTO", slug: "startup-to-scale-engineering",
    tagline: "Advisory · Audits · Due Diligence",
    desc: "Not every company needs a full-time CTO — but every company needs the right technical leadership at the right time. We embed as your Fractional CTO to set architecture standards, unblock your engineering team, and translate complex technical decisions into clear business outcomes. We run architecture audits, perform technical due diligence for investors and acquirers, and build 12-month roadmaps that balance speed, quality, and cost.",
    tech: ["Architecture", "System Design", "AWS"],
    png: "/images/board.png",
    bg: "/images/technical_hero.jpg",
  },
];

const stats = [
  { value: "10+",  label: "Projects" },
  { value: "6+",   label: "Industries" },
  { value: "98%",  label: "Satisfaction" },
];

export default function ServicesPage() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  /* ─── Desktop ──────────────────────────────────────────── */
  const desktop = (
    <div className="bg-[#0A0A0B] text-white min-h-[auto] flex flex-col">
      <SEO
        title="AI Automation & Software Development Services | Neo Perion Solutions"
        description="AI automation, custom web platforms, mobile apps and data analytics — scoped, priced and delivered production-grade. Five core capabilities from one founder-led team."
        url={`${SITE_URL}/services`}
        keywords="AI automation services, custom web application development, mobile app development, data analytics, AI engineering India"
        jsonLd={[
          { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          ]},
          buildFAQSchema(servicesFaqs),
        ]}
      />
      <Header />
      <main className="flex-grow">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative min-h-screen overflow-hidden">
          {/* Full-bleed video */}
          <video
            autoPlay muted loop playsInline
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            src="/images/12557570_1920_1080_30fps.mp4"
          />

          {/* Cinematic overlay — transparent at top, dark from midpoint down */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, #0A0A0B 0%, rgba(10,10,11,0.80) 38%, rgba(10,10,11,0.25) 65%, transparent 100%)' }} />
          {/* Left vignette */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(10,10,11,0.65) 0%, rgba(10,10,11,0.20) 50%, transparent 100%)' }} />

          {/* Orange top frame line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-0 left-0 right-0 h-[2px] origin-left z-20 bg-[#F77E0D]"
          />

          {/* Content — absolutely anchored bottom-left */}
          <div className="absolute bottom-0 left-0 right-0 z-10 px-8 pb-10 md:px-16 md:pb-16 lg:px-24 lg:pb-20">

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
              className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#F77E0D]"
            >
              Our Services
            </motion.p>

            {/* Headline */}
            <div className="overflow-hidden mb-0.5">
              <motion.h1
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.82, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-black leading-[0.88] tracking-tight text-white"
                style={{ fontSize: 'clamp(2.8rem, 6.5vw, 6rem)' }}
              >
                What We
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-7">
              <motion.h1
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.82, delay: 0.64, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-black leading-[0.88] tracking-tight text-[#F77E0D]"
                style={{ fontSize: 'clamp(2.8rem, 6.5vw, 6rem)' }}
              >
                Build.
              </motion.h1>
            </div>

            {/* Sub-copy + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10"
            >
              <p className="text-[14px] leading-[1.65] text-neutral-400" style={{ maxWidth: '46ch' }}>
                Seven engineering capabilities — AI systems, deep AI engineering, enterprise product,
                cloud-native web, mobile, intelligent operations, and startup-to-scale — delivered
                to clients in India and the United States. Most MVPs and AI pilots ship in 6–10 weeks;
                full enterprise platforms run 3–6 months. Every engagement starts with a written
                agreement that names scope, timeline, and IP terms before any work begins.
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#F77E0D] px-6 py-2.5 text-[13px] font-bold text-[#0A0A0B] transition-all duration-200 hover:bg-[#ff8f20]"
                >
                  Book a Consultation
                  <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <button
                  onClick={() => document.getElementById('svc-list')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[13px] font-medium text-white/45 transition-colors duration-200 hover:text-white/80"
                >
                  View All Services →
                </button>
              </div>
            </motion.div>

            {/* Thin divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-7 mb-6 h-px bg-white/[0.08]"
            />

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="flex gap-8 md:gap-14"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="mb-0.5 font-display text-[1.6rem] font-black leading-none text-white">
                    {s.value}
                  </div>
                  <div className="font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-neutral-600">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Service List ──────────────────────────────────── */}
        <section id="svc-list" className="bg-[#0A0A0B] px-8 py-24">
          <div className="mx-auto max-w-[1200px]">

            <div className="mb-14">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#F77E0D]">Capabilities</p>
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-bold tracking-tight text-white">
                Every capability. One partner.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((svc, i) => (
                <motion.div
                  key={svc.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{
                    opacity: 1, y: 0,
                    transition: { duration: 0.45, delay: (i % 3) * 0.09, ease: [0.4, 0, 0.2, 1] },
                  }}
                  viewport={{ once: true, margin: '-40px' }}
                  onClick={() => navigate(`/services/${svc.slug}`)}
                  className="group relative min-h-[520px] cursor-pointer overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0A0A0B]"
                >
                  {/* ── DEFAULT face — large icon centred ── */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-all duration-300 ease-in-out group-hover:-translate-y-6 group-hover:opacity-0">
                    <div className="mb-8 flex h-[116px] w-[116px] items-center justify-center rounded-3xl bg-[#F77E0D]">
                      <img
                        src={svc.png}
                        alt={svc.title}
                        className="h-[68px] w-[68px] object-contain"
                        style={{ filter: 'invert(1)' }}
                      />
                    </div>
                    <h3 className="text-[1.25rem] font-bold leading-tight text-white">{svc.title}</h3>
                    <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#F77E0D]/50">{svc.tagline}</p>
                  </div>

                  {/* ── HOVER face — cinematic bg image + title + desc + arrow ── */}
                  <div className="absolute inset-0 translate-y-6 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    {/* Background image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${svc.bg})` }}
                    />
                    {/* Dark overlay — 58% so bg image bleeds through */}
                    <div className="absolute inset-0 bg-[#0A0A0B]/58" />
                    {/* Content over image */}
                    <div className="relative z-10 flex h-full flex-col p-8">
                      <h3 className="text-[1.4rem] font-bold leading-tight text-white">{svc.title}</h3>
                      <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#F77E0D]/60">{svc.tagline}</p>
                      <p className="mt-5 flex-grow text-[13.5px] leading-[1.85] text-neutral-300">{svc.desc}</p>
                      <div className="mt-auto pt-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F77E0D] text-[#0A0A0B]">
                          <ArrowUpRight size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Delivery Principles ───────────────────────── */}
        <section className="bg-[#0A0A0B] px-8 py-24">
          <div className="mx-auto max-w-[1200px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#F77E0D]">Principles</p>
              <h2 className="mb-16 font-display text-[clamp(1.75rem,3vw,2.75rem)] font-bold tracking-tight text-white">
                How We Deliver
              </h2>

              <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
                {[
                  {
                    title: "Zero Black Boxes",
                    desc: "Absolute transparency from day one. You get access to weekly demos, shared repositories, and continuous delivery pipelines. No hidden processes, just shipped code.",
                  },
                  {
                    title: "Senior Talent Only",
                    desc: "Every project is led and built by senior engineers and founders. We do not use offshore junior teams hidden behind account managers. You work directly with the experts.",
                  },
                  {
                    title: "Production First",
                    desc: "We don't build throwaway prototypes. Everything is engineered to scale securely, with proper architecture, test coverage, and infrastructure as code out of the gate.",
                  },
                ].map((principle, i) => (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                    className={`${i !== 0 ? 'md:border-l md:border-white/[0.07] md:pl-14' : ''} ${i !== 2 ? 'md:pr-14' : ''}`}
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F77E0D]/10 text-[#F77E0D]">
                      <span className="font-mono text-sm font-bold">0{i + 1}</span>
                    </div>
                    <h3 className="mb-4 text-[1.2rem] font-bold text-white">{principle.title}</h3>
                    <div className="mb-4 h-[2px] w-10 bg-[#F77E0D]/30" />
                    <p className="text-[14px] leading-[1.75] text-neutral-500">{principle.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────── */}
        <FAQBlock items={servicesFaqs} heading="Services FAQ" />

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#ffa959] px-8 py-28">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.5) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent,rgba(0,0,0,0.06))]" />

          <div className="relative z-10 mx-auto max-w-[900px] text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0A0A0B]/20 bg-[#0A0A0B]/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#0A0A0B]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A0A0B]">Now Taking Projects</span>
              </div>

              <h2 className="mb-6 font-display text-[clamp(2.6rem,5vw,4.2rem)] font-black leading-[1.05] tracking-tight text-[#0A0A0B]">
                Ready to ship something<br />that actually lasts?
              </h2>

              <p className="mx-auto mb-10 max-w-xl text-[17px] leading-[1.8] text-[#0A0A0B]/70">
                Most agencies prototype. We production-deploy. Work with Neo Perion's AI-first team and go from idea to live product faster than you thought possible.
              </p>

              <div className="mb-10 flex flex-wrap justify-center gap-4">
                <button onClick={() => navigate('/contact')}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#0A0A0B] px-9 py-4 text-sm font-bold text-white transition-all hover:bg-[#1c1c1e]">
                  Book Strategy Call
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
                <button onClick={() => navigate('/company/case-studies')}
                  className="rounded-full border-2 border-[#0A0A0B]/25 px-9 py-4 text-sm font-bold text-[#0A0A0B] transition-colors hover:border-[#0A0A0B]/50">
                  View Case Studies
                </button>
              </div>

            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );

  /* ─── Mobile ───────────────────────────────────────────── */
  const mobile = (
    <MobileShell nav="bottom" showFooter bgClass="bg-[#0A0A0B]">
      <div className="w-full bg-[#0A0A0B] text-white pb-10">

        {/* Hero */}
        <section className="relative overflow-hidden px-5 pt-10 pb-12 min-h-[60vh] flex items-start">
          {/* Video bg */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            src="/images/12557570_1920_1080_30fps.mp4"
          />
          <div className="pointer-events-none absolute inset-0 bg-[#0A0A0B]/80" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0A0B] to-transparent" />
          <div className="relative z-10 w-full">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#F77E0D]">Services</p>
            <h1 className="font-display text-[2.4rem] font-black leading-[1.0] tracking-tight text-white">
              What We<br />
              <span className="text-[#F77E0D]">Build.</span>
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-neutral-400">
              Seven engineering capabilities — AI, web, mobile, data — delivered to clients in
              India and the US. Most MVPs and AI pilots ship in 6–10 weeks; full platforms run
              3–6 months. Every engagement starts with a written agreement.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <button onClick={() => navigate('/contact')}
                className="w-full rounded-full bg-[#F77E0D] py-4 text-sm font-bold text-[#0A0A0B] active:scale-[0.98] transition-all">
                Book a Consultation
              </button>
              <button onClick={() => document.getElementById('m-svc-list')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full rounded-full border border-white/[0.12] py-4 text-sm font-bold text-white/70 active:scale-[0.98] transition-all">
                View All Services
              </button>
            </div>
            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-5 border-t border-white/[0.07] pt-8">
              {stats.map(s => (
                <div key={s.label}>
                  <p className="text-[1.8rem] font-black tracking-tight text-white">{s.value}</p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-neutral-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service list */}
        <section id="m-svc-list" className="px-5 py-8">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#F77E0D]">Capabilities</p>
          <h2 className="mb-8 font-display text-xl font-bold text-white">Every capability. One partner.</h2>

          <div className="grid grid-cols-1 gap-4">
            {services.map((svc) => (
              <button
                key={svc.slug}
                onClick={() => navigate(`/services/${svc.slug}`)}
                className="group rounded-2xl border border-white/[0.07] bg-[#111012] p-5 text-left transition-all active:scale-[0.98]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F77E0D] shadow-lg">
                    <img src={svc.png} alt={svc.title} className="h-7 w-7 object-contain" style={{ filter: 'invert(1)' }} />
                  </div>
                  <span className="font-mono text-[10px] font-bold text-[#F77E0D]/50">{svc.num}</span>
                </div>
                <p className="text-sm font-bold text-white">{svc.title}</p>
                <p className="mt-0.5 mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-[#F77E0D]/50">{svc.tagline}</p>
                <p className="text-[12px] leading-relaxed text-neutral-500">{svc.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {svc.tech.slice(0, 2).map(t => (
                      <span key={t} className="rounded-full border border-[#F77E0D]/20 bg-[#F77E0D]/10 px-2 py-0.5 text-[10px] font-semibold text-[#F77E0D]">{t}</span>
                    ))}
                  </div>
                  <ArrowUpRight size={16} className="shrink-0 text-[#F77E0D]" />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Mobile CTA */}
        <section className="px-5 pb-6">
          <div className="relative overflow-hidden rounded-2xl border border-[#F77E0D]/20 bg-[#0D0C0E] p-8 text-center">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(247,126,13,0.09),transparent_60%)]" />
            <div className="relative z-10">
              <h2 className="mb-3 font-display text-xl font-bold text-white">Ready to build?</h2>
              <p className="mb-6 text-xs leading-relaxed text-neutral-400">Work with Neo Perion's AI-first engineering team.</p>
              <div className="flex flex-col gap-3">
                <button onClick={() => navigate('/contact')}
                  className="w-full rounded-full bg-[#F77E0D] py-4 text-sm font-bold text-[#0A0A0B] active:scale-[0.98] transition-all">
                  Book Strategy Call
                </button>
                <button onClick={() => navigate('/company/case-studies')}
                  className="w-full rounded-full border border-white/[0.12] py-4 text-sm font-bold text-white/70 active:scale-[0.98] transition-all">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile FAQ */}
        <FAQBlock items={servicesFaqs} heading="Services FAQ" eyebrow="FAQ" className="px-5" />

      </div>
    </MobileShell>
  );

  return <MobileGate mobileOnly fallback={desktop}>{mobile}</MobileGate>;
}
