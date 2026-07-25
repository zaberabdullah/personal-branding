export const site = {
  name: "Zaber Abdullah",
  title: "Full Stack Developer",
  tagline:
   "I build AI-driven, full-stack web platforms with Next.js & MERN — focused on performance, real-world problems, and clean UX.",
  email: "zaberabdullah120@gmail.com",
  phone: "01521251408",
  whatsapp: "01934888324",
  location: "Khulna, Bangladesh",
  resumeUrl: "https://drive.google.com/file/d/10lm1VihZNvnqosEHZxxIX3Qbl67egj1K/view?usp=sharing",
  profileImage: {
    src: "/images/picture.png",
    alt: "Picture of a legend:)",
  },
  socials: {
    github: "https://github.com/zaberabdullah",
    linkedin: "https://www.linkedin.com/in/zaber-abdullah/",
    facebook: "https://www.facebook.com/zaber.abdullah.12/",
    mail: "mailto:zaberabdullah120@gmail.com",
  },
};

export const about = {
  intro:
    "I am an aspiring Full Stack Developer and a dedicated learner, currently mastering the MERN stack. I am passionate about building clean web interfaces and exploring how to solve real-world problems through code.",
  journey:
    "I started my journey into web development with a curiosity about how modern applications are built. Since then, I've been diving deep into the JavaScript ecosystem, building projects like an e-commerce platform and a GitHub tracker, while continuously learning to create more efficient and user-friendly web experiences.",
  passion:
    "I care about building inclusive web experiences and clean codebases that are easy to maintain and scale as I grow my skills.",
  preferredWork:
    "I thrive in learning-focused environments, working on greenfield projects, and exploring modern frameworks like Next.js to solve real-world problems.",
  goals:
    "Short term: Master the MERN stack and land my first professional role. Long term: Become a Lead Developer contributing to impactful open-source software.",
  hobbies:
    "Outside of code: I am a social person who loves connecting with people. I’m passionate about playing badminton and traveling across Bangladesh. I have explored many iconic places including Bandarban, Saint Martin, and many more.",
};

export const skills = {
  categories: [
    {
      name: "Frontend",
      items: [
        { name: "Next.js", level: 55, icon: "nextjs/nextjs-original.svg" },
        { name: "React", level: 60, icon: "react/react-original.svg" },
        { name: "JavaScript", level: 60, icon: "javascript/javascript-original.svg" },
        { name: "TypeScript", level: 55, icon: "typescript/typescript-original.svg" },
        { name: "Tailwind CSS", level: 90, icon: "tailwindcss/tailwindcss-original.svg" },
        { name: "DaisyUI", level: 90, icon: "tailwindcss/tailwindcss-original.svg" },
        { name: "Hero UI", level: 85, icon: "react/react-original.svg" },
        { name: "HTML", level: 85, icon: "html5/html5-original.svg" },
        { name: "CSS", level: 85, icon: "css3/css3-original.svg" },
      ],
    },
    {
      name: "Backend",
      items: [
        { name: "Node.js", level: 55, icon: "nodejs/nodejs-original.svg" },
        { name: "Express.js", level: 50, icon: "express/express-original.svg" },
      ],
    },
    {
      name: "Database",
      items: [{ name: "MongoDB", level: 50, icon: "mongodb/mongodb-original.svg" }],
    },
    {
      name: "Tools",
      items: [{ name: "GitHub", level: 60, icon: "github/github-original.svg" }],
    },
  ],
};

export const education = [
  {
    degree: "MBA in Tourism and Hospitality Management",
    institution: "Gopalganj Science and Technology University",
    session: "2024 – Present",
    result: "Ongoing",
    highlights: [
      "Continuing advanced studies in tourism management",
      "Balancing postgraduate studies with professional development in tech",
    ],
  },
  {
    degree: "BBA in Tourism and Hospitality Management",
    institution: "Gopalganj Science and Technology University",
    session: "2020 — 2024",
    result: "CGPA: 3.34 / 4.00",
    highlights: ["Completed Internship at Bangladesh Tourism Board", "Two-time University Badminton Champion"],
  },
];

// export const experience = {
//   hasExperience: true,
//   roles: [
//     {
//       company: "Freelance",
//       role: "Professional Translator",
//       duration: "2025 — Present",
//       summary: "Providing English-to-Bengali and Bengali-to-English translation services for diverse clients.",
//       responsibilities: [
//         "Ensuring linguistic accuracy and cultural relevance in translations.",
//         "Managing tight deadlines while maintaining high-quality output.",
//       ],
//       technologies: ["Translation", "Copywriting", "Proofreading"],
//     },
//     {
//       company: "Bangladesh Tourism Board",
//       role: "Intern",
//       duration: "Jan 2023 — May 2023",
//       summary: "Managed and organized comprehensive data for over 300 hotels in the Khulna district.",
//       responsibilities: [
//         "Successfully compiled and updated a database of 300+ hotels for the district tourism board.",
//         "Ensured data accuracy and accessibility for better tourism management and planning.",
//         "Coordinated with various hotel management teams to verify information.",
//       ],
//       technologies: ["Data Management", "Information Organization", "Tourism Research"],
//     },
//   ],
// };

export const projects = [
  {
    slug: "studymatch",
    index: "01",
    name: "StudyMatch",
    tagline:
      "An AI-matched study-abroad platform that connects students to universities based on their academic profile, budget, and preferences — powered by an LLM-driven recommendation engine and a context-aware chat assistant.",
    description:
      "StudyMatch is a full-stack agentic AI application built to take the guesswork out of choosing a university abroad. Students fill in their academic profile, budget, and preferences, and the platform's recommendation engine — powered by an LLM — returns a ranked, explained shortlist rather than a generic list of schools. A context-aware chat assistant sits alongside the recommendations, remembering the conversation and offering smart follow-up suggestions as a student narrows down their choice.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "JWT",
      "Google OAuth",
    ],
    features: [
      "AI-powered university recommendation engine with personalized matching and LLM-generated explanations for each suggestion.",
      "Conversational chat assistant with memory across the session and context-aware follow-up suggestions.",
      "JWT authentication and Google OAuth for a friction-free sign-up and login experience.",
      "Cloudinary-backed image uploads for user and application assets.",
      "A serverless Express API handling matching logic, auth, and data persistence to MongoDB.",
    ],
    challenges: [
      "Getting the LLM's recommendations to stay consistent and grounded in the student's actual profile, rather than drifting into generic suggestions, required careful prompt structuring and validation of the model's output before it reached the UI.",
      "Keeping the chat assistant's memory useful without letting the context grow unbounded meant trimming and summarizing older turns of the conversation instead of sending the full history on every request.",
      "Wiring Google OAuth alongside a custom JWT flow took some care to make sure both paths issued tokens the rest of the API could treat identically.",
    ],
    improvements: [
      "Add a saved-shortlist and comparison view so students can track multiple universities side by side.",
      "Expand the matching engine to factor in visa approval likelihood and scholarship availability.",
      "Introduce streaming responses in the chat assistant for a faster, more natural feel.",
      "Add admin tooling so university data can be updated without a redeploy.",
    ],
    liveUrl: "https://study-match-jiku.vercel.app",
    repoUrl: "https://github.com/zaberabdullah/StudyMatch",
    image: "/images/project-studymatch.png",
  },
  {
    slug: "sportnest",
    index: "02",
    name: "SportNest",
    tagline:
      "A full-stack sports facility booking platform where users can search, browse, and book premium turfs, courts, and pools with real-time slot availability across Bangladesh.",
    description:
      "SportNest solves a simple but common problem: finding and booking a sports facility shouldn't mean a phone call and a guess about availability. The platform lets users browse turfs, courts, and pools by category, see real slot availability pulled live from the database, and complete a booking from a protected dashboard where they can also manage or cancel it later.",
    stack: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    features: [
      "Category-based facility search — football, badminton, tennis, swimming, and more — with MongoDB queries powering real-time slot availability across 5+ sports categories.",
      "JWT-secured authentication with a protected booking dashboard where users view, manage, and cancel their bookings.",
      "Mobile-first responsive UI built with the Next.js App Router and Tailwind CSS.",
    ],
    challenges: [
      "Preventing double-booking of the same slot required designing the availability queries and write operations carefully so two users couldn't claim the same time window at once.",
      "Keeping the booking dashboard in sync with live slot changes meant thinking through when to refetch data versus update the UI optimistically.",
      "Structuring the Express API cleanly across multiple facility categories, each with slightly different attributes, without duplicating logic.",
    ],
    improvements: [
      "Add online payment integration so bookings can be confirmed and paid for in one flow.",
      "Introduce a facility-owner dashboard for managing listings, pricing, and slot availability directly.",
      "Add ratings and reviews so users can choose facilities based on past experiences.",
      "Send booking confirmations and reminders via email or SMS.",
    ],
    liveUrl: "https://sportnest-client-sigma.vercel.app",
    repoUrl: "https://github.com/zaberabdullah/sportnest-client",
    serverRepoUrl: "https://github.com/zaberabdullah/sportnest-server",
    image: "/images/project-sportnest.png",
  },
  {
    slug: "eventhive",
    index: "03",
    name: "EventHive",
    tagline:
      "A modern full-stack event management platform enabling users to discover, create, and book events with secure authentication and real-time seat management.",
    description:
      "EventHive is a full-stack event discovery and booking platform built on the Next.js App Router and MongoDB. It lets organizers list events and lets attendees search, filter, and book seats with confidence that availability is accurate at the moment they book — all backed by a scalable, type-safe architecture.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB / Mongoose",
      "JWT",
      "Zod",
    ],
    features: [
      "Smart event discovery with keyword search, category/city/price filters, sorting, pagination, and related-event recommendations.",
      "Secure booking and event management via JWT authentication, protected routes, full event CRUD, and live seat-availability updates.",
      "A modern, responsive interface including an interactive landing page, image gallery, analytics dashboard, and an optimized mobile experience.",
    ],
    challenges: [
      "Keeping seat availability accurate under concurrent bookings meant validating and updating counts atomically at the database level rather than trusting client-side state.",
      "Designing the filter and search system — keyword, category, city, price, sorting, and pagination together — required a query structure flexible enough to combine all of them without becoming unreadable.",
      "Enforcing consistent data shapes across the app with Zod schemas took upfront effort but paid off in fewer runtime surprises on both the API and the forms.",
    ],
    improvements: [
      "Add an integrated payment flow for paid events.",
      "Build a notifications system for booking confirmations and event updates.",
      "Expand the analytics dashboard with organizer-facing insights like attendance trends.",
      "Add calendar export (Google Calendar / .ics) for booked events.",
    ],
    liveUrl: "https://event-hive-blue.vercel.app",
    repoUrl: "https://github.com/zaberabdullah/EventHive",
    image: "/images/project-eventhive.png",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  // { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export const deviconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
