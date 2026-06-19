import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { liquidFade } from '@/lib/motion';
import { cn } from '@/lib/utils';

export type GlassLayer = 1 | 2 | 3;
export type GlassGlow = 'none' | 'cyan' | 'purple' | 'gradient';

export interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  layer?: GlassLayer;
  glow?: GlassGlow;
  interactive?: boolean;
  noise?: boolean;
  shine?: boolean;
  as?: 'div' | 'section' | 'article' | 'aside';
  children: React.ReactNode;
}

const layerStyles: Record<GlassLayer, string> = {
  1: 'bg-[rgba(5,8,22,0.55)] backdrop-blur-glass-1 backdrop-saturate-glass border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.35)]',
  2: 'bg-[rgba(15,23,42,0.65)] backdrop-blur-glass-2 backdrop-saturate-glass-high border border-white/[0.10] shadow-[0_12px_48px_rgba(0,0,0,0.45)]',
  3: 'bg-[rgba(2,4,10,0.78)] backdrop-blur-glass-3 backdrop-saturate-glass-max border border-white/[0.14] shadow-[0_24px_80px_rgba(0,0,0,0.65)]',
};

const glowStyles: Record<GlassGlow, string> = {
  none: '',
  cyan: 'shadow-[0_0_60px_rgba(0,229,255,0.18),0_8px_32px_rgba(0,0,0,0.35)]',
  purple: 'shadow-[0_0_60px_rgba(139,92,246,0.18),0_8px_32px_rgba(0,0,0,0.35)]',
  gradient: 'shadow-[0_0_80px_rgba(0,229,255,0.12),0_0_120px_rgba(139,92,246,0.10),0_8px_32px_rgba(0,0,0,0.35)]',
};

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(function GlassCard(
  { layer = 1, glow = 'none', interactive = false, noise = true, shine = false, as = 'div', className, children, ...rest },
  ref,
) {
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref as never}
      variants={liquidFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      whileTap={interactive ? { scale: 0.985 } : undefined}
      whileHover={interactive ? { y: -2 } : undefined}
      transition={{ type: 'spring', stiffness: 320, damping: 32, mass: 0.9 }}
      className={cn(
        'relative overflow-hidden rounded-3xl',
        layerStyles[layer],
        glowStyles[glow],
        interactive && 'cursor-pointer transition-shadow duration-300',
        className,
      )}
      {...rest}
    >
      {shine && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent blur-md"
        />
      )}
      {noise && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay rounded-[inherit]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />
      )}
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />
      <div className="relative">{children}</div>
    </MotionTag>
  );
});
