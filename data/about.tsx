import { User, Users, Code2, GraduationCap, Handshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Stat {
  icon: LucideIcon;
  number: string;
  label: string;
  description: string;
}

export interface BackgroundItem {
  title: string;
  subtitle: string;
  period: string;
  icon: LucideIcon;
}

export const stats: Stat[] = [
  {
    icon: User,
    number: "2",
    label: "PERSONAL PROJECTS",
    description: "개인으로 진행한 프로젝트",
  },
  {
    icon: Users,
    number: "5",
    label: "GROUP PROJECTS",
    description: "팀으로 진행한 프로젝트",
  },
  {
    icon: Code2,
    number: "9",
    label: "SKILLS",
    description: "사용해본 기술스택",
  },
];

export const background: BackgroundItem[] = [
  {
    title: "대림대학교",
    subtitle: "컴퓨터정보학부 응용SW학과",
    period: "2021.03.01 - 2026.02.15",
    icon: GraduationCap,
  },
  {
    title: "군필",
    subtitle: "공군 병장 만기전역",
    period: "2022.01.9 - 2023.10.09",
    icon: Handshake,
  },
  {
    title: "흥진고등학교",
    subtitle: "이공계, 소프트웨어중점반",
    period: "2018.03.01 - 2021.02.15",
    icon: GraduationCap,
  },
];
