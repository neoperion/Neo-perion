import { User } from "lucide-react";
import type { ServiceData } from "@/data/servicesData";

const STARS = [1, 2, 3, 4, 5];

/** Premium testimonial cards — org logo/name at top, quote center, person bottom. */
export function ServiceTestimonials({ service, theme = "dark" }: { service: ServiceData; theme?: "dark" | "manuscript" }) {
  if (!service.testimonials || service.testimonials.length === 0) return null;

  return (
    <section className={`py-24 ${theme === "manuscript" ? "bg-manuscript-parchment border-t border-manuscript-walnut/15" : "bg-[#0A0A0B]"}`}>
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className={`mb-3 text-[11px] font-bold uppercase tracking-[0.28em] ${theme === "manuscript" ? "text-manuscript-copper" : "text-brand"}`}>
            Testimonials
          </p>
          <h2 className={`font-manuscript text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight ${theme === "manuscript" ? "text-manuscript-ink" : "text-white"}`}>
            Where results speak for themselves
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {service.testimonials.map((t, i) => (
            <figure
              key={i}
              className={`group relative flex flex-col rounded-2xl border p-7 transition-all duration-300 ${
                theme === "manuscript"
                  ? "border-manuscript-walnut/20 bg-manuscript-parchmentLight shadow-[0_4px_16px_rgba(31,26,20,0.03)] hover:shadow-[0_8px_24px_rgba(31,26,20,0.06)] hover:border-manuscript-copper/40"
                  : "border-white/10 bg-white/5 hover:border-[#A84A28]/50 hover:bg-white/10"
              }`}
            >
              {/* Top accent line */}
              <div className={`absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                theme === "manuscript"
                  ? "from-manuscript-copper/0 via-manuscript-copper to-manuscript-copper/0"
                  : "from-[#A84A28]/0 via-[#A84A28]/80 to-[#A84A28]/0"
              }`} />

              {/* Org row — logo or styled name badge */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {t.logo ? (
                    <img
                      src={t.logo}
                      alt={t.company ?? ""}
                      className={`h-8 max-w-[110px] object-contain transition-opacity ${
                        theme === "manuscript" 
                          ? "brightness-0 opacity-70 group-hover:opacity-100" 
                          : "brightness-0 invert opacity-60 group-hover:opacity-100"
                      }`}
                    />
                  ) : (
                    <div className="flex items-center gap-2.5">
                      <span className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold ${
                        theme === "manuscript" ? "bg-manuscript-copper/10 text-manuscript-copper" : "bg-brand/20 text-brand"
                      }`}>
                        {(t.company ?? "?").charAt(0).toUpperCase()}
                      </span>
                      <span className={`text-sm font-semibold transition-colors ${
                        theme === "manuscript" ? "text-manuscript-inkSoft group-hover:text-manuscript-ink" : "text-white/60 group-hover:text-white"
                      }`}>
                        {t.company ?? "Organization"}
                      </span>
                    </div>
                  )}
                </div>
                {/* Stars */}
                <div className="flex gap-0.5">
                  {STARS.map((s) => (
                    <svg key={s} className="h-3.5 w-3.5 fill-[#A84A28]" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Decorative open-quote */}
              <svg
                className={`mb-3 h-8 w-8 ${theme === "manuscript" ? "fill-manuscript-copper/20" : "fill-[#A84A28]/30"}`}
                viewBox="0 0 32 32"
              >
                <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm16 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
              </svg>

              {/* Quote */}
              <blockquote className={`flex-grow text-[15px] leading-[1.75] ${theme === "manuscript" ? "text-manuscript-inkSoft" : "text-white/80"}`}>
                {t.quote}
              </blockquote>

              {/* Divider */}
              <div className={`my-6 h-px ${theme === "manuscript" ? "bg-manuscript-walnut/15" : "bg-white/10"}`} />

              {/* Person */}
              <figcaption className="flex items-center gap-3">
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border ${
                  theme === "manuscript" ? "border-manuscript-walnut/20 bg-manuscript-parchmentWarm" : "border-white/10 bg-[#0A0A0B]"
                }`}>
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <User className={theme === "manuscript" ? "text-manuscript-inkSoft" : "text-white/40"} size={16} />
                  )}
                </span>
                <div className="min-w-0">
                  <p className={`truncate text-sm font-bold ${theme === "manuscript" ? "text-manuscript-ink" : "text-white"}`}>{t.name}</p>
                  <p className={`truncate text-[13px] ${theme === "manuscript" ? "text-manuscript-inkSoft" : "text-white/50"}`}>{t.title}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
