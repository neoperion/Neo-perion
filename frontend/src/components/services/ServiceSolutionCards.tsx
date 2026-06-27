import type { ServiceData } from "@/data/servicesData";
import { getIcon } from "./serviceIcons";

/**
 * "What we build" — minimal KnackForge-style row: icon beside the title,
 * one-line description below. Airy, no card boxes.
 */
export function ServiceSolutionCards({ service }: { service: ServiceData }) {
  if (!service.solutions || service.solutions.length === 0) return null;
  return (
    <section className="relative overflow-hidden bg-[#0A0A0B] py-20">
      {/* Orange glow fading in from the left */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_90%_at_0%_50%,rgba(247,126,13,0.16),transparent_65%)]"
      />
      <div className="container relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
        <h2 className="mb-14 max-w-2xl font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight text-white">
          What we build
        </h2>
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {service.solutions.map((s) => {
            const Icon = getIcon(s.icon);
            return (
              <div key={s.title}>
                <div className="flex items-center gap-4">
                  <Icon className="shrink-0 text-brand" size={32} strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold text-white">{s.title}</h3>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-400">{s.valueLine}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
