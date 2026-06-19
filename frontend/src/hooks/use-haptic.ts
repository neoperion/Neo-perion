import { useCallback } from 'react';

export type HapticPattern = 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'error' | 'selection';

const HAPTIC_PATTERNS: Record<HapticPattern, number | number[]> = {
  light: 10,
  medium: 25,
  heavy: 50,
  selection: [5],
  success: [10, 50, 10],
  warning: [25, 25, 25],
  error: [50, 30, 50, 30, 50],
};

export function useHaptic() {
  const trigger = useCallback((pattern: HapticPattern) => {
    if (typeof navigator === 'undefined' || !('vibrate' in navigator)) return;
    try {
      navigator.vibrate(HAPTIC_PATTERNS[pattern]);
    } catch {
      // Silently ignore.
    }
  }, []);

  return trigger;
}

export const hapticPatterns = HAPTIC_PATTERNS;
