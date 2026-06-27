import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useHaptic } from '@/hooks/use-haptic';
import { fadeUp } from '@/lib/motion';
import type { LucideIcon } from 'lucide-react';

export type ServiceVisualKey =
  | 'enterprise-product' | 'cloud-web' | 'mobile-engineering' | 'ai-systems'
  | 'deep-ai' | 'business-automation' | 'startup-scale';

export interface MobileServiceHeroProps {
  eyebrow: string; title: React.ReactNode; subtitle: string; icon: LucideIcon;
  visual: ServiceVisualKey;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  highlights?: string[];
}

const VISUAL_LABELS: Record<ServiceVisualKey, string> = {
  'enterprise-product': 'PRODUCT', 'cloud-web': 'CLOUD', 'mobile-engineering': 'MOBILE',
  'ai-systems': 'AI', 'deep-ai': 'DEEP AI', 'business-automation': 'OPS', 'startup-scale': 'STARTUP',
};

const VISUAL_GRADIENTS: Record<ServiceVisualKey, string> = {
  'enterprise-product': 'radial-gradient(circle at 50% 30%, rgba(247,126,13,0.25) 0%, transparent 60%)',
  'cloud-web': 'radial-gradient(circle at 50% 30%, rgba(247,126,13,0.22) 0%, transparent 60%)',
  'mobile-engineering': 'radial-gradient(circle at 50% 30%, rgba(139,92,246,0.25) 0%, transparent 60%)',
  'ai-systems': 'radial-gradient(circle at 50% 30%, rgba(247,126,13,0.30) 0%, transparent 60%)',
  'deep-ai': 'radial-gradient(circle at 50% 30%, rgba(168,85,247,0.28) 0%, transparent 60%)',
  'business-automation': 'radial-gradient(circle at 50% 30%, rgba(34,211,238,0.22) 0%, transparent 60%)',
  'startup-scale': 'radial-gradient(circle at 50% 30%, rgba(249,115,22,0.22) 0%, transparent 60%)',
};

export function MobileServiceHero({ eyebrow, title, subtitle, icon: Icon, visual, primaryCta, secondaryCta, highlights }: MobileServiceHeroProps) {
  const haptic = useHaptic();
  return (
    <motion.section initial="hidden" animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#030B1D] via-[#020617] to-[#030B1D] pt-safe-or-4 pb-mobile-3xl px-mobile-base"
    >
      <div aria-hidden="true" className="absolute inset-0 opacity-80" style={{ backgroundImage: VISUAL_GRADIENTS[visual] }} />
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="relative z-10 max-w-xl mx-auto">
        <motion.div variants={fadeUp} className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-full ai-orb-glow animate-orb-pulse" />
            <div className="relative h-20 w-20 rounded-full border-2 border-white/20 flex items-center justify-center text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_32px_rgba(247,126,13,0.3)] ai-orb-base">
              <Icon size={32} />
            </div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[rgba(15,23,42,0.78)] backdrop-blur-glass-2 border border-white/[0.18] text-[10px] font-bold tracking-[0.15em] text-white">{VISUAL_LABELS[visual]}</span>
          </div>
        </motion.div>
        <motion.p variants={fadeUp} className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight text-center mb-3">{eyebrow}</motion.p>
        <motion.h1 variants={fadeUp} className="text-display-lg text-white tracking-tight text-center mb-4">{title}</motion.h1>
        <motion.p variants={fadeUp} className="text-base text-white/70 text-center max-w-md mx-auto mb-7 leading-relaxed">{subtitle}</motion.p>
        {highlights && highlights.length > 0 && (
          <motion.ul variants={fadeUp} className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-7 text-[12px] text-white/70">
            {highlights.map((h) => (<li key={h} className="inline-flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-neo-highlight" />{h}</li>))}
          </motion.ul>
        )}
        <motion.div variants={fadeUp} className="flex flex-col gap-3">
          {primaryCta && (
            <Link to={primaryCta.href} onClick={() => haptic('medium')}
              className="group h-14 px-6 rounded-3xl bg-gradient-to-br from-neo-deep via-neo-blue to-neo-highlight text-white font-bold text-base flex items-center justify-center gap-2 shadow-[0_8px_24px_-4px_rgba(247,126,13,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] border border-white/20 active:scale-[0.98] transition-transform">
              {primaryCta.label}<ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
          {secondaryCta && (
            <Link to={secondaryCta.href} className="h-12 px-5 rounded-2xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-glass-1 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white/[0.10] transition-colors">{secondaryCta.label}</Link>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
