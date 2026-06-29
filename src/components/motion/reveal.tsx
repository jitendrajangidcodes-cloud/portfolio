'use client';

import { motion, type Variants } from 'framer-motion';
import * as React from 'react';

/**
 * Scroll-reveal wrapper. Animates children in once when they enter the viewport.
 * Honors prefers-reduced-motion automatically (Framer reads the media query).
 */
const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

export function Reveal({
  children,
  delayIndex = 0,
  className,
  as = 'div',
}: {
  children: React.ReactNode;
  delayIndex?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article';
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      custom={delayIndex}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </MotionTag>
  );
}

/** Staggered container — children using <Reveal> animate in sequence. */
export function StaggerGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ staggerChildren: 0.08 }}
    >
      {children}
    </motion.div>
  );
}
