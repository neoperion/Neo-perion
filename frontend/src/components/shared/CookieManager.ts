export type CookieCategory = 'necessary' | 'analytics' | 'marketing' | 'preferences';

export interface CookieConsentState {
  version: string;
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  timestamp: string;
}

export const CONSENT_VERSION = '1.0';
const STORAGE_KEY = 'np_cookie_consent';

export function getConsent(): CookieConsentState | null {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    const parsed = JSON.parse(data) as CookieConsentState;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function setConsent(prefs: Partial<CookieConsentState>): void {
  const currentState = getConsent() || {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
    timestamp: new Date().toISOString(),
  };

  const newState = {
    ...currentState,
    ...prefs,
    necessary: true, // Always true
    timestamp: new Date().toISOString(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
  
  // Trigger backend logging
  logConsent(newState);
}

export function hasConsented(): boolean {
  return getConsent() !== null;
}

export function acceptAll(): void {
  setConsent({
    analytics: true,
    marketing: true,
    preferences: true,
  });
}

export function rejectAll(): void {
  setConsent({
    analytics: false,
    marketing: false,
    preferences: false,
  });
}

export function updateCategory(cat: CookieCategory, val: boolean): void {
  if (cat === 'necessary') return;
  setConsent({ [cat]: val });
}

export function resetConsent(): void {
  localStorage.removeItem(STORAGE_KEY);
  // The UI should react to this or we trigger a reload/state update
}

async function logConsent(state: CookieConsentState) {
  try {
    // We will call the backend API to log the consent
    await fetch('/api/cookies/consent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state),
    });
  } catch (error) {
    console.error('Failed to log cookie consent', error);
  }
}
