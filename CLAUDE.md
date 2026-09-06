# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite)
npm run build      # TypeScript check + Vite production build
npm run lint       # ESLint
npm run preview    # Preview production build locally
```

There are no tests. TypeScript errors surface via `npm run build` (runs `tsc -b` before bundling).

## Architecture

**Stack:** React 19 + TypeScript + Vite 7 + Tailwind CSS v3 + Framer Motion 12 + React Router v7 + react-helmet-async.

**Path alias:** `@` → `./src` (configured in `vite.config.ts`).

**Routing** (`src/App.tsx`): BrowserRouter with clean URLs. The home route (`/`) renders a `LandingPage` component composed inline in `App.tsx` from sections in order: Navigation → Hero → About → Services → Methodology → Results → Team → ContactCTA → Footer. All other routes map to full-page components under `src/pages/`. A global `<WhatsAppButton />` floats over every route.

**Sections vs Pages:** `src/sections/` are homepage sections (always wrapped by `Navigation` + `Footer`). `src/pages/` are standalone route pages that import their own `Navigation` and `Footer`.

**Animations:** All Framer Motion variant definitions live in `src/lib/animations.ts`. Import from there; do not define one-off variants inline. Key exports: `reveal`, `revealViewport`, `fadeUp`, `fadeIn`, `slideLeft`, `slideRight`, `scaleIn`, `staggerContainer`, `staggerItem`, `viewportOnce`, `EASE`.

**La Regla de la Animación Visible (rule — see DESIGN.md §5b):** nothing animates while off-screen. Every scroll-revealed element observes *its own* visibility — never a `staggerContainer` that fires all children at once. Reveals are bidirectional (`revealViewport` uses `once: false`): they play on enter and reverse on exit, so there's motion scrolling both down and up. Standard pattern:

```tsx
import Reveal from '@/components/Reveal';

<Reveal>...</Reveal>
<Reveal delay={0.08}>...</Reveal>   // cascade among elements already in view

// or, when the element must keep a specific tag:
<motion.h2 initial="hidden" whileInView="visible" viewport={revealViewport} variants={reveal} custom={0.06}>…</motion.h2>
```

`staggerContainer` / `staggerItem` are reserved for blocks that always enter the viewport whole (e.g. the Hero header, which animates with `animate` on load, not on scroll).

**SEO:** Each route must include `<SeoMeta>` from `src/components/SeoMeta.tsx` (wraps react-helmet-async). Pass `title`, `description`, and `url`.

**Content data:** `src/data/insights.ts` is the single source of truth for all blog post content. `InsightPost` interface and `insights` array are defined there; `src/pages/InsightPost.tsx` and `src/pages/Insights.tsx` read from it.

## Design tokens

Defined in `tailwind.config.js` under `theme.extend.colors.koob`:

| Token | Value | Use |
|---|---|---|
| `koob-beige` | `#f8f6f3` | Warm section backgrounds |
| `koob-beige-strong` | `#ede8e1` | Stronger warm accent |
| `koob-gold` | `#DCCEC2` | Brand accent (blush champagne), labels, hover highlights |
| `koob-black` | `#000000` | Primary text / dark backgrounds |
| `koob-white` | `#ffffff` | Default background |

Font: **Inter only** (no serif) for all standard text — headings, body, UI. `font-sans` is Inter.

**Exception — `font-accent`:** a serif stack (`Iowan Old Style, Baskerville, Times New Roman, serif`) reserved for isolated editorial emphasis inside a larger quote/statement (e.g. one italicized word in a hero-style quote, as in `ClientSituation.tsx`). Never use it for full headings, body copy, or UI chrome — it's a single-word accent, not a second typeface for the site.

## Content rules (must be respected in all copy)

- **No numbers, percentages, metrics, counters, statistics, figures, years, or numeric data as a commercial argument.**
- If numbers exist in the UI, remove them or rewrite as natural language.
- Do not invent claims or fake credentials.
- Authority is conveyed through trajectory, experience, approach, and clarity — never through figures.

## Deployment

GitHub Pages via `.github/workflows/`. `vite.config.ts` uses `base: './'` for relative asset paths. `public/` contains `sitemap.xml`, `robots.txt`, `404.html`, `favicon.svg`, and `site.webmanifest`.

## Design Context

Strategic and visual design decisions are documented in [PRODUCT.md](PRODUCT.md) (register: `brand`, users, brand personality, anti-references, design principles) and [DESIGN.md](DESIGN.md) (color/typography/component tokens, named rules). Read both before making UI changes — they override generic design instincts, especially the "no numbers as commercial argument" rule and the flat/radius-0 visual language.
