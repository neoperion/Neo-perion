import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useHaptic } from '@/hooks/use-haptic';
import { springs } from '@/lib/motion';

export interface AINavOrbProps {
  onClick: () => void;
  isOpen?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

export function AINavOrb({ onClick, isOpen = false, size = 'md', className }: AINavOrbProps) {
  const haptic = useHaptic();
  const sizes = { sm: { outer: 'h-10 w-10', inner: 'h-6 w-6' }, md: { outer: 'h-12 w-12', inner: 'h-7 w-7' } };
  const s = sizes[size];

  return (
    <motion.button
      type="button"
      onClick={() => { haptic('light'); onClick(); }}
      whileTap={{ scale: 0.92 }}
      transition={springs.magnetic}
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={isOpen}
      aria-haspopup="dialog"
      className={cn('relative shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neo-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-[#030B1D]', s.outer, className)}
    >
      <span aria-hidden="true" className={cn('absolute inset-0 rounded-full ai-orb-base animate-orb-rotate-slow', isOpen ? 'opacity-100' : 'opacity-90')} />
      <span aria-hidden="true" className={cn('absolute inset-0 rounded-full ai-orb-glow animate-orb-pulse', s.outer)} />
      <span className={cn('absolute inset-0 rounded-full border border-white/20', 'shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_16px_rgba(0,229,255,0.3)]')} />
      <span aria-hidden="true" className={cn('absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-all duration-300', s.inner, isOpen && 'scale-50 opacity-0')} />
      <span aria-hidden="true" className={cn('absolute inset-0 flex items-center justify-center text-white transition-opacity duration-200', isOpen ? 'opacity-100' : 'opacity-0')}>
        <span className="block h-0.5 w-4 bg-white rotate-45 absolute" />
        <span className="block h-0.5 w-4 bg-white -rotate-45 absolute" />
      </span>
    </motion.button>
  );
}
