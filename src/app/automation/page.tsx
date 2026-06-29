import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { automationCapabilities } from '@/content/capabilities';
import { PageHeader } from '@/components/layout/page-header';
import { CapabilityGrid } from '@/components/sections/capability-grid';

export const metadata: Metadata = buildMetadata({
  title: 'Automation',
  description: 'CI/CD, cross-tool integrations, and developer workflow tooling.',
  path: '/automation/',
});

export default function AutomationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="Automation & tooling"
        lead="I remove repetitive manual work — wiring tools together, scripting releases, and keeping developer workflows fast and reliable."
      />
      <CapabilityGrid capabilities={automationCapabilities} />
    </>
  );
}
