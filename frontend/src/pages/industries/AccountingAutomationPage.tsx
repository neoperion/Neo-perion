import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { seoConfig } from '@/lib/seoConfig';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  FileCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  Building2,
  FileSpreadsheet,
  Layers,
  ArrowDown,
  UserCheck,
  Cpu,
  ExternalLink,
  Check
} from 'lucide-react';
import { getIndustryBySlug } from '@/data/industriesData';

// ─── Registration Types Supported ──────────────────────────────
const REGISTRATION_SERVICES = [
  {
    id: 'msme',
    title: 'MSME & Udyam Registration',
    badge: 'FLAGSHIP BENCHMARK',
    desc: 'Instant Aadhaar/PAN entity extraction, NIC code classification, and auto-prepared Udyam registration forms with deterministic validation.',
    timeBefore: '35–45 min',
    timeAfter: '< 1 min',
    portal: 'Udyam Portal (Govt of India)'
  },
  {
    id: 'gst',
    title: 'GST Registration & Return Prep',
    badge: 'MULTI-STATE COMPLIANCE',
    desc: 'Automates PAN, business proof, and bank statement verification with auto-filled REG-01 drafts, HSN mapping, and multi-state filing prep.',
    timeBefore: '50–60 min',
    timeAfter: '2–3 min',
    portal: 'GSTN Portal'
  },
  {
    id: 'mca',
    title: 'MCA & Company Incorporation',
    badge: 'SPICe+ WORKFLOW',
    desc: 'Director KYC parsing, name availability structuring, SPICe+ Part A & B document preparation, and AGILE-PRO compliance bundle assembly.',
    timeBefore: '90–120 min',
    timeAfter: '8–10 min',
    portal: 'MCA V3 Portal'
  },
  {
    id: 'iec',
    title: 'Import Export Code (IEC)',
    badge: 'DGFT AUTOMATION',
    desc: 'Automates DGFT profile setup, bank account pre-validation, business document extraction, and instant digital token readiness.',
    timeBefore: '30–40 min',
    timeAfter: '1–2 min',
    portal: 'DGFT Portal'
  },
  {
    id: 'licenses',
    title: 'FSSAI, Shop & Trade Licenses',
    badge: 'STATUTORY LICENSING',
    desc: 'Premise proof verification, applicant declaration structuring, category-wise fee computation, and multi-municipal portal preparation.',
    timeBefore: '45–60 min',
    timeAfter: '2–3 min',
    portal: 'FSSAI FoSCoS / State Portals'
  },
  {
    id: 'trademark',
    title: 'Trademark & IP Applications',
    badge: 'IPR PREPARATION',
    desc: 'Class categorization, user date affidavit drafting, applicant identity verification, and TM-A pre-filing validation checks.',
    timeBefore: '60–80 min',
    timeAfter: '3–4 min',
    portal: 'IP India Portal'
  }
];

export function AccountingAutomationPage() {
  const navigate = useNavigate();
  const industry = getIndustryBySlug('accounting-automation') || getIndustryBySlug('healthcare');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedReg, setSelectedReg] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="manuscript-root min-h-screen parchment-surface text-manuscript-ink selection:bg-manuscript-copper selection:text-white w-full max-w-full overflow-x-clip box-border">
      <SEO {...seoConfig.accountingAutomation} />
      <Header theme="manuscript" />

      <main className="w-full max-w-full overflow-x-clip box-border">
        {/* ══════════════════════════════════════════════════════
            01 HERO: THE STEVE JOBS MINIMAL STATEMENT
        ══════════════════════════════════════════════════════ */}
        <section className="pt-36 sm:pt-40 md:pt-48 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-6 lg:px-12 relative overflow-hidden border-b border-manuscript-parchmentDeep w-full max-w-full box-border">
          {/* Subtle warm glow background */}
          <div className="absolute top-0 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-manuscript-copper/8 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-6 sm:left-10 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-manuscript-gold/5 blur-[90px] sm:blur-[140px] rounded-full pointer-events-none" />

          <div className="container mx-auto max-w-5xl text-center relative z-10 w-full">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="chapter-eyebrow font-mono text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.35em] text-manuscript-copper font-semibold mb-4 sm:mb-6"
            >
              Statutory Registrations & Accounting Operations
            </motion.p>

            {/* Kicker */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-xl sm:text-2xl md:text-3xl font-manuscript italic text-manuscript-copper mb-3 sm:mb-4"
            >
              Work that disappears.
            </motion.h2>

            {/* Massive Serif Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="heading-manuscript text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight !text-manuscript-ink max-w-4xl mx-auto mb-6 sm:mb-8"
            >
              The work your team <br className="hidden sm:block" />
              <span className="heading-manuscript--italic text-manuscript-copper">
                shouldn't have to do.
              </span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="text-base sm:text-xl md:text-2xl text-manuscript-inkMuted font-manuscriptBody max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10"
            >
              We find repetitive business workflows and turn them into intelligent, human-controlled systems.
            </motion.p>

            {/* Scope pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap justify-center items-center gap-2 p-2 rounded-2xl bg-manuscript-parchmentWarm/80 border border-manuscript-walnut/20 max-w-3xl mx-auto w-full box-border"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-manuscript-copper font-bold px-2">Coverage:</span>
              {['MSME / Udyam', 'GST Registrations', 'MCA Incorporations', 'IEC & DGFT', 'FSSAI & Licenses', 'Tax & Compliance'].map((item, idx) => (
                <span
                  key={idx}
                  className="font-manuscriptBody text-xs text-manuscript-ink px-2.5 py-1 rounded-full bg-manuscript-parchmentLight border border-manuscript-walnut/15 font-medium"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            02 THE ONE STORY (MSME REGISTRATION BENCHMARK)
        ══════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12 bg-manuscript-parchmentLight border-b border-manuscript-walnut/15 relative w-full max-w-full overflow-hidden box-border">
          <div className="container mx-auto max-w-4xl">
            {/* Story kicker */}
            <div className="text-center mb-10 sm:mb-16">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-manuscript-copper block mb-3 font-bold">
                Live Case File · Bengaluru Finance & Accounting Firm
              </span>
              <h2 className="heading-manuscript text-3xl md:text-5xl font-normal !text-manuscript-ink mb-4">
                MSME Registration
              </h2>
              <div className="font-manuscript text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-manuscript-copper leading-none my-4 sm:my-6">
                40 minutes <br />
                <span className="!text-manuscript-ink text-2xl sm:text-4xl md:text-5xl font-normal tracking-normal block mt-2">
                  became <span className="text-manuscript-copper font-semibold">1 minute.</span>
                </span>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-manuscript-inkMuted font-manuscriptBody max-w-2xl mx-auto leading-relaxed mt-4 sm:mt-6">
                A Bengaluru finance & accounting firm was spending significant time manually reading identity documents, PAN cards, bank proofs, and copy-pasting data field-by-field during MSME registrations.
              </p>
            </div>

            {/* Before vs After Metric Cards */}
            <div className="grid md:grid-cols-2 gap-5 sm:gap-6 items-stretch my-8 sm:my-12">
              {/* BEFORE */}
              <div className="rounded-2xl p-6 sm:p-8 bg-manuscript-parchmentWarm/90 border border-manuscript-rust/30 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-manuscript-rustDeep font-bold block mb-3">
                    Before Manual Workflow
                  </span>
                  <div className="font-manuscript text-3xl sm:text-4xl md:text-5xl font-normal text-manuscript-rust mb-2">
                    30–40 min
                  </div>
                  <p className="font-manuscriptBody text-xs sm:text-sm text-manuscript-inkSoft leading-relaxed">
                    Manual document reading, transcribing Aadhaar/PAN details, double-checking for spelling mistakes, resolving rejected portal attempts.
                  </p>
                </div>
                <div className="mt-6 sm:mt-8 pt-4 border-t border-manuscript-rust/20 flex flex-wrap items-center gap-2 text-xs font-mono text-manuscript-rustDeep font-semibold">
                  <span>Slow</span> · <span>High Error Risk</span> · <span>Senior Time Wasted</span>
                </div>
              </div>

              {/* AFTER */}
              <div className="rounded-2xl p-6 sm:p-8 bg-[#FFFDF9] border-2 border-manuscript-copper/40 flex flex-col justify-between shadow-[0_12px_40px_-15px_rgba(168,74,40,0.12)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-manuscript-copper/8 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-manuscript-copper font-bold block mb-3">
                    After · AINCURU Automation
                  </span>
                  <div className="font-manuscript text-3xl sm:text-4xl md:text-5xl font-normal text-manuscript-copper mb-2">
                    ~1 min
                  </div>
                  <p className="font-manuscriptBody text-xs sm:text-sm text-manuscript-inkSoft leading-relaxed">
                    AI instantly extracts, structures, and pre-populates all registration fields with deterministic schema validation. The accountant does one click of verification.
                  </p>
                </div>
                <div className="mt-6 sm:mt-8 pt-4 border-t border-manuscript-copper/20 flex flex-wrap items-center gap-2 text-xs font-mono text-manuscript-copper font-semibold">
                  <span className="text-manuscript-sage flex items-center gap-1">
                    <CheckCircle2 size={13} />
                    Automated Prep
                  </span>
                  <span>·</span>
                  <span>100% Accuracy</span>
                  <span>·</span>
                  <span>Human Control</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            03 THE MAGIC: VISUAL PIPELINE TRANSFORMATION
        ══════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12 parchment-surface border-b border-manuscript-parchmentDeep w-full max-w-full overflow-hidden box-border">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10 sm:mb-16">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-manuscript-copper block mb-3 font-bold">
                The Transformation
              </span>
              <h2 className="heading-manuscript text-3xl md:text-5xl font-normal !text-manuscript-ink mb-4">
                See the magic in the flow.
              </h2>
              <p className="text-base md:text-lg text-manuscript-inkMuted font-manuscriptBody max-w-xl mx-auto">
                Instead of forcing your professionals through 7 manual steps, the workflow collapses into automated extraction and professional review.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
              {/* BEFORE FLOW */}
              <div className="rounded-2xl p-5 sm:p-8 bg-manuscript-parchmentWarm/70 border border-manuscript-walnut/20 shadow-sm">
                <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-manuscript-walnut/15 mb-4 sm:mb-6">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-manuscript-inkMuted font-bold">The Old Way</span>
                  <span className="text-xs font-mono text-manuscript-rustDeep bg-manuscript-parchmentLight px-2.5 py-0.5 rounded-full border border-manuscript-rust/30 font-bold">7 Manual Steps</span>
                </div>

                <div className="space-y-2.5 sm:space-y-3">
                  {[
                    { step: '01', title: 'DOCUMENTS', desc: 'Client uploads messy PDFs, Aadhaar, PAN, Electricity bills' },
                    { step: '02', title: 'READ', desc: 'Accountant manually opens and squints at each document' },
                    { step: '03', title: 'FIND INFORMATION', desc: 'Locating address, DIN, PAN, mobile, business class' },
                    { step: '04', title: 'TYPE INFORMATION', desc: 'Hand-typing 30+ fields into government portal forms' },
                    { step: '05', title: 'CHECK', desc: 'Scanning for typos, pincode errors, and missed checkboxes' },
                    { step: '06', title: 'RETYPE / CORRECT', desc: 'Fixing portal validation rejections and failed submits' },
                    { step: '07', title: 'REGISTRATION', desc: 'Finally generating the registration certificate' },
                  ].map((node, i) => (
                    <div key={i} className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl bg-manuscript-parchmentLight border border-manuscript-walnut/10">
                      <span className="font-mono text-[10px] text-manuscript-inkMuted w-5 sm:w-6 shrink-0">{node.step}</span>
                      <div className="flex-1 min-w-0">
                        <span className="font-mono text-xs font-bold text-manuscript-ink block">{node.title}</span>
                        <span className="text-[11px] text-manuscript-inkMuted font-manuscriptBody truncate block">{node.desc}</span>
                      </div>
                      {i < 6 && <ArrowDown size={14} className="text-manuscript-walnut/30 shrink-0" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* AFTER FLOW */}
              <div className="rounded-2xl p-5 sm:p-8 bg-[#FFFDF9] border-2 border-manuscript-copper/35 shadow-[0_16px_50px_-15px_rgba(91,58,31,0.08)]">
                <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-manuscript-copper/20 mb-4 sm:mb-6">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-manuscript-copper font-bold">The AINCURU Way</span>
                  <span className="text-xs font-mono text-manuscript-sage bg-manuscript-parchmentWarm px-2.5 py-0.5 rounded-full border border-manuscript-sage/30 font-semibold">1-Minute Workflow</span>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {[
                    { step: '01', title: 'DOCUMENTS', desc: 'Client uploads documents into one secure dropzone', icon: Layers, highlight: false },
                    { step: '02', title: 'AI EXTRACTION & VALIDATION', desc: 'Vision AI extracts all fields and executes checksums', icon: Cpu, highlight: true },
                    { step: '03', title: 'DATA READY', desc: 'Complete registration schema fully structured and pre-filled', icon: FileSpreadsheet, highlight: true },
                    { step: '04', title: 'HUMAN REVIEW', desc: 'Professional verifies the pre-filled fields on one screen', icon: UserCheck, highlight: false },
                    { step: '05', title: 'REGISTRATION', desc: 'One-click portal dispatch & certificate generation', icon: CheckCircle2, highlight: true },
                  ].map((node, i) => {
                    const Icon = node.icon;
                    return (
                      <div
                        key={i}
                        className={`flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl transition-all ${
                          node.highlight
                            ? 'bg-manuscript-copper/10 border border-manuscript-copper/35 shadow-sm'
                            : 'bg-manuscript-parchmentWarm/60 border border-manuscript-walnut/15'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          node.highlight ? 'bg-manuscript-copper text-manuscript-parchmentLight' : 'bg-manuscript-parchmentLight text-manuscript-walnut border border-manuscript-walnut/15'
                        }`}>
                          <Icon size={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className={`font-mono text-xs font-bold block ${node.highlight ? 'text-manuscript-copper' : 'text-manuscript-ink'}`}>
                            {node.title}
                          </span>
                          <span className="text-xs text-manuscript-inkMuted font-manuscriptBody">{node.desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            04 ALL STATUTORY REGISTRATIONS WE AUTOMATE
        ══════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12 bg-manuscript-parchmentLight border-b border-manuscript-walnut/15 w-full max-w-full overflow-hidden box-border">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10 sm:mb-16">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-manuscript-copper block mb-3 font-bold">
                Full Spectrum Coverage
              </span>
              <h2 className="heading-manuscript text-3xl md:text-5xl font-normal !text-manuscript-ink mb-4">
                One platform. All registration processes.
              </h2>
              <p className="text-base md:text-lg text-manuscript-inkMuted font-manuscriptBody max-w-2xl mx-auto">
                MSME is just the start. The exact same AI extraction, deterministic validation, and human-in-the-loop preparation engine powers every registration workflow across your operations.
              </p>
            </div>

            {/* Grid of Registration Services */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {REGISTRATION_SERVICES.map((srv, idx) => (
                <div
                  key={srv.id}
                  onClick={() => setSelectedReg(idx)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    selectedReg === idx
                      ? 'bg-[#FFFDF9] border-manuscript-copper shadow-md shadow-manuscript-copper/10 scale-[1.01]'
                      : 'bg-[#FFFDF9]/80 border-manuscript-walnut/20 hover:border-manuscript-copper/40'
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="font-mono text-[9px] font-bold text-manuscript-copper px-2 py-0.5 rounded bg-manuscript-parchmentWarm border border-manuscript-copper/25">
                        {srv.badge}
                      </span>
                      <span className="font-mono text-[10px] text-manuscript-inkMuted">{srv.portal}</span>
                    </div>

                    <h3 className="font-manuscript text-xl font-normal !text-manuscript-ink mb-2">
                      {srv.title}
                    </h3>
                    <p className="font-manuscriptBody text-xs text-manuscript-inkSoft leading-relaxed mb-6">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-manuscript-walnut/15 flex items-center justify-between font-mono text-xs">
                    <div>
                      <span className="text-manuscript-inkMuted block text-[10px]">BEFORE</span>
                      <span className="text-manuscript-rust line-through font-bold">{srv.timeBefore}</span>
                    </div>
                    <ArrowRight size={14} className="text-manuscript-copper" />
                    <div>
                      <span className="text-manuscript-copper block text-[10px]">AFTER</span>
                      <span className="text-manuscript-sage font-bold">{srv.timeAfter}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            05 THE PHILOSOPHY (CORE PRINCIPLE)
        ══════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12 parchment-surface border-b border-manuscript-parchmentDeep relative w-full max-w-full overflow-hidden box-border">
          <div className="container mx-auto max-w-3xl text-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-manuscript-copper block mb-4 font-bold">
              Core Philosophy
            </span>
            <h2 className="heading-manuscript text-3xl sm:text-5xl md:text-6xl font-normal !text-manuscript-ink leading-tight mb-8">
              AI doesn't replace the professional. <br />
              <span className="heading-manuscript--italic text-manuscript-copper font-normal">
                It removes the repetition.
              </span>
            </h2>

            <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-[#FFFDF9] border border-manuscript-walnut/25 text-left space-y-5 sm:space-y-6 shadow-sm">
              <p className="font-manuscriptBody text-base sm:text-lg md:text-xl text-manuscript-ink leading-relaxed">
                The system handles extraction, preparation and repetitive data entry. The professional reviews the information and remains in control of the final action.
              </p>
              <div className="h-px w-full bg-manuscript-walnut/15" />
              <p className="font-manuscriptBody text-xs sm:text-sm md:text-base text-manuscript-inkMuted leading-relaxed">
                This is especially critical for accounting, tax and compliance firms where statutory liability matters. Your team never gets replaced by a "black box" — instead, their daily capacity multiplies 30x without burnout.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            06 THE PROOF (THREE NUMBERS)
        ══════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-12 bg-manuscript-parchmentLight border-b border-manuscript-walnut/15 w-full max-w-full overflow-hidden box-border">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10 sm:mb-16">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-manuscript-copper block mb-3 font-bold">
                The Proof
              </span>
              <h2 className="heading-manuscript text-3xl md:text-5xl font-normal !text-manuscript-ink mb-2">
                Built for the way real businesses work.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              {/* Metric 1 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFDF9] border border-manuscript-walnut/20 shadow-sm">
                <div className="font-manuscript text-4xl sm:text-5xl md:text-6xl font-normal text-manuscript-rust mb-2">
                  30–40 min
                </div>
                <p className="font-mono text-xs uppercase tracking-widest text-manuscript-inkMuted font-semibold">
                  Manual Process
                </p>
              </div>

              {/* Metric 2 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFDF9] border-2 border-manuscript-copper/40 shadow-sm">
                <div className="font-manuscript text-4xl sm:text-5xl md:text-6xl font-normal text-manuscript-copper mb-2">
                  ~1 min
                </div>
                <p className="font-mono text-xs uppercase tracking-widest text-manuscript-copper font-bold">
                  Automated Preparation
                </p>
              </div>

              {/* Metric 3 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFDF9] border border-manuscript-walnut/20 shadow-sm">
                <div className="font-manuscript text-4xl sm:text-5xl md:text-6xl font-normal !text-manuscript-ink mb-2">
                  1 human
                </div>
                <p className="font-mono text-xs uppercase tracking-widest text-manuscript-inkMuted font-semibold">
                  Final Control
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            07 EXPAND THE IDEA: BEYOND ONE WORKFLOW
        ══════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12 parchment-surface border-b border-manuscript-parchmentDeep w-full max-w-full overflow-hidden box-border">
          <div className="container mx-auto max-w-4xl text-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-manuscript-copper block mb-3 font-bold">
              Scale Your Practice
            </span>
            <h2 className="heading-manuscript text-3xl sm:text-5xl md:text-6xl font-normal !text-manuscript-ink leading-tight mb-6 sm:mb-8">
              One workflow is never just one workflow.
            </h2>

            {/* Operations Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 md:gap-4 my-8 sm:my-10 max-w-2xl mx-auto w-full box-border">
              {[
                'GST Filings',
                'Accounting Automation',
                'Tax Audit Prep',
                'MCA Compliance',
                'Digital Bookkeeping',
                'Document Parsing',
                'Client Onboarding',
                'Bank Reconciliation',
                'All Statutory Filings',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl bg-[#FFFDF9] border border-manuscript-walnut/20 font-manuscriptBody text-xs sm:text-sm md:text-base font-semibold text-manuscript-ink hover:border-manuscript-copper/50 hover:bg-manuscript-parchmentWarm transition-colors shadow-sm text-center break-words min-w-0"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="font-manuscriptBody text-base sm:text-lg md:text-xl text-manuscript-inkMuted max-w-2xl mx-auto leading-relaxed">
              The same methodology can be applied to repetitive workflows across finance, legal and accounting operations.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            08 PORTFOLIO EVIDENCE CARD (FINANEZY PROOF POINT)
        ══════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-12 bg-manuscript-parchmentLight border-b border-manuscript-walnut/15 w-full max-w-full overflow-hidden box-border">
          <div className="container mx-auto max-w-5xl">
            <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-[#FFFDF9] border-2 border-manuscript-copper/30 flex flex-col lg:flex-row items-center gap-8 sm:gap-10 shadow-sm">
              <div className="flex-1 space-y-4 sm:space-y-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-manuscript-copper font-bold">
                  Portfolio Evidence Case File
                </span>
                <h3 className="heading-manuscript text-2xl sm:text-3xl md:text-4xl font-normal !text-manuscript-ink">
                  Finanezy: MSME & Registration Automation Engine
                </h3>
                <p className="font-manuscriptBody text-xs sm:text-sm md:text-base text-manuscript-inkSoft leading-relaxed">
                  Explore the full technical architecture, document AI validation schemas, and audited benchmarks behind our real-world finance automation deployment.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => navigate('/portfolio/finanezy-msme-automation')}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-manuscript-ink text-manuscript-parchmentLight font-manuscriptBody text-[13px] font-bold tracking-wider uppercase transition-all duration-200 hover:bg-manuscript-walnutDeep shadow-sm"
                  >
                    <span>View Portfolio Evidence</span>
                    <ExternalLink size={14} className="text-manuscript-gold" />
                  </button>
                  <button
                    onClick={() => navigate('/portfolio')}
                    className="px-5 py-3 rounded border border-manuscript-walnut/30 text-xs font-mono font-bold text-manuscript-ink bg-manuscript-parchmentLight hover:bg-manuscript-parchmentWarm transition-colors"
                  >
                    All Case Studies
                  </button>
                </div>
              </div>

              {/* Stat callout badge */}
              <div className="w-full lg:w-80 p-5 sm:p-6 rounded-2xl bg-manuscript-parchmentWarm/80 border border-manuscript-walnut/20 space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between border-b border-manuscript-walnut/15 pb-2.5">
                  <span className="font-mono text-xs text-manuscript-inkMuted">Client Location</span>
                  <span className="font-mono text-xs text-manuscript-ink font-bold">Bengaluru, India</span>
                </div>
                <div className="flex items-center justify-between border-b border-manuscript-walnut/15 pb-2.5">
                  <span className="font-mono text-xs text-manuscript-inkMuted">Speed Gain</span>
                  <span className="font-mono text-xs text-manuscript-sage font-bold">30x Throughput</span>
                </div>
                <div className="flex items-center justify-between border-b border-manuscript-walnut/15 pb-2.5">
                  <span className="font-mono text-xs text-manuscript-inkMuted">Submission Error</span>
                  <span className="font-mono text-xs text-manuscript-sage font-bold">0% (Zero Rejection)</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-mono text-xs text-manuscript-inkMuted">Human Oversight</span>
                  <span className="font-mono text-xs text-manuscript-copper font-bold">100% Retained</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            09 FAQ SECTION
        ══════════════════════════════════════════════════════ */}
        {industry.faq && industry.faq.length > 0 && (
          <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-12 parchment-surface border-b border-manuscript-parchmentDeep w-full max-w-full overflow-hidden box-border">
            <div className="container mx-auto max-w-3xl">
              <h2 className="heading-manuscript text-3xl md:text-4xl font-normal !text-manuscript-ink text-center mb-8 sm:mb-12">
                Frequently Asked Questions
              </h2>

              <div className="space-y-3 sm:space-y-4">
                {industry.faq.map((item, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-manuscript-walnut/20 bg-[#FFFDF9] overflow-hidden shadow-sm"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors hover:bg-manuscript-parchmentWarm/40"
                      >
                        <span className="font-manuscript text-base sm:text-lg font-normal !text-manuscript-ink">
                          {item.question}
                        </span>
                        <ChevronDown
                          size={18}
                          className={`text-manuscript-copper transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
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
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════
            10 THE KILLER CTA: SHOW US THE WORK
        ══════════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-12 parchment-surface--deep text-center relative overflow-hidden border-t border-manuscript-parchmentDeep w-full max-w-full box-border">
          <div className="container mx-auto max-w-3xl relative z-10 space-y-6 sm:space-y-8">
            <span className="chapter-eyebrow font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] text-manuscript-copper font-bold block">
              Start With One Workflow
            </span>

            <h2 className="heading-manuscript text-4xl sm:text-6xl md:text-7xl font-normal !text-manuscript-ink tracking-tight leading-none">
              Show us the work.
            </h2>

            <p className="font-manuscriptBody text-base sm:text-lg md:text-2xl text-manuscript-inkSoft max-w-xl mx-auto leading-relaxed">
              Give us one repetitive workflow your team performs every day. We'll show you where automation can remove the work.
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
                <span>SHOW US YOUR WORKFLOW</span>
                <ArrowRight size={16} className="text-manuscript-gold" />
              </button>
            </div>

            <p className="font-mono text-[10px] sm:text-[11px] text-manuscript-inkMuted tracking-wider uppercase pt-4">
              No long sales presentations · We audit one workflow in 48 hours
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AccountingAutomationPage;
