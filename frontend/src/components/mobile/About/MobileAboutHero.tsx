import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Code2, Cpu } from 'lucide-react';
import { fadeUp } from '@/lib/motion';

export function MobileAboutHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="vision" ref={ref} className="relative w-full min-h-[70svh] overflow-hidden bg-gradient-to-b from-[#030B1D] via-[#020617] to-[#030B1D] pt-24 pb-12">
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(247,126,13,0.4) 0%, transparent 60%), linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '100% 100%, 24px 24px, 24px 24px' }} />
      
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto px-mobile-base pt-10">
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="flex flex-col">
          <motion.div variants={fadeUp} className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.05] backdrop-blur-glass-1 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-neo-highlight">
              Our Story
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-display-lg text-white tracking-tight mb-4">
            Engineers first.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-base text-white/70 leading-relaxed mb-10">
            We architect, build, and deploy enterprise-grade software and AI systems for ambitious companies.
          </motion.p>

          <motion.div variants={fadeUp} className="grid grid-cols-1 gap-3">
            {[
              { icon: Code2, title: 'Engineering Over Hype', desc: 'We build systems that scale, not fragile prototypes.' },
              { icon: Cpu, title: 'AI-Native Architecture', desc: 'Intelligence built into the core foundation.' },
              { icon: Building2, title: 'Enterprise Grade', desc: 'Secure, reliable, and compliant by default.' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-glass-1">
                <div className="shrink-0 h-10 w-10 rounded-xl bg-neo-blue/15 text-neo-highlight flex items-center justify-center">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-white/50 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
