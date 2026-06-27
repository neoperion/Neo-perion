import { useState, useCallback } from 'react';
import { MobileMenuV2 } from './MobileMenuV2';
import { FloatingNav } from './FloatingNav';
import { AccordionFooter } from '../Footer/AccordionFooter';

export interface MobileShellProps {
  nav?: 'bottom' | 'top' | 'none';
  showFooter?: boolean;
  children: React.ReactNode;
  bgClass?: string;
}

export function MobileShell({ nav = 'bottom', showFooter = true, children, bgClass = 'bg-[#02040A]' }: MobileShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [focusSection, setFocusSection] = useState<'services' | 'industries' | 'company' | null>(null);
  const open = useCallback(() => setMenuOpen(true), []);
  const close = useCallback(() => setMenuOpen(false), []);
  const openWithSection = useCallback((section: 'services' | 'industries' | 'company') => {
    setFocusSection(section);
    setMenuOpen(true);
  }, []);

  return (
    <div className={`min-h-[auto] ${bgClass}`}>
      <div className={nav === 'bottom' ? (showFooter ? '' : 'pb-32') : 'pt-safe'}>{children}</div>
      {nav === 'top' && (
        <header className="fixed top-0 left-0 right-0 z-mobile-nav md:hidden bg-[rgba(15,23,42,0.78)] backdrop-blur-glass-3 border-b border-white/[0.10] pt-safe-or-4 pb-2 px-mobile-base flex items-center justify-between">
          <a href="/" className="flex items-center gap-2"><img src="/images/np-logo.png" alt="Neo Perion" className="h-7 w-7 object-contain" /><span className="text-[15px] font-bold text-white">Neo Perion</span></a>
          <MobileOrbButton onClick={open} isOpen={menuOpen} />
        </header>
      )}
      {nav === 'bottom' && <FloatingNav onOrbClick={open} onSectionClick={openWithSection} orbOpen={menuOpen} />}
      <MobileMenuV2 open={menuOpen} onClose={close} focusSection={focusSection} onFocusConsumed={() => setFocusSection(null)} />
      {showFooter && <AccordionFooter />}
    </div>
  );
}

function MobileOrbButton({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) {
  return (
    <button type="button" onClick={onClick} aria-label={isOpen ? 'Close' : 'Open menu'} aria-expanded={isOpen} aria-haspopup="dialog"
      className="relative h-10 w-10 rounded-full ai-orb-base border border-white/20 shadow-[0_4px_16px_rgba(247,126,13,0.3)]">
      <span aria-hidden="true" className="absolute inset-0 rounded-full ai-orb-glow animate-orb-pulse" />
    </button>
  );
}
