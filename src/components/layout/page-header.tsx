import { Reveal } from '@/components/motion/reveal';

/** Consistent page intro band used by every inner route. */
export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="glow -left-20 top-0 h-72 w-72 bg-primary/20" />
      <div className="container py-16 sm:py-20">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              {eyebrow}
            </p>
          )}
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          {lead && <p className="mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">{lead}</p>}
        </Reveal>
      </div>
    </section>
  );
}
