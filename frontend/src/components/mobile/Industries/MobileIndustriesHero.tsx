import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

export function MobileIndustriesHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative w-full min-h-[60svh] overflow-hidden bg-gradient-to-b from-[#030B1D] via-[#020617] to-[#030B1D] pt-28 pb-12">
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(139,92,246,0.4) 0%, transparent 60%), linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '100% 100%, 24px 24px, 24px 24px' }} />
      
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto px-mobile-base pt-10 text-center">
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="flex flex-col items-center">
          <motion.div variants={fadeUp} className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.05] backdrop-blur-glass-1 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#a78bfa]">
              Industries
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-display-lg text-white tracking-tight mb-4">
            Domain <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-[#FFB05C]">Expertise</span>.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-base text-white/70 leading-relaxed">
            Purpose-built digital solutions tailored to the unique challenges of your industry.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
