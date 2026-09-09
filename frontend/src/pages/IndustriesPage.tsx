import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  MessageSquare,
  Building2,
  GraduationCap,
  Rocket,
  FileSpreadsheet,
  BarChart3,
  Clock,
  ShieldCheck,
  Check,
  UserCheck,
  Zap,
  TrendingUp,
  RefreshCw,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { seoConfig } from "@/lib/seoConfig";

/* ─── Hero — manuscript field-guide treatment ─── */
const IndustriesHero = () => {
  return (
    <section className="pt-32 sm:pt-36 md:pt-44 pb-16 sm:pb-20 md:pb-28 relative overflow-hidden parchment-surface border-b border-manuscript-parchmentDeep">
      {/* Faint engineering grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(91,58,31,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(91,58,31,0.035) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      {/* Copper & Gold warm ambient glow */}
      <div className="absolute top-0 right-1/4 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-manuscript-copper/8 blur-[120px] sm:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-6 sm:left-10 w-[240px] sm:w-[350px] h-[240px] sm:h-[350px] bg-manuscript-gold/5 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="chapter-eyebrow text-manuscript-copper mb-3 sm:mb-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.35em]"
        >
          Industry Field Notes
        </motion.p>

        {/* Copper divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex items-center justify-center gap-3 mb-5 sm:mb-6"
        >
          <div className="h-px w-10 sm:w-14 bg-gradient-to-r from-transparent to-manuscript-copper/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper/60" />
          <div className="h-px w-10 sm:w-14 bg-gradient-to-l from-transparent to-manuscript-copper/40" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="heading-manuscript text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 !text-manuscript-ink tracking-tight font-normal leading-[1.08]"
        >
          Domain{' '}
          <span className="heading-manuscript--italic text-manuscript-copper font-normal">
            Expertise
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base sm:text-lg md:text-xl text-manuscript-inkMuted max-w-2xl mx-auto font-manuscriptBody leading-relaxed"
        >
          Purpose-built digital solutions tailored to the unique challenges of your industry.
        </motion.p>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════════════
   SECTION 01: EDUCATION & EDTECH (Interactive Codex Simulator)
   ════════════════════════════════════════════════════════════════ */
const EducationSection = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: 'lms',
      title: 'Adaptive LMS',
      subtitle: 'Dynamic Difficulty Engine',
      stat: '94.6%',
      statLabel: 'Completion Rate',
      highlight: 'Real-time difficulty adjustment based on student performance vectors & multi-tenant institutional hierarchy.',
      previewTag: 'LIVE SIMULATION: ADAPTIVE PACING',
      previewDetails: [
        { label: 'Diagnostic Baseline', value: 'Instant placement in 4 mins' },
        { label: 'Dynamic Pathing', value: 'Auto-adjusts challenge slope' },
        { label: 'Retention Boost', value: '+38% semester persistence' }
      ]
    },
    {
      id: 'analytics',
      title: 'Student Analytics',
      subtitle: 'Predictive Intervention',
      stat: '3.2x',
      statLabel: 'Earlier Detection',
      highlight: 'Early warning signals track subtle drop-offs in quiz engagement before midterm failure occurs.',
      previewTag: 'PREDICTIVE COHORT METRICS',
      previewDetails: [
        { label: 'Engagement Index', value: 'Scored per video, reading & quiz' },
        { label: 'Interventions', value: 'Advisor alerts & review packets' },
        { label: 'Institutional Sync', value: 'LTI 1.3 Canvas & Blackboard' }
      ]
    },
    {
      id: 'ai-tutor',
      title: 'AI Learning Assistants',
      subtitle: 'Socratic Curriculum Copilot',
      stat: '24 / 7',
      statLabel: 'Student Support',
      highlight: 'Curriculum-grounded conversational tutors operating 24/7 with zero hallucinations and step-by-step Socratic guidance.',
      previewTag: 'SOCRATIC INQUIRY ENGINE',
      previewDetails: [
        { label: 'Context Bounding', value: 'Strictly grounded in syllabus' },
        { label: 'Critical Thinking', value: 'Never gives raw answers' },
        { label: 'Faculty Telemetry', value: 'Weekly student stumbling points' }
      ]
    },
    {
      id: 'assessment',
      title: 'Assessment Systems',
      subtitle: 'Automated Rubric Grading',
      stat: '85%',
      statLabel: 'Grading Time Saved',
      highlight: 'Automated test generation, secure anti-cheat verification, and consistent rubric-based evaluation.',
      previewTag: 'INTELLIGENT RUBRIC EVALUATOR',
      previewDetails: [
        { label: 'Anti-Collusion', value: 'Parametric unique questions' },
        { label: 'Qualitative Feedback', value: 'Personalized rubric notes' },
        { label: 'Gradebook Export', value: 'Instant campus registrar sync' }
      ]
    },
  ];

  return (
    <section id="education" className="relative">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        {/* Left: Interactive Educational Codex */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6 sm:space-y-7 w-full"
        >
          {/* Eyebrow badge */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-manuscript-parchmentWarm border border-manuscript-walnut/20 shadow-sm">
              <GraduationCap className="w-5 h-5 text-manuscript-walnut" />
            </div>
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-manuscript-walnut font-bold">
              01 — EDUCATION
            </span>
          </div>

          <div>
            <h2 className="heading-manuscript text-3xl sm:text-4xl md:text-5xl font-normal !text-manuscript-ink mb-3 sm:mb-4 leading-tight">
              Education & EdTech
            </h2>
            <p className="text-base sm:text-lg text-manuscript-inkMuted leading-relaxed font-manuscriptBody">
              Empowering the future of learning with scalable educational technology and AI-driven platforms.
            </p>
          </div>

          {/* Interactive Codex Tabs */}
          <div className="p-4 sm:p-5 rounded-2xl bg-manuscript-parchmentLight border border-manuscript-walnut/20 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-manuscript-walnut/15">
              <span className="font-mono text-[10px] uppercase tracking-widest text-manuscript-walnut font-bold flex items-center gap-1.5">
                <Sparkles size={13} className="text-manuscript-copper" />
                Select Architectural Component:
              </span>
              <span className="font-mono text-[10px] text-manuscript-walnut bg-manuscript-parchmentWarm px-2 py-0.5 rounded border border-manuscript-walnut/20">
                Interactive Codex
              </span>
            </div>

            {/* Tab buttons (stacked on small mobile, 2 cols on tablet+) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {pillars.map((p, idx) => {
                const isSelected = activeTab === idx;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3.5 py-3 rounded-xl text-left transition-all duration-200 relative ${
                      isSelected
                        ? 'bg-manuscript-walnut text-manuscript-parchmentLight shadow-sm'
                        : 'bg-manuscript-parchment/70 text-manuscript-ink hover:bg-manuscript-parchmentWarm border border-manuscript-walnut/15'
                    }`}
                  >
                    <div className="font-manuscriptBody font-bold text-xs tracking-wide">
                      {p.title}
                    </div>
                    <div className={`text-[10px] font-mono mt-0.5 ${isSelected ? 'text-manuscript-goldWarm' : 'text-manuscript-inkMuted'}`}>
                      {p.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Content Preview Window */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="p-3.5 sm:p-4 rounded-xl bg-manuscript-parchmentWarm/70 border border-manuscript-walnut/20 space-y-3"
              >
                <div className="flex flex-wrap gap-2 items-center justify-between text-xs">
                  <span className="font-mono font-bold text-manuscript-walnut tracking-wider text-[10px]">
                    {pillars[activeTab].previewTag}
                  </span>
                  <div className="flex items-center gap-1.5 bg-manuscript-parchmentLight px-2 py-0.5 rounded font-mono text-[10px] font-bold text-manuscript-walnut border border-manuscript-walnut/15">
                    <TrendingUp size={11} className="text-manuscript-copper" />
                    <span>{pillars[activeTab].stat}</span>
                    <span className="text-[9px] text-manuscript-inkMuted font-normal">({pillars[activeTab].statLabel})</span>
                  </div>
                </div>

                <p className="text-xs text-manuscript-ink leading-relaxed font-manuscriptBody">
                  {pillars[activeTab].highlight}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-manuscript-walnut/15">
                  {pillars[activeTab].previewDetails.map((detail, dIdx) => (
                    <div key={dIdx} className="bg-manuscript-parchmentLight/90 p-2 sm:p-2.5 rounded border border-manuscript-walnut/10">
                      <span className="font-mono text-[9px] text-manuscript-inkMuted block uppercase">
                        {detail.label}
                      </span>
                      <span className="font-manuscriptBody text-[11px] font-semibold text-manuscript-ink block leading-tight mt-0.5">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Key Solutions Checklist */}
          <div className="space-y-3 pt-1">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-manuscript-inkMuted border-b border-manuscript-walnut/15 pb-2 font-bold">
              Key Solutions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {['LMS Platforms', 'Student Analytics', 'AI Learning Assistants', 'Assessment Systems', 'School Management'].map((sol, i) => (
                <div key={i} className="flex items-center gap-2.5 text-manuscript-ink font-manuscriptBody text-[14px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper shrink-0" />
                  <span>{sol}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => navigate('/industries/education')}
              className="w-full sm:w-auto group inline-flex justify-center items-center gap-2.5 px-6 py-3.5 rounded bg-manuscript-ink text-manuscript-parchmentLight font-manuscriptBody text-[13px] font-bold tracking-wider uppercase transition-all duration-200 hover:bg-manuscript-walnutDeep hover:-translate-y-0.5 shadow-sm"
            >
              <span>Explore Education & EdTech</span>
              <ArrowRight className="w-4 h-4 text-manuscript-gold transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

        {/* Right: The AINCURU Advantage Card (Warm High-Contrast Manuscript Dossier) */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full relative"
        >
          <div className="relative bg-[#FFFDF9] rounded-2xl p-5 sm:p-7 md:p-9 border border-manuscript-walnut/25 shadow-[0_16px_40px_-15px_rgba(91,58,31,0.08)] overflow-hidden">
            {/* Top architectural gradient rule */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-manuscript-walnut via-manuscript-copper to-manuscript-gold" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-manuscript-walnut/15">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-manuscript-copper font-bold block mb-1">
                    BENEFITS & ROI
                  </span>
                  <h3 className="font-manuscript text-2xl sm:text-3xl !text-manuscript-ink font-normal tracking-tight">
                    The AINCURU Advantage
                  </h3>
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-manuscript-parchmentWarm border border-manuscript-walnut/30 flex items-center justify-center text-manuscript-walnut font-serif font-bold text-xs sm:text-sm shadow-inner">
                  A
                </div>
              </div>

              <div className="space-y-5 sm:space-y-6">
                {[
                  {
                    title: 'Personalized Learning',
                    desc: 'AI algorithms adapt to individual student needs and pacing, delivering tailored exercises and instant feedback.'
                  },
                  {
                    title: 'Administrative Efficiency',
                    desc: 'Automate grading, scheduling, and student enrollment processes to give educators hours back each week.'
                  },
                  {
                    title: 'Scalability',
                    desc: 'Cloud-native platforms capable of handling millions of concurrent users during peak exam periods with zero downtime.'
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.15 }}
                    className="flex gap-3.5 sm:gap-4 items-start group cursor-default"
                  >
                    <div className="w-7 h-7 rounded-full bg-manuscript-parchmentWarm border border-manuscript-copper/30 flex items-center justify-center shrink-0 mt-0.5 text-manuscript-copper group-hover:bg-manuscript-copper group-hover:text-white transition-colors">
                      <Check className="w-4 h-4" strokeWidth={2.5} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[15px] sm:text-[16px] font-bold !text-manuscript-ink font-manuscriptBody leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-manuscript-inkSoft text-xs sm:text-sm leading-relaxed font-manuscriptBody">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Institutional verification badge */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-manuscript-walnut/15 flex flex-wrap gap-2 items-center justify-between text-xs font-mono text-manuscript-inkMuted">
                <span className="flex items-center gap-1.5 text-manuscript-ink font-medium">
                  <ShieldCheck size={14} className="text-manuscript-sage" />
                  FERPA & LTI-Ready
                </span>
                <span>·</span>
                <span>99.9% Platform Uptime</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════════════
   SECTION 02: STARTUPS & FOUNDERS (Interactive Velocity Engine)
   ════════════════════════════════════════════════════════════════ */
const StartupsSection = () => {
  const navigate = useNavigate();
  const [activeWeek, setActiveWeek] = useState(1);

  const sprintStages = [
    {
      week: 'Week 1',
      title: 'Scoping & Architecture',
      duration: 'Days 1–7',
      deliverables: 'Entity Relationship Diagram, API contracts, click-through wireframes, cloud setup.',
      status: 'Target locked'
    },
    {
      week: 'Weeks 2–3',
      title: 'Core MVP Engineering',
      duration: 'Days 8–21',
      deliverables: 'Auth, payment webhooks, database schema migrations, and rapid staging build releases.',
      status: 'Active build cycle'
    },
    {
      week: 'Week 4',
      title: 'Hardening & Launch',
      duration: 'Days 22–28',
      deliverables: 'Load testing, security audit check, analytics tracking, and production App Store / Web deployment.',
      status: 'Investor demo ready'
    }
  ];

  return (
    <section id="startups" className="relative">
      <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-start">
        {/* Left: Interactive Founder Velocity Deck */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6 sm:space-y-7 w-full"
        >
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-manuscript-parchmentWarm border border-manuscript-copper/20 shadow-sm">
              <Rocket className="w-5 h-5 text-manuscript-copper" />
            </div>
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-manuscript-copper font-bold">
              02 — STARTUPS
            </span>
          </div>

          <div>
            <h2 className="heading-manuscript text-3xl sm:text-4xl md:text-5xl font-normal !text-manuscript-ink mb-3 sm:mb-4 leading-tight">
              Startups & Founders
            </h2>
            <p className="text-base sm:text-lg text-manuscript-inkMuted leading-relaxed font-manuscriptBody">
              Transforming visionary ideas into market-ready digital products with rapid engineering cycles.
            </p>
          </div>

          {/* Interactive 4-Week Sprint Velocity Track */}
          <div className="p-4 sm:p-5 rounded-2xl bg-manuscript-parchmentLight border border-manuscript-copper/25 shadow-sm space-y-4">
            <div className="flex flex-wrap gap-2 items-center justify-between pb-2 border-b border-manuscript-copper/15">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-manuscript-copper animate-ping" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-manuscript-copper font-bold">
                  The 28-Day MVP Sprint Tracker
                </span>
              </div>
              <span className="font-mono text-[10px] text-manuscript-copper bg-manuscript-parchmentWarm px-2 py-0.5 rounded font-bold border border-manuscript-copper/20">
                Zero Throwaway Code
              </span>
            </div>

            {/* Clickable sprint milestone blocks (1 col on mobile, 3 cols on tablet+) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {sprintStages.map((stage, sIdx) => {
                const isCurrent = activeWeek === sIdx;
                return (
                  <button
                    key={sIdx}
                    onClick={() => setActiveWeek(sIdx)}
                    className={`p-3 rounded-xl text-left transition-all duration-200 border ${
                      isCurrent
                        ? 'bg-manuscript-copper text-manuscript-parchmentLight border-manuscript-copper shadow-sm'
                        : 'bg-manuscript-parchment/70 text-manuscript-ink border-manuscript-copper/20 hover:bg-manuscript-parchmentWarm'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase font-bold">{stage.week}</span>
                      <span className={`text-[9px] font-mono ${isCurrent ? 'text-manuscript-goldWarm' : 'text-manuscript-inkMuted'}`}>
                        {stage.duration}
                      </span>
                    </div>
                    <div className="font-manuscriptBody font-bold text-xs mt-1 leading-snug">
                      {stage.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Stage Deep-Dive */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWeek}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="p-3.5 rounded-xl bg-manuscript-parchmentWarm/70 border border-manuscript-copper/20 text-xs space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-manuscript-copper font-bold">
                    Deliverables:
                  </span>
                  <span className="font-mono text-[10px] text-manuscript-sage bg-manuscript-parchmentLight border border-manuscript-sage/30 px-2 py-0.5 rounded font-semibold">
                    ✓ {sprintStages[activeWeek].status}
                  </span>
                </div>
                <p className="font-manuscriptBody text-manuscript-ink leading-relaxed">
                  {sprintStages[activeWeek].deliverables}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Key Solutions */}
          <div className="space-y-3 pt-1">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-manuscript-inkMuted border-b border-manuscript-walnut/15 pb-2 font-bold">
              Key Solutions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {['MVP Development', 'SaaS Platforms', 'Product Engineering', 'Startup Consulting', 'Technical Due Diligence'].map((sol, i) => (
                <div key={i} className="flex items-center gap-2.5 text-manuscript-ink font-manuscriptBody text-[14px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper shrink-0" />
                  <span>{sol}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => navigate('/industries/startups')}
              className="w-full sm:w-auto group inline-flex justify-center items-center gap-2.5 px-6 py-3.5 rounded bg-manuscript-ink text-manuscript-parchmentLight font-manuscriptBody text-[13px] font-bold tracking-wider uppercase transition-all duration-200 hover:bg-manuscript-walnutDeep hover:-translate-y-0.5 shadow-sm"
            >
              <span>Explore Startups & Founders</span>
              <ArrowRight className="w-4 h-4 text-manuscript-gold transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

        {/* Right: The AINCURU Advantage Card (Investor Blueprint Dossier) */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full relative"
        >
          <div className="relative bg-[#FFFDF9] rounded-2xl p-5 sm:p-7 md:p-9 border border-manuscript-copper/30 shadow-[0_16px_40px_-15px_rgba(168,74,40,0.08)] overflow-hidden">
            {/* Engineering crosshairs */}
            <span className="absolute top-2 left-2 text-manuscript-copper/30 font-mono text-xs">+</span>
            <span className="absolute top-2 right-2 text-manuscript-copper/30 font-mono text-xs">+</span>
            <span className="absolute bottom-2 left-2 text-manuscript-copper/30 font-mono text-xs">+</span>
            <span className="absolute bottom-2 right-2 text-manuscript-copper/30 font-mono text-xs">+</span>

            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-manuscript-copper via-manuscript-gold to-manuscript-walnut" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-manuscript-copper/15">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-manuscript-copper font-bold block mb-1">
                    FOUNDER ADVANTAGE
                  </span>
                  <h3 className="font-manuscript text-2xl sm:text-3xl !text-manuscript-ink font-normal tracking-tight">
                    The AINCURU Advantage
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-manuscript-copper bg-manuscript-parchmentWarm px-3 py-1 rounded-full border border-manuscript-copper/30">
                  <Clock size={13} />
                  <span>4 WEEKS MVP</span>
                </div>
              </div>

              <div className="space-y-5 sm:space-y-6">
                {[
                  {
                    title: 'Speed to Market',
                    desc: 'Launch your core product in weeks, not months, validating real demand while conserving your runway.'
                  },
                  {
                    title: 'Investor Ready',
                    desc: 'Enterprise-grade architecture, documented APIs, and security practices that pass institutional technical due diligence.'
                  },
                  {
                    title: 'Cost Predictability',
                    desc: 'Transparent sprint-based pricing and agile scoping that eliminate surprise costs and manage burn rate effectively.'
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.15 }}
                    className="flex gap-3.5 sm:gap-4 items-start group cursor-default"
                  >
                    <div className="w-7 h-7 rounded-full bg-manuscript-parchmentWarm border border-manuscript-copper/35 flex items-center justify-center shrink-0 mt-0.5 text-manuscript-copper group-hover:bg-manuscript-copper group-hover:text-white transition-colors">
                      <Check className="w-4 h-4" strokeWidth={2.5} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[15px] sm:text-[16px] font-bold !text-manuscript-ink font-manuscriptBody leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-manuscript-inkSoft text-xs sm:text-sm leading-relaxed font-manuscriptBody">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-manuscript-copper/15 flex flex-wrap gap-2 items-center justify-between text-xs font-mono text-manuscript-inkMuted">
                <span className="flex items-center gap-1.5 text-manuscript-copper font-medium">
                  <Zap size={14} />
                  Multi-Tenant Scalability
                </span>
                <span>·</span>
                <span>Series A Architecture</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════════════
   SECTION 03: SMBS & ENTERPRISE (Connected Operations Matrix)
   ════════════════════════════════════════════════════════════════ */
const SMBsSection = () => {
  const navigate = useNavigate();
  const [selectedWorkflow, setSelectedWorkflow] = useState<'finance' | 'inventory' | 'customer'>('finance');

  const workflows = {
    finance: {
      name: 'Finance & Invoicing',
      badge: '100% Automated Reconciliation',
      desc: 'Connects legacy banking feeds, purchase orders, and payment gateways into a zero-touch ledger.',
      metrics: ['2 min invoice settlement', 'Zero double-entries', 'Automated GST matching']
    },
    inventory: {
      name: 'Warehouse & Inventory',
      badge: 'Real-Time Stock Telemetry',
      desc: 'Replaces manual spreadsheets with RFID / barcode live inventory tracking and auto-reorder alerts.',
      metrics: ['Live SKU tracking', 'Automated reorder triggers', 'Zero stockout incidents']
    },
    customer: {
      name: 'CRM & Client Dispatch',
      badge: '360° Operations Pipeline',
      desc: 'Centralizes customer interactions, support escalation routing, and quote approvals into one portal.',
      metrics: ['4x faster quote turn-around', 'Instant ticket dispatch', 'Client self-service portal']
    }
  };

  return (
    <section id="smbs" className="relative">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        {/* Left: Interactive Enterprise Architecture */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6 sm:space-y-7 w-full"
        >
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-manuscript-parchmentWarm border border-manuscript-walnut/20 shadow-sm">
              <Building2 className="w-5 h-5 text-manuscript-walnut" />
            </div>
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-manuscript-walnut font-bold">
              03 — SMBS
            </span>
          </div>

          <div>
            <h2 className="heading-manuscript text-3xl sm:text-4xl md:text-5xl font-normal !text-manuscript-ink mb-3 sm:mb-4 leading-tight">
              SMBs & Enterprise
            </h2>
            <p className="text-base sm:text-lg text-manuscript-inkMuted leading-relaxed font-manuscriptBody">
              Accelerating growth through end-to-end digital transformation and intelligent automation.
            </p>
          </div>

          {/* Interactive Operations Hub Widget */}
          <div className="p-4 sm:p-5 rounded-2xl bg-manuscript-parchmentLight border border-manuscript-walnut/20 shadow-sm space-y-4">
            <div className="flex flex-wrap gap-2 items-center justify-between pb-2 border-b border-manuscript-walnut/15">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-manuscript-sage animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-manuscript-walnut font-bold">
                  Enterprise Integration Engine
                </span>
              </div>
              <span className="font-mono text-[10px] text-manuscript-walnut bg-manuscript-parchmentWarm px-2 py-0.5 rounded font-bold border border-manuscript-walnut/20">
                120+ hrs/mo saved
              </span>
            </div>

            {/* Workflow selector pills (1 col on mobile, 3 cols on tablet+) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {(['finance', 'inventory', 'customer'] as const).map((key) => {
                const isSelected = selectedWorkflow === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedWorkflow(key)}
                    className={`py-2 px-2.5 rounded-xl text-center font-manuscriptBody text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-manuscript-walnut text-manuscript-parchmentLight shadow-sm'
                        : 'bg-manuscript-parchment/70 text-manuscript-ink hover:bg-manuscript-parchmentWarm border border-manuscript-walnut/15'
                    }`}
                  >
                    {workflows[key].name.split('&')[0]}
                  </button>
                );
              })}
            </div>

            {/* Active Workflow Insight */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedWorkflow}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="p-3.5 rounded-xl bg-manuscript-parchmentWarm/70 border border-manuscript-walnut/20 space-y-2 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-manuscript-walnut uppercase tracking-wider">
                    {workflows[selectedWorkflow].badge}
                  </span>
                  <span className="font-mono text-[10px] text-manuscript-inkMuted">Live Central Sync</span>
                </div>
                <p className="font-manuscriptBody text-manuscript-ink leading-relaxed">
                  {workflows[selectedWorkflow].desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 pt-1.5 border-t border-manuscript-walnut/15">
                  {workflows[selectedWorkflow].metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="bg-manuscript-parchmentLight p-1.5 sm:p-2 rounded border border-manuscript-walnut/15 text-center font-mono text-[10px] text-manuscript-walnut font-semibold">
                      ✦ {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Key Solutions */}
          <div className="space-y-3 pt-1">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-manuscript-inkMuted border-b border-manuscript-walnut/15 pb-2 font-bold">
              Key Solutions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {['Business Automation', 'CRM Systems', 'Analytics Dashboards', 'ERP Solutions', 'Workflow Digitization'].map((sol, i) => (
                <div key={i} className="flex items-center gap-2.5 text-manuscript-ink font-manuscriptBody text-[14px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper shrink-0" />
                  <span>{sol}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => navigate('/industries/smbs')}
              className="w-full sm:w-auto group inline-flex justify-center items-center gap-2.5 px-6 py-3.5 rounded bg-manuscript-ink text-manuscript-parchmentLight font-manuscriptBody text-[13px] font-bold tracking-wider uppercase transition-all duration-200 hover:bg-manuscript-walnutDeep hover:-translate-y-0.5 shadow-sm"
            >
              <span>Explore SMBs & Enterprise</span>
              <ArrowRight className="w-4 h-4 text-manuscript-gold transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

        {/* Right: The AINCURU Advantage Card (Executive Ledger) */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full relative"
        >
          <div className="relative bg-[#FFFDF9] rounded-2xl p-5 sm:p-7 md:p-9 border border-manuscript-walnut/25 shadow-[0_16px_40px_-15px_rgba(91,58,31,0.08)] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-manuscript-walnut via-manuscript-copper to-manuscript-gold" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-manuscript-walnut/15">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-manuscript-copper font-bold block mb-1">
                    OPERATIONAL RETURN
                  </span>
                  <h3 className="font-manuscript text-2xl sm:text-3xl !text-manuscript-ink font-normal tracking-tight">
                    The AINCURU Advantage
                  </h3>
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-manuscript-parchmentWarm border border-manuscript-walnut/30 flex items-center justify-center text-manuscript-walnut shadow-inner">
                  <BarChart3 size={16} />
                </div>
              </div>

              <div className="space-y-5 sm:space-y-6">
                {[
                  {
                    title: 'Operational Efficiency',
                    desc: 'Eliminate manual data entry and streamline daily operations across finance, inventory, and fulfillment.'
                  },
                  {
                    title: 'Data-Driven Decisions',
                    desc: 'Real-time dashboards that aggregate cross-departmental data to provide actionable business insights instantly.'
                  },
                  {
                    title: 'Improved Customer Experience',
                    desc: 'Automated follow-ups, self-service portals, and personalized communication channels that elevate client retention.'
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.15 }}
                    className="flex gap-3.5 sm:gap-4 items-start group cursor-default"
                  >
                    <div className="w-7 h-7 rounded-full bg-manuscript-parchmentWarm border border-manuscript-walnut/30 flex items-center justify-center shrink-0 mt-0.5 text-manuscript-walnut group-hover:bg-manuscript-walnut group-hover:text-white transition-colors">
                      <Check className="w-4 h-4" strokeWidth={2.5} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[15px] sm:text-[16px] font-bold !text-manuscript-ink font-manuscriptBody leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-manuscript-inkSoft text-xs sm:text-sm leading-relaxed font-manuscriptBody">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-manuscript-walnut/15 flex flex-wrap gap-2 items-center justify-between text-xs font-mono text-manuscript-inkMuted">
                <span className="flex items-center gap-1.5 text-manuscript-ink font-medium">
                  <ShieldCheck size={14} className="text-manuscript-sage" />
                  SOC2 & Audit Compliant
                </span>
                <span>·</span>
                <span>Zero Process Disruption</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════════════
   SECTION 04: BUSINESS REGISTRATIONS & ACCOUNTING AUTOMATION
   (Flagship 40m → 1m Live Speed Transformation Simulator)
   ════════════════════════════════════════════════════════════════ */
const AccountingSection = () => {
  const navigate = useNavigate();
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedProgress, setSimulatedProgress] = useState(100);

  const runSimulation = () => {
    setIsSimulating(true);
    setSimulatedProgress(0);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      if (progress >= 100) {
        setSimulatedProgress(100);
        setIsSimulating(false);
        clearInterval(interval);
      } else {
        setSimulatedProgress(progress);
      }
    }, 120);
  };

  return (
    <section id="accounting-automation" className="relative">
      <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-start">
        {/* Left: Content & Interactive Simulator */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6 sm:space-y-7 w-full"
        >
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-manuscript-parchmentWarm border border-manuscript-rustDeep/20 shadow-sm">
              <FileSpreadsheet className="w-5 h-5 text-manuscript-rustDeep" />
            </div>
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-manuscript-rustDeep font-bold">
              04 — ACCOUNTING-AUTOMATION
            </span>
          </div>

          <div>
            <h2 className="heading-manuscript text-3xl sm:text-4xl md:text-5xl font-normal !text-manuscript-ink mb-3 sm:mb-4 leading-tight">
              Business Registrations & Accounting Automation
            </h2>
            <p className="text-base sm:text-lg text-manuscript-inkMuted leading-relaxed font-manuscriptBody">
              We find repetitive business workflows and turn them into intelligent, human-controlled systems.
            </p>
          </div>

          {/* Interactive Live Speed Transformation Simulator (40m → 1m) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-manuscript-parchmentLight border border-manuscript-rustDeep/25 shadow-sm space-y-4">
            <div className="flex flex-wrap gap-2 items-center justify-between pb-2 border-b border-manuscript-rustDeep/15">
              <span className="font-mono text-[10px] uppercase tracking-widest text-manuscript-rustDeep font-bold flex items-center gap-1.5">
                <Clock size={13} />
                Flagship Benchmark · Udyam & MSME
              </span>
              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className="font-mono text-[10px] text-manuscript-rustDeep hover:text-white bg-manuscript-parchmentWarm hover:bg-manuscript-rustDeep border border-manuscript-rustDeep/30 px-2.5 py-1 rounded transition-colors flex items-center gap-1.5 font-bold"
              >
                <RefreshCw size={11} className={isSimulating ? 'animate-spin' : ''} />
                <span>{isSimulating ? 'Simulating...' : 'Test Speed'}</span>
              </button>
            </div>

            {/* Time Comparison Visualizer (1 col on mobile, 2 cols on tablet+) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Manual baseline */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-manuscript-parchmentWarm/80 border border-manuscript-rust/30 space-y-1">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-manuscript-rustDeep font-bold uppercase">Manual Baseline</span>
                  <span className="line-through text-manuscript-rust font-bold">30–40 Mins</span>
                </div>
                <div className="h-2 w-full bg-manuscript-parchmentDeep rounded-full overflow-hidden">
                  <div className="h-full bg-manuscript-rust/80 rounded-full w-full" />
                </div>
                <p className="text-[11px] font-manuscriptBody text-manuscript-inkMuted pt-1">
                  14 portal tabs open, manual PAN typing, captcha errors & fatigue.
                </p>
              </div>

              {/* AINCURU System */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-manuscript-parchmentWarm/80 border border-manuscript-sage/40 space-y-1">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-manuscript-walnut font-bold uppercase">AINCURU System</span>
                  <span className="text-manuscript-sage font-bold text-xs bg-manuscript-parchmentLight border border-manuscript-sage/30 px-1.5 py-0.2 rounded">~58 Seconds</span>
                </div>
                <div className="h-2 w-full bg-manuscript-parchmentDeep rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-manuscript-sage rounded-full"
                    style={{ width: `${simulatedProgress}%` }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                <p className="text-[11px] font-manuscriptBody text-manuscript-ink pt-1">
                  Instant document extraction, pre-populated form ready for 1-click review.
                </p>
              </div>
            </div>

            {/* Human in control callout */}
            <div className="flex flex-wrap gap-2 items-center justify-between p-2.5 rounded-lg bg-manuscript-parchmentWarm/60 border border-manuscript-walnut/15 text-xs font-mono">
              <span className="text-manuscript-inkMuted flex items-center gap-1.5">
                <UserCheck size={14} className="text-manuscript-sage" />
                Human Professional
              </span>
              <span className="text-manuscript-walnut font-bold">100% Final Review & Control</span>
            </div>
          </div>

          {/* Key Solutions */}
          <div className="space-y-3 pt-1">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-manuscript-inkMuted border-b border-manuscript-walnut/15 pb-2 font-bold">
              Key Solutions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                'MSME & Udyam Registrations',
                'GST Filing & Registration Automation',
                'MCA & Incorporation Workflows',
                'Statutory & License Filings (IEC, FSSAI)',
                'Document Extraction & Verification'
              ].map((sol, i) => (
                <div key={i} className="flex items-center gap-2.5 text-manuscript-ink font-manuscriptBody text-[14px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-manuscript-rustDeep shrink-0" />
                  <span>{sol}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => navigate('/industries/accounting-automation')}
              className="w-full sm:w-auto group inline-flex justify-center items-center gap-2.5 px-6 py-3.5 rounded bg-manuscript-ink text-manuscript-parchmentLight font-manuscriptBody text-[13px] font-bold tracking-wider uppercase transition-all duration-200 hover:bg-manuscript-walnutDeep hover:-translate-y-0.5 shadow-sm"
            >
              <span>Explore Accounting Automation</span>
              <ArrowRight className="w-4 h-4 text-manuscript-gold transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

        {/* Right: The AINCURU Advantage Card (Finanezy Verification Ledger) */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full relative"
        >
          <div className="relative bg-[#FFFDF9] rounded-2xl p-5 sm:p-7 md:p-9 border border-manuscript-rustDeep/30 shadow-[0_16px_40px_-15px_rgba(139,58,31,0.08)] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-manuscript-rustDeep via-manuscript-copper to-manuscript-gold" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-manuscript-rustDeep/15">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-manuscript-rustDeep font-bold block mb-1">
                    WORKFLOW PHILOSOPHY
                  </span>
                  <h3 className="font-manuscript text-2xl sm:text-3xl !text-manuscript-ink font-normal tracking-tight">
                    The AINCURU Advantage
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-manuscript-rustDeep bg-manuscript-parchmentWarm px-3 py-1 rounded-full border border-manuscript-rustDeep/25">
                  <UserCheck size={13} />
                  <span>1 HUMAN IN CONTROL</span>
                </div>
              </div>

              <div className="space-y-5 sm:space-y-6">
                {[
                  {
                    title: '40 Minutes → 1 Minute',
                    desc: 'Dramatic reduction in manual data entry cycles with instant document parsing and pre-population.'
                  },
                  {
                    title: 'All Registration Workflows',
                    desc: 'One proven methodology applied across MSME, GST, MCA, and license filings with zero new portals to learn.'
                  },
                  {
                    title: 'Human-in-the-Loop Control',
                    desc: 'The system extracts and prepares; the professional reviews the pre-validated form and executes the final action.'
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.15 }}
                    className="flex gap-3.5 sm:gap-4 items-start group cursor-default"
                  >
                    <div className="w-7 h-7 rounded-full bg-manuscript-parchmentWarm border border-manuscript-rustDeep/35 flex items-center justify-center shrink-0 mt-0.5 text-manuscript-rustDeep group-hover:bg-manuscript-rustDeep group-hover:text-white transition-colors">
                      <Check className="w-4 h-4" strokeWidth={2.5} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[15px] sm:text-[16px] font-bold !text-manuscript-ink font-manuscriptBody leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-manuscript-inkSoft text-xs sm:text-sm leading-relaxed font-manuscriptBody">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-manuscript-rustDeep/15 flex flex-wrap gap-2 items-center justify-between text-xs font-mono text-manuscript-inkMuted">
                <span className="text-manuscript-ink font-medium flex items-center gap-1">
                  <ShieldCheck size={14} className="text-manuscript-sage" />
                  0% Submission Errors
                </span>
                <span>·</span>
                <span>30x Processing Throughput</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Bottom CTA in authentic AINCURU Living Manuscript Theme ─── */
const IndustriesManuscriptCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="parchment-surface--deep relative py-20 sm:py-24 md:py-36 overflow-hidden border-t border-manuscript-parchmentDeep">
      {/* Background architectural watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="w-[800px] sm:w-[1100px] h-[800px] sm:h-[1100px] text-manuscript-walnutDeep" fill="none">
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="0.15" />
          <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="0.25" strokeDasharray="1 3" />
          <path d="M50 0 L50 100 M0 50 L100 50" stroke="currentColor" strokeWidth="0.15" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-5 sm:space-y-6"
        >
          <p className="chapter-eyebrow text-manuscript-copper tracking-[0.3em] font-mono text-[10px] sm:text-[11px] uppercase">
            A FINAL INVITATION · PARTNERSHIP
          </p>

          <h2 className="heading-manuscript text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal !text-manuscript-ink leading-[1.08] tracking-tight">
            Ready to Build Your{' '}
            <span className="heading-manuscript--italic text-manuscript-copper font-normal">
              Next Product?
            </span>
          </h2>

          <p className="font-manuscriptBody text-base sm:text-xl md:text-2xl text-manuscript-inkSoft max-w-2xl mx-auto leading-relaxed pt-1 sm:pt-2">
            Let's transform your idea into a scalable digital product.
          </p>

          <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="group relative inline-flex w-full sm:w-auto justify-center items-center gap-3 px-8 py-4 font-manuscriptBody text-[13px] font-bold uppercase tracking-[0.2em] text-manuscript-parchmentLight shadow-[0_12px_30px_-12px_rgba(139,58,31,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_rgba(139,58,31,0.65)]"
              style={{
                backgroundColor: "#8B3A1F", // rustDeep
                borderRadius: 4,
              }}
            >
              <span>BOOK CONSULTATION</span>
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 text-manuscript-gold" strokeWidth={2} />
            </button>

            <button
              onClick={() => navigate('/contact')}
              className="group inline-flex w-full sm:w-auto justify-center items-center gap-2.5 px-8 py-4 font-manuscriptBody text-[13px] font-bold uppercase tracking-[0.2em] text-manuscript-ink border border-manuscript-walnut/30 bg-manuscript-parchmentLight hover:bg-manuscript-parchmentWarm transition-colors"
              style={{
                borderRadius: 4,
              }}
            >
              <MessageSquare className="w-4 h-4 text-manuscript-copper" />
              <span>START YOUR PROJECT</span>
            </button>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-manuscript-walnut/15 max-w-xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-manuscript-inkMuted">
            <span>Senior Engineers Only</span>
            <span>·</span>
            <span>Predictable Sprints</span>
            <span>·</span>
            <span>Direct Founder Oversight</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── MAIN INDUSTRIES OVERVIEW PAGE ─── */
export const IndustriesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="manuscript-root min-h-screen">
      <SEO {...seoConfig.industries} />
      <Header theme="manuscript" />
      
      <main>
        <IndustriesHero />

        {/* ══════════════════════════════════════════════════════
            DISTINCTIVE & BESPOKE INDUSTRY CHAPTER SECTIONS
        ══════════════════════════════════════════════════════ */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20 md:py-28 space-y-16 sm:space-y-24 md:space-y-32 max-w-6xl">
          {/* 01 EDUCATION */}
          <EducationSection />

          {/* Divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-manuscript-walnut/20 to-manuscript-walnut/20" />
            <span className="text-manuscript-copper/70 font-serif text-xs">❖</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-manuscript-walnut/20 to-manuscript-walnut/20" />
          </div>

          {/* 02 STARTUPS */}
          <StartupsSection />

          {/* Divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-manuscript-walnut/20 to-manuscript-walnut/20" />
            <span className="text-manuscript-copper/70 font-serif text-xs">❖</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-manuscript-walnut/20 to-manuscript-walnut/20" />
          </div>

          {/* 03 SMBS */}
          <SMBsSection />

          {/* Divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-manuscript-walnut/20 to-manuscript-walnut/20" />
            <span className="text-manuscript-copper/70 font-serif text-xs">❖</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-manuscript-walnut/20 to-manuscript-walnut/20" />
          </div>

          {/* 04 ACCOUNTING AUTOMATION */}
          <AccountingSection />
        </div>

        {/* Bottom Living Manuscript CTA */}
        <IndustriesManuscriptCTA />
      </main>

      <Footer />
    </div>
  );
};

export default IndustriesPage;
