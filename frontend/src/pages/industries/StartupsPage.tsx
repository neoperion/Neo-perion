import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { getIndustryBySlug } from '@/data/industriesData';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  Rocket,
  Lightbulb,
  TrendingUp,
  Play,
  Clock,
  Shield,
  DollarSign,
  Code2,
  Zap,
  Check
} from 'lucide-react';
import { buildFAQSchema } from '@/lib/seo';

// ─── Startup Journey Interactive Slider ──────────────────────
const StartupJourneySlider = () => {
  const [stage, setStage] = useState(0);
  const stages = [
    {
      phase: 'IDEATION',
      title: 'Idea → Validated Concept',
      description: 'Market research, competitive analysis, user persona development, and feature prioritization using the MoSCoW method.',
      metric: 'Week 1',
      icon: Lightbulb
    },
    {
      phase: 'BUILD',
      title: 'Concept → Working MVP',
      description: 'Rapid prototyping with production-grade code. Multi-tenant SaaS architecture, auth, payments, and core features in a single sprint.',
      metric: 'Weeks 2–5',
      icon: Code2
    },
    {
      phase: 'LAUNCH',
      title: 'MVP → Market Deployment',
      description: 'Go-to-market deployment with monitoring, error tracking, user analytics, and optimized onboarding funnels.',
      metric: 'Week 6',
      icon: Rocket
    },
    {
      phase: 'SCALE',
      title: 'Market → Growth & Series A',
      description: 'Performance tuning, infrastructure scaling, feature expansion, A/B testing framework, and preparing for institutional technical due diligence.',
      metric: 'Ongoing',
      icon: TrendingUp
    }
  ];

  return (
    <div className="relative p-6 sm:p-8 lg:p-10 bg-[#FFFDF9] rounded-2xl border border-manuscript-copper/30 shadow-sm overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-manuscript-copper/8 rounded-full blur-3xl pointer-events-none" />
      <h3 className="font-mono text-xs font-bold text-manuscript-copper uppercase tracking-[0.2em] mb-6 sm:mb-8 text-center">
        Your Startup Velocity Roadmap
      </h3>

      {/* Progress Bar */}
      <div className="relative mb-6 sm:mb-8">
        <div className="h-2 bg-manuscript-parchmentDeep rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-manuscript-copper via-manuscript-gold to-manuscript-copper rounded-full"
            animate={{ width: `${((stage + 1) / stages.length) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
          {stages.map((s, i) => {
            const Icon = s.icon;
            const isPassed = i <= stage;
            const isCurrent = i === stage;
            return (
              <button
                key={i}
                onClick={() => setStage(i)}
                className={`flex flex-col items-center gap-1.5 p-2 rounded-xl border transition-all duration-300 ${
                  isCurrent
                    ? 'bg-manuscript-parchmentWarm border-manuscript-copper text-manuscript-copper shadow-sm'
                    : isPassed
                    ? 'bg-manuscript-parchmentLight border-manuscript-walnut/20 text-manuscript-ink'
                    : 'bg-manuscript-parchment/60 border-manuscript-walnut/10 text-manuscript-inkMuted opacity-60 hover:opacity-100'
                }`}
                aria-pressed={isCurrent}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all ${
                  isCurrent
                    ? 'bg-manuscript-copper text-manuscript-parchmentLight border-manuscript-copper'
                    : 'bg-manuscript-parchmentWarm text-manuscript-copper border-manuscript-walnut/15'
                }`}>
                  <Icon size={16} />
                </div>
                <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                  {s.phase}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={stage}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="bg-manuscript-parchmentWarm/80 rounded-xl p-5 sm:p-6 border border-manuscript-copper/25"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h4 className="font-manuscript text-lg sm:text-xl font-normal !text-manuscript-ink">
              {stages[stage].title}
            </h4>
            <span className="font-mono text-xs font-bold text-manuscript-copper bg-manuscript-parchmentLight px-3 py-1 rounded-full border border-manuscript-copper/25">
              {stages[stage].metric}
            </span>
          </div>
          <p className="font-manuscriptBody text-xs sm:text-sm text-manuscript-inkSoft leading-relaxed">
            {stages[stage].description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// ─── Main Page ─────────────────────────────────────────────────
export function StartupsPage() {
  const navigate = useNavigate();
  const industry = getIndustryBySlug('startups')!;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Startup & Founder Solutions - AINCURU",
    "serviceType": "Startup & Founder Solutions",
    "description": industry.heroSubtext,
    "provider": {
      "@type": "LocalBusiness",
      "name": "AINCURU LLP",
      "image": "https://www.aincuru.com/images/np-logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "Global" }
    ]
  };

  return (
    <div className="manuscript-root min-h-screen parchment-surface text-manuscript-ink selection:bg-manuscript-copper selection:text-white w-full max-w-full overflow-x-clip box-border">
      <SEO
        title="Startup & Founder Solutions | MVP Development & SaaS | AINCURU"
        description={industry.heroSubtext}
        url="https://www.aincuru.com/industries/startups"
        jsonLd={[seoSchema, buildFAQSchema(industry.faq)]}
      />
      <Header theme="manuscript" />

      <main className="w-full max-w-full overflow-x-clip box-border">
        {/* ═══════════════ HERO SECTION ═══════════════ */}
        <section className="pt-36 sm:pt-40 md:pt-48 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-6 lg:px-12 border-b border-manuscript-parchmentDeep relative overflow-hidden w-full max-w-full box-border">
          <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-manuscript-copper/8 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-manuscript-gold/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-manuscript-parchmentWarm border border-manuscript-copper/20 flex items-center justify-center shadow-sm">
                  <Rocket className="text-manuscript-copper" size={20} />
                </div>
                <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-manuscript-copper">
                  {industry.tagline}
                </span>
              </div>

              <h1 className="heading-manuscript text-4xl sm:text-5xl lg:text-[3.5rem] font-normal leading-[1.08] tracking-tight !text-manuscript-ink">
                {industry.heroHeadline}
              </h1>

              <p className="font-manuscriptBody text-lg sm:text-xl text-manuscript-inkMuted leading-relaxed max-w-xl">
                {industry.heroSubtext}
              </p>

              <p className="font-manuscriptBody text-sm sm:text-base text-manuscript-inkSoft leading-relaxed max-w-xl">
                AINCURU LLP partners with founders to design, build, and ship investor-ready MVPs and SaaS platforms, providing fractional CTO support from idea validation to Series A due diligence. Core MVPs typically ship in 6–10 weeks on clear milestone agreements.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2.5 px-8 py-4 bg-manuscript-ink text-manuscript-parchmentLight font-manuscriptBody text-[13px] font-bold uppercase tracking-wider rounded transition-all hover:bg-manuscript-walnutDeep hover:-translate-y-0.5 shadow-sm"
                >
                  <span>{industry.ctaText}</span>
                  <ArrowRight size={16} className="text-manuscript-gold" />
                </button>
                <button
                  onClick={() => navigate('/portfolio')}
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 bg-manuscript-parchmentLight text-manuscript-ink font-manuscriptBody text-[13px] font-bold uppercase tracking-wider rounded border border-manuscript-walnut/30 hover:bg-manuscript-parchmentWarm transition-colors"
                >
                  <Play size={14} className="text-manuscript-copper" />
                  <span>View Case Studies</span>
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="w-full max-w-full overflow-hidden">
              <StartupJourneySlider />
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ SOLUTIONS GRID ═══════════════ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-manuscript-parchmentLight border-b border-manuscript-walnut/15 w-full max-w-full overflow-hidden box-border">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 sm:mb-16 text-center sm:text-left">
              <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-manuscript-copper mb-2 block">
                What We Build
              </span>
              <h2 className="heading-manuscript text-3xl sm:text-4xl md:text-5xl font-normal !text-manuscript-ink tracking-tight mb-3">
                Startup Engineering Capabilities
              </h2>
              <p className="font-manuscriptBody text-base sm:text-lg text-manuscript-inkMuted max-w-2xl">
                From first line of code to Series B scale — everything a technical founder needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {industry.offerings.map((offering, i) => {
                const Icon = offering.icon;
                return (
                  <div
                    key={i}
                    className="p-6 sm:p-8 rounded-2xl bg-[#FFFDF9] border border-manuscript-copper/25 hover:border-manuscript-copper/45 transition-all shadow-sm"
                  >
                    <div className="w-12 h-12 bg-manuscript-parchmentWarm rounded-xl border border-manuscript-copper/20 flex items-center justify-center mb-5 text-manuscript-copper">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-manuscript text-xl sm:text-2xl font-normal !text-manuscript-ink mb-2">
                      {offering.title}
                    </h3>
                    <p className="font-manuscriptBody text-xs sm:text-sm text-manuscript-inkSoft leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════ HOW WE WORK — TIMELINE ═══════════════ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 parchment-surface border-b border-manuscript-parchmentDeep w-full max-w-full overflow-hidden box-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-manuscript-copper mb-2 block">
                Our Process
              </span>
              <h2 className="heading-manuscript text-3xl sm:text-4xl md:text-5xl font-normal !text-manuscript-ink tracking-tight mb-3">
                Idea to Launch in 6 Weeks
              </h2>
              <p className="font-manuscriptBody text-base sm:text-lg text-manuscript-inkMuted max-w-2xl mx-auto">
                Battle-tested methodology refined across startup partnerships.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
              {industry.process.map((step, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#FFFDF9] border border-manuscript-copper/20 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-manuscript-parchmentWarm border border-manuscript-copper/20 flex items-center justify-center mb-4 text-manuscript-copper font-mono font-bold text-sm">
                      {step.step}
                    </div>
                    <h3 className="font-manuscript text-lg font-normal !text-manuscript-ink mb-2">
                      {step.title}
                    </h3>
                    <p className="font-manuscriptBody text-xs text-manuscript-inkSoft leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ FOUNDER TRUST SIGNALS ═══════════════ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-manuscript-parchmentLight border-b border-manuscript-walnut/15 w-full max-w-full overflow-hidden box-border">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 sm:mb-16 text-center sm:text-left">
              <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-manuscript-copper mb-2 block">
                Why Founders Choose Us
              </span>
              <h2 className="heading-manuscript text-3xl sm:text-4xl md:text-5xl font-normal !text-manuscript-ink tracking-tight">
                Built for Startup Speed
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {[
                { icon: Clock, title: 'Speed to Market', desc: 'Launch your core product in weeks, not months. We ship fast without sacrificing code quality.' },
                { icon: Shield, title: 'Investor Ready', desc: 'Enterprise-grade architecture that passes institutional technical due diligence from day one.' },
                { icon: DollarSign, title: 'Cost Predictability', desc: 'Transparent sprint pricing and agile scoping to keep your burn rate manageable.' }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="rounded-2xl bg-[#FFFDF9] border border-manuscript-copper/25 p-6 sm:p-8 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-manuscript-parchmentWarm border border-manuscript-copper/25 flex items-center justify-center mb-5 text-manuscript-copper">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-manuscript text-xl font-normal !text-manuscript-ink mb-2">
                      {item.title}
                    </h3>
                    <p className="font-manuscriptBody text-xs sm:text-sm text-manuscript-inkSoft leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════ TECH STACK ═══════════════ */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 parchment-surface border-b border-manuscript-parchmentDeep w-full max-w-full overflow-hidden box-border">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <div className="shrink-0">
                <h3 className="font-mono text-xs font-bold text-manuscript-copper uppercase tracking-[0.2em]">
                  Tech Stack
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 justify-center md:justify-start">
                {industry.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 bg-[#FFFDF9] border border-manuscript-copper/20 rounded-full font-mono text-xs font-medium text-manuscript-ink shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ CASE STUDY PREVIEW ═══════════════ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-manuscript-parchmentLight border-b border-manuscript-walnut/15 w-full max-w-full overflow-hidden box-border">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-[#FFFDF9] border-2 border-manuscript-copper/30 p-8 sm:p-12 md:p-16 shadow-sm">
              <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 sm:gap-12 items-center">
                <div className="space-y-4">
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-manuscript-copper block">
                    Featured Project
                  </span>
                  <h3 className="heading-manuscript text-2xl sm:text-3xl md:text-4xl font-normal !text-manuscript-ink">
                    {industry.caseStudyPreview.title}
                  </h3>
                  <p className="font-mono text-xs text-manuscript-inkMuted font-bold">
                    {industry.caseStudyPreview.client}
                  </p>
                  <p className="font-manuscriptBody text-sm sm:text-base text-manuscript-inkSoft leading-relaxed max-w-xl">
                    {industry.caseStudyPreview.result}
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => navigate('/portfolio')}
                      className="group inline-flex items-center gap-2 text-manuscript-copper font-manuscriptBody text-sm font-bold hover:text-manuscript-rust transition-colors"
                    >
                      Read Full Case Study <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                <div className="text-left md:text-right border-t md:border-t-0 md:border-l border-manuscript-walnut/15 pt-6 md:pt-0 md:pl-10">
                  <div className="font-manuscript text-5xl sm:text-6xl md:text-7xl font-normal text-manuscript-copper mb-1">
                    {industry.caseStudyPreview.metric}
                  </div>
                  <div className="font-mono text-xs text-manuscript-inkMuted font-semibold uppercase tracking-wider">
                    {industry.caseStudyPreview.metricLabel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ FAQ ═══════════════ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 parchment-surface border-b border-manuscript-parchmentDeep w-full max-w-full overflow-hidden box-border">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-manuscript-copper mb-2 block">
                FAQ
              </span>
              <h2 className="heading-manuscript text-3xl sm:text-4xl md:text-5xl font-normal !text-manuscript-ink tracking-tight">
                Common Questions
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {industry.faq.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#FFFDF9] border border-manuscript-walnut/20 rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 sm:p-6 text-left group gap-3"
                  >
                    <h3 className="font-manuscript text-base sm:text-lg font-normal !text-manuscript-ink pr-4 group-hover:text-manuscript-copper transition-colors">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className={`shrink-0 text-manuscript-copper transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                      size={18}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-4 sm:px-6 pb-4 sm:pb-6 text-xs sm:text-sm md:text-base text-manuscript-inkSoft font-manuscriptBody leading-relaxed border-t border-manuscript-walnut/10 pt-4"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ CTA SECTION ═══════════════ */}
        <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-12 parchment-surface--deep text-center relative overflow-hidden border-t border-manuscript-parchmentDeep w-full max-w-full box-border">
          <div className="container mx-auto max-w-3xl relative z-10 space-y-6 sm:space-y-8">
            <span className="chapter-eyebrow font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] text-manuscript-copper font-bold block">
              Founder Sprint Partnership
            </span>

            <h2 className="heading-manuscript text-4xl sm:text-6xl md:text-7xl font-normal !text-manuscript-ink tracking-tight leading-none">
              Ready to Launch Your{' '}
              <span className="heading-manuscript--italic text-manuscript-copper">
                Startup?
              </span>
            </h2>

            <p className="font-manuscriptBody text-base sm:text-lg md:text-2xl text-manuscript-inkSoft max-w-xl mx-auto leading-relaxed">
              Join founders who trusted us to turn their visionary concepts into investor-ready products.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 font-manuscriptBody text-[13px] font-bold uppercase tracking-[0.2em] text-manuscript-parchmentLight shadow-md transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#8B3A1F",
                  borderRadius: 4,
                }}
              >
                <span>BOOK A FOUNDER CALL</span>
                <ArrowRight size={16} className="text-manuscript-gold" />
              </button>

              <button
                onClick={() => navigate('/industries')}
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2.5 px-8 py-4 font-manuscriptBody text-[13px] font-bold uppercase tracking-[0.2em] text-manuscript-ink border border-manuscript-walnut/30 bg-manuscript-parchmentLight hover:bg-manuscript-parchmentWarm transition-colors"
                style={{
                  borderRadius: 4,
                }}
              >
                <span>ALL INDUSTRIES</span>
              </button>
            </div>

            <div className="pt-6 border-t border-manuscript-walnut/15 max-w-xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-manuscript-inkMuted">
              <span>Full IP Ownership</span>
              <span>·</span>
              <span>Zero Throwaway Code</span>
              <span>·</span>
              <span>Direct Founder Oversight</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default StartupsPage;
