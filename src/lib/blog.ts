import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

/**
 * File-based blog. Drop a `.mdx` file in `src/content/blog/` with frontmatter:
 *
 *   ---
 *   title: My post
 *   description: One line summary
 *   date: 2026-06-30
 *   tags: [flutter, security]
 *   draft: false
 *   ---
 *
 * No database, no CMS — version-controlled markdown that builds into static HTML.
 */
const BLOG_DIR = join(process.cwd(), 'src', 'content', 'blog');

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  draft: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

function listFiles(): string[] {
  if (!existsSync(BLOG_DIR)) return [];
  return readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));
}

export function getAllPosts(): PostMeta[] {
  return listFiles()
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const raw = readFileSync(join(BLOG_DIR, file), 'utf8');
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? '',
        date: data.date ? new Date(data.date).toISOString() : new Date(0).toISOString(),
        tags: data.tags ?? [],
        readingTime: readingTime(content).text,
        draft: Boolean(data.draft),
      } satisfies PostMeta;
    })
    .filter((p) => !p.draft || process.env.NODE_ENV !== 'production')
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPost(slug: string): Post | null {
  const file = join(BLOG_DIR, `${slug}.mdx`);
  if (!existsSync(file)) return null;
  const raw = readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? '',
    date: data.date ? new Date(data.date).toISOString() : new Date(0).toISOString(),
    tags: data.tags ?? [],
    readingTime: readingTime(content).text,
    draft: Boolean(data.draft),
    content,
  };
}
