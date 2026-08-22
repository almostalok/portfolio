export interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  caseStudyUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  mockupType: "hospate" | "unhack" | "grupmate";
}

export interface TechItem {
  name: string;
  level?: string;
  details: {
    description: string;
    usedFor: string[];
  };
}

export interface TechCategory {
  title: string;
  icon: "monitor" | "server" | "cloud" | "rocket";
  items: TechItem[];
}

export interface BuildLogItem {
  year: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface ExperimentItem {
  title: string;
  category: string;
  doodleType: "heart" | "smile" | "wave" | "shield" | "arrow" | "stars";
  rotation: number;
  tag: string;
  status: string;
  url?: string;
}

export interface BlogItem {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  date?: string;
  slug: string;
  doodleType?: "wave" | "bulb" | "bug" | "tree";
}

export interface SocialItem {
  platform: string;
  handle: string;
  description: string;
  url: string;
  icon: "linkedin" | "github" | "twitter" | "instagram";
  tapeColor?: string;
}

export interface OrganizationItem {
  title: string;
  role?: string;
  subtitle: string;
  description: string;
  iconType: "medal" | "radar" | "flag" | "trophy" | "certificate";
  year?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    greeting: string;
    headline: string;
    roles: string[];
    bio: string;
    location: string;
    status: string;
    fuel: string;
    email: string;
  };
  stats: StatItem[];
  philosophy: {
    build: {
      title: string;
      description: string;
    };
    organize: {
      title: string;
      description: string;
    };
    experiment: {
      title: string;
      description: string;
    };
  };
  products: ProjectItem[];
  productAnatomy: {
    hospate: {
      title: string;
      subtitle: string;
      nodes: { id: string; label: string; desc: string }[];
    };
    unhack: {
      title: string;
      subtitle: string;
      nodes: { id: string; label: string; desc: string }[];
    };
  };
  engineering: TechCategory[];
  buildLog: BuildLogItem[];
  github: {
    username: string;
    totalContributions: number;
    year: number;
    profileUrl: string;
    languages: { name: string; percentage: number; color: string }[];
  };
  experiments: ExperimentItem[];
  blogs: BlogItem[];
  socials: SocialItem[];
  organizations: OrganizationItem[];
  achievements: {
    title: string;
    subtitle: string;
    badge: string;
  }[];
  currently: {
    meters: { label: string; percentage: number }[];
    location: string;
    status: string;
    fuel: string;
  };
  failedExperiments: {
    stats: { value: string | number; label: string }[];
    humorNote: string;
  };
  easterEggs: string[];
  scrollQuips: string[];
  statement: {
    quote: string;
    highlight1: string;
    highlight2: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Alok",
    greeting: "HEY!",
    headline: "I build products, break things, organize people & occasionally ship something useful (emphasis on occasionally).",
    roles: ["Developer", "Builder", "Organizer", "Experimenter"],
    bio: "Passionate engineer and community organizer focused on turning messy problems into intuitive digital experiences. Fueled by an unhealthy amount of coffee.",
    location: "Somewhere in India",
    status: "Probably shipping (or napping)",
    fuel: "Coffee + curiosity",
    email: "alok@alok.build",
  },
  stats: [
    { value: 20, suffix: "+", label: "Projects built", icon: "Code2" },
    { value: 15, suffix: "+", label: "Events organized", icon: "Calendar" },
    { value: 3, prefix: "0", label: "Communities led", icon: "Users" },
    { value: 312, label: "GitHub contributions", icon: "Terminal" },
    { value: 7, prefix: "0", suffix: "+", label: "Technologies learned", icon: "BookOpen" },
    { value: 10, suffix: "+", label: "Achievements", icon: "Trophy" },
  ],
  philosophy: {
    build: {
      title: "BUILD.",
      description: "I build digital products that solve real problems (or at least try to). Most survive past v0.1.",
    },
    organize: {
      title: "ORGANIZE.",
      description: "I create spaces for people to learn, build & grow. Yes, I voluntarily manage spreadsheets.",
    },
    experiment: {
      title: "EXPERIMENT.",
      description: "I prototype crazy ideas at 2am and learn by shipping (and breaking everything in prod).",
    },
  },
  products: [
    {
      id: "hospate",
      number: "01",
      title: "Hospate",
      subtitle: "Healthcare infrastructure",
      description: "Making medical records less painful than an actual hospital visit.",
      tags: ["Next.js", "NestJS", "PostgreSQL", "Redis", "TailwindCSS"],
      caseStudyUrl: "#hospate",
      liveUrl: "https://hospate.demo",
      githubUrl: "https://github.com/alok/hospate",
      mockupType: "hospate",
    },
    {
      id: "unhack",
      number: "02",
      title: "UnHack",
      subtitle: "Transparent hackathons",
      description: "Hackathons shouldn't feel like judging roulette. So I fixed that. You're welcome.",
      tags: ["Next.js", "Node.js", "Socket.io", "Redis", "PostgreSQL"],
      caseStudyUrl: "#unhack",
      liveUrl: "https://unhack.demo",
      githubUrl: "https://github.com/alok/unhack",
      mockupType: "unhack",
    },
    {
      id: "grupmate",
      number: "03",
      title: "Grupmate",
      subtitle: "Virtual co-study",
      description: "Study together without pretending you're actually studying. (We know you're on YouTube.)",
      tags: ["Next.js", "WebRTC", "Prisma", "TailwindCSS"],
      caseStudyUrl: "#grupmate",
      liveUrl: "https://grupmate.demo",
      githubUrl: "https://github.com/alok/grupmate",
      mockupType: "grupmate",
    },
  ],
  productAnatomy: {
    hospate: {
      title: "HOW HOSPATE WORKS",
      subtitle: "Unified EHR & Hospital Management Pipeline",
      nodes: [
        { id: "1", label: "Patient", desc: "Biometric & QR Onboarding" },
        { id: "2", label: "Identity", desc: "Decentralized Medical ID" },
        { id: "3", label: "Hospital ERP", desc: "Resource & Bed Allocation" },
        { id: "4", label: "EHR Core", desc: "FastFHIR Encrypted Records" },
        { id: "5", label: "Appointments", desc: "Live Slot Synchronization" },
        { id: "6", label: "Records", desc: "Doctor & Lab Diagnostics" },
        { id: "7", label: "Research", desc: "Anonymized Analytics" },
      ],
    },
    unhack: {
      title: "HOW UNHACK WORKS",
      subtitle: "Transparent Judging & Verification Matrix",
      nodes: [
        { id: "1", label: "Submission", desc: "GitHub Repo & Demo Video" },
        { id: "2", label: "Automated Checks", desc: "Commit History & Plagiarism" },
        { id: "3", label: "Judge Evaluation", desc: "Rubric Scoring Matrix" },
        { id: "4", label: "Weighted Metrics", desc: "Decentralized Normalization" },
        { id: "5", label: "Live Leaderboard", desc: "Real-time WebSocket Push" },
        { id: "6", label: "Transparent Score", desc: "Public Audit Trail" },
      ],
    },
  },
  engineering: [
    {
      title: "Frontend",
      icon: "monitor",
      items: [
        {
          name: "React",
          details: {
            description: "Modern UI architecture with concurrent features and server components.",
            usedFor: ["Component composition", "Virtual DOM", "Interactive flows", "State management"],
          },
        },
        {
          name: "Next.js",
          details: {
            description: "Fullstack React framework with SSR, App Router, and server actions.",
            usedFor: ["Server-side rendering", "Edge routing", "SEO optimization", "API route handlers"],
          },
        },
        {
          name: "TypeScript",
          details: {
            description: "Static typing powerhouse providing type safety across front and back ends.",
            usedFor: ["Type contracts", "API payloads", "Refactoring confidence", "DX enhancement"],
          },
        },
        {
          name: "Redux Toolkit",
          details: {
            description: "Predictable central state container with RTK Query integrations.",
            usedFor: ["Global store", "Normalized caching", "Complex client state"],
          },
        },
        {
          name: "Tailwind CSS",
          details: {
            description: "Utility-first design system engine for pixel-perfect bespoke UI.",
            usedFor: ["Design tokens", "Responsive layouts", "Micro-animations", "Theme variables"],
          },
        },
        {
          name: "React Query",
          details: {
            description: "Server state synchronization, intelligent background refetching and mutation.",
            usedFor: ["Async caching", "Optimistic updates", "Infinite scrolling", "Network deduplication"],
          },
        },
      ],
    },
    {
      title: "Backend",
      icon: "server",
      items: [
        {
          name: "Node.js",
          details: {
            description: "Event-driven asynchronous JavaScript runtime for high-throughput APIs.",
            usedFor: ["Microservices", "REST APIs", "Event emitters", "Stream processing"],
          },
        },
        {
          name: "NestJS",
          details: {
            description: "Enterprise modular TypeScript framework with dependency injection.",
            usedFor: ["Scalable architecture", "DTO validation", "Guard auth", "Microservices"],
          },
        },
        {
          name: "Express.js",
          details: {
            description: "Fast, unopinionated, minimalist web server for lightweight backends.",
            usedFor: ["Middleware pipelines", "Micro-endpoints", "Webhook listeners"],
          },
        },
        {
          name: "PostgreSQL",
          details: {
            description: "Relational database with JSONB support, indexing, and transactional ACID.",
            usedFor: ["Primary data store", "Complex joins", "Full-text search", "Relational models"],
          },
        },
        {
          name: "Prisma",
          details: {
            description: "Next-generation type-safe ORM for Node.js and TypeScript.",
            usedFor: ["Database migrations", "Schema modelling", "Type generation", "Query builder"],
          },
        },
        {
          name: "Redis",
          details: {
            description: "In-memory data structure store used for caching and low-latency state.",
            usedFor: ["Caching", "Sessions", "Rate limiting", "Pub/Sub events"],
          },
        },
        {
          name: "Kafka",
          details: {
            description: "Distributed event streaming platform for resilient high-volume pipelines.",
            usedFor: ["Event streaming", "Log aggregation", "Decoupled queues", "Audit trails"],
          },
        },
      ],
    },
    {
      title: "DevOps / Infra",
      icon: "cloud",
      items: [
        {
          name: "Docker",
          details: {
            description: "Containerization tool guaranteeing deterministic environment execution.",
            usedFor: ["Container packaging", "Local dev parity", "Multi-stage builds"],
          },
        },
        {
          name: "Kubernetes",
          details: {
            description: "Container orchestration platform for automated deployments and scaling.",
            usedFor: ["Pod scheduling", "Ingress control", "Auto-scaling", "Self-healing"],
          },
        },
        {
          name: "AWS",
          details: {
            description: "Cloud infrastructure powering scalable compute, storage, and networking.",
            usedFor: ["EC2 instances", "S3 asset buckets", "CloudFront CDN", "RDS clusters"],
          },
        },
        {
          name: "Nginx",
          details: {
            description: "High-performance reverse proxy, load balancer, and static file server.",
            usedFor: ["SSL termination", "Reverse proxying", "Gzip compression", "Rate limiting"],
          },
        },
        {
          name: "CI/CD",
          details: {
            description: "Automated test, lint, and deployment pipelines via GitHub Actions.",
            usedFor: ["Continuous delivery", "Automated linting", "Integration tests", "Preview envs"],
          },
        },
        {
          name: "Terraform",
          details: {
            description: "Infrastructure as Code tool to provision and manage cloud resources.",
            usedFor: ["Cloud provisioning", "State management", "Reproducible infra"],
          },
        },
      ],
    },
    {
      title: "Currently Learning",
      icon: "rocket",
      items: [
        {
          name: "Distributed Systems",
          details: {
            description: "Designing fault-tolerant, partition-resilient multi-node computing fabrics.",
            usedFor: ["Consensus algorithms", "CAP theorem exploration", "Raft replication"],
          },
        },
        {
          name: "System Design",
          details: {
            description: "High-level architectural patterns for billion-request scale platforms.",
            usedFor: ["Database sharding", "CQRS", "Consistent hashing", "Fault tolerance"],
          },
        },
        {
          name: "AI Agents",
          details: {
            description: "Autonomous reasoning agents with tool usage, memory, and multi-step planning.",
            usedFor: ["MCP integrations", "Function calling", "LangChain/LlamaIndex", "Workflow auto"],
          },
        },
        {
          name: "Cloud Architecture",
          details: {
            description: "Multi-region resilient cloud topology design and security posture.",
            usedFor: ["Zero-trust nets", "Disaster recovery", "Cost optimization"],
          },
        },
        {
          name: "Go",
          details: {
            description: "High-concurrency compiled language with native goroutines and channels.",
            usedFor: ["CLI tooling", "Microservices", "High-throughput proxies"],
          },
        },
        {
          name: "Rust",
          details: {
            description: "Memory-safe systems programming without garbage collector overhead.",
            usedFor: ["WebAssembly kernels", "Low-latency engines", "Safe concurrency"],
          },
        },
      ],
    },
  ],
  buildLog: [
    {
      year: "2024",
      title: "Started Coding & Exploring",
      description: "Started coding. Exploring everything.",
      highlights: ["SIH 2024 Prequalifiers", "First open source PRs", "Campus hackathons"],
    },
    {
      year: "2025",
      title: "Freelance & SaaS Experiments",
      description: "Freelance projects. The Boring Education. SaaS experiments.",
      highlights: ["Freelance client delivery", "The Boring Education workshops", "Prototyped 10+ web apps"],
    },
    {
      year: "2026",
      title: "Fullstack Products & Scale",
      description: "Hospate. UnHack. GRUPMATE. And more...",
      highlights: ["Building Hospate healthcare suite", "UnHack transparent hackathons", "Deep diving into AI systems"],
    },
  ],
  github: {
    username: "alok-builder",
    totalContributions: 312,
    year: 2026,
    profileUrl: "https://github.com",
    languages: [
      { name: "TypeScript", percentage: 42, color: "#3178C6" },
      { name: "JavaScript", percentage: 28, color: "#F7DF1E" },
      { name: "Python", percentage: 12, color: "#3776AB" },
      { name: "Java", percentage: 9, color: "#B07219" },
      { name: "SQL", percentage: 8, color: "#E38C00" },
    ],
  },
  experiments: [
    {
      title: "QR Dating Profile",
      category: "Social Experiment",
      doodleType: "heart",
      rotation: -2,
      tag: "Fun",
      status: "Live",
    },
    {
      title: "AI Panic Assistant",
      category: "AI & Mental Health",
      doodleType: "smile",
      rotation: 1.5,
      tag: "AI",
      status: "Beta",
    },
    {
      title: "Habit Tracker (Mmgflow)",
      category: "Productivity",
      doodleType: "wave",
      rotation: -1,
      tag: "Web App",
      status: "Live",
    },
    {
      title: "Devi Safety App",
      category: "Civic Safety",
      doodleType: "shield",
      rotation: 2,
      tag: "Mobile",
      status: "Prototype",
    },
    {
      title: "StartupGate",
      category: "Founder Tools",
      doodleType: "arrow",
      rotation: -1.5,
      tag: "SaaS",
      status: "Shipped",
    },
    {
      title: "and many more...",
      category: "Ideas & Prototypes",
      doodleType: "stars",
      rotation: 2,
      tag: "Explore",
      status: "Ongoing",
    },
  ],
  blogs: [
    {
      id: "redis-regret",
      number: "01",
      title: "Why Redis exists in my project (and why I regret adding it)",
      category: "Engineering (Pain)",
      readTime: "8 min read",
      date: "Feb 2026",
      slug: "why-redis-exists",
      doodleType: "wave",
    },
    {
      id: "built-too-early",
      number: "02",
      title: "I built a thing before figuring out if anyone wanted it",
      category: "Building (Delusional Optimism)",
      readTime: "6 min read",
      date: "Jan 2026",
      slug: "built-before-validated",
      doodleType: "bulb",
    },
    {
      id: "nextjs-break",
      number: "03",
      title: "Next.js didn't break. I did.",
      category: "Engineering (Cope)",
      readTime: "11 min read",
      date: "Dec 2025",
      slug: "nextjs-didnt-break",
      doodleType: "bug",
    },
    {
      id: "hackathon-lessons",
      number: "04",
      title: "The hackathon I organized taught me more than I expected",
      category: "Life",
      readTime: "7 min read",
      date: "Nov 2025",
      slug: "hackathon-lessons-learned",
      doodleType: "tree",
    },
  ],
  socials: [
    {
      platform: "LinkedIn",
      handle: "alok-singh",
      description: "Sharing learnings & humble-bragging in public.",
      url: "https://linkedin.com",
      icon: "linkedin",
      tapeColor: "#F4C400",
    },
    {
      platform: "GitHub",
      handle: "alok-singh",
      description: "Code, commits & 3am debugging sessions.",
      url: "https://github.com",
      icon: "github",
      tapeColor: "#111318",
    },
    {
      platform: "X / Twitter",
      handle: "@alok_builds",
      description: "Random thoughts in 280 chars. Mostly shower ideas.",
      url: "https://x.com",
      icon: "twitter",
      tapeColor: "#F4C400",
    },
    {
      platform: "Instagram",
      handle: "@alok.creates",
      description: "Photos, coffee pics & pretending to have a social life.",
      url: "https://instagram.com",
      icon: "instagram",
      tapeColor: "#686868",
    },
  ],
  organizations: [
    {
      title: "SIH 2024",
      role: "Head Coordinator",
      subtitle: "Prequalifiers",
      description: "Led pre-qualifiers, mentoring 300+ students across multi-track software challenges.",
      iconType: "medal",
      year: "2024",
    },
    {
      title: "Techno-Business Hackathon",
      role: "Shortlisted",
      subtitle: "Shortlisted Finalist",
      description: "Recognized among top teams for building high-impact healthcare solutions.",
      iconType: "radar",
      year: "2024",
    },
    {
      title: "E-Cell",
      role: "President",
      subtitle: "President",
      description: "Leading campus initiatives, startup incubations, and speaker workshops for aspiring founders.",
      iconType: "flag",
      year: "2025 - Present",
    },
    {
      title: "Multiple Hackathon Wins",
      role: "Winner & Runner Up",
      subtitle: "Hackathons",
      description: "Consistent podium finishes across Web3, AI, and social impact sprint challenges.",
      iconType: "trophy",
      year: "2024 - 2026",
    },
    {
      title: "Workshops",
      role: "Organizer & Speaker",
      subtitle: "50+ Organized",
      description: "Conducted 50+ technical and product workshops on Next.js, Git, APIs, and modern web architectures.",
      iconType: "certificate",
      year: "2024 - 2026",
    },
  ],
  achievements: [
    { title: "SIH 2024", subtitle: "Head Coordinator Prequalifiers", badge: "Leadership" },
    { title: "Techno-Business Hackathon", subtitle: "Shortlisted Finalist", badge: "Competition" },
    { title: "E-Cell President", subtitle: "Incubating student ventures", badge: "Leadership" },
    { title: "Multiple Hackathon Wins", subtitle: "Over 5+ awards & citations", badge: "Engineering" },
    { title: "50+ Workshops", subtitle: "Over 2000+ developers mentored", badge: "Community" },
  ],
  currently: {
    meters: [
      { label: "building", percentage: 80 },
      { label: "learning", percentage: 70 },
      { label: "experimenting", percentage: 90 },
      { label: "sleeping", percentage: 20 },
    ],
    location: "Somewhere in India",
    status: "Probably shipping",
    fuel: "Coffee + curiosity",
  },
  failedExperiments: {
    stats: [
      { value: 47, label: "bugs encountered" },
      { value: 23, label: "ideas abandoned" },
      { value: 11, label: "rewrites" },
      { value: "∞", label: '"let\'s just refactor this"' },
    ],
    humorNote: "Failure is just shipping with unexpected telemetry. Every bug is a feature I haven't documented yet.",
  },
  statement: {
    quote: '“ I like turning "what if?" into "it\'s live." ”',
    highlight1: '"what if?"',
    highlight2: '"it\'s live."',
  },
  easterEggs: [
    "You found the source code. Respect.",
    "No, I don't mass-apply. I mass-build.",
    "This portfolio has more features than my actual products.",
    "If you're a recruiter, I promise I'm normal in meetings.",
    "Built in one sitting. (That's a lie.)",
    "Yes, I made the cursor custom. I have priorities.",
  ],
  scrollQuips: [
    "still reading? nice.",
    "you're past the fold 🎉",
    "hire me maybe?",
    "this took way too long to build",
    "← I drew those birds myself",
    "no AI was harmed... just exhausted",
    "you scroll, I ship",
    "almost at the bottom!",
    "fun fact: this dot is #F4C400",
    "coffee count: ████░ 80%",
  ],
};
