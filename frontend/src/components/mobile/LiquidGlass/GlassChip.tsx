import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type GlassChipSize = 'sm' | 'md' | 'lg';
export type GlassChipVariant = 'default' | 'active' | 'glow' | 'outline';

export interface GlassChipProps {
  size?: GlassChipSize;
  variant?: GlassChipVariant;
  icon?: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
  className?: string;
  children: React.ReactNode;
}

const sizeStyles: Record<GlassChipSize, string> = {
  sm: 'h-7 px-2.5 text-[11px] rounded-full gap-1',
  md: 'h-8 px-3 text-xs rounded-full gap-1.5',
  lg: 'h-10 px-4 text-sm rounded-full gap-2',
};

const variantStyles: Record<GlassChipVariant, string> = {
  default: 'bg-white/[0.06] backdrop-blur-glass-1 text-white/80 border-white/[0.10]',
  active: 'bg-gradient-to-br from-neo-blue to-neo-highlight text-white border-white/30 shadow-[0_4px_16px_rgba(0,229,255,0.3)]',
  glow: 'bg-white/[0.08] backdrop-blur-glass-2 text-white border-white/[0.18] shadow-[0_0_24px_rgba(0,229,255,0.18)]',
  outline: 'bg-transparent text-white/90 border-white/[0.20]',
};

export function GlassChip({
  size = 'md',
  variant = 'default',
  icon,
  onClick,
  selected,
  className,
  children,
}: GlassChipProps) {
  const isInteractive = Boolean(onClick);
  const finalVariant = selected ? 'active' : variant;
  const Component = isInteractive ? motion.button : motion.span;

  return (
    <Component
      whileTap={isInteractive ? { scale: 0.95 } : undefined}
      transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.5 }}
      onClick={onClick}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-pressed={isInteractive ? selected : undefined}
      className={cn(
        'relative inline-flex items-center justify-center font-medium border',
        'transition-[background,box-shadow] duration-200 whitespace-nowrap',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neo-highlight',
        sizeStyles[size],
        variantStyles[finalVariant],
        className,
      )}
    >
      {icon && <span className="shrink-0 inline-flex">{icon}</span>}
      <span>{children}</span>
    </Component>
  );
}
