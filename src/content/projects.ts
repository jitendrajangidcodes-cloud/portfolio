import type { Project } from '@/types/content';

/**
 * Featured projects — seeded from your real repositories.
 *
 * Descriptions are drawn from each project's own README/pubspec, so they are truthful.
 * Set `repo: 'owner/name'` to pull live stars/forks/last-push at build time.
 * Add a cover image under /public/images/projects or rely on the generated gradient.
 */
export const projects: Project[] = [
  {
    slug: 'pchat',
    name: 'OChat',
    tagline: 'Zero-knowledge, end-to-end-encrypted chat built on the Signal Protocol.',
    description:
      'A privacy-first messaging app where the server never sees plaintext. Messages are ' +
      'encrypted on-device using the Signal Protocol (X3DH + Double Ratchet), giving forward ' +
      'secrecy and post-compromise security. Designed so that even a fully compromised backend ' +
      'reveals nothing about message contents.',
    status: 'active',
    period: '2025',
    platforms: ['android', 'ios'],
    stack: ['Flutter', 'Dart', 'Signal Protocol', 'Cryptography'],
    weight: 100,
    featured: true,
    highlights: [
      'X3DH key agreement + Double Ratchet for forward secrecy',
      'Zero-knowledge server design — no plaintext ever leaves the device',
      'Secure local key storage',
    ],
    // repo: 'jitendrajangidcodes-cloud/pchat', // TODO: confirm repo name to enable live stats
    accent: 'from-emerald-500/30 to-teal-500/10',
    links: [],
  },
  {
    slug: 'vault-guard',
    name: 'Aegis Wallet',
    tagline: 'Offline, biometric-locked vault for payment cards with on-device OCR.',
    description:
      'A security-hardened mobile vault for payment cards. Scan the front and back of a card ' +
      'with the camera, extract details automatically via on-device OCR, and store everything ' +
      'in a fully encrypted, biometric-locked local vault. No network, no cloud, no analytics — ' +
      'the data never leaves the device.',
    status: 'active',
    period: '2025',
    platforms: ['android'],
    stack: ['Flutter', 'Dart', 'On-device OCR', 'Encryption', 'Biometrics'],
    weight: 95,
    featured: true,
    highlights: [
      'Fully offline — no network calls, no telemetry',
      'On-device OCR auto-extracts card details from camera scans',
      'Encrypted storage gated behind biometric authentication',
    ],
    // repo: 'jitendrajangidcodes-cloud/vault_guard',
    accent: 'from-indigo-500/30 to-violet-500/10',
    links: [],
  },
  {
    slug: 'reminder-app',
    name: 'Reminder',
    tagline: 'A reminder app that behaves like a real alarm clock — even from a locked screen.',
    description:
      'Reminders fire full-screen with looping sound and vibration on Android, driven by exact ' +
      'AlarmManager scheduling and a foreground service so they ring reliably even when the ' +
      'screen is locked. On iOS they surface as time-sensitive notification banners with action ' +
      'buttons. Reminders can be snoozed or dismissed, handled items move to a Done section, and ' +
      'every alarm action is recorded in a history log.',
    status: 'active',
    period: '2026',
    platforms: ['android', 'ios'],
    stack: ['Flutter', 'Dart', 'Kotlin', 'AlarmManager', 'Drift', 'Riverpod'],
    weight: 90,
    featured: true,
    highlights: [
      'Exact-time alarms via Kotlin AlarmManager + foreground service',
      'Full-screen lock-screen ringing with WakeLock and looping audio',
      'Recurrence engine, snooze/dismiss flows, and a timestamped history log',
    ],
    repo: 'jitendrajangidcodes-cloud/reminder-app',
    accent: 'from-rose-500/30 to-orange-500/10',
    links: [],
  },
  {
    slug: 'flexconvert',
    name: 'FlexConvert',
    tagline: 'All-in-one, offline-first unit, data & live converter for Android.',
    description:
      'Convert across 17 measurement categories, run live currency conversion, and use a set of ' +
      'built-in fabrication tools — all from one fast, offline-first Flutter app.',
    status: 'active',
    period: '2025',
    platforms: ['android'],
    stack: ['Flutter', 'Dart', 'Offline-first'],
    weight: 70,
    featured: true,
    highlights: [
      '17 measurement categories in a single app',
      'Live currency conversion with offline fallback',
      'Fast, offline-first architecture',
    ],
    // repo: 'jitendrajangidcodes-cloud/FlexConvert',
    accent: 'from-amber-500/30 to-yellow-500/10',
    links: [],
  },
  {
    slug: 'workspace',
    name: 'Workspace',
    tagline: 'Tauri 2 desktop suite: LAN workspace sync + daily work-log builder.',
    description:
      'A Tauri 2 desktop app bundling two developer productivity tools. Workspace Sync keeps a ' +
      'development workspace coherent across multiple machines over the LAN. Work Log Builder ' +
      'connects Jira, Google, Slack and GitHub to assemble structured daily work-log entries via ' +
      'a manual external-AI workflow — the app itself never calls an AI API.',
    status: 'active',
    period: '2026',
    platforms: ['desktop'],
    stack: ['Tauri 2', 'Rust', 'TypeScript', 'React'],
    weight: 80,
    featured: true,
    highlights: [
      'Cross-machine workspace sync over LAN',
      'Integrations with Jira, Google, Slack and GitHub',
      'Privacy-respecting: assembles logs without calling any AI API itself',
    ],
    repo: 'jitendrajangidcodes-cloud/workspace',
    accent: 'from-sky-500/30 to-blue-500/10',
    links: [],
  },
  {
    slug: 'mirrordrive',
    name: 'MirrorDrive',
    tagline: 'Two-way file sync between mobile storage and Google Drive.',
    description:
      'A Flutter app that performs two-way synchronisation between local mobile storage and ' +
      'Google Drive, keeping files mirrored across device and cloud.',
    status: 'active',
    period: '2025',
    platforms: ['android'],
    stack: ['Flutter', 'Dart', 'Google Drive API'],
    weight: 60,
    featured: false,
    highlights: ['Two-way sync between device storage and Google Drive'],
    // repo: 'jitendrajangidcodes-cloud/MirrorDrive',
    accent: 'from-fuchsia-500/30 to-pink-500/10',
    links: [],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const sortedProjects = [...projects].sort((a, b) => (b.weight ?? 0) - (a.weight ?? 0));
