import { Palette, Cloud, Gamepad2, Kanban } from "lucide-react";
import type { Project } from "@/types";

export const personalProjects: Project[] = [
  {
    title: "포트폴리오 웹사이트",
    description: "코딩 공부를 하면 진행한 프로젝트 등을 기록한 웹사이트",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Versel"],
    link: "https://portfolio.com",
    github: "https://github.com/sheepright/Portfolio",
    period: "2025.10 - 2025.10",
    iconImage: "/projects/portfolio/portfolio.png",
    // 이미지 추가 (선택사항) - public 폴더에 이미지를 넣고 경로 지정
    // images: [
    //   "/projects/portfolio-1.png",
    //   "/projects/portfolio-2.png",
    //   "/projects/portfolio-3.png",
    // ],
    // video: "/projects/portfolio-demo.mp4",
    // 또는 YouTube/Vimeo 임베드 URL (선택사항)
    // videoEmbed: "https://youtu.be/6Ol1s1Hj76k?si=mdhSel2j97zKd74F&t=281",
    details: {
      overview:
        "개인 포트폴리오 웹사이트를 제작하여 프로젝트와 기술 스택을 소개",
      features: [
        "간단한 소개",
        "공부중인 기술스택과 사용해본 기술스택 등을 소개",
        "진행한 다양한 프로젝트 소개",
      ],
      challenges:
        "애니메이션 등을 많이 활요한 특히 Framer 라이브러리를 통해 새로운 경험을 해봄",
      results: "다양한 사용자에게 개발이력을 소개할 수 있음",
    },
  },
  {
    title: "항공이",
    description:
      "인천공항을 입.출입하는 항공정보와 실시간 환율 정보를 제공하는 Discord Bot",
    tech: ["Spring", "JDA"],
    link: "https://weather-app.com",
    github: "https://github.com/sheepright/Mentoring_AirportBot",
    period: "2024.06 - 2024.07",
    iconImage: "/projects/airport/airport.png",
    details: {
      overview:
        "디스코드 봇을 통하여 명령어로 간단하게 입출국 정보 조회 및 환율 조회가 가능한 서비스",
      features: [
        "공공데이터포털 데이터를 통해 인천공항 입출국 데이터를 조회하여 가공 후 제공",
        "공공데이터포털 데이터를 통해 환율 데이터를 조회하여 가공 후 제공",
        "간단한 명령어를 통해 사용자는 손쉽게 데이터 제공 받음",
      ],
      challenges: "Spring을 통한 첫 Backend 프로젝트",
      results: "공공데이터포털 등의 API를 가공하고 사용할 수 있게 됨",
    },
  },
];

export const teamProjects: Project[] = [
  {
    title: "Zombilder",
    description:
      "Zomboid 게임의 직업, 특성 맞춤형 설정 페이지 및 게임 데이터 공유 페이지",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "MySQL", "Azure", "Figma"],
    link: "https://youtu.be/6Ol1s1Hj76k?si=mdhSel2j97zKd74F&t=281",
    github: "https://github.com/kgw-coding/ZomBuilder-frontend",
    period: "2024.10 - 2024.11.30",
    team: "4명",
    role: "Frontend, Web Designer",
    iconImage: "/projects/zombilder/zombilder.png",
    details: {
      overview:
        "Project Zomboid 게임 플레이어를 위한 캐릭터 빌드 공유 및 최적화 플랫폼입니다.",
      features: ["직업 및 특성 조합 시뮬레이터", "커뮤니티 빌드 공유 시스템"],
      challenges:
        "다양한 모드 조합과 API 미제공으로 게임 데이터를 분해하여 직업과 특성 정보를 확인하여 DB화 시켜서 직접 사용하였습니다.",
      results:
        "SEO 설정과 커뮤니티 홍보 등을 통하여 누적 접속자 100명 이상과 구글, 네이버 등 검색 포털의 상단의 표시",
      myRole: "전체적인 웹 디자인, Frontend 협업 개발, API 연동",
    },
  },
  {
    title: "Typonic",
    description:
      "기존의 지루한 타자연습과 다르게 웹을 통한 쉽고 재밌는 간편한 타자 연습페이지",
    tech: ["Next.js", "Tailwind CSS", "Spring", "MySQL", "GCP", "Figma"],
    link: "https://project-tool.com",
    github: "https://github.com/sheepright/Typonic-Front",
    period: "2025.04 - 2025.06",
    team: "4명",
    role: "Full Stack, Web Designer",
    iconImage: "/projects/typonic/typonic.png",
    details: {
      overview:
        "코딩과 관련된 단어와 문장 그리고 커스텀 연습을 제공하며 배의 등급으로 자신의 등급을 나타내 등급 제공 및 실시간 랭킹 제공",
      features: [
        "OpenAI API를 통해 코딩과 관련된 단어 및 문장 생성",
        "타자 등급을 통한 랭킹시스템",
        "실시간 타자 연습 그래프 표시",
      ],
      challenges:
        "첫 배포 도전으로 GCP 무료 크레딧을 통해 서버 배포 성공하여 실제 1~2달여간 운영",
      results:
        "대학교내에서 에브리타임 등을 이용하여 약 1달 동안 랭킹 이벤트 진행, 다양한 버그들과 실제 운영하며 겪는 여러 문제점들을 경험 및 수정",
      myRole:
        "전체적인 웹 디자인 ,프로젝트의 전반적인 설계, Frontend 일부 개발, Backend 개발, DB 설계 및 배포",
    },
  },
  {
    title: "OurVillage",
    description: "우리 동네의 정보를 AI를 통해서 제공받을 수 있는 서비스",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Nest.js",
      "MySQL(RDS)",
      "AWS",
      "Doker",
      "Vercel",
      "Figma",
    ],
    link: "https://project-tool.com",
    github: "https://github.com/CMU02/ourVillage",
    period: "2025.08.21 - 2025.08.23",
    team: "3명",
    role: "Frontend, Web Designer",
    iconImage: "/projects/ourVillage/ourVillage.png",
    details: {
      overview:
        "우리 동네의 버스 데이터 정보, 지역화폐 사용처 등을 지도에서 조회할 수 있으며 챗봇을 통하여 지역 내 궁금점 질의가능",
      features: [
        "OpenAI API를 통해 챗봇 서비스 제공",
        "공공데이터포털의 버스 데이터를 통한 실시간 버스 데이터 제공",
        "공공데이터포털의 지역화폐 사용처 정보를 통한 데이터 제공",
        "KakaoMap API를 통해 지도 상에서 쉽게 데이터 표시",
      ],
      challenges: "짧은 시간동안 많은 양의 개발을 진행",
      results:
        "첫 해커톤 경험으로 이틀이라는 짧은 시간동안 팀원들과 협업하여 시간을 나눠 개발하며 많은 경험을 쌓음",
      myRole: "전체적인 웹 디자인, Frontend Compont 개발",
    },
  },
  {
    title: "Study, Swipe",
    description: "AI 설문을 통한 자신에게 맞는 스터티 메이터 매칭 어플",
    tech: ["ReactNative", "Expo", "Nest.js", "PostgreSQL", "AWS", "Figma"],
    link: "https://project-tool.com",
    github: "https://github.com/CMU02/Study-Swipe-FE",
    period: "2025.08.25 - 2025.10",
    team: "4명",
    role: "Frontend, APP Designer",
    iconImage: "/projects/studySwipe/studySwipe.png",
    details: {
      overview:
        "설문조사를 통해 자신에게 맞는 스터디 메이터를 매칭시켜 스와이프 형식으로 추천하여 사용자와 매칭",
      features: [
        "OpenAI API를 통해 사용자의 학습 수준을 파악",
        "설문조사의 각 항목당 내부 점수를 매겨 각 항목별 점수를 분류하여 매칭 로직 계산",
        "사용자가 편리하게 사용할 수 있도록 UI/UX 개선",
      ],
      challenges:
        "PlayStore 배포를 목적으로 개발을 진행했으나 사용자 유치 등의 문제로 실패",
      results: "첫 APP 개발로 React Native를 활용한 개발 등에 많은 경험을 쌓음",
      myRole: "전체적인 웹 디자인, Frontend Compont 개발",
    },
  },
  {
    title: "MonoGlyph",
    description: "AI 통한 자신이 원하는 맞춤형 폰트를 제작",
    tech: [
      "Python",
      "Next.js",
      "Tailwind CSS",
      "Spring",
      "MySQL",
      "AWS",
      "Figma",
    ],
    link: "https://youtu.be/NnAXeprRV0w?si=C5Ea7QsABFEtK-13",
    github: "https://github.com/sheepright/MonoGlyph",
    period: "2025.04 - 2025.11",
    team: "3명",
    role: "총괄 (중점: AI 개발, Web Designer)",
    iconImage: "/projects/monoGlyph/monoGlyph.png",
    details: {
      overview:
        "사용자가 원하는 스타일의 폰트를 손쉽게 스타일 입력만으로 생성할 수 있는 서비스",
      features: [
        "OpenAI API(Image-1 Model)를 통해 사용자가 입력한 스타일의 대표 글자 이미지 생성 ('ㄱ~ㅎ','ㅏ' 조합 14개)",
        "사전 학습시킨 딥러닝 모델을 통하여 2.780자의 자주 사용하는 자음, 모음 조합 이미지 생성",
        "FontForge 라이브러리를 통해 이미지의 백터 값을 추출하여 TTF 파일로 변환",
        "해당 과정을 log로 DB화 시켜 데이터 관리",
        "사용자가 이용하기 쉽도록 UI/UX를 만들어 웹 형식으로 이용가능하도록 제작",
      ],
      challenges:
        "OpenAI API와 기존의 있던 오픈 소스를 활용하여 모델을 학습시키고 활용했지만 직접 데이터를 수집하고 학습시키며 AI가 많이 활용되고 사용되는 시점에 많은 경험을 쌓음",
      results: "한이음 드림업 공모전 출품, 장려상 수상 | 교내 공모전 출품",
      myRole: "AI 개발, 웹 디자인 및 총괄",
    },
  },
];
