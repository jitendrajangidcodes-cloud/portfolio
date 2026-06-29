import type { Metadata } from 'next';
import { ArrowUpRight, Github, Star, GitFork } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { getGithubSnapshot, getTopRepos, getLanguageBreakdown, getTotalStars } from '@/lib/github';
import { profile } from '@/content/profile';
import { PageHeader } from '@/components/layout/page-header';
import { Section } from '@/components/layout/section';
import { Reveal } from '@/components/motion/reveal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = buildMetadata({
  title: 'Open Source',
  description: 'My public repositories, pulled live from GitHub at build time.',
  path: '/open-source/',
});

export default function OpenSourcePage() {
  const snapshot = getGithubSnapshot();
  const repos = getTopRepos(9);
  const languages = getLanguageBreakdown();
  const totalStars = getTotalStars();
  const profileUrl = `https://github.com/${profile.githubUser}`;

  return (
    <>
      <PageHeader
        eyebrow="Public work"
        title="Open Source"
        lead="My public repositories, synced from GitHub at build time. Stars, forks and languages update automatically with each deploy."
      />
      <Section>
        {repos.length === 0 ? (
          <Reveal className="rounded-2xl border border-dashed border-border p-10 text-center">
            <Github className="mx-auto size-10 text-muted-foreground" />
            <p className="mt-4 text-muted-foreground">
              Live repository data will appear here after the first build with GitHub access.
            </p>
            <Button asChild className="mt-6">
              <a href={profileUrl} target="_blank" rel="noreferrer">
                <Github /> Visit my GitHub
              </a>
            </Button>
          </Reveal>
        ) : (
          <>
            <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: 'Public repos', value: snapshot.user?.publicRepos ?? repos.length },
                { label: 'Total stars', value: totalStars },
                { label: 'Followers', value: snapshot.user?.followers ?? 0 },
                { label: 'Languages', value: languages.length },
              ].map((s) => (
                <Reveal key={s.label} className="rounded-xl border border-border bg-card p-5 text-center">
                  <p className="text-3xl font-bold text-gradient">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </Reveal>
              ))}
            </div>

            {languages.length > 0 && (
              <div className="mb-10 flex flex-wrap gap-2">
                {languages.map((l) => (
                  <Badge key={l.language} variant="outline">
                    {l.language} · {l.count}
                  </Badge>
                ))}
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {repos.map((r, i) => (
                <Reveal key={r.fullName} delayIndex={i}>
                  <a
                    href={r.htmlUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold">{r.name}</h2>
                      <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
                      {r.description ?? 'No description provided.'}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      {r.language && <span>{r.language}</span>}
                      <span className="inline-flex items-center gap-1">
                        <Star className="size-3.5" /> {r.stars}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <GitFork className="size-3.5" /> {r.forks}
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button asChild variant="outline">
                <a href={profileUrl} target="_blank" rel="noreferrer">
                  <Github /> See all on GitHub
                </a>
              </Button>
            </div>
          </>
        )}
      </Section>
    </>
  );
}
