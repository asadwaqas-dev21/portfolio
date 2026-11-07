export interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  description?: string;
  techStack?: string[];
  links: PortfolioLink[];
}

export interface PortfolioLink {
  type: "playstore" | "web" | "youtube" | "android" | "github";
  url: string;
  label?: string;
}

export const websiteProjects: PortfolioItem[] = [
  {
    id: "kurchu",
    title: "Kurchu",
    image: "/img/kurchu.jpg",
    description: "Mobile app development agency designing, building, and launching iOS, Android, and cross-platform apps for global startups.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [{ type: "web", url: "https://www.kurchu.com/" }],
  },
  {
    id: "bait-al-ebdaa",
    title: "Bait Al Ebdaa",
    image: "/img/baitalebdaa.jpg",
    description: "Luxury turnkey interior design and fit-out company in Dubai, featuring modern project showcases and design services.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [{ type: "web", url: "https://www.baitalebdaa.com/" }],
  },
  {
    id: "justshine-cleaning",
    title: "Just Shine Cleaning Services",
    image: "/img/justshine.jpg",
    description: "Professional cleaning services platform in Abu Dhabi with online quote requests, service packages, and modern responsive design.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [{ type: "web", url: "https://www.justshinecleaningservices.com/" }],
  },
  {
    id: "crm-website",
    title: "KWS Website",
    image: "/img/port0.png",
    description: "Web application developed for Kuwait Water Society (KWS).",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [
      { type: "web", url: "https://kws-git-main-asad-s-team.vercel.app/", label: "Vercel Live" },
      { type: "web", url: "https://kwsociety.org/", label: "Domain" },
    ],
  },
  {
    id: "crypto-website",
    title: "Xrossapps Website",
    image: "/img/port12.png",
    links: [{ type: "web", url: "https://www.xrossapps.com/" }],
  },
];

export const mobileProjects: PortfolioItem[] = [
  {
    id: "fieldflow-mobile",
    title: "FieldFlow",
    image: "/img/port4.png",
    techStack: ["Flutter", "Python", "Django REST Framework"],
    description: "Cross-Platform Management System. Integrated with Django REST APIs for data exchange.",
    links: [],
  },
  {
    id: "eclaim-mobile",
    title: "My Life Manager App",
    image: "/img/port10.png",
    techStack: ["Flutter", "Firebase", "Dart", "CRUD Operations"],
    description: "All-in-one personal productivity and finance suite centralizing daily journaling, expense tracking, and project tasks.",
    links: [
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.fujitec.fujitec_eclaim",
      },
    ],
  },
  {
    id: "tailor-master-app",
    title: "Tailor Master App",
    image: "/img/port3.png",
    techStack: ["Flutter", "SQLite", "Dart", "Localization"],
    description: "Localized B2B business management tool supporting English and Urdu with offline-to-online data synchronization.",
    links: [],
  },
  {
    id: "justshine-cleaning-app",
    title: "Just Shine Cleaning Services App",
    image: "/img/justshine.jpg",
    techStack: ["Flutter", "Dart", "REST APIs", "Firebase"],
    description: "On-demand cleaning services mobile app with service booking, real-time schedule tracking, and instant quote estimates.",
    links: [
      {
        type: "web",
        url: "https://www.justshinecleaningservices.com/",
        label: "Visit Platform",
      },
    ],
  },
  {
    id: "baitalebdaa-interior-app",
    title: "Baitalebdaa Interior Services App",
    image: "/img/baitalebdaa.jpg",
    techStack: ["Flutter", "Dart", "REST APIs"],
    description: "Luxury interior design and turnkey fit-out client app showcasing villa and office projects with booking consultation.",
    links: [
      {
        type: "web",
        url: "https://www.baitalebdaa.com/",
        label: "Visit Platform",
      },
    ],
  },
  {
    id: "ecommerce-demo",
    title: "E-Commerce App Demo",
    image: "/img/port7.png",
    techStack: ["Flutter", "Dart", "REST APIs"],
    description: "Interactive modern e-commerce mobile application showcasing product catalogs, cart, and checkout flows.",
    links: [
      {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=EBiEi_3AOkc&ab_channel=AliHamza",
      },
    ],
  },
  {
    id: "flutter-material",
    title: "GloryGlobal (Fleet Manager)",
    image: "/img/port4.png",
    techStack: ["Flutter", "Dart", "GPS Integration"],
    description: "Dual-interface fleet tracking system with driver monitoring and admin dispatch dashboard.",
    links: [],
  },
  {
    id: "flutter-firebase",
    title: "Aspire (Finance Suite)",
    image: "/img/port6.png",
    techStack: ["Flutter", "Cloud Sync", "Firebase"],
    description: "Secure financial tracking and ledger management app developed for institutional administration.",
    links: [],
  },
  {
    id: "flutter-ml",
    title: "Whisper Guard (AI Chat)",
    image: "/img/port1.png",
    techStack: ["Flutter", "Python", "Machine Learning APIs"],
    description: "Real-time, low-latency secure messaging app built with end-to-end security and AI safety protocols.",
    links: [],
  },
];

export const liveApps: PortfolioItem[] = [
  {
    id: "eclaim",
    title: "My Life Manager App",
    image: "/img/port10.png",
    links: [
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.fujitec.fujitec_eclaim",
      },
    ],
  },
  {
    id: "tailor-master-live",
    title: "Tailor Master App",
    image: "/img/port3.png",
    links: [],
  },
  {
    id: "salesbucket",
    title: "Salesbucket",
    image: "/img/port0.png",
    links: [{ type: "web", url: "https://app.salesbuckets.com/" }],
  },
  {
    id: "justshine-cleaning-live",
    title: "Just Shine Cleaning Services App",
    image: "/img/justshine.jpg",
    links: [{ type: "web", url: "https://www.justshinecleaningservices.com/" }],
  },
  {
    id: "bait-al-ebdaa-live",
    title: "Baitalebdaa Interior Services App",
    image: "/img/baitalebdaa.jpg",
    links: [{ type: "web", url: "https://www.baitalebdaa.com/" }],
  },
  {
    id: "kws-website-live",
    title: "KWS Website",
    image: "/img/port0.png",
    links: [{ type: "web", url: "https://kws-git-main-asad-s-team.vercel.app/" }],
  },
  {
    id: "kurchu-live",
    title: "Kurchu",
    image: "/img/kurchu.jpg",
    links: [{ type: "web", url: "https://www.kurchu.com/" }],
  },
  {
    id: "front-row",
    title: "Front Row",
    image: "/img/port4.png",
    links: [
    
    ],
  },
];
