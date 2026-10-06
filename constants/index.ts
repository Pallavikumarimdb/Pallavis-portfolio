export const NavLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Open Source", href: "#open-source" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#contact" },
];

export const Socials = [
  {
    name: "GitHub",
    key: "github",
    src: "/gitwhite.png",
    link: "https://github.com/Pallavikumarimdb",
  },
  {
    name: "LinkedIn",
    key: "linkedin",
    src: "/linkedin3.svg",
    link: "https://www.linkedin.com/in/pallavisprofile/",
  },
  {
    name: "Twitter / X",
    key: "twitter",
    src: "/twitter.svg",
    link: "https://x.com/pallavimdb",
  },
];

export const Contact = {
  email: "pallavikumari2000mdb@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1vNgaq9Pxr3JwfgvIc53RxTniiResFWdK/view?usp=sharing",
  location: "India",
};

export const Hero = {
  name: "Pallavi Kumari",
  roles: [
    "Full-Stack Engineer",
    "AI-Powered Product Builder",
    "Open Source Contributor",
  ],
  tagline:
    "I design and ship production-grade web applications and AI-powered products - from intuition to a reliable, deployed system.",
  blurb:
    "Software Engineer with 1.5+ years of hands-on experience across the MERN/TypeScript stack and LLM-powered tooling. I love taking ownership of features end-to-end, contributing to large open-source codebases, and turning rough ideas into software that is actually used.",
};

export const HeroStats = [
  { value: "80+", label: "OSS PRs merged" },
  { value: "15+", label: "Open-source projects" },
  { value: "168", label: "GitHub repositories" },
  { value: "1.5+", label: "Years of experience" },
];

export type Project = {
  src: string;
  title: string;
  description: string;
  tech: string[];
  live?: string;
  repo: string;
  featured?: boolean;
  status?: "active" | "previous";
};

export const Projects: Project[] = [
  {
    src: "/NextWebsite.png",
    title: "EquiGen",
    description:
      "AI-powered investment research and financial report generation. A LangGraph map-reduce extraction pipeline with token-aware LLM budgeting, page-level citations, PDF rendering, and self-healing recovery.",
    tech: ["TypeScript", "Next.js", "LangGraph", "LLM APIs", "Puppeteer", "PostgreSQL"],
    live: "https://equi-gen.vercel.app/",
    repo: "https://github.com/Pallavikumarimdb/EquiGen",
    featured: true,
    status: "active",
  },
  {
    src: "/voiceai.png",
    title: "VoiceBench",
    description:
      "Regulated voice agent platform with a ~880ms p50 streaming pipeline - sherpa-ONNX ASR, neural TTS, sub-25ms barge-in, deterministic compliance guards and a SHA-256 hash-chained audit trail.",
    tech: ["TypeScript", "Python", "LangGraph", "sherpa-onnx", "FastAPI", "WebSockets"],
    repo: "https://github.com/Pallavikumarimdb/voicebench",
    status: "active",
  },
  {
    src: "/project2.png",
    title: "Replaysafe",
    description:
      "Replay-safe execution engine for autonomous agents and resilient background jobs - work that survives failures, interruptions and retries without losing state.",
    tech: ["TypeScript", "Python", "Next.js", "PostgreSQL", "Vercel"],
    live: "https://replaysafe.vercel.app/",
    repo: "https://github.com/JobGuards/Replaysafe",
    featured: true,
    status: "active",
  },
  {
    src: "/vexinai.png",
    title: "VexonAI",
    description:
      "AI-powered developer tool that helps engineers understand, summarize, and navigate large codebases - inline Q&A over repository code.",
    tech: ["TypeScript", "Next.js", "Octokit", "LangChain", "Prisma", "Gemini"],
    live: "https://vexon-ai.vercel.app/",
    repo: "https://github.com/Pallavikumarimdb/VexonAI",
  },
  {
    src: "/shiftlink.png",
    title: "ShiftLink",
    description:
      "Job board for international students to discover part-time and odd jobs, matched to their study schedule.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "TypeScript", "Tailwind", "Gemini"],
    live: "https://shift-link.vercel.app/",
    repo: "https://github.com/Pallavikumarimdb/ShiftLink",
  },
  {
    src: "/invocraft.png",
    title: "InvoCraft",
    description:
      "Invoice and customer management portal that streamlines business operations with generated, downloadable invoices.",
    tech: ["Next.js", "NestJS", "TypeScript", "Tailwind", "pdfKit"],
    live: "https://invocraft-ashy.vercel.app/",
    repo: "https://github.com/Pallavikumarimdb/invocraft",
  },
  {
    src: "/home.png",
    title: "@Note",
    description:
      "Modern note-taking application built with a mind-map-style editor for organizing ideas effortlessly.",
    tech: ["React", "Node.js", "TypeScript", "Tailwind"],
    live: "https://mind-map-nine-sandy.vercel.app/",
    repo: "https://github.com/Pallavikumarimdb/MindMap",
  },
  {
    src: "/codewave.png",
    title: "CodeWaveAI",
    description:
      "Bolt-like AI app builder where users prompt and generate complete websites, powered by Gemini and Claude APIs.",
    tech: ["React", "Node.js", "TypeScript", "Tailwind", "Gemini / Claude"],
    live: "https://code-wave-ai.vercel.app/",
    repo: "https://github.com/Pallavikumarimdb/CodeWaveAI",
  },
  {
    src: "/ochiLanding.png",
    title: "MoterCar",
    description:
      "Award-style animated landing page for a car agency, inspired by Ochi Designs.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    live: "https://motor-car-ochre.vercel.app/",
    repo: "https://github.com/Pallavikumarimdb/Landing-Pages/tree/main/apps/motor-car",
  },
  {
    src: "/Thirtysixstudio.png",
    title: "Thirtysixstudio",
    description:
      "Pixel-perfect landing page clone of Thirtysixstudio with scroll-driven animations.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    live: "https://lightning-fast.vercel.app/",
    repo: "https://github.com/Pallavikumarimdb/Landing-Pages/tree/main/apps/lightning-fast",
  },
  {
    src: "/Cryptivo.png",
    title: "Cryptivo",
    description:
      "Landing page for a next-generation decentralized digital currency platform.",
    tech: ["React", "Node.js", "JavaScript", "Tailwind"],
    live: "https://cryptivo.vercel.app/",
    repo: "https://github.com/Pallavikumarimdb/Cryptivo",
  },
];

export type OSSProject = {
  owner: string;
  repo: string;
  description: string;
  prs: number;
  url: string;
};

export const OpenSource: OSSProject[] = [
  {
    owner: "fosrl",
    repo: "pangolin",
    description: "Tunneled reverse proxy with identity, access control and dashboard UI.",
    prs: 35,
    url: "https://github.com/fosrl/pangolin",
  },
  {
    owner: "ansvisor",
    repo: "ansvisor",
    description: "AI-powered infrastructure / DevOps visualization platform.",
    prs: 14,
    url: "https://github.com/ansvisor/ansvisor",
  },
  {
    owner: "stella",
    repo: "stella",
    description: "Open-source legal workspace for drafting and managing documents.",
    prs: 9,
    url: "https://github.com/stella/stella",
  },
  {
    owner: "JobGuards",
    repo: "Replaysafe",
    description: "Replay-safe execution engine for autonomous agents and resilient background jobs.",
    prs: 8,
    url: "https://github.com/JobGuards/Replaysafe",
  },
  {
    owner: "open-mercato",
    repo: "open-mercato",
    description: "AI-engineering foundation framework with pre-baked architecture specs.",
    prs: 3,
    url: "https://github.com/open-mercato/open-mercato",
  },
  {
    owner: "Budibase",
    repo: "budibase",
    description: "Low-code platform for building internal tools on your own infrastructure.",
    prs: 3,
    url: "https://github.com/Budibase/budibase",
  },
  {
    owner: "hhftechnology",
    repo: "traefik-log-dashboard",
    description: "Observability dashboard for Traefik traffic and access logs.",
    prs: 2,
    url: "https://github.com/hhftechnology/traefik-log-dashboard",
  },
  {
    owner: "Autoloops",
    repo: "greplica",
    description: "Replicable AI coding agents and workflow orchestration.",
    prs: 2,
    url: "https://github.com/Autoloops/greplica",
  },
];

export const OpenSourceMore = [
  { name: "fosrl/newt", url: "https://github.com/fosrl/newt", prs: 1 },
  { name: "fosrl/badger", url: "https://github.com/fosrl/badger", prs: 1 },
  { name: "fosrl/docs-v2", url: "https://github.com/fosrl/docs-v2", prs: 1 },
  { name: "papra-hq/papra", url: "https://github.com/papra-hq/papra", prs: 1 },
  { name: "mcp-use/mcp-use", url: "https://github.com/mcp-use/mcp-use", prs: 1 },
  { name: "superglue-ai/superglue", url: "https://github.com/superglue-ai/superglue", prs: 1 },
];

export const OpenSourceStats = [
  { value: "80+", label: "Merged pull requests" },
  { value: "45+", label: "Issues reported" },
  { value: "15+", label: "Projects contributed to" },
  { value: "×3", label: "GitHub Pull Shark badge" },
];

export const Experience = [
  {
    company: "Nokia Solutions and Networks",
    role: "Software Engineer - Student Trainee",
    period: "06/2022 - 05/2023",
    points: [
      "Led the automation of functional and integration test cases using a Python-based framework, improving accuracy and throughput of release testing.",
      "Worked on ORAN (4G/5G) projects across security operations, productization, and stabilization of next-generation networks.",
      "Owned Customer Release Testing (CRT) for ORAN and RNC, ensuring the product met quality bars before every release.",
    ],
  },
  {
    company: "HCL Technologies",
    role: "Full-Stack Developer Intern",
    period: "01/2022 - 05/2022",
    points: [
      "Built dynamic, responsive front-end components with React.js for an interactive enterprise UI.",
      "Engineered server-side logic with Node.js and Express.js, integrating RESTful APIs with the MongoDB Atlas layer.",
      "Enabled smooth data flow across the stack by designing and wiring RESTful endpoints end-to-end.",
    ],
  },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "HTML", "CSS", "SQL"],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Redux",
      "React Query",
      "Tailwind CSS",
      "Material UI",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "MySQL",
      "MongoDB",
      "GraphQL",
      "Firebase",
    ],
  },
  {
    title: "AI / LLM",
    items: ["LangChain", "LangGraph", "Gemini API", "Claude API", "Octokit", "Puppeteer"],
  },
  {
    title: "Tools & Platform",
    items: ["Docker", "Git & GitHub", "Vercel", "Figma", "Stripe", "React Native", "Tauri"],
  },
];
