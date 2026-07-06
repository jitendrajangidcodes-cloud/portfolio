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
    slug: 'cards',
    name: 'Cards',
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
    repo: 'jitendrajangidcodes-cloud/Cards-pub',
    cover: 'https://store.pnsjy.in/assets/icons/cards.png',
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
    cover: 'https://store.pnsjy.in/assets/icons/reminder.png',
    accent: 'from-rose-500/30 to-orange-500/10',
    links: [],
  },
  {
    slug: 'ai-scanner',
    name: 'AI Scanner',
    tagline: 'Finds anything in your screenshots with on-device AI summaries and semantic search.',
    description:
      'Automatically finds new screenshots on your phone, extracts their text with on-device OCR, ' +
      'and writes an on-device AI summary for each one — so you can later search by meaning ' +
      '("headache medicine") and not just literal words. Share links in and they get captured and ' +
      'summarised the same way. Every model runs entirely on-device (Gemma 3 1B for summaries, ' +
      'Gecko for search embeddings) — no cloud, no account, no analytics.',
    status: 'active',
    period: '2026',
    platforms: ['android'],
    stack: ['Flutter', 'Dart', 'On-device OCR', 'Gemma 3', 'Semantic search'],
    weight: 85,
    featured: true,
    highlights: [
      'On-device OCR + AI summary for every screenshot, fully offline',
      'Semantic search by meaning, not just literal keyword match',
      'Pre-release — bundled on-device models, no cloud dependency',
    ],
    cover: 'https://store.pnsjy.in/assets/icons/ai-scanner.png',
    accent: 'from-purple-500/30 to-fuchsia-500/10',
    links: [],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const sortedProjects = [...projects].sort((a, b) => (b.weight ?? 0) - (a.weight ?? 0));
