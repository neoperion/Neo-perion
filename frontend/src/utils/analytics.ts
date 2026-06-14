// A lightweight analytics wrapper for Neo Perion
// Can be integrated with Google Analytics, Mixpanel, or PostHog later.

export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  // Only track in production
  if (import.meta.env.MODE !== 'production') {
    console.log(`[Analytics Mock] Event: ${eventName}`, eventData || {});
    return;
  }

  try {
    // If using Mixpanel (example)
    if (window.mixpanel) {
      window.mixpanel.track(eventName, eventData);
    }
    
    // If using Google Analytics (example)
    if (window.gtag) {
      window.gtag('event', eventName, eventData);
    }
  } catch (error) {
    console.warn('Analytics tracking failed', error);
  }
};

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
};

// Type definitions for window globals
declare global {
  interface Window {
    mixpanel?: any;
    gtag?: any;
  }
}
