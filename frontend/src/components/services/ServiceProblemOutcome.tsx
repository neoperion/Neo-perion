import type { ServiceData } from "@/data/servicesData";

/** Problem → outcome framing band. Renders nothing without `problem`. */
export function ServiceProblemOutcome({ service }: { service: ServiceData }) {
  if (!service.problem) return null;
  return (
    <section className="bg-manuscript-parchmentDark py-16">
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.25em] text-brand">
              The problem
            </p>
            <h2 className="font-manuscript text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight tracking-tight text-manuscript-ink">
              {service.problem.headline}
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-lg leading-relaxed text-manuscript-inkSoft">{service.problem.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
