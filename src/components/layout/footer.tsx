import Link from 'next/link';
import * as Icons from 'lucide-react';
import { navItems } from '@/content/site';
import { profile } from '@/content/profile';
import { siteConfig } from '@/content/site';

function SocialIcon({ name }: { name: string }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Link;
  return <Icon className="size-5" aria-hidden />;
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-lg font-bold tracking-tight">{profile.name}</p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">{profile.summary}</p>
          <div className="mt-4 flex gap-2">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="grid size-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="mb-3 text-sm font-semibold">Explore</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {navItems.slice(0, 7).map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="transition-colors hover:text-foreground">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="More">
          <p className="mb-3 text-sm font-semibold">More</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {navItems.slice(7).map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="transition-colors hover:text-foreground">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js, Tailwind & Three.js.
          </p>
          <p>Designed & engineered for the long run.</p>
        </div>
      </div>
    </footer>
  );
}
