/**
 * Viewport utilities for mobile detection and safe-area handling.
 */

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

export function isMobileViewport(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < MOBILE_BREAKPOINT;
}

export function isTabletViewport(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= MOBILE_BREAKPOINT && window.innerWidth < TABLET_BREAKPOINT;
}

export function isDesktopViewport(): boolean {
  if (typeof window === 'undefined') return true;
  return window.innerWidth >= TABLET_BREAKPOINT;
}

export function getViewportSize(): { width: number; height: number } {
  if (typeof window === 'undefined') return { width: 0, height: 0 };
  return { width: window.innerWidth, height: window.innerHeight };
}

export function getSafeAreaInset(): {
  top: number;
  right: number;
  bottom: number;
  left: number;
} {
  if (typeof window === 'undefined') return { top: 0, right: 0, bottom: 0, left: 0 };
  const style = getComputedStyle(document.documentElement);
  const parse = (val: string): number => {
    const n = parseFloat(val);
    return Number.isFinite(n) ? n : 0;
  };
  return {
    top: parse(style.getPropertyValue('env(safe-area-inset-top)')),
    right: parse(style.getPropertyValue('env(safe-area-inset-right)')),
    bottom: parse(style.getPropertyValue('env(safe-area-inset-bottom)')),
    left: parse(style.getPropertyValue('env(safe-area-inset-left)')),
  };
}

export const BREAKPOINTS = {
  mobile: MOBILE_BREAKPOINT,
  tablet: TABLET_BREAKPOINT,
} as const;
