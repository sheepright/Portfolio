import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

// Skill Types
export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  iconColor: string;
  category: "Language" | "Frontend" | "Backend" | "DevTool";
}

// Project Types
export interface ProjectDetails {
  overview: string;
  features: string[];
  challenges: string;
  results: string;
  myRole?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  myTech?: string[]; // 내가 직접 사용한 기술 스택
  link?: string;
  github: string;
  period: string;
  icon?: LucideIcon;
  iconImage?: string;
  images?: string[];
  video?: string;
  videoEmbed?: string;
  details?: ProjectDetails;
  team?: string;
  role?: string;
  figma?: string;
  notion?: string;
}

// Contact Types
export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  notion: string;
  location: string;
}

export interface SocialLink {
  name: string;
  icon: LucideIcon | IconType;
  value: string;
  link: string;
  color: string;
  hoverColor: string;
}
