import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

/**
 * AOS (Animate On Scroll) 2.3.4 — the exact library the original Perez theme
 * uses. These are the verbatim options from the live demo's
 * `wp-content/themes/perez/assets/js/main.js`:
 *
 *   AOS.init({
 *     offset: 120, delay: 100, duration: 600, easing: 'ease',
 *     once: true, mirror: false, anchorPlacement: 'top-bottom',
 *     debounceDelay: 50, throttleDelay: 99,
 *   });
 */
const AOS_OPTIONS = {
  // Global settings
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: true,
  debounceDelay: 50,
  throttleDelay: 99,
  // Per-element defaults, overridden by data-aos-* attributes
  offset: 120,
  delay: 100,
  duration: 600,
  easing: 'ease',
  once: true,
  mirror: false,
  anchorPlacement: 'top-bottom',
};

let initialised = false;

/**
 * Must be called once, *before* React renders anything.
 *
 * AOS.init() immediately scans the DOM for [data-aos] elements and tags the
 * in-view ones. Doing that before a single React node exists keeps the initial
 * scan empty, so the reveal classes are only ever applied by `useAos()` below —
 * after the browser has painted the hidden state. That is what makes the
 * transition actually run instead of being skipped.
 */
export function initAos(): void {
  if (initialised) return;
  initialised = true;
  AOS.init(AOS_OPTIONS);
}

/**
 * Per-route AOS wiring.
 *
 * Two React-specific adjustments, both invisible in the rendered output:
 *
 * 1. `disableMutationObserver: true` (set in AOS_OPTIONS)
 *    AOS normally watches the DOM and calls `refreshHard()` the instant a new
 *    [data-aos] node appears. MutationObserver callbacks are microtasks, so in
 *    React that fires before the browser paints, and the element's first
 *    computed style would already be the animated one. We drive refreshes from
 *    React instead.
 *
 * 2. Double `requestAnimationFrame` before `refreshHard()`
 *    Guarantees the new route has been painted once in its hidden state before
 *    `aos-animate` is added, so there is a previous computed style to
 *    transition from.
 */
export function useAos(): void {
  const location = useLocation();

  useEffect(() => {
    // Insurance: if anything tagged elements before they were painted, clear
    // the flag so the hidden state gets one paint first.
    document.querySelectorAll('[data-aos].aos-animate').forEach((el) => {
      el.classList.remove('aos-animate');
    });

    let innerRaf = 0;
    const outerRaf = requestAnimationFrame(() => {
      innerRaf = requestAnimationFrame(() => AOS.refreshHard());
    });

    return () => {
      cancelAnimationFrame(outerRaf);
      cancelAnimationFrame(innerRaf);
    };
  }, [location.pathname]);

  useEffect(() => {
    // Late-loading images and webfonts shift layout, which invalidates the
    // cached trigger offsets AOS computed at mount.
    const onLoad = () => AOS.refresh();

    if (document.readyState === 'complete') {
      onLoad();
      return;
    }

    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, [location.pathname]);
}
