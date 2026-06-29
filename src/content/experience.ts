import type { ExperienceItem } from '@/types/content';

/**
 * Experience timeline.
 *
 * IMPORTANT — honesty rule: only list real roles. The seeded entry below describes
 * your *independent* project work (kind: 'independent'), which is truthful and
 * verifiable from your repositories. Add real employment/education entries as they
 * apply, and DELETE the placeholder if you'd rather not show independent work.
 */
export const experience: ExperienceItem[] = [
  {
    role: 'Independent Software Engineer',
    org: 'Personal projects',
    period: '2025 — Present', // TODO: adjust to your real start
    location: 'Remote',
    kind: 'independent',
    summary:
      'Designing and shipping privacy-first apps across mobile, desktop and cloud as a solo ' +
      'engineer — owning architecture, implementation, and release.',
    highlights: [
      'Built an E2E-encrypted chat app on the Signal Protocol (OChat).',
      'Built an offline, biometric-locked card vault with on-device OCR (Aegis Wallet).',
      'Built a Tauri 2 desktop suite for cross-machine sync and work-log automation.',
      'Shipped reliable exact-time Android alarms via Kotlin AlarmManager + foreground services.',
    ],
    tech: ['Flutter', 'Dart', 'Kotlin', 'Tauri', 'Rust', 'TypeScript'],
  },
  // TODO: Add real employment, freelance, or education entries here, e.g.:
  // {
  //   role: 'Software Engineer',
  //   org: 'Company Name',
  //   period: '2024 — 2025',
  //   kind: 'work',
  //   summary: '…',
  //   highlights: ['…'],
  //   tech: ['…'],
  // },
];
