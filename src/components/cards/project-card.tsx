'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star, GitFork } from 'lucide-react';
import type { Project } from '@/types/content';
import { getRepo } from '@/lib/github';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const statusLabel: Record<Project['status'], string> = {
  active: 'Active',
  maintained: 'Maintained',
  archived: 'Archived',
  concept: 'Concept',
  shipped: 'Shipped',
};

export function ProjectCard({ project }: { project: Project }) {
  // Live GitHub stats if the project is linked to a repo and the snapshot has it.
  const repo = project.repo ? getRepo(project.repo) : undefined;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
    >
      {/* Accent header — generated gradient keeps the grid lively without images. */}
      <div
        className={cn(
          'relative h-32 bg-gradient-to-br',
          project.accent ?? 'from-primary/30 to-accent/10'
        )}
      >
        <div className="bg-grid absolute inset-0 opacity-40" />
        <span className="absolute right-3 top-3">
          <Badge variant={project.status === 'active' ? 'success' : 'muted'}>
            {statusLabel[project.status]}
          </Badge>
        </span>
        <span className="absolute bottom-3 left-4 text-3xl font-black tracking-tight text-foreground/80">
          {project.name}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-pretty text-sm text-muted-foreground">{project.tagline}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((t) => (
            <li key={t}>
              <Badge variant="secondary">{t}</Badge>
            </li>
          ))}
          {project.stack.length > 4 && (
            <li>
              <Badge variant="outline">+{project.stack.length - 4}</Badge>
            </li>
          )}
        </ul>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            {repo ? (
              <>
                <span className="inline-flex items-center gap-1">
                  <Star className="size-3.5" /> {repo.stars}
                </span>
                <span className="inline-flex items-center gap-1">
                  <GitFork className="size-3.5" /> {repo.forks}
                </span>
              </>
            ) : (
              project.period && <span>{project.period}</span>
            )}
          </div>
          <Link
            href={`/projects/${project.slug}/`}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary"
            aria-label={`Read more about ${project.name}`}
          >
            Details
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
