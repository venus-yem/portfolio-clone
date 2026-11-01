declare module 'aos' {
  export interface AosOptions {
    /** Global settings */
    disable?: boolean | 'phone' | 'tablet' | 'mobile' | (() => boolean);
    startEvent?: string;
    initClassName?: string;
    animatedClassName?: string;
    useClassNames?: boolean;
    disableMutationObserver?: boolean;
    debounceDelay?: number;
    throttleDelay?: number;
    /** Per-element defaults (overridable with data-aos-* attributes) */
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
  }

  const AOS: {
    init(options?: AosOptions): void;
    /** Recalculate offsets/positions of already-registered elements. */
    refresh(): void;
    /** Re-query the DOM for [data-aos] elements, then refresh. */
    refreshHard(): void;
  };

  export default AOS;
}

declare module 'aos/dist/aos.css';
