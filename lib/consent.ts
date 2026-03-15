export const CONSENT_KEY = 'ampm_cookie_consent';
export const CONSENT_EVENT = 'ampm:consent';

export function getConsent(): 'accepted' | 'rejected' | null {
  try {
    return localStorage.getItem(CONSENT_KEY) as 'accepted' | 'rejected' | null;
  } catch {
    return null;
  }
}
