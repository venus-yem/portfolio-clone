# Perez — Personal Portfolio (React + TypeScript + Vite)

Complete, maintainable React rewrite of the **Perez Personal Portfolio** theme (Dark & Light variants, Blog cleanly removed), built with **React 18 + TypeScript + Vite + React Router + Swiper** and zero WordPress / jQuery / Elementor runtime dependencies.

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
