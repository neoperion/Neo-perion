import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface GlassNavProps extends Omit<HTMLMotionProps<'nav'>, 'children'> {
  variant?: 'pill' | 'bar';
  glow?: boolean;
  children: React.ReactNode;
}

const variantStyles = {
  pill:
    'bg-[rgba(15,23,42,0.65)] backdrop-blur-glass-2 backdrop-saturate-glass-high border border-white/[0.12] rounded-full shadow-[0_12px_48px_rgba(0,0,0,0.45)]',
  bar:
    'bg-[rgba(15,23,42,0.78)] backdrop-blur-glass-3 backdrop-saturate-glass-max border-b border-white/[0.10] shadow-[0_8px_32px_rgba(0,0,0,0.35)]',
};

export const GlassNav = forwardRef<HTMLElement, GlassNavProps>(function GlassNav(
  { variant = 'pill', glow, className, children, ...rest },
  ref,
) {
  return (
    <motion.nav
      ref={ref}
      role="navigation"
      aria-label="Primary"
      initial={false}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 380, damping: 28, mass: 0.8 }}
      className={cn(
        'relative',
        variant === 'pill' && 'rounded-full',
        variantStyles[variant],
        glow && 'shadow-[0_0_60px_rgba(0,229,255,0.20),0_12px_48px_rgba(0,0,0,0.45)]',
        className,
      )}
      {...rest}
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.18] to-transparent rounded-full" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay rounded-[inherit]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      <div className="relative">{children}</div>
    </motion.nav>
  );
});
