import { useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { MobileNavigation } from './MobileNavigation';
import { Footer } from '@/components/Footer';

export interface MobileShellProps {
  nav?: 'bottom' | 'top' | 'none';
  showFooter?: boolean;
  children: React.ReactNode;
  bgClass?: string;
  theme?: "manuscript" | "dark" | "cinematic";
}

export function MobileShell({ nav = 'bottom', showFooter = true, children, bgClass, theme = "manuscript" }: MobileShellProps) {

  const showHeader = nav !== 'none';
  const isDarkTheme = theme === "dark" || theme === "cinematic";
  
  const defaultBg = isDarkTheme ? 'bg-[#02040A]' : 'bg-manuscript-parchment';
  const backgroundClass = bgClass || defaultBg;

  const headerBgClass = isDarkTheme
    ? "bg-[rgba(10,10,11,0.82)] border-white/[0.06]"
    : "bg-[rgba(245,236,216,0.82)] border-[rgba(80,55,30,0.12)]";

  return (
    <div className={`min-h-[auto] ${backgroundClass}`}>
      {/* Sticky top header — visible on all nav modes except 'none' */}
      {showHeader && (
        <header className={`fixed top-0 left-0 right-0 z-50 md:hidden flex h-[72px] items-center justify-between px-4 pt-safe-or-4 pb-0 backdrop-blur-md border-b ${headerBgClass}`}>
          <a href="/" className="flex shrink-0 items-center">
            <img 
              src={isDarkTheme ? "/images/np-logo.png" : "/images/aincuru-logo.png"} 
              alt="AINCURU — Context Creates Intelligence" 
              className="w-[125px] md:w-[145px] object-contain" 
            />
          </a>
          <a
            href="/contact"
            className={`inline-flex items-center justify-center rounded-full px-[18px] h-[36px] md:px-[24px] md:h-[44px] font-bold text-[11px] md:text-[13px] tracking-wide transition-colors ${
              isDarkTheme 
                ? "bg-manuscript-copper text-[#F4EBDD] hover:bg-manuscript-copperDeep" 
                : "bg-manuscript-copper text-white hover:bg-manuscript-copperDeep"
            }`}
          >
            CONTACT &rarr;
          </a>
        </header>
      )}

      {/* Page content — add top padding to clear the fixed header */}
      <div className={showHeader ? 'pt-[60px]' : ''}>{children}</div>

      <MobileNavigation theme={theme} />
      {showFooter && <Footer />}
    </div>
  );
}
