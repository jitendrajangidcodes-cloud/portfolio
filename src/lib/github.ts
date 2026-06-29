import type { GithubSnapshot, GithubRepo } from '@/types/content';
import snapshot from '@/content/generated/github.json';

/**
 * Build-time GitHub data.
 *
 * `scripts/fetch-github.mjs` writes `src/content/generated/github.json` before each
 * build. A committed fallback ships in the repo so the site builds even offline or
 * without the script running. Everything here is synchronous — no runtime fetches,
 * which keeps the static export fast and dependency-free.
 */
const data = snapshot as GithubSnapshot;

export function getGithubSnapshot(): GithubSnapshot {
  return data;
}

/** Repos sorted by stars then recency, excluding forks and archived by default. */
export function getTopRepos(limit = 6): GithubRepo[] {
  return [...data.repos]
    .filter((r) => !r.fork && !r.archived)
    .sort((a, b) => b.stars - a.stars || +new Date(b.pushedAt) - +new Date(a.pushedAt))
    .slice(0, limit);
}

export function getRepo(fullName: string): GithubRepo | undefined {
  return data.repos.find((r) => r.fullName.toLowerCase() === fullName.toLowerCase());
}

/** Aggregate language usage across non-fork repos for the open-source page. */
export function getLanguageBreakdown(): { language: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const r of data.repos) {
    if (r.fork || !r.language) continue;
    counts.set(r.language, (counts.get(r.language) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([language, count]) => ({ language, count }))
    .sort((a, b) => b.count - a.count);
}

export function getTotalStars(): number {
  return data.repos.filter((r) => !r.fork).reduce((sum, r) => sum + r.stars, 0);
}
