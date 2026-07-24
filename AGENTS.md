# portfolio — Agent Operating Contract

Repo-specific rules and overrides only. Architecture/tech-stack reference lives in `CORE.md`,
gotchas in `Learnings.md`, in-flight task state in `progress.txt`. Global agent rules (brevity,
approval gate, verify-before-done, commit/push safety) live in `~/.claude/CLAUDE.md` and
`~/.claude/AGENTS.md` — follow those; they are not re-pasted here.

## Repo-specific rules

- **This repo is PUBLIC.** Never commit secrets, `.env` files, API keys, or tokens — anything
  pushed is world-readable and permanent in history. This static site needs no runtime secrets; if
  a build-time credential is ever required, put it in untracked `.env.local` (gitignored) and
  document the key in a committed `.env.example`. See global `~/.claude/AGENTS.md` → Credential &
  Secret Safety.
- **Content ≠ presentation (golden rule).** Every editable fact (projects, skills, experience,
  blog, profile, nav/SEO) lives in `src/content/*`. Add or change facts by editing a data file,
  never by hard-coding into a component. See `CORE.md`.
- **Truthful by construction.** Types and empty-states degrade to "nothing to show yet" rather than
  inviting fabrication. Never seed the site with invented credentials, projects, or metrics; replace
  or delete `// TODO` placeholders with real facts only.
- Not a Flutter/APK app — the fleet release-distribution flow (app-store hub, `scripts/release.sh`,
  RELEASE.md) does NOT apply. This is a web-only repo; there is nothing to "install." No RELEASE.md.

## Build & Deploy

Node.js LTS (>=20; CI uses 22) + npm. No secrets required — runs out of the box after `git clone`.

```bash
npm install
npm run dev          # local dev server, http://localhost:3000
npm run build        # static export to ./out (runs scripts/fetch-github.mjs first via prebuild)
npm run typecheck    # tsc --noEmit
npm run lint         # eslint .
npm test             # vitest run
npm run sync:github  # refresh src/content/generated/github.json (live stars/forks/langs)
npx serve out        # serve the exported static site (next start is unsupported with output:'export')
```

`node_modules/`, `.next/`, and `out/` are generated — never copy them between machines; `npm
install` / `npm run build` regenerate everything.

**Deploy:** push to `main` → GitHub Actions. `.github/workflows/ci.yml` runs the quality gate
(typecheck + lint + test); `.github/workflows/deploy.yml` builds the static export and publishes to
GitHub Pages. Custom domain is `pnsjy.in` (`public/CNAME`), served at root. Repo Pages setting must
be **Source = GitHub Actions**.
