# portfolio — Architecture notes

Deep reference for the site's structure. The architecture invariants (content is data, truthful
by construction, static-first, progressive enhancement) live in [`CORE.md`](../CORE.md) and are
not repeated here.

## Layers

```
src/
├── app/            Routes (App Router). One folder per content area.
│   ├── layout.tsx  Fonts, SEO defaults, theme, header/footer, JSON-LD
│   ├── page.tsx    Home (composes sections)
│   ├── <area>/     about, projects, skills, ai, automation, cloud,
│   │               experience, open-source, blog, certifications,
│   │               learning, contact
│   ├── sitemap.ts / robots.ts / opengraph-image.tsx / manifest.ts   SEO + PWA, generated at build
│   └── not-found.tsx
├── components/
│   ├── ui/         shadcn-style primitives (button, card, badge, icon, pnsjy-logo)
│   ├── layout/     header, footer, section, page-header, theme, install-button
│   ├── motion/     reveal, typewriter (Framer Motion)
│   ├── three/      lazy R3F hero scene + ambient background
│   ├── cards/      project, skill, capability cards
│   └── sections/   hero, cta, project gallery, capability grid, contact form, tech stack/marquee
├── content/        ← EDIT HERE. Data + MDX. Single source of truth.
│   └── generated/  github.json (rebuilt at build time; committed fallback), tech-icons.json
├── lib/            utils, seo, tech, github (build-time data), blog (MDX loader)
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
  page is pre-rendered. `params` is awaited (async params, Next 15+; repo is on Next 16).
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
- `public/sw.js` is a pass-through service worker (no caching) that exists only so the browser
  treats the site as installable; `install-button.tsx` registers it.

## Accessibility

- Skip link, visible focus rings, `aria-current` nav, labelled meters, reduced-motion
  global override, semantic landmarks, AA-tuned token contrast.
