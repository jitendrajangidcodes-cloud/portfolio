import type { Capability } from '@/types/content';

/**
 * The AI / Automation / Cloud pages are "capability" pages. Each capability is a
 * truthful statement of something you can do, backed by `evidence` that links to a
 * real project or external proof. If you can't point to evidence yet, mark it as a
 * direction you're building toward rather than a claim — honesty over hype.
 */

export const aiCapabilities: Capability[] = [
  {
    title: 'AI-assisted workflows (human-in-the-loop)',
    description:
      'I design tools that orchestrate AI without surrendering control or privacy. My Work Log ' +
      'Builder assembles structured daily logs from Jira, Slack, Google and GitHub using a ' +
      'manual external-AI step — deliberately never calling an AI API itself, so no data leaks ' +
      'to a model provider.',
    icon: 'Bot',
    evidence: [{ label: 'Workspace (Work Log Builder)', href: '/projects/workspace/' }],
    tags: ['Human-in-the-loop', 'Privacy-preserving', 'Tool orchestration'],
  },
  {
    title: 'On-device intelligence',
    description:
      'I ship ML features that run entirely on the device. Aegis Wallet uses on-device OCR to ' +
      'extract card details from camera scans with zero network calls.',
    icon: 'ScanLine',
    evidence: [{ label: 'Aegis Wallet (on-device OCR)', href: '/projects/vault-guard/' }],
    tags: ['On-device', 'OCR', 'No cloud'],
  },
  {
    title: 'LLM application engineering',
    description:
      'Actively building toward production LLM apps — prompt design, tool use, and ' +
      'retrieval. Marked as a learning direction, not a shipped claim.',
    icon: 'Sparkles',
    tags: ['In progress', 'Roadmap'],
  },
];

export const automationCapabilities: Capability[] = [
  {
    title: 'CI/CD pipelines',
    description:
      'I automate build and release. My projects use GitHub Actions for release pipelines, ' +
      'and I script local build/deploy flows end-to-end.',
    icon: 'GitBranch',
    evidence: [{ label: 'Reminder (CI release pipeline)', href: '/projects/reminder-app/' }],
    tags: ['GitHub Actions', 'Release automation'],
  },
  {
    title: 'Cross-tool integrations',
    description:
      'I connect Jira, Slack, Google and GitHub into a single workflow, turning scattered ' +
      'activity into structured output.',
    icon: 'Workflow',
    evidence: [{ label: 'Workspace', href: '/projects/workspace/' }],
    tags: ['Jira', 'Slack', 'Google', 'GitHub'],
  },
  {
    title: 'Developer workflow tooling',
    description:
      'I build tools that remove repetitive manual work — from cross-machine workspace sync ' +
      'to scripted deploys to Google Drive.',
    icon: 'Cog',
    evidence: [{ label: 'Workspace Sync', href: '/projects/workspace/' }],
    tags: ['Tooling', 'Productivity'],
  },
];

export const cloudCapabilities: Capability[] = [
  {
    title: 'Cloud sync engines',
    description:
      'I build reliable two-way synchronisation between devices and the cloud, handling the ' +
      'hard parts: conflict handling, partial state, and offline resilience.',
    icon: 'RefreshCw',
    evidence: [{ label: 'MirrorDrive (Drive sync)', href: '/projects/mirrordrive/' }],
    tags: ['Google Drive API', 'Two-way sync'],
  },
  {
    title: 'LAN & peer sync',
    description:
      'Beyond the public cloud, I build local-network sync that keeps a developer workspace ' +
      'coherent across machines without a central server.',
    icon: 'Network',
    evidence: [{ label: 'Workspace Sync', href: '/projects/workspace/' }],
    tags: ['LAN', 'Peer sync'],
  },
  {
    title: 'GCP & deployment',
    description:
      'I deploy and operate on Google Cloud via the gcloud CLI and Drive APIs, and host static ' +
      'sites on GitHub Pages with automated build pipelines. Deepening cloud-architecture ' +
      'skills is an active learning track.',
    icon: 'Cloud',
    tags: ['GCP', 'gcloud', 'GitHub Pages', 'Learning'],
  },
];
