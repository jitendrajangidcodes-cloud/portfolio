import type { Profile } from '@/types/content';

/**
 * SINGLE SOURCE OF TRUTH for who you are.
 *
 * Seeded from your CV (Technical Lead @ Ongraph Technologies) and your real
 * repositories. Everything here is editable text — change it freely, no component
 * edits needed. Nothing is invented; numbers are conservative and verifiable.
 */
export const profile: Profile = {
  name: 'Jitendra Jangid',
  title: 'Technical Lead · Full-Stack Engineer',
  roles: [
    'Full-stack web apps',
    'MEAN & React / Next.js',
    'Cloud on AWS & GCP',
    'Scalable APIs & microservices',
    'Privacy-first mobile apps',
    'Teams & mentorship',
  ],
  summary:
    'Technical Lead and full-stack engineer with 9+ years building and shipping scalable ' +
    'web applications — MEAN stack, React/Next.js, and cloud on AWS and GCP. I lead teams, ' +
    'design APIs and microservices, and on the side build privacy-first mobile apps.',
  bio: [
    'I’m a Technical Lead at Ongraph Technologies in Jaipur, where I’ve grown over 9+ years ' +
      'from Junior to Senior Software Engineer to Technical Lead. I architect high-performance ' +
      'web applications on the MEAN stack (MongoDB, Express, Angular, Node) and React/Next.js, ' +
      'and deploy them on AWS and Google Cloud.',
    'My day-to-day spans microservices, RESTful APIs, database and caching optimisation ' +
      '(MongoDB, Mongoose, Redis), and CI/CD with Docker, Jenkins and GitHub Actions — while ' +
      'leading agile teams, mentoring developers, and keeping security (OWASP, auth) front of mind.',
    'Outside of work I build privacy-first, offline-capable mobile apps in Flutter: an ' +
      'end-to-end-encrypted chat app on the Signal Protocol, an offline biometric card vault ' +
      'with on-device OCR, and a Tauri 2 desktop suite. I care about the details that turn a ' +
      'demo into a product people can rely on.',
  ],
  location: 'Jaipur, India',
  email: 'jitendrajangid.codes@gmail.com',
  altEmail: 'jitujangid204@gmail.com',
  githubUser: 'jitendrajangidcodes-cloud',
  avatar: '/images/avatar.svg', // TODO: drop a real photo at /public/images/avatar.jpg and update
  socials: [
    { label: 'GitHub', href: 'https://github.com/jitendrajangidcodes-cloud', icon: 'Github' },
    // TODO: add your real LinkedIn/X URLs, or remove entries you don't use.
    { label: 'LinkedIn', href: '#', icon: 'Linkedin' },
    { label: 'Email', href: 'mailto:jitendrajangid.codes@gmail.com', icon: 'Mail' },
    { label: 'Phone', href: 'tel:+919929003090', icon: 'Phone' },
  ],
  stats: [
    { label: 'Years of experience', value: '9+', hint: 'Since 2016' },
    { label: 'Current role', value: 'Tech Lead', hint: 'Ongraph Technologies' },
    { label: 'Core stack', value: 'MEAN', hint: 'React · Next · Node · Cloud' },
  ],
  resumeUrl: undefined, // TODO: drop a /public/resume.pdf and set '/resume.pdf'
  availableForWork: true,
};
