/**
 * Performance guards for the mobile overhaul.
 *
 * These functions decide whether to render heavy effects (WebGL, particle
 * systems, multiple blur layers) based on device capabilities.
 */

interface NetworkInformation {
  saveData?: boolean;
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation;
}

export interface DeviceCapabilities {
  cores: number;
  memoryGB: number | null;
  saveData: boolean;
  effectiveType: string | null;
  prefersReducedMotion: boolean;
  isLowEnd: boolean;
}

export function getDeviceCapabilities(): DeviceCapabilities {
  if (typeof window === 'undefined') {
    return { cores: 4, memoryGB: null, saveData: false, effectiveType: null, prefersReducedMotion: false, isLowEnd: false };
  }
  const conn = (navigator as NavigatorWithConnection).connection;
  const cores = navigator.hardwareConcurrency ?? 4;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? null;
  const saveData = conn?.saveData ?? false;
  const effectiveType = conn?.effectiveType ?? null;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isLowEnd = cores < 4 || (memory !== null && memory < 4) || effectiveType === '2g' || effectiveType === 'slow-2g' || saveData;
  return { cores, memoryGB: memory, saveData, effectiveType, prefersReducedMotion, isLowEnd };
}

export function shouldSkipHeavyEffects(): boolean {
  const cap = getDeviceCapabilities();
  return cap.isLowEnd || cap.prefersReducedMotion;
}

export function shouldSkipWebGL(): boolean {
  if (typeof window === 'undefined') return true;
  if (!window.WebGLRenderingContext) return true;
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !gl;
  } catch {
    return true;
  }
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function isSlowConnection(): boolean {
  if (typeof window === 'undefined') return false;
  const conn = (navigator as NavigatorWithConnection).connection;
  return conn?.saveData === true || conn?.effectiveType === 'slow-2g' || conn?.effectiveType === '2g';
}
