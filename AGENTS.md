# portfolio — Agent Operating Contract

Next.js personal portfolio site.

> ⚠️ **This repo is PUBLIC.** NEVER commit secrets, `.env` files, API keys, or tokens here.
> Anything pushed is world-readable and permanently in history.

## Fresh clone bootstrap (Ubuntu / any OS) — runs out of the box
No secrets required. After `git clone`:

```bash
# Toolchain (once): Node.js LTS + npm.
npm install
npm run dev    # local dev server
npm run build  # static export to ./out (Next.js output: 'export')
npx serve out  # serve the exported static site (next start is unsupported with export)
```

`node_modules/`, `.next/`, and `out/` are generated — do not copy them; `npm install` / `npm run
build` regenerate everything.

## Global rules
Global agent rules (brevity, approval gate, verify-before-done, commit/push safety) live in
`~/.claude/CLAUDE.md` and `~/.claude/AGENTS.md` — follow those; they are not re-pasted here.

**Repo-specific override — this repo is PUBLIC (see warning at top).** Never commit secrets. This
static site needs none at runtime; if a build-time credential is ever required, use an untracked
`.env.local` (already gitignored) and document the required keys in a committed `.env.example`.
