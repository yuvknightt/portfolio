// Single source of truth for every piece of real content on the site.
// Everything here is grounded in the actual resume + real profile links —
// nothing invented. Update this file and the whole site updates with it.

export const SITE_LINKS = {
  name: "Yuvraj Singh",
  email: "ys2554374@gmail.com",
  linkedin: "https://www.linkedin.com/in/yuvraj-singh-81bba620a/",
  github: "https://github.com/yuvknightt",
  leetcode: "https://leetcode.com/u/decoder_22/",
  hackerrank: "https://www.hackerrank.com/profile/decoder_22",
  resume: "/resume.pdf",
};

export interface MetricItem {
  status: string;
  label: string;
  prefix?: string;
  value: number;
  suffix?: string;
  desc: string;
  accentClass: string;
}

export interface ExperienceLog {
  company: string;
  role: string;
  duration: string;
  summary: string;
  highlights: string[];
  tech: string[];
  link?: { label: string; href: string };
}

export interface JourneyEntry {
  period: string;
  place: string;
  body: string;
}

export interface SystemProject {
  slug: string;
  title: string;
  tag: string; // e.g. "Proof of Concept", "Production", "Open Source"
  tagline: string;
  architectureType: string;
  liveUrl?: string;
  githubUrl?: string;
  techStack: string[];
  // Freeform list of callouts — add 1-5 of whatever's actually interesting
  // about a given project. No fixed schema, so a new project never needs
  // a new interface field or component change.
  highlights: { label: string; body: string }[];
}

export interface TechCategory {
  category: string;
  tools: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface FieldNote {
  title: string;
  desc: string;
  href: string;
  tag: string;
}

// ---------------------------------------------------------------------------
// Metrics — real numbers pulled straight from the resume.
// ---------------------------------------------------------------------------
export const SYSTEM_METRICS: MetricItem[] = [
  {
    status: "Production",
    label: "System throughput",
    value: 1000,
    suffix: " TPS",
    desc: "CloudWatch-alarmed and load-tested ingestion workflows sustaining sharp concurrent traffic spikes at Amazon.",
    accentClass: "text-[#3D5FE0]",
  },
  {
    status: "Optimized",
    label: "Scaling headroom gained",
    prefix: "+",
    value: 40,
    suffix: "%",
    desc: "Alongside a 15% cost cut, migrating Rupyy's compute off AWS Lambda onto ECS Fargate.",
    accentClass: "text-emerald-600",
  },
  {
    status: "Protected",
    label: "Merchandise secured",
    prefix: "$",
    value: 5,
    suffix: "B+",
    desc: "Across 59K+ active sellers, via document ingestion and validation pipelines built at Amazon.",
    accentClass: "text-[#3D5FE0]",
  },
  {
    status: "Reduced",
    label: "Database load cut",
    prefix: "-",
    value: 60,
    suffix: "%",
    desc: "MongoDB read/write pressure reduced at Rupyy through targeted caching across client app layers.",
    accentClass: "text-emerald-600",
  },
];

// ---------------------------------------------------------------------------
// Journey — the real, chronological story: NIT Jaipur -> Rupyy -> Amazon.
// Written in first person. Safe to extend with more personal specifics
// (a mentor, a project, a failure) whenever you want — nothing here is
// invented, so nothing needs to be walked back later.
// ---------------------------------------------------------------------------
export const JOURNEY: JourneyEntry[] = [
  {
    period: "Nov 2020 — May 2024",
    place: "B.Tech, Malaviya National Institute of Technology, Jaipur",
    body: "Four years spent mostly proving to myself I could reason through a system before I could name it. Data structures, operating systems, DBMS — the unglamorous coursework that turns out to matter most once you're the one paged at 2 a.m. for it.",
  },
  {
    period: "Aug 2024 — May 2025",
    place: "Software Developer, Rupyy — CarDekho Group",
    body: "First job, straight into fintech. Wired Digilocker and CIBIL into the backend, shipped the loan and refinancing journeys for 150K+ users, and got a fast education in what \"production\" means once real money is moving through it. Migrated us off Lambda onto ECS Fargate along the way — 40% more scaling room, 15% less spend, 60% less MongoDB load.",
  },
  {
    period: "June 2025 — Present",
    place: "Software Development Engineer, Amazon Development Centre",
    body: "Now on the other side of scale. I own the compliance workflows protecting $5B+ of seller merchandise, and the pagination logic behind a feature touching roughly 15% of inbound fulfillment volume. The systems got bigger, the margin for error got smaller — exactly the trade I was looking for.",
  },
  {
    period: "Ongoing",
    place: "Building outside of work",
    body: "Vyapaar House started as a way to own a system end-to-end — my architecture decisions, my trade-offs, no ticket queue. It's usually where I learn the most, precisely because there's no one else to hand the hard part to.",
  },
];

// ---------------------------------------------------------------------------
// Experience — most recent first, matching the resume.
// ---------------------------------------------------------------------------
export const ENGINEERING_LOGS: ExperienceLog[] = [
  {
    company: "Amazon Development Centre",
    role: "Software Development Engineer",
    duration: "June 2025 — Present",
    summary:
      "Owning compliance-critical infrastructure inside Amazon's seller ecosystem — the systems that decide whether a document, a payment, or a listing is allowed to go live.",
    highlights: [
      "Rebuilt pagination for a high-traffic fulfillment API to support a new logistics placement feature, shipping it backward-compatible with zero-downtime deployment across multi-region services — expanded eligibility to ~15% of inbound volume, adding +250 bps conversion and contributing to $21M+ in projected savings.",
      "Owned the enforcement workflow inside a seller-facing portal: document storage, strict file validation (PDF-only, 10MB limit), and CloudWatch alarms load-tested to 1,000 TPS — protecting $5B+ in merchandise across 59K+ sellers under compliance risk.",
      "Designed and built the CRUD APIs behind a centralized artifact repository — contract design, presigned URL generation, cross-account DNS migration, auth onboarding for containerized services — now serving 850K+ documents across 50+ compliance use cases at a 99.9% availability target.",
    ],
    tech: ["Java", "AWS", "Distributed Systems", "Microservices"],
    link: { label: "View on LinkedIn", href: SITE_LINKS.linkedin },
  },
  {
    company: "Rupyy — CarDekho Group",
    role: "Software Developer",
    duration: "Aug 2024 — May 2025",
    summary:
      "Building fault-tolerant backend infrastructure for a fintech product — where a slow rollback or an unhandled edge case shows up directly in someone's loan.",
    highlights: [
      "Designed and built backend APIs in Node.js and Express, integrating Digilocker and CIBIL for identity and credit verification.",
      "Built the user-facing loan and refinancing journeys, supporting 150K+ active users.",
      "Led the migration off AWS Lambda onto ECS Fargate — a 40% gain in scaling capacity and a 15% cut in overhead.",
      "Cut MongoDB load by 60% by rethinking what got cached, and when.",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "AWS"],
  },
];

// ---------------------------------------------------------------------------
// Projects — Vyapaar House is a proof of concept: a way to prove I can take
// a system from empty repo to production alone, not a company product.
//
// To add another project later: copy this object, change the fields,
// paste it into the array. Projects.tsx renders whatever's here with zero
// per-project code — no new component work required, ever.
// ---------------------------------------------------------------------------
export const SYSTEM_PROJECTS: SystemProject[] = [
  {
    slug: "vyapaar-house",
    title: "Vyapaar House",
    tag: "Proof of Concept",
    tagline: "A decoupled, full-stack Indian textile marketplace",
    architectureType: "Microservices + event-driven backend",
    liveUrl: "https://vyapaar-house.vercel.app",
    githubUrl: "https://github.com/yuvknightt/vyapaar-house",
    techStack: [
      "Spring Boot",
      "RabbitMQ",
      "Docker",
      "React 18",
      "PostgreSQL",
      "Supabase",
      "Redis",
      "Razorpay",
    ],
    highlights: [
      {
        label: "Messaging",
        body: "Three decoupled Spring Boot services — Order, Stock, Email — communicate through a RabbitMQ topic exchange, so a single payment triggers asynchronous stock deduction and a confirmation email with zero inter-service coupling.",
      },
      {
        label: "Rate limiting",
        body: "Dual rate limiting: a Token Bucket backed by Vercel KV (Redis) throttles the AI shopping endpoints, while a Sliding Window over a ConcurrentHashMap protects the order service — both enforced per-IP and per-user.",
      },
      {
        label: "Infrastructure",
        body: "Full-text search across Hindi and English listings via a PostgreSQL tsvector GIN index, Google OAuth and Razorpay for checkout, and a Claude-powered shopping agent (Vercel Edge Functions) that handles product discovery and cart management in natural Hindi/English conversation.",
      },
    ],
  },
  // Next project goes here — same shape, no other file needs to change.
];

export const TECH_MATRIX: TechCategory[] = [
  { category: "Languages", tools: ["Java", "JavaScript", "C++"] },
  { category: "Frameworks & Libraries", tools: ["Spring Boot", "React.js", "Node.js", "Express.js"] },
  { category: "Databases & Caching", tools: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "DynamoDB", "Supabase"] },
  {
    category: "Cloud & Infrastructure",
    tools: ["AWS (EC2, ECS Fargate, Lambda, S3, SQS, SNS, CloudWatch, IAM, API Gateway)", "Docker", "CI/CD"],
  },
  { category: "Messaging & Events", tools: ["RabbitMQ", "SQS", "SNS", "Event-Driven Architecture"] },
  { category: "Auth & Payments", tools: ["JWT", "OAuth 2.0", "Supabase Auth", "Razorpay"] },
];

// ---------------------------------------------------------------------------
// Testimonials — intentionally empty. No fabricated quotes.
// Add real entries here (manager/teammate, 1-3 sentences) and the
// Testimonials section will render automatically.
// ---------------------------------------------------------------------------
export const TESTIMONIALS: Testimonial[] = [];

// ---------------------------------------------------------------------------
// Field Notes — replaces the old "Digital Diary" placeholder, which
// previously contained blog titles copied from someone else's site.
// These are real, verifiable links until actual writing exists.
// ---------------------------------------------------------------------------
export const FIELD_NOTES: FieldNote[] = [
  {
    tag: "Building",
    title: "What I'm shipping right now",
    desc: "Vyapaar House and whatever's next — recent commits, real code, no filler.",
    href: SITE_LINKS.github,
  },
  {
    tag: "Problem solving",
    title: "How I think through problems",
    desc: "DSA practice and contest history on LeetCode.",
    href: SITE_LINKS.leetcode,
  },
  {
    tag: "Verified skill",
    title: "6★ in DSA, 5★ in C++",
    desc: "HackerRank-verified skill certifications.",
    href: SITE_LINKS.hackerrank,
  },
];
