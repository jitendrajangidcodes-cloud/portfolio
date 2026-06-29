import type { LearningItem } from '@/types/content';

/**
 * Learning roadmap — what you're actively studying and what's next.
 * This is a living list; it signals growth without claiming completion.
 */
export const learning: LearningItem[] = [
  // Seeded honestly from the skill areas your projects already touch. Edit freely.
  { title: 'Rust for systems & Tauri backends', status: 'in-progress', progress: 45 },
  { title: 'Advanced applied cryptography', status: 'in-progress', progress: 40, note: 'Beyond Signal Protocol basics' },
  { title: 'Google Cloud fundamentals', status: 'in-progress', progress: 35 },
  { title: 'Kubernetes & container orchestration', status: 'planned' },
  { title: 'LLM application engineering', status: 'planned' },
];
