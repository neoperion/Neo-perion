import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/marketing/Section";

export const HomeCTA = () => {
  const navigate = useNavigate();

  return (
    <Section bg="navy" rhythm="closing" className="parchment-surface--deep relative overflow-hidden">
      {/* Gold ornament line behind the heading */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
        <span className="ornament-fleuron text-manuscript-gold/30" aria-hidden>❦</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <p className="chapter-eyebrow">A closing invitation</p>
        <hr className="ink-rule--gold mx-auto mt-4 w-32" />
        <h2 className="mt-6 font-manuscript text-[clamp(28px,4.5vw,44px)] font-semibold leading-[1.15] tracking-[-0.02em] text-manuscript-ink">
          Tell us what you&apos;re building. We&apos;ll tell you how we&apos;d ship it.
        </h2>
        <p className="mt-6 max-w-xl font-manuscriptBody text-base leading-relaxed text-manuscript-inkSoft">
          A free 30-minute architecture review with senior engineers. No sales pitch — just a
          straight answer on how we&apos;d build it and what it takes.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button variant="brand" size="lg" onClick={() => navigate("/contact")} className="bg-manuscript-ink text-manuscript-parchmentLight hover:bg-manuscript-walnutDeep">
            Book a strategy call
            <ArrowRight className="h-4 w-4" />
          </Button>
          <button
            onClick={() => navigate("/company/case-studies")}
            className="inline-flex items-center gap-1.5 font-manuscriptBody text-sm font-semibold text-manuscript-walnutDeep transition-colors hover:text-manuscript-rustDeep"
          >
            See our work
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="ornament-dots mx-auto mt-12 max-w-xs">
          <span>✦ ✦ ✦</span>
        </div>
      </motion.div>
    </Section>
  );
};
