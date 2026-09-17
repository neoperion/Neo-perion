import React from "react";
import { Shield, Cpu, Layers } from "lucide-react";

export const FritadoRelationship: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 border-b border-manuscript-parchmentDeep bg-manuscript-parchmentLight/50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-manuscriptAlpha-ink-15 bg-white/70 backdrop-blur-sm p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_4px_24px_rgba(80,55,30,0.03)]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-manuscript-copper" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-manuscript-copper">
                Parent Brand & Engineering
              </span>
            </div>
            <h3 className="font-manuscript text-2xl sm:text-3xl font-bold text-manuscript-ink tracking-tight">
              A product from AINCURU.
            </h3>
            <p className="mt-3 font-manuscriptBody text-sm sm:text-base text-manuscript-inkMuted leading-relaxed">
              AINCURU builds and operates product systems across AI, web, mobile, cloud, and data. Fritado is the product workflow. AINCURU can support the surrounding engineering when a team needs a custom integration, migration, security review, or broader product surface.
            </p>
          </div>

          <div className="flex flex-wrap md:flex-col gap-2.5 shrink-0 text-xs font-sans text-manuscript-inkSoft">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-manuscript-parchment border border-manuscriptAlpha-ink-10">
              <Cpu size={14} className="text-manuscript-copper" />
              <span className="font-medium">Full-Stack Engineering</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-manuscript-parchment border border-manuscriptAlpha-ink-10">
              <Shield size={14} className="text-manuscript-copper" />
              <span className="font-medium">Enterprise Data Isolation</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-manuscript-parchment border border-manuscriptAlpha-ink-10">
              <Layers size={14} className="text-manuscript-copper" />
              <span className="font-medium">Custom CRM Integrations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
