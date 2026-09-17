import React from "react";
import { PlayCircle, BookOpen, FileCode, ArrowRight } from "lucide-react";
import { fritadoConfig } from "@/data/fritadoConfig";
import { trackEvent } from "@/shared/analytics";

interface ResourceCard {
  title: string;
  desc: string;
  ctaText: string;
  icon: React.ElementType;
}

const RESOURCES: ResourceCard[] = [
  {
    title: "Product demo",
    desc: "Watch or request a controlled walkthrough of discovery, research, engagement, and qualification.",
    ctaText: "Request a demo",
    icon: PlayCircle,
  },
  {
    title: "User manual",
    desc: "Review the setup sequence, ICP definition, discovery, engagement, and workflow configuration.",
    ctaText: "Read the user manual",
    icon: BookOpen,
  },
  {
    title: "Product details",
    desc: "Review current access, supported integrations, security questions, support ownership, and commercial terms.",
    ctaText: "Request product details",
    icon: FileCode,
  },
];

export const FritadoResources: React.FC = () => {
  const handleResourceClick = (title: string) => {
    trackEvent("fritado_resource_click", {
      product: "fritado",
      resource: title,
      destination: fritadoConfig.primaryUrl,
    });
    window.open(fritadoConfig.primaryUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="resources" className="scroll-mt-28 py-16 sm:py-24 border-b border-manuscript-parchmentDeep bg-manuscript-parchment">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-manuscript-copper">
              08 / DOCUMENTATION & ACCESS
            </span>
          </div>
          <h2 className="font-manuscript text-3xl sm:text-4xl font-bold text-manuscript-ink tracking-tight leading-tight">
            Explore Fritado in the detail you need.
          </h2>
          <p className="mt-4 font-manuscriptBody text-base sm:text-lg text-manuscript-inkMuted leading-relaxed">
            Access technical manuals, request a tailored product demonstration, or review security specifications for enterprise evaluation.
          </p>
        </div>

        {/* 3 Compact Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESOURCES.map((res) => {
            const Icon = res.icon;
            return (
              <div
                key={res.title}
                className="p-6 sm:p-7 rounded-xl bg-white/70 border border-manuscriptAlpha-ink-15 hover:border-manuscript-copper transition-all shadow-[0_4px_20px_rgba(80,55,30,0.03)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-manuscript-parchmentLight border border-manuscriptAlpha-ink-10 flex items-center justify-center text-manuscript-copper mb-5">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-manuscript text-lg font-bold text-manuscript-ink mb-2">
                    {res.title}
                  </h3>
                  <p className="font-manuscriptBody text-xs sm:text-sm text-manuscript-inkMuted leading-relaxed mb-6">
                    {res.desc}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleResourceClick(res.title)}
                  className="inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-semibold text-manuscript-copper hover:text-manuscript-copperDeep transition-colors group"
                >
                  <span>{res.ctaText}</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
