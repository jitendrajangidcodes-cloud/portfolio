#!/usr/bin/env node
/**
 * Build-time GitHub data fetch.
 *
 * Writes src/content/generated/github.json with the user's profile and public repos.
 * Runs automatically before `npm run build` (prebuild hook) and in CI.
 *
 * Resilient by design:
 *  - No token required (uses the unauthenticated API). Set GITHUB_TOKEN to raise the
 *    rate limit in CI — GitHub Actions provides one automatically.
 *  - On ANY failure (offline, rate-limited, network), it keeps the existing committed
 *    snapshot and exits 0 so the build never breaks.
 */
import { writeFile, mkdir, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, '../src/content/generated/github.json');
const USER = process.env.GITHUB_USER || 'jitendrajangidcodes-cloud';
const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'portfolio-build-script',
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
};

async function gh(path) {
  const res = await fetch(`https://api.github.com${path}`, { headers });
  if (!res.ok) throw new Error(`GitHub ${path} -> ${res.status}`);
  return res.json();
}

function mapRepo(r) {
  return {
    name: r.name,
    fullName: r.full_name,
    description: r.description,
    htmlUrl: r.html_url,
    homepage: r.homepage || null,
    language: r.language,
    topics: r.topics || [],
    stars: r.stargazers_count ?? 0,
    forks: r.forks_count ?? 0,
    openIssues: r.open_issues_count ?? 0,
    pushedAt: r.pushed_at,
    archived: !!r.archived,
    fork: !!r.fork,
  };
}

async function main() {
  try {
    const user = await gh(`/users/${USER}`);
    const repos = await gh(`/users/${USER}/repos?per_page=100&sort=pushed`);
    const snapshot = {
      fetchedAt: new Date().toISOString(),
      user: {
        login: user.login,
        name: user.name,
        bio: user.bio,
        followers: user.followers ?? 0,
        publicRepos: user.public_repos ?? 0,
        avatarUrl: user.avatar_url || null,
        htmlUrl: user.html_url || null,
      },
      repos: (Array.isArray(repos) ? repos : []).map(mapRepo),
    };
    await mkdir(dirname(OUT), { recursive: true });
    await writeFile(OUT, JSON.stringify(snapshot, null, 2) + '\n');
    console.log(`[fetch-github] wrote ${snapshot.repos.length} repos for @${USER}`);
  } catch (err) {
    console.warn(`[fetch-github] skipped (${err.message}); keeping existing snapshot.`);
    // Ensure the file at least exists so the import never fails.
    try {
      await readFile(OUT);
    } catch {
      await mkdir(dirname(OUT), { recursive: true });
      await writeFile(
        OUT,
        JSON.stringify({ fetchedAt: new Date().toISOString(), user: null, repos: [] }, null, 2) + '\n'
      );
    }
    process.exit(0);
  }
}

main();
