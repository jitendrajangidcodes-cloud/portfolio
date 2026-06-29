import type { Capability } from '@/types/content';
import { Section } from '@/components/layout/section';
import { Reveal, StaggerGroup } from '@/components/motion/reveal';
import { CapabilityCard } from '@/components/cards/capability-card';

export function CapabilityGrid({ capabilities }: { capabilities: Capability[] }) {
  return (
    <Section>
      <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c) => (
          <Reveal key={c.title}>
            <CapabilityCard capability={c} />
          </Reveal>
        ))}
      </StaggerGroup>
    </Section>
  );
}
