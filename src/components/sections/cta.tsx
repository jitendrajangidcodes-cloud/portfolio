import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { profile } from '@/content/profile';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/reveal';

export function CTA() {
  return (
    <section className="py-20">
      <div className="container">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/15 via-card to-accent/15 p-8 text-center sm:p-14">
          <div className="glow inset-0 bg-primary/20" />
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            I’m {profile.availableForWork ? 'currently open to' : 'always interested in'} thoughtful
            work in mobile, security, and systems. Let’s build something durable.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/contact/">
                Start a conversation <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="glass">
              <a href={`mailto:${profile.email}`}>
                <Mail /> {profile.email}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
