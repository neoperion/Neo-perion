import * as Clarity from '@microsoft/clarity';

let clarityInitialized = false;

function initClarity(projectId: string): void {
  if (clarityInitialized) return;
  Clarity.init(projectId);
  clarityInitialized = true;
}

export function initAnalytics(): void {
  const { getConsent } = require('@/components/shared/CookieManager');
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
    // @ts-ignore
    window.gtag = gtag;
    // @ts-ignore
    window.gtag('js', new Date());
    // @ts-ignore
    window.gtag('config', gaId);
  }

  // Microsoft Clarity
  if (clarityId) {
    initClarity(clarityId);
    Clarity.consentV2({ ad_Storage: 'denied', analytics_Storage: 'granted' });
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>): void {
  const { getConsent } = require('@/components/shared/CookieManager');
  const consent = getConsent();
  if (!consent?.analytics) return;

  if (typeof window.gtag === 'function') {
    // @ts-ignore
    window.gtag('event', name, params);
  }
  if (clarityInitialized) {
    Clarity.event(name);
  }
}
