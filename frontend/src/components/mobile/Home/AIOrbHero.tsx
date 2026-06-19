import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Brain, type LucideIcon } from 'lucide-react';
import { springs, fadeUp } from '@/lib/motion';
import { useHaptic } from '@/hooks/use-haptic';
import { cn } from '@/lib/utils';

export interface AIOrbHeroProps {
  badge?: string;
  headline: React.ReactNode;
  subheadline: string;
  trustItems?: string[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function AIOrbHero({
  badge = 'AI-First Engineering',
  headline,
  subheadline,
  trustItems = ['AI First', 'Enterprise', 'Startup Friendly'],
  primaryCta = { label: 'Book Free Consultation', href: '/contact' },
  secondaryCta = { label: 'Explore Services', href: '/services' },
}: AIOrbHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 0.9]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.85, 0.5]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const haptic = useHaptic();

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
      className="relative w-full min-h-[100svh] overflow-hidden bg-gradient-to-b from-[#030B1D] via-[#020617] to-[#030B1D] pt-safe-or-4 pb-mobile-3xl"
    >
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 50% 100%, rgba(0,229,255,0.4) 0%, transparent 60%), linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '100% 100%, 24px 24px, 24px 24px' }} />
      <Particles count={20} />
      <motion.div aria-hidden="true" style={{ y: orbY, scale: orbScale, opacity: orbOpacity }} className="pointer-events-none absolute left-1/2 top-[28%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px]">
          <div className="absolute inset-0 rounded-full ai-orb-glow animate-orb-pulse" />
          <div className="absolute inset-4 rounded-full ai-orb-base animate-orb-rotate-slow" />
          <div className="absolute inset-8 rounded-full border border-white/[0.18]" />
          <div className="absolute inset-12 rounded-full border border-white/[0.10]" />
          <div className="absolute inset-0 flex items-center justify-center"><span className="text-[10px] font-bold tracking-[0.3em] text-white/80">NP · AI</span></div>
          <FloatingChip icon={Brain} label="RAG" angle={45} distance={150} delay={0.4} />
          <FloatingChip icon={Sparkles} label="LLM" angle={135} distance={160} delay={0.6} />
          <FloatingChip icon={Zap} label="EDGE" angle={225} distance={150} delay={0.8} />
          <FloatingChip icon={Sparkles} label="AGENT" angle={315} distance={160} delay={1.0} />
        </div>
      </motion.div>

      <motion.div style={{ y: textY }} className="relative z-10 mx-auto max-w-xl flex flex-col items-center px-mobile-base text-center pt-[calc(60vh-60px)]">
        <motion.div variants={fadeUp} className="mb-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.05] backdrop-blur-glass-1 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-neo-highlight animate-dot-pulse" />{badge}
          </span>
        </motion.div>
        <motion.h1 variants={fadeUp} className="text-display-xl text-white tracking-tight mb-4">{headline}</motion.h1>
        <motion.p variants={fadeUp} className="text-base sm:text-lg text-white/70 leading-relaxed max-w-md mb-7">{subheadline}</motion.p>
        <motion.div variants={fadeUp} className="flex flex-col w-full gap-3 mb-8">
          <Link to={primaryCta.href} onClick={() => haptic('medium')} className="group h-14 px-6 rounded-3xl bg-gradient-to-br from-neo-deep via-neo-blue to-neo-highlight text-white font-bold text-base flex items-center justify-center gap-2 shadow-[0_8px_24px_-4px_rgba(37,99,255,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] border border-white/20 active:scale-[0.98] transition-transform">
            {primaryCta.label}<ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to={secondaryCta.href} className="h-12 px-5 rounded-2xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-glass-1 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white/[0.10] transition-colors">
            {secondaryCta.label}
          </Link>
        </motion.div>
        <motion.ul variants={fadeUp} className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] text-white/70">
          {trustItems.map((t) => (<li key={t} className="inline-flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-neo-highlight" />{t}</li>))}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
}

function FloatingChip({ icon: Icon, label, angle, distance, delay }: { icon: LucideIcon; label: string; angle: number; distance: number; delay: number }) {
  const rad = (angle * Math.PI) / 180;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
      transition={{ ...springs.magnetic, delay }}
      style={{ transform: `translate(${Math.cos(rad) * distance}px, ${Math.sin(rad) * distance}px)` }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="h-9 px-3 rounded-full bg-[rgba(15,23,42,0.78)] backdrop-blur-glass-2 border border-white/[0.18] flex items-center gap-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
        <Icon size={12} /><span className="text-[10px] font-bold tracking-[0.1em] text-white">{label}</span>
      </div>
    </motion.div>
  );
}

function Particles({ count = 20 }: { count?: number }) {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0], y: [-10, -40, -80] }}
          transition={{ duration: 4 + (i % 5), delay: (i * 0.3) % 3, repeat: Infinity, ease: 'linear' }}
          className="absolute rounded-full bg-neo-highlight"
          style={{ left: `${(i * 137.5) % 100}%`, top: `${(i * 91.3) % 100}%`, width: 2 + (i % 3), height: 2 + (i % 3) }}
        />
      ))}
    </div>
  );
}
