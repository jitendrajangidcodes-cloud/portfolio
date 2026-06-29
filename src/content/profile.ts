import type { Profile } from '@/types/content';

/**
 * SINGLE SOURCE OF TRUTH for who you are.
 *
 * Everything here is editable text — change it freely, no component edits needed.
 * Lines marked `// TODO` are placeholders to keep the site truthful: replace them
 * with real facts or delete them. Never invent employers, awards, or years.
 */
export const profile: Profile = {
  name: 'Jitendra Jangid',
  title: 'Software Engineer — Mobile, Security & Systems',
  roles: [
    'Flutter & Dart',
    'Secure mobile apps',
    'Cloud & sync systems',
    'Desktop with Tauri & Rust',
    'Automation & integrations',
  ],
  summary:
    'I build privacy-first, offline-capable apps across mobile, desktop and cloud — ' +
    'from encrypted vaults and end-to-end-encrypted messaging to LAN sync tools and ' +
    'productivity automation.',
  bio: [
    // TODO: Replace with your own words. This draft only restates what your repos show.
    'I’m a software engineer focused on shipping real, polished products. My work ' +
      'centres on mobile development with Flutter, with a strong bias toward privacy, ' +
      'offline-first design, and security-hardened storage.',
    'Recent projects span an end-to-end-encrypted chat app built on the Signal Protocol, ' +
      'an offline biometric-locked card vault with on-device OCR, a two-way Google Drive ' +
      'sync engine, and a Tauri 2 desktop suite for developer workflow automation.',
    'I care about the details that separate a demo from a product: exact-time alarms that ' +
      'survive a locked screen, encryption that never phones home, and tooling that stays ' +
      'maintainable for years.',
  ],
  location: 'India', // TODO: confirm / refine
  email: 'ailancers1.code@gmail.com',
  githubUser: 'jitendrajangidcodes-cloud',
  avatar: '/images/avatar.svg',
  socials: [
    { label: 'GitHub', href: 'https://github.com/jitendrajangidcodes-cloud', icon: 'Github' },
    // TODO: add your real profiles, or remove the ones you don't use.
    { label: 'LinkedIn', href: '#', icon: 'Linkedin' },
    { label: 'X / Twitter', href: '#', icon: 'Twitter' },
    { label: 'Email', href: 'mailto:ailancers1.code@gmail.com', icon: 'Mail' },
  ],
  stats: [
    // Honest, self-reported. Update as you grow. The "Public repos" stat is replaced
    // automatically with the live GitHub number when the build-time sync runs.
    { label: 'Shipped projects', value: '6+', hint: 'Mobile, desktop & cloud' },
    { label: 'Core domains', value: '4', hint: 'Mobile · Security · Cloud · Desktop' },
    { label: 'Primary stack', value: 'Flutter', hint: 'Dart, Kotlin, Rust' },
  ],
  resumeUrl: undefined, // TODO: drop a /public/resume.pdf and set '/resume.pdf'
  availableForWork: true,
};
