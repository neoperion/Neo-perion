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

export function trackPageView(path: string): void {
  const consent = getConsent();
  if (!consent?.analytics) return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', { page_path: path });
  }
  if (clarityInitialized) {
    // For optimal user tracking, the Identify API should be called for each page of the website
    // If user is not logged in, we use a generic anonymous id. 
    const userId = "anonymous_user"; 
    Clarity.identify(userId, undefined, path);
  }
}

// Helper tracking functions migrated from utils/analytics
export const trackBlogView = (slug: string, title: string) => {
  trackEvent('Blog View', { slug, title });
};

export const trackBlogReadCompletion = (slug: string) => {
  trackEvent('Blog Read Completion', { slug });
};

export const trackSearch = (query: string, resultCount: number) => {
  trackEvent('Search Usage', { query, resultCount });
};

export const trackCategoryClick = (category: string) => {
  trackEvent('Category Click', { category });
};

export const trackCaseStudyView = (slug: string, industry: string) => {
  trackEvent('Case Study View', { slug, industry });
};

export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent('CTA Click', { ctaName, location });
};

export const trackShareClick = (platform: string, url: string) => {
  trackEvent('Share Click', { platform, url });
}
