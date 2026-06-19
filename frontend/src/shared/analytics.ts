import Clarity from '@microsoft/clarity';

let clarityInitialized = false;

function initClarity(projectId: string): void {
  if (clarityInitialized) return;
  Clarity.init(projectId);
  clarityInitialized = true;
}

export function initAnalytics(): void {
  // Lazy import to avoid circular dependency at module-load time
  const { getConsent } = require('./CookieManager');
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

    (window as any).dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) { (window as any).dataLayer.push(args); }
        (window as any).gtag = gtag;
        (window as any).gtag('js', new Date());
        (window as any).gtag('config', gaId);
  }

  // Microsoft Clarity
  if (clarityId) {
    initClarity(clarityId);
    Clarity.consentV2({ ad_Storage: 'denied', analytics_Storage: 'granted' });
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>): void {
  const { getConsent } = require('./CookieManager');
  const consent = getConsent();
  if (!consent?.analytics) return;

  if (typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', name, params);
  }
  if (clarityInitialized) {
    Clarity.event(name);
  }
}
