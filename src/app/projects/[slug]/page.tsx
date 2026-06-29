import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Github, Star, GitFork, Clock } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { projects, getProject } from '@/content/projects';
import { getRepo } from '@/lib/github';
import { PageHeader } from '@/components/layout/page-header';
import { Section } from '@/components/layout/section';
import { Reveal } from '@/components/motion/reveal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';

// Pre-render every project page at build time (required for static export).
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return buildMetadata({ title: 'Project not found' });
  return buildMetadata({
    title: project.name,
    description: project.tagline,
    path: `/projects/${project.slug}/`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const repo = project.repo ? getRepo(project.repo) : undefined;

  return (
    <>
      <PageHeader eyebrow={project.period ?? 'Project'} title={project.name} lead={project.tagline} />

      <Section>
        <Button asChild variant="ghost" className="mb-8 -ml-2">
          <Link href="/projects/">
            <ArrowLeft /> All projects
          </Link>
        </Button>

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-8">
            <Reveal>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </Reveal>

            {project.highlights && project.highlights.length > 0 && (
              <Reveal>
                <h2 className="mb-4 text-xl font-semibold">Highlights</h2>
                <ul className="space-y-3">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{h}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>

          <aside className="space-y-4">
            <Reveal className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Stack
              </h2>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <li key={t}>
                    <Badge variant="secondary">{t}</Badge>
                  </li>
                ))}
              </ul>

              <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Platforms
              </h2>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.platforms.map((p) => (
                  <li key={p}>
                    <Badge variant="outline" className="capitalize">
                      {p}
                    </Badge>
                  </li>
                ))}
              </ul>

              {repo && (
                <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-4 text-center">
                  <div>
                    <p className="flex items-center justify-center gap-1 text-lg font-bold">
                      <Star className="size-4 text-amber-500" /> {repo.stars}
                    </p>
                    <p className="text-xs text-muted-foreground">Stars</p>
                  </div>
                  <div>
                    <p className="flex items-center justify-center gap-1 text-lg font-bold">
                      <GitFork className="size-4" /> {repo.forks}
                    </p>
                    <p className="text-xs text-muted-foreground">Forks</p>
                  </div>
                  <div>
                    <p className="flex items-center justify-center gap-1 text-sm font-semibold">
                      <Clock className="size-4" />
                    </p>
                    <p className="text-xs text-muted-foreground">{formatDate(repo.pushedAt)}</p>
                  </div>
                </div>
              )}
            </Reveal>

            <div className="flex flex-col gap-2">
              {repo && (
                <Button asChild variant="outline">
                  <a href={repo.htmlUrl} target="_blank" rel="noreferrer">
                    <Github /> View on GitHub
                  </a>
                </Button>
              )}
              {project.links?.map((l) => (
                <Button key={l.href} asChild variant="outline">
                  <a href={l.href} target="_blank" rel="noreferrer">
                    {l.label} <ArrowUpRight />
                  </a>
                </Button>
              ))}
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
