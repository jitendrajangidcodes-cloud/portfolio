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
npm run build  # production build (Next.js)
npm start      # serve the production build
```

`node_modules/`, `.next/`, and `out/` are generated — do not copy them; `npm install` / `npm run
build` regenerate everything.

## Global rules
- **Brevity.** Shortest response that fully completes the task.
- **Approval gate.** Wait for explicit "yes"/"go" for non-trivial changes. Trivial = single-file fix.
- **Verification.** Always `npm run build` before reporting completion. Never claim success unverified.
- **Commits.** No conventional-commit prefixes. On main: plain message. No trailers.
- **Safety.** No git push / force-push / PR without per-action confirmation.
- **Secrets.** PUBLIC repo — never commit secrets. If any credential is ever needed, use an
  untracked `.env.local` (already gitignored) and document the required keys in `.env.example`.
