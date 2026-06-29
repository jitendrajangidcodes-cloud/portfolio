import { describe, expect, it } from 'vitest';
import { projects } from './projects';
import { navItems } from './site';

describe('projects data integrity', () => {
  it('has unique slugs', () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('every project has a tagline and at least one platform', () => {
    for (const p of projects) {
      expect(p.tagline.length).toBeGreaterThan(0);
      expect(p.platforms.length).toBeGreaterThan(0);
    }
  });
});

describe('navigation', () => {
  it('all hrefs are absolute and trailing-slashed (except root)', () => {
    for (const n of navItems) {
      expect(n.href.startsWith('/')).toBe(true);
      if (n.href !== '/') expect(n.href.endsWith('/')).toBe(true);
    }
  });
});
