import type { SkillGroup } from '@/types/content';

/**
 * Skills are grouped and self-rated. Keep `proficiency` honest — it only drives a
 * visual meter, not a claim. Adjust freely; add or remove groups as you grow.
 */
export const skillGroups: SkillGroup[] = [
  {
    category: 'Mobile',
    description: 'Cross-platform apps with native depth where it counts.',
    icon: 'Smartphone',
    skills: [
      { name: 'Flutter', level: 'advanced', proficiency: 88 },
      { name: 'Dart', level: 'advanced', proficiency: 88 },
      { name: 'Riverpod', level: 'proficient', proficiency: 78 },
      { name: 'Drift (SQLite)', level: 'proficient', proficiency: 75 },
      { name: 'Kotlin (Android system)', level: 'proficient', proficiency: 70, note: 'AlarmManager, services, receivers' },
    ],
  },
  {
    category: 'Security & Privacy',
    description: 'Encryption-first, offline-first, zero-knowledge by design.',
    icon: 'ShieldCheck',
    skills: [
      { name: 'End-to-end encryption', level: 'proficient', proficiency: 78, note: 'Signal Protocol: X3DH, Double Ratchet' },
      { name: 'On-device OCR & biometrics', level: 'proficient', proficiency: 72 },
      { name: 'Secure local storage', level: 'proficient', proficiency: 76 },
      { name: 'Threat-aware design', level: 'proficient', proficiency: 70 },
    ],
  },
  {
    category: 'Cloud & Sync',
    description: 'Keeping data coherent across devices and the cloud.',
    icon: 'CloudCog',
    skills: [
      { name: 'Google Drive API', level: 'proficient', proficiency: 72 },
      { name: 'Two-way sync engines', level: 'proficient', proficiency: 70 },
      { name: 'LAN sync', level: 'proficient', proficiency: 68 },
      { name: 'GCP / gcloud', level: 'learning', proficiency: 55 },
    ],
  },
  {
    category: 'Desktop & Systems',
    description: 'Native-feeling desktop tools and developer tooling.',
    icon: 'MonitorSmartphone',
    skills: [
      { name: 'Tauri 2', level: 'proficient', proficiency: 72 },
      { name: 'Rust', level: 'learning', proficiency: 58 },
      { name: 'TypeScript / React', level: 'proficient', proficiency: 74 },
    ],
  },
  {
    category: 'Automation & Integrations',
    description: 'Wiring tools together to remove manual work.',
    icon: 'Workflow',
    skills: [
      { name: 'GitHub Actions / CI', level: 'proficient', proficiency: 72 },
      { name: 'Jira / Slack / Google APIs', level: 'proficient', proficiency: 68 },
      { name: 'Shell & scripting', level: 'proficient', proficiency: 70 },
    ],
  },
];
