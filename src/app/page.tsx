import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/sections/hero';
import { CTA } from '@/components/sections/cta';
import { Section, SectionHeading } from '@/components/layout/section';
import { Reveal, StaggerGroup } from '@/components/motion/reveal';
import { ProjectCard } from '@/components/cards/project-card';
import { CapabilityCard } from '@/components/cards/capability-card';
import { TechMarquee } from '@/components/sections/tech-marquee';
import { TechStack } from '@/components/sections/tech-stack';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { featuredProjects } from '@/content/projects';
import { skillGroups } from '@/content/skills';
import { aiCapabilities } from '@/content/capabilities';
import { profile } from '@/content/profile';

export default function HomePage() {
  const stats = profile.stats;

  return (
    <>
      <Hero />

      {/* Stat strip */}
      <section className="border-y border-border bg-card/40">
        <div className="container grid grid-cols-2 gap-6 py-10 sm:grid-cols-3 lg:grid-cols-3">
          {stats.map((s) => (
            <Reveal key={s.label} className="text-center sm:text-left">
              <p className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium">{s.label}</p>
              {s.hint && <p className="text-xs text-muted-foreground">{s.hint}</p>}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tech marquee — a living wall of the stack */}
      <section className="border-b border-border py-10">
        <div className="container">
          <p className="mb-5 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Technologies I build with
          </p>
        </div>
        <TechMarquee />
      </section>

      {/* Featured projects */}
      <Section>
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects I’ve shipped"
            lead="Real, end-to-end products across mobile, desktop and cloud — privacy and reliability first."
            className="mb-0"
          />
          <Button asChild variant="ghost" className="hidden shrink-0 sm:inline-flex">
            <Link href="/projects/">
              All projects <ArrowRight />
            </Link>
          </Button>
        </div>
        <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <Reveal key={p.slug} as="article">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </StaggerGroup>
      </Section>

      {/* What I do — capability preview */}
      <Section className="bg-card/40">
        <SectionHeading
          eyebrow="How I work"
          title="Depth where it matters"
          lead="A few capabilities, each backed by real, linkable work — not buzzwords."
        />
        <StaggerGroup className="grid gap-6 md:grid-cols-3">
          {aiCapabilities.slice(0, 3).map((c) => (
            <Reveal key={c.title}>
              <CapabilityCard capability={c} />
            </Reveal>
          ))}
        </StaggerGroup>
      </Section>

      {/* Tech stack grid */}
      <Section>
        <SectionHeading
          eyebrow="Stack"
          title="My tech stack"
          lead="The languages, frameworks, clouds and tools I reach for across web, cloud and mobile."
        />
        <TechStack />
      </Section>

      {/* Skills snapshot */}
      <Section className="bg-card/40">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills at a glance"
          lead="The stack behind the work, grouped by domain."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <Reveal key={g.category}>
              <div className="flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-2">
                  <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon name={g.icon} className="size-4" />
                  </span>
                  <h3 className="font-semibold">{g.category}</h3>
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {g.skills.map((s) => (
                    <li
                      key={s.name}
                      className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {s.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/skills/">
              Explore the full toolkit <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>

      <CTA />
    </>
  );
}
