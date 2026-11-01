import { useEffect, useRef } from 'react';

/** Defaults used by the original theme: `counterUp(el, { duration: 3000, delay: 15 })` */
const DEFAULT_DURATION = 3000;
const DEFAULT_DELAY = 15;

/**
 * Port of counterUp2's `divideNumbers()`, which is what the original Perez
 * theme drives the hero "1.2k+" figure with.
 *
 * It does NOT tween smoothly — it pre-renders `duration / delay` discrete
 * frames (200 of them at 3000/15) and steps through them with `setTimeout`,
 * producing counterUp2's characteristic linear odometer roll. That is what the
 * original site does, so that is what we reproduce.
 */
function divideNumbers(value: string, duration: number, delay: number): string[] {
  const steps = Math.round(duration / delay);
  const parts = value.split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/);
  const frames: string[] = new Array(steps).fill('');

  for (const part of parts) {
    if (/([0-9.][,.0-9]*[0-9]*)/.test(part) && !/<[^>]+>/.test(part)) {
      // Remember where any `.`/`,` separators sat, so "1.2" rolls as 0 … 1.2
      const separators = Array.from(part.matchAll(/[.,]/g))
        .map((match) => ({ char: match[0], i: part.length - (match.index ?? 0) - 1 }))
        .sort((a, b) => a.i - b.i);
      const digits = part.replace(/[.,]/g, '');

      let cursor = frames.length - 1;
      for (let step = steps; step >= 1; step -= 1) {
        let text = String(parseInt(String((Number(digits) / steps) * step), 10));
        text = separators.reduce(
          (acc, { char, i }) => (acc.length <= i ? acc : `${acc.slice(0, -i)}${char}${acc.slice(-i)}`),
          text
        );
        frames[cursor] += text;
        cursor -= 1;
      }
    } else {
      for (let i = 0; i < steps; i += 1) {
        frames[i] += part;
      }
    }
  }

  // Final frame is the untouched original string.
  frames[frames.length] = value;
  return frames;
}

/**
 * Native React replacement for jQuery CounterUp / counterUp2.
 *
 * Two behavioural details worth keeping:
 *  - `threshold: 1` — matches main.js, the counter only fires once the element
 *    is fully in view.
 *  - the frames are written straight to the DOM text node. The previous
 *    implementation called `setState` on every frame, re-rendering the whole
 *    hero (including the 180x180 spin badge SVG) ~60x/second; that was a
 *    genuine source of jank.
 */
export function useCounterUp(value: string, duration = DEFAULT_DURATION, delay = DEFAULT_DELAY) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer: number | undefined;

    const start = () => {
      if (el.classList.contains('is-visible')) return;

      const frames = divideNumbers(value, duration, delay);
      el.textContent = frames[0] || '\u00a0';
      // home.css hides `.counter` until it is visible; counterUp2 unhides it
      // inline the same way.
      el.style.visibility = 'visible';
      el.classList.add('is-visible');

      const tick = () => {
        const next = frames.shift();
        el.textContent = next || '\u00a0';
        if (frames.length) {
          window.clearTimeout(timer);
          timer = window.setTimeout(tick, delay);
        }
      };

      window.clearTimeout(timer);
      timer = window.setTimeout(tick, delay);
    };

    if (!('IntersectionObserver' in window)) {
      start();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            start();
            observer.disconnect();
          }
        });
      },
      { threshold: 1 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [value, duration, delay]);

  return ref;
}
