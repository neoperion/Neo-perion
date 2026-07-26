import type { ServiceData } from "@/data/servicesData";
import { ServiceImageSlot } from "./ServiceImageSlot";

/** Image banner with overlaid copy + stat cards overlapping the bottom edge. */
export function ServiceAboutStats({ service }: { service: ServiceData }) {
  const band = service.aboutBand;
  if (!band) return null;
  return (
    <section className="bg-[#0A0A0B] py-20">
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="relative">
          {/* Banner image with copy overlay */}
          <div className="relative">
            <ServiceImageSlot src={band.image} label="About / team image" className="h-[420px] w-full" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(90deg,rgba(10,10,11,0.92)_0%,rgba(10,10,11,0.5)_55%,transparent_100%)]"
            />
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
              <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.25em] text-brand">
                {band.eyebrow ?? "Why AINCURU"}
              </p>
              <h2 className="max-w-xl font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight tracking-tight text-white">
                {band.headline}
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-300">{band.body}</p>
            </div>
          </div>

          {/* Overlapping stat cards */}
          {band.stats.length > 0 && (
            <div className="relative z-10 mx-auto -mt-12 grid max-w-[1050px] grid-cols-2 gap-4 px-2 md:grid-cols-4">
              {band.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/[0.08] bg-[#121113] p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                >
                  <p className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-none text-brand">
                    {s.value}
                  </p>
                  <p className="mt-2 text-xs leading-snug text-neutral-400">{s.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
