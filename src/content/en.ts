import type { Copy } from './types';
import { FERRY_CODE, LINKS, YEARS } from '../data/site';

export const en: Copy = {
  meta: {
    title: 'Steeve Luis Angel Torres Agustin — Senior Full-Stack Software Engineer',
    description:
      'Senior full-stack engineer, 6+ years building production SaaS end to end: data, integrations and systems that stay fast under load — Elixir/Phoenix, PostgreSQL, React & React Native.',
    ogTitle: 'Steeve Luis Angel Torres Agustin — Senior Full-Stack Software Engineer',
    ogDescription:
      'I build the complicated parts — data, integrations, payments and systems that stay fast under load — and the screens on top of them. Open to remote (US time zones).',
    ogImageAlt:
      'Steeve Luis Angel Torres Agustin — senior full-stack software engineer. Data, integrations and systems that stay fast under load. Open to remote roles in US time zones.',
    twitterTitle: 'Steeve Luis Angel Torres Agustin — Senior Full-Stack Software Engineer',
    twitterDescription:
      'Data, integrations, payments and systems that stay fast under load — Elixir/Phoenix + React. Open to remote (US time zones).',
  },

  skip: 'Skip to content',
  railRole: 'Senior Full-Stack Software Engineer',
  themeToLight: 'Light',
  themeToDark: 'Dark',
  themeAria: 'Toggle color theme',
  langAria: 'Language',
  navAria: 'Sections',
  paletteLabel: 'Palette',
  nav: [
    { label: 'Domains', href: '#domains' },
    { label: 'Work', href: '#work' },
    { label: 'Open source', href: '#open-source' },
    { label: 'Experience', href: '#experience' },
    { label: 'Stack', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],

  availability: 'Available · remote, US time zones',
  h1a: 'I build the complicated parts — data, integrations and systems that stay fast under load —',
  h1b: 'and the screens on top of them.',
  bio1: "Hi, I'm Steeve. For the last six years I've been building production SaaS end to end, mostly Elixir and Phoenix with PostgreSQL underneath. What I enjoy is the messy middle: syncing dozens of third-party systems that all disagree with each other, moving money reliably, and making a search that used to take half a minute answer in a fraction of a second.",
  bio2: "I'm also at home on the front end — React, Next.js and React Native — so I can carry a feature from schema to screen instead of handing it off halfway. I work test-first, and a good part of my week goes into code review and helping other developers get unstuck.",
  bio3: "I'd rather build, test and pivot than marry a single idea. I ask the whole team for their opinion and take feedback from anyone — working with people who see the problem differently is most of how I've learned to build products.",
  facts: [
    { k: 'Role', v: 'Senior Full-Stack Software Engineer' },
    { k: 'Strength', v: 'Complex data, integrations and scale — with a solid front end' },
    { k: 'Core stack', v: 'Elixir · Phoenix · PostgreSQL · React / Next.js / React Native' },
    { k: 'Based in', v: 'Playa del Carmen, Mexico — open to remote (US time zones)' },
  ],
  ctaWork: 'Read the work ↓',
  ctaCV: 'Download CV',

  domainsLabel: 'Domains',
  domainsH: "The parts of a product I've owned.",
  domains: [
    { k: 'Payments', v: 'Reservation payments and checkout, built end to end as the sole developer on it.' },
    { k: 'Bookings', v: 'Reservation flows and the rules around them, from availability to confirmation.' },
    { k: 'Inventory', v: 'A centralized real-time inventory engine fed by many external systems that rarely agree.' },
    {
      k: 'Background preprocessing',
      v: 'Queues and jobs that absorb bursts, respect external rate limits, and keep the database calm.',
    },
    {
      k: 'Distribution channels',
      v: 'A public GraphQL API for partner platforms, plus web and React Native apps on top of it.',
    },
  ],

  workLabel: 'Selected work',
  workH: "Two pieces I'd want to talk through.",
  searchYear: YEARS.search,
  searchTitle: 'Park search, rebuilt',
  searchKind: "The hardest problem I've solved",
  searchP1: 'Search was simple and very slow — 16 to 30 seconds — because it went out to every integration for prices while the user waited.',
  searchP2: 'I built a way to pull prices for all parks across the different integrations, keep them synchronized, and preprocess them ahead of the query: in-memory caching, indexes designed for the queries we actually run (and checking the planner really used them), a faster price-processing path, and returning prices by search parameters instead of per spot or category, which was far more expensive.',
  searchP3: "That took it to about 300ms. There was still margin left, but the next slice of improvement would have cost several more days, so we agreed it wasn't worth it. Knowing where to stop is part of the work.",
  barLabel: 'Response time, before → after',
  latency: [
    { label: '16–30s', width: '100%', color: 'var(--ink-3)', opacity: 0.45 },
    { label: '~300ms', width: '6%', color: 'var(--accent)', opacity: 1 },
  ],
  feTitle: 'On the front end',
  feKind: 'Shipped and public',
  frontend: [
    {
      year: YEARS.fleetSync,
      name: 'FleetSync',
      stack: 'Next.js · React · Radix UI · Tailwind · TanStack Query · DocuSign',
      body: 'Fleet-management admin app for fleets, vehicles and inventory. I contributed to the front end of the management system and helped build it out.',
      links: [{ label: 'fleet-sync.co', href: LINKS.fleetSync }],
    },
    {
      year: YEARS.s2nMobile,
      name: 'Spot2Nite mobile',
      stack: 'React Native',
      body: 'The RV-resort booking app on iOS. I developed the main screens.',
      links: [
        { label: 'App Store', href: LINKS.s2nApp },
        { label: 'spot2nite.com', href: LINKS.s2nSite },
      ],
    },
  ],

  osLabel: 'Open source',
  osH: 'Published, installable, running in production.',
  osIntro: "You don't have to take my word for it — this one is on Hex, so you can pull it into a project and watch it work.",
  ferryYear: YEARS.ferry,
  ferryKind: 'Elixir library · Hex.pm',
  ferryP1: 'The platform I work on takes hundreds of thousands of inventory-update requests from different integrations. Storing and preprocessing them the obvious way — a database write or an Oban job per request — ate connections, and during inventory-update hours it took the system down.',
  ferryP2: "Ferry sits in front of that. Requests are absorbed in memory and consumed one by one, so five updates arriving at the same instant spend one connection instead of five, with traceability for everything that comes in. For integrations that don't send ARI notifications we use it to write preprocessed prices gently, and the database answers immediately because there is far less concurrency.",
  ferryP3: "It also carries emails, events from tracking tools, and content updates — anywhere I need to hold concurrency down so we don't blow past someone else's rate limits.",
  ferryFeatures: [
    { k: 'batching', v: 'Configurable batch size and timeout, so bursts collapse into fewer downstream calls.' },
    { k: 'dead-letter', v: 'Failed operations land in a dead-letter queue instead of disappearing.' },
    { k: 'telemetry', v: 'Instrumented via :telemetry, so queue behaviour is observable in production.' },
    { k: 'back-pressure', v: 'Producers are slowed at the boundary rather than letting the queue grow unbounded.' },
    { k: 'supervision', v: 'Each instance runs its own supervision subtree — isolated failure domains.' },
  ],
  ferryCode: FERRY_CODE,
  ferryCodeLabel: 'Usage',
  ferryLinks: [
    { label: 'Code', href: LINKS.ferryGithub },
    { label: 'hex.pm/packages/ferry', href: LINKS.ferryHex },
  ],

  expLabel: 'Experience',
  expH: 'Six years, three companies.',
  colPeriod: 'Period',
  colRole: 'Role',
  colDid: 'What I did',
  experience: [
    {
      period: 'Jun 2021 — Present',
      meta: 'Remote · US company',
      company: 'Spot2Nite',
      roles: ['Senior Full-Stack Engineer'],
      summary: 'Principal backend contributor to an RV-resort booking & management platform (Elixir/Phoenix umbrella). Defined architecture across backend, web and mobile; built 15+ PMS/OTA and payment integrations, a centralized real-time inventory engine, the reservation payments/checkout system (sole developer), and a public GraphQL API for third-party platform partners. Led a small team, ran code reviews and — on my own initiative — took on advising other developers and teams on how to solve problems. Also developed the main screens of the mobile app.',
      stack: 'Elixir · Phoenix · PostgreSQL · Absinthe · Oban · React Native',
    },
    {
      period: 'Sep 2019 — Jun 2021',
      meta: 'Agency client work',
      company: 'Foxlabs',
      roles: ['Full-Stack Developer'],
      summary: 'Web/mobile apps and integrations for agency clients (incl. a club reservations & membership platform); NestJS + WooCommerce microservices, Node/TypeScript email API.',
      stack: 'NestJS · Node.js · TypeScript · React · WooCommerce',
    },
    {
      period: '2018 — 2019',
      meta: 'In-house',
      company: 'Telweb',
      roles: ['Web Developer'],
      summary: 'Internal business apps with PHP/Laravel and Vue.js.',
      stack: 'PHP · Laravel · Vue.js',
    },
  ],

  stackLabel: 'Stack',
  stackH: 'What I reach for.',
  skills: [
    {
      label: 'Backend',
      items: 'Elixir, Phoenix, Absinthe (GraphQL), Ecto, Oban, OTP, PostgreSQL, NestJS, Node.js/Express, REST & OTA/XML APIs',
    },
    { label: 'Frontend', items: 'React, Next.js, React Native, Vue.js, Angular (basic), Tailwind CSS, Radix UI' },
    { label: 'Data & infra', items: 'PostgreSQL tuning, Docker, Docker Compose, CI/CD, VPS deployment' },
    {
      label: 'Practices',
      items: 'System architecture, API design, TDD (ExUnit), data migrations, AI-assisted development (Claude Code, Engram MCP)',
    },
    { label: 'Languages', items: 'Spanish — Native · English — professional reading & writing, limited spoken' },
  ],

  contactLabel: 'Contact',
  contactH: 'Open to remote (US time zones).',
  contactP: 'If this looks like the kind of work your team needs, write to me — email is the fastest way to reach me.',
  cvLink: 'CV (PDF) ↓',
  footer: 'Playa del Carmen, Mexico · 2026',
};
