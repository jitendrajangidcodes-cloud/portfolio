# portfolio — Learnings

Mistakes/setup gotchas specific to THIS repo. Fleet-wide gotchas live in `~/.claude/Learnings.md` —
reference them there, do not copy. The moment a gotcha here shows up in a SECOND repo, move it to
`~/.claude/Learnings.md`.

## basePath vs. custom domain

`next.config.mjs` sets `basePath` from `NEXT_PUBLIC_BASE_PATH`, and `deploy.yml` injects it from the
`configure-pages` action's `base_path`. A GitHub Pages *project* site serves under `/portfolio`, but
this site uses the **custom domain `pnsjy.in`** (`public/CNAME`) and serves at **root**, so the base
path must be empty. This only stays correct if the custom domain is configured in the repo's Pages
settings (then `configure-pages` reports an empty `base_path`). If assets/routes 404 under
`/portfolio` after deploy, verify the custom domain is set in **Settings → Pages**, not just the
`CNAME` file — the workflow does not hard-clear the base path on its own.

## Static export constraints

`output: 'export'` means no server: no API routes, no server actions, no runtime data fetching, and
no Next image optimizer (`images.unoptimized: true` — ship pre-sized assets in `public/`). Anything
needing a server will build but silently not work on Pages. Use `npx serve out` to preview the real
export — `next start` is unsupported with `output: 'export'`.

## generated/github.json is committed on purpose

`src/content/generated/github.json` is NOT gitignored — it is the build-safe fallback when the
GitHub sync can't run (e.g. offline, rate-limited). `scripts/fetch-github.mjs` overwrites it at build
time (`prebuild`). Do not add it to `.gitignore`.
