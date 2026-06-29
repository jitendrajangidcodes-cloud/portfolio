import type { SkillGroup } from '@/types/content';

/**
 * Skills grouped by domain, seeded from your CV and projects. `proficiency` drives a
 * visual meter only — keep it honest. Order reflects your professional focus:
 * full-stack web & cloud first, with mobile/security as additional strengths.
 */
export const skillGroups: SkillGroup[] = [
  {
    category: 'Front-End',
    description: 'User-friendly, responsive interfaces at scale.',
    icon: 'LayoutDashboard',
    skills: [
      { name: 'React', level: 'advanced', proficiency: 90 },
      { name: 'Next.js', level: 'advanced', proficiency: 86 },
      { name: 'Angular', level: 'advanced', proficiency: 84 },
      { name: 'TypeScript / JavaScript', level: 'advanced', proficiency: 88 },
      { name: 'Tailwind / Sass / Bootstrap', level: 'advanced', proficiency: 85, note: 'Semantic, responsive HTML' },
    ],
  },
  {
    category: 'Back-End',
    description: 'Scalable services, APIs, and microservices.',
    icon: 'Server',
    skills: [
      { name: 'Node.js', level: 'advanced', proficiency: 90 },
      { name: 'Express.js', level: 'advanced', proficiency: 88 },
      { name: 'RESTful APIs & microservices', level: 'advanced', proficiency: 86 },
      { name: 'Cron jobs & background workers', level: 'proficient', proficiency: 80 },
    ],
  },
  {
    category: 'Databases',
    description: 'Modelling, caching, and optimisation.',
    icon: 'Database',
    skills: [
      { name: 'MongoDB', level: 'advanced', proficiency: 88 },
      { name: 'Mongoose ORM', level: 'advanced', proficiency: 85 },
      { name: 'Redis (caching)', level: 'proficient', proficiency: 80 },
    ],
  },
  {
    category: 'Cloud',
    description: 'Deploying and operating across major clouds.',
    icon: 'CloudCog',
    skills: [
      { name: 'AWS (EC2, S3, Lambda)', level: 'advanced', proficiency: 84 },
      { name: 'Google Cloud (Firebase, Functions)', level: 'proficient', proficiency: 80 },
    ],
  },
  {
    category: 'DevOps & CI/CD',
    description: 'Automated, repeatable delivery.',
    icon: 'Workflow',
    skills: [
      { name: 'Git & GitHub Actions', level: 'advanced', proficiency: 86 },
      { name: 'Docker', level: 'proficient', proficiency: 80 },
      { name: 'Jenkins', level: 'proficient', proficiency: 76 },
    ],
  },
  {
    category: 'Security & Leadership',
    description: 'Secure systems and the teams that build them.',
    icon: 'ShieldCheck',
    skills: [
      { name: 'OWASP & auth strategies', level: 'advanced', proficiency: 82 },
      { name: 'Performance optimisation', level: 'advanced', proficiency: 84 },
      { name: 'Team leadership & mentorship', level: 'advanced', proficiency: 88 },
    ],
  },
  {
    category: 'Mobile & Desktop',
    description: 'Privacy-first apps beyond the web (independent work).',
    icon: 'Smartphone',
    skills: [
      { name: 'Flutter & Dart', level: 'advanced', proficiency: 86 },
      { name: 'Kotlin (Android system)', level: 'proficient', proficiency: 70 },
      { name: 'Tauri 2 & Rust', level: 'learning', proficiency: 58 },
      { name: 'E2E encryption (Signal Protocol)', level: 'proficient', proficiency: 72 },
    ],
  },
];
