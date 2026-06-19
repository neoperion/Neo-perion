import { useEffect, useRef, useState, useCallback } from 'react';

export type SwipeDirection = 'left' | 'right' | 'up' | 'down';

export interface SwipeState {
  direction: SwipeDirection | null;
  distance: number;
  velocity: number;
}

export interface UseSwipeOptions {
  threshold?: number;
  velocityThreshold?: number;
  onSwipe?: (direction: SwipeDirection, info: SwipeState) => void;
  trackTouch?: boolean;
  trackMouse?: boolean;
}

export function useMobileGesture(options: UseSwipeOptions = {}) {
  const {
    threshold = 50,
    velocityThreshold = 0.3,
    onSwipe,
    trackTouch = true,
    trackMouse = false,
  } = options;

  const ref = useRef<HTMLElement | null>(null);
  const startRef = useRef<{ x: number; y: number; t: number } | null>(null);
  const [swipeState, setSwipeState] = useState<SwipeState>({ direction: null, distance: 0, velocity: 0 });

  const handleStart = useCallback((clientX: number, clientY: number) => {
    startRef.current = { x: clientX, y: clientY, t: performance.now() };
  }, []);

  const handleEnd = useCallback(
    (clientX: number, clientY: number) => {
      const start = startRef.current;
      startRef.current = null;
      if (!start) return;
      const dx = clientX - start.x;
      const dy = clientY - start.y;
      const dt = Math.max(performance.now() - start.t, 1);
      const absX = Math.abs(dx);
      const absY = Math.abs(dy);
      const velocity = (absX + absY) / dt / 1000;
      let direction: SwipeDirection | null = null;
      if (absX > absY && (absX >= threshold || velocity >= velocityThreshold)) {
        direction = dx > 0 ? 'right' : 'left';
      } else if (absY > absX && (absY >= threshold || velocity >= velocityThreshold)) {
        direction = dy > 0 ? 'down' : 'up';
      }
      const info: SwipeState = { direction, distance: absX + absY, velocity };
      setSwipeState(info);
      if (direction) onSwipe?.(direction, info);
    },
    [threshold, velocityThreshold, onSwipe],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) handleStart(t.clientX, t.clientY);
    };
    const onTouchEnd = (e: TouchEvent) => {
      const t = e.changedTouches[0];
      if (t) handleEnd(t.clientX, t.clientY);
    };
    const onMouseDown = (e: MouseEvent) => handleStart(e.clientX, e.clientY);
    const onMouseUp = (e: MouseEvent) => handleEnd(e.clientX, e.clientY);

    if (trackTouch) {
      el.addEventListener('touchstart', onTouchStart, { passive: true });
      el.addEventListener('touchend', onTouchEnd, { passive: true });
    }
    if (trackMouse) {
      el.addEventListener('mousedown', onMouseDown);
      el.addEventListener('mouseup', onMouseUp);
    }
    return () => {
      if (trackTouch) {
        el.removeEventListener('touchstart', onTouchStart);
        el.removeEventListener('touchend', onTouchEnd);
      }
      if (trackMouse) {
        el.removeEventListener('mousedown', onMouseDown);
        el.removeEventListener('mouseup', onMouseUp);
      }
    };
  }, [handleStart, handleEnd, trackTouch, trackMouse]);

  return { ref, swipeState };
}

/** Detects edge-swipe-from-left gesture (iOS-style back navigation). */
export function useEdgeSwipeBack(options: { onBack: () => void; edgeWidth?: number }) {
  const { onBack, edgeWidth = 24 } = options;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let startX: number | null = null;
    let startY: number | null = null;
    let startT = 0;

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t || t.clientX > edgeWidth) return;
      startX = t.clientX;
      startY = t.clientY;
      startT = performance.now();
    };
    const onTouchMove = (e: TouchEvent) => {
      if (startX === null || startY === null) return;
      const t = e.touches[0];
      if (!t) return;
      const dx = t.clientX - startX;
      const dy = Math.abs(t.clientY - (startY ?? t.clientY));
      if (dy > 60) { startX = null; startY = null; setProgress(0); return; }
      setProgress(Math.min(dx / 100, 1));
    };
    const onTouchEnd = () => {
      if (startX === null) return;
      const dt = performance.now() - startT;
      if (progress > 0.5 && dt < 600) onBack();
      startX = null; startY = null; setProgress(0);
    };
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [edgeWidth, onBack, progress]);

  return { progress };
}
