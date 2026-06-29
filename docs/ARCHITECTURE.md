# Architecture

## Principles

1. **Content is data.** Facts live in `src/content/*` as typed objects/MDX. Presentation
   never hard-codes content. This is what makes the site cheap to maintain for a decade.
2. **Truthful by construction.** Types and empty-states are designed so the site degrades
   to "nothing to show yet" rather than inviting fabrication.
3. **Static-first.** Everything renders at build time (`output: 'export'`). No server,
   no runtime data fetching — fast, cheap, and GitHub-Pages-friendly.
4. **Progressive enhancement.** Heavy/animated bits (the 3D hero) load lazily and respect
   `prefers-reduced-motion` and low-power devices.

## Layers

```
src/
├── app/            Routes (App Router). One folder per content area.
│   ├── layout.tsx  Fonts, SEO defaults, theme, header/footer, JSON-LD
│   ├── page.tsx    Home (composes sections)
│   ├── <area>/     about, projects, skills, ai, automation, cloud,
│   │               experience, open-source, blog, certifications,
│   │               learning, contact
│   ├── sitemap.ts / robots.ts / opengraph-image.tsx   SEO, generated at build
│   └── not-found.tsx
├── components/
│   ├── ui/         shadcn-style primitives (button, card, badge, icon)
│   ├── layout/     header, footer, section, page-header, theme
│   ├── motion/     reveal, typewriter (Framer Motion)
│   ├── three/      lazy R3F hero scene
│   ├── cards/      project, skill, capability cards
│   └── sections/   hero, cta, project gallery, capability grid, contact form
├── content/        ← EDIT HERE. Data + MDX. Single source of truth.
│   └── generated/  github.json (rebuilt at build time; committed fallback)
├── lib/            utils, seo, github (build-time data), blog (MDX loader)
└── types/          content domain types
```

## Data flow

```
content/*.ts ──► lib (typed accessors) ──► components ──► app routes ──► static HTML
                       ▲
scripts/fetch-github.mjs ──► content/generated/github.json (live stars/forks/langs)
```

## Rendering & routing

- All pages are Server Components except interactive islands (`'use client'`):
  header, theme toggle, motion wrappers, project gallery filter, contact form, 3D hero.
- Dynamic routes (`projects/[slug]`, `blog/[slug]`) use `generateStaticParams` so every
  page is pre-rendered. `params` is awaited (Next 15 async params).
- `trailingSlash: true` keeps nested routes resolvable on static hosts.

## Styling system

- Design tokens are HSL channels in `globals.css` (`:root` + `.dark`). Change the brand
  by editing `--primary` / `--accent` only.
- Tailwind maps tokens via `hsl(var(--token))`. Components use semantic classes
  (`bg-card`, `text-muted-foreground`) — never raw hex.

## Performance

- 3D hero is `dynamic(..., { ssr: false })`, mounted on idle, skipped on small/low-power
  devices and reduced-motion.
- Images use `unoptimized` (no server) — ship pre-sized assets in `public/`.
- Fonts via `next/font` (self-hosted, `display: swap`).

## Accessibility

- Skip link, visible focus rings, `aria-current` nav, labelled meters, reduced-motion
  global override, semantic landmarks, AA-tuned token contrast.
