import { useEffect, useRef, useState } from 'react';

/**
 * Native React replacement for jQuery CounterUp + Waypoints.
 * Smoothly animates a number from 0 to `end` when scrolled into view.
 */
export function useCountUp(end: number, decimals = 1, durationMs = 1600) {
  const [display, setDisplay] = useState<string>(end.toFixed(decimals));
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated.current) return;

    const animate = () => {
      hasAnimated.current = true;
      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = end * eased;
        setDisplay(current.toFixed(decimals));
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setDisplay(end.toFixed(decimals));
        }
      };

      requestAnimationFrame(tick);
    };

    if (!('IntersectionObserver' in window)) {
      animate();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasAnimated.current) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, decimals, durationMs]);

  return { ref, display };
}
