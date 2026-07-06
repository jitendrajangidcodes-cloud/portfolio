import type { ClientProject } from '@/types/content';

/**
 * Projects delivered as an employee at Ongraph Technologies. No public repos —
 * this is client/employer work, kept separate from independent projects in
 * `projects.ts` which link to real repos with live GitHub stats.
 */
export const clientWork: ClientProject[] = [
  {
    name: 'Innovate MR',
    tagline: 'Market research panels, marketplace, and full bid-to-invoice reporting.',
    description:
      'InnovateMR is the trusted provider for consumer and B2B panels used for surveying and ' +
      'data collection. The team uses an internal tool, Edge, to serve customers faster and ' +
      "with better quality, managing the platform's complete bidding, project, and survey " +
      'lifecycle through to invoicing. Integrates with supplier marketplaces (Fulcrum, PS, ' +
      'Peanut Labs) and digital fingerprinting/de-dupe technologies (Relevant ID, Sample ' +
      'Chain, TrueSample), plus its own buyer and supplier APIs for faster integration.',
    stack: ['MongoDB', 'Express.js', 'Angular.js', 'Node.js', 'Socket.io', 'AWS'],
    org: 'Ongraph Technologies',
    link: 'https://edge.innovatemr.net/',
  },
  {
    name: 'PureSpectrum',
    tagline: 'Survey-sample marketplace handling 7-8k requests per minute.',
    description:
      "PureSpectrum is an intelligent marketplace for buyers and sellers of online sample. As " +
      "engineers, client advocates, and sampling experts, its mission is to reinvent how " +
      "sample is bought and sold — delivering any audience, anywhere, at a great price. Built " +
      "both the frontend and backend systems and APIs from the project's beginning, with data " +
      "mining over collected samples to streamline the entire buying experience.",
    stack: ['Angular 6', 'Node.js', 'MongoDB', 'JWT', 'RxJS', 'PM2', 'Socket.io', 'Redis', 'AWS'],
    org: 'Ongraph Technologies',
    link: 'http://purespectrum.com/',
  },
  {
    name: 'Classicspecs',
    tagline: 'Real-estate showcase platform with live video conferencing.',
    description:
      'A properties showcase platform built on video conferencing features. Three user types ' +
      '(Organizer, Speaker, Attendee): organizers create events, each event holds multiple ' +
      'spotlights tied to specific property types (e.g. 2BHK), each spotlight supports ' +
      'multiple speakers, and attendees join a spotlight inside a live video room once booked.',
    stack: ['Angular', 'Node.js', 'MongoDB', 'WebSockets', 'AWS'],
    org: 'Ongraph Technologies',
    link: 'https://www.classicspecs.com/',
  },
  {
    name: 'Brokerageengine',
    tagline: 'Back-office platform for brokerages — listings, payments, and invoices.',
    description:
      'A complete back-office software solution for brokerages of all sizes, covering every ' +
      'aspect of the business in one simple platform. Built the admin client-configuration ' +
      'page that lets an admin user grant and revoke account access.',
    stack: ['Pug', 'Bootstrap', 'Node.js', 'TypeScript', 'MongoDB Atlas', 'Socket.io', 'Redis', 'AWS', 'Data Studio', 'Slack'],
    org: 'Ongraph Technologies',
    link: 'https://brokerageengine.com/',
  },
  {
    name: 'RapidCAD',
    tagline: 'Subscription SaaS for sheet-metal design.',
    description:
      'RapidCAD Sheet is a highly optimized, web-based sheet-metal design application — ' +
      'simple to complex parts modeled by users of any skill level. Purpose-built for sheet-' +
      'metal manufacturers and cutting companies, with a full subscription/user-management ' +
      'system underneath.',
    stack: ['Stripe', 'Docker', 'Nodemailer', 'Redis'],
    org: 'Ongraph Technologies',
    link: 'https://rapidcad.com/',
  },
  {
    name: 'SpaMedica',
    tagline: 'Doctor appointment booking — admin portal and patient mobile app.',
    description:
      'A medical appointments solution: an admin web portal for doctors and a mobile app for ' +
      'patients to check availability and book appointments.',
    stack: ['Angular', 'Ionic'],
    org: 'Ongraph Technologies',
  },
  {
    name: 'Pointclub',
    tagline: 'Gamified paid-survey rewards platform.',
    description:
      'A paid-survey platform where members earn cash and virtual currency by taking surveys, ' +
      'joining exclusive communities, watching videos, and playing games — redeemable for cash ' +
      'or gift cards. Built as a first-in-class, gamified loyalty/rewards site.',
    stack: ['Angular 12', 'ts-node', 'TypeScript', 'Node.js', 'Mailgun', 'Amazon SES', 'Amazon S3'],
    org: 'Ongraph Technologies',
    link: 'https://members.pointclub.com/home',
  },
  {
    name: 'Noucuisine',
    tagline: 'Recipe-sharing website.',
    description:
      "A site to share what everyone's cooking around the world — browse recipes and share " +
      "what's on your own table.",
    stack: ['AWS', 'Express.js', 'Video.js', 'Google Fonts API', 'Webpack', 'Heroku'],
    org: 'Ongraph Technologies',
    link: 'https://www.noucuisine.com/',
  },
  {
    name: 'Thepropshow',
    tagline: 'Real-estate showcase platform with live video conferencing.',
    description:
      'A properties showcase platform built on video conferencing features, following the ' +
      'same Organizer/Speaker/Attendee spotlight model as Classicspecs.',
    stack: ['Angular 11', 'Node.js', 'MongoDB', 'Heroku'],
    org: 'Ongraph Technologies',
  },
  {
    name: 'Educative',
    tagline: 'Course-building platform with in-browser coding practice.',
    description:
      'An all-in-one course builder for educators and coders: an integrated code editor lets ' +
      'learners test their skills in real time against tailored assessments, across a diverse ' +
      'range of free courses (Java, JavaScript, and more). Instructors can build and sell their ' +
      'own courses too.',
    stack: ['React', 'Redux', 'redux-thunk', 'i18n'],
    org: 'Ongraph Technologies',
    link: 'https://www.educative.io',
  },
  {
    name: 'Pitchwave',
    tagline: 'Course-building and delivery platform with payments.',
    description:
      'A course creation and delivery platform in the same space as Educative, built on ' +
      'Next.js with its own auth, payments, and cloud infrastructure end to end.',
    stack: ['Next.js', 'NextAuth', 'Material UI', 'Node.js', 'Express.js', 'Stripe', 'AWS Lambda', 'Cognito', 'S3', 'EC2'],
    org: 'Ongraph Technologies',
    link: 'https://www.pitchwave.io',
  },
];
