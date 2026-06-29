import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { learning } from '@/content/learning';
import { PageHeader } from '@/components/layout/page-header';
import { Section } from '@/components/layout/section';
import { Reveal } from '@/components/motion/reveal';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = buildMetadata({
  title: 'Learning',
  description: 'What I’m actively studying and what’s next on my roadmap.',
  path: '/learning/',
});

const statusVariant = { completed: 'success', 'in-progress': 'accent', planned: 'muted' } as const;

export default function LearningPage() {
  const groups = [
    { key: 'in-progress', title: 'In progress' },
    { key: 'planned', title: 'Planned' },
    { key: 'completed', title: 'Completed' },
  ] as const;

  return (
    <>
      <PageHeader
        eyebrow="Growth"
        title="Learning roadmap"
        lead="A living view of where I’m deepening. Signals direction and momentum — without claiming mastery I don’t have."
      />
      <Section>
        <div className="space-y-12">
          {groups.map(({ key, title }) => {
            const items = learning.filter((l) => l.status === key);
            if (items.length === 0) return null;
            return (
              <div key={key}>
                <h2 className="mb-5 text-xl font-semibold">{title}</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {items.map((item, i) => (
                    <Reveal key={item.title} delayIndex={i}>
                      <div className="rounded-xl border border-border bg-card p-5">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-medium">{item.title}</h3>
                          <Badge variant={statusVariant[item.status]}>{item.status}</Badge>
                        </div>
                        {item.provider && (
                          <p className="text-sm text-muted-foreground">{item.provider}</p>
                        )}
                        {item.note && <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>}
                        {typeof item.progress === 'number' && (
                          <div className="mt-3">
                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                                style={{ width: `${item.progress}%` }}
                              />
                            </div>
                            <p className="mt-1 text-right text-xs text-muted-foreground">
                              {item.progress}%
                            </p>
                          </div>
                        )}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
