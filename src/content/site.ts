/**
 * Site-wide configuration: navigation, SEO defaults, and the canonical URL.
 * Change `url` to your real deployed origin (used for absolute SEO/OG tags).
 */
export const siteConfig = {
  name: 'Jitendra Jangid',
  shortName: 'Jitendra',
  title: 'Jitendra Jangid — Technical Lead & Full-Stack Engineer',
  description:
    'Technical Lead & full-stack engineer, 9+ years building scalable web apps with MEAN, ' +
    'React/Next.js, AWS & GCP — plus privacy-first mobile apps on the side.',
  url: 'https://pnsjy.in',
  locale: 'en_US',
  keywords: [
    'Jitendra Jangid',
    'Technical Lead',
    'Full-Stack Developer',
    'MEAN Stack',
    'React',
    'Next.js',
    'Node.js',
    'AWS',
    'Google Cloud',
    'Flutter Developer',
    'Ongraph Technologies',
    'Jaipur',
    'Portfolio',
  ],
} as const;

export interface NavItem {
  label: string;
  href: string;
  /** Group primary vs. secondary nav for a clean header + full menu. */
  primary?: boolean;
}

/** Order here defines the menu order. `primary` items show in the desktop header. */
export const navItems: NavItem[] = [
  { label: 'Home', href: '/', primary: true },
  { label: 'About', href: '/about/', primary: true },
  { label: 'Projects', href: '/projects/', primary: true },
  { label: 'Skills', href: '/skills/', primary: true },
  { label: 'AI', href: '/ai/' },
  { label: 'Automation', href: '/automation/' },
  { label: 'Cloud', href: '/cloud/' },
  { label: 'Experience', href: '/experience/', primary: true },
  { label: 'Open Source', href: '/open-source/' },
  { label: 'Blog', href: '/blog/', primary: true },
  { label: 'Certifications', href: '/certifications/' },
  { label: 'Learning', href: '/learning/' },
  { label: 'Contact', href: '/contact/', primary: true },
];
