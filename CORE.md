# portfolio — Core

## What this is

Jitendra Jangid's personal brand & portfolio website (`https://pnsjy.in`) — a premium,
content-driven marketing/portfolio site built to be maintained for years by editing data files, not
components. Statically exported and hosted on GitHub Pages. Audience: recruiters, clients, and peers
viewing projects, skills, experience, capabilities, and a blog. Public repo.

## Tech Stack

- **Framework:** Next.js (App Router, v16) with static export (`output: 'export'`) — no server, no
  runtime data fetching.
- **Language:** TypeScript (strict).
- **Styling:** Tailwind CSS v3 + an HSL design-token system (tokens in `src/app/globals.css`,
  mapped via `hsl(var(--token))`). shadcn-style UI primitives in `src/components/ui`.
- **Motion / 3D:** Framer Motion; a lazy Three.js / React-Three-Fiber (`@react-three/*`) hero accent
  (`dynamic(..., { ssr: false })`, skipped on low-power/reduced-motion).
- **Content:** Typed data files in `src/content/*.ts` + MDX blog posts (`next-mdx-remote`,
  `gray-matter`, `reading-time`).
- **Build-time data:** `scripts/fetch-github.mjs` pulls live GitHub stars/forks/langs into
  `src/content/generated/github.json` (committed as a build-safe fallback).
- **Theming:** `next-themes` (light/dark).
- **Tests:** Vitest + Testing Library (jsdom).
- **CI/CD:** GitHub Actions — quality gate (`ci.yml`) + Pages deploy (`deploy.yml`).

## Project Files

| File / Dir | Purpose |
|------------|---------|
| `src/app/` | Routes (App Router); one folder per content area (about, projects, skills, ai, automation, cloud, experience, open-source, blog, certifications, learning, contact) |
| `src/app/layout.tsx` | Fonts, SEO defaults, theme, header/footer, JSON-LD |
| `src/app/page.tsx` | Home page — composes sections |
| `src/app/sitemap.ts` / `robots.ts` / `opengraph-image.tsx` / `manifest.ts` | SEO + PWA metadata, generated at build |
| `src/app/globals.css` | HSL design tokens (`:root` + `.dark`) — brand edited via `--primary` / `--accent` |
| `src/content/*.ts` | **Single source of truth for all editable facts** (profile, projects, skills, experience, capabilities, certifications, learning, client-work, site nav/SEO) |
| `src/content/blog/*.mdx` | Blog posts (frontmatter + markdown) |
| `src/content/generated/github.json` | Live GitHub stats (build-generated, committed fallback) |
| `src/content/generated/tech-icons.json` | Tech-icon data (`sync:icons`) |
| `src/lib/` | Typed accessors: `github.ts`, `blog.ts` (MDX loader), `seo.ts`, `tech.ts`, `utils.ts` |
| `src/types/content.ts` | Content domain types |
| `src/components/{ui,layout,motion,three,cards,sections}/` | Presentation only — render whatever the data says |
| `scripts/fetch-github.mjs` | Build-time GitHub sync (`prebuild` + `sync:github`) |
| `scripts/fetch-tech-icons.mjs` | Tech-icon fetch (`sync:icons`) |
| `next.config.mjs` | `output: 'export'`, `basePath` from `NEXT_PUBLIC_BASE_PATH`, `trailingSlash`, `images.unoptimized` |
| `public/CNAME` | Custom domain `pnsjy.in` |
| `.github/workflows/ci.yml` / `deploy.yml` | Quality gate + Pages deploy |
| `docs/ARCHITECTURE.md` | Deep architecture notes (principles, layers, data flow, styling, a11y) |

## Architecture — Critical Rules

- **Content is data; presentation never hard-codes facts.** All facts live in `src/content/*`.
  Adding a project/skill/post = editing a data file; cards, detail pages, filters, sitemap, and SEO
  update automatically. Never add editable content directly into a component.
- **Truthful by construction.** Types + empty-states degrade to "nothing to show yet." Do not
  fabricate content to fill a section.
- **Static-first.** Everything renders at build time (`output: 'export'`). No server, no runtime
  fetching, no Next image optimizer (`images.unoptimized`; ship pre-sized assets in `public/`). Do
  not introduce API routes, server actions, or runtime data fetching.
- **Server Components by default.** Only interactive islands are `'use client'` (header, theme
  toggle, motion wrappers, gallery filter, contact form, 3D hero).
- **Dynamic routes must pre-render.** `projects/[slug]` and `blog/[slug]` use
  `generateStaticParams`; `params` is awaited (async params, Next 15+). `trailingSlash: true` keeps
  nested routes resolvable on static hosts.
- **Styling via semantic tokens only.** Use `bg-card` / `text-muted-foreground` etc. mapped from
  HSL tokens — never raw hex in components.
- **3D/motion is progressive enhancement.** Hero loads lazily, respects `prefers-reduced-motion`
  and low-power devices; never make core content depend on it.

## Features

Authoritative registry of every feature: shipped, in-progress, decided, or deferred.
Add a feature entry BEFORE building it. Never remove entries — mark final status.
Status options: `BUILT-AWAITING-VERIFY` / `VERIFIED` / `PENDING USER DECISION` / `NOT BUILDING`

These entries were reverse-engineered from the shipped codebase during initial doc creation and
have NOT been re-verified by the user; treat status as best-effort until confirmed.

### F1 — Content-driven pages (home, about, projects, skills, experience, blog, etc.)
Every content area renders from `src/content/*` data files with automatic cards, filters, detail
pages, sitemap, and SEO. Capability areas: AI, Automation, Cloud.
*Status: BUILT-AWAITING-VERIFY*

### F2 — Project detail pages + platform filter
`projects/[slug]` pre-rendered detail pages; gallery filter by platform; live stars/forks per repo.
*Status: BUILT-AWAITING-VERIFY*

### F3 — MDX blog
`src/content/blog/*.mdx` with frontmatter, reading-time, tags, draft flag; `blog/[slug]` pages.
*Status: BUILT-AWAITING-VERIFY*

### F4 — Build-time GitHub sync
`scripts/fetch-github.mjs` fetches live stars/forks/languages into `content/generated/github.json`
on every build (`prebuild`).
*Status: BUILT-AWAITING-VERIFY*

### F5 — 3D hero + motion accents
Lazy R3F/Three.js hero, Framer Motion reveal/typewriter; reduced-motion and low-power aware.
*Status: BUILT-AWAITING-VERIFY*

### F6 — SEO / PWA metadata
Generated `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `manifest.ts`, JSON-LD in layout.
*Status: BUILT-AWAITING-VERIFY*

### F7 — Light/dark theming
`next-themes` toggle over the HSL token system.
*Status: BUILT-AWAITING-VERIFY*

### F8 — GitHub Pages deploy on custom domain
Static export deployed via Actions to `pnsjy.in` (`public/CNAME`).
*Status: BUILT-AWAITING-VERIFY*
