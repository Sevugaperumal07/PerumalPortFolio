export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
    docs?: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  category: 'Frontend' | 'Backend' | 'Fullstack' | 'DevOps' | 'Machine Learning';
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}
