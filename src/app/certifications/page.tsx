import type { Metadata } from 'next';
import { Award, ExternalLink } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { certifications } from '@/content/certifications';
import { PageHeader } from '@/components/layout/page-header';
import { Section } from '@/components/layout/section';
import { Reveal } from '@/components/motion/reveal';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = buildMetadata({
  title: 'Certifications',
  description: 'Verified credentials and certifications.',
  path: '/certifications/',
});

const statusVariant = { earned: 'success', 'in-progress': 'accent', planned: 'muted' } as const;

export default function CertificationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Credentials"
        title="Certifications"
        lead="Verified credentials only — this list stays empty until there’s something real to show."
      />
      <Section>
        {certifications.length === 0 ? (
          <Reveal className="mx-auto max-w-lg rounded-2xl border border-dashed border-border p-10 text-center">
            <Award className="mx-auto size-10 text-muted-foreground" />
            <h2 className="mt-4 text-lg font-semibold">No certifications listed yet</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              I’d rather show real credentials than pad this page. Active learning tracks live on the{' '}
              <a className="text-primary hover:underline" href="/learning/">
                Learning
              </a>{' '}
              page.
            </p>
          </Reveal>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delayIndex={i}>
                <div className="flex h-full items-start gap-4 rounded-xl border border-border bg-card p-6">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Award className="size-5" />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h2 className="font-semibold">{c.name}</h2>
                      <Badge variant={statusVariant[c.status]}>{c.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {c.issuer}
                      {c.date ? ` · ${c.date}` : ''}
                    </p>
                    {c.credentialUrl && (
                      <a
                        href={c.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                      >
                        Verify <ExternalLink className="size-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
