/**
 * Content domain types.
 *
 * These describe the *shape* of every piece of portfolio content. Editing the
 * data in `src/content/*` never requires touching components — presentation
 * consumes these types. Add a field here, then fill it in the data files.
 */

export type Platform = 'android' | 'ios' | 'web' | 'desktop' | 'cli' | 'cloud' | 'library';

export type ProjectStatus = 'active' | 'maintained' | 'archived' | 'concept' | 'shipped';

/** A featured project. `repo` links it to live GitHub stats fetched at build time. */
export interface Project {
  /** URL-safe unique id, also used as the detail route /projects/[slug]. */
  slug: string;
  name: string;
  /** One-line elevator pitch. Keep it truthful and concrete. */
  tagline: string;
  /** Longer markdown-free description shown on the detail page. */
  description: string;
  status: ProjectStatus;
  /** Years or year-range, e.g. "2025" or "2024–2025". Optional. */
  period?: string;
  platforms: Platform[];
  /** Primary tech, drives the tech-chip row. */
  stack: string[];
  /** Higher = earlier in lists. Default 0. */
  weight?: number;
  featured?: boolean;
  highlights?: string[];
  /** owner/name on GitHub — enables live stars/forks/language. */
  repo?: string;
  links?: ProjectLink[];
  /** Path under /public for the cover image, or omit for the generated gradient. */
  cover?: string;
  /** Accent gradient classes used when no cover image is set. */
  accent?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  type?: 'repo' | 'demo' | 'download' | 'docs' | 'article' | 'external';
}

export type SkillLevel = 'learning' | 'proficient' | 'advanced' | 'expert';

export interface Skill {
  name: string;
  level: SkillLevel;
  /** 0–100 used only for the visual meter; keep honest. */
  proficiency: number;
  note?: string;
}

export interface SkillGroup {
  category: string;
  description?: string;
  /** lucide-react icon name. */
  icon?: string;
  skills: Skill[];
}

export interface ExperienceItem {
  role: string;
  org: string;
  /** e.g. "2024 — Present". */
  period: string;
  location?: string;
  summary: string;
  highlights?: string[];
  tech?: string[];
  /** Distinguishes paid roles from personal/independent work for honesty. */
  kind: 'work' | 'independent' | 'education' | 'volunteer';
}

/** A project delivered as employer/client work — no public repo, no live GitHub stats. */
export interface ClientProject {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  org: string;
}

export interface Certification {
  name: string;
  issuer: string;
  /** ISO date or year. Optional for in-progress. */
  date?: string;
  credentialUrl?: string;
  status: 'earned' | 'in-progress' | 'planned';
}

export interface LearningItem {
  title: string;
  provider?: string;
  status: 'completed' | 'in-progress' | 'planned';
  /** 0–100 for in-progress items. */
  progress?: number;
  url?: string;
  note?: string;
}

export interface Capability {
  title: string;
  description: string;
  icon?: string;
  /** Honest proof points — link to a project slug or external evidence. */
  evidence?: { label: string; href: string }[];
  tags?: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  /** lucide-react icon name. */
  icon: string;
}

export interface Profile {
  name: string;
  /** Short professional title. */
  title: string;
  /** Rotating words for the hero typewriter. */
  roles: string[];
  /** One-paragraph elevator pitch. */
  summary: string;
  /** Longer about narrative (plain paragraphs). */
  bio: string[];
  location?: string;
  email: string;
  /** Optional secondary contact email shown alongside the primary. */
  altEmail?: string;
  githubUser: string;
  avatar?: string;
  socials: SocialLink[];
  /** Honest, self-reported stats shown on the home page. */
  stats: { label: string; value: string; hint?: string }[];
  /** Resume/CV file under /public, optional. */
  resumeUrl?: string;
  availableForWork?: boolean;
}

/** Shape of the build-time GitHub snapshot written by scripts/fetch-github.mjs. */
export interface GithubSnapshot {
  fetchedAt: string;
  user: {
    login: string;
    name: string | null;
    bio: string | null;
    followers: number;
    publicRepos: number;
    avatarUrl: string | null;
    htmlUrl: string | null;
  } | null;
  repos: GithubRepo[];
}

export interface GithubRepo {
  name: string;
  fullName: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stars: number;
  forks: number;
  openIssues: number;
  pushedAt: string;
  archived: boolean;
  fork: boolean;
}
