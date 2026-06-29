import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { cloudCapabilities } from '@/content/capabilities';
import { PageHeader } from '@/components/layout/page-header';
import { CapabilityGrid } from '@/components/sections/capability-grid';

export const metadata: Metadata = buildMetadata({
  title: 'Cloud',
  description: 'Cloud & sync engines, LAN/peer sync, and deployment on GCP and GitHub Pages.',
  path: '/cloud/',
});

export default function CloudPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="Cloud & sync"
        lead="Keeping data coherent across devices and the cloud — from two-way Drive sync to LAN peer sync — with deployment automation on top."
      />
      <CapabilityGrid capabilities={cloudCapabilities} />
    </>
  );
}
