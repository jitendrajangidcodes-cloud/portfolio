import type { MetadataRoute } from 'next';
import { siteConfig } from '@/content/site';
import { navItems } from '@/content/site';
import { projects } from '@/content/projects';
import { getAllPosts } from '@/lib/blog';

// Static export emits this as /sitemap.xml at build time.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, '');
  const now = new Date();

  const routes = navItems.map((i) => ({
    url: `${base}${i.href}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: i.href === '/' ? 1 : 0.7,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const postRoutes = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}/`,
    lastModified: new Date(p.date),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  return [...routes, ...projectRoutes, ...postRoutes];
}
