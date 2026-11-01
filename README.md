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
