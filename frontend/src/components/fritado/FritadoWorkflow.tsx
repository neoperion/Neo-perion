import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Share2 } from "lucide-react";
import { trackEvent } from "@/shared/analytics";

/* ─────────────────────────────────────────────────
   WORKFLOW STEPS DATA
   ───────────────────────────────────────────────── */

interface Step {
  id: string;
  num: string;
  label: string;
  headline: string;
  description: string;
  iconSrc: string;
  stat: string;
  statLabel: string;
  details: string[];
}

const STEPS: Step[] = [
  {
    id: "discover",
    num: "01",
    label: "Discover",
    headline: "Target Verified Accounts",
    description:
      "Filters public registries, hiring boards, and tech-stack databases by employee count, modern infrastructure, and capital raises. Automatically checks your CRM to prevent pitching existing clients.",
    iconSrc: "/images/searching.png",
    stat: "1,884",
    statLabel: "accounts/day",
    details: [
      "Live job board & registry scanning",
      "CRM deduplication in real-time",
      "Zero dead inboxes",
    ],
  },
  {
    id: "research",
    num: "02",
    label: "Research",
    headline: "Assemble Deep Context",
    description:
      "Compiles recent funding rounds, open engineering positions, and decision-maker roles into an executive briefing dossier in under 30 seconds before anyone reaches out.",
    iconSrc: "/images/artificial-intelligence.png",
    stat: "30s",
    statLabel: "dossier assembly",
    details: [
      "Funding & milestone tracking",
      "Decision-maker mapping",
      "100% verified registry data",
    ],
  },
  {
    id: "personalize",
    num: "03",
    label: "Personalize",
    headline: "Evidence-Based Outreach",
    description:
      "Prepares customized message openers connected directly to recent company initiatives. Every staged message waits in your rep's review desk with SPF/DKIM domain safeguards.",
    iconSrc: "/images/seen.png",
    stat: "100%",
    statLabel: "rep-approved",
    details: [
      "Context-aware message drafts",
      "SPF/DKIM/DMARC protection",
      "99.4% inbox placement rate",
    ],
  },
  {
    id: "handoff",
    num: "04",
    label: "Handoff",
    headline: "Automated CRM Pipeline",
    description:
      "Monitors replies with instant 2-second sequence auto-pausing and hands off qualified meetings, conversation trails, and opportunity cards directly into HubSpot and Salesforce.",
    iconSrc: "/images/pipeline.png",
    stat: "2s",
    statLabel: "reply detection",
    details: [
      "Instant sequence auto-pause",
      "Bi-directional CRM sync",
      "Meeting handoff to AE",
    ],
  },
];

/* ─────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────── */

export const FritadoWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const current = STEPS[activeStep];

  return (
    <section
      id="overview"
      className="relative scroll-mt-24 py-14 sm:py-20 lg:py-24 border-b border-manuscript-parchmentDeep bg-manuscript-parchment text-manuscript-ink font-sans overflow-hidden"
    >
      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6">

        {/* ─── SECTION HEADER ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 lg:mb-12"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-manuscriptAlpha-ink-15 text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-manuscript-copper mb-4 shadow-2xs">
              <Share2 size={12} className="text-manuscript-copper" />
              <span>HOW IT WORKS</span>
            </div>

            <h2 className="font-manuscript text-3xl sm:text-4xl lg:text-5xl font-bold text-manuscript-ink tracking-tight leading-[1.12]">
              We've orchestrated <br />
              <span className="text-manuscript-copper">Growth Intelligence.</span>
            </h2>
          </div>
        </motion.div>

        {/* ─── DESKTOP: Left tabs + Right detail panel ─── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:grid md:grid-cols-[320px_1fr] lg:grid-cols-[360px_1fr] gap-0 rounded-2xl border border-manuscriptAlpha-ink-15 bg-white shadow-[0_16px_48px_rgba(80,55,30,0.06)] overflow-hidden"
        >
          {/* Left: Step tabs */}
          <div className="border-r border-manuscriptAlpha-ink-10 bg-manuscript-parchmentLight/40">
            {STEPS.map((step, idx) => {
              const Icon = step.iconSrc;
              const isActive = activeStep === idx;
              const isPast = idx < activeStep;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => {
                    setActiveStep(idx);
                    trackEvent("fritado_workflow_card_select", {
                      step: step.label,
                      stepNum: step.num,
                    });
                  }}
                  className={`w-full text-left p-5 lg:p-6 border-b border-manuscriptAlpha-ink-10 last:border-b-0 transition-all duration-200 group relative ${
                    isActive
                      ? "bg-white"
                      : "hover:bg-white/60"
                  }`}
                >
                  {/* Active indicator bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-manuscript-copper rounded-r"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div className="flex items-start gap-3.5">
                    {/* Step number circle */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
                        isActive
                          ? "bg-manuscript-copper text-white shadow-sm"
                          : isPast
                            ? "bg-manuscript-copper/10 text-manuscript-copper"
                            : "bg-manuscript-parchmentLight text-manuscript-inkMuted group-hover:text-manuscript-copper"
                      }`}
                    >
                      {isPast ? (
                        <CheckCircle2 size={18} />
                      ) : (
                        <span className="text-sm font-bold font-mono">{step.num}</span>
                      )}
                    </div>

                    <div className="min-w-0 pt-0.5">
                      <div className={`text-[11px] font-bold uppercase tracking-wider mb-0.5 transition-colors ${
                        isActive ? "text-manuscript-copper" : "text-manuscript-inkMuted"
                      }`}>
                        {step.label}
                      </div>
                      <div className={`text-[14px] font-bold leading-snug transition-colors ${
                        isActive ? "text-manuscript-ink" : "text-manuscript-ink/70 group-hover:text-manuscript-ink"
                      }`}>
                        {step.headline}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detail panel */}
          <div className="p-6 lg:p-8 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                {/* Top: Icon + Eyebrow */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-manuscript-copper/10 border border-manuscript-copper/20 flex items-center justify-center p-2">
                    <img src={current.iconSrc} alt={current.label} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-manuscript-copper uppercase tracking-wider">
                      Step {current.num}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold text-manuscript-ink tracking-tight leading-snug font-manuscript">
                      {current.headline}
                    </h3>
                  </div>
                </div>

                {/* Big stat */}
                <div className="flex items-baseline gap-3 p-5 rounded-xl bg-manuscript-parchmentLight/60 border border-manuscriptAlpha-ink-10">
                  <span className="text-4xl lg:text-5xl font-bold text-manuscript-copper tracking-tight font-mono">
                    {current.stat}
                  </span>
                  <span className="text-sm text-manuscript-inkMuted font-medium">
                    {current.statLabel}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[14px] lg:text-[15px] text-manuscript-inkMuted leading-relaxed font-manuscriptBody">
                  {current.description}
                </p>

                {/* Detail checklist */}
                <div className="space-y-2.5">
                  {current.details.map((detail, i) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                      className="flex items-center gap-2.5"
                    >
                      <div className="w-5 h-5 rounded-full bg-manuscript-copper/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-manuscript-copper" />
                      </div>
                      <span className="text-[13px] text-manuscript-ink font-medium">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom navigation */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-manuscriptAlpha-ink-10">
              <div className="flex items-center gap-1.5">
                {STEPS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveStep(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeStep === i
                        ? "w-6 bg-manuscript-copper"
                        : "w-1.5 bg-manuscriptAlpha-ink-20 hover:bg-manuscript-copper/40"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActiveStep((p) => (p + 1) % STEPS.length)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-manuscript-copper hover:text-manuscript-copperDeep transition-colors group"
              >
                <span>{activeStep < STEPS.length - 1 ? "Next Step" : "Back to Start"}</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* ─── MOBILE: Stacked cards ─── */}
        <div className="md:hidden space-y-3">
          {STEPS.map((step, idx) => {
            const Icon = step.iconSrc;
            const isActive = activeStep === idx;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <button
                  type="button"
                  onClick={() => setActiveStep(isActive ? -1 : idx)}
                  className={`w-full text-left rounded-xl border transition-all duration-300 overflow-hidden ${
                    isActive
                      ? "bg-white border-manuscript-copper/30 shadow-md"
                      : "bg-white/80 border-manuscriptAlpha-ink-10 hover:border-manuscript-copper/30"
                  }`}
                >
                  {/* Header row — always visible */}
                  <div className="flex items-center gap-3 p-4">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-manuscript-copper text-white"
                          : "bg-manuscript-parchmentLight text-manuscript-inkMuted"
                      }`}
                    >
                      <span className="text-xs font-bold font-mono">{step.num}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-[10px] font-bold uppercase tracking-wider ${
                        isActive ? "text-manuscript-copper" : "text-manuscript-inkMuted"
                      }`}>
                        {step.label}
                      </div>
                      <div className="text-[13px] font-bold text-manuscript-ink leading-snug truncate">
                        {step.headline}
                      </div>
                    </div>
                    <div className={`transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-manuscript-inkMuted">
                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Expandable content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 space-y-3">
                          {/* Stat highlight */}
                          <div className="flex items-baseline gap-2 p-3 rounded-lg bg-manuscript-parchmentLight/60 border border-manuscriptAlpha-ink-10">
                            <span className="text-2xl font-bold text-manuscript-copper tracking-tight font-mono">
                              {step.stat}
                            </span>
                            <span className="text-[11px] text-manuscript-inkMuted font-medium">
                              {step.statLabel}
                            </span>
                          </div>

                          <p className="text-xs text-manuscript-inkMuted leading-relaxed font-manuscriptBody">
                            {step.description}
                          </p>

                          {/* Checklist */}
                          <div className="space-y-1.5">
                            {step.details.map((detail) => (
                              <div key={detail} className="flex items-center gap-2">
                                <CheckCircle2 size={12} className="text-manuscript-copper shrink-0" />
                                <span className="text-[11px] text-manuscript-ink font-medium">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
};
