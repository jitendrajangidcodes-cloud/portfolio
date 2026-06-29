'use client';

import Image from 'next/image';
import { techIcons } from '@/lib/tech';
import { withBasePath } from '@/lib/utils';

/**
 * Infinite, dual-row brand-logo marquee. Two rows scroll in opposite directions for a
 * lively "tech wall" feel. Pauses on hover; uses a CSS mask to fade the edges. The list
 * is duplicated once so the loop is seamless. Logos are self-hosted SVGs.
 */
function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...techIcons, ...techIcons];
  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <ul
        className={`flex shrink-0 items-center gap-3 pr-3 ${
          reverse ? 'animate-[marquee_46s_linear_infinite_reverse]' : 'animate-marquee'
        } group-hover:[animation-play-state:paused] motion-reduce:animate-none`}
      >
        {items.map((t, i) => (
          <li
            key={`${t.label}-${i}`}
            className="flex items-center gap-2.5 rounded-xl border border-border bg-card/70 px-4 py-2.5 backdrop-blur-sm transition-colors hover:border-primary/50"
            title={t.label}
          >
            <Image
              src={withBasePath(t.src)}
              alt={`${t.label} logo`}
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span className="whitespace-nowrap text-sm font-medium text-muted-foreground">
              {t.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TechMarquee() {
  if (techIcons.length === 0) return null;
  return (
    <div className="flex flex-col gap-3 py-2" aria-label="Technologies I work with">
      <Row />
      <Row reverse />
    </div>
  );
}
