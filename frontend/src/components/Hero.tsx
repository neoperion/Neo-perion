import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import LiquidEther from "@/components/LiquidEther";

export const Hero = () => {
  const navigate = useNavigate();
  const [showBio, setShowBio] = useState(false);

  return (
    <section className="parchment-surface relative flex min-h-screen items-center overflow-hidden">
      {/* Ambient fluid — recoloured to muted walnut/rust/gold manuscript tones */}
      <div className="absolute inset-0 z-0 opacity-60">
        <LiquidEther
          colors={["#5B3A1F", "#A6432A", "#B68A35"]}
          mouseForce={26}
          cursorSize={110}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.4}
          resolution={0.5}
          isBounce={false}
        />
      </div>

      {/* Fade to parchment at the very bottom for a clean section transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-b from-transparent to-manuscript-parchment" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 lg:px-8">
        <div className="grid items-center gap-x-12 gap-y-10 lg:grid-cols-12">
          {/* Headline — keyword-aligned for SEO (Aincuru brand + what we do) */}
          <div className="lg:col-span-7">
            <p className="chapter-eyebrow mb-5">Context Before Intelligence</p>
            <h1 className="font-manuscript text-[clamp(32px,4.6vw,60px)] font-semibold leading-[1.06] tracking-[-0.015em] text-manuscript-ink">
              <span className="block">Aincuru — Building AI-Powered</span>
              <span className="block italic text-manuscript-rustDeep">Digital Solutions &amp; Software Systems</span>
            </h1>
            <hr className="ink-rule--gold ink-rule-draw mt-8 w-48" />
          </div>

          {/* Right support block — answer-first paragraph above the eyebrow heading.
              Editable as a single block; mobile renders H1 + this paragraph stacked (text below the H1). */}
          <div className="lg:col-span-5">
            {/* The little gold bar is now a clickable toggle */}
            <button
              onClick={() => setShowBio(!showBio)}
              className="mb-6 block h-1 w-12 cursor-pointer rounded-full bg-manuscript-gold transition-all hover:w-16 focus:outline-none focus:ring-2 focus:ring-manuscript-gold focus:ring-offset-2 focus:ring-offset-manuscript-parchment"
              aria-label="Toggle company bio"
              aria-expanded={showBio}
            />

            <AnimatePresence>
              {showBio && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                  animate={{ height: "auto", opacity: 1, marginBottom: 28 }}
                  exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                  className="overflow-hidden"
                >
                  <div className="manuscript-card border-l-2 border-manuscript-gold p-5">
                    <p className="font-manuscriptBody text-[15px] leading-relaxed text-manuscript-inkSoft">
                      Aincuru is a technology company building AI-powered software, automation systems,
                      custom web platforms, and digital products for modern businesses. Every
                      engagement starts with a written agreement that names scope, timeline, and IP
                      terms, and ends with full code, infrastructure, and credentials transferring to
                      the client on final payment.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <h2 className="font-manuscript text-2xl font-semibold text-manuscript-ink">Built for what comes next</h2>
            <p className="mt-4 max-w-sm font-manuscriptBody text-[15px] leading-relaxed text-manuscript-inkMuted">
              In a world of constant change, durable engineering wins. We help teams ship AI-native
              products in weeks — and keep evolving them long after launch.
            </p>
            <a
              href="/services"
              onClick={(e) => {
                e.preventDefault();
                navigate("/services");
              }}
              className="group mt-7 inline-flex items-center gap-3 font-manuscriptBody text-[15px] font-semibold text-manuscript-ink"
            >
              See what we do
              <span className="flex h-7 w-7 items-center justify-center bg-manuscript-ink text-manuscript-parchmentLight transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

