export interface CookieConsentState {
  version: string;
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  timestamp: string;
}

const STORAGE_KEY = 'np_cookie_consent';
const CURRENT_VERSION = '1.0'; // In future, change this in admin panel

export const defaultConsent: CookieConsentState = {
  version: CURRENT_VERSION,
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
  timestamp: new Date().toISOString()
};

export function getConsent(): CookieConsentState | null {
  try {
    const item = localStorage.getItem(STORAGE_KEY);
    if (!item) return null;
    const parsed = JSON.parse(item) as CookieConsentState;
    if (parsed.version !== CURRENT_VERSION) {
      // Force re-consent if version changed
      return null;
    }
    return parsed;
  } catch (e) {
    return null;
  }
}

export function setConsent(prefs: Partial<CookieConsentState>): void {
  const current = getConsent() || defaultConsent;
  const updated: CookieConsentState = {
    ...current,
    ...prefs,
    necessary: true, // Always true
    timestamp: new Date().toISOString(),
    version: CURRENT_VERSION
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  
  // Dispatch custom event so React components can update
  window.dispatchEvent(new Event('cookieConsentUpdated'));
}

export function hasConsented(): boolean {
  return getConsent() !== null;
}

export function acceptAll(): void {
  setConsent({
    analytics: true,
    marketing: true,
    preferences: true
  });
}

export function rejectAll(): void {
  setConsent({
    analytics: false,
    marketing: false,
    preferences: false
  });
}

export function updateCategory(cat: keyof CookieConsentState, val: boolean): void {
  if (cat === 'necessary') return; // Cannot change necessary
  const current = getConsent() || defaultConsent;
  setConsent({
    ...current,
    [cat]: val
  });
}

export function resetConsent(): void {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event('cookieConsentUpdated'));
}
