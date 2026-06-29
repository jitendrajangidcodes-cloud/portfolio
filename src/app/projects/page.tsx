import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { sortedProjects } from '@/content/projects';
import { PageHeader } from '@/components/layout/page-header';
import { Section } from '@/components/layout/section';
import { ProjectGallery } from '@/components/sections/project-gallery';

export const metadata: Metadata = buildMetadata({
  title: 'Projects',
  description: 'A selection of real, shipped products across mobile, desktop and cloud.',
  path: '/projects/',
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Projects"
        lead="End-to-end products I’ve designed and built. Filter by platform, or open any project for the full story."
      />
      <Section>
        <ProjectGallery projects={sortedProjects} />
      </Section>
    </>
  );
}
