import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useScrollDirection } from '@/hooks/use-scroll-direction';
import { springs } from '@/lib/motion';
import { AINavOrb } from './AINavOrb';

export interface FloatingNavProps {
  onOrbClick: () => void;
  onSectionClick?: (section: 'services' | 'industries' | 'company') => void;
  orbOpen?: boolean;
}

// Mirrors the desktop header: What we do → Services, Portfolio (direct), About → company
const quickLinks = [
  { label: 'Services',  kind: 'section', section: 'services' as const },
  { label: 'Portfolio', kind: 'link',    href: '/portfolio' },
  { label: 'About',     kind: 'section', section: 'company' as const },
] as const;

export function FloatingNav({ onOrbClick, onSectionClick, orbOpen = false }: FloatingNavProps) {
  const location = useLocation();
  const navigate  = useNavigate();
  const { scrollY, direction } = useScrollDirection({ threshold: 6 });
  const [isAtTop, setIsAtTop]  = useState(true);
  const [hidden, setHidden]    = useState(false);

  useEffect(() => { setIsAtTop(scrollY < 80); }, [scrollY]);
  useEffect(() => {
    if (isAtTop) { setHidden(false); return; }
    if (direction === 'down' && scrollY > 240) setHidden(true);
    else if (direction === 'up') setHidden(false);
  }, [direction, isAtTop, scrollY]);

  const isActive = (q: (typeof quickLinks)[number]) => {
    if (q.kind === 'link')    return location.pathname.startsWith(q.href);
    if (q.section === 'services')  return location.pathname.startsWith('/services');
    if (q.section === 'company')   return (
      ['/company/about', '/company/careers', '/company/blog', '/company/case-studies',
       '/company/newsletter', '/company/insights', '/company/testimonials',
       '/company/success-stories', '/company/founder-letter'].some((p) => location.pathname.startsWith(p))
    );
    return false;
  };

  return (
    <motion.nav
      initial={false}
      animate={{ y: hidden ? 80 : 0, opacity: hidden ? 0 : 1, scale: scrollY >= 240 ? 0.94 : 1 }}
      transition={springs.menu}
      role="navigation"
      aria-label="Primary"
      className="fixed bottom-4 left-0 right-0 z-mobile-nav md:hidden flex justify-center px-mobile-base pb-safe-or-6 pointer-events-none"
    >
      <div className={cn(
        'relative flex items-center gap-2 px-2 py-2 rounded-full pointer-events-auto transition-[background,border,box-shadow] duration-300',
        scrollY >= 80
          ? 'bg-[rgba(15,23,42,0.82)] backdrop-blur-glass-3 backdrop-saturate-glass-max border border-white/[0.14] shadow-[0_16px_56px_rgba(0,0,0,0.55),0_0_40px_rgba(247,126,13,0.08)]'
          : 'bg-[rgba(15,23,42,0.55)] backdrop-blur-glass-2 backdrop-saturate-glass-high border border-white/[0.10] shadow-[0_12px_36px_rgba(0,0,0,0.4)]',
      )}>
        {/* Noise grain */}
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full opacity-[0.04] mix-blend-overlay"
          style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")" }} />

        {/* Home logo */}
        <Link to="/" className="h-10 w-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center" aria-label="Neo Perion home">
          <img src="/images/np-logo.png" alt="" className="h-6 w-6 object-contain" />
        </Link>

        {/* Quick links — Services | Portfolio | About */}
        <div className="flex items-center gap-0.5 px-0.5">
          {quickLinks.map((q) => {
            const active = isActive(q);

            if (q.kind === 'link') {
              return (
                <button
                  key={q.label}
                  type="button"
                  onClick={() => navigate(q.href)}
                  className={cn(
                    'h-9 px-3.5 rounded-full text-[12px] font-bold uppercase tracking-[0.04em] flex items-center transition-colors',
                    active
                      ? 'bg-[#F77E0D]/20 text-[#F77E0D]'
                      : 'text-white/75 hover:text-white hover:bg-white/[0.06]',
                  )}
                >
                  {q.label}
                </button>
              );
            }

            return (
              <button
                key={q.label}
                type="button"
                onClick={() => onSectionClick ? onSectionClick(q.section) : onOrbClick()}
                className={cn(
                  'h-9 px-3.5 rounded-full text-[12px] font-bold uppercase tracking-[0.04em] flex items-center transition-colors',
                  active
                    ? 'bg-[#F77E0D]/20 text-[#F77E0D]'
                    : 'text-white/75 hover:text-white hover:bg-white/[0.06]',
                )}
              >
                {q.label}
              </button>
            );
          })}
        </div>

        {/* AI Orb — full menu */}
        <AINavOrb onClick={onOrbClick} isOpen={orbOpen} size="sm" />
      </div>
    </motion.nav>
  );
}
