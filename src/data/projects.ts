export interface Project {
  name: string;
  codeName: string;
  role: string;
  duration: string;
  teamSize?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    name: "Banking Super App",
    codeName: "Appro",
    role: "Senior Frontend Developer",
    duration: "Aug 2024 – Present",
    teamSize: "80 People",
    description:
      "Enterprise banking system for managing commercial transactions, loyalty points, customer accounts with KYC verification, campaign management, and secure payment solutions.",
    responsibilities: [
      "Analyze technical specifications and communicate directly with clients",
      "Develop services and features using Dynamic Rendering (JSON-driven UI)",
      "Write unit tests with Jest and enforce code quality",
      "Lead code reviews and mentor team members",
      "Refactor and optimize application performance",
    ],
    technologies: ["ReactJS", "TypeScript", "Redux", "Ant Design", "TailwindCSS", "SCSS", "Axios", "Jest", "Bitbucket", "JIRA"],
    highlights: ["Dynamic JSON-based rendering", "KYC verification system", "80-person team", "Bank-grade security"],
  },
  {
    name: "Partner Journey Platform",
    codeName: "Income",
    role: "Senior Full-Stack Developer",
    duration: "Mar 2023 – Aug 2024",
    description:
      "Web and mobile platform to manage partner journeys at scale. Configurable entry points, lead forms, and promotion management — all modifiable without deployments.",
    responsibilities: [
      "Daily work on AWS infrastructure",
      "Develop APIs and integrate with frontend features",
      "Build independent UI component library with Storybook",
      "Develop cross-platform mobile app with React Native + Expo",
      "Write unit tests with Jest and lead code reviews",
    ],
    technologies: ["ReactJS", "NextJS", "TypeScript", "Redux", "React Native", "Expo", "Zustand", "NodeJS", "MySQL", "TypeORM", "Storybook", "ChartJS", "AWS"],
    highlights: ["Cross-platform (Web + Mobile)", "Storybook component library", "No-deploy configuration"],
  },
  {
    name: "Insurance Digital Platform",
    codeName: "FWD-HO",
    role: "Senior Full-Stack Developer",
    duration: "Aug 2022 – Feb 2023",
    description:
      "Digital insurance platform for collecting customer information and managing insurance product sales. Mobile-first responsive design with GraphQL API integration.",
    responsibilities: [
      "Develop APIs and frontend features on Azure DevOps",
      "Build independent UI component library for multi-repo usage",
      "Implement responsive mobile-first to desktop design",
      "Define code structure and architecture patterns",
      "Lead code reviews and propose technical solutions",
    ],
    technologies: ["ReactJS", "NextJS", "GraphQL", "TypeScript", "Redux", "Redux-Saga", "NodeJS", "NestJS", "MongoDB", "MUI", "Storybook", "i18n", "AWS"],
    highlights: ["GraphQL integration", "Mobile-first design", "Multi-repo component library"],
  },
  {
    name: "Blockchain Marketplace",
    codeName: "Spores",
    role: "Senior ReactJS Developer",
    duration: "Dec 2021 – Jul 2022",
    description:
      "Blockchain-powered platform with game store and NFT marketplace, enabling communication between customers and sellers in a decentralized ecosystem.",
    responsibilities: [
      "Develop new features and fix bugs for frontend",
      "Build and maintain APIs with MongoDB",
      "Create common component library",
      "Set up SonarQube for code quality enforcement",
      "Write unit tests and conduct code reviews",
    ],
    technologies: ["ReactJS", "TypeScript", "Redux", "React Query", "Jest", "NodeJS", "MongoDB", "ExpressJS", "Material-UI", "TailwindCSS", "Web3", "Azure DevOps", "SonarQube"],
    highlights: ["Web3 / Blockchain integration", "SonarQube quality gates", "NFT Marketplace"],
  },
];
