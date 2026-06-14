import { getConsent } from '@/components/shared/CookieManager';

export function initAnalytics(): void {
  const consent = getConsent();
  if (!consent?.analytics) return;

  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const clarityId = import.meta.env.VITE_CLARITY_ID;

  // Load GA4
  if (gaId && !(window as any).dataLayer) {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(arguments);
    }
    (window as any).gtag = gtag;
    gtag('js', new Date());
    gtag('config', gaId);
  }

  // Load Microsoft Clarity
  if (clarityId && !(window as any).clarity) {
    (function(c: any,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", clarityId);
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>): void {
  const consent = getConsent();
  if (!consent?.analytics) return;

  if ((window as any).gtag) {
    (window as any).gtag('event', name, params);
  }
}
