"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { stats, background } from "@/data/about";

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
                <p className="text-gray-300 font-sub leading-relaxed mb-4">
                  새로운 기술과 아이디어를 프로젝트로 직접 구현하며 성장하는 웹
                  개발자입니다. <br />
                  <span className="text-purple-200">
                    AI 코딩 도구(Kiro, MCP, GPT 등)를 적극 활용
                  </span>
                  하여 개발 시간을 단축하고 반복적인 코드 작성을 효율화하며, 더
                  나은 코드 품질과 생산성을 추구합니다. <br />
                  웹, AI, 백엔드 등 다양한 분야의 프로젝트를 스스로 설계하고
                  완성하는 과정에서 문제를 해결하는 힘과 제품을 만드는 즐거움을
                  경험하고 있습니다.{" "}
                  <span className="text-purple-200">
                    최신 개발 트렌드와 AI 도구
                  </span>
                  를 빠르게 학습하고 적용하며 지속적으로 발전하고 있습니다.
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
                className="flex justify-end items-start -mt-4"
              >
                <div className="w-64 h-64 rounded-full bg-linear-to-br from-purple-500/20 to-white/10 backdrop-blur-sm border-4 border-purple-400/30 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/image/profille.png"
                    alt="Profile"
                    width={256}
                    height={256}
                    className="w-5/6 h-5/6 object-cover rounded-full"
                    priority
                  />
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

          {/* Background Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-main text-white mb-6 text-center">
              Background
            </h3>
            <div className="space-y-6">
              {background.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                >
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <item.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-main text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm font-sub text-gray-300 mb-1">
                      {item.subtitle}
                    </p>
                    <p className="text-xs font-sub text-gray-400">
                      {item.period}
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
