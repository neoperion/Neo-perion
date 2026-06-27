import type { LucideIcon } from "lucide-react";
import type { ServiceData } from "@/data/servicesData";

interface ServiceCapabilitiesProps {
  service: ServiceData;
  /** Optional eyebrow + heading overrides */
  eyebrow?: string;
  heading?: string;
  /** Icon used per capability card (defaults to the service icon) */
  icon?: LucideIcon;
}

/** Capability grid — benefit-led cards from service.features. */
export function ServiceCapabilities({
  service,
  eyebrow = "What we do",
  heading,
  icon,
}: ServiceCapabilitiesProps) {
  if (!service.features || service.features.length === 0) return null;
  const Icon = icon ?? service.icon;
  return (
    <section className="bg-[#0A0A0B] py-16">
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.25em] text-brand">
            {eyebrow}
          </p>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight text-white">
            {heading ?? service.overview}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {service.features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-white/[0.08] bg-[#121113] p-8 transition-colors hover:border-brand/30"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-[#0A0A0B]">
                <Icon className="text-brand" size={22} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
              <p className="leading-relaxed text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
