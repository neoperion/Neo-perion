import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useScrollDirection } from '@/hooks/use-scroll-direction';
import { springs } from '@/lib/motion';
import { AINavOrb } from './AINavOrb';

export type HeaderState = 'transparent' | 'glass' | 'compact' | 'hidden' | 'reveal';

export interface ScrollReactiveHeaderProps {
  onOrbClick: () => void;
  orbOpen?: boolean;
  showLogo?: boolean;
}

export function ScrollReactiveHeader({ onOrbClick, orbOpen = false, showLogo = true }: ScrollReactiveHeaderProps) {
  const { scrollY, direction } = useScrollDirection({ threshold: 6 });
  const [state, setState] = useState<HeaderState>('transparent');

  useEffect(() => {
    let next: HeaderState = 'transparent';
    if (scrollY < 80) next = 'transparent';
    else if (scrollY < 240) next = 'glass';
    else next = 'compact';
    if (next === 'compact' && direction === 'down' && scrollY > 320) next = 'hidden';
    if (state === 'hidden' && direction === 'up') next = 'reveal';
    if (state === 'reveal' && next !== 'reveal') next = 'compact';
    setState(next);
  }, [scrollY, direction, state]);

  const visible = state !== 'hidden';
  const location = useLocation();
  const isCompact = state === 'compact' || state === 'reveal';

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          key="header"
          initial={false}
          animate={{ y: 0, opacity: 1, height: isCompact ? 48 : 56 }}
          transition={springs.menu}
          className={cn('fixed top-0 left-0 right-0 z-mobile-nav md:hidden flex items-center transition-[background,border,backdrop-filter] duration-300',
            state === 'transparent'
              ? 'bg-transparent border-b border-transparent'
              : state === 'glass'
                ? 'bg-[rgba(15,23,42,0.65)] backdrop-blur-glass-2 backdrop-saturate-glass-high border-b border-white/[0.10] shadow-[0_8px_24px_rgba(0,0,0,0.25)]'
                : 'bg-[rgba(2,4,10,0.82)] backdrop-blur-glass-3 backdrop-saturate-glass-max border-b border-white/[0.14] shadow-[0_12px_36px_rgba(0,0,0,0.45)]',
          )}
        >
          <div className="flex-1 flex items-center justify-between px-mobile-base pt-safe-or-4">
            {showLogo && (
              <Link to="/" className="flex items-center gap-2 min-w-0">
                <img src="/images/np-logo.png" alt="AINCURU" className={cn('object-contain transition-all', isCompact ? 'h-6 w-auto' : 'h-8 w-auto')} />
              </Link>
            )}
            <div className="flex items-center gap-1.5">
              {location.pathname !== '/contact' && (
                <Link to="/contact" className="hidden sm:inline-flex h-9 px-3.5 rounded-full bg-gradient-to-br from-neo-blue to-neo-highlight text-white text-[12px] font-bold items-center shadow-[0_4px_12px_rgba(247,126,13,0.3)]">
                  Contact
                </Link>
              )}
              <AINavOrb onClick={onOrbClick} isOpen={orbOpen} size={isCompact ? 'sm' : 'md'} />
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
