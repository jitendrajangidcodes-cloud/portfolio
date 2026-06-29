import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { skillGroups } from '@/content/skills';
import { PageHeader } from '@/components/layout/page-header';
import { Section } from '@/components/layout/section';
import { Reveal } from '@/components/motion/reveal';
import { SkillMeter } from '@/components/cards/skill-meter';
import { Icon } from '@/components/ui/icon';

export const metadata: Metadata = buildMetadata({
  title: 'Skills',
  description: 'A grouped, honestly self-rated breakdown of my technical toolkit.',
  path: '/skills/',
});

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Toolkit"
        title="Skills"
        lead="Grouped by domain and honestly self-rated. The meters reflect my own assessment of depth, not a credential."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delayIndex={i}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon name={group.icon} className="size-5" />
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold">{group.category}</h2>
                    {group.description && (
                      <p className="text-sm text-muted-foreground">{group.description}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-4">
                  {group.skills.map((s) => (
                    <SkillMeter key={s.name} skill={s} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
