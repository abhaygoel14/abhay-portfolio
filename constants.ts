import {
  PersonalInfo,
  Experience,
  Project,
  Education,
  SkillCategory,
  CodingProfile,
} from "./types";

export const personalInfo: PersonalInfo = {
  name: "Abhay Goel",
  title: "Software Engineer",
  email: "abhay.goel14@gmail.com",
  phone: "+91 7278069569",
  links: {
    portfolio: "#",
    linkedin: "https://www.linkedin.com/in/abhay-goel14/",
    github: "https://github.com/abhaygoel14",
  },
};

export const experiences: Experience[] = [
  {
    company: "Goldman Sachs",
    role: "Software Engineer II",
    period: "Jan 2026 - Present",
    location: "Bangalore, Karnataka",
    points: [
      "Owns end-to-end delivery of complex features such as Payments and Reporting, from system design and implementation to production rollout and post-release stability.",
      "Proactively identified and resolved technical debt, improving system stability and reducing long-term maintenance overhead.",
      "Played a key role in production support and incident resolution, ensuring high availability of customer-facing applications.",
      "Drove performance and build optimizations, significantly reducing deployment time and improving test execution efficiency.",
    ],
  },
  {
    company: "Goldman Sachs",
    role: "Software Engineer I",
    period: "Sep 2024 - Dec 2025",
    location: "Bangalore, Karnataka",
    points: [
      "Reduced feature deployment time by 30% by implementing a micro-frontend architecture using Webpack.",
      "Reduced E2E test cycle time by over 50% through build optimization and UI component modularization.",
      "Worked on dynamic host container implementation for scalable frontend deployments.",
      "Actively participated in code reviews to improve code quality and team knowledge sharing.",
    ],
  },
  {
    company: "Tata Digital Private Ltd",
    role: "Software Engineer",
    period: "Jun 2023 - Sep 2024",
    location: "Bangalore, Karnataka",
    points: [
      "Developed stateful dynamic UI components for Tata Neu super app using React.js, Next.js, Material UI, and MobX.",
      "Built a high-impact GenAI tool improving marketing content quality and increasing user click rates by 40%.",
      "Implemented JWT-based authorization and integrated OpenAI for content generation.",
      "Optimized Azure OpenAI response latency by 70% using polling mechanisms and Redis caching.",
      "Improved Flutter Web performance, reducing load times from 8s to 3s.",
      "Contributed to a 20% increase in user engagement by implementing anonymous user journeys and tracking events.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Khana Khaza – Food Delivery Web App",
    period: "",
    link: "https://github.com/abhaygoel14/Food-Delivery-Web-App",
    description:
      "Food delivery web application using live Swiggy public APIs for browsing restaurants and menus with search and CRUD operations.",
    tech: ["React.js", "Redux Toolkit", "JavaScript", "CSS"],
  },
  {
    name: "Namma Yatri – Auto Booking Web App",
    demoLink: "https://namma-yatri-blue.vercel.app/homepage",
    link: "https://github.com/abhaygoel14/NammaYatri-Web-App",
    period: "",
    description:
      "Responsive auto-booking web app developed during a hackathon with payment integration and OTP authentication.",
    tech: ["React.js", "Next.js", "TypeScript", "CSS", "InstaMojo API"],
  },
  {
    name: "India Ghumo – Travel Chat Application",
    demoLink: "https://indiaghumochat.web.app/",
    link: "https://github.com/abhaygoel14/IndiaGhumoChat",
    period: "",
    description:
      "Chat-based travel platform enabling 100+ users to connect and plan trips, deployed using Firebase.",
    tech: ["React.js", "Redux", "JavaScript", "Firebase"],
  },
];

export const education: Education = {
  university: "Kalinga Institute of Industrial Technology",
  degree: "B.Tech in Information Technology",
  period: "Jul 2019 - Jul 2023",
  location: "Bhubaneswar, Odisha",
};

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Java", "Kotlin", "C++", "JavaScript", "TypeScript", "Python"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Redux", "Material UI", "CSS"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "GraphQL", "JWT Authentication", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "SonarQube", "Azure", "Git", "AWS"],
  },
  {
    category: "Concepts",
    items: [
      "Micro-Frontend Architecture",
      "Performance Optimization",
      "Clean Architecture",
      "SOLID Principles",
      "RESTful API Design",
      "System Design",
    ],
  },
];

export const achievements: string[] = [
  "Winner of Niyoto Catalyst Hackathon with cash prizes totaling ₹35,000.",
  "IBM Hackathon – Top 500 startups recognition.",
  "Solved 220+ problems on LeetCode with a contest rating of 1551.",
];

export const codingProfiles: CodingProfile[] = [
  {
    name: "LeetCode",
    handle: "abhaygoel14",
    link: "https://leetcode.com/abhaygoel14/",
  },
  {
    name: "CodeChef",
    handle: "abhygoel14",
    link: "https://www.codechef.com/users/abhygoel14",
  },
  {
    name: "Codeforces",
    handle: "abhay.goel14",
    link: "https://codeforces.com/profile/abhay.goel14",
  },
];
