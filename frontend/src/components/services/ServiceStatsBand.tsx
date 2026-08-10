import type { ServiceData } from "@/data/servicesData";

/** Outcome stats with orange numbers — the one orange-number region per page. */
export function ServiceStatsBand({ service }: { service: ServiceData }) {
  if (!service.outcomes || service.outcomes.length === 0) return null;
  return (
    <section className="border-y border-manuscriptAlpha-ink-15 bg-manuscript-parchmentLight py-16">
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {service.outcomes.map((stat) => (
            <div key={stat.label}>
              <p className="font-manuscript text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-none tracking-tight text-brand">
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-snug text-manuscript-inkSoft">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
