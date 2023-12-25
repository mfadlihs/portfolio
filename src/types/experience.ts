export interface ExperienceType {
  id: number;
  timestamp: string;
  title: string;
  company: string;
  linkCompany: string;
  description: string;
  skills: string[];
  projects: { title: string; link: string }[];
  logo: string;
}
