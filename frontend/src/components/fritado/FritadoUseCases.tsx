import React from "react";
import { Briefcase, Building2, UserPlus, Users2, Laptop } from "lucide-react";

interface UseCase {
  title: string;
  copy: string;
  icon: React.ElementType;
  badge: string;
}

const USE_CASES: UseCase[] = [
  {
    title: "B2B sales teams",
    copy: "Build and maintain a focused prospect pipeline with account context, decision-maker relevance, and reviewable next actions.",
    icon: Briefcase,
    badge: "Direct Sales",
  },
  {
    title: "Professional services and consultancies",
    copy: "Find organizations where current business signals create a defensible reason to start a conversation.",
    icon: Building2,
    badge: "Advisory",
  },
  {
    title: "Recruitment and staffing teams",
    copy: "Identify hiring, expansion, and leadership signals that may create relevant commercial opportunities.",
    icon: UserPlus,
    badge: "Talent Ops",
  },
  {
    title: "Agencies and growth partners",
    copy: "Operate repeatable discovery, outreach, and qualification workflows across client growth programs where the partner model is approved.",
    icon: Users2,
    badge: "Partners",
  },
  {
    title: "Product & IT engineering services",
    copy: "Strengthen commercial and technical service pipelines with more relevant account and buying-signal context.",
    icon: Laptop,
    badge: "Tech Services",
  },
];

export const FritadoUseCases: React.FC = () => {
  return (
    <section id="use-cases" className="scroll-mt-28 py-16 sm:py-24 border-b border-manuscript-parchmentDeep bg-manuscript-parchment">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-manuscript-copper">
              06 / TARGETED OPERATIONS
            </span>
          </div>
          <h2 className="font-manuscript text-3xl sm:text-4xl font-bold text-manuscript-ink tracking-tight leading-tight">
            Built for B2B teams with a research-led growth motion.
          </h2>
          <p className="mt-4 font-manuscriptBody text-base sm:text-lg text-manuscript-inkMuted leading-relaxed">
            Fritado aligns with teams that prioritize prospect context, relevance, and reputational protection over indiscriminate volume.
          </p>
        </div>

        {/* Compact Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {USE_CASES.map((uc) => {
            const Icon = uc.icon;
            return (
              <div
                key={uc.title}
                className="p-6 rounded-xl bg-white/70 border border-manuscriptAlpha-ink-15 hover:border-manuscript-copper transition-all shadow-[0_4px_20px_rgba(80,55,30,0.03)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-lg bg-manuscript-parchmentLight border border-manuscriptAlpha-ink-10 flex items-center justify-center text-manuscript-copper">
                      <Icon size={16} />
                    </div>
                    <span className="text-[10px] font-sans font-bold uppercase px-2.5 py-0.5 rounded-full bg-manuscript-parchmentLight border border-manuscriptAlpha-ink-10 text-manuscript-inkSoft">
                      {uc.badge}
                    </span>
                  </div>

                  <h3 className="font-manuscript text-base font-bold text-manuscript-ink mb-2">
                    {uc.title}
                  </h3>

                  <p className="font-manuscriptBody text-xs sm:text-sm text-manuscript-inkMuted leading-relaxed">
                    {uc.copy}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-manuscriptAlpha-ink-10 flex items-center justify-between text-[11px] font-sans text-manuscript-inkMuted">
                  <span>Target motion</span>
                  <span className="text-manuscript-copper font-semibold">Active Profile</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
