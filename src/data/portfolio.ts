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
    id: "kamboh-technologies",
    title: "Kamboh Technologies",
    image: "/img/kambohtechnologies.jpg",
    description: "Official software house platform delivering iOS, Android, and web applications, custom software, and digital solutions.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [{ type: "web", url: "https://www.kambohtechnologies.com/" }],
  },
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
    techStack: ["Flutter", "Dart", "Bloc", "Python", "Django REST Framework"],
    description: "Cross-platform enterprise workforce & field management system. Built with Flutter & BLoC state management and backed by a Python & Django REST Framework API backend.",
    links: [],
  },
  {
    id: "eclaim-mobile",
    title: "My Life Manager App",
    image: "/img/port10.png",
    techStack: ["Flutter", "Dart", "GetX", "Firebase", "CRUD Operations"],
    description: "All-in-one personal productivity and finance management suite built with Flutter & GetX, featuring real-time Firebase syncing, journaling, and expense tracking.",
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
    image: "/img/tailor_master.jpg",
    techStack: ["Flutter", "Dart", "Provider", "SQLite", "Localization"],
    description: "Localized B2B business management application built with Flutter & Provider, featuring offline SQLite database, customer measurements, and bilingual English/Urdu support.",
    links: [],
  },
  {
    id: "cash-and-carry",
    title: "Cash and Carry System",
    image: "/img/cash_and_carry.jpg",
    techStack: ["Flutter", "Dart", "Bloc", "SQLite", "POS & Inventory"],
    description: "Wholesale & retail cash and carry system architected with Flutter & BLoC, featuring barcode scanning, live inventory tracking, and offline sales analytics.",
    links: [],
  },
  {
    id: "college-finance-manager",
    title: "College Finance Manager App",
    image: "/img/college_finance.jpg",
    techStack: ["Flutter", "Dart", "GetX", "Cloud Sync", "SQL", "Firebase"],
    description: "Secure financial tracking and ledger suite built with Flutter & GetX for college administration, student fee vouchers, and institutional ledger records.",
    links: [],
  },
  {
    id: "justshine-cleaning-app",
    title: "Just Shine Cleaning Services App",
    image: "/img/justshine.jpg",
    techStack: ["Flutter", "Dart", "Provider", "REST APIs", "Firebase"],
    description: "On-demand cleaning services mobile app built with Flutter & Provider, featuring dynamic service packages, real-time schedule tracking, and RESTful API integration.",
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
    techStack: ["Flutter", "Dart", "Bloc", "REST APIs", "Cloud Storage"],
    description: "Luxury interior design consultation & turnkey fit-out client app built with Flutter & BLoC, showcasing villa/office project portfolios and consultation bookings.",
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
    techStack: ["Flutter", "Dart", "GetX", "REST APIs"],
    description: "Modern interactive e-commerce mobile application built with Flutter & GetX state management, showcasing product catalogs, reactive cart, and checkout flows.",
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
    techStack: ["Flutter", "Dart", "Bloc", "GPS Integration", "REST APIs"],
    description: "Dual-interface fleet tracking platform built with Flutter & BLoC architecture, featuring real-time driver GPS tracking and administrator dispatch dashboards.",
    links: [],
  },
  {
    id: "pos-system",
    title: "POS System",
    image: "/img/pos_system.jpg",
    techStack: ["Flutter", "Dart", "Provider", "SQLite", "Thermal Printer"],
    description: "Rapid Point of Sale (POS) solution built with Flutter & Provider, featuring fast barcode scanning, thermal receipt printing, shift reports, and cash drawer integration.",
    links: [],
  },
  {
    id: "flutter-ml",
    title: "Whisper Guard (AI Chat)",
    image: "/img/port1.png",
    techStack: ["Flutter", "Dart", "GetX", "Python", "Machine Learning APIs"],
    description: "Real-time, low-latency secure messaging app built with Flutter, GetX, and Python backend services with end-to-end encryption and AI safety protocols.",
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
    image: "/img/tailor_master.jpg",
    links: [],
  },
  {
    id: "cash-and-carry-live",
    title: "Cash and Carry System",
    image: "/img/cash_and_carry.jpg",
    links: [],
  },
  {
    id: "college-finance-live",
    title: "College Finance Manager App",
    image: "/img/college_finance.jpg",
    links: [],
  },
  {
    id: "pos-system-live",
    title: "POS System",
    image: "/img/pos_system.jpg",
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
    id: "kamboh-technologies-live",
    title: "Kamboh Technologies",
    image: "/img/kambohtechnologies.jpg",
    links: [{ type: "web", url: "https://www.kambohtechnologies.com/" }],
  },
  {
    id: "front-row",
    title: "Front Row",
    image: "/img/port4.png",
    links: [
    
    ],
  },
];
