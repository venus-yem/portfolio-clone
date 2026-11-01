# Perez — Personal Portfolio (React + TypeScript + Vite)

Complete, maintainable React rewrite of the **Perez Personal Portfolio** theme (Dark & Light variants, Blog cleanly removed), built with **React 18 + TypeScript + Vite + React Router + Swiper** and zero WordPress / jQuery / Elementor runtime dependencies.

## Animations

The scroll animations are **AOS 2.3.4** — the same library, the same stylesheet, and the same settings the original WordPress theme ships, so parity is by construction rather than by approximation.

- `src/hooks/useAos.ts` holds the verbatim options from the theme's `main.js`:
  `offset: 120, delay: 100, duration: 600, easing: 'ease', once: true, mirror: false, anchorPlacement: 'top-bottom'`.
- Reveal targets use real AOS attributes (`data-aos="fade-up|fade-right|fade-left|zoom-in|zoom-out|zoom-in-up|flip-down"` plus `data-aos-delay`), copied per element from the original templates.
- `src/hooks/useCounterUp.ts` is a port of **counterUp2** (`duration: 3000, delay: 15`), including its linear 200-frame odometer roll. It writes straight to the DOM text node instead of calling `setState` every frame.

Two plumbing details exist only because AOS is running inside a React SPA; neither changes the rendered output (both are commented in `useAos.ts`):

1. `initAos()` runs in `main.tsx` **before** the first render, so AOS's own initial scan finds no elements and never tags one before it has been painted.
2. `disableMutationObserver: true` — AOS's MutationObserver fires as a microtask, i.e. before paint, which would make the browser skip the transition. Refreshes are driven from React instead (double `requestAnimationFrame`, then `AOS.refreshHard()` on route change).

### UI transitions

The remaining interface timings also follow the original's libraries rather than being re-invented:

- **Resume tabs** — Bootstrap's Tab plugin cross-fade: `.fade` is `opacity .15s linear`, and the outgoing pane fades out *before* the incoming one fades in (~300ms total). `ResumeTabsSection` keeps the selected tab and the painted pane as separate pieces of state to reproduce that ordering.
- **Offcanvas menu** — Bootstrap's `transform .3s ease-in-out` with a `.15s linear` backdrop fade. Visibility is delayed by the transition duration so the panel stays visible for the whole slide-out, which is what Bootstrap's `hiding` class does.
- **Showreel modal** — Magnific Popup's `mfp-fade`: overlay and dialog both fade over `0.3s ease-out`, and the wrapper unmounts 160ms into the closing fade (`removalDelay: 160` in the theme's `main.js`).

### Images

`public/assets` is ~14 MB, so images are now deferred and given reserved space:

- `loading="lazy"` + `decoding="async"` on everything below the fold; the hero image stays eager with `fetchPriority="high"`. The offcanvas logo stays eager too — it would otherwise pop in mid slide.
- Real `width` / `height` attributes from `src/data/imageDimensions.ts` (generated from the files on disk), paired with Bootstrap's `.img-fluid` (`max-width: 100%; height: auto`) so a constrained width still scales proportionally.
- Because layout no longer shifts as images arrive, the scroll offsets AOS caches stay valid. `useAos` also watches `document.body` with a debounced `ResizeObserver` as a backstop, since AOS only listens for *viewport* resizes.

## Features
- **Live Dark / Light Theme Toggle (`src/context/ThemeContext.tsx`):** Instant header switcher persisted to `localStorage`, plus `?theme=dark|light` and `/dark` / `/light` URL support.
- **Data-Driven Architecture (`src/data/`):** All 10 portfolio case studies, 6 service cards, 5 resume tabs, testimonials, brand logos, and pricing plans live in typed TypeScript modules (`projects.ts`, `siteData.ts`).
- **Dynamic Client-Side Routing (`src/App.tsx`):**
  - `/` — Home (`Hero`, `Services`, `AboutSummary`, `ResumeTabs`, `FeaturedWork`, `Testimonials`, `BrandCarousel`, `Pricing`)
  - `/about` — About (`AboutHero`, `ExperienceStats`, `VideoShowcase + Modal`, `ResumeTabs`, `Testimonials`, `BrandCarousel`)
  - `/projects` — Portfolio Asymmetric Bento Grid
  - `/projects/:slug` — Dynamic Project Case Study + Related Work (drives all 10 projects)
  - `/project-tag/:tag` — Dynamic Tag-Filtered Portfolio View (supports both Dark & Light modes)
  - `/contact` — Controlled React Contact Form + Contact Cards
- **100% Offline Fonts & Media (`public/assets/`):** Bundled Google Fonts (`.woff2`), FontAwesome webfonts, theme CSS, images, and `perez.pdf`.

## Getting Started

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```
