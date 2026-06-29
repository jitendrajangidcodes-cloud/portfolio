import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { profile } from '@/content/profile';
import { skillGroups } from '@/content/skills';
import { PageHeader } from '@/components/layout/page-header';
import { Section } from '@/components/layout/section';
import { Reveal } from '@/components/motion/reveal';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description: profile.summary,
  path: '/about/',
});

const principles = [
  { icon: 'ShieldCheck', title: 'Privacy by default', text: 'Offline-first, on-device, zero-knowledge where possible. Data stays with the user.' },
  { icon: 'Gauge', title: 'Reliability over flash', text: 'Alarms that ring from a locked screen. Sync that survives bad networks. Details that matter.' },
  { icon: 'Layers', title: 'Maintainable architecture', text: 'Clean layer boundaries, typed contracts, content separated from presentation.' },
  { icon: 'Sparkles', title: 'Polish as a feature', text: 'A product feeling is the sum of small, deliberate decisions — I sweat them.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={`I’m ${profile.name.split(' ')[0]} — I build things that last.`}
        lead={profile.title}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-5">
            {profile.bio.map((p, i) => (
              <Reveal key={i} delayIndex={i}>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{p}</p>
              </Reveal>
            ))}
            <Reveal>
              <Button asChild className="mt-2">
                <Link href="/experience/">
                  See my experience <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          </div>

          <aside className="space-y-4">
            <Reveal className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                At a glance
              </h2>
              <dl className="mt-4 space-y-3 text-sm">
                {profile.location && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Location</dt>
                    <dd className="font-medium">{profile.location}</dd>
                  </div>
                )}
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Focus</dt>
                  <dd className="text-right font-medium">Mobile · Security · Systems</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Email</dt>
                  <dd>
                    <a className="font-medium text-primary hover:underline" href={`mailto:${profile.email}`}>
                      {profile.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Core domains
              </h2>
              <ul className="mt-4 space-y-2">
                {skillGroups.map((g) => (
                  <li key={g.category} className="flex items-center gap-2 text-sm">
                    <Icon name={g.icon} className="size-4 text-primary" />
                    {g.category}
                  </li>
                ))}
              </ul>
            </Reveal>
          </aside>
        </div>
      </Section>

      <Section className="bg-card/40">
        <h2 className="mb-8 text-2xl font-bold tracking-tight">What I value</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delayIndex={i}>
              <div className="flex h-full gap-4 rounded-xl border border-border bg-card p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon name={p.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
