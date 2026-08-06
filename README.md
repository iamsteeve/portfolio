# steeve.dev

Personal portfolio for **Steeve Luis Angel Torres Agustin**, senior full-stack software engineer.

Bilingual static site built with [Astro](https://astro.build), deployed to Vercel. No backend, no forms, no analytics, no storage APIs.

## Stack

- **Astro 5** — static output, zero JavaScript by default
- **TypeScript** (strict) for content and the single client script
- **Fontsource** — self-hosted Newsreader (optical-size axis) and JetBrains Mono
- **@astrojs/sitemap** — emits `/sitemap-index.xml` covering both locales

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Dev server at `localhost:4321`                |
| `npm run build`   | Build the static site to `dist/`              |
| `npm run preview` | Preview the production build locally          |
| `npm run check`   | Type-check `.astro` and `.ts` files           |

## Structure

```
src/
├── content/         copy objects, one per language (en.ts, es.ts) + shared types
├── data/            site.ts — URLs, palettes, years, the Ferry snippet
├── layouts/         Base.astro (head, rail, slot) and Page.astro (section order)
├── components/      Rail, Header, Domains, Work, OpenSource, Experience, Stack, Contact
├── scripts/         ui.ts — theme, palette, reveal, active nav
├── styles/          global.css — tokens and every rule
└── pages/           index.astro (en) and es/index.astro (es)
```

Every component takes the copy object as a prop (`<Work t={copy} />`). No component reads a global language.

## Routing

| Route  | Language | `<html lang>` |
| ------ | -------- | ------------- |
| `/`    | English  | `en`          |
| `/es/` | Spanish  | `es`          |

Both are prerendered with their own canonical URL, `hreflang` pair and Open Graph locale. The `EN | ES` control is two plain anchors — language is decided at build time, never at runtime.

## Design constraints

These are load-bearing. Changing them breaks the design contract:

- **Reveal animations are progressive enhancement.** Content ships visible; the hidden state is applied by JS only when `document.visibilityState === 'visible'`, with several fail-safes. The page must render in full with JavaScript disabled.
- **No storage.** Theme, palette and language never touch `localStorage`, `sessionStorage` or cookies.
- **`--ink-3` is contrast-critical.** It meets WCAG AA in both themes with no margin to spare — do not lighten it.
- **No border radius, no shadows.** Every separator is a 1px hairline.
- **Newsreader loads its `opsz` axis.** The `wght`-only files change glyph metrics and shift every line break.

## Deploy

Static output, so no adapter is needed. Vercel detects Astro and uses `npm run build` with output directory `dist`.

```bash
npx vercel          # preview deployment
npx vercel --prod   # production
```

For the custom domain, point the apex `A` record to Vercel and set `steeve.dev` as primary. Full deployment notes live in the design handoff (`ASTRO_VERCEL.md`).

## Assets

`public/` ships as-is: favicons, `site.webmanifest`, `og-image.png` (1200×630), `robots.txt` and one CV PDF per language.
