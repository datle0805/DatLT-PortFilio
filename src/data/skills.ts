export interface Skill {
  name: string;
  proficiency: number; // 1-5
  years: number;
  category: string;
}

export const skills: Skill[] = [
  // Programming Languages & Frameworks
  { name: "ReactJS", proficiency: 4, years: 5, category: "Frontend" },
  { name: "NextJS", proficiency: 4, years: 4, category: "Frontend" },
  { name: "TypeScript", proficiency: 4, years: 5, category: "Language" },
  { name: "JavaScript", proficiency: 4, years: 6, category: "Language" },
  { name: "React Native", proficiency: 3, years: 1, category: "Mobile" },
  { name: "Redux / Zustand", proficiency: 4, years: 5, category: "State Management" },
  { name: "NodeJS", proficiency: 3, years: 2, category: "Backend" },
  { name: "ExpressJS", proficiency: 3, years: 2, category: "Backend" },
  { name: "RESTful APIs", proficiency: 4, years: 5, category: "Backend" },
  { name: "MongoDB", proficiency: 3, years: 2, category: "Database" },
  { name: "MySQL", proficiency: 3, years: 2, category: "Database" },
  { name: "Microservices", proficiency: 3, years: 3, category: "Architecture" },
  { name: "Mono Repo", proficiency: 4, years: 4, category: "Architecture" },

  // CSS & UI Libraries
  { name: "TailwindCSS", proficiency: 4, years: 3, category: "Styling" },
  { name: "Material-UI", proficiency: 3, years: 3, category: "Styling" },
  { name: "Ant Design", proficiency: 3, years: 2, category: "Styling" },
  { name: "SCSS/SASS", proficiency: 4, years: 4, category: "Styling" },
  { name: "Styled Components", proficiency: 3, years: 3, category: "Styling" },

  // Tools
  { name: "Git", proficiency: 4, years: 5, category: "DevTools" },
  { name: "AWS", proficiency: 3, years: 3, category: "Cloud" },
  { name: "Jest", proficiency: 3, years: 3, category: "Testing" },
  { name: "Agile / Scrum", proficiency: 4, years: 4, category: "Process" },
];

export const skillCategories = [
  "Frontend",
  "Language",
  "Backend",
  "Database",
  "Architecture",
  "Styling",
  "DevTools",
  "Cloud",
  "Testing",
  "Process",
  "Mobile",
  "State Management",
];
