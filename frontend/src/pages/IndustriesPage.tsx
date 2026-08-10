import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { industriesData } from '@/data/industriesData';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CtaSection } from '@/components/features/home/CtaSection';
import { SEO } from '@/components/SEO';
import { seoConfig } from "@/lib/seoConfig";
import { MobileGate } from '@/components/mobile';
import { MobileIndustries } from '@/components/mobile/Industries/MobileIndustries';
import { SITE_URL } from '@/lib/seo';

/* ─── Hero — manuscript field-guide treatment ─── */
const IndustriesHero = () => {
  return (
    <section className="pt-36 pb-24 relative overflow-hidden parchment-surface border-b border-manuscript-parchmentDeep">
      
      {/* Very faint engineering grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(91,58,31,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(91,58,31,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Copper warm glow — top right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-manuscript-copper/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Archival eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="chapter-eyebrow mb-6"
        >
          Industry Field Notes
        </motion.p>

        {/* Copper divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-manuscript-copper/40" />
          <span className="w-2 h-2 rounded-full bg-manuscript-copper/50" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-manuscript-copper/40" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="heading-manuscript text-5xl md:text-7xl mb-6"
        >
          Domain{' '}
          <span className="heading-manuscript--italic text-manuscript-copper">Expertise</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-xl text-manuscript-inkMuted max-w-2xl mx-auto font-manuscriptBody leading-relaxed"
        >
          Purpose-built digital solutions tailored to the unique challenges of your industry.
        </motion.p>
      </div>
    </section>
  );
};

export const IndustriesPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const industrySchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AINCURU LLP",
    "url": "https://www.aincuru.com/industries",
    "logo": "https://www.aincuru.com/images/np-logo.png",
    "description": "Domain expertise and purpose-built digital solutions tailored to Education, Startups, SMBs, and Healthcare.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    }
  };

  return (
      <div className="manuscript-root min-h-[auto]">
        <SEO {...seoConfig.industries} />
        <Header />
        <main>
          <IndustriesHero />

          <div className="container mx-auto px-6 md:px-8 py-24 space-y-32">
            {industriesData.map((industry, index) => {
              const Icon = industry.icon;
              const isEven = index % 2 === 0;

              return (
                <section key={industry.id} id={industry.id} className="relative">
                  <div
                    className={`flex flex-col ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } gap-12 lg:gap-20 items-center`}
                  >
                    {/* Text Content */}
                    <div className="flex-1 space-y-8">
                      {/* Industry icon — manuscript framed */}
                      <div className="inline-flex items-center justify-center p-3.5 rounded-md bg-manuscript-parchmentWarm border border-manuscript-parchmentDeep mb-2 shadow-sm">
                        <Icon className="w-7 h-7 text-manuscript-copper" />
                      </div>

                      <div>
                        {/* Archive number */}
                        <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-manuscript-copperMuted mb-2 block">
                          {String(index + 1).padStart(2, '0')} — {industry.id.toUpperCase()}
                        </span>
                        <h2 className="heading-manuscript text-4xl md:text-5xl mb-4">
                          {industry.title}
                        </h2>
                        <p className="text-lg text-manuscript-inkMuted leading-relaxed font-manuscriptBody">
                          {industry.description}
                        </p>
                      </div>

                      <div className="space-y-6">
                        <h3 className="heading-manuscript text-xl border-b border-manuscript-parchmentDeep pb-2">
                          Key Solutions
                        </h3>
                        <motion.div
                          variants={{
                            hidden: { opacity: 0 },
                            show: { opacity: 1, transition: { staggerChildren: 0.05 } },
                          }}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, margin: '-50px' }}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                          {industry.solutions.map((sol, i) => (
                            <motion.div
                              key={i}
                              variants={{
                                hidden: { opacity: 0, x: 20 },
                                show: {
                                  opacity: 1,
                                  x: 0,
                                  transition: { type: 'spring', stiffness: 80, damping: 15 },
                                },
                              }}
                              className="flex items-center gap-3 text-manuscript-inkMuted"
                            >
                              <div className="w-1.5 h-1.5 rounded-full shrink-0 bg-manuscript-copper/60" />
                              <span className="text-[15px] font-manuscriptBody">{sol}</span>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>

                      <div className="pt-4">
                        <button
                          onClick={() => navigate(`/industries/${industry.id}`)}
                          className="btn-manuscript-secondary inline-flex items-center gap-2 group"
                        >
                          Explore {industry.title}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>

                    {/* Benefits Card — dark panel for contrast */}
                    <div className="flex-1 w-full relative">
                      <div className="relative bg-manuscript-ink rounded-lg p-8 md:p-10">
                        {/* Subtle copper corner mark */}
                        <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-manuscript-copper/20 rounded-tr-lg pointer-events-none" />

                        <h3 className="font-manuscript text-2xl text-manuscript-parchmentLight mb-8 tracking-tight">
                          The AINCURU Advantage
                        </h3>
                        <motion.div
                          variants={{
                            hidden: { opacity: 0 },
                            show: { opacity: 1, transition: { staggerChildren: 0.1 } },
                          }}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, margin: '-50px' }}
                          className="space-y-6"
                        >
                          {industry.benefits.map((benefit, i) => (
                            <motion.div
                              key={i}
                              variants={{
                                hidden: { opacity: 0, x: 20 },
                                show: {
                                  opacity: 1,
                                  x: 0,
                                  transition: { type: 'spring', stiffness: 80, damping: 15 },
                                },
                              }}
                              className="flex gap-4 items-start"
                            >
                              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-manuscript-copper" />
                              <div>
                                <h4 className="text-base font-semibold text-manuscript-parchmentLight mb-1 font-manuscriptBody">
                                  {benefit.title}
                                </h4>
                                <p className="text-manuscript-inkMuted text-sm leading-relaxed font-manuscriptBody">
                                  {benefit.description}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Section divider */}
                  {index < industriesData.length - 1 && (
                    <div className="mt-24 flex items-center gap-6">
                      <div className="h-px flex-1 bg-manuscript-parchmentDeep" />
                      <span className="font-mono text-[8px] tracking-[0.4em] text-manuscript-copperMuted uppercase">
                        {String(index + 2).padStart(2, '0')}
                      </span>
                      <div className="h-px flex-1 bg-manuscript-parchmentDeep" />
                    </div>
                  )}
                </section>
              );
            })}
          </div>

          <CtaSection />
        </main>
        <Footer />
      </div>
  );
};

export default IndustriesPage;


