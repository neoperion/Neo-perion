import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import type { ServiceData } from "@/data/servicesData";
import { NeuralNetworkBg } from "./NeuralNetworkBg";

interface ServiceVideoHeroProps {
  service: ServiceData;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  /** Compact height for mobile shells */
  compact?: boolean;
}

/**
 * Full-bleed video hero with a legibility scrim.
 * - Poster image is the intended LCP element; video lazy-loads near the viewport.
 * - autoplay + muted + loop + playsInline is the mandatory quartet for inline autoplay.
 * - prefers-reduced-motion → no autoplay, show backdrop + a manual Play control.
 * - An always-present dark/orange gradient backdrop guarantees no blank flash even if
 *   the poster asset is missing (drop real posters in /images/services/ for best LCP).
 */
export function ServiceVideoHero({
  service,
  secondaryCtaLabel = "See case studies",
  secondaryCtaHref = "/company/case-studies",
  compact = false,
}: ServiceVideoHeroProps) {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [manualPlay, setManualPlay] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Hero is above the fold: load eagerly and autoplay. Pause only for reduced-motion.
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid || !service.heroVideo) return;
    if (reducedMotion && !manualPlay) {
      vid.pause();
      return;
    }
    vid.play().catch(() => {});
  }, [reducedMotion, manualPlay, service.heroVideo]);

  const useImage = Boolean(service.heroImage);
  const useNeural = !useImage && service.heroVisual === "neural";
  const showVideo = !useImage && !useNeural && Boolean(service.heroVideo) && (!reducedMotion || manualPlay);

  return (
    <section
      ref={sectionRef}
      className={`relative flex items-center overflow-hidden border-b border-white/[0.08] bg-[#0A0A0B] ${
        compact
          ? service.heroFullHeight
            ? "min-h-screen pt-24"
            : "min-h-[360px] pt-24"
          : service.heroFullHeight
          ? "min-h-screen"
          : "min-h-[420px] md:min-h-[500px]"
      }`}
    >
      {/* Media layer */}
      <div className="absolute inset-0 z-0">
        {/* Always-present backdrop (prevents blank flash + reduced-motion fallback) */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_0%,#1A1A1D_0%,#0A0A0B_60%)]" />
        {useImage && (
          <img
            src={service.heroImage}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        {useNeural && <NeuralNetworkBg />}
        {!useImage && !useNeural && service.heroPoster && (
          <img
            src={service.heroPoster}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        )}
        {showVideo && (
          <video
            ref={videoRef}
            src={service.heroVideo}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            poster={service.heroPoster}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>

      {/* Legibility scrim: left→right + subtle orange glow bottom-right */}
      <div
        aria-hidden
        className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(10,10,11,0.94)_0%,rgba(10,10,11,0.6)_45%,rgba(10,10,11,0.2)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-10 bg-[radial-gradient(60%_80%_at_88%_100%,rgba(247,126,13,0.14),transparent_70%)]"
      />

      {/* Content */}
      <div className="container relative z-20 mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.25em] text-brand">
            {service.tagline}
          </p>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-white">
            {service.heroHeadline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-300">
            {service.heroSubtext}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-4 text-sm font-bold text-[#0A0A0B] transition-colors hover:bg-[#FB8C2A]"
            >
              {service.ctaText} <ArrowRight size={16} />
            </button>
            <button
              onClick={() => navigate(secondaryCtaHref)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-7 py-4 text-sm font-bold text-white transition-colors hover:border-brand/50"
            >
              {secondaryCtaLabel}
            </button>
            {service.heroVideo && reducedMotion && !manualPlay && (
              <button
                onClick={() => setManualPlay(true)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 transition-colors hover:text-white"
              >
                <Play size={16} /> Play video
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
