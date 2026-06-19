import React, { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { getIndustryBySlug } from '@/data/industriesData';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ArrowRight, ChevronDown, HeartPulse, Stethoscope, Video, Brain, Activity,
  Play, Shield, Lock, FileCheck, CheckCircle2, AlertTriangle, Server, Eye
} from 'lucide-react';
import { MobileGate, MobileShell } from '@/components/mobile';

// ─── Interactive Compliance Checklist ──────────────────────
const ComplianceChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  const items = [
    { category: 'HIPAA', title: 'PHI Encryption at Rest & Transit', icon: Lock, critical: true },
    { category: 'HIPAA', title: 'Role-Based Access Controls (RBAC)', icon: Shield, critical: true },
    { category: 'HIPAA', title: 'Audit Trail & Activity Logging', icon: Eye, critical: true },
    { category: 'SOC 2', title: 'Penetration Testing & Vulnerability Scans', icon: AlertTriangle, critical: false },
    { category: 'HL7/FHIR', title: 'EHR Interoperability Standards', icon: Server, critical: false },
    { category: 'GDPR', title: 'Patient Data Consent Management', icon: FileCheck, critical: false },
  ];

  const toggleItem = (index: number) => {
    const next = new Set(checkedItems);
    if (next.has(index)) next.delete(index);
    else next.add(index);
    setCheckedItems(next);
  };

  const completionPct = Math.round((checkedItems.size / items.length) * 100);

  return (
    <div className="relative premium-card p-8 lg:p-10 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2 text-center">Healthcare Compliance</h3>
      <p className="text-xs text-slate-400 text-center mb-6">Tap to check items your platform needs</p>

      {/* Progress */}
      <div className="relative mb-6">
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"
            animate={{ width: `${completionPct}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[11px] font-semibold text-slate-400">{checkedItems.size}/{items.length} requirements</span>
          <span className="text-[11px] font-bold text-emerald-600">{completionPct}% covered</span>
        </div>
      </div>

      <div className="space-y-2">
        {items.map((item, i) => {
          const Icon = item.icon;
          const checked = checkedItems.has(i);
          return (
            <motion.button
              key={i}
              onClick={() => toggleItem(i)}
              className={`w-full flex items-center gap-4 p-3.5 rounded-xl border text-left transition-all duration-300 ${
                checked
                  ? 'bg-emerald-50 border-emerald-200 shadow-sm'
                  : 'bg-slate-50/80 border-slate-100 hover:bg-white hover:border-slate-200'
              }`}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                checked ? 'bg-emerald-500 text-white' : 'bg-white border-2 border-slate-200'
              }`}>
                {checked && <CheckCircle2 size={14} />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${checked ? 'text-emerald-600' : 'text-slate-400'}`}>{item.category}</span>
                  {item.critical && <span className="text-[9px] font-bold bg-red-50 text-red-500 px-1.5 py-0.5 rounded">CRITICAL</span>}
                </div>
                <span className={`text-sm font-semibold block transition-colors ${checked ? 'text-slate-900' : 'text-slate-600'}`}>{item.title}</span>
              </div>
              <Icon size={16} className={`shrink-0 transition-colors ${checked ? 'text-emerald-500' : 'text-slate-300'}`} />
            </motion.button>
          );
        })}
      </div>

      {completionPct === 100 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center"
        >
          <p className="text-sm font-bold text-emerald-700">✓ All compliance requirements covered</p>
          <p className="text-xs text-emerald-600 mt-1">We handle all of this for you, end-to-end.</p>
        </motion.div>
      )}
    </div>
  );
};

// ─── Main Page ─────────────────────────────────────────────────
export function HealthcarePage() {
  const navigate = useNavigate();
  const industry = getIndustryBySlug('healthcare')!;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Healthcare Technology Solutions - Neo Perion",
    "description": industry.heroSubtext,
    "provider": { "@type": "Organization", "name": "Neo Perion Solutions" }
  };

  return (
    <MobileGate mobileOnly fallback={
      <div className="bg-slate-50 text-slate-900 min-h-screen">
        <SEO
          title="Healthcare Solutions | HIPAA-Compliant Software & AI Diagnostics | Neo Perion"
          description={industry.heroSubtext}
          url="https://www.neoperion.com/industries/healthcare"
          jsonLd={seoSchema}
        />
        <Header />

        {/* ═══════════════ HERO SECTION ═══════════════ */}
        <section className="pt-32 pb-24 px-6 lg:px-12 border-b border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-50 rounded-full blur-[100px] opacity-40 pointer-events-none" />

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                  <HeartPulse className="text-emerald-600" size={20} />
                </div>
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-600">{industry.tagline}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black mb-6 tracking-tight text-slate-900 leading-[1.1]">
                {industry.heroHeadline}
              </h1>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium max-w-xl">{industry.heroSubtext}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="group px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {industry.ctaText} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => navigate('/case-studies')}
                  className="px-8 py-4 bg-white text-slate-700 rounded-xl font-bold border border-slate-200 hover:border-emerald-300 hover:text-emerald-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Play size={16} /> View Case Studies
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <ComplianceChecklist />
            </motion.div>
          </div>
        </section>



        {/* ═══════════════ SOLUTIONS GRID ═══════════════ */}
        <section className="py-24 px-6 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-600 mb-3 block">What We Build</span>
              <h2 className="text-3xl md:text-[2.75rem] font-black text-slate-900 mb-4 tracking-tight">
                Healthcare Technology Capabilities
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl">
                HIPAA-compliant platforms built for clinical workflows, patient engagement, and AI-assisted care.
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
                    className="group relative p-8 rounded-[24px] bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-white hover:shadow-xl hover:shadow-emerald-50 transition-all duration-500"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-white rounded-2xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:border-emerald-200 group-hover:shadow-emerald-100 transition-all duration-500">
                        <Icon className="text-slate-400 group-hover:text-emerald-600 transition-colors duration-500" size={26} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">{offering.title}</h3>
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/30 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-800/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-400 mb-3 block">Our Process</span>
              <h2 className="text-3xl md:text-[2.75rem] font-black mb-4 tracking-tight">Compliance-First Development</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">Security and regulatory compliance baked into every stage of our healthcare engineering process.</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {industry.process.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="relative group">
                  {i < 3 && <div className="hidden md:block absolute top-12 left-[calc(100%)] w-full h-[2px] bg-gradient-to-r from-emerald-500/30 to-transparent z-0" />}
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-[24px] p-8 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-500 h-full">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400 font-black text-xl group-hover:bg-emerald-500/20 transition-all">
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

        {/* ═══════════════ SECURITY & COMPLIANCE TRUST ═══════════════ */}
        <section className="py-24 px-6 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-600 mb-3 block">Security & Compliance</span>
              <h2 className="text-3xl md:text-[2.75rem] font-black text-slate-900 mb-4 tracking-tight">Built for Patient Trust</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: 'HIPAA Compliant', desc: 'Full HIPAA Security Rule compliance with BAA agreements, encryption standards, and access controls.', badge: 'CERTIFIED', gradient: 'from-emerald-50 to-teal-50' },
                { icon: Lock, title: 'SOC 2 Type II', desc: 'Enterprise-grade security controls verified by independent auditors for trust, availability, and confidentiality.', badge: 'AUDITED', gradient: 'from-teal-50 to-cyan-50' },
                { icon: FileCheck, title: 'HL7/FHIR Ready', desc: 'Full interoperability support for seamless integration with Epic, Cerner, and any standards-based EHR system.', badge: 'INTEROPERABLE', gradient: 'from-cyan-50 to-emerald-50' }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative rounded-[24px] bg-gradient-to-br ${item.gradient} border border-slate-100 p-10 overflow-hidden group hover:shadow-xl hover:shadow-emerald-50 transition-all duration-500`}
                  >
                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/60 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-700 pointer-events-none" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 shadow-sm flex items-center justify-center">
                          <Icon className="text-emerald-600" size={22} />
                        </div>
                        <span className="text-[10px] font-black bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full tracking-wider">{item.badge}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
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
                    className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-600 hover:border-emerald-300 hover:text-emerald-700 hover:shadow-sm transition-all duration-300 cursor-default"
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
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-900/30 via-transparent to-transparent" />
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-12 items-center">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-400 mb-4 block">Featured Project</span>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3">{industry.caseStudyPreview.title}</h3>
                  <p className="text-sm text-slate-400 mb-6 font-semibold">{industry.caseStudyPreview.client}</p>
                  <p className="text-slate-300 leading-relaxed mb-8">{industry.caseStudyPreview.result}</p>
                  <button onClick={() => navigate('/case-studies')} className="group inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors">
                    Read Full Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-6xl md:text-7xl font-black text-emerald-400 mb-2">{industry.caseStudyPreview.metric}</div>
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
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-600 mb-3 block">FAQ</span>
              <h2 className="text-3xl md:text-[2.75rem] font-black text-slate-900 tracking-tight">Common Questions</h2>
            </motion.div>

            <div className="space-y-4">
              {industry.faq.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-slate-100 transition-all duration-300"
                >
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left group">
                    <h3 className="text-[17px] font-bold text-slate-900 pr-4 group-hover:text-emerald-700 transition-colors">{item.question}</h3>
                    <ChevronDown className={`shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-emerald-500' : ''}`} size={20} />
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
        <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-emerald-400/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-8">
                <HeartPulse className="text-white" size={30} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Ready to Modernize Patient Care?</h2>
              <p className="text-lg text-emerald-100 mb-10 max-w-2xl mx-auto">
                Let's build HIPAA-compliant healthcare solutions that improve outcomes and protect patient data.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={() => navigate('/contact')} className="group px-8 py-4 bg-white text-emerald-700 rounded-xl font-bold hover:bg-emerald-50 transition-all duration-300 flex items-center gap-2 shadow-xl shadow-emerald-900/20">
                  Discuss Your Health-Tech Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
    }>
      <MobileShell nav="bottom" showFooter>
        {/* Hero Mobile */}
        <section className="pt-24 pb-12 px-6 relative overflow-hidden bg-[#02040A]">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
          <div className="absolute -top-[20%] -right-[10%] w-[120%] h-[60%] blur-[100px] rounded-full pointer-events-none opacity-20 bg-emerald-500" />
          
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4 text-emerald-400">
            {industry.tagline}
          </p>
          <h1 className="text-display-lg text-white tracking-tight mb-4">{industry.heroHeadline}</h1>
          <p className="text-base text-white/70 mb-8">{industry.heroSubtext}</p>
          
          <button 
            onClick={() => navigate('/contact')}
            className="w-full h-12 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2 relative overflow-hidden border border-white/10 active:scale-[0.98] transition-transform"
          >
            <div className="absolute inset-0 opacity-20 bg-emerald-500" />
            <span className="relative z-10 flex items-center gap-2">{industry.ctaText} <ArrowRight size={16} /></span>
          </button>
        </section>

        {/* Security Trust Features Mobile */}
        <section className="px-6 py-10 bg-[#030B1D] border-t border-white/[0.08]">
          <p className="text-[10px] font-bold tracking-[0.2em] text-white/50 mb-6 uppercase">Security & Compliance</p>
          <div className="grid gap-3">
            {[
              { icon: Shield, title: 'HIPAA Compliant', color: 'text-emerald-400', badge: 'CERTIFIED' },
              { icon: Lock, title: 'SOC 2 Type II', color: 'text-emerald-400', badge: 'AUDITED' },
              { icon: FileCheck, title: 'HL7/FHIR Ready', color: 'text-emerald-400', badge: 'INTEROPERABLE' }
            ].map((feature, i) => (
               <div key={i} className="flex gap-4 items-center bg-white/[0.02] border border-white/[0.05] p-5 rounded-3xl backdrop-blur-glass-1">
                 <feature.icon className={feature.color} size={24} />
                 <div className="flex-1">
                    <h4 className="text-[15px] font-bold text-white mb-1">{feature.title}</h4>
                    <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded uppercase">{feature.badge}</span>
                 </div>
               </div>
            ))}
          </div>
        </section>

        {/* Checklist Mobile */}
        <section className="px-6 py-10 bg-[#02040A] border-t border-white/[0.08]">
          <h2 className="text-lg font-bold text-white mb-6">Interactive Checklist</h2>
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-glass-1 overflow-hidden p-1">
            <ComplianceChecklist />
          </div>
        </section>

        {/* Offerings Mobile */}
        <section className="px-6 py-10 bg-[#030B1D] border-t border-white/[0.08]">
          <h2 className="text-lg font-bold text-white mb-6">What We Build</h2>
          <div className="grid gap-3">
             {industry.offerings.map((offering, i) => {
               const Icon = offering.icon;
               return (
                 <div key={i} className="p-5 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-glass-1">
                   <div className="flex items-start gap-3">
                     <Icon className="text-emerald-400 shrink-0 mt-0.5" size={20} />
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

        {/* Tech Stack Mobile */}
        <section className="px-6 py-10 bg-[#02040A] border-t border-white/[0.08]">
          <h2 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {industry.techStack.map((tech, i) => (
              <span key={i} className="px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-full text-[11px] font-semibold text-white/70">
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
