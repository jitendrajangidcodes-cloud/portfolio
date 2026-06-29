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
        lead="My personal and independent projects — designed and built end to end. My professional work at Ongraph Technologies is proprietary, so it’s summarised under Experience rather than shown as public code."
      />
      <Section>
        <ProjectGallery projects={sortedProjects} />
      </Section>
    </>
  );
}
