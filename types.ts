
export interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
}

export interface Certificate {
  title: string;
  issuer?: string;
}
