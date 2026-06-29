import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, PenLine } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { getAllPosts } from '@/lib/blog';
import { PageHeader } from '@/components/layout/page-header';
import { Section } from '@/components/layout/section';
import { Reveal } from '@/components/motion/reveal';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = buildMetadata({
  title: 'Blog',
  description: 'Notes on engineering, security, and building products.',
  path: '/blog/',
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Blog"
        lead="Notes on building privacy-first products, mobile engineering, and the occasional deep dive."
      />
      <Section>
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-10 text-center">
            <PenLine className="mx-auto size-10 text-muted-foreground" />
            <p className="mt-4 text-muted-foreground">No posts yet — the first one is coming soon.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delayIndex={i}>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span>{formatDate(post.date)}</span>
                    <span aria-hidden>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3.5" /> {post.readingTime}
                    </span>
                  </div>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight">{post.title}</h2>
                  <p className="mt-2 flex-1 text-pretty text-sm text-muted-foreground">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <ul className="flex flex-wrap gap-1.5">
                      {post.tags.map((t) => (
                        <li key={t}>
                          <Badge variant="secondary">{t}</Badge>
                        </li>
                      ))}
                    </ul>
                    <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
