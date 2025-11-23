"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Users } from "lucide-react";
import { personalProjects, teamProjects } from "@/data/projects";
import ProjectSwiper from "./projects/ProjectSwiper";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-5xl font-main text-white mb-3">Projects</h2>
            <p className="text-gray-400 font-sub">
              진행했던 프로젝트들을 소개합니다
            </p>
          </div>

          {/* Personal Projects */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-main text-purple-400">
                개인 프로젝트
              </h3>
            </div>
            <ProjectSwiper
              projects={personalProjects}
              isInView={isInView}
              isTeam={false}
            />
          </div>

          {/* Team Projects */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-main text-purple-400">
                팀 프로젝트
              </h3>
            </div>
            <ProjectSwiper
              projects={teamProjects}
              isInView={isInView}
              isTeam={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
