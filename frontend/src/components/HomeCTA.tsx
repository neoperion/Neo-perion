import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HomeCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="parchment-surface--deep relative py-24 md:py-32 overflow-hidden border-b border-manuscriptAlpha-ink-10">
      
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="w-[1200px] h-[1200px] text-manuscript-walnutDeep" fill="none">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 2" />
          <path d="M50 0 L50 100 M0 50 L100 50" stroke="currentColor" strokeWidth="0.1" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mx-auto flex max-w-3xl flex-col items-center text-center z-10 px-4 sm:px-6 w-full box-border"
      >
        <p className="chapter-eyebrow text-manuscript-copper mb-4">A FINAL NOTE</p>
        
        <h2 className="heading-manuscript text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.2] tracking-tight text-manuscript-ink pb-2 break-words">
          Have something worth building?
        </h2>
        
        <p className="mt-6 md:mt-8 max-w-lg font-manuscriptBody text-[16px] md:text-lg leading-relaxed text-manuscript-inkSoft">
          Tell us what you're working on.<br />
          We'll help you understand what it should become.
        </p>

        <div className="mt-10 md:mt-12 w-full sm:w-auto">
          <button
            onClick={() => navigate("/contact")}
            className="group relative inline-flex w-full sm:w-auto justify-center items-center gap-3 border border-manuscript-walnutDeep px-4 sm:px-8 py-4 font-manuscriptBody text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.22em] text-manuscript-parchmentLight shadow-[0_12px_30px_-15px_rgba(139,58,31,0.6)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-15px_rgba(139,58,31,0.7)] box-border"
            style={{
              backgroundColor: "#8B3A1F", // rustDeep for high contrast
              borderRadius: 2,
            }}
          >
            <span className="text-center">START A CONVERSATION</span>
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 text-manuscript-goldDeep" strokeWidth={2} />
          </button>
        </div>

      </motion.div>
    </section>
  );
};
