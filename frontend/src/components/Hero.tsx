import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useMagnetic } from "@/hooks/useMagnetic";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/marketing/Section";
import { BrowserFrame } from "@/components/marketing/BrowserFrame";

export const Hero = () => {
  const navigate = useNavigate();
  const primaryBtnRef = useMagnetic(40);

  const scrollToWork = () => {
    navigate("/company/case-studies");
  };

  return (
    <Section bg="paper" rhythm="hero" className="overflow-hidden" innerClassName="relative z-10">
      {/* Subtle background grid — quiet texture, no glow */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Left — content */}
        <div className="flex flex-col items-start text-left lg:col-span-6">
          <h1 className="font-display text-[clamp(40px,7vw,64px)] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
            The product engineering firm that{" "}
            <span className="text-brand">doesn&apos;t disappear</span> after launch.
          </h1>

          <p className="mt-6 max-w-[36ch] text-lg leading-relaxed text-body">
            AI-native platforms, SaaS infrastructure, and enterprise automation — engineered for
            production from day one. Built by senior engineers, shipped in weeks.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
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
              onClick={scrollToWork}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted2 transition-colors hover:text-brand"
            >
              See our work
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>

        {/* Right — real product screenshot */}
        <div className="lg:col-span-6">
          <BrowserFrame
            src="/images/home/hero-product.svg"
            alt="Neo Perion product dashboard"
            ratio="16/10"
          />
        </div>
      </div>
    </Section>
  );
};
