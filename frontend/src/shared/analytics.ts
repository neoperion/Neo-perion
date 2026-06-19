import Clarity from '@microsoft/clarity';
import { getConsent } from './CookieManager';

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

let clarityInitialized = false;

function initClarity(projectId: string): void {
  if (clarityInitialized) return;
  Clarity.init(projectId);
  clarityInitialized = true;
}

export function initAnalytics(): void {
  const consent = getConsent();
  if (!consent?.analytics) return;

  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
  const clarityId = import.meta.env.VITE_CLARITY_ID as string | undefined;

  // GA4
  if (gaId && !document.getElementById('ga-script')) {
    const gtagScript = document.createElement('script');
    gtagScript.id = 'ga-script';
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) { window.dataLayer.push(args); }
        window.gtag = gtag;
        window.gtag('js', new Date());
        window.gtag('config', gaId);
  }

  // Microsoft Clarity
  if (clarityId) {
    initClarity(clarityId);
    Clarity.consentV2({ ad_Storage: 'denied', analytics_Storage: 'granted' });
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>): void {
  const consent = getConsent();
  if (!consent?.analytics) return;

  if (typeof window.gtag === 'function') {
        window.gtag('event', name, params);
  }
  if (clarityInitialized) {
    Clarity.event(name);
  }
}
