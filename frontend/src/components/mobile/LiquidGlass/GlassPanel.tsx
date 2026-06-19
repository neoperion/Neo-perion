import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { liquidFade } from '@/lib/motion';
import { cn } from '@/lib/utils';

export interface GlassPanelProps extends Omit<HTMLMotionProps<'section'>, 'children'> {
  noise?: boolean;
  inset?: boolean;
  as?: 'section' | 'div' | 'article';
  children: React.ReactNode;
}

export const GlassPanel = forwardRef<HTMLElement, GlassPanelProps>(function GlassPanel(
  { noise = true, inset, as = 'section', className, children, ...rest },
  ref,
) {
  const MotionTag = motion[as] as typeof motion.section;
  return (
    <MotionTag
      ref={ref as never}
      variants={liquidFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={cn(
        'relative overflow-hidden rounded-[32px]',
        'bg-[rgba(5,8,22,0.55)] backdrop-blur-glass-1 backdrop-saturate-glass',
        'border border-white/[0.08]',
        'shadow-[0_8px_32px_rgba(0,0,0,0.35)]',
        inset && 'p-mobile-lg',
        className,
      )}
      {...rest}
    >
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
