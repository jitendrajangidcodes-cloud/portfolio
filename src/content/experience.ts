import type { ExperienceItem } from '@/types/content';

/**
 * Experience timeline — sourced from your CV. Real employment at Ongraph Technologies
 * plus your independent project work and education. Keep entries truthful; adjust
 * dates/summaries as needed.
 */
export const experience: ExperienceItem[] = [
  {
    role: 'Technical Lead',
    org: 'Ongraph Technologies',
    period: '2022 — Present',
    location: 'Jaipur, India',
    kind: 'work',
    summary:
      'Architect high-performance applications on the MEAN stack and cloud platforms (AWS, ' +
      'Google Cloud). Lead and mentor developers, drive agile practices, and deliver solutions ' +
      'aligned with business goals.',
    highlights: [
      'Architect scalable web apps with the MEAN stack, React and Next.js',
      'Lead agile teams, mentor developers, and set engineering best practices',
      'Own cloud deployments and CI/CD across AWS and Google Cloud',
    ],
    tech: ['MEAN', 'React', 'Next.js', 'Node.js', 'AWS', 'GCP', 'Docker'],
  },
  {
    role: 'Senior Software Engineer',
    org: 'Ongraph Technologies',
    period: '2019 — 2022',
    location: 'Jaipur, India',
    kind: 'work',
    summary:
      'Built scalable web applications using the MEAN stack and deployed them via AWS and ' +
      'Google Cloud. Worked across microservices architecture, RESTful APIs, and database ' +
      'optimisation while helping lead agile delivery.',
    highlights: [
      'Designed microservices and RESTful APIs',
      'Optimised databases and caching (MongoDB, Mongoose, Redis)',
      'Implemented cloud-based delivery on AWS and Google Cloud',
    ],
    tech: ['MEAN', 'Microservices', 'REST', 'MongoDB', 'Redis', 'AWS', 'GCP'],
  },
  {
    role: 'Junior Software Engineer',
    org: 'Ongraph Technologies',
    period: '2016 — 2019',
    location: 'Jaipur, India',
    kind: 'work',
    summary:
      'Developed dynamic web applications using the MEAN stack, building user-friendly ' +
      'interfaces and efficient server-side logic in agile teams.',
    highlights: [
      'Built front-end interfaces and back-end services on the MEAN stack',
      'Delivered features in agile, collaborative environments',
    ],
    tech: ['MongoDB', 'Express.js', 'Angular', 'Node.js'],
  },
  {
    role: 'Independent Developer — Privacy-first apps',
    org: 'Personal projects',
    period: '2025 — Present',
    location: 'Remote',
    kind: 'independent',
    summary:
      'Designing and shipping privacy-first mobile and desktop apps as a solo engineer — ' +
      'owning architecture, implementation and release.',
    highlights: [
      'E2E-encrypted chat on the Signal Protocol (OChat)',
      'Offline biometric card vault with on-device OCR (Aegis Wallet)',
      'Tauri 2 desktop suite for cross-machine sync and work-log automation',
    ],
    tech: ['Flutter', 'Dart', 'Kotlin', 'Tauri', 'Rust', 'TypeScript'],
  },
  {
    role: 'B.Tech, Computer Science & Engineering',
    org: 'Arya College',
    period: '2012 — 2016',
    location: 'Jaipur, India',
    kind: 'education',
    summary: 'Bachelor of Technology in Computer Science & Engineering.',
  },
];
