# Jitendra Jangid — Portfolio

A premium, content-driven personal brand platform built to evolve for the next decade.
Add a project, skill, or post by editing a data file — never a component.

[![CI](https://github.com/jitendrajangidcodes-cloud/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/jitendrajangidcodes-cloud/portfolio/actions/workflows/ci.yml)
[![Deploy](https://github.com/jitendrajangidcodes-cloud/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/jitendrajangidcodes-cloud/portfolio/actions/workflows/deploy.yml)

## Tech stack

| Layer       | Choice                                                        |
| ----------- | ------------------------------------------------------------- |
| Framework   | Next.js (App Router) with **static export** for GitHub Pages  |
| Language    | TypeScript (strict)                                           |
| Styling     | Tailwind CSS + a small HSL design-token system                |
| UI          | shadcn-style primitives (`src/components/ui`)                 |
| Motion      | Framer Motion, with a sparing Three.js / R3F hero accent      |
| Content     | Typed data files + MDX blog                                   |
| Data        | Build-time GitHub sync (`scripts/fetch-github.mjs`)           |
| CI/CD       | GitHub Actions — quality gate + Pages deploy                  |
| Tests       | Vitest + Testing Library                                      |

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # static export to ./out (runs the GitHub sync first)
npm run typecheck    # tsc --noEmit
npm run lint         # next lint
npm test             # vitest
npm run sync:github  # refresh src/content/generated/github.json
```

## The golden rule: content ≠ presentation

All editable facts live in [`src/content/`](src/content). Components render whatever
the data says, so updates are quick and safe.

| File                        | What it controls                                  |
| --------------------------- | ------------------------------------------------- |
| `content/profile.ts`        | Name, bio, socials, hero roles, stats             |
| `content/projects.ts`       | Featured projects (seeded from your real repos)   |
| `content/skills.ts`         | Skill groups + self-rated meters                  |
| `content/experience.ts`     | Experience timeline (honesty-first labels)        |
| `content/capabilities.ts`   | AI / Automation / Cloud capability cards          |
| `content/certifications.ts` | Credentials (empty until real ones exist)         |
| `content/learning.ts`       | Learning roadmap                                  |
| `content/site.ts`           | Navigation + SEO defaults                         |
| `content/blog/*.mdx`         | Blog posts (frontmatter + markdown)               |

> Placeholders are marked `// TODO`. Replace them with real facts or delete them —
> the site is designed to never claim anything untrue.

## Add a project

```ts
// src/content/projects.ts
{
  slug: 'my-app',
  name: 'My App',
  tagline: 'One honest sentence.',
  description: 'A paragraph for the detail page.',
  status: 'active',
  platforms: ['android'],
  stack: ['Flutter', 'Dart'],
  featured: true,
  repo: 'jitendrajangidcodes-cloud/my-app', // enables live stars/forks
}
```

The project card, `/projects/my-app/` detail page, platform filter, sitemap entry,
and SEO tags all update automatically.

## Write a blog post

Create `src/content/blog/my-post.mdx`:

```mdx
---
title: My post
description: One-line summary.
date: 2026-07-01
tags: [flutter, security]
draft: false
---

Your markdown here.
```

## Deployment (GitHub Pages)

1. Push to `main`.
2. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. The [deploy workflow](.github/workflows/deploy.yml) builds a static export and
   publishes it. `NEXT_PUBLIC_BASE_PATH` is injected automatically so assets resolve
   under `/portfolio`.

**Custom domain?** Set `siteConfig.url` in `content/site.ts`, add a `CNAME` file to
`public/`, and clear `NEXT_PUBLIC_BASE_PATH` (root path).

See [`docs/`](docs) for architecture, customization, and the improvement roadmap.

## License

Personal project. Content © Jitendra Jangid. Code is yours to learn from.
