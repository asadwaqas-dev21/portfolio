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
  { name: "Flutter", percentage: 70, cssClass: "html" },
  { name: "Dart", percentage: 75, cssClass: "css" },
  { name: "C++", percentage: 65, cssClass: "js" },
  { name: "JavaScript", percentage: 70, cssClass: "react" },
  { name: "JAVA", percentage: 70, cssClass: "node" },
  { name: "Python", percentage: 67, cssClass: "python" },
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
];

export const career: TimelineItem[] = [
  {
    icon: "fas fa-laptop-code",
    duration: "2024 - Present",
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
