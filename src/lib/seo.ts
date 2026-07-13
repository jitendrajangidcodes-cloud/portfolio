import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';
import { profile } from '@/content/profile';
import type { PostMeta } from '@/lib/blog';
import type { Project } from '@/types/content';

/**
 * Build per-page metadata with sensible, SEO-complete defaults.
 * Pass a page title/description; everything else (OG, Twitter, canonical) is derived.
 */
export function buildMetadata(opts: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const title = opts.title ? `${opts.title} — ${siteConfig.shortName}` : siteConfig.title;
  const description = opts.description ?? siteConfig.description;
  const url = `${siteConfig.url}${opts.path ?? ''}`;
  const image = opts.image ?? `${siteConfig.url}/opengraph-image`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

/** JSON-LD Person schema for rich results. Rendered as a script in the layout. */
export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: 'Technical Lead · Full-Stack Engineer',
    worksFor: { '@type': 'Organization', name: 'Ongraph Technologies' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Arya College' },
    address: { '@type': 'PostalAddress', addressLocality: 'Jaipur', addressCountry: 'IN' },
    email: profile.email,
    sameAs: profile.socials
      .map((s) => s.href)
      .filter((href) => href.startsWith('http')),
  };
}

/** JSON-LD BlogPosting schema for a rendered post — rich-result eligibility for the blog. */
export function blogPostingJsonLd(post: PostMeta) {
  const url = `${siteConfig.url}/blog/${post.slug}/`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(', '),
    author: { '@type': 'Person', name: siteConfig.name, url: siteConfig.url },
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
      logo: { '@type': 'ImageObject', url: `${siteConfig.url}/pnsjy-mark.png` },
    },
  };
}

/** JSON-LD SoftwareApplication schema for a project detail page. */
export function softwareApplicationJsonLd(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.name,
    description: project.description || project.tagline,
    url: `${siteConfig.url}/projects/${project.slug}/`,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: project.platforms.join(', '),
    ...(project.repo ? { codeRepository: `https://github.com/${project.repo}` } : {}),
    author: { '@type': 'Person', name: siteConfig.name, url: siteConfig.url },
  };
}

/** JSON-LD BreadcrumbList schema — helps search results show a breadcrumb trail. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
