import { describe, expect, it } from 'vitest';
import { cn, formatCompact, withBasePath } from './utils';

describe('cn', () => {
  it('merges and dedupes Tailwind classes', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4');
    expect(cn('text-sm', false && 'hidden', 'font-bold')).toBe('text-sm font-bold');
  });
});

describe('formatCompact', () => {
  it('formats large numbers compactly', () => {
    expect(formatCompact(1200)).toBe('1.2K');
    expect(formatCompact(999)).toBe('999');
  });
});

describe('withBasePath', () => {
  it('leaves non-root paths untouched', () => {
    expect(withBasePath('mailto:a@b.com')).toBe('mailto:a@b.com');
  });
  it('prefixes absolute paths with the base', () => {
    // NEXT_PUBLIC_BASE_PATH is empty in tests, so the path is returned as-is.
    expect(withBasePath('/projects/')).toBe('/projects/');
  });
});
