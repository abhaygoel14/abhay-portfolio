export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  links: {
    portfolio: string;
    linkedin: string;
    github: string;
  };
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
}

export interface Project {
  name:string;
  period: string;
  link?: string;
  demoLink?: string;
  description: string;
  tech: string[];
}

export interface Education {
  university: string;
  degree: string;
  period: string;
  location: string;
}

export interface SkillCategory {
    category: string;
    items: string[];
}

export interface CodingProfile {
    name: string;
    handle: string;
    link: string;
}