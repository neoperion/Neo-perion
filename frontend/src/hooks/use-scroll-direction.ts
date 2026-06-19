import { useEffect, useState } from 'react';

export type ScrollDirection = 'up' | 'down' | 'idle';

export interface UseScrollDirectionOptions {
  threshold?: number;
  throttleMs?: number;
}

export function useScrollDirection({
  threshold = 8,
  throttleMs = 16,
}: UseScrollDirectionOptions = {}): {
  direction: ScrollDirection;
  velocity: number;
  scrollY: number;
} {
  const [state, setState] = useState<{ direction: ScrollDirection; velocity: number; scrollY: number }>({
    direction: 'idle',
    velocity: 0,
    scrollY: 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lastY = window.scrollY;
    let lastT = performance.now();
    let frame: number | null = null;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const update = () => {
      const now = performance.now();
      const y = window.scrollY;
      const dy = y - lastY;
      const dt = now - lastT;
      const velocity = dt > 0 ? dy / dt : 0;

      if (Math.abs(dy) >= threshold) {
        const dir: ScrollDirection = dy > 0 ? 'down' : 'up';
        setState((prev) => {
          if (prev.direction === dir && Math.abs(prev.velocity - velocity) < 0.1) return prev;
          return { direction: dir, velocity, scrollY: y };
        });
        lastY = y;
        lastT = now;
      } else {
        setState((prev) => ({ ...prev, velocity, scrollY: y }));
      }
    };

    const onScroll = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        update();
        frame = null;
      });
    };

    const throttled = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(onScroll, throttleMs);
    };

    window.addEventListener('scroll', throttled, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttled);
      if (frame !== null) cancelAnimationFrame(frame);
      if (timer) clearTimeout(timer);
    };
  }, [threshold, throttleMs]);

  return state;
}
