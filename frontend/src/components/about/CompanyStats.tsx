import React from "react";
import { Users, Calendar, Briefcase, TrendingUp } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const STATS = [
  { icon: Briefcase, value: 10, suffix: "+", label: "Projects", sub: "MVPs, SaaS, AI integrations" },
  { icon: Briefcase, value: 6, suffix: "+", label: "Industries", sub: "Serving diverse sectors globally" },
  { icon: TrendingUp, value: 98, suffix: "%", label: "Satisfaction", sub: "Client success and retention rate" },
  { icon: Users, value: 12, suffix: "+", label: "Senior engineers", sub: "Founders, lead engineers, designers" },
];

export const CompanyStats: React.FC = () => {
  return (
    <section aria-labelledby="company-stats-heading" className="py-16 md:py-20 bg-[#0A0A0B] border-b border-[#27272A]/60">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1200px]">
        <div className="text-center mb-12">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-3">By the numbers</p>
          <h2 id="company-stats-heading" className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            A small team, shipping serious work.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="rounded-xl bg-neutral-900 border border-[#27272A] p-6 hover:border-[#A1A1AA] transition-colors shadow-sm flex flex-col items-start">
                <Icon className="w-5 h-5 text-neo-blue mb-4" aria-hidden="true" />
                <div className="text-3xl md:text-4xl font-display font-bold text-white leading-none">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm font-semibold text-neutral-200 mt-2">{s.label}</div>
                <div className="text-xs text-neutral-400 mt-1">{s.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
