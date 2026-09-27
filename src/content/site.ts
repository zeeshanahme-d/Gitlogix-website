/**
 * All copy and structured content for the site lives here.
 *
 * PLACEHOLDER  = invented sample content, replace with real data before launch.
 * TODO(content) = drafted from the old site or public info, needs confirming.
 */
import type { StaticImageData } from "next/image";

import carelick from "@/assets/clients-mono/carelick.png";
import clairvoyanceTech from "@/assets/clients-mono/clairvoyance-tech.png";
import discover from "@/assets/clients-mono/discover.png";
import indianRda from "@/assets/clients-mono/indian-rda.png";
import instantGenie from "@/assets/clients-mono/instant-genie.png";
import ke from "@/assets/clients-mono/ke.png";
import mailtag from "@/assets/clients-mono/mailtag.png";
import mereos from "@/assets/clients-mono/mereos.png";
import myhiree from "@/assets/clients-mono/myhiree.png";
import portaire from "@/assets/clients-mono/portaire.png";
import smartMortgage from "@/assets/clients-mono/smart-mortgage.png";
import smartRepair from "@/assets/clients-mono/smart-repair.png";
import smartify from "@/assets/clients-mono/smartify.png";

import carelickColor from "@/assets/clients/carelick.png";
import clairvoyanceTechColor from "@/assets/clients/clairvoyance-tech.png";
import discoverColor from "@/assets/clients/discover.png";
import indianRdaColor from "@/assets/clients/indian-rda.png";
import instantGenieColor from "@/assets/clients/instant-genie.png";
import keColor from "@/assets/clients/ke.png";
import mailtagColor from "@/assets/clients/mailtag.png";
import mereosColor from "@/assets/clients/mereos.png";
import myhireeColor from "@/assets/clients/myhiree.png";
import portaireColor from "@/assets/clients/portaire.png";
import smartMortgageColor from "@/assets/clients/smart-mortgage.png";
import smartRepairColor from "@/assets/clients/smart-repair.png";
import smartifyColor from "@/assets/clients/smartify.png";

import type { IconId } from "@/components/ui/platform-icon";

export const company = {
  name: "Gitlogix",
  url: "https://www.gitlogix.com",
  description:
    "Gitlogix is a product engineering studio in Islamabad building browser extensions, web platforms, mobile apps and desktop software.",
  email: "support@gitlogix.com",
  phone: { display: "+92 316 5558960", href: "tel:+923165558960" },
  whatsapp: "https://wa.me/923165558960",
  address: {
    lines: ["Office 4, 3rd Floor, Al-Anayat Mall", "G-11 Markaz, Islamabad", "Pakistan"],
    street: "Office 4, 3rd Floor, Al-Anayat Mall, G-11 Markaz",
    locality: "Islamabad",
    country: "PK",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Al-Anayat+Mall+G-11+Markaz+Islamabad",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/gitlogix",
    facebook: "https://www.facebook.com/gitlogix",
    x: "https://twitter.com/gitlogix",
    instagram: "https://www.instagram.com/gitlogix",
    youtube: "https://www.youtube.com/channel/UCqimuD18giJ69dVrABtAsRg",
  },
} as const;

export const primaryCta = { label: "Start a project", href: "/contact" } as const;

export const mainNav = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Stack", href: "/#stack" },
  { label: "About", href: "/about" },
] as const;

export const hero = {
  // TODO(content): keep the status line current, or remove it.
  status: "Booking new projects for 2026",
  title: "We design & build software that scales.",
  lead: "Browser extensions, web platforms and mobile apps for startups and growing businesses. Planned, built and maintained by one senior team.",
  proof: [
    { value: "5+", label: "years shipping" },
    { value: "20+", label: "products live" },
    { value: "12+", label: "happy clients" },
  ],
};

/** The "What we build" index beside the hero headline. */
export const heroPlatforms: { name: string; detail: string; icons: IconId[] }[] = [
  { name: "Browser extensions", detail: "Chrome, Firefox, Safari and Edge", icons: ["chrome", "firefox", "safari"] },
  { name: "Web platforms", detail: "SaaS, portals and dashboards", icons: ["react", "nextjs", "node", "django"] },
  { name: "Mobile apps", detail: "iOS and Android", icons: ["apple", "android", "flutter"] },
  { name: "Desktop software", detail: "Windows, macOS and Linux", icons: ["windows", "apple", "linux"] },
];

export type ServiceId = "extensions" | "web" | "mobile" | "desktop" | "design" | "support";

export type Service = {
  id: ServiceId;
  name: string;
  summary: string;
  points: string[];
};

// TODO(content): service copy drafted from the old site's service list.
export const services: Service[] = [
  {
    id: "extensions",
    name: "Browser extensions",
    summary:
      "Chrome, Firefox, Safari and Edge extensions that live inside the tools your customers already use, from store listing to every browser update.",
    points: ["Manifest V3 migrations", "Gmail and SaaS integrations", "Store review and releases"],
  },
  {
    id: "web",
    name: "Web platforms",
    summary: "SaaS products, portals and dashboards on React, Next.js and Django, backed by clean, documented APIs.",
    points: ["SaaS and portals", "Admin dashboards", "REST and GraphQL APIs"],
  },
  {
    id: "mobile",
    name: "Mobile apps",
    summary: "iOS and Android apps that share one backend with your web product.",
    points: ["React Native and Flutter", "App Store and Play releases"],
  },
  {
    id: "desktop",
    name: "Desktop software",
    summary: "Windows, macOS and Linux apps for work that runs on the machine, like point of sale.",
    points: ["Electron and native", "Offline-first sync"],
  },
  {
    id: "design",
    name: "Product design",
    summary: "Research, wireframes and clickable prototypes before a line of code is written.",
    points: ["UX research", "Design systems"],
  },
  {
    id: "support",
    name: "Maintenance & support",
    summary:
      "We stay after launch: monitoring, updates, store resubmissions and new features on a plan that fits your roadmap.",
    points: ["Monitoring and uptime", "Monthly releases", "Priority fixes"],
  },
];

export type Client = { name: string; logo: StaticImageData; logoColor: StaticImageData; scale?: number };

/**
 * `logo` is the single-colour version (generated from the original, tinted grey in CSS);
 * `logoColor` is the original, shown on hover. The two files must have the same dimensions.
 * `scale` balances optical size.
 */
export const clients: Client[] = [
  { name: "Mailtag", logo: mailtag, logoColor: mailtagColor, scale: 0.72 },
  { name: "Mereos", logo: mereos, logoColor: mereosColor, scale: 1.05 },
  { name: "Portaire", logo: portaire, logoColor: portaireColor, scale: 0.78 },
  { name: "Instant Genie", logo: instantGenie, logoColor: instantGenieColor, scale: 0.78 },
  { name: "CareLick", logo: carelick, logoColor: carelickColor, scale: 0.95 },
  { name: "Clairvoyance Tech", logo: clairvoyanceTech, logoColor: clairvoyanceTechColor, scale: 1.9 },
  { name: "IndianRDA", logo: indianRda, logoColor: indianRdaColor, scale: 1.15 },
  { name: "Myhiree", logo: myhiree, logoColor: myhireeColor, scale: 1.8 },
  { name: "Smart Repair", logo: smartRepair, logoColor: smartRepairColor, scale: 1.15 },
  { name: "Smart Mortgage", logo: smartMortgage, logoColor: smartMortgageColor, scale: 1.15 },
  { name: "Discover", logo: discover, logoColor: discoverColor, scale: 0.72 },
  { name: "KE", logo: ke, logoColor: keColor, scale: 1.45 },
  { name: "Smartify", logo: smartify, logoColor: smartifyColor, scale: 1.45 },
];

export type Project = {
  client: string;
  /** Full-colour logo shown on the generated cover. */
  logo: StaticImageData;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  /** Accent colour for the generated cover. */
  accent: string;
  /** Public product URL, if there is one to link to. */
  url?: string;
  /** Real screenshot (16:10). Replaces the generated cover when set. */
  image?: StaticImageData;
};

export const projects: Project[] = [
  // TODO(content): confirm scope. mereos.eu and indianrda.com were live when written.
  {
    client: "Mereos",
    logo: mereosColor,
    title: "Secure online assessments",
    summary: "Browser extension and lockdown browser that keep candidates inside the exam on any LMS.",
    category: "Browser extension",
    tags: ["Chrome", "Firefox", "EdTech"],
    accent: "#FFC83D",
    url: "https://www.mereos.eu",
  },
  {
    client: "IndianRDA",
    logo: indianRdaColor,
    title: "One home for India's resident doctors",
    summary: "A web platform bringing resident doctors' associations from across India into one place.",
    category: "Web platform",
    tags: ["React", "Django", "Healthcare"],
    accent: "#3AA7B5",
    url: "https://www.indianrda.com",
  },
  // PLACEHOLDER: the four projects below are sample content. Replace with real case studies.
  {
    client: "Mailtag",
    logo: mailtagColor,
    title: "Email tracking inside Gmail",
    summary: "A Chrome extension that shows when emails are opened and links are clicked, right in the inbox.",
    category: "Chrome extension",
    tags: ["Gmail", "Node.js", "SaaS"],
    accent: "#2D9CDB",
  },
  {
    client: "Instant Genie",
    logo: instantGenieColor,
    title: "An assistant one click away",
    summary: "Productivity extension and web dashboard that answers questions on any page you are reading.",
    category: "Extension + web app",
    tags: ["TypeScript", "Next.js", "AI"],
    accent: "#E5484D",
  },
  {
    client: "Smart Repair",
    logo: smartRepairColor,
    title: "Repairs booked in under a minute",
    summary: "Customer app and technician dashboard for booking, tracking and paying for device repairs.",
    category: "Mobile app",
    tags: ["React Native", "Firebase", "Services"],
    accent: "#22B8CF",
  },
  {
    client: "Portaire",
    logo: portaireColor,
    title: "A calmer property portal",
    summary: "Listings, viewings and tenant messaging for property managers, on web and mobile.",
    category: "Web platform",
    tags: ["Next.js", "PostgreSQL", "Real estate"],
    accent: "#A8A29E",
  },
];

export type Step = { name: string; summary: string; deliverables: string[] };

// TODO(content): confirm deliverables match how projects are really run.
export const process: Step[] = [
  {
    name: "Discover",
    summary: "We agree on goals, users and scope, then turn them into a written plan with milestones and a clear price.",
    deliverables: ["Scope document", "Milestone plan", "Fixed estimate"],
  },
  {
    name: "Design",
    summary: "Wireframes and clickable prototypes let you try the product and change direction before development starts.",
    deliverables: ["Wireframes", "Clickable prototype", "Design system"],
  },
  {
    name: "Build",
    summary: "Short cycles, tested as we go. You get a staging link from week one and see progress every week.",
    deliverables: ["Weekly builds", "Staging environment", "Test reports"],
  },
  {
    name: "Launch & grow",
    summary: "We deploy, publish to app and extension stores, monitor everything and keep shipping improvements.",
    deliverables: ["Store releases", "Monitoring", "Support plan"],
  },
];

export type TechCategory = { id: string; label: string; items: { id: IconId; name: string }[] };

// TODO(content): the old site listed JavaScript, React, Node.js, Django, Java, PHP, HTML and CSS.
// Everything else here is PLACEHOLDER; remove what the team does not use.
export const techStack: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { id: "react", name: "React" },
      { id: "nextjs", name: "Next.js" },
      { id: "typescript", name: "TypeScript" },
      { id: "javascript", name: "JavaScript" },
      { id: "vue", name: "Vue" },
      { id: "tailwind", name: "Tailwind CSS" },
      { id: "html", name: "HTML" },
      { id: "css", name: "CSS" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { id: "node", name: "Node.js" },
      { id: "django", name: "Django" },
      { id: "python", name: "Python" },
      { id: "nestjs", name: "NestJS" },
      { id: "express", name: "Express" },
      { id: "php", name: "PHP" },
      { id: "laravel", name: "Laravel" },
      { id: "java", name: "Java" },
      { id: "graphql", name: "GraphQL" },
    ],
  },
  {
    id: "extensions",
    label: "Extensions",
    items: [
      { id: "chrome", name: "Chrome" },
      { id: "firefox", name: "Firefox" },
      { id: "safari", name: "Safari" },
      { id: "brave", name: "Brave" },
      { id: "typescript", name: "Manifest V3" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile & desktop",
    items: [
      { id: "react", name: "React Native" },
      { id: "flutter", name: "Flutter" },
      { id: "swift", name: "Swift" },
      { id: "kotlin", name: "Kotlin" },
      { id: "android", name: "Android" },
      { id: "apple", name: "iOS & macOS" },
      { id: "electron", name: "Electron" },
      { id: "tauri", name: "Tauri" },
      { id: "windows", name: "Windows" },
    ],
  },
  {
    id: "data",
    label: "Data & cloud",
    items: [
      { id: "postgresql", name: "PostgreSQL" },
      { id: "mysql", name: "MySQL" },
      { id: "mongodb", name: "MongoDB" },
      { id: "redis", name: "Redis" },
      { id: "firebase", name: "Firebase" },
      { id: "supabase", name: "Supabase" },
      { id: "docker", name: "Docker" },
      { id: "googlecloud", name: "Google Cloud" },
      { id: "cloudflare", name: "Cloudflare" },
      { id: "githubactions", name: "GitHub Actions" },
    ],
  },
];

// TODO(content): "locations served" was "service locations" on the old site.
export const facts = [
  { value: 5, suffix: "+", label: "Years building software" },
  { value: 20, suffix: "+", label: "Products in production" },
  { value: 12, suffix: "+", label: "Long-term clients" },
  { value: 8, suffix: "+", label: "Locations served" },
];

export type Industry = { id: string; name: string; summary: string; examples: string[] };

// TODO(content): the first four industries come from the old site; the examples are drafts.
export const industries: Industry[] = [
  {
    id: "education",
    name: "Education",
    summary: "Learning platforms, online exams and school administration.",
    examples: ["Exam proctoring extensions", "Learning platforms and LMS plugins", "School administration"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    summary: "Appointments, records and doctor communities.",
    examples: ["Doctor and member communities", "Appointment booking", "Clinic dashboards"],
  },
  {
    id: "ecommerce",
    name: "Ecommerce",
    summary: "Storefronts, order management and seller tools.",
    examples: ["Storefronts and checkout", "Order and stock management", "Seller browser tools"],
  },
  {
    id: "retail",
    name: "Retail & POS",
    summary: "Checkout, inventory and billing that work offline.",
    examples: ["Point of sale for Windows", "Offline-first inventory", "Billing and receipts"],
  },
  // PLACEHOLDER: the two industries below were added as samples. Keep, edit or remove.
  {
    id: "saas",
    name: "SaaS & productivity",
    summary: "Subscription products and the extensions that sit beside them.",
    examples: ["Gmail and CRM extensions", "Subscription web apps", "Team dashboards"],
  },
  {
    id: "property",
    name: "Property & finance",
    summary: "Portals and tools for agents, lenders and their clients.",
    examples: ["Listings and viewings", "Mortgage calculators and lead forms", "Tenant and client portals"],
  },
];

// PLACEHOLDER: sample testimonials. Replace with real, approved client quotes before launch.
export const testimonials = [
  {
    quote:
      "They shipped our Chrome extension in six weeks and handled every store review. It felt like having a senior team in-house.",
    name: "Sample Client",
    role: "Founder, EdTech startup",
  },
  {
    quote:
      "Clear estimates, weekly builds and no surprises. Our web platform launched on the date they gave us on day one.",
    name: "Sample Client",
    role: "Product Lead, Healthcare platform",
  },
  {
    quote:
      "Two years in, they still maintain our apps. Browser updates that used to break things are now a non-event.",
    name: "Sample Client",
    role: "CTO, SaaS company",
  },
];

// TODO(content): answers describe how Gitlogix works; confirm each one.
export const faqs = [
  {
    question: "How much does a project cost?",
    answer:
      "It depends on scope. After a short call we send a written proposal with the cost of each milestone, so you know the price before any work starts.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A browser extension or a focused internal tool usually takes a few weeks. Larger web and mobile products take a few months. Your proposal includes a date for each milestone.",
  },
  {
    question: "Who owns the code?",
    answer: "You do. Source code, store accounts and documentation are handed over to you, and nothing is locked to Gitlogix.",
  },
  {
    question: "Can you take over an existing project?",
    answer:
      "Yes. We start with a short review of the code, then tell you what we would keep, fix or rebuild before you commit to anything.",
  },
  {
    question: "Do you work with clients outside Pakistan?",
    answer: "Yes. Most of our work happens remotely, with regular calls, shared builds and written updates.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We stay on for updates, fixes and store resubmissions when browsers or operating systems change, under a maintenance plan that suits your release schedule.",
  },
];

export type TeamMember = { name: string; role: string; image?: StaticImageData };

// PLACEHOLDER: replace with the real team. Add a portrait photo (4:5) as `image` to replace the grey tile.
export const team: TeamMember[] = [
  { name: "Team member", role: "Founder & CEO" },
  { name: "Team member", role: "Head of Engineering" },
  { name: "Team member", role: "Product Designer" },
  { name: "Team member", role: "Project Manager" },
  { name: "Team member", role: "Frontend Engineer" },
  { name: "Team member", role: "Backend Engineer" },
  { name: "Team member", role: "Mobile Engineer" },
  { name: "Team member", role: "Extension Engineer" },
];

// TODO(content): about page story and principles are drafts.
export const about = {
  title: "A product studio built on long-term partnerships",
  lead: "Gitlogix plans, designs, builds and maintains software for companies that need a dependable engineering team, from a single browser extension to a complete platform.",
  story: [
    "We started Gitlogix to build software we would be happy to maintain ourselves: readable code, honest estimates and products that keep working long after launch.",
    "In more than five years we have shipped over twenty products for clients in education, ecommerce, retail and healthcare. Many of those clients still work with us today.",
  ],
  principles: [
    { name: "One team, start to finish", summary: "The people who scope your project are the people who build it." },
    { name: "Working software early", summary: "You test real builds every week, not just a demo at the end." },
    { name: "You own everything", summary: "Source code, accounts and documentation are yours from day one." },
    { name: "We stay after launch", summary: "Maintenance and updates are part of the plan, not an afterthought." },
  ],
  careers: {
    title: "Build with us",
    summary:
      "We are always glad to hear from developers and designers who care about shipping good software. Send your CV and a few links to your work.",
    // TODO(content): confirm the address for job applications.
    href: "mailto:support@gitlogix.com?subject=Job%20application",
    label: "Email your CV",
  },
};

export const contactPage = {
  title: "Let's build something great",
  lead: "Tell us what you want to build. We read every message and reply by email to arrange a call.",
  // TODO(content): confirm this matches the real sales process.
  nextSteps: [
    { name: "We reply by email", summary: "We read your message and follow up with any questions." },
    { name: "Discovery call", summary: "We talk through goals, scope and timing." },
    { name: "Written proposal", summary: "You receive a plan with milestones, timeline and cost." },
  ],
  projectTypes: [
    "Browser extension",
    "Web platform",
    "Mobile app",
    "Desktop software",
    "Product design",
    "Not sure yet",
  ],
};
