import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Capability } from '@/types/content';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/ui/icon';

export function CapabilityCard({ capability }: { capability: Capability }) {
  return (
    <Card className="flex h-full flex-col gap-4 p-6 transition-colors hover:border-primary/50">
      <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon name={capability.icon} className="size-5" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{capability.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{capability.description}</p>
      </div>

      {capability.tags && (
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {capability.tags.map((t) => (
            <li key={t}>
              <Badge variant="secondary">{t}</Badge>
            </li>
          ))}
        </ul>
      )}

      {capability.evidence && capability.evidence.length > 0 && (
        <div className="flex flex-wrap gap-3 border-t border-border pt-3">
          {capability.evidence.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              {e.label} <ArrowRight className="size-3.5" />
            </Link>
          ))}
        </div>
      )}
    </Card>
  );
}
