'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { profile } from '@/content/profile';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Typewriter } from '@/components/motion/typewriter';
import { HeroCanvas } from '@/components/three/hero-canvas';

export function Hero() {
  // Cursor-following spotlight overlay.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(500px circle at ${mx}px ${my}px, hsl(var(--primary) / 0.12), transparent 60%)`;

  function onMove(e: React.PointerEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  }

  return (
    <section className="relative overflow-hidden" onPointerMove={onMove}>
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 hidden md:block motion-reduce:!hidden"
        style={{ background: spotlight }}
      />

      <div className="container grid items-center gap-10 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/pnsjy-mark.png`}
              alt="PNSJY logo"
              width={72}
              height={72}
              className="rounded-2xl shadow-lg"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.03 }}
          >
            {profile.availableForWork && (
              <Badge variant="success" className="mb-5">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Available for select work
              </Badge>
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-3 text-2xl font-medium text-muted-foreground sm:text-3xl"
          >
            I build <Typewriter words={profile.roles} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg">
              <Link href="/projects/">
                View projects <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="glass">
              <Link href="/contact/">
                <Sparkles /> Get in touch
              </Link>
            </Button>
            {profile.resumeUrl && (
              <Button asChild size="lg" variant="ghost">
                <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                  <Download /> Résumé
                </a>
              </Button>
            )}
          </motion.div>
        </div>

        {/* 3D accent — responsive square that scales with the column. */}
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <HeroCanvas className="absolute inset-0" />
        </div>
      </div>
    </section>
  );
}
