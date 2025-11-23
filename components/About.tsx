"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Folder, Award, Briefcase, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: Folder,
    number: "2",
    label: "PERSNAL PROJECTS",
    description: "개인으로 진행한 프로젝트",
  },
  {
    icon: Award,
    number: "8",
    label: "GROUP PROJECTS",
    description: "팀으로 진행한 프로젝트",
  },
  {
    icon: Briefcase,
    number: "5",
    label: "SKILLS",
    description: "사용해본 기술스택",
  },
];

const education = [
  {
    school: "대림대학교",
    degree: "컴퓨터정보학부 응용SW학과",
    period: "2021.03.01 - 2026.02.15",
  },
  {
    school: "흥진고등학교",
    degree: "이공계, 소프트웨어중점반",
    period: "2018.03.01 - 2021.02.15",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-main text-purple-400 mb-2">
              About Me
            </h2>
            <p className="text-gray-400 text-2l font-main">
              👨🏻‍💻 저를 소개합니다.
            </p>
          </div>

          <div className="mb-5">
            {/* Main Content */}
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              {/* Left: Introduction */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ delay: 0.2, duration: 0.6 }}
                className="lg:col-span-2"
              >
                <h3 className="text-3xl font-main text-white mb-4">
                  Hello, I'm
                  <br />
                  <span className="text-gray-300">양우</span>
                </h3>
                <p className="text-gray-300 font-sub  leading-relaxed mb-4">
                  새로운 기술과 아이디어를 프로젝트로 직접 구현하며 성장하는 웹
                  개발자입니다. <br /> 웹, AI, 백엔드 등 다양한 분야의
                  프로젝트를 스스로 설계하고 완성하는 과정 속에서 문제를
                  해결하는 힘과 제품을 만드는 즐거움을 경험하고 있습니다. 기술적
                  도전을 두려워하지 않고, 다양한 AI 기술과 서비스를 적용해보며
                  빠르게 변화하는 환경 속에서 지속적으로 발전하고 있습니다.
                </p>
              </motion.div>

              {/* Right: Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex justify-center items-start"
              >
                <div className="w-48 h-48 rounded-full bg-linear-to-br from-purple-500/20 to-white/10 backdrop-blur-sm border-4 border-purple-400/30 flex items-center justify-center overflow-hidden">
                  <span className="text-6xl">🐑</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
                className="bg-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <stat.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-4xl font-main text-white">
                    {stat.number}
                  </span>
                </div>
                <h4 className="text-xs font-main text-purple-300 mb-1">
                  {stat.label}
                </h4>
                <p className="text-xs font-sub text-gray-300">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-main text-white mb-6 text-center">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                >
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-main text-white">
                      {edu.school}
                    </h4>
                    <p className="text-sm font-sub text-gray-300 mb-1">
                      {edu.degree}
                    </p>
                    <p className="text-xs font-sub text-gray-400">
                      {edu.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
