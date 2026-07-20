import React, { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { getIndustryBySlug } from '@/data/industriesData';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ArrowRight, ChevronDown, ChevronRight, BookOpen, BarChart3, Bot, ClipboardCheck,
  GraduationCap, Users, Sparkles, Play, CheckCircle2, Star, Monitor, Zap
} from 'lucide-react';
import { MobileGate, MobileShell } from '@/components/mobile';
import { buildFAQSchema } from '@/lib/seo';


// ─── Interactive LMS Architecture Diagram ──────────────────────
const LMSArchitectureDiagram = () => {
  const [activeNode, setActiveNode] = useState(0);
  const nodes = [
    { icon: Users, title: 'Students & Educators', desc: 'Multi-role access with personalized dashboards', color: 'bg-amber-500/10 text-amber-400 border-amber-500/30' },
    { icon: Monitor, title: 'Learning Interface', desc: 'Adaptive content delivery & gamification', color: 'bg-orange-500/10 text-orange-400 border-orange-500/30' },
    { icon: Bot, title: 'AI Engine', desc: 'Recommendation & assessment models', color: 'bg-violet-50 text-violet-600 border-violet-200' },
    { icon: BarChart3, title: 'Analytics Layer', desc: 'Real-time insights & predictive reports', color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
  ];

  useEffect(() => {
    const timer = setInterval(() => setActiveNode(prev => (prev + 1) % nodes.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative premium-card p-8 lg:p-10 bg-neutral-900 overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 text-center">Learning Platform Architecture</h3>

      <div className="space-y-4 relative">
        {/* Connecting pulse line */}
        <div className="absolute left-[31px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-amber-200 via-orange-200 to-emerald-200 z-0" />
        <motion.div
          className="absolute left-[29px] w-[6px] h-16 bg-gradient-to-b from-amber-400 to-amber-400/0 rounded-full z-10"
          animate={{ top: [32, 80, 128, 176, 32] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {nodes.map((node, i) => {
          const Icon = node.icon;
          const isActive = activeNode === i;
          return (
            <motion.button
              key={i}
              onClick={() => setActiveNode(i)}
              className={`relative z-20 flex items-center gap-5 w-full p-4 rounded-2xl border transition-all duration-500 text-left ${isActive ? 'bg-neutral-900 shadow-lg shadow-amber-100/50 border-amber-500/30 scale-[1.02]' : 'bg-neutral-900/60 border-neutral-800 hover:bg-neutral-900 hover:border-neutral-800'}`}
              whileTap={{ scale: 0.98 }}
              aria-pressed={isActive}
              aria-label={`Select layer: ${node.title}`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-500 ${isActive ? node.color : 'bg-neutral-900 text-slate-400 border-neutral-800'}`}>
                <Icon size={28} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className={`font-bold text-[15px] transition-colors duration-300 ${isActive ? 'text-white' : 'text-neutral-400'}`}>{node.title}</h4>
                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm text-neutral-400 mt-1"
                    >
                      {node.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              {isActive && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-3 h-3 rounded-full bg-amber-400 shrink-0"
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

// ─── Main Page ─────────────────────────────────────────────────
export function EducationPage() {
  const navigate = useNavigate();
  const industry = getIndustryBySlug('education')!;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Education & EdTech Solutions - Neo Perion",
    "serviceType": "Education & EdTech Solutions",
    "description": industry.heroSubtext,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Neo Perion Solutions",
      "image": "https://neoperion.com/images/np-logo.png",
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
          title="Education & EdTech Solutions | AI-Powered Learning Platforms | Neo Perion"
          description={industry.heroSubtext}
          url="https://neoperion.com/industries/education"
          jsonLd={[seoSchema, buildFAQSchema(industry.faq)]}
        />
        <Header />

        {/* ═══════════════ HERO SECTION ═══════════════ */}
        <section className="pt-32 pb-24 px-6 lg:px-12 border-b border-neutral-800 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] opacity-60 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] opacity-40 pointer-events-none" />

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                  <GraduationCap className="text-amber-400" size={20} />
                </div>
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-400">{industry.tagline}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black mb-6 tracking-tight text-white leading-[1.1]">
                {industry.heroHeadline}
              </h1>
              <p className="text-xl text-neutral-400 mb-10 leading-relaxed font-medium max-w-xl">
                {industry.heroSubtext}
              </p>
              {/* Phase 4 GEO — answer-first sentence for AI/SEO. No pricing; timeframe + process only. */}
              <p className="text-base text-neutral-400 mb-10 leading-relaxed max-w-xl">
                Neo Perion Solutions builds AI-powered learning management systems, adaptive assessment engines, and student analytics platforms for universities, K‑12 schools, and EdTech startups in India and the US. Pilots typically ship in 6–10 weeks; full platforms in 3–6 months, with a written agreement that names scope, timeline, and IP terms before any work begins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="group px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-amber-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {industry.ctaText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" size={18} />
                </button>
                <button
                  onClick={() => navigate('/company/case-studies')}
                  className="px-8 py-4 bg-neutral-900 text-neutral-200 rounded-xl font-bold border border-neutral-800 hover:border-amber-500/30 hover:text-amber-400 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Play size={16} /> View Case Studies
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <LMSArchitectureDiagram />
            </motion.div>
          </div>
        </section>



        {/* ═══════════════ SOLUTIONS GRID ═══════════════ */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-400 mb-3 block">What We Build</span>
              <h2 className="text-3xl md:text-[2.75rem] font-black text-white mb-4 tracking-tight">
                Enterprise EdTech Capabilities
              </h2>
              <p className="text-lg text-neutral-400 max-w-2xl">
                From AI tutoring engines to real-time analytics platforms — we engineer the complete learning technology stack.
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
        <section className="py-24 px-6 lg:px-12 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/30 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-800/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-400 mb-3 block">Our Process</span>
              <h2 className="text-3xl md:text-[2.75rem] font-black mb-4 tracking-tight">From Curriculum to Code</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                A battle-tested methodology refined across 50+ education technology projects.
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
                  {i < 3 && (
                    <div className="hidden md:block absolute top-12 left-[calc(100%)] w-full h-[2px] bg-gradient-to-r from-amber-500/30 to-transparent z-0" />
                  )}
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-[24px] p-8 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-500 h-full">
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

        {/* ═══════════════ BENEFITS BENTO GRID ═══════════════ */}
        <section id="benefits" className="py-24 px-6 lg:px-12 bg-neutral-900 scroll-mt-20" role="region" aria-label="Why choose Neo Perion for education">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-400 mb-3 block">Why Choose Us</span>
              <h2 className="text-3xl md:text-[2.75rem] font-black text-white mb-4 tracking-tight">
                The Neo Perion Advantage
              </h2>
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
              {industry.benefits.map((benefit, i) => {
                const icons = [Sparkles, Zap, Star];
                const Icon = icons[i % icons.length];
                const bgGradients = [
                  'from-amber-50 to-orange-50',
                  'from-orange-50 to-violet-50',
                  'from-emerald-50 to-amber-50'
                ];
                return (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
                    }}
                    className={`relative rounded-[24px] bg-gradient-to-br ${bgGradients[i]} border border-neutral-800 p-10 overflow-hidden group hover:shadow-xl hover:shadow-amber-50 transition-all duration-500`}
                  >
                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/60 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-700 pointer-events-none" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-slate-200/60 shadow-sm flex items-center justify-center mb-6">
                        <Icon className="text-amber-400" size={22} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                      <p className="text-neutral-400 leading-relaxed">{benefit.description}</p>
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
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  <button
                    onClick={() => navigate('/company/case-studies')}
                    className="group inline-flex items-center gap-2 text-amber-400 font-bold hover:text-amber-300 transition-colors"
                  >
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

        {/* ═══════════════ FAQ ACCORDION ═══════════════ */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-900">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-400 mb-3 block">FAQ</span>
              <h2 className="text-3xl md:text-[2.75rem] font-black text-white tracking-tight">
                Common Questions
              </h2>
            </motion.div>

            <div className="space-y-4">
              {industry.faq.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-slate-100 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left group"
                  >
                    <h3 className="text-[17px] font-bold text-white pr-4 group-hover:text-amber-400 transition-colors">{item.question}</h3>
                    <ChevronDown
                      className={`shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-amber-500' : ''}`}
                      size={20}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-neutral-400 leading-relaxed border-t border-neutral-800 pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ CTA SECTION ═══════════════ */}
        <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-amber-600 via-amber-700 to-orange-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-amber-400/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-8">
                <GraduationCap className="text-white" size={30} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Ready to Build the Future of Learning?</h2>
              <p className="text-lg text-amber-100 mb-10 max-w-2xl mx-auto">
                Let's discuss how we can help you build an AI-powered education platform that transforms how students learn.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="group px-8 py-4 bg-neutral-900 text-amber-400 rounded-xl font-bold hover:bg-amber-500/10 transition-all duration-300 flex items-center gap-2 shadow-xl shadow-amber-900/20"
                >
                  Start Your EdTech Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => navigate('/services')}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Explore All Services
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    }>
      <MobileShell nav="bottom" showFooter bgClass="bg-[#030B1D]">
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
            Neo Perion Solutions builds AI-powered learning management systems, adaptive assessment engines, and student analytics platforms for universities, K‑12 schools, and EdTech startups in India and the US. Pilots typically ship in 6–10 weeks; full platforms in 3–6 months, with a written agreement that names scope, timeline, and IP terms before any work begins.
          </p>
          
          <button 
            onClick={() => navigate('/contact')}
            className="w-full h-12 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2 relative overflow-hidden border border-white/10 active:scale-[0.98] transition-transform"
          >
            <div className="absolute inset-0 opacity-20 bg-amber-500" />
            <span className="relative z-10 flex items-center gap-2">{industry.ctaText} <ArrowRight size={16} /></span>
          </button>
        </section>

        {/* LMS Diagram Mobile */}
        <section className="px-6 py-10 bg-[#030B1D] border-t border-white/[0.08]">
          <p className="text-[10px] font-bold tracking-[0.2em] text-white/50 mb-6 uppercase">Learning Platform Architecture</p>
          <div className="space-y-3">
             {[
                { icon: Users, title: 'Students & Educators', desc: 'Multi-role access dashboards', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
                { icon: Monitor, title: 'Learning Interface', desc: 'Adaptive content & gamification', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
                { icon: Bot, title: 'AI Engine', desc: 'Recommendation & models', color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20' },
                { icon: BarChart3, title: 'Analytics Layer', desc: 'Real-time insights & reports', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
              ].map((node, i) => (
                <div key={i} className="flex gap-3 bg-white/[0.02] border border-white/[0.05] p-4 rounded-3xl backdrop-blur-glass-1 items-center">
                  <div className={`w-12 h-12 rounded-2xl ${node.bg} ${node.border} border flex items-center justify-center shrink-0`}>
                    <node.icon className={node.color} size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">{node.title}</h4>
                    <p className="text-[11px] text-white/50">{node.desc}</p>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Offerings Mobile */}
        <section className="px-6 py-10 bg-[#02040A] border-t border-white/[0.08]">
          <h2 className="text-lg font-bold text-white mb-6">What We Build</h2>
          <div className="grid gap-3">
             {industry.offerings.map((offering, i) => {
               const Icon = offering.icon;
               return (
                 <div key={i} className="p-5 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-glass-1">
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

        {/* Tech Stack Mobile */}
        <section className="px-6 py-10 bg-[#030B1D] border-t border-white/[0.08]">
          <h2 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {industry.techStack.map((tech, i) => (
              <span key={i} className="px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-full text-[11px] font-semibold text-white/70">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <div className="h-10 bg-[#030B1D]" />
      </MobileShell>
    </MobileGate>
  );
}

