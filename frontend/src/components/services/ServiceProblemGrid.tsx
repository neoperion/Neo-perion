import type { ServiceData } from "@/data/servicesData";
import { getIcon } from "./serviceIcons";

/** Pain-point card grid. Renders nothing without `problems`. */
export function ServiceProblemGrid({ service }: { service: ServiceData }) {
  if (!service.problems || service.problems.length === 0) return null;
  return (
    <section className="bg-manuscript-parchmentDark py-20">
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.25em] text-brand">The problem</p>
          <h2 className="font-manuscript text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight text-manuscript-ink">
            The expensive problems we remove
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.problems.map((p) => {
            const Icon = getIcon(p.icon);
            return (
              <div key={p.title} className="group rounded-xl border border-manuscriptAlpha-ink-15 bg-manuscript-parchmentLight p-7 transition-colors hover:border-brand/30">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 transition-transform group-hover:-translate-y-0.5">
                  <Icon className="text-brand" size={20} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-manuscript-ink">{p.title}</h3>
                <p className="text-sm leading-relaxed text-manuscript-inkSoft">{p.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
