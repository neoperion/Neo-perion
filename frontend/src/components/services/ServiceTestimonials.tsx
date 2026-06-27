import { User } from "lucide-react";
import type { ServiceData } from "@/data/servicesData";

/** Curated testimonial cards with photo + name + role. Renders nothing without `testimonials`. */
export function ServiceTestimonials({ service }: { service: ServiceData }) {
  if (!service.testimonials || service.testimonials.length === 0) return null;
  return (
    <section className="bg-[#0A0A0B] py-20">
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.25em] text-brand">Testimonials</p>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight text-white">
            Where results speak for themselves
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {service.testimonials.map((t, i) => (
            <figure key={i} className="flex flex-col rounded-xl border border-white/[0.08] bg-[#121113] p-7">
              <blockquote className="flex-grow text-[15px] leading-relaxed text-neutral-200">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.08] pt-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/[0.08] bg-[#0A0A0B]">
                  {t.avatar ? (
                    <img src={t.avatar} alt={t.name} loading="lazy" className="h-full w-full object-cover" />
                  ) : (
                    <User className="text-neutral-500" size={18} />
                  )}
                </span>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-sm text-neutral-400">
                    {t.title}
                    {t.company ? ` · ${t.company}` : ""}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
