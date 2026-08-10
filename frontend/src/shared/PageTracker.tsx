import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './analytics';

export const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
    
    // Check if there is a hash in the URL to avoid scrolling to top if we are navigating to a specific section
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.search, location.hash]);

  return null;
};
