import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import LiquidEther from "@/components/LiquidEther";

export const Hero = () => {
  const navigate = useNavigate();
  const [showBio, setShowBio] = useState(false);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-paper">
      {/* Ambient blue fluid */}
      <div className="absolute inset-0 z-0 opacity-90">
        <LiquidEther
          colors={["#F77E0D", "#FF9A3D", "#9c9a9a"]}
          mouseForce={26}
          cursorSize={110}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.4}
          resolution={0.5}
          isBounce={false}
        />
      </div>

      {/* Fade to white only at the very bottom for a clean section transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-b from-transparent to-paper" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 lg:px-8">
        <div className="grid items-center gap-x-12 gap-y-10 lg:grid-cols-12">
          {/* Headline — keyword-aligned for SEO (production-grade AI software for SMEs) */}
          <div className="lg:col-span-7">
            <h1 className="font-display text-[clamp(36px,6vw,72px)] font-bold leading-[1.02] tracking-[-0.02em]">
              <span className="block text-ink">Production-Grade AI &amp; Software Systems</span>
              <span className="block text-brand">for Growing Businesses</span>
            </h1>
          </div>

          {/* Right support block (Accenture-style) — answer-first paragraph above the eyebrow heading.
              Editable as a single block; mobile renders H1 + this paragraph stacked (text below the H1). */}
          <div className="lg:col-span-5">
            {/* Answer-first paragraph for AI/SEO: leads with what we do, for whom, and the process guarantee.
                No pricing (locked); uses the established "scope-dependent / written agreement" framing. */}
            {/* The little orange bar is now a clickable toggle */}
            <button 
              onClick={() => setShowBio(!showBio)}
              className="mb-6 h-1 w-12 rounded-full bg-brand transition-all hover:w-16 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-paper block cursor-pointer"
              aria-label="Toggle company bio"
              aria-expanded={showBio}
            />
            
            <AnimatePresence>
              {showBio && (
                <motion.p 
                  initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                  animate={{ height: "auto", opacity: 1, marginBottom: 28 }}
                  exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                  className="overflow-hidden text-[15px] leading-relaxed text-body"
                >
                  AINCURU Solutions is a founder-led software and AI company in Chennai, Tamil
                  Nadu, India, building production-grade AI automation, custom web platforms, and
                  mobile applications for startups and SMEs in India and the United States. Every
                  engagement starts with a written agreement that names scope, timeline, and IP
                  terms, and ends with full code, infrastructure, and credentials transferring to
                  the client on final payment.
                </motion.p>
              )}
            </AnimatePresence>
            <h2 className="text-xl font-bold text-ink">Built for what comes next</h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-body">
              In a world of constant change, durable engineering wins. We help teams ship AI-native
              products in weeks — and keep evolving them long after launch.
            </p>
            <button
              onClick={() => navigate("/services")}
              className="group mt-7 inline-flex items-center gap-3 text-[15px] font-semibold text-ink"
            >
              See what we do
              <span className="flex h-7 w-7 items-center justify-center bg-brand transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4 text-white" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
