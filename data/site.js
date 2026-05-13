export const site = {
  name: "Alex Rivera",
  title: "Full Stack Developer",
  tagline:
    "I craft calm, fast web interfaces and dependable APIs—focused on clarity, accessibility, and maintainable systems.",
  email: "hello@alexrivera.dev",
  phone: "+1 (555) 010-2048",
  whatsapp: "+15550102048",
  location: "Remote · UTC−5",
  resumeUrl:
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  profileImage: {
    src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80",
    alt: "Professional headshot of Alex Rivera",
  },
  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    mail: "mailto:hello@alexrivera.dev",
  },
};

export const about = {
  intro:
    "I am a product-minded engineer who enjoys turning ambiguous problems into simple, resilient software.",
  journey:
    "I started with curiosity about how websites worked, then deepened into JavaScript ecosystems, APIs, and cloud-ready deployments.",
  passion:
    "I care about inclusive UX, performance budgets, and codebases that teammates can onboard to without friction.",
  preferredWork:
    "I thrive on design-led product teams, greenfield MVPs, and modernization work where testing and observability matter.",
  goals:
    "Short term: deepen distributed systems intuition. Long term: lead technical initiatives that balance speed with quality.",
  hobbies:
    "Outside of code: trail running, film photography, and occasional espresso experiments.",
};

export const skills = {
  categories: [
    {
      name: "Frontend",
      items: [
        { name: "HTML", level: 92, icon: "html5/html5-original.svg" },
        { name: "CSS", level: 90, icon: "css3/css3-original.svg" },
        { name: "JavaScript", level: 93, icon: "javascript/javascript-original.svg" },
        { name: "React", level: 90, icon: "react/react-original.svg" },
        { name: "Next.js", level: 88, icon: "nextjs/nextjs-original.svg" },
        { name: "Tailwind CSS", level: 91, icon: "tailwindcss/tailwindcss-original.svg" },
        { name: "Hero UI", level: 82, icon: "react/react-original.svg" },
        { name: "DaisyUI", level: 80, icon: "tailwindcss/tailwindcss-original.svg" },
      ],
    },
    {
      name: "Backend",
      items: [
        { name: "Node.js", level: 88, icon: "nodejs/nodejs-original.svg" },
        { name: "Express.js", level: 84, icon: "express/express-original.svg" },
      ],
    },
    {
      name: "Database",
      items: [
        { name: "MongoDB", level: 82, icon: "mongodb/mongodb-original.svg" },
        { name: "Firebase", level: 78, icon: "firebase/firebase-plain.svg" },
      ],
    },
    {
      name: "Tools",
      items: [
        { name: "Git", level: 90, icon: "git/git-original.svg" },
        { name: "GitHub", level: 92, icon: "github/github-original.svg" },
      ],
    },
  ],
};

export const education = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "State University",
    session: "2019 — 2023",
    result: "CGPA: 3.72 / 4.00",
    highlights: ["Dean's List", "ACM Programming Contest — regional finalist"],
  },
];

export const experience = {
  hasExperience: true,
  roles: [
    {
      company: "Northwind Labs",
      role: "Software Engineer Intern",
      duration: "Jun 2023 — Aug 2023",
      summary:
        "Shipped customer-facing analytics views and hardened API error handling for a B2B SaaS dashboard.",
      responsibilities: [
        "Implemented responsive data tables with virtualization for large datasets.",
        "Collaborated with design on accessible form patterns and focus management.",
        "Wrote integration tests around critical billing flows.",
      ],
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Jest"],
    },
    {
      company: "Freelance",
      role: "Full Stack Developer",
      duration: "2022 — Present",
      summary:
        "Partnered with small teams to launch marketing sites and lightweight admin tools.",
      responsibilities: [
        "Owned deployments on Vercel with preview environments per PR.",
        "Introduced component-driven workflows using Storybook.",
      ],
      technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Stripe"],
    },
  ],
};

export const projects = [
  {
    slug: "atlas-analytics",
    title: "Atlas Analytics",
    shortDescription:
      "A calm analytics workspace for founders—cohorts, funnels, and exports without clutter.",
    description:
      "Atlas is a focused analytics experience for early-stage teams who need trustworthy numbers without enterprise bloat.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    tech: ["Next.js", "Tailwind CSS", "Hero UI", "Framer Motion", "Node.js"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/",
    features: [
      "Saved views with shareable links",
      "Keyboard-first navigation across tables",
      "CSV exports with streaming for large datasets",
    ],
    challenges: [
      "Balancing chart performance with SSR constraints on cold starts.",
      "Designing resilient empty states that still feel premium.",
    ],
    future: [
      "Team workspaces with fine-grained permissions",
      "Embeddable widgets for marketing sites",
    ],
  },
  {
    slug: "ledger-lite",
    title: "Ledger Lite",
    shortDescription:
      "Minimal invoicing for independent consultants—PDFs, reminders, and status at a glance.",
    description:
      "Ledger Lite helps solo consultants stay organized with a deliberately small feature set and crisp workflows.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    tech: ["React", "Express.js", "MongoDB", "DaisyUI", "Firebase"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/",
    features: [
      "Recurring invoices with gentle email reminders",
      "Client portal for approvals",
      "Local-first drafts with optimistic UI",
    ],
    challenges: [
      "Designing PDF templates that remain legible in grayscale printing.",
      "Handling partial offline usage without duplicating payments.",
    ],
    future: [
      "Native mobile companion for on-the-go approvals",
      "Multi-currency support with transparent FX notes",
    ],
  },
  {
    slug: "pulse-docs",
    title: "Pulse Docs",
    shortDescription:
      "Documentation that feels like a product—search, versioning, and tasteful motion.",
    description:
      "Pulse Docs is a static-first documentation site generator with interactive examples and a polished reading mode.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80",
    tech: ["Next.js", "MDX", "Tailwind CSS", "Framer Motion", "GitHub Actions"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/",
    features: [
      "Full-text search with instant previews",
      "Version switcher aligned with Git tags",
      "Accessible code blocks with copy affordances",
    ],
    challenges: [
      "Keeping build times predictable as content grew.",
      "Ensuring WCAG-compliant contrast across user-provided themes.",
    ],
    future: [
      "AI-assisted summaries with human review checkpoints",
      "Community templates marketplace",
    ],
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export const deviconBase =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
