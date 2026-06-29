import type { Metadata } from 'next';
import * as Icons from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { profile } from '@/content/profile';
import { PageHeader } from '@/components/layout/page-header';
import { Section } from '@/components/layout/section';
import { Reveal } from '@/components/motion/reveal';
import { ContactForm } from '@/components/sections/contact-form';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description: `Get in touch with ${profile.name}.`,
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Say hello"
        title="Let’s talk"
        lead="Whether it’s a project, a role, or just an idea worth building — I read every message."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delayIndex={1} className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icons.Mail className="size-5" />
              </span>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{profile.email}</p>
              </div>
            </a>

            {profile.altEmail && (
              <a
                href={`mailto:${profile.altEmail}`}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icons.AtSign className="size-5" />
                </span>
                <div>
                  <p className="font-medium">Email (alternate)</p>
                  <p className="text-sm text-muted-foreground">{profile.altEmail}</p>
                </div>
              </a>
            )}

            <a
              href="tel:+919929003090"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icons.Phone className="size-5" />
              </span>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">+91 99290 03090</p>
              </div>
            </a>

            {profile.location && (
              <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icons.MapPin className="size-5" />
                </span>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">{profile.location}</p>
                </div>
              </div>
            )}

            {profile.socials
              .filter((s) => s.href.startsWith('http'))
              .map((s) => {
                const Icon =
                  (Icons as unknown as Record<string, Icons.LucideIcon>)[s.icon] ?? Icons.Link;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
                  >
                    <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="font-medium">{s.label}</p>
                      <p className="text-sm text-muted-foreground">{s.href.replace('https://', '')}</p>
                    </div>
                  </a>
                );
              })}
          </Reveal>
        </div>
      </Section>
    </>
  );
}
