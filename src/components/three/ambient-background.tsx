'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';

const AmbientScene = dynamic(() => import('@/components/three/ambient-scene'), { ssr: false });

/**
 * Fixed, full-viewport ambient 3D layer mounted once in the root layout. Lazy-loaded
 * on idle and skipped entirely on reduced-motion or small/low-power screens so it
 * never hurts performance or accessibility.
 */
export function AmbientBackground() {
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.matchMedia('(max-width: 768px)').matches;
    if (reduce || small) return;
    const ric = window.requestIdleCallback;
    const id = ric ? ric(() => setEnabled(true)) : window.setTimeout(() => setEnabled(true), 600);
    return () => {
      if (typeof id === 'number') clearTimeout(id);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)]"
    >
      <AmbientScene />
    </div>
  );
}
