import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface GlassToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

const sizeMap = {
  sm: { track: 'h-6 w-11', thumb: 'h-5 w-5', translate: 20 },
  md: { track: 'h-7 w-12', thumb: 'h-6 w-6', translate: 22 },
} as const;

export function GlassToggle({
  checked,
  onChange,
  label,
  description,
  disabled,
  size = 'md',
  className,
}: GlassToggleProps) {
  const sizes = sizeMap[size];

  const toggle = (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={cn(
        'relative shrink-0 rounded-full transition-colors duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neo-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-[#030B1D]',
        'border border-white/[0.10]',
        checked
          ? 'bg-gradient-to-br from-neo-blue to-neo-highlight shadow-[0_0_18px_rgba(0,229,255,0.4)]'
          : 'bg-white/[0.08] backdrop-blur-glass-1',
        sizes.track,
        disabled && 'opacity-50 pointer-events-none',
        className,
      )}
    >
      <motion.span
        layout
        animate={{ x: checked ? sizes.translate : 2 }}
        transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.5 }}
        className={cn('absolute top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md', sizes.thumb)}
      />
    </button>
  );

  if (!label && !description) return toggle;

  return (
    <div className="flex items-start justify-between gap-4 py-2">
      <div className="flex-1 min-w-0">
        {label && <p className="text-sm font-semibold text-white">{label}</p>}
        {description && <p className="text-xs text-white/60 mt-0.5">{description}</p>}
      </div>
      {toggle}
    </div>
  );
}
