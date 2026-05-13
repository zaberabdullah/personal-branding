export const site = {
  name: "Zaber Abdullah",
  title: "Full Stack Developer",
  tagline:
    "I craft calm, fast web interfaces and dependable APIs—focused on clarity, accessibility, and maintainable systems.",
  email: "zaberabdullah120@gmail.com",
  phone: "01521251408",
  whatsapp: "01934888324",
  location: "Khulna, Bangladesh",
  resumeUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  profileImage: {
    src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80",
    alt: "Professional headshot of Alex Rivera",
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
        { name: "HTML", level: 85, icon: "html5/html5-original.svg" },
        { name: "CSS", level: 85, icon: "css3/css3-original.svg" },
        { name: "JavaScript", level: 60, icon: "javascript/javascript-original.svg" },
        { name: "React", level: 60, icon: "react/react-original.svg" },
        { name: "Next.js", level: 55, icon: "nextjs/nextjs-original.svg" },
        { name: "Tailwind CSS", level: 90, icon: "tailwindcss/tailwindcss-original.svg" },
        { name: "Hero UI", level: 85, icon: "react/react-original.svg" },
        { name: "DaisyUI", level: 90, icon: "tailwindcss/tailwindcss-original.svg" },
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

export const experience = {
  hasExperience: true,
  roles: [
    {
      company: "Freelance",
      role: "Professional Translator",
      duration: "2025 — Present",
      summary: "Providing English-to-Bengali and Bengali-to-English translation services for diverse clients.",
      responsibilities: [
        "Ensuring linguistic accuracy and cultural relevance in translations.",
        "Managing tight deadlines while maintaining high-quality output.",
      ],
      technologies: ["Translation", "Copywriting", "Proofreading"],
    },
    {
      company: "Bangladesh Tourism Board",
      role: "Intern",
      duration: "Jan 2023 — May 2023",
      summary: "Managed and organized comprehensive data for over 300 hotels in the Khulna district.",
      responsibilities: [
        "Successfully compiled and updated a database of 300+ hotels for the district tourism board.",
        "Ensured data accuracy and accessibility for better tourism management and planning.",
        "Coordinated with various hotel management teams to verify information.",
      ],
      technologies: ["Data Management", "Information Organization", "Tourism Research"],
    },
  ],
};

export const projects = [
  {
    slug: "suncart-ecommerce",
    title: "SunCart",
    shortDescription: "A modern e-commerce solution with a persistent cart system and secure authentication.",
    description:
      "SunCart is a full-stack e-commerce platform designed to provide a seamless shopping experience. It features a persistent shopping cart and robust user authentication for a personalized journey.",
    image: "/images/suncart-login.png",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "DaisyUI", "Context API"],
    liveUrl: "https://suncart-8542.vercel.app/",
    repoUrl: "https://github.com/zaberabdullah/suncart",
    features: [
      "Persistent cart system using MongoDB",
      "Secure user authentication and profile management",
      "Responsive design with Tailwind CSS and DaisyUI",
    ],
    challenges: [
      "Managing complex state transitions for the shopping cart.",
      "Ensuring secure data flow between the frontend and MongoDB.",
    ],
    future: ["Integration of a payment gateway", "Product review and rating system"],
  },
  {
    slug: "github-issues-tracker",
    title: "GitHub Issues Tracker",
    shortDescription: "A functional tool to search, filter, and track GitHub project issues in real-time.",
    description:
      "Built to help developers stay organized, this application interacts directly with the GitHub API to fetch and manage project issues with high efficiency.",
    image: "/images/github-issue-tracker.png",
    tech: ["React", "JavaScript", "REST API", "Tailwind CSS"],
    liveUrl: "https://github-issue-traacker.netlify.app/",
    repoUrl: "https://github.com/zaberabdullah/A-5-github-issue-tracker",
    features: [
      "Real-time issue fetching using GitHub API",
      "Advanced search and filtering capabilities",
      "Dynamic data display with optimized performance",
    ],
    challenges: [
      "Handling API rate limits effectively while fetching data.",
      "Designing an intuitive UI for complex data filtering.",
    ],
    future: ["Dark mode support for better readability", "Push notifications for new issues"],
  },
  {
    slug: "english-janala",
    title: "English Janala",
    shortDescription: "An interactive platform designed to simplify English learning for Bengali speakers.",
    description:
      "English Janala is a dedicated resource for native Bengali speakers to master English grammar and vocabulary through intuitive lessons and real-world examples.",
    image: "/images/english-janala.png",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://project-english-janalaa.netlify.app/",
    repoUrl: "https://github.com/zaberabdullah/project-english-janala",
    features: [
      "Comprehensive grammar guides tailored for Bengali learners",
      "Interactive vocabulary lists with contextual meanings",
      "Responsive and user-friendly reading interface",
    ],
    challenges: [
      "Structuring complex linguistic data for easy navigation.",
      "Ensuring accurate and culturally relevant translations for all learning materials.",
    ],
    future: ["User progress tracking", "Interactive quizzes and voice-assisted pronunciation guides"],
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

export const deviconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
