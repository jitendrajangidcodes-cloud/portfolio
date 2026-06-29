import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';

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
  const image = opts.image ?? `${siteConfig.url}/og.png`;

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
    sameAs: ['https://github.com/jitendrajangidcodes-cloud'],
  };
}
