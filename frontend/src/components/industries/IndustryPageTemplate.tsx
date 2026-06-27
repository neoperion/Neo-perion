import React, { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { IndustryData } from '@/data/industriesData';
import { ArrowRight, ChevronDown, CheckCircle2, Quote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

interface IndustryPageTemplateProps {
  industry: IndustryData;
  heroVisual?: React.ReactNode;
}



/* ──────────────────────────  FAQ ACCORDION  ────────────────────────── */
const FAQItem: React.FC<{ question: string; answer: string; color: string; isOpen: boolean; onToggle: () => void }> = ({
  question, answer, color, isOpen, onToggle
}) => {
  return (
    <div className="border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-neutral-800">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
      >
        <h3 className="text-lg font-bold text-white group-hover:text-neutral-200 transition-colors pr-4">
          {question}
        </h3>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
          style={{ backgroundColor: isOpen ? color : '#f1f5f9', color: isOpen ? 'white' : '#64748b' }}
        >
          <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-neutral-400 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

/* ──────────────────────────  MAIN TEMPLATE  ────────────────────────── */
export const IndustryPageTemplate: React.FC<IndustryPageTemplateProps> = ({ industry, heroVisual }) => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="bg-neutral-900 text-white min-h-[auto]">
      <SEO
        title={`${industry.title} Solutions | Neo Perion`}
        description={industry.heroSubtext}
      />
      <Header />

      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section className="pt-32 pb-24 px-6 lg:px-12 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-[12px] font-bold tracking-[0.25em] uppercase mb-4"
              style={{ color: industry.color }}
            >
              {industry.tagline}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white leading-tight"
            >
              {industry.heroHeadline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-neutral-400 mb-8 leading-relaxed font-medium"
            >
              {industry.heroSubtext}
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-4 text-white rounded-xl font-bold hover:brightness-110 transition-all duration-300 flex items-center gap-3 group"
              style={{ backgroundColor: industry.color }}
            >
              {industry.ctaText}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Hero Visual (unique per industry) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {heroVisual}
          </motion.div>
        </div>
      </section>



      {/* ═══════════════ SOLUTIONS GRID ═══════════════ */}
      <section className="py-24 px-6 lg:px-12 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">What We Build</h2>
            <p className="text-lg text-neutral-400 max-w-2xl">
              Purpose-built solutions for the {industry.title.toLowerCase()} space, engineered for scale and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industry.offerings.map((offering, i) => {
              const Icon = offering.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900 hover:border-neutral-800 transition-all duration-300 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                    style={{ backgroundColor: `${industry.color}15`, color: industry.color }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{offering.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{offering.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ HOW WE WORK TIMELINE ═══════════════ */}
      <section className="py-24 px-6 lg:px-12 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">How We Work</h2>
            <p className="text-lg text-neutral-400">Our proven engagement model for {industry.title.toLowerCase()} projects.</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-800 hidden md:block" />

            <div className="flex flex-col gap-12">
              {industry.process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-8 items-start"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl text-white shrink-0 shadow-lg relative z-10"
                    style={{ backgroundColor: industry.color }}
                  >
                    {step.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-neutral-400 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ BENEFITS / ADVANTAGES ═══════════════ */}
      <section
        className="py-24 px-6 lg:px-12 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${industry.gradientFrom}08, ${industry.gradientTo}05)`
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">The Neo Perion Advantage</h2>
            <p className="text-lg text-neutral-400">What sets us apart in the {industry.title.toLowerCase()} space.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industry.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${industry.color}15` }}
                >
                  <CheckCircle2 size={22} style={{ color: industry.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TECH STACK ═══════════════ */}
      <section className="py-16 px-6 lg:px-12 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 shrink-0">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {industry.techStack.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-2 rounded-full text-sm font-semibold border border-neutral-800 text-neutral-400 bg-neutral-900 hover:border-neutral-800 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CASE STUDY PREVIEW ═══════════════ */}
      <section className="py-24 px-6 lg:px-12 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr,auto] gap-12 items-center">
            <div>
              <p className="text-[12px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: industry.color }}>
                Featured Project
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-4">{industry.caseStudyPreview.title}</h2>
              <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4">
                Client: {industry.caseStudyPreview.client}
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {industry.caseStudyPreview.result}
              </p>
              <button
                onClick={() => navigate('/company/case-studies')}
                className="flex items-center gap-2 font-bold text-white hover:gap-3 transition-all group"
              >
                View Case Studies
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div
              className="w-48 h-48 md:w-56 md:h-56 rounded-3xl flex flex-col items-center justify-center text-center border border-white/10"
              style={{ background: `linear-gradient(135deg, ${industry.gradientFrom}30, ${industry.gradientTo}15)` }}
            >
              <div className="text-5xl md:text-6xl font-black mb-2" style={{ color: industry.color }}>
                {industry.caseStudyPreview.metric}
              </div>
              <div className="text-sm text-slate-400 font-medium px-4">
                {industry.caseStudyPreview.metricLabel}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ SECTION ═══════════════ */}
      <section className="py-24 px-6 lg:px-12 bg-neutral-900">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-neutral-400">Common questions about our {industry.title.toLowerCase()} solutions.</p>
          </div>

          <div className="flex flex-col gap-4">
            {industry.faq.map((item, i) => (
              <FAQItem
                key={i}
                question={item.question}
                answer={item.answer}
                color={industry.color}
                isOpen={openFaqIndex === i}
                onToggle={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA SECTION ═══════════════ */}
      <section
        className="py-24 px-6 lg:px-12 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${industry.gradientFrom}, ${industry.gradientTo})`
        }}
      >
        <div className="max-w-3xl mx-auto text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to Transform Your {industry.title}?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Let's discuss how we can build the perfect solution for your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-neutral-900 text-white rounded-xl font-bold hover:bg-white/90 transition-all duration-300 flex items-center gap-3 group shadow-xl"
            >
              Book Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/company/case-studies')}
              className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold border border-white/30 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              View Case Studies
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      </section>

      <Footer />
    </div>
  );
};

