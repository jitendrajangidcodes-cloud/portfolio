import type { ClientProject } from '@/types/content';

/**
 * Projects delivered as an employee at Ongraph Technologies. No public repos —
 * this is client/employer work, kept separate from independent projects in
 * `projects.ts` which link to real repos with live GitHub stats.
 */
export const clientWork: ClientProject[] = [
  {
    name: 'Innovate MR',
    tagline: 'Survey and data collection platform with supplier integrations.',
    description: 'Handles bids, projects, and surveys with third-party supplier integrations.',
    stack: ['MongoDB', 'Express.js', 'Angular.js', 'Node.js', 'Socket.io', 'AWS'],
    org: 'Ongraph Technologies',
  },
  {
    name: 'PureSpectrum',
    tagline: 'High-throughput survey marketplace handling 7-8k requests per minute.',
    description: 'A marketplace with heavy API integrations built for sustained high load.',
    stack: ['Angular 6', 'Node.js', 'MongoDB', 'JWT', 'RxJS', 'PM2', 'Socket.io', 'Redis', 'AWS'],
    org: 'Ongraph Technologies',
  },
  {
    name: 'Classicspecs',
    tagline: 'Properties showcase platform with live video conferencing.',
    description: 'Video conferencing for organizers, speakers, and attendees around property listings.',
    stack: ['Node.js', 'MongoDB', 'WebRTC'],
    org: 'Ongraph Technologies',
  },
  {
    name: 'Brokerageengine',
    tagline: 'Back-office software for brokerages with admin configuration.',
    description: 'Configurable back-office platform for brokerage firms.',
    stack: ['Pug', 'Bootstrap', 'Node.js', 'TypeScript', 'MongoDB Atlas', 'Socket.io', 'Redis', 'AWS'],
    org: 'Ongraph Technologies',
  },
  {
    name: 'RapidCAD',
    tagline: 'SaaS sheet-metal design application with a subscription model.',
    description: 'Subscription-based SaaS CAD tool for sheet-metal design.',
    stack: ['Docker', 'Stripe', 'Nodemailer', 'Redis'],
    org: 'Ongraph Technologies',
  },
  {
    name: 'SpaMedica',
    tagline: 'Medical appointment booking system with admin portal and mobile app.',
    description: 'Booking platform for medical appointments spanning web admin and a mobile app.',
    stack: ['Node.js', 'MongoDB'],
    org: 'Ongraph Technologies',
  },
  {
    name: 'Pointclub',
    tagline: 'Gamified survey rewards platform.',
    description: 'Rewards users with points for completing surveys, gamified for engagement.',
    stack: ['Angular 12', 'ts-node', 'TypeScript', 'Node.js', 'Mailgun', 'Amazon SES', 'Amazon S3'],
    org: 'Ongraph Technologies',
  },
  {
    name: 'Noucuisine',
    tagline: 'Recipe sharing website.',
    description: 'A recipe-sharing platform with video content.',
    stack: ['AWS', 'Express.js', 'Video.js', 'Google Fonts API', 'Webpack', 'Heroku'],
    org: 'Ongraph Technologies',
  },
  {
    name: 'Thepropshow',
    tagline: 'Real estate showcase platform with video conferencing.',
    description: 'Property showcase site with built-in live video conferencing for viewings.',
    stack: ['Angular 11', 'Node.js', 'MongoDB', 'Heroku'],
    org: 'Ongraph Technologies',
  },
  {
    name: 'Educative',
    tagline: 'Course building and coding practice platform.',
    description: 'Lets instructors build courses and learners practice coding in-browser.',
    stack: ['React', 'Redux', 'redux-thunk', 'i18n'],
    org: 'Ongraph Technologies',
  },
  {
    name: 'Pitchwave',
    tagline: 'Educational platform for course creation.',
    description: 'Course creation and delivery platform with payments and cloud auth.',
    stack: ['Next.js', 'NextAuth', 'Material UI', 'Node.js', 'Express.js', 'Stripe', 'AWS Lambda', 'Cognito', 'S3', 'EC2'],
    org: 'Ongraph Technologies',
  },
];
