import { useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { MobileMenuV2 } from './MobileMenuV2';
import { Footer } from '@/components/Footer';

export interface MobileShellProps {
  nav?: 'bottom' | 'top' | 'none';
  showFooter?: boolean;
  children: React.ReactNode;
  bgClass?: string;
}

export function MobileShell({ nav = 'bottom', showFooter = true, children, bgClass = 'bg-[#02040A]' }: MobileShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const open = useCallback(() => setMenuOpen(true), []);
  const close = useCallback(() => setMenuOpen(false), []);

  const showHeader = nav !== 'none';

  return (
    <div className={`min-h-[auto] ${bgClass}`}>
      {/* Sticky top header — visible on all nav modes except 'none' */}
      {showHeader && (
        <header className="fixed top-0 left-0 right-0 z-50 md:hidden flex items-center justify-between px-5 pt-safe-or-4 pb-3 bg-[rgba(10,10,11,0.82)] backdrop-blur-md border-b border-white/[0.06]">
          <a href="/" className="flex items-center gap-2.5">
            <img src="/images/np-logo.png" alt="Neo Perion" className="h-7 w-7 object-contain" />
            <span className="font-logo text-[11px] leading-none">
              <span className="text-white">NEO</span>{' '}
              <span className="text-[#F77E0D]">PERION</span>
            </span>
          </a>
          <button
            type="button"
            onClick={menuOpen ? close : open}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-haspopup="dialog"
            className="h-9 w-9 rounded-full border border-white/[0.12] flex items-center justify-center text-white/70 hover:text-white hover:border-white/25 transition-colors"
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </header>
      )}

      {/* Page content — add top padding to clear the fixed header */}
      <div className={showHeader ? 'pt-[60px]' : ''}>{children}</div>

      <MobileMenuV2 open={menuOpen} onClose={close} focusSection={null} onFocusConsumed={() => {}} />
      {showFooter && <Footer />}
    </div>
  );
}
