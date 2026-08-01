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
  { name: "Flutter", percentage: 85, cssClass: "html" },
  { name: "Dart", percentage: 80, cssClass: "css" },
  { name: "Next.js", percentage: 75, cssClass: "js" },
  { name: "JavaScript", percentage: 70, cssClass: "react" },
  { name: "Firebase", percentage: 80, cssClass: "node" },
  { name: "Supabase", percentage: 75, cssClass: "python" },
];

export const stats: StatItem[] = [
  { value: "7+", label: "Projects\nCompleted" },
  { value: "2+", label: "Years of\nProgramming experience" },
  { value: "1+", label: "Years of\nSoftware Industry" },
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

export const RESUME_DOWNLOAD_LINK = "/resume/asad_cv.pdf";
