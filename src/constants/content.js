// ─────────────────────────────────────────────────────────────────────────────
// NordBridge — Site Content
// Edit this file to update company info, contact details, and key copy.
// ─────────────────────────────────────────────────────────────────────────────

export const COMPANY = {
  name: 'NordBridge',
  tagline: 'Your nearshoring partner. Fully managed.',
  description:
    'Connecting Nordic and Benelux companies with vetted service providers in North Macedonia.',
  // ── Replace these before launch ──────────────────────────────────────────
  email: 'hello@nordbridge.eu',
  linkedin: 'https://linkedin.com/company/nordbridge',
  calendly: 'https://calendly.com/nordbridge', // Replace with your Calendly link
  // ─────────────────────────────────────────────────────────────────────────
}

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why NordBridge', href: '#why-us' },
  { label: 'Who We Serve', href: '#clients' },
]

export const STATS = [
  { value: '30–60%', label: 'Cost reduction vs. local hiring' },
  { value: 'UTC+1', label: 'Same working hours as Europe' },
  { value: '100%', label: 'Managed process, end to end' },
  { value: '3', label: 'Core service verticals' },
]

export const SERVICE_VERTICALS = [
  {
    id: 'it-development',
    icon: 'Code2',
    title: 'IT & Software Development',
    positioning: 'Skilled development teams without the recruitment overhead.',
    description:
      'Access experienced developers and technical specialists — vetted, onboarded, and managed by us.',
    deliverables: [
      'Web & mobile development',
      'Custom software & API integrations',
      'QA testing & technical support',
      'DevOps & cloud infrastructure',
      'Dedicated development teams',
    ],
    why: 'When you need technical capacity without building a full local team.',
    cta: 'Discuss IT Services',
  },
  {
    id: 'customer-support',
    icon: 'Headphones',
    title: 'Customer Support & Back Office',
    positioning: 'Scalable, professional support — set up and managed for you.',
    description:
      'Multilingual support and back-office operations that represent your brand with care.',
    deliverables: [
      'Customer support (email, chat, phone)',
      'Order & returns management',
      'CRM operations & data management',
      'Back-office administration',
      'Process documentation & quality oversight',
    ],
    why: 'When your operations need to scale faster than you can hire locally.',
    cta: 'Discuss Support Services',
  },
  {
    id: 'accounting',
    icon: 'Calculator',
    title: 'Accounting & Financial Operations',
    positioning: 'Reliable finance capacity, aligned with European standards.',
    description:
      'Bookkeeping, reporting, and compliance support — without expanding your permanent headcount.',
    deliverables: [
      'Bookkeeping & bank reconciliation',
      'Accounts payable & receivable',
      'Payroll processing support',
      'Financial reporting & analysis',
      'Audit preparation & compliance',
    ],
    why: 'When you need finance support without adding to your permanent team.',
    cta: 'Discuss Finance Services',
  },
]

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Tell us what you need',
    description:
      'We start with a clear conversation about your requirements, team structure, and operational goals. No templates, no generic forms.',
  },
  {
    number: '02',
    title: 'We source and vet',
    description:
      'We identify the right service providers from our local network in North Macedonia. Every partner is personally evaluated — not just listed.',
  },
  {
    number: '03',
    title: 'We handle onboarding',
    description:
      'Contracts, introductions, tooling, and team alignment. We manage the transition so your operations start smoothly, not slowly.',
  },
  {
    number: '04',
    title: 'We stay involved',
    description:
      "This isn't a handoff. We provide ongoing account management, quality oversight, and communication support — as long as we work together.",
  },
]

export const WHY_US_POINTS = [
  {
    icon: 'Shield',
    title: 'Curated partner network',
    description:
      'Every provider we work with is personally vetted on capability, communication, and track record. Not sourced from a public directory.',
  },
  {
    icon: 'Globe',
    title: 'Western-facing communication',
    description:
      'We speak the language of Nordic and Benelux business. You always deal with clarity, not confusion.',
  },
  {
    icon: 'Eye',
    title: 'Full transparency',
    description:
      'You always know the status, the next step, and who is responsible. No black boxes, no surprises.',
  },
  {
    icon: 'Award',
    title: 'Quality accountability',
    description:
      "We stay accountable for outcomes, not just contracts signed. If something isn't working, we fix it.",
  },
  {
    icon: 'Handshake',
    title: 'Long-term partnership',
    description:
      "We're not transaction-oriented. Our model is built around lasting client relationships, not one-time placements.",
  },
  {
    icon: 'Layers',
    title: 'Scalable engagement',
    description:
      'Start with one function, expand as trust builds. Our structure grows with your needs.',
  },
]

export const CLIENT_TYPES = [
  {
    icon: 'Cpu',
    title: 'SaaS Companies',
    description:
      'Need development or support capacity without growing local headcount.',
  },
  {
    icon: 'ShoppingBag',
    title: 'E-commerce Brands',
    description:
      'Require scalable customer operations and back-office support to match growth.',
  },
  {
    icon: 'Briefcase',
    title: 'Agencies',
    description:
      'Looking for reliable white-label delivery capacity without managing it themselves.',
  },
  {
    icon: 'Calculator',
    title: 'Finance Teams',
    description:
      'Need accounting support and compliance assistance without adding permanent staff.',
  },
  {
    icon: 'Building2',
    title: 'SMEs Scaling Up',
    description:
      'Exploring nearshoring for the first time and want a trusted, guided introduction.',
  },
  {
    icon: 'Users',
    title: 'Operational Teams',
    description:
      'Need to offload high-volume, process-heavy work to a professional, reliable partner.',
  },
]

export const TRUST_POINTS = [
  {
    label: 'We represent, not just list',
    body: "Every provider we work with is vouched for by us. Our reputation is tied directly to their performance — so we're selective.",
  },
  {
    label: 'Aligned incentives',
    body: "We operate on a long-term partnership model. Your success is how we succeed — we're not chasing placement fees.",
  },
  {
    label: 'We understand both sides',
    body: 'We know what Nordic and Benelux companies expect, and we know how Macedonian teams operate. We bridge the gap — fluently.',
  },
  {
    label: "We're honest about fit",
    body: "Not every client is right for us. Not every provider is right for you. We'll tell you both before wasting anyone's time.",
  },
  {
    label: 'An extension of your team',
    body: "Not a vendor to manage — a partner who understands your business. We show up like we're part of the company.",
  },
]
