import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/marketing/Section";

export const HomeCTA = () => {
  const navigate = useNavigate();

  return (
    <Section bg="navy" rhythm="closing">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <h2 className="font-display text-[clamp(28px,4.5vw,44px)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
          Tell us what you&apos;re building. We&apos;ll tell you how we&apos;d ship it.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300">
          A free 30-minute architecture review with senior engineers. No sales pitch — just a
          straight answer on how we&apos;d build it and what it takes.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button variant="brand" size="lg" onClick={() => navigate("/contact")}>
            Book a strategy call
            <ArrowRight className="h-4 w-4" />
          </Button>
          <button
            onClick={() => navigate("/company/case-studies")}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 transition-colors hover:text-white"
          >
            See our work
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </motion.div>
    </Section>
  );
};
