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
  link: string;
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
