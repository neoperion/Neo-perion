import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import type { ServiceData } from "@/data/servicesData";
import { useCaseStudies } from "@/hooks/useCaseStudies";
import { ServiceImageSlot } from "./ServiceImageSlot";

const AUTO_MS = 6000;
const TICK_MS = 50;

export function ServiceCaseStudyCarousel({ service }: { service: ServiceData }) {
  const navigate = useNavigate();
  const { data: all = [], isLoading } = useCaseStudies();
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const paused = useRef(false);

  const wanted = service.caseStudyServiceTypes;
  const filtered = wanted?.length ? all.filter((c) => wanted.includes(c.service_type)) : all;
  const stories = (filtered.length ? filtered : all).slice(0, 6);

  const goTo = (i: number) => {
    setIndex(i);
    setProgress(0);
  };
  const prev = () => goTo((index - 1 + stories.length) % stories.length);
  const next = () => goTo((index + 1) % stories.length);

  useEffect(() => {
    if (stories.length <= 1) return;
    const step = (TICK_MS / AUTO_MS) * 100;
    const id = setInterval(() => {
      if (paused.current) return;
      setProgress((p) => {
        if (p >= 100) {
          setIndex((i) => (i + 1) % stories.length);
          return 0;
        }
        return p + step;
      });
    }, TICK_MS);
    return () => clearInterval(id);
  }, [stories.length]);

  if (isLoading || stories.length === 0) return null;
  const safeIndex = index % stories.length;
  const story = stories[safeIndex];

  return (
    <section
      className="relative overflow-hidden bg-[#0A0A0B] py-24"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {/* Auto-progress bar */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-white/[0.05]">
        <div
          className="h-full bg-[#F77E0D] transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>

<div className="container mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Top bar: label + counter + arrows */}
        <div className="mb-12 flex items-center justify-between">
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/25">
            Success Stories
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-white/30">
              <span className="text-white font-bold">
                {String(safeIndex + 1).padStart(2, "0")}
              </span>
              {" / "}
              {String(stories.length).padStart(2, "0")}
            </span>
            {stories.length > 1 && (
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous story"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-[#F77E0D]/60 hover:text-[#F77E0D]"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next story"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-[#F77E0D]/60 hover:text-[#F77E0D]"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Main content: copy left, image right */}
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          {/* Copy */}
          <AnimatePresence mode="wait">
            <motion.div
              key={story.id + "-copy"}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              className="order-2 lg:order-1"
            >
              {/* Tag pills */}
              <div className="mb-6 flex flex-wrap gap-2">
                {story.industry && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F77E0D]/30 bg-[#F77E0D]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F77E0D]">
                    {story.industry}
                  </span>
                )}
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                  Success Story
                </span>
              </div>

              <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight tracking-tight text-white">
                {story.title}
              </h2>

              <p className="mt-5 line-clamp-3 text-lg leading-relaxed text-neutral-400">
                {story.problem}
              </p>

              {story.outcome && (
                <div className="mt-6 border-l-2 border-[#F77E0D] pl-5">
                  <p className="text-[15px] font-semibold leading-relaxed text-[#F77E0D]">
                    {story.outcome}
                  </p>
                </div>
              )}

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigate(`/company/case-studies/${story.slug}`)}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#F77E0D] px-7 py-3.5 text-sm font-bold text-[#0A0A0B] transition-all hover:bg-[#FB8C2A]"
                >
                  Read More
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>
                <button
                  onClick={() => navigate("/company/case-studies")}
                  className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:border-[#F77E0D]/50 hover:text-[#F77E0D]"
                >
                  View All Success Stories
                </button>
              </div>

              {/* Dot scrubber */}
              {stories.length > 1 && (
                <div className="mt-8 flex gap-2">
                  {stories.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Go to story ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === safeIndex
                          ? "w-8 bg-[#F77E0D]"
                          : "w-4 bg-white/15 hover:bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={story.id + "-img"}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="relative"
              >
                {/* Glow halo behind image */}
                <div className="absolute -inset-6 rounded-3xl bg-[#F77E0D]/[0.07] blur-3xl" />
                {/* Image card */}
                <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/[0.07] shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
                  <ServiceImageSlot
                    src={story.cover_image}
                    label="Case study image"
                    className="aspect-[4/3] w-full"
                  />
                  {/* Gradient vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0A0A0B]/40 via-transparent to-transparent" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
