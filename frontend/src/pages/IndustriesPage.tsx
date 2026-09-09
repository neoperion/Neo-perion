import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { seoConfig } from '@/lib/seoConfig';

/* ─── INDUSTRY NAVIGATION INDEX DATA ─── */
const INDUSTRY_INDEX = [
  {
    num: '01',
    id: 'education',
    name: 'Education & EdTech',
    desc: 'Adaptive learning platforms, syllabus-grounded AI tutors, and assessment integrity engines.',
    tags: 'Adaptive LMS · Socratic Assistants · Student Telemetry · Rubric Grading',
    link: '/industries/education',
  },
  {
    num: '02',
    id: 'startups',
    name: 'Startups & Founders',
    desc: 'Rapid, disciplined MVP and product engineering with resilient architecture and zero throwaway code.',
    tags: 'Architecture & ERD · Core MVP Sprints · Billing Webhooks · Launch Hardening',
    link: '/industries/startups',
  },
  {
    num: '03',
    id: 'smbs',
    name: 'SMBs & Enterprise',
    desc: 'Digitizing operational bottlenecks across invoicing, multi-location inventory, and field dispatch.',
    tags: 'Invoicing Automation · Stock Telemetry · Operations Dispatch · Central Sync',
    link: '/industries/smbs',
  },
  {
    num: '04',
    id: 'accounting',
    name: 'Business Registration & Accounting Automation',
    desc: 'Statutory compliance software for Indian corporate filings, MCA V3, GST pipelines, and OCR extraction.',
    tags: 'Intelligent OCR · MCA Pre-Validation · SPICe+ Payloads · ROC Sentinel',
    link: '/industries/accounting-automation',
  },
];

/* ─── 01. EDITORIAL HERO ─── */
const EditorialHero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-36 sm:pt-44 md:pt-48 pb-20 sm:pb-28 md:pb-32 overflow-hidden border-b border-[#D8D0C3]">
      {/* Subtle architectural coordinate grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(to right, #D8D0C3 1px, transparent 1px), linear-gradient(to bottom, #D8D0C3 1px, transparent 1px)',
          backgroundSize: '5rem 5rem',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 70%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          {/* Restrained Sector Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#A94A2D]" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A94A2D]">
              SECTOR SYSTEMS &amp; WORKFLOW ENGINEERING
            </span>
          </div>

          {/* Primary Heading */}
          <h1 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] text-[#171511] tracking-tight">
            Software built around{' '}
            <span className="font-sans font-bold text-[#A94A2D] block sm:inline">
              how your industry works.
            </span>
          </h1>

          {/* Supporting Editorial Copy */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#6F675D] max-w-2xl leading-relaxed mt-6 sm:mt-8">
            We design and engineer digital products around the workflows, constraints, and opportunities that make every industry different.
          </p>

          {/* Hero Quick Jump Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-8 sm:pt-10">
            <button
              onClick={() => scrollToSection('industry-index')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#171511] text-[#FCFBF7] font-sans text-xs font-semibold uppercase tracking-wider transition-all hover:bg-[#332E27] active:scale-[0.98]"
            >
              <span>Explore Sector Index</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#A94A2D]" />
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded border border-[#D8D0C3] bg-[#FCFBF7] text-[#171511] font-sans text-xs font-semibold uppercase tracking-wider transition-colors hover:border-[#A94A2D] hover:text-[#A94A2D]"
            >
              <span>Discuss Your Workflow</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── 02. FULL-WIDTH EDITORIAL INDUSTRY INDEX ─── */
const EditorialIndustryIndex: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="industry-index" className="border-b border-[#D8D0C3] bg-[#FCFBF7]">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-6xl py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#D8D0C3] gap-4">
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A94A2D] mb-2">
              TABLE OF CONTENTS
            </p>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#171511] tracking-tight">
              Industry Practice Areas
            </h2>
          </div>
          <span className="font-sans text-xs text-[#6F675D]">
            04 Core Engineering Disciplines
          </span>
        </div>

        {/* ── Desktop Full-Width Editorial Rows ── */}
        <div className="hidden md:block divide-y divide-[#D8D0C3]">
          {INDUSTRY_INDEX.map((item) => (
            <button
              key={item.num}
              onClick={() => scrollToSection(item.id)}
              className="group w-full py-8 text-left grid grid-cols-12 gap-8 items-center transition-colors duration-200 hover:bg-[#F5F1E8]/50 px-4 -mx-4 rounded-lg cursor-pointer"
            >
              <div className="col-span-1">
                <span className="font-sans font-bold text-sm text-[#A94A2D] tracking-wider">
                  {item.num}
                </span>
              </div>
              <div className="col-span-4">
                <h3 className="font-sans font-bold text-2xl lg:text-[26px] text-[#171511] group-hover:text-[#A94A2D] transition-colors leading-snug">
                  {item.name}
                </h3>
              </div>
              <div className="col-span-6 space-y-1">
                <p className="font-sans text-[14px] text-[#6F675D] leading-relaxed">
                  {item.desc}
                </p>
                <span className="font-sans text-[11px] font-medium text-[#A94A2D]/80 block tracking-wide">
                  {item.tags}
                </span>
              </div>
              <div className="col-span-1 flex justify-end">
                <span className="w-9 h-9 rounded-full border border-[#D8D0C3] flex items-center justify-center text-[#171511] group-hover:border-[#A94A2D] group-hover:bg-[#A94A2D] group-hover:text-[#FCFBF7] transition-all duration-200">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* ── Mobile Clean Editorial Rows (Single Column, No Cards) ── */}
        <div className="md:hidden divide-y divide-[#D8D0C3]">
          {INDUSTRY_INDEX.map((item) => (
            <button
              key={item.num}
              onClick={() => scrollToSection(item.id)}
              className="w-full py-6 text-left flex items-start justify-between gap-4 active:bg-[#F5F1E8]/60 transition-colors"
            >
              <div className="space-y-1.5 min-w-0 pr-2">
                <span className="font-sans font-bold text-xs text-[#A94A2D]">
                  {item.num}
                </span>
                <h3 className="font-sans font-bold text-xl text-[#171511] leading-tight">
                  {item.name}
                </h3>
                <p className="font-sans text-[13px] text-[#6F675D] leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="pt-2 shrink-0">
                <span className="w-8 h-8 rounded-full border border-[#D8D0C3] flex items-center justify-center text-[#171511]">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── 03. SECTION 01: EDUCATION & EDTECH ─── */
const EducationSection: React.FC = () => {
  const capabilities = [
    {
      title: 'Adaptive LMS Platforms',
      description: 'Multi-tenant institutional architecture with real-time difficulty scaling, custom grading rules, and individualized student pacing tracks.',
    },
    {
      title: 'Student Analytics & Early Intervention',
      description: 'Cohort engagement telemetry that alerts faculty advisors to subtle drop-offs in quiz engagement and reading persistence weeks before midterm failure.',
    },
    {
      title: 'AI Learning Assistants',
      description: 'Curriculum-grounded conversational tutors operating under strict citation guardrails to guide student inquiry step-by-step without providing raw answers.',
    },
    {
      title: 'Assessment & Integrity Engines',
      description: 'Parametric unique question generation, automated rubric-driven essay evaluation, and instant synchronization with campus registrar gradebooks.',
    },
    {
      title: 'Campus & School Management',
      description: 'Unified administrative operations automating student enrollment, fee collections, faculty allocation, and bi-directional SIS/LTI 1.3 integrations.',
    },
  ];

  return (
    <section id="education" className="py-20 sm:py-28 md:py-36 border-b border-[#D8D0C3] relative">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Real Problem & Domain Context */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A94A2D] block mb-3">
                01 / SECTOR DOSSIER
              </span>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#171511] leading-[1.12]">
                Education &amp; EdTech
              </h2>
            </div>

            <div className="space-y-4 font-sans text-[15px] sm:text-[16px] text-[#6F675D] leading-relaxed">
              <p>
                <strong className="text-[#171511] font-semibold block mb-1">The Real Problem:</strong>
                Most learning software functions as passive administrative storage—hosting static PDFs and pre-recorded videos. Meanwhile, educators spend over a third of their time grading repetitive coursework, while students who struggle slip through unnoticed until exam failures arrive too late.
              </p>
              <p>
                <strong className="text-[#171511] font-semibold block mb-1">How We Help:</strong>
                We engineer active, context-aware digital learning systems that interface directly with existing university and school infrastructure. We replace passive content dumps with adaptive difficulty engines, syllabus-grounded Socratic tutors, and objective assessment pipelines.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/industries/education"
                className="group inline-flex items-center gap-2 font-sans font-semibold text-[14px] text-[#A94A2D] hover:text-[#171511] transition-colors"
              >
                <span>Explore Education &amp; EdTech Architecture</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Structured Capability Ledger */}
          <div className="lg:col-span-7">
            <div className="border-t border-[#D8D0C3] divide-y divide-[#D8D0C3]">
              {capabilities.map((cap, idx) => (
                <div key={idx} className="py-5 sm:py-6">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-sans font-bold text-base sm:text-lg text-[#171511]">
                      {cap.title}
                    </h3>
                    <span className="font-sans text-xs text-[#A94A2D] font-medium shrink-0">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="font-sans text-sm sm:text-[15px] text-[#6F675D] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── 04. SECTION 02: STARTUPS & FOUNDERS ─── */
const StartupsSection: React.FC = () => {
  const sprintPhases = [
    {
      phase: 'PHASE 01',
      duration: 'Week 1',
      title: 'Scoping & Domain Architecture',
      deliverables: [
        'Entity Relationship Diagrams (ERD) & database schema',
        'Strict API contracts & backend route definitions',
        'Click-through high-fidelity user workflows',
        'Cloud infrastructure & continuous deployment topology',
      ],
      focus: 'Lock technical scope and eliminate architectural ambiguity before writing production code.',
    },
    {
      phase: 'PHASE 02',
      duration: 'Weeks 2–3',
      title: 'Core Product Engineering',
      deliverables: [
        'Multi-tenant database implementation & indexing',
        'Enterprise auth & role-based access controls',
        'Payment gateway integration & webhook handlers',
        'Weekly staging builds released directly to founders',
      ],
      focus: 'Engineer the critical value path with clean, type-safe code and zero throwaway prototypes.',
    },
    {
      phase: 'PHASE 03',
      duration: 'Week 4',
      title: 'Hardening & Production Launch',
      deliverables: [
        'End-to-end automated testing & security audit',
        'User event telemetry, logging & error tracking',
        'Production cloud deployment & App Store submission',
        'Technical documentation ready for investor diligence',
      ],
      focus: 'Ensure launch readiness capable of withstanding real user traction and investor scrutiny.',
    },
  ];

  return (
    <section id="startups" className="py-20 sm:py-28 md:py-36 border-b border-[#D8D0C3] bg-[#FCFBF7]">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-6xl">
        {/* Section Headline */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A94A2D] block mb-3">
            02 / SECTOR DOSSIER
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#171511] leading-[1.12] mb-6">
            Startups &amp; Founders
          </h2>
          <div className="space-y-4 font-sans text-[15px] sm:text-[16px] text-[#6F675D] leading-relaxed">
            <p>
              <strong className="text-[#171511] font-semibold block mb-1">The Real Problem:</strong>
              Early-stage founders are caught between slow enterprise agencies that require six months and extensive budgets just to deliver wireframes, and cheap freelance shortcuts that result in fragile systems that collapse under early traffic.
            </p>
            <p>
              <strong className="text-[#171511] font-semibold block mb-1">How We Help:</strong>
              We operate as a high-velocity product engineering unit. We define your core architectural leverage, build a resilient data foundation, and ship complete, production-grade web and mobile applications in disciplined four-week sprint cycles.
            </p>
          </div>
          <div className="pt-4">
            <Link
              to="/industries/startups"
              className="group inline-flex items-center gap-2 font-sans font-semibold text-[14px] text-[#A94A2D] hover:text-[#171511] transition-colors"
            >
              <span>Explore Startup &amp; Founder Engineering</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3-Phase Execution Matrix (Asymmetric Speed Grid) */}
        <div className="grid md:grid-cols-3 border border-[#D8D0C3] divide-y md:divide-y-0 md:divide-x divide-[#D8D0C3] bg-[#F5F1E8]/30">
          {sprintPhases.map((stage, idx) => (
            <div key={idx} className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D8D0C3]">
                  <span className="font-sans text-[11px] font-bold tracking-widest text-[#A94A2D] uppercase">
                    {stage.phase}
                  </span>
                  <span className="font-sans text-xs text-[#6F675D] font-medium">
                    {stage.duration}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-lg text-[#171511] mb-4">
                  {stage.title}
                </h3>

                <ul className="space-y-2.5 mb-6">
                  {stage.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="font-sans text-xs sm:text-[13px] text-[#6F675D] leading-snug flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#A94A2D] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#D8D0C3]/60">
                <p className="font-sans text-[12px] text-[#171511] font-medium leading-relaxed italic">
                  {stage.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── 05. SECTION 03: SMBS & ENTERPRISE ─── */
const SMBsSection: React.FC = () => {
  const operationsTiers = [
    {
      tier: 'TIER A',
      title: 'Finance & Invoicing Automation',
      friction: 'Manual banking reconciliations, misplaced expense paper trails, and delayed invoice settlements.',
      solution: 'Automated banking feed synchronization, e-way bill generation, recurring billing pipelines, and zero-touch ledger posting.',
      metrics: 'Eliminates duplicate ledger entry and accelerates cash collection cycles.',
    },
    {
      tier: 'TIER B',
      title: 'Inventory & Supply Chain Telemetry',
      friction: 'Discrepancies between warehouse floor counts and order books, causing frequent stockouts or tied-up capital.',
      solution: 'Real-time multi-location SKU tracking, QR/barcode scanning intake workflows, automated reorder triggers, and supplier PO management.',
      metrics: 'Synchronizes physical warehouse operations with digital fulfillment channels.',
    },
    {
      tier: 'TIER C',
      title: 'CRM & Operations Dispatch',
      friction: 'Customer history fragmented across WhatsApp chats, unassigned service tickets, and untracked field technician visits.',
      solution: 'Central customer activity timelines, multi-tier quote approval routing, field technician task dispatching, and branded client self-service portals.',
      metrics: 'Provides management full visibility into pipeline velocity and service SLA fulfillment.',
    },
  ];

  return (
    <section id="smbs" className="py-20 sm:py-28 md:py-36 border-b border-[#D8D0C3] relative">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-6xl">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A94A2D] block mb-3">
            03 / SECTOR DOSSIER
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#171511] leading-[1.12] mb-6">
            SMBs &amp; Enterprise
          </h2>
          <div className="space-y-4 font-sans text-[15px] sm:text-[16px] text-[#6F675D] leading-relaxed">
            <p>
              <strong className="text-[#171511] font-semibold block mb-1">The Real Problem:</strong>
              Growing businesses frequently outgrow generic spreadsheet templates and off-the-shelf software. Critical business information becomes trapped in departmental silos, causing inventory discrepancies, billing delays, and blind operational decisions.
            </p>
            <p>
              <strong className="text-[#171511] font-semibold block mb-1">How We Help:</strong>
              We build purpose-engineered operational bridges. Rather than forcing expensive, multi-year enterprise software overhauls that disrupt your team, we engineer focused custom tools, automated data synchronization pipelines, and unified staff portals that sit on top of your existing workflows.
            </p>
          </div>
          <div className="pt-4">
            <Link
              to="/industries/smbs"
              className="group inline-flex items-center gap-2 font-sans font-semibold text-[14px] text-[#A94A2D] hover:text-[#171511] transition-colors"
            >
              <span>Explore SMB &amp; Enterprise Systems</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3-Tier Enterprise Operations Blueprint */}
        <div className="border-t border-[#D8D0C3] divide-y divide-[#D8D0C3]">
          {operationsTiers.map((tier, idx) => (
            <div key={idx} className="py-8 sm:py-10 grid md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4">
                <span className="font-sans text-[11px] font-bold text-[#A94A2D] tracking-widest uppercase block mb-1">
                  {tier.tier}
                </span>
                <h3 className="font-sans font-bold text-xl text-[#171511]">
                  {tier.title}
                </h3>
              </div>

              <div className="md:col-span-8 space-y-3">
                <div className="font-sans text-sm sm:text-[15px] text-[#6F675D] leading-relaxed">
                  <span className="font-semibold text-[#171511]">Friction Point: </span>
                  {tier.friction}
                </div>
                <div className="font-sans text-sm sm:text-[15px] text-[#171511] leading-relaxed">
                  <span className="font-semibold text-[#A94A2D]">Engineered Workflow: </span>
                  {tier.solution}
                </div>
                <div className="pt-2">
                  <span className="inline-block font-sans text-xs text-[#6F675D] bg-[#FCFBF7] px-3 py-1 rounded border border-[#D8D0C3]">
                    {tier.metrics}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── 06. SECTION 04: BUSINESS REGISTRATION & ACCOUNTING AUTOMATION ─── */
const AccountingSection: React.FC = () => {
  const pipelineStages = [
    {
      step: '01',
      name: 'Intelligent Document Ingestion',
      detail: 'OCR extraction and structured parsing for PAN, Aadhaar, bank statements, MOA/AOA, and board resolutions with instant error flagging.',
    },
    {
      step: '02',
      name: 'Pre-Submission Validation Rules',
      detail: 'Automated verification against MCA name reservation guidelines, director DIN eligibility rules, and GST jurisdiction constraints before submission.',
    },
    {
      step: '03',
      name: 'MCA & GST Filing Orchestration',
      detail: 'Automated payload preparation for SPICe+ (INC-32), Udyam portal registration, and monthly GST return reconciliations (GSTR-1, GSTR-3B).',
    },
    {
      step: '04',
      name: 'Compliance Sentinel & Audit Trail',
      detail: 'Centralized dashboard tracking annual ROC filing calendars, statutory resolution deadlines, and verifiable, tamper-resistant filing logs.',
    },
  ];

  return (
    <section id="accounting" className="py-20 sm:py-28 md:py-36 border-b border-[#D8D0C3] bg-[#FCFBF7]">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Regulatory Context */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A94A2D] block mb-3">
                04 / SECTOR DOSSIER
              </span>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#171511] leading-[1.12]">
                Business Registration &amp; Accounting Automation
              </h2>
            </div>

            <div className="space-y-4 font-sans text-[15px] sm:text-[16px] text-[#6F675D] leading-relaxed">
              <p>
                <strong className="text-[#171511] font-semibold block mb-1">The Real Problem:</strong>
                Statutory registration and corporate compliance in India means managing dozens of fragmented government portals (MCA V3, GSTN, Udyam, DGFT). Chartered accountants and legal teams lose hundreds of billable hours manually re-typing PAN, Aadhaar, DIN, and financial tables across portals prone to server timeouts and unexpected rejections.
              </p>
              <p>
                <strong className="text-[#171511] font-semibold block mb-1">How We Help:</strong>
                We engineer purpose-built compliance software that automates document parsing, optical verification, rule validation, and portal payload formatting—turning high-stress filing cycles into orderly, verifiable, and audit-ready workflows.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/industries/accounting-automation"
                className="group inline-flex items-center gap-2 font-sans font-semibold text-[14px] text-[#A94A2D] hover:text-[#171511] transition-colors"
              >
                <span>Explore Compliance Automation Systems</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Stepwise Regulatory Pipeline */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#171511] border-b border-[#D8D0C3] pb-3">
                Regulatory Execution Pipeline
              </p>

              <div className="border border-[#D8D0C3] divide-y divide-[#D8D0C3] bg-[#F5F1E8]/40">
                {pipelineStages.map((stage) => (
                  <div key={stage.step} className="p-6 flex items-start gap-5">
                    <span className="font-sans font-bold text-lg text-[#A94A2D] shrink-0 pt-0.5">
                      {stage.step}
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-sans font-bold text-base text-[#171511]">
                        {stage.name}
                      </h3>
                      <p className="font-sans text-sm text-[#6F675D] leading-relaxed">
                        {stage.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── 07. EDITORIAL STUDIO CTA ─── */
const EditorialCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 md:py-40 text-center relative overflow-hidden bg-[#F5F1E8]">
      <div className="container mx-auto px-5 sm:px-8 max-w-4xl relative z-10">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A94A2D] block mb-4">
          WORKFLOW COLLABORATION
        </span>

        <h2 className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl text-[#171511] tracking-tight max-w-3xl mx-auto leading-[1.12]">
          Have a workflow worth{' '}
          <span className="font-sans font-bold text-[#A94A2D] block sm:inline">
            building better?
          </span>
        </h2>

        <p className="font-sans text-base sm:text-lg md:text-xl text-[#6F675D] max-w-xl mx-auto leading-relaxed mt-6 mb-10">
          Tell us what you're trying to improve. We'll help turn it into a practical digital product.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded bg-[#171511] text-[#FCFBF7] font-sans text-xs font-bold uppercase tracking-widest hover:bg-[#332E27] active:scale-[0.98] transition-all"
          >
            <span>Start a conversation</span>
            <ArrowRight className="w-4 h-4 text-[#A94A2D]" />
          </Link>

          <Link
            to="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded border border-[#D8D0C3] bg-[#FCFBF7] text-[#171511] font-sans text-xs font-bold uppercase tracking-widest hover:border-[#A94A2D] hover:text-[#A94A2D] transition-colors"
          >
            <span>View our work</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Quality Baseline Bar */}
        <div className="mt-16 pt-8 border-t border-[#D8D0C3] max-w-xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-sans uppercase tracking-widest text-[#6F675D]">
          <span>Senior Product Engineers</span>
          <span>·</span>
          <span>Direct Founder Oversight</span>
          <span>·</span>
          <span>Transparent Sprints</span>
        </div>
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
    <div className="manuscript-root bg-[#F5F1E8] text-[#171511] font-sans min-h-screen w-full max-w-full overflow-x-clip box-border selection:bg-[#A94A2D] selection:text-[#FCFBF7]">
      <SEO {...seoConfig.industries} />
      <Header theme="manuscript" />

      <main className="w-full max-w-full overflow-x-clip box-border">
        {/* 1. EDITORIAL HERO */}
        <EditorialHero />

        {/* 2. FULL-WIDTH EDITORIAL INDUSTRY INDEX */}
        <EditorialIndustryIndex />

        {/* 3. SECTION 01: EDUCATION & EDTECH */}
        <EducationSection />

        {/* 4. SECTION 02: STARTUPS & FOUNDERS */}
        <StartupsSection />

        {/* 5. SECTION 03: SMBS & ENTERPRISE */}
        <SMBsSection />

        {/* 6. SECTION 04: BUSINESS REGISTRATION & ACCOUNTING AUTOMATION */}
        <AccountingSection />

        {/* 7. FINAL EDITORIAL CTA */}
        <EditorialCTA />
      </main>

      <Footer />
    </div>
  );
};

export default IndustriesPage;
