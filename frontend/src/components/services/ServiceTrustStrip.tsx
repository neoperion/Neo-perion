import type { ServiceData } from "@/data/servicesData";

/** Full-color client logos in a left→right marquee. Renders nothing without trustLogos. */
export function ServiceTrustStrip({ service }: { service: ServiceData }) {
  if (!service.trustLogos || service.trustLogos.length === 0) return null;

  const Row = ({ hidden = false }: { hidden?: boolean }) => (
    <div className="flex shrink-0 items-center gap-16 pr-16 md:gap-24 md:pr-24" aria-hidden={hidden}>
      {service.trustLogos!.map((logo, i) => (
        <img
          key={`${logo.alt}-${i}`}
          src={logo.src}
          alt={hidden ? "" : logo.alt}
          loading="lazy"
          className="h-16 w-auto object-contain md:h-24"
        />
      ))}
    </div>
  );

  return (
    <section className="border-b border-white/[0.08] bg-[#0A0A0B] py-12">
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-8">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Trusted by teams shipping real products
        </p>
        {/* Auto-scrolling marquee, left → right */}
        <div className="np-marquee-group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="np-marquee flex w-max items-center [animation-direction:reverse]">
            <Row />
            <Row hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
