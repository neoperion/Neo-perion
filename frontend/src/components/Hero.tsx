import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useMagnetic } from "@/hooks/useMagnetic";
import { Button } from "@/components/ui/button";
import LiquidEther from "@/components/LiquidEther";

export const Hero = () => {
  const navigate = useNavigate();
  const primaryBtnRef = useMagnetic(40);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-paper">
      {/* Ambient fluid background — themed to brand blues, fills full height */}
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

      {/* Fade to white only at the very bottom, for a clean transition into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-b from-transparent to-paper" />

      {/* Content — minimal, centered, typography-forward */}
      <div className="container relative z-10 mx-auto max-w-[900px] px-6 text-center">
        <h1 className="font-display text-[clamp(44px,8vw,84px)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
          Ship. Scale. <span className="text-brand">Stay.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-[46ch] text-lg leading-relaxed text-body">
          Senior product &amp; AI engineering for teams that need to ship — and a partner that
          keeps building long after launch.
        </p>

        <div className="mt-9 flex items-center justify-center gap-5">
          <Button
            ref={primaryBtnRef}
            variant="brand"
            size="lg"
            onClick={() => navigate("/contact")}
          >
            Book a strategy call
            <ArrowRight className="h-4 w-4" />
          </Button>
          <button
            onClick={() => navigate("/company/case-studies")}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted2 transition-colors hover:text-brand"
          >
            See our work
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
