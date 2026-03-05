export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: "github" | "linkedin" | "email";
  url: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  titles: string[];
  bio: string;
  completeBio: string;
  email: string;
  socialLinks: SocialLink[];
}

export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export interface Achievement {
  label: string;
  value: string;
  icon: string;
  description?: string;
}

export interface Certification {
  name: string;
  organization: string;
  date: string;
  thumbnail: string;
  url: string;
}

export interface ProjectLink {
  text: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: ProjectLink[];
}

export interface BlogPost {
  title: string;
  description: string;
  type: string;
  image: string;
  link: string;
}

export interface Video {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  category: string;
}
