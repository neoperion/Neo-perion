import React from "react";
import { Link2, Sliders, Search, BookOpen, Send, CheckSquare, ShieldCheck } from "lucide-react";

interface Stage {
  num: string;
  name: string;
  desc: string;
  icon: React.ElementType;
  isReviewGate?: boolean;
}

const STAGES: Stage[] = [
  {
    num: "01",
    name: "Connect",
    desc: "Bring in the website, domain, approved channels, and relevant business systems.",
    icon: Link2,
  },
  {
    num: "02",
    name: "Define",
    desc: "Set the ICP, roles, markets, exclusions, and signals.",
    icon: Sliders,
  },
  {
    num: "03",
    name: "Discover",
    desc: "Find relevant companies and decision-makers across connected sources.",
    icon: Search,
  },
  {
    num: "04",
    name: "Understand",
    desc: "Assemble account, role, business, and timing context.",
    icon: BookOpen,
  },
  {
    num: "05",
    name: "Engage",
    desc: "Choose an approved email, LinkedIn, website, search, or content action.",
    icon: Send,
    isReviewGate: true,
  },
  {
    num: "06",
    name: "Qualify",
    desc: "Review intent and route the opportunity to the next system or owner.",
    icon: CheckSquare,
  },
];

export const FritadoProcessRail: React.FC = () => {
  return (
    <section id="how-it-works" className="scroll-mt-28 py-16 sm:py-24 border-b border-manuscript-parchmentDeep bg-manuscript-parchment">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-manuscript-copper">
              04 / OPERATING SEQUENCE
            </span>
          </div>
          <h2 className="font-manuscript text-3xl sm:text-4xl font-bold text-manuscript-ink tracking-tight leading-tight">
            How Fritado works
          </h2>
          <p className="mt-4 font-manuscriptBody text-base sm:text-lg text-manuscript-inkMuted leading-relaxed">
            Fritado is designed to support the decisions around pipeline creation—not hide them. The workflow begins with business context and ends with an opportunity your team can review, route, and act on.
          </p>
        </div>

        {/* 6-Stage Process Rail */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative">
          {STAGES.map((stg, idx) => {
            const Icon = stg.icon;
            return (
              <div
                key={stg.num}
                className={`relative rounded-xl p-5 border flex flex-col justify-between transition-all shadow-[0_4px_20px_rgba(80,55,30,0.03)] ${
                  stg.isReviewGate
                    ? "bg-white border-manuscript-copper ring-1 ring-manuscript-copper/30"
                    : "bg-white/70 border-manuscriptAlpha-ink-15 hover:border-manuscript-copper/40"
                }`}
              >
                {/* Gate Badge if applicable */}
                {stg.isReviewGate && (
                  <div className="absolute -top-3 left-4 px-2.5 py-0.5 rounded-full bg-manuscript-copper text-white text-[10px] font-sans font-bold flex items-center gap-1 shadow-sm">
                    <ShieldCheck size={11} />
                    <span>Review Gate</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-bold text-manuscript-copper">
                      {stg.num}
                    </span>
                    <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${
                      stg.isReviewGate
                        ? "bg-manuscript-copper/10 border-manuscript-copper text-manuscript-copper"
                        : "bg-manuscript-parchmentLight border-manuscriptAlpha-ink-10 text-manuscript-inkMuted"
                    }`}>
                      <Icon size={15} />
                    </div>
                  </div>

                  <h3 className="font-manuscript text-base font-bold text-manuscript-ink mb-1.5">
                    {stg.name}
                  </h3>

                  <p className="font-manuscriptBody text-xs text-manuscript-inkMuted leading-relaxed">
                    {stg.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-manuscriptAlpha-ink-10 text-[10px] font-sans text-manuscript-inkSoft flex items-center justify-between">
                  <span>Stage 0{idx + 1}</span>
                  {stg.isReviewGate ? (
                    <span className="text-manuscript-copper font-bold">Rep Sign-Off</span>
                  ) : (
                    <span>System Connected</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Operational Callout */}
        <div className="mt-8 p-4 rounded-xl bg-white/70 border border-manuscriptAlpha-ink-15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-manuscript-ink font-manuscriptBody">
            <ShieldCheck size={16} className="text-manuscript-copper shrink-0" />
            <span>
              <strong className="font-semibold text-manuscript-ink">Visible Review Boundary:</strong> Fritado enforces manual or policy sign-off before dispatch. Zero blind automated sending.
            </span>
          </div>
          <span className="text-[11px] font-sans text-manuscript-copper font-semibold shrink-0">
            Governance by Design
          </span>
        </div>
      </div>
    </section>
  );
};
