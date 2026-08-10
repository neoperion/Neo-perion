import type { ServiceData } from "@/data/servicesData";
import { getIcon } from "./serviceIcons";

/** "Why AINCURU" trust pillars. Renders nothing without `differentiators`. */
export function ServiceDifferentiators({ service }: { service: ServiceData }) {
  if (!service.differentiators || service.differentiators.length === 0) return null;
  return (
    <section className="border-y border-manuscriptAlpha-ink-15 bg-manuscript-parchmentLight py-20">
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.25em] text-brand">Why AINCURU</p>
          <h2 className="font-manuscript text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight text-manuscript-ink">
            Built for production — and for trust
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.differentiators.map((d) => {
            const Icon = getIcon(d.icon);
            return (
              <div key={d.title} className="rounded-xl border border-manuscriptAlpha-ink-15 bg-manuscript-parchmentDark p-7">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10">
                  <Icon className="text-brand" size={20} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-manuscript-ink">{d.title}</h3>
                <p className="text-sm leading-relaxed text-manuscript-inkSoft">{d.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
