import React, { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { getIndustryBySlug } from '@/data/industriesData';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ArrowRight, ChevronDown, Building2, Settings, Users, PieChart, Briefcase,
  Play, Sparkles, Zap, Star, CheckCircle2, TrendingUp, Clock, DollarSign, BarChart3
} from 'lucide-react';
import { MobileGate, MobileShell } from '@/components/mobile';
import { AnimatedNumber } from '@/components/ui/AnimatedNumber';
import { buildFAQSchema } from '@/lib/seo';

// ─── Interactive ROI Impact Calculator ──────────────────────
const ROIImpactCalculator = () => {
  const [employees, setEmployees] = useState(50);
  const [manualHours, setManualHours] = useState(20);

  const hoursSaved = Math.round(employees * manualHours * 0.6);
  const costSaved = Math.round(hoursSaved * 25);
  const annualSaving = costSaved * 12;

  return (
    <div className="relative premium-card p-8 lg:p-10 bg-neutral-900 overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 text-center">Automation ROI Calculator</h3>

      <div className="space-y-6 mb-8">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-semibold text-neutral-400">Team Size</label>
            <span className="text-sm font-bold text-amber-400">{employees} employees</span>
          </div>
          <input
            type="range"
            min="5"
            max="500"
            value={employees}
            onChange={(e) => setEmployees(parseInt(e.target.value))}
            className="w-full h-2 bg-neutral-900 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-amber-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:shadow-amber-200 [&::-webkit-slider-thumb]:cursor-pointer"
            aria-label="Team size slider"
            aria-valuemin={5}
            aria-valuemax={500}
            aria-valuenow={employees}
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-semibold text-neutral-400">Manual Hours/Week per Person</label>
            <span className="text-sm font-bold text-amber-400">{manualHours} hrs</span>
          </div>
          <input
            type="range"
            min="5"
            max="40"
            value={manualHours}
            onChange={(e) => setManualHours(parseInt(e.target.value))}
            className="w-full h-2 bg-neutral-900 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-amber-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:shadow-amber-200 [&::-webkit-slider-thumb]:cursor-pointer"
            aria-label="Manual hours per week per person slider"
            aria-valuemin={5}
            aria-valuemax={40}
            aria-valuenow={manualHours}
          />
        </div>
      </div>

      {/* Results */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-500/30 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <Clock size={16} className="text-amber-500" />
            <span className="font-semibold">Hours Saved / Month</span>
          </div>
          <span className="text-xl font-black text-white">
            <AnimatedNumber value={hoursSaved} />
          </span>
        </div>
        <div className="h-px bg-amber-200/50" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <DollarSign size={16} className="text-amber-500" />
            <span className="font-semibold">Monthly Savings</span>
          </div>
          <span className="text-xl font-black text-white">
            <AnimatedNumber value={costSaved} formatter={(val) => `$${val.toLocaleString()}`} />
          </span>
        </div>
        <div className="h-px bg-amber-200/50" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-amber-400 font-bold">
            <TrendingUp size={16} />
            <span>Annual Impact</span>
          </div>
          <span className="text-2xl font-black text-amber-400">
            <AnimatedNumber value={annualSaving} formatter={(val) => `$${val.toLocaleString()}`} />
          </span>
        </div>
      </div>
    </div>
  );
};

// ─── Main Page ─────────────────────────────────────────────────
export function SMBEnterprisePage() {
  const navigate = useNavigate();
  const industry = getIndustryBySlug('smbs')!;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SMB & Enterprise Solutions - AINCURU",
    "serviceType": "SMB & Enterprise Solutions",
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
    <MobileGate mobileOnly fallback={
      <div className="bg-neutral-900 text-white min-h-[auto]">
        <SEO
          title="SMB & Enterprise Solutions | Business Automation & Digital Transformation | AINCURU"
          description={industry.heroSubtext}
          url="https://www.aincuru.com/industries/smbs"
          jsonLd={[seoSchema, buildFAQSchema(industry.faq)]}
        />
        <Header />

        {/* ═══════════════ HERO SECTION ═══════════════ */}
        <section className="pt-32 pb-24 px-6 lg:px-12 border-b border-neutral-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] opacity-60 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] opacity-40 pointer-events-none" />

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                  <Building2 className="text-amber-400" size={20} />
                </div>
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-400">{industry.tagline}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black mb-6 tracking-tight text-white leading-[1.1]">
                {industry.heroHeadline}
              </h1>
              <p className="text-xl text-neutral-400 mb-10 leading-relaxed font-medium max-w-xl">{industry.heroSubtext}</p>
              {/* Phase 4 GEO — answer-first sentence for AI/SEO. No pricing; timeframe + process only. */}
              <p className="text-base text-neutral-400 mb-10 leading-relaxed max-w-xl">
                AINCURU LLP builds custom CRM and ERP systems, internal dashboards, workflow automations, and data analytics platforms for small and mid-sized businesses and enterprises. Pilots and integrations typically ship in 4–10 weeks; full enterprise platforms in 3–6 months, with a written agreement that names deliverables and acceptance gates up front.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="group px-8 py-4 parchment-surface--deep text-white rounded-xl font-bold hover:bg-amber-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {industry.ctaText} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => navigate('/company/case-studies')}
                  className="px-8 py-4 bg-neutral-900 text-neutral-200 rounded-xl font-bold border border-neutral-800 hover:border-amber-500/30 hover:text-amber-400 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Play size={16} /> View Case Studies
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <ROIImpactCalculator />
            </motion.div>
          </div>
        </section>



        {/* ═══════════════ SOLUTIONS GRID ═══════════════ */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-400 mb-3 block">What We Build</span>
              <h2 className="text-3xl md:text-[2.75rem] font-black text-white mb-4 tracking-tight">
                Enterprise Transformation Capabilities
              </h2>
              <p className="text-lg text-neutral-400 max-w-2xl">
                End-to-end digital solutions that eliminate bottlenecks and turn data into competitive advantage.
              </p>
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 gap-6"
            >
              {industry.offerings.map((offering, i) => {
                const Icon = offering.icon;
                return (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
                    }}
                    className="group relative p-8 rounded-[24px] bg-neutral-900 border border-neutral-800 hover:border-amber-500/30 hover:bg-neutral-900 hover:shadow-xl hover:shadow-amber-50 transition-all duration-500"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-neutral-900 rounded-2xl border border-neutral-800 flex items-center justify-center mb-6 shadow-sm group-hover:border-amber-500/30 group-hover:shadow-amber-100 transition-all duration-500">
                        <Icon className="text-slate-400 group-hover:text-amber-400 transition-colors duration-500" size={26} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{offering.title}</h3>
                      <p className="text-neutral-400 leading-relaxed">{offering.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ HOW WE WORK — PROCESS ═══════════════ */}
        <section className="py-24 px-6 lg:px-12 parchment-surface--deep text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-900/30 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-800/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-400 mb-3 block">Our Process</span>
              <h2 className="text-3xl md:text-[2.75rem] font-black mb-4 tracking-tight">From Audit to Automation</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">A structured methodology that delivers measurable ROI at every step.</p>
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-4 gap-6"
            >
              {industry.process.map((step, i) => (
                <motion.div 
                  key={i} 
                  variants={{
                    hidden: { opacity: 0, x: 30 },
                    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
                  }}
                  className="relative group"
                >
                  {i < 3 && <div className="hidden md:block absolute top-12 left-[calc(100%)] w-full h-[2px] bg-gradient-to-r from-amber-500/30 to-transparent z-0" />}
                  <div className="relative parchment-surface/5 backdrop-blur-sm border border-white/10 rounded-[24px] p-8 hover:parchment-surface/10 hover:border-amber-500/30 transition-all duration-500 h-full">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 text-amber-400 font-black text-xl group-hover:bg-amber-500/20 transition-all">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ TRANSFORMATION IMPACT ═══════════════ */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-400 mb-3 block">Transformation Impact</span>
              <h2 className="text-3xl md:text-[2.75rem] font-black text-white mb-4 tracking-tight">Before & After Automation</h2>
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                {
                  before: 'Manual data entry across 5 spreadsheets',
                  after: 'Single unified dashboard with real-time sync',
                  metric: '80% time saved',
                  icon: BarChart3,
                  gradient: 'from-amber-50 to-orange-50'
                },
                {
                  before: 'Weekly reports compiled by hand',
                  after: 'Automated daily reports with anomaly alerts',
                  metric: '100% accuracy',
                  icon: PieChart,
                  gradient: 'from-orange-50 to-amber-50'
                },
                {
                  before: 'Leads falling through the cracks',
                  after: 'AI-scored leads with automated follow-ups',
                  metric: '3x conversion rate',
                  icon: TrendingUp,
                  gradient: 'from-yellow-50 to-amber-50'
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
                    }}
                    className={`relative rounded-[24px] bg-gradient-to-br ${item.gradient} border border-neutral-800 p-8 overflow-hidden group hover:shadow-xl hover:shadow-amber-50 transition-all duration-500`}
                  >
                    <div className="absolute -top-8 -right-8 w-24 h-24 parchment-surface/60 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-700 pointer-events-none" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-manuscriptAlpha-ink-15/60 shadow-sm flex items-center justify-center mb-6">
                        <Icon className="text-amber-400" size={22} />
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-red-400" />
                          <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Before</span>
                        </div>
                        <p className="text-sm text-neutral-400 line-through decoration-red-300">{item.before}</p>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">After</span>
                        </div>
                        <p className="text-sm text-neutral-200 font-semibold">{item.after}</p>
                      </div>
                      <div className="pt-4 border-t border-manuscriptAlpha-ink-15/50">
                        <span className="text-lg font-black text-amber-400">{item.metric}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ TECH STACK ═══════════════ */}
        <section className="py-16 px-6 lg:px-12 bg-neutral-900 border-y border-neutral-800">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Tech Stack</h3>
              </div>
              <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
                {industry.techStack.map((tech, i) => (
                  <motion.span key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-sm font-semibold text-neutral-400 hover:border-amber-500/30 hover:text-amber-400 hover:shadow-sm transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ CASE STUDY PREVIEW ═══════════════ */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 md:p-16"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-900/30 via-transparent to-transparent" />
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-12 items-center">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-400 mb-4 block">Featured Project</span>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3">{industry.caseStudyPreview.title}</h3>
                  <p className="text-sm text-slate-400 mb-6 font-semibold">{industry.caseStudyPreview.client}</p>
                  <p className="text-slate-300 leading-relaxed mb-8">{industry.caseStudyPreview.result}</p>
                  <button onClick={() => navigate('/company/case-studies')} className="group inline-flex items-center gap-2 text-amber-400 font-bold hover:text-amber-300 transition-colors">
                    Read Full Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-6xl md:text-7xl font-black text-amber-400 mb-2">{industry.caseStudyPreview.metric}</div>
                  <div className="text-sm text-slate-400 font-semibold uppercase tracking-wider">{industry.caseStudyPreview.metricLabel}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ FAQ ═══════════════ */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-900">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-400 mb-3 block">FAQ</span>
              <h2 className="text-3xl md:text-[2.75rem] font-black text-white tracking-tight">Common Questions</h2>
            </motion.div>

            <div className="space-y-4">
              {industry.faq.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-slate-100 transition-all duration-300"
                >
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left group">
                    <h3 className="text-[17px] font-bold text-white pr-4 group-hover:text-amber-400 transition-colors">{item.question}</h3>
                    <ChevronDown className={`shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-amber-500' : ''}`} size={20} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <div className="px-6 pb-6 text-neutral-400 leading-relaxed border-t border-neutral-800 pt-4">{item.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ CTA SECTION ═══════════════ */}
        <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-amber-500 via-amber-600 to-orange-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-amber-300/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="w-16 h-16 rounded-2xl parchment-surface/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-8">
                <Building2 className="text-white" size={30} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Ready to Transform Your Business?</h2>
              <p className="text-lg text-amber-100 mb-10 max-w-2xl mx-auto">
                Let's audit your operations and identify high-impact automation opportunities.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={() => navigate('/contact')} className="group px-8 py-4 bg-neutral-900 text-amber-400 rounded-xl font-bold hover:bg-amber-500/10 transition-all duration-300 flex items-center gap-2 shadow-xl shadow-amber-900/20">
                  Get Your Free Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={() => navigate('/services')} className="px-8 py-4 parchment-surface/10 backdrop-blur-sm text-white rounded-xl font-bold border border-white/20 hover:parchment-surface/20 transition-all duration-300">
                  Explore All Services
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    }>
      <MobileShell nav="bottom" showFooter bgClass="bg-[#02040A]">
        {/* Hero Mobile */}
        <section className="pt-24 pb-12 px-6 relative overflow-hidden bg-[#02040A]">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
          <div className="absolute -top-[20%] -right-[10%] w-[120%] h-[60%] blur-[100px] rounded-full pointer-events-none opacity-20 bg-amber-500" />
          
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4 text-amber-400">
            {industry.tagline}
          </p>
          <h1 className="text-display-lg text-white tracking-tight mb-4">{industry.heroHeadline}</h1>
          <p className="text-base text-white/70 mb-8">{industry.heroSubtext}</p>
          {/* Phase 4 GEO — mobile answer-first sentence. Mirrors the desktop copy. */}
          <p className="text-sm text-white/70 mb-8 leading-relaxed">
            AINCURU LLP builds custom CRM and ERP systems, internal dashboards, workflow automations, and data analytics platforms for small and mid-sized businesses and enterprises. Pilots and integrations typically ship in 4–10 weeks; full enterprise platforms in 3–6 months, with a written agreement that names deliverables and acceptance gates up front.
          </p>
          
          <button 
            onClick={() => navigate('/contact')}
            className="w-full h-12 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2 relative overflow-hidden border border-white/10 active:scale-[0.98] transition-transform"
          >
            <div className="absolute inset-0 opacity-20 bg-amber-500" />
            <span className="relative z-10 flex items-center gap-2">{industry.ctaText} <ArrowRight size={16} /></span>
          </button>
        </section>

        {/* ROI Calculator Mobile */}
        <section className="px-6 py-10 bg-[#030B1D] border-t border-white/[0.08]">
          <h2 className="text-lg font-bold text-white mb-6">Automation ROI Impact</h2>
          <div className="rounded-3xl border border-white/[0.08] parchment-surface/[0.02] backdrop-blur-glass-1 overflow-hidden p-1">
            <ROIImpactCalculator />
          </div>
        </section>

        {/* Offerings Mobile */}
        <section className="px-6 py-10 bg-[#02040A] border-t border-white/[0.08]">
          <h2 className="text-lg font-bold text-white mb-6">What We Build</h2>
          <div className="grid gap-3">
             {industry.offerings.map((offering, i) => {
               const Icon = offering.icon;
               return (
                 <div key={i} className="p-5 rounded-3xl border border-white/[0.08] parchment-surface/[0.02] backdrop-blur-glass-1">
                   <div className="flex items-start gap-3">
                     <Icon className="text-amber-400 shrink-0 mt-0.5" size={20} />
                     <div>
                       <h3 className="text-sm font-bold text-white mb-1">{offering.title}</h3>
                       <p className="text-[13px] text-white/60 leading-relaxed">{offering.description}</p>
                     </div>
                   </div>
                 </div>
               )
             })}
          </div>
        </section>

        {/* Transformation Mobile */}
        <section className="px-6 py-10 bg-[#030B1D] border-t border-white/[0.08]">
          <h2 className="text-lg font-bold text-white mb-6">Before & After Automation</h2>
          <div className="grid gap-3">
            {[
              {
                before: 'Manual data entry across 5 spreadsheets',
                after: 'Single unified dashboard with real-time sync',
                metric: '80% time saved',
                color: 'text-amber-400'
              },
              {
                before: 'Weekly reports compiled by hand',
                after: 'Automated daily reports with anomaly alerts',
                metric: '100% accuracy',
                color: 'text-orange-400'
              },
              {
                before: 'Leads falling through the cracks',
                after: 'AI-scored leads with automated follow-ups',
                metric: '3x conversion rate',
                color: 'text-amber-500'
              }
            ].map((item, i) => (
               <div key={i} className="parchment-surface/[0.02] border border-white/[0.05] p-5 rounded-3xl backdrop-blur-glass-1">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Before</span>
                    </div>
                    <p className="text-[13px] text-white/50 line-through">{item.before}</p>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">After</span>
                    </div>
                    <p className="text-[13px] text-white/90 font-semibold">{item.after}</p>
                  </div>
                  <div className="pt-4 border-t border-white/[0.05]">
                    <span className={`text-[15px] font-black ${item.color}`}>{item.metric}</span>
                  </div>
               </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Mobile */}
        <section className="px-6 py-10 bg-[#02040A] border-t border-white/[0.08]">
          <h2 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {industry.techStack.map((tech, i) => (
              <span key={i} className="px-3 py-1.5 parchment-surface/[0.03] border border-white/10 rounded-full text-[11px] font-semibold text-white/70">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <div className="h-10 bg-[#02040A]" />
      </MobileShell>
    </MobileGate>
  );
}


