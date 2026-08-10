import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export type GlassButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';
export type GlassButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface GlassButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: GlassButtonVariant;
  size?: GlassButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<GlassButtonVariant, string> = {
  primary:
    'bg-gradient-to-br from-neo-deep via-neo-blue to-neo-highlight text-white border-white/20 shadow-[0_8px_24px_-4px_rgba(247,126,13,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]',
  secondary:
    'parchment-surface/[0.06] backdrop-blur-glass-1 backdrop-saturate-glass text-white border-white/[0.12] hover:parchment-surface/[0.10]',
  ghost:
    'bg-transparent text-white border-transparent hover:parchment-surface/[0.06]',
  destructive:
    'bg-gradient-to-br from-red-500 to-red-700 text-white border-red-300/30 shadow-[0_8px_24px_-4px_rgba(239,68,68,0.4)]',
};

const sizeStyles: Record<GlassButtonSize, string> = {
  sm: 'h-11 px-4 text-sm rounded-2xl gap-2',
  md: 'h-12 px-5 text-[15px] rounded-2xl gap-2',
  lg: 'h-14 px-6 text-base rounded-3xl gap-2.5',
  xl: 'h-touch-xl px-8 text-lg rounded-3xl gap-3',
};

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(function GlassButton(
  { variant = 'primary', size = 'md', fullWidth, icon, iconRight, loading, className, disabled, children, onTap, ...rest },
  ref,
) {
  return (
    <motion.button
      ref={ref}
      whileTap={disabled || loading ? undefined : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.5 }}
      disabled={disabled || loading}
      onTap={onTap}
      className={cn(
        'relative inline-flex items-center justify-center font-semibold tracking-tight overflow-hidden border',
        'transition-[background,box-shadow,border-color] duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neo-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-[#030B1D]',
        'disabled:opacity-50 disabled:pointer-events-none',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        className,
      )}
      {...rest}
    >
      {loading && (
        <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center parchment-surface--deep/20 backdrop-blur-sm">
          <span className="h-5 w-5 rounded-full border-2 border-white/40 border-t-white animate-spin" />
        </span>
      )}
      {icon && <span className="shrink-0 inline-flex">{icon}</span>}
      <span className="relative inline-flex items-center">{children}</span>
      {iconRight && <span className="shrink-0 inline-flex">{iconRight}</span>}
    </motion.button>
  );
});
