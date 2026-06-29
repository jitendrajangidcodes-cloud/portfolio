'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';

// Lazy-load the WebGL scene only on the client, after first paint, so it never
// blocks LCP and is skipped entirely on reduced-motion / low-power devices.
const HeroScene = dynamic(() => import('@/components/three/hero-scene'), { ssr: false });

export function HeroCanvas({ className }: { className?: string }) {
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarseSmall = window.matchMedia('(max-width: 480px)').matches;
    // Respect reduced motion and skip the heaviest scene on the smallest screens.
    if (reduce || coarseSmall) return;
    const id = window.requestIdleCallback?.(() => setEnabled(true)) ?? window.setTimeout(() => setEnabled(true), 300);
    return () => {
      if (typeof id === 'number') clearTimeout(id);
    };
  }, []);

  return (
    <div className={className} aria-hidden>
      {/* CSS fallback / placeholder glow always present; canvas layers over it. */}
      <div className="absolute inset-0 -z-10 animate-gradient-pan rounded-full bg-gradient-to-tr from-primary/30 via-accent/20 to-primary/30 blur-3xl" />
      {enabled && <HeroScene />}
    </div>
  );
}
