import React, { useState } from "react";
import { 
  ArrowRight, 
  ShieldCheck, 
  Sliders, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  SendHorizontal, 
  Database, 
  Layers
} from "lucide-react";
import { fritadoConfig } from "@/data/fritadoConfig";
import { trackEvent } from "@/shared/analytics";

export const FritadoHeroVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: "01. Signal Intake",
      label: "Criteria & Triggers",
      desc: "Discovers target accounts matching ICP constraints and monitors real-world commercial signals.",
      badge: "Account Discovery",
      icon: Search,
      metrics: ["ICP Constraints", "Hiring Velocity", "Tech Stack Match"]
    },
    {
      title: "02. Context Synthesis",
      label: "Research Briefing",
      desc: "Assembles company milestones, decision-maker background, and genuine reasons for contact.",
      badge: "Intelligence Layer",
      icon: Database,
      metrics: ["Verified Executive", "Timing Rationale", "Value Proposition"]
    },
    {
      title: "03. Review Gate",
      label: "Human Approval",
      desc: "Enforces a mandatory review checkpoint before any communication or campaign step is approved.",
      badge: "Governance Gate",
      icon: ShieldCheck,
      metrics: ["Manual Rep Sign-Off", "Tone & Policy Guard", "No Blind Dispatch"]
    },
    {
      title: "04. Qualified Routing",
      label: "Pipeline Handoff",
      desc: "Routes review-ready opportunities and contextual briefings directly into your team's CRM.",
      badge: "Workflow Sync",
      icon: SendHorizontal,
      metrics: ["CRM Field Sync", "Calendar Booking", "Audit Trail"]
    }
  ];

  const handleAction = () => {
    trackEvent("fritado_hero_visual_cta_click", {
      product: "fritado",
      destination: fritadoConfig.primaryUrl,
    });
    window.open(fritadoConfig.primaryUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full relative">
      {/* Soft warm manuscript shadow */}
      <div className="relative rounded-2xl border border-manuscriptAlpha-ink-15 bg-white/70 backdrop-blur-xl shadow-[0_16px_48px_rgba(80,55,30,0.06)] overflow-hidden">
        {/* Architectural Card Header */}
        <div className="px-5 py-4 border-b border-manuscriptAlpha-ink-10 bg-manuscript-parchmentLight/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-manuscript-copper" />
            <span className="font-sans text-[12px] font-bold tracking-[0.16em] uppercase text-manuscript-copper">
              The Fritado Workflow Engine
            </span>
          </div>
          <span className="font-sans text-[11px] font-semibold text-manuscript-inkMuted bg-manuscriptAlpha-ink-10 px-2.5 py-0.5 rounded-full">
            Standard 001
          </span>
        </div>

        {/* Interactive Step Switcher */}
        <div className="p-5 sm:p-7 space-y-6">
          {/* Step Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-manuscriptAlpha-ink-10 pb-4">
            {steps.map((st, i) => {
              const Icon = st.icon;
              const isSelected = activeStep === i;
              return (
                <button
                  key={st.title}
                  type="button"
                  onClick={() => setActiveStep(i)}
                  className={`p-2.5 rounded-xl text-left transition-all select-none border ${
                    isSelected
                      ? "bg-white border-manuscript-copper shadow-sm text-manuscript-ink"
                      : "bg-transparent border-transparent hover:bg-white/40 text-manuscript-inkMuted"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] font-bold text-manuscript-copper">
                      0{i + 1}
                    </span>
                    <Icon size={13} className={isSelected ? "text-manuscript-copper" : "text-manuscript-inkMuted"} />
                  </div>
                  <p className="font-sans text-[12px] font-bold leading-tight truncate">
                    {st.label}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Canvas */}
          <div className="rounded-xl border border-manuscriptAlpha-ink-10 bg-white/80 p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-manuscriptAlpha-ink-10 pb-3">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-wider font-bold text-manuscript-copper">
                  {steps[activeStep].badge}
                </span>
                <h3 className="font-sans text-base font-bold text-manuscript-ink mt-0.5">
                  {steps[activeStep].title}
                </h3>
              </div>
              <span className="self-start sm:self-auto text-[11px] font-mono text-manuscript-copper bg-manuscript-copper/10 px-2.5 py-0.5 rounded-full font-semibold border border-manuscript-copper/20">
                Verified Stage
              </span>
            </div>

            <p className="font-sans text-[13px] sm:text-[14px] leading-relaxed text-manuscript-inkMuted">
              {steps[activeStep].desc}
            </p>

            {/* Stage Attributes */}
            <div className="pt-1">
              <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-manuscript-inkSoft block mb-2">
                Operational Checks:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {steps[activeStep].metrics.map((m) => (
                  <div
                    key={m}
                    className="flex items-center gap-1.5 p-2 rounded-lg bg-manuscript-parchmentLight/80 border border-manuscriptAlpha-ink-10 text-[11px] font-medium text-manuscript-ink"
                  >
                    <CheckCircle2 size={12} className="text-manuscript-copper shrink-0" />
                    <span className="truncate">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-2 text-[12px] font-sans text-manuscript-inkMuted">
              <ShieldCheck size={15} className="text-manuscript-copper shrink-0" />
              <span>Zero unverified automation. Human control at every stage.</span>
            </div>

            <button
              type="button"
              onClick={handleAction}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-sans text-[13px] font-semibold bg-manuscript-copper text-white hover:bg-manuscript-copperDeep transition-colors shadow-sm"
            >
              <span>Explore Platform</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Footer Sub-Bar */}
        <div className="px-5 py-2.5 bg-manuscript-parchmentLight/50 border-t border-manuscriptAlpha-ink-10 flex items-center justify-between text-[11px] font-sans text-manuscript-inkMuted">
          <span>ARCHITECTURAL SCHEMATIC · CONTROLLED PIPELINE MOTION</span>
          <span className="text-manuscript-copper font-semibold">AINCURU ENGINEERING</span>
        </div>
      </div>
    </div>
  );
};
