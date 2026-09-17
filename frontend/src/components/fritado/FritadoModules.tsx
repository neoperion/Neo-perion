import React, { useState } from "react";
import { 
  ArrowRight, 
  ChevronDown, 
  ShieldCheck, 
  Check,
  Cpu
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fritadoConfig } from "@/data/fritadoConfig";
import { trackEvent } from "@/shared/analytics";

interface CapabilityItem {
  num: string;
  title: string;
  oneLiner: string;
  specs: string[];
  governanceNote: string;
  auditStatus: string;
  operationalCheck: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    num: "01",
    title: "Lead Flow",
    oneLiner: "AI-powered prospect discovery.",
    specs: [
      "Custom ICP attribute weighting across headcount, funding rounds, tech stack, and hiring signals",
      "Automated deduplication against your internal CRM records and active accounts",
      "Continuous verification against multi-source business registries",
    ],
    governanceNote: "Account matching governed by customer-configured exclusion rules and verified registry signals.",
    auditStatus: "VERIFIED",
    operationalCheck: "Live ICP Score Calibration",
  },
  {
    num: "02",
    title: "AI Research",
    oneLiner: "Account and prospect intelligence.",
    specs: [
      "Automated synthesis of quarterly earnings, tech stack migration, and open engineering positions",
      "Maps true problem owners based on verified organizational scope and direct budget authority",
      "Supplies contextual talking points directly connecting your product to active corporate initiatives",
    ],
    governanceNote: "Indexes verified public filings, corporate disclosures, and professional business registries.",
    auditStatus: "VERIFIED",
    operationalCheck: "30-Second Executive Dossier Assembly",
  },
  {
    num: "03",
    title: "Outreach",
    oneLiner: "Contextual outbound communication with human review.",
    specs: [
      "Ties opening message angles to verified company triggers rather than generic AI pitch templates",
      "Keeps your sales reps in full control with one-click review, quick inline edits, or manual approval",
      "Real-time reply listener detects incoming responses and halts follow-ups across all channels in under 2s",
    ],
    governanceNote: "Domain protection active: enforces strict SPF, DKIM, and DMARC alignment with human send pacing.",
    auditStatus: "VERIFIED",
    operationalCheck: "Human Review Gate & Sender Domain Guard",
  },
  {
    num: "04",
    title: "Nurture",
    oneLiner: "Intelligent follow-up sequences with instant 2s cutoff.",
    specs: [
      "Coordinates natural cadence follow-ups across email and verified social touchpoints",
      "Instant 2-second reply listener auto-pauses pending touches the moment a prospect responds",
      "Protects domain reputation with humanized send pacing and real-time deliverability checks",
    ],
    governanceNote: "Platform safety active: respects sender volume pacing and anti-spam protocols.",
    auditStatus: "VERIFIED",
    operationalCheck: "Instant 2-Second Sequence Cutoff",
  },
  {
    num: "05",
    title: "Qualification",
    oneLiner: "Pass genuinely interested, review-ready accounts to sales.",
    specs: [
      "Scores buyer readiness based on real engagement, verified decision-making authority, and budget fit",
      "Delivers clean opportunity cards with full context dossiers directly into Salesforce, HubSpot, or custom CRM",
      "Maintains complete touchpoint timeline so account executives can run high-context discovery meetings",
    ],
    governanceNote: "Deterministic qualification rules: your sales team configures exact criteria for accepted demos.",
    auditStatus: "VERIFIED",
    operationalCheck: "Bi-Directional CRM Pipeline Synchronization",
  },
  {
    num: "06",
    title: "Intelligence",
    oneLiner: "Context-aware decision support and unified signal synthesis.",
    specs: [
      "Combines website intent, tech stack shifts, and hiring signals into unified account fit scoring",
      "Alerts sales reps the moment a high-value account visits your pricing or documentation pages",
      "Provides transparent attribution on which messaging angles generate closed pipeline and pipeline revenue",
    ],
    governanceNote: "Grounding constraint active: strictly zero invented features or hallucinated answers.",
    auditStatus: "VERIFIED",
    operationalCheck: "Live Signal Correlator & Intent Gate",
  },
];

export const FritadoModules: React.FC = () => {
  // Single active accordion: null or index. Default: 0 (Lead Flow open for high-value immediate impact)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    const nextIndex = expandedIndex === index ? null : index;
    setExpandedIndex(nextIndex);
    if (nextIndex !== null) {
      trackEvent("fritado_capability_expand", {
        product: "fritado",
        capability: CAPABILITIES[nextIndex].title,
      });
    }
  };

  const handleAction = (title: string) => {
    trackEvent("fritado_capability_cta_click", {
      product: "fritado",
      capability: title,
      destination: fritadoConfig.primaryUrl,
    });
    window.open(fritadoConfig.primaryUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section 
      id="capabilities" 
      className="relative scroll-mt-24 py-14 sm:py-20 lg:py-24 border-b border-manuscript-parchmentDeep bg-manuscript-parchment text-manuscript-ink font-sans overflow-hidden"
    >
      {/* ─── AMBIENT MINIMALIST PROFESSIONAL BACKGROUND IMAGE ─── */}
      <div 
        className="absolute inset-0 bg-[url('/images/fritado-engine-bg.jpg')] bg-cover bg-center opacity-25 mix-blend-multiply pointer-events-none"
        aria-hidden="true"
      />
      {/* Radial soft vignette */}
      <div 
        className="absolute inset-0 bg-radial-vignette opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header with Staggered Viewport Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-manuscript-copper">
                CAPABILITIES
              </span>
              <span className="text-manuscript-inkMuted/40">/</span>
              <span className="font-sans text-[11px] uppercase tracking-wider text-manuscript-inkMuted font-semibold">
                SECTION 03 · THE SALES ENGINE
              </span>
            </div>
            <h2 className="font-manuscript text-3xl sm:text-4xl lg:text-5xl font-bold text-manuscript-ink tracking-tight leading-tight">
              Capabilities built for real conversations, not automated spam.
            </h2>
            <p className="mt-3 font-manuscriptBody text-sm sm:text-base lg:text-lg text-manuscript-inkMuted leading-relaxed">
              Six focused modules covering every stage of pipeline generation—from finding verified buyers to delivering warm meetings straight into your CRM.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-start md:self-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/90 backdrop-blur-sm border border-manuscriptAlpha-ink-15 text-xs text-manuscript-ink shadow-2xs">
              <Cpu size={14} className="text-manuscript-copper" />
              <span className="font-sans font-semibold">6 Enterprise Modules</span>
              <span className="text-manuscript-inkMuted/40">·</span>
              <span className="text-manuscript-copper font-medium text-[11px]">Rep-Governed</span>
            </div>
          </div>
        </motion.div>

        {/* ─── ENTERPRISE CAPABILITY MODULE ACCORDION (Single-Open, Smooth 450ms Expand) ─── */}
        <div className="bg-white rounded-2xl border border-manuscriptAlpha-ink-15 shadow-[0_4px_30px_rgba(80,55,30,0.04)] divide-y divide-manuscriptAlpha-ink-10 overflow-hidden">
          {CAPABILITIES.map((cap, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div 
                key={cap.num}
                className={`transition-colors duration-200 ${
                  isExpanded ? "bg-white" : "hover:bg-manuscript-parchmentLight/40"
                }`}
              >
                {/* Accordion Row Header */}
                <button
                  type="button"
                  onClick={() => toggleExpand(idx)}
                  className="w-full py-5 px-5 sm:px-8 flex items-center justify-between gap-4 text-left group focus:outline-none focus-visible:bg-manuscript-parchmentLight/50"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6 min-w-0">
                    {/* Number with Copper Highlight */}
                    <span className="font-sans text-base sm:text-lg font-bold text-manuscript-copper group-hover:scale-105 transition-transform shrink-0">
                      {cap.num}
                    </span>

                    {/* Title & One-Liner */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 min-w-0">
                      <span className="font-sans text-base sm:text-lg font-bold text-manuscript-ink group-hover:text-manuscript-copper transition-colors shrink-0">
                        {cap.title}
                      </span>
                      <span className="hidden sm:inline text-manuscript-inkMuted/40">·</span>
                      <span className="font-manuscriptBody text-xs sm:text-sm text-manuscript-inkMuted truncate">
                        {cap.oneLiner}
                      </span>
                    </div>
                  </div>

                  {/* Toggle Button / Label + Smooth Rotating Arrow (0 -> 180deg) */}
                  <div className="shrink-0 flex items-center gap-2 sm:gap-3">
                    <span className="font-sans text-[11px] sm:text-xs font-bold uppercase tracking-wider text-manuscript-inkMuted group-hover:text-manuscript-copper transition-colors">
                      {isExpanded ? "CLOSE" : "VIEW DETAILS"}
                    </span>
                    <motion.div 
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                        isExpanded 
                          ? "bg-manuscript-copper text-white shadow-xs" 
                          : "bg-manuscript-parchmentLight border border-manuscriptAlpha-ink-15 text-manuscript-ink group-hover:border-manuscript-copper group-hover:text-manuscript-copper"
                      }`}
                    >
                      <ChevronDown size={15} />
                    </motion.div>
                  </div>
                </button>

                {/* Expanded Capability Drawer with Smooth Height & Content Reveal */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="accordion-drawer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: 8, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 8, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="px-5 sm:px-8 pb-7 pt-2 border-t border-manuscriptAlpha-ink-10 bg-white"
                      >
                        {cap.num === "01" ? (
                          /* ─── LEAD FLOW: RESPONSIVE DESKTOP & MOBILE INFOGRAPHIC IMAGES ─── */
                          <div className="pt-4 space-y-4">
                            {/* Desktop View (md and above) */}
                            <div className="hidden md:block w-full rounded-2xl overflow-hidden bg-white border border-manuscriptAlpha-ink-15 shadow-xs p-2 sm:p-4">
                              <img 
                                src="/images/lead-flow-desktop.png" 
                                alt="Lead Flow AI-Powered Prospect Discovery Architecture" 
                                className="w-full h-auto object-contain rounded-xl max-h-[620px] mx-auto"
                                loading="lazy"
                              />
                            </div>

                            {/* Mobile View (below md) - Natural Document Flow, Zero Scroll Trapping */}
                            <div className="block md:hidden w-full rounded-2xl overflow-hidden bg-white border border-manuscriptAlpha-ink-15 shadow-xs p-2">
                              <img 
                                src="/images/lead-flow-mobile.png" 
                                alt="Lead Flow AI-Powered Prospect Discovery Architecture" 
                                className="w-full h-auto object-contain rounded-xl mx-auto"
                                loading="lazy"
                              />
                            </div>

                            {/* Operational Action Bar for Lead Flow */}
                            <div className="pt-3 border-t border-manuscriptAlpha-ink-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                              <span className="font-manuscriptBody text-manuscript-inkMuted text-[11px]">
                                Multi-source business registry calibration · CRM automated deduplication active
                              </span>
                              <button
                                type="button"
                                onClick={() => handleAction(cap.title)}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-manuscript-ink text-white hover:bg-manuscript-copper transition-colors duration-150 text-xs font-bold font-sans uppercase tracking-wider group shadow-sm active:scale-[0.98]"
                              >
                                <span>EXPLORE IN FRITADO</span>
                                <ArrowRight size={13} className="transition-transform duration-150 group-hover:translate-x-1" />
                              </button>
                            </div>
                          </div>
                        ) : cap.num === "02" ? (
                          /* ─── AI RESEARCH: RESPONSIVE DESKTOP & MOBILE INFOGRAPHIC IMAGES ─── */
                          <div className="pt-4 space-y-4">
                            {/* Desktop View (md and above) */}
                            <div className="hidden md:block w-full rounded-2xl overflow-hidden bg-white border border-manuscriptAlpha-ink-15 shadow-xs p-2 sm:p-4">
                              <img 
                                src="/images/ai-research-desktop.png" 
                                alt="AI Research Account and Prospect Intelligence Architecture" 
                                className="w-full h-auto object-contain rounded-xl max-h-[620px] mx-auto"
                                loading="lazy"
                              />
                            </div>

                            {/* Mobile View (below md) - Natural Document Flow, Zero Scroll Trapping */}
                            <div className="block md:hidden w-full rounded-2xl overflow-hidden bg-white border border-manuscriptAlpha-ink-15 shadow-xs p-2">
                              <img 
                                src="/images/ai-research-mobile.png" 
                                alt="AI Research Account and Prospect Intelligence Architecture" 
                                className="w-full h-auto object-contain rounded-xl mx-auto"
                                loading="lazy"
                              />
                            </div>

                            {/* Operational Action Bar for AI Research */}
                            <div className="pt-3 border-t border-manuscriptAlpha-ink-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                              <span className="font-manuscriptBody text-manuscript-inkMuted text-[11px]">
                                30-second executive dossier assembly · 100% verified registry &amp; signal synthesis
                              </span>
                              <button
                                type="button"
                                onClick={() => handleAction(cap.title)}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-manuscript-ink text-white hover:bg-manuscript-copper transition-colors duration-150 text-xs font-bold font-sans uppercase tracking-wider group shadow-sm active:scale-[0.98]"
                              >
                                <span>EXPLORE IN FRITADO</span>
                                <ArrowRight size={13} className="transition-transform duration-150 group-hover:translate-x-1" />
                              </button>
                            </div>
                          </div>
                        ) : (
                          /* ─── OTHER CAPABILITIES (03–06): SPECIFICATION & AUDIT CARD DRAWER ─── */
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-4 items-start">
                            {/* Left: Capability Specifications (8 Cols) */}
                            <div className="lg:col-span-8 space-y-4">
                              <span className="text-[11px] font-sans uppercase tracking-wider text-manuscript-inkSoft font-bold block">
                                CAPABILITY SPECIFICATIONS:
                              </span>

                              <div className="space-y-2.5">
                                {cap.specs.map((spec, sIdx) => (
                                  <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-manuscript-ink">
                                    <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper mt-2 shrink-0" />
                                    <span className="font-manuscriptBody leading-relaxed">{spec}</span>
                                  </div>
                                ))}
                              </div>

                              {/* Governance Footnote with Shield */}
                              <div className="pt-3 border-t border-manuscriptAlpha-ink-10 flex items-center gap-2 text-xs text-manuscript-inkMuted">
                                <ShieldCheck size={14} className="text-manuscript-copper shrink-0" />
                                <span className="font-manuscriptBody italic">{cap.governanceNote}</span>
                              </div>
                            </div>

                            {/* Right: Operational Status Card (4 Cols) */}
                            <div className="lg:col-span-4 p-5 rounded-2xl bg-manuscript-parchment border border-manuscriptAlpha-ink-10 shadow-2xs space-y-4">
                              <div className="flex items-center justify-between text-xs font-sans">
                                <span className="text-manuscript-inkMuted uppercase tracking-wider font-semibold text-[11px]">
                                  AUDIT STATUS
                                </span>
                                <span className="inline-flex items-center gap-1 font-bold text-manuscript-copper bg-manuscript-copper/10 px-2.5 py-0.5 rounded border border-manuscript-copper/25 text-[10px] tracking-wider uppercase">
                                  <Check size={11} strokeWidth={2.5} className="text-manuscript-copper" />
                                  {cap.auditStatus}
                                </span>
                              </div>

                              <div>
                                <div className="text-xs text-manuscript-inkMuted font-sans">
                                  Operational Check
                                </div>
                                <div className="text-sm sm:text-base font-bold text-manuscript-ink font-sans mt-0.5 leading-snug">
                                  {cap.operationalCheck}
                                </div>
                              </div>

                              <button
                                type="button"
                                onClick={() => handleAction(cap.title)}
                                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-manuscript-ink text-white hover:bg-manuscript-copper transition-colors duration-150 text-xs font-bold font-sans uppercase tracking-wider group shadow-sm active:scale-[0.98]"
                              >
                                <span>EXPLORE IN FRITADO</span>
                                <ArrowRight size={13} className="transition-transform duration-150 group-hover:translate-x-1" />
                              </button>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FritadoModules;
