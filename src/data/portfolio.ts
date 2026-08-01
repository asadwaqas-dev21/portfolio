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
    id: "crm-website",
    title: "KWS Website",
    image: "/img/port0.png",
    links: [{ type: "web", url: "https://kwsociety.org/" }],
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
    title: "My Life Manager",
    image: "/img/port10.png",
    links: [
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.fujitec.fujitec_eclaim",
      },
    
    ],
  },
  {
    id: "quran-mobile",
    title: "Live App",
    image: "/img/port11.png",
    links: [
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=kw.gov.qsa.quranapp&hl=ur",
      },
     
    ],
  },
  {
    id: "mashrab-mobile",
    title: "Live App",
    image: "/img/port2.png",
    links: [
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.azaan.mashrabenaab",
      },
    
    ],
  },
  {
    id: "blackmarket-mobile",
    title: "Live App",
    image: "/img/port5.png",
    links: [
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.myblackmarkete.cypto_app",
      },
     
    ],
  },
  {
    id: "ecommerce-demo",
    title: "App Demo",
    image: "/img/port7.png",
    links: [
      {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=EBiEi_3AOkc&ab_channel=AliHamza",
      },
    ],
  },
  {
    id: "flutter-material",
    title: "Made With,",
    image: "/img/port4.png",
    techStack: ["Flutter", "Material UI Kit"],
    links: [],
  },
  {
    id: "flutter-firebase",
    title: "Made With,",
    image: "/img/port6.png",
    techStack: ["Flutter", "Firebase"],
    links: [],
  },
  {
    id: "flutter-ml",
    title: "Made With,",
    image: "/img/port1.png",
    techStack: ["Flutter", "Firebase", "Machine Learning API"],
    links: [],
  },
];

export const liveApps: PortfolioItem[] = [
  {
    id: "matchark",
    title: "Matchark",
    image: "/img/port13.png",
    links: [
      
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.linethree.android.matchark",
      },
    ],
  },
  {
    id: "streetswag",
    title: "StreetSwag",
    image: "/img/port14.png",
    links: [
      {
        type: "android",
        url: "https://drive.google.com/uc?export=download&id=1SLO19cHaWPyBaDGTCAw8Tj570AWQ2HlA",
      },
    ],
  },
  {
    id: "moshaf",
    title: "Moshaf (Book reading app)",
    image: "/img/port11.png",
    links: [

      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=kw.gov.qsa.quranapp&hl=ur",
      },
    ],
  },
  {
    id: "blackmarket",
    title: "My Black Market",
    image: "/img/port5.png",
    links: [
      
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.myblackmarkete.cypto_app",
      },
    ],
  },
  {
    id: "wave-signals",
    title: "Wave Get Signals",
    image: "/img/port8.png",
    links: [
     
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.joinwave.waveinvest",
      },
    ],
  },
  {
    id: "mashrab-naab",
    title: "Mashrab e Naab",
    image: "/img/port2.png",
    links: [
     
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.azaan.mashrabenaab",
      },
    ],
  },
  {
    id: "eclaim",
    title: "eClaim",
    image: "/img/port10.png",
    links: [
    
      {
        type: "playstore",
        url: "https://play.google.com/store/apps/details?id=com.fujitec.fujitec_eclaim",
      },
    ],
  },
  {
    id: "salesbucket",
    title: "Salesbucket",
    image: "/img/port0.png",
    links: [{ type: "web", url: "https://app.salesbuckets.com/" }],
  },
  {
    id: "front-row",
    title: "Front Row",
    image: "/img/port4.png",
    links: [
    
    ],
  },
];
