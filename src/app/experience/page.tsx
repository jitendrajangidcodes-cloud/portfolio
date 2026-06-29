import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { experience } from '@/content/experience';
import { PageHeader } from '@/components/layout/page-header';
import { Section } from '@/components/layout/section';
import { Reveal } from '@/components/motion/reveal';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = buildMetadata({
  title: 'Experience',
  description: 'A timeline of my professional and independent engineering work.',
  path: '/experience/',
});

const kindLabel = {
  work: 'Employment',
  independent: 'Independent',
  education: 'Education',
  volunteer: 'Volunteer',
} as const;

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Journey"
        title="Experience"
        lead="A transparent timeline. Independent project work is labelled as such — no inflated titles, no invented employers."
      />
      <Section>
        {experience.length === 0 ? (
          <p className="text-muted-foreground">Experience entries coming soon.</p>
        ) : (
          <ol className="relative space-y-10 border-l border-border pl-8">
            {experience.map((item, i) => (
              <Reveal as="li" key={`${item.org}-${i}`} delayIndex={i}>
                <span className="absolute -left-[9px] mt-1.5 size-4 rounded-full border-2 border-background bg-primary" />
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-semibold">{item.role}</h2>
                  <Badge variant="secondary">{kindLabel[item.kind]}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.org} · {item.period}
                  {item.location ? ` · ${item.location}` : ''}
                </p>
                <p className="mt-3 text-muted-foreground">{item.summary}</p>
                {item.highlights && (
                  <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    {item.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
                {item.tech && (
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {item.tech.map((t) => (
                      <li key={t}>
                        <Badge variant="outline">{t}</Badge>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </ol>
        )}
      </Section>
    </>
  );
}
