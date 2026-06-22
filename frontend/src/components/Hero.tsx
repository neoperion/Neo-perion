import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import LiquidEther from "@/components/LiquidEther";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-paper">
      {/* Ambient blue fluid */}
      <div className="absolute inset-0 z-0 opacity-90">
        <LiquidEther
          colors={["#1E5DFF", "#4AA8FF", "#A9C5FF"]}
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
          {/* Headline */}
          <div className="lg:col-span-7">
            <h1 className="font-display text-[clamp(44px,7.5vw,88px)] font-bold uppercase leading-[0.95] tracking-[-0.02em]">
              <span className="block text-ink">Together we</span>
              <span className="block text-brand">Build.</span>
            </h1>
          </div>

          {/* Right support block (Accenture-style) */}
          <div className="lg:col-span-5">
            <div className="mb-6 h-1 w-12 rounded-full bg-brand" />
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
