import manifest from '@/content/generated/tech-icons.json';

export interface TechIcon {
  label: string;
  src: string;
}

/**
 * Self-hosted tech/brand logos, downloaded by scripts/fetch-tech-icons.mjs.
 * Refresh with `npm run sync:icons`.
 */
export const techIcons: TechIcon[] = (manifest as { icons: TechIcon[] }).icons;
