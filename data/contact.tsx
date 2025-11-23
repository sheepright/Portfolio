import { Mail, Github } from "lucide-react";
import { SiInstagram, SiNotion } from "react-icons/si";
import type { ContactInfo, SocialLink } from "@/types";

export const contactInfo: ContactInfo = {
  email: "wya00010@gmail.com",
  github: "https://github.com/sheepright",
  linkedin: "https://linkedin.com/in/yourusername",
  instagram: "https://www.instagram.com/a__w_o._.o_/",
  notion:
    "https://granite-curtain-436.notion.site/Sheep_Right-1cee6025497280148ba1fa88f6f82bc0?pvs=74",
  location: "Gunpo, South Korea",
};

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    icon: Mail,
    value: contactInfo.email,
    link: `mailto:${contactInfo.email}`,
    color: "from-purple-500/20 to-pink-500/20",
    hoverColor: "hover:border-purple-400/50",
  },
  {
    name: "GitHub",
    icon: Github,
    value: "github.com/sheepright",
    link: contactInfo.github,
    color: "from-gray-500/20 to-slate-500/20",
    hoverColor: "hover:border-gray-400/50",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    value: "@a__w_o._.o_",
    link: contactInfo.instagram,
    color: "from-pink-500/20 to-rose-500/20",
    hoverColor: "hover:border-pink-400/50",
  },
  {
    name: "Notion",
    icon: SiNotion,
    value: "notion.so/sheep_right",
    link: contactInfo.notion,
    color: "from-slate-500/20 to-gray-500/20",
    hoverColor: "hover:border-slate-400/50",
  },
];
