export interface Skill {
  name: string;
  percentage: number;
  cssClass: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TimelineItem {
  icon: string;
  duration: string;
  title: string;
  company: string;
  description: string;
}

export const skills: Skill[] = [
  { name: "Flutter & Dart", percentage: 90, cssClass: "html" },
  { name: "Bloc / GetX / Provider", percentage: 88, cssClass: "css" },
  { name: "Next.js & React", percentage: 80, cssClass: "js" },
  { name: "Deployment (Play Store, Vercel, Netlify)", percentage: 85, cssClass: "node" },
  { name: "Firebase & Supabase", percentage: 80, cssClass: "node" },
  { name: "REST APIs & SQLite", percentage: 82, cssClass: "python" },
  { name: "SEO (Search Engine Optimization)", percentage: 70, cssClass: "js" },
  { name: "Python & Django", percentage: 50, cssClass: "react" },
];

export const stats: StatItem[] = [
  { value: "15+", label: "Projects\nCompleted" },
  { value: "2+", label: "Years of\nProgramming experience" },
  { value: "4+", label: "Companies &\nOrganizations" },
  { value: "2+", label: "Development\nFrameworks" },
];

export const education: TimelineItem[] = [
  {
    icon: "fas fa-graduation-cap",
    duration: "2021 - 2025",
    title: "BS Computer Science",
    company: "University of Education",
    description:
      "Studied programming, Software engineering and mobile app development.",
  },
  {
    icon: "fas fa-school",
    duration: "2019 - 2021",
    title: "FSc Pre-Engineering",
    company: "City Science College, Khudian Khas, Kasur",
    description: "Completed higher secondary education focusing on pre-engineering subjects.",
  },
  {
    icon: "fas fa-book-reader",
    duration: "2017 - 2019",
    title: "Matriculation (Science)",
    company: "Sadiq Memorial School, Khudian Khas, Kasur",
    description: "Completed secondary education with a focus on science subjects.",
  },
];

export const career: TimelineItem[] = [
  {
    icon: "fas fa-building",
    duration: "Nov 1, 2026 - Present",
    title: "Assistant Program Officer",
    company: "Punjab Information Technology Board (PITB)",
    description:
      "Working as Assistant Program Officer at PITB, contributing to government technology initiatives, public sector software solutions, and digital transformation programs.",
  },
  {
    icon: "fas fa-laptop-code",
    duration: "Jun 2026 - Present",
    title: "Full-Stack Mobile App & Frontend Web Developer",
    company: "GrowWithNextify",
    description:
      "Developing cross-platform mobile apps using Flutter and frontend web apps using Next.js. Integrating Firebase, Supabase, and RESTful APIs.",
  },
  {
    icon: "fas fa-laptop-code",
    duration: "2024 - May 2026",
    title: "Flutter Developer",
    company: "Xrossapps",
    description:
      "Completed more than 7 mobile apps and websites in these 1 years. Specialized in Flutter development and frontend web solutions.",
  },
  {
    icon: "fas fa-briefcase",
    duration: "Jan 2024 - August 2024",
    title: "Intern Flutter Developer",
    company: "Innovage.io",
    description:
      "Worked on different projects in Flutter and developed my basic understanding in flutter and dart.",
  },
];

export const certifications: TimelineItem[] = [
  {
    icon: "fas fa-certificate",
    duration: "Professional Training",
    title: "Technical Course",
    company: "Punjab Freelance Training Program (PFTP)",
    description:
      "Intensive technical coursework focused on software development methodologies, core programming concepts, and modern IT toolsets.",
  },
  {
    icon: "fas fa-code",
    duration: "Government of Pakistan",
    title: "Certificate of Web Development",
    company: "DigiSkills.pk",
    description:
      "Completed comprehensive training in responsive web application development, frontend architectures, and modern web standards.",
  },
  {
    icon: "fas fa-user-tie",
    duration: "Government of Pakistan",
    title: "Certificate of Freelancing",
    company: "DigiSkills.pk",
    description:
      "Specialized training in remote tech delivery, international freelance marketplaces, client relationship management, and project bidding.",
  },
  {
    icon: "fas fa-pen-nib",
    duration: "Government of Pakistan",
    title: "Certificate of Content Writing",
    company: "DigiSkills.pk",
    description:
      "Certified in technical writing, professional digital communication, documentation, and SEO-optimized content structuring.",
  },
];

export const RESUME_DOWNLOAD_LINK = "/resume/asad_cv.pdf";
