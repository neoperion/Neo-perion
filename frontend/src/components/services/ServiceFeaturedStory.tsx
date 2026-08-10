import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ServiceData } from "@/data/servicesData";
import { ServiceImageSlot } from "./ServiceImageSlot";

/** Featured success story: large image beside headline + big metrics + CTA. */
export function ServiceFeaturedStory({ service }: { service: ServiceData }) {
  const navigate = useNavigate();
  const story = service.featuredStory;
  if (!story) return null;
  return (
    <section className="bg-manuscript-parchmentDark py-20">
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <ServiceImageSlot src={story.image} label="Success story image" className="aspect-[4/3] w-full" />

          {/* Content */}
          <div>
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.25em] text-brand">
              {story.eyebrow ?? "Success story"}
            </p>
            <h2 className="font-manuscript text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight tracking-tight text-manuscript-ink">
              {story.headline}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-manuscript-inkSoft">{story.body}</p>

            {story.metrics.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-10">
                {story.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-manuscript text-[clamp(2rem,3.5vw,3rem)] font-bold leading-none text-brand">
                      {m.value}
                    </p>
                    <p className="mt-2 max-w-[12rem] text-sm text-manuscript-inkSoft">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => navigate(story.ctaHref ?? "/company/case-studies")}
              className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-4 text-sm font-bold text-manuscript-parchmentLight transition-colors hover:bg-[#FB8C2A]"
            >
              {story.ctaText ?? "Read the story"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
