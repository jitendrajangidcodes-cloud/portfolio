'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { techIcons } from '@/lib/tech';

/**
 * A glowing grid of tech logos. Each tile lifts and reveals a soft radial glow on hover,
 * with a staggered entrance. Logos are self-hosted SVGs (see scripts/fetch-tech-icons.mjs).
 */
export function TechStack() {
  if (techIcons.length === 0) return null;
  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ staggerChildren: 0.04 }}
      className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
    >
      {techIcons.map((t) => (
        <motion.li
          key={t.label}
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
          whileHover={{ y: -6, scale: 1.05 }}
          className="group relative flex flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card/60 p-4 backdrop-blur-sm transition-colors hover:border-primary/50"
        >
          <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(120px_circle_at_center,hsl(var(--primary)/0.15),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <Image
            src={t.src}
            alt={`${t.label} logo`}
            width={40}
            height={40}
            className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-center text-xs font-medium text-muted-foreground">{t.label}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
