import React from 'react';
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seoConfig";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrendingUp } from 'lucide-react';
import { MobileGate, MobileShell } from "@/components/mobile";
import { motion } from 'framer-motion';

export default function SuccessStories() {
  const stories = [
    {
      client:  'FinTech Startup',
      title:   'Scaling from MVP to 100k Users',
      metric:  '300% Growth',
      desc:    'Re-architected the backend to support massive transaction volume.',
      index:   '01',
    },
    {
      client:  'EdTech Platform',
      title:   'AI-Powered Learning Paths',
      metric:  '40% Retention Increase',
      desc:    'Integrated custom LLMs to personalize student journeys.',
      index:   '02',
    },
    {
      client:  'Healthcare Enterprise',
      title:   'HIPAA Compliant Data Pipeline',
      metric:  'Zero Breaches',
      desc:    'Built a secure data processing system for patient records.',
      index:   '03',
    },
  ];

  return (
    <MobileGate mobileOnly fallback={
      <div className="manuscript-root min-h-[auto]">
      <SEO {...seoConfig.successStories} />
        
        <Header />

        <main>
          {/* Hero */}
          <section className="pt-36 pb-24 parchment-surface border-b border-manuscript-parchmentDeep relative overflow-hidden">
            {/* Engineering grid */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(91,58,31,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(91,58,31,0.04) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />
            <div className="container mx-auto px-8 text-center relative z-10">
              <p className="chapter-eyebrow mb-6">Impact Record</p>
              <h1 className="heading-manuscript text-5xl lg:text-7xl mb-6">
                Success{' '}
                <span className="heading-manuscript--italic text-manuscript-copper">Stories</span>
              </h1>
              <p className="text-xl text-manuscript-inkMuted max-w-2xl mx-auto font-manuscriptBody leading-relaxed">
                See how we've helped companies transform their operations and scale their products.
              </p>
            </div>
          </section>

          {/* Stories */}
          <section className="parchment-surface--warm py-20 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
              {stories.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="manuscript-card rounded-lg p-8 flex flex-col"
                >
                  {/* Archive number */}
                  <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-manuscript-copperMuted mb-4 block">
                    {s.index}
                  </span>

                  {/* Icon */}
                  <div className="w-11 h-11 rounded-md bg-manuscript-parchment border border-manuscript-copper/25 flex items-center justify-center mb-6">
                    <TrendingUp className="text-manuscript-copper" size={20} />
                  </div>

                  {/* Client */}
                  <p className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase text-manuscript-copperMuted mb-3">
                    {s.client}
                  </p>

                  <h3 className="heading-manuscript text-2xl mb-4">{s.title}</h3>
                  <p className="text-manuscript-inkMuted text-[14px] leading-relaxed font-manuscriptBody mb-6 flex-1">
                    {s.desc}
                  </p>

                  {/* Metric panel */}
                  <div className="mt-auto pt-5 border-t border-manuscript-parchmentDeep">
                    <p className="font-mono text-[8px] tracking-[0.4em] uppercase text-manuscript-copperMuted mb-1">
                      Key Result
                    </p>
                    <p className="font-manuscript text-2xl font-bold text-manuscript-copper">
                      {s.metric}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-manuscript-ink border-t border-manuscript-walnutDeep">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <p className="chapter-eyebrow text-manuscript-copperMuted mb-6">Your Story Next</p>
              <h2 className="font-manuscript text-3xl md:text-4xl text-manuscript-parchmentLight mb-6">
                Ready to write your success story?
              </h2>
              <a href="/contact" className="btn-manuscript-secondary border-manuscript-copper/40 text-manuscript-parchmentLight hover:bg-manuscript-copper/10 hover:border-manuscript-copper inline-flex items-center gap-2">
                Book a Strategy Call
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    }>
      {/* Mobile layout — preserved exactly */}
      <MobileShell nav="bottom" showFooter>
        <div className="w-full pb-8">
          <main className="pt-8 pb-12">
            <section className="text-left px-6 mb-10">
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-3">Impact</p>
              <h1 className="text-display-lg text-white tracking-tight mb-4">Success Stories.</h1>
              <p className="text-base text-white/70">See how we've helped companies transform their operations and scale their products.</p>
            </section>
            <section className="px-6 space-y-4">
              {stories.map((s, i) => (
                <div key={i} className="p-6 rounded-3xl border border-white/[0.08] backdrop-blur-glass-1">
                  <div className="w-10 h-10 rounded-xl border border-white/[0.1] flex items-center justify-center mb-5">
                    <TrendingUp className="text-neo-highlight" size={20} />
                  </div>
                  <p className="text-[11px] font-bold tracking-wider uppercase text-white/50 mb-1">{s.client}</p>
                  <h3 className="text-[17px] font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-[13px] text-white/60 mb-6 line-clamp-2">{s.desc}</p>
                  <div className="p-4 rounded-2xl bg-[#020617]/50 border border-white/[0.04]">
                    <p className="text-[11px] font-semibold text-white/40 mb-1 uppercase tracking-wide">Key Result</p>
                    <p className="text-[18px] font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-[#FFB05C]">{s.metric}</p>
                  </div>
                </div>
              ))}
            </section>
          </main>
        </div>
      </MobileShell>
    </MobileGate>
  );
}
