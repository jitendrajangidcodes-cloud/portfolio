import type { Certification } from '@/types/content';

/**
 * Certifications — leave empty rather than inventing any.
 *
 * The Certifications page renders a friendly empty state when this list is empty,
 * so the section is honest until you have real credentials to show.
 */
export const certifications: Certification[] = [
  // Example shape (delete this comment block and add real entries when earned):
  // {
  //   name: 'Google Associate Android Developer',
  //   issuer: 'Google',
  //   date: '2026',
  //   credentialUrl: 'https://…',
  //   status: 'earned',
  // },
];
