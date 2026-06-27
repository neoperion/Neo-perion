import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { ServiceData } from "@/data/servicesData";
import { useCaseStudies } from "@/hooks/useCaseStudies";
import { ServiceImageSlot } from "./ServiceImageSlot";

const AUTO_MS = 6000;

/**
 * Auto-rotating success-story carousel driven by REAL case studies
 * (Supabase via useCaseStudies, mock fallback). Filters to the service's
 * relevant service_type(s). Copy left, image right; pauses on hover.
 */
export function ServiceCaseStudyCarousel({ service }: { service: ServiceData }) {
  const navigate = useNavigate();
  const { data: all = [], isLoading } = useCaseStudies();
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  // Prefer case studies whose service_type matches; fall back to all.
  const wanted = service.caseStudyServiceTypes;
  const filtered = wanted && wanted.length
    ? all.filter((c) => wanted.includes(c.service_type))
    : all;
  const stories = (filtered.length ? filtered : all).slice(0, 6);

  useEffect(() => {
    if (stories.length <= 1) return;
    const id = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % stories.length);
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [stories.length]);

  if (isLoading || stories.length === 0) return null;
  const safeIndex = index % stories.length;
  const story = stories[safeIndex];

  return (
    <section
      className="bg-[#0A0A0B] py-20"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.25em] text-brand">
                  {story.industry ? `${story.industry} · Success story` : "Client success story"}
                </p>
                <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight tracking-tight text-white">
                  {story.title}
                </h2>
                <p className="mt-5 line-clamp-4 text-lg leading-relaxed text-neutral-400">
                  {story.problem}
                </p>
                {story.outcome && (
                  <p className="mt-5 border-l-2 border-brand pl-4 text-[15px] font-semibold leading-relaxed text-brand">
                    {story.outcome}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate(`/company/case-studies/${story.slug}`)}
                className="rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-[#0A0A0B] transition-colors hover:bg-[#FB8C2A]"
              >
                Read More
              </button>
              <button
                onClick={() => navigate("/company/case-studies")}
                className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:border-brand/50"
              >
                View All Success Stories
              </button>
            </div>

            {stories.length > 1 && (
              <div className="mt-8 flex gap-2">
                {stories.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to story ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === safeIndex ? "w-8 bg-brand" : "w-4 bg-white/15 hover:bg-white/30"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={story.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <ServiceImageSlot src={story.cover_image} label="Case study image" className="aspect-[4/3] w-full" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
