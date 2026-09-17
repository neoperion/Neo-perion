import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { fritadoConfig } from "@/data/fritadoConfig";
import { trackEvent } from "@/shared/analytics";

export const FritadoFinalCTA: React.FC = () => {
  const handlePrimaryClick = () => {
    trackEvent("fritado_final_cta_click", {
      product: "fritado",
      source_section: "final_cta",
      cta_variant: "primary",
      destination: fritadoConfig.primaryUrl,
    });
    window.open(fritadoConfig.primaryUrl, "_blank", "noopener,noreferrer");
  };

  const handleSecondaryClick = () => {
    trackEvent("fritado_final_cta_click", {
      product: "fritado",
      source_section: "final_cta",
      cta_variant: "secondary",
      destination: fritadoConfig.officialUrl,
    });
    window.open(fritadoConfig.officialUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="trial" className="scroll-mt-28 py-20 sm:py-28 relative overflow-hidden bg-manuscript-parchment text-manuscript-ink font-sans border-t border-manuscript-parchmentDeep">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Eyebrow badge with Viewport Entrance */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-wider bg-manuscript-copper/10 text-manuscript-copper border border-manuscript-copper/20 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper" />
              7-DAY FREE TRIAL AVAILABLE
            </span>
          </motion.div>

          {/* Headline with Viewport Entrance */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-manuscript text-3xl sm:text-4xl lg:text-5xl font-bold text-manuscript-ink tracking-tight leading-tight"
          >
            Experience Fritado.
          </motion.h2>

          {/* Subtext with Viewport Entrance */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="font-manuscriptBody text-base sm:text-lg text-manuscript-inkMuted leading-relaxed max-w-xl mx-auto"
          >
            Start your 7-day free trial and explore the platform yourself.
          </motion.p>

          {/* Dual CTAs with Stagger & Tap Feedback */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA */}
            <motion.button
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handlePrimaryClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md font-sans font-semibold text-sm tracking-wide bg-manuscript-copper text-white hover:bg-manuscript-copperDeep transition-colors duration-150 shadow-md group focus:outline-none focus:ring-2 focus:ring-manuscript-copper focus:ring-offset-2 select-none"
            >
              <span>START 7-DAY FREE TRIAL</span>
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handleSecondaryClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-sans font-semibold text-sm tracking-wide bg-white/80 border border-manuscriptAlpha-ink-20 text-manuscript-ink hover:bg-white transition-colors group focus:outline-none focus:ring-2 focus:ring-manuscript-ink/30 select-none"
            >
              <span>VISIT FRITADO</span>
              <ExternalLink size={14} className="text-manuscript-inkMuted group-hover:text-manuscript-ink transition-colors" />
            </motion.button>
          </motion.div>

          {/* Microcopy */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="pt-2 text-xs font-sans text-manuscript-inkMuted"
          >
            7-day free trial · No credit card required*
          </motion.p>

          {/* Small: A product from AINCURU */}
          <div className="pt-8 border-t border-manuscriptAlpha-ink-10 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs font-sans text-manuscript-inkMuted">
            <span className="font-bold text-manuscript-ink">A product from AINCURU</span>
            <span className="hidden sm:inline">·</span>
            <span>Enterprise B2B Technology Platform</span>
            <span className="hidden sm:inline">·</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FritadoFinalCTA;
