import { useEffect, useState } from 'react';
import { BREAKPOINTS } from '@/lib/mobile';

export interface MobileGateProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
}

export function MobileGate({ children, fallback = null, mobileOnly = true, desktopOnly = false }: MobileGateProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia(`(max-width: ${BREAKPOINTS.mobile - 1}px)`);
    const update = () => setIsMobile(window.innerWidth < BREAKPOINTS.mobile);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  if (isMobile === null) return null;
  if (mobileOnly && !isMobile) return <>{fallback}</>;
  if (desktopOnly && isMobile) return <>{fallback}</>;
  return <>{children}</>;
}
