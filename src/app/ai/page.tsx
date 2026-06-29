import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { aiCapabilities } from '@/content/capabilities';
import { PageHeader } from '@/components/layout/page-header';
import { CapabilityGrid } from '@/components/sections/capability-grid';

export const metadata: Metadata = buildMetadata({
  title: 'AI',
  description: 'How I apply AI — human-in-the-loop, privacy-preserving, and on-device.',
  path: '/ai/',
});

export default function AiPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="AI, done responsibly"
        lead="I treat AI as a tool, not a magic word. Each capability below is either backed by shipped work or honestly marked as a direction I’m building toward."
      />
      <CapabilityGrid capabilities={aiCapabilities} />
    </>
  );
}
