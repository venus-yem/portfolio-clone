import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Lightweight native IntersectionObserver replacement for AOS.js.
 * Observes elements with [data-reveal] and adds .is-revealed when visible,
 * with a fallback check so above-the-fold content never stays hidden inside iframes.
 */
export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!elements.length) return;

    const revealVisible = () => {
      const vh = window.innerHeight || 900;
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh * 1.05) {
          el.classList.add('is-revealed');
        }
      });
    };

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    revealVisible();
    const fallbackTimer = window.setTimeout(revealVisible, 250);
    window.addEventListener('resize', revealVisible, { passive: true });

    return () => {
      window.clearTimeout(fallbackTimer);
      window.removeEventListener('resize', revealVisible);
      observer.disconnect();
    };
  }, [location.pathname]);
}
