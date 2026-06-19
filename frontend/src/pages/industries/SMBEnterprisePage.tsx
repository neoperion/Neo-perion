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


// ─── Interactive ROI Impact Calculator ──────────────────────
const ROIImpactCalculator = () => {
  const [employees, setEmployees] = useState(50);
  const [manualHours, setManualHours] = useState(20);

  const hoursSaved = Math.round(employees * manualHours * 0.6);
  const costSaved = Math.round(hoursSaved * 25);
  const annualSaving = costSaved * 12;

  return (
    <div className="relative premium-card p-8 lg:p-10 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 text-center">Automation ROI Calculator</h3>

      <div className="space-y-6 mb-8">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-semibold text-slate-600">Team Size</label>
            <span className="text-sm font-bold text-amber-600">{employees} employees</span>
          </div>
          <input
            type="range"
            min="5"
            max="500"
            value={employees}
            onChange={(e) => setEmployees(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-amber-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:shadow-amber-200 [&::-webkit-slider-thumb]:cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-semibold text-slate-600">Manual Hours/Week per Person</label>
            <span className="text-sm font-bold text-amber-600">{manualHours} hrs</span>
          </div>
          <input
            type="range"
            min="5"
            max="40"
            value={manualHours}
            onChange={(e) => setManualHours(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-amber-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:shadow-amber-200 [&::-webkit-slider-thumb]:cursor-pointer"
          />
        </div>
      </div>

      {/* Results */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Clock size={16} className="text-amber-500" />
            <span className="font-semibold">Hours Saved / Month</span>
          </div>
          <span className="text-xl font-black text-slate-900">{hoursSaved.toLocaleString()}</span>
        </div>
        <div className="h-px bg-amber-200/50" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <DollarSign size={16} className="text-amber-500" />
            <span className="font-semibold">Monthly Savings</span>
          </div>
          <span className="text-xl font-black text-slate-900">${costSaved.toLocaleString()}</span>
        </div>
        <div className="h-px bg-amber-200/50" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-amber-700 font-bold">
            <TrendingUp size={16} />
            <span>Annual Impact</span>
          </div>
          <span className="text-2xl font-black text-amber-600">${annualSaving.toLocaleString()}</span>
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
    "name": "SMB & Enterprise Solutions - Neo Perion",
    "description": industry.heroSubtext,
    "provider": { "@type": "Organization", "name": "Neo Perion Solutions" }
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <SEO
        title="SMB & Enterprise Solutions | Business Automation & Digital Transformation | Neo Perion"
        description={industry.heroSubtext}
        url="https://www.neoperion.com/industries/smbs"
        jsonLd={seoSchema}
      />
      <Header />

      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section className="pt-32 pb-24 px-6 lg:px-12 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50 rounded-full blur-[100px] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                <Building2 className="text-amber-600" size={20} />
              </div>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-600">{industry.tagline}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black mb-6 tracking-tight text-slate-900 leading-[1.1]">
              {industry.heroHeadline}
            </h1>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium max-w-xl">{industry.heroSubtext}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="group px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-amber-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {industry.ctaText} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate('/case-studies')}
                className="px-8 py-4 bg-white text-slate-700 rounded-xl font-bold border border-slate-200 hover:border-amber-300 hover:text-amber-700 transition-all duration-300 flex items-center justify-center gap-2"
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
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-600 mb-3 block">What We Build</span>
            <h2 className="text-3xl md:text-[2.75rem] font-black text-slate-900 mb-4 tracking-tight">
              Enterprise Transformation Capabilities
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl">
              End-to-end digital solutions that eliminate bottlenecks and turn data into competitive advantage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {industry.offerings.map((offering, i) => {
              const Icon = offering.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-8 rounded-[24px] bg-slate-50 border border-slate-100 hover:border-amber-200 hover:bg-white hover:shadow-xl hover:shadow-amber-50 transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white rounded-2xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:border-amber-200 group-hover:shadow-amber-100 transition-all duration-500">
                      <Icon className="text-slate-400 group-hover:text-amber-600 transition-colors duration-500" size={26} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">{offering.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{offering.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ HOW WE WORK — PROCESS ═══════════════ */}
      <section className="py-24 px-6 lg:px-12 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-900/30 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-800/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-400 mb-3 block">Our Process</span>
            <h2 className="text-3xl md:text-[2.75rem] font-black mb-4 tracking-tight">From Audit to Automation</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">A structured methodology that delivers measurable ROI at every step.</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {industry.process.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="relative group">
                {i < 3 && <div className="hidden md:block absolute top-12 left-[calc(100%)] w-full h-[2px] bg-gradient-to-r from-amber-500/30 to-transparent z-0" />}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-[24px] p-8 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 text-amber-400 font-black text-xl group-hover:bg-amber-500/20 transition-all">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TRANSFORMATION IMPACT ═══════════════ */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-600 mb-3 block">Transformation Impact</span>
            <h2 className="text-3xl md:text-[2.75rem] font-black text-slate-900 mb-4 tracking-tight">Before & After Automation</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative rounded-[24px] bg-gradient-to-br ${item.gradient} border border-slate-100 p-8 overflow-hidden group hover:shadow-xl hover:shadow-amber-50 transition-all duration-500`}
                >
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/60 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-700 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 shadow-sm flex items-center justify-center mb-6">
                      <Icon className="text-amber-600" size={22} />
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Before</span>
                      </div>
                      <p className="text-sm text-slate-500 line-through decoration-red-300">{item.before}</p>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">After</span>
                      </div>
                      <p className="text-sm text-slate-700 font-semibold">{item.after}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-200/50">
                      <span className="text-lg font-black text-amber-600">{item.metric}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ TECH STACK ═══════════════ */}
      <section className="py-16 px-6 lg:px-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
              {industry.techStack.map((tech, i) => (
                <motion.span key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-600 hover:border-amber-300 hover:text-amber-700 hover:shadow-sm transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CASE STUDY PREVIEW ═══════════════ */}
      <section className="py-24 px-6 lg:px-12 bg-white">
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
                <button onClick={() => navigate('/case-studies')} className="group inline-flex items-center gap-2 text-amber-400 font-bold hover:text-amber-300 transition-colors">
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
      <section className="py-24 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-600 mb-3 block">FAQ</span>
            <h2 className="text-3xl md:text-[2.75rem] font-black text-slate-900 tracking-tight">Common Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {industry.faq.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-slate-100 transition-all duration-300"
              >
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left group">
                  <h3 className="text-[17px] font-bold text-slate-900 pr-4 group-hover:text-amber-700 transition-colors">{item.question}</h3>
                  <ChevronDown className={`shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-amber-500' : ''}`} size={20} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <div className="px-6 pb-6 text-slate-500 leading-relaxed border-t border-slate-100 pt-4">{item.answer}</div>
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
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-8">
              <Building2 className="text-white" size={30} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Ready to Transform Your Business?</h2>
            <p className="text-lg text-amber-100 mb-10 max-w-2xl mx-auto">
              Let's audit your operations and identify high-impact automation opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => navigate('/contact')} className="group px-8 py-4 bg-white text-amber-700 rounded-xl font-bold hover:bg-amber-50 transition-all duration-300 flex items-center gap-2 shadow-xl shadow-amber-900/20">
                Get Your Free Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => navigate('/services')} className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300">
                Explore All Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
