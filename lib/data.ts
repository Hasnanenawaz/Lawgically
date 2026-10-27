// All editable content for the site lives in this file.
// Change text, prices, contact details or projects here and the page updates.

export const site = {
  name: 'Lawgically IT.support',
  url: 'https://lawgically.it', // change to your real domain once it is connected
  tagline: 'Digital solutions, without the complexity.',
  description:
    'Lawgically IT.support is a web and AI engineering agency in Raipur, India. We build websites, run digital marketing and provide IT support for small businesses, startups and professionals.',
  whatsappNumber: '918269786782', // digits only, with country code
  phoneDisplay: '+91 82697 86782',
  email: 'hasnanenawaz@gmail.com',
  location: 'Raipur, Chhattisgarh, India',
  hours: '[Mon to Sat, 10am to 7pm]',
  replyTime: '[X hours]',
  linkedin: 'https://www.linkedin.com/in/hasnane-nawaz-19ba32294/',
};

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const SERVICES = [
  'Website Development',
  'Digital Marketing',
  'IT Support & Maintenance',
  'All three / not sure yet',
] as const;
export type Service = (typeof SERVICES)[number];

export type Tile = { v: string; l: string };
export type Project = {
  name: string;
  kind: string;
  type: 'web' | 'social';
  url?: string;
  note?: string;
  // embed: true shows the real live site inside the preview frame.
  // Set it to false for any site that refuses to be shown inside another page.
  embed?: boolean;
  desc: string;
  frame: string;
  siteBg?: string;
  siteFg?: string;
  accent: string;
  ctaFg?: string;
  domain?: string;
  tag?: string;
  head: string;
  sub?: string;
  cta?: string;
  tiles?: Tile[];
  initials?: string;
  handle?: string;
  channel?: string;
  chipLabel?: string;
  chip?: string;
};

export const projects: Project[] = [
  {
    name: 'Stamp2Fly', kind: 'Website + Meta Ads', type: 'web', url: 'https://www.stamp2fly.com', embed: false,
    desc: 'Website for a visa and travel consultancy, plus the Meta ads and Instagram posts that bring WhatsApp leads for Canton Fair invitation letters and China visas.',
    frame: '#F3DFA2', siteBg: '#FFFFFF', siteFg: '#1B2340', accent: '#E8762D', ctaFg: '#FFFFFF', domain: 'stamp2fly.com',
    tag: 'Visa & travel consultancy', head: 'Canton Fair and China visa help.', sub: 'Invitation letters, visa paperwork and travel help, with enquiries arriving on WhatsApp.', cta: 'Chat on WhatsApp',
    tiles: [{ v: 'Canton Fair', l: 'Invitation letters' }, { v: 'China', l: 'Visa help' }, { v: '+20%', l: 'Revenue growth' }],
  },
  {
    name: 'Yoga For Cure', kind: 'Wellness website', type: 'web', url: 'https://yogaforcure.in', embed: true,
    desc: 'Site for an online yoga teacher: programs, a weekly live schedule, tiered pricing with a Best Value plan, corporate wellness, and WhatsApp booking on every button.',
    frame: '#B9D1BF', siteBg: '#F7F3EC', siteFg: '#1E2B22', accent: '#3E7A55', ctaFg: '#FFFFFF', domain: 'yogaforcure.in',
    tag: 'Online Indian yoga teacher', head: 'Build strength. Improve flexibility.', sub: 'Live group classes, 1-on-1 sessions, a self-paced library and corporate wellness.', cta: 'Join class',
    tiles: [{ v: '10+', l: 'Years teaching' }, { v: '100+', l: 'Guided sessions' }, { v: '3x', l: 'Live classes a week' }],
  },
  {
    name: 'CG Travel', kind: 'Tourism site + AI planner', type: 'web', url: 'https://cg-tourism-nine.vercel.app', embed: true,
    desc: 'A travel site for Chhattisgarh with destination guides, tour packages, an interactive district map, festivals, and an AI planner that builds a trip from your month, group and budget.',
    frame: '#A9CDB8', siteBg: '#0F2A20', siteFg: '#F1EDE4', accent: '#E9B949', ctaFg: '#0F2A20', domain: 'cg-tourism-nine.vercel.app',
    tag: 'Chhattisgarh Travel', head: 'Chhattisgarh, still unmapped by most of India.', sub: 'Destinations, packages, hotels and festivals, plus an AI trip planner.', cta: 'Try the AI Planner',
    tiles: [{ v: '44%', l: 'Forest cover' }, { v: '40+', l: 'Waterfalls mapped' }, { v: 'AI', l: 'Trip planner' }],
  },
  {
    name: 'Lawgically', kind: 'Legal ed-tech platform', type: 'web', url: 'https://lawgically.vercel.app', embed: true,
    desc: 'A platform for first-generation law students: an internship portal filtered by year, city and practice area, a guidance hub, and a community of peers and mentors. Waitlist open.',
    frame: '#9FB3D6', siteBg: '#062140', siteFg: '#F4F1EA', accent: '#D9B26A', ctaFg: '#062140', domain: 'lawgically.vercel.app',
    tag: 'Legal ed-tech · Coming 2026', head: 'You were never given the map.', sub: 'The path from classroom to courtroom, for first-generation lawyers.', cta: 'Join the waitlist',
    tiles: [{ v: 'Internships', l: 'Portal' }, { v: 'Guidance', l: 'Hub' }, { v: 'Mentors', l: 'Community' }],
  },
  {
    name: 'hasnanenawaz.in', kind: 'Marketing portfolio', type: 'web', url: 'https://www.hasnanenawaz.in', embed: true,
    desc: "A growth marketer's portfolio: count-up stats, every project shown as a before and after, an experience timeline, and an FAQ written to rank in search.",
    frame: '#FF8A73', siteBg: '#0D0D12', siteFg: '#F2EFE8', accent: '#FFC83D', ctaFg: '#100E24', domain: 'hasnanenawaz.in',
    tag: 'Growth strategist', head: 'Hasnane Nawaz', sub: 'Turns scattered attention into structured communities, qualified leads and measurable revenue.', cta: 'Hire Hasnane',
    tiles: [{ v: '2.5+', l: 'Years in growth' }, { v: '50k+', l: 'Members scaled' }, { v: '7x+', l: 'Revenue jump' }],
  },
  {
    name: 'Hasnane Nawaz, Legal', kind: 'Legal portfolio', type: 'web', url: 'https://lawyer.hasnanenawaz.in', embed: true,
    desc: 'A second portfolio written for law firms: internships, moot court awards, publications on AI law and cybercrime, and a contact form for internship and research enquiries.',
    frame: '#D8C3A5', siteBg: '#FBF8F2', siteFg: '#1D1A16', accent: '#8A5A2B', ctaFg: '#FFFFFF', domain: 'lawyer.hasnanenawaz.in',
    tag: 'BA LLB · Legal professional', head: 'Hasnane Nawaz', sub: 'Courtroom experience in criminal law, consumer protection and NI Act matters.', cta: 'Get in touch',
    tiles: [{ v: '5+', l: 'Internships' }, { v: '6+', l: 'Articles published' }, { v: '20+', l: 'Cases observed' }],
  },
  {
    name: 'Durg Bhilai Flats', kind: 'Rental marketplace', type: 'web', url: 'https://durg-bhilai-flats.vercel.app', embed: true,
    desc: 'A zero-brokerage marketplace where owners list flats, PGs, rooms and flatmate spots for free, and tenants call or WhatsApp them directly. OTP-verified owners and a renting blog.',
    frame: '#F6C9A0', siteBg: '#FFFFFF', siteFg: '#0B1F3A', accent: '#0B1F3A', ctaFg: '#FFFFFF', domain: 'durg-bhilai-flats.vercel.app',
    tag: 'Naya shehar, apna ghar', head: 'Find your flat, PG, room or flatmate in Durg-Bhilai.', sub: 'Owners list for free. Tenants contact them directly.', cta: 'Find a place',
    tiles: [{ v: '₹0', l: 'Brokerage' }, { v: 'Free', l: 'Owner listings' }, { v: 'OTP', l: 'Verified owners' }],
  },
  {
    name: 'Mahi', kind: 'Video editor portfolio', type: 'web', url: 'https://mahi-portfolio-2.vercel.app', embed: true,
    desc: 'A portfolio for a new video editor, designed like an editing timeline, with a REC timecode intro, a toolkit section and a reel ready for first projects.',
    frame: '#E7B7B7', siteBg: '#111111', siteFg: '#F5F5F5', accent: '#FF3B3B', ctaFg: '#FFFFFF', domain: 'mahi-portfolio-2.vercel.app',
    tag: '● REC 00:00:01', head: 'Why should you hire me?', sub: 'A story-first video editor with a reel in progress and a hunger to get great.', cta: 'Hire me',
    tiles: [{ v: 'Premiere', l: 'Pro' }, { v: 'DaVinci', l: 'Resolve' }, { v: 'After', l: 'Effects' }],
  },
  {
    name: 'Budding Mariners', kind: 'Community + sales', type: 'social', note: 'Results on file',
    desc: 'A Telegram and WhatsApp community grown from 10k to 50k+ members in 4 months, and monthly revenue lifted from ₹40k to ₹3.10L with a 30-caller sales team.',
    frame: '#B7C8F2', accent: '#DCE6FF', initials: 'BM', handle: 'buddingmariners', channel: 'Telegram channel',
    head: 'Join 50k+ future mariners.', chipLabel: 'Members, 4 months', chip: '10k → 50k+',
  },
  {
    name: 'EnrollFlow', kind: 'Instagram + influencers', type: 'social', note: 'Ongoing campaign',
    desc: 'Three Instagram posts a week for a student and fee management app, approved in one weekly batch, plus outreach to 5 to 10 influencers every week.',
    frame: '#CFC6F5', accent: '#ECE7FF', initials: 'EF', handle: 'enrollflow', channel: 'Instagram',
    head: 'Every student. Every fee. One app.', chipLabel: 'Posting rhythm', chip: '3 posts / week',
  },
];

export type Plan = { name: string; for: string; price: string; per?: string; rec?: boolean; items: string[]; cta: string };
export const pricing: { label: string; service: Service; plans: Plan[] }[] = [
  { label: 'Website', service: 'Website Development', plans: [
    { name: 'Starter site', for: 'A one-page site or landing page to get you online.', price: 'From [₹X]', items: ['One page, mobile-friendly', 'WhatsApp and call buttons', 'Basic Google setup', 'Contact form'], cta: 'Build my website' },
    { name: 'Business website', for: 'A full site for a business that wants enquiries.', price: 'From [₹X]', rec: true, items: ['Up to [X] pages', 'SEO setup and share images', 'Blog or updates section', '[X] months of support included'], cta: 'Build my website' },
    { name: 'Online store or custom', for: 'Stores, booking systems, AI features and anything more complex.', price: 'Tailored quote', items: ['Products, payments or bookings', 'Admin panel for your team', 'Built around your process', 'Plan and quote after a call'], cta: 'Get a free consultation' },
  ] },
  { label: 'Marketing', service: 'Digital Marketing', plans: [
    { name: 'Social media', for: 'Consistent posting so people see you every week.', price: 'From [₹X]', per: '/ month', items: ['[X] posts a week', 'Content calendar you approve', 'Captions and designs', 'Monthly report'], cta: 'Grow my business' },
    { name: 'Ads + social', for: 'Paid ads plus content, aimed at real enquiries.', price: 'From [₹X]', per: '/ month', rec: true, items: ['Meta Ads setup and management', 'Everything in Social media', 'Cost per lead tracked', 'Ad budget paid separately'], cta: 'Grow my business' },
    { name: 'Full growth plan', for: 'SEO, ads, content and community together.', price: 'Tailored quote', items: ['SEO for your website', 'WhatsApp or Telegram community', 'Lead follow-up system', 'Plan and quote after a call'], cta: 'Get a free consultation' },
  ] },
  { label: 'IT Support', service: 'IT Support & Maintenance', plans: [
    { name: 'One-time fix', for: 'Something is broken and you need it working.', price: 'From [₹X]', items: ['Website errors fixed', 'Domain or email problems', 'Clear price before we start', 'Short note on what we did'], cta: 'Get technical support' },
    { name: 'Monthly care', for: 'Ongoing help so things keep running.', price: 'From [₹X]', per: '/ month', rec: true, items: ['Updates and backups', '[X] small changes a month', 'Help on WhatsApp in support hours', 'Monthly health check'], cta: 'Get technical support' },
    { name: 'Business support', for: 'For teams that rely on many tools every day.', price: 'Tailored quote', items: ['Website, email and tools', 'Setup for new team members', 'Agreed response times', 'Plan and quote after a call'], cta: 'Get a free consultation' },
  ] },
];

export const faqs = [
  { q: 'Do I have to take all three services?', a: 'No. Most clients start with one, like a new website or fixing a technical problem. If you later want marketing or ongoing support, the same team already knows your business.' },
  { q: 'What counts as IT support?', a: 'Website updates, fixes and backups, domain and hosting problems, business email setup, and help with the online tools your business uses. If you are not sure whether we can help, ask us on WhatsApp.' },
  { q: 'How long does a new website take?', a: 'A simple site usually takes [X] weeks. Bigger sites take longer. You get a timeline in your written plan before any work starts.' },
  { q: 'How will I know if the marketing is working?', a: 'We share simple reports with the numbers that matter: enquiries, cost per lead, followers or members, and sales where we can track them.' },
  { q: 'Is the consultation really free?', a: '[Confirm before publishing.] Yes. The first call is free and there is no obligation to work with us afterwards.' },
  { q: 'Where are you based?', a: 'We are in Raipur, Chhattisgarh. We meet local clients in person and work with businesses across India online, over WhatsApp, calls and video.' },
];

export const experience = [
  { org: 'Stamp2Fly', role: 'Marketing & Sales · Apr 2025 to Jan 2026', text: 'Built the B2B marketing framework and lined up sales with marketing.', strong: '20% revenue growth.' },
  { org: 'Budding Mariners', role: 'Marketing & Sales Head · Feb 2024 to Mar 2025', text: 'Grew the community from 10,000 to 50,000+ in 4 months and led 30 sales callers from ₹40,000 to ₹3,10,000 monthly revenue.', strong: '' },
  { org: 'The Jus Anima', role: 'Community Growth Manager · Mar to Aug 2025', text: 'Scaled a legal-education community from 1,500 to 6,000 members in 2 months.', strong: '' },
  { org: 'Voodaz', role: 'Marketing & Sales Head · Sep to Nov 2024', text: 'Ran Meta Ads that grew the Facebook page from 1,000 to 7,000+ followers.', strong: '' },
  { org: 'Cureable', role: 'Content Writer · Dec 2023 to Mar 2024', text: 'Wrote blogs, website copy and landing pages for awareness campaigns.', strong: '' },
];
