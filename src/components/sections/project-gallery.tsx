'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Platform, Project } from '@/types/content';
import { ProjectCard } from '@/components/cards/project-card';
import { cn } from '@/lib/utils';

const FILTERS: { label: string; value: Platform | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Android', value: 'android' },
  { label: 'iOS', value: 'ios' },
  { label: 'Desktop', value: 'desktop' },
  { label: 'Web', value: 'web' },
];

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = React.useState<Platform | 'all'>('all');

  // Only show filters that actually match at least one project.
  const available = FILTERS.filter(
    (f) => f.value === 'all' || projects.some((p) => p.platforms.includes(f.value as Platform))
  );

  const visible =
    filter === 'all' ? projects : projects.filter((p) => p.platforms.includes(filter));

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by platform">
        {available.map((f) => (
          <button
            key={f.value}
            role="tab"
            aria-selected={filter === f.value}
            onClick={() => setFilter(f.value)}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
              filter === f.value
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">No projects match this filter yet.</p>
      )}
    </div>
  );
}
