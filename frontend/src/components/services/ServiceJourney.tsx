import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { ServiceData } from "@/data/servicesData";
import { getIcon } from "./serviceIcons";

/**
 * Plain-language customer journey, with the technical architecture (RAG etc.)
 * tucked behind a "See the technical architecture" expander — progressive
 * disclosure so CEOs see the simple story and CTOs can dig in.
 */
export function ServiceJourney({ service }: { service: ServiceData }) {
  const [showTech, setShowTech] = useState(false);
  if (!service.journey || service.journey.length === 0) return null;

  return (
    <section className="bg-[#0A0A0B] py-20">
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.25em] text-brand">How it works</p>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight text-white">
            From your data to faster decisions
          </h2>
        </div>

        {/* Journey steps with connecting line */}
        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.journey.map((step, i) => {
            const Icon = getIcon(step.icon);
            return (
              <div key={step.title} className="relative rounded-xl border border-white/[0.08] bg-[#121113] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10">
                    <Icon className="text-brand" size={20} />
                  </div>
                  <span className="font-mono text-sm font-bold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mb-1.5 font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-400">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Expandable technical architecture */}
        {service.techArchitecture && service.techArchitecture.length > 0 && (
          <div className="mt-8">
            <button
              onClick={() => setShowTech((v) => !v)}
              aria-expanded={showTech}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-brand/50"
            >
              See the technical architecture
              <ChevronDown className={`h-4 w-4 text-brand transition-transform ${showTech ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {showTech && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {service.techArchitecture.map((t, i) => {
                      const Icon = getIcon(t.icon);
                      return (
                        <div key={t.title} className="rounded-xl border border-white/[0.08] bg-[#121113] p-6">
                          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-[#0A0A0B]">
                            <Icon className="text-brand" size={20} />
                          </div>
                          <h4 className="mb-1 font-bold text-white">
                            <span className="text-brand">{i + 1}.</span> {t.title}
                          </h4>
                          <p className="text-sm text-neutral-400">{t.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
