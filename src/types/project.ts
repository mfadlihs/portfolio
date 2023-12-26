export interface ProjectType {
  id: number;
  timestamp: string;
  title: string;
  description: string;
  thumbnail: string;
  skills: string[];
  link: string;
  github?: string;
  subtitle?: string;
}
