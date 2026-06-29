import * as React from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/motion/reveal';

/** Consistent vertical rhythm + max width for every page section. */
export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn('py-16 sm:py-24', className)}>
      <div className="container">{children}</div>
    </section>
  );
}

/** Eyebrow + title + lead, used at the top of every section/page. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        'mb-10 max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {lead && <p className="mt-4 text-pretty text-lg text-muted-foreground">{lead}</p>}
    </Reveal>
  );
}
