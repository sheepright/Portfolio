"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Marquee from "react-fast-marquee";
import { mainSkills, experiencedSkills } from "@/data/skills";

const SkillMarquee = ({
  skills,
  direction = "left",
}: {
  skills: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    iconColor: string;
    category: string;
  }[];
  direction?: "left" | "right";
}) => {
  // 카테고리별로 그룹화
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="py-8">
      <Marquee
        direction={direction}
        speed={80}
        gradient={false}
        pauseOnHover={true}
        loop={0}
        play={true}
      >
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="px-3 py-4">
            <motion.div
              className="group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all">
                <h4 className="text-sm font-main text-purple-400 mb-4 text-center">
                  {category}
                </h4>
                <div className="flex gap-4">
                  {categorySkills.map((skill, idx) => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={idx} className="flex flex-col items-center">
                        <div
                          className={`w-20 h-20 rounded-full bg-linear-to-br ${skill.color} backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:border-purple-400/50 transition-all shadow-lg mb-2`}
                        >
                          <IconComponent
                            className={`text-4xl ${skill.iconColor} group-hover:scale-110 transition-transform`}
                          />
                        </div>
                        <p className="text-sm text-white font-sub text-center">
                          {skill.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16 px-4">
            <h2 className="text-5xl font-main text-white mb-3">
              TECHNOLOGIES I HAVE WORKED WITH
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </div>

          <div className="space-y-12">
            {/* Main Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="mb-6 text-center px-4">
                <h3 className="text-2xl font-main text-purple-400 mb-2">
                  📌 Main Stack
                </h3>
                <p className="text-gray-400 font-sub text-sm">
                  집중적으로 공부하고 사용하는 기술
                </p>
              </div>
              <SkillMarquee skills={mainSkills} direction="left" />
            </motion.div>

            {/* Experienced Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="mb-6 text-center px-4">
                <h3 className="text-2xl font-main text-purple-400 mb-2">
                  ✨ Experienced
                </h3>
                <p className="text-gray-400 font-sub text-sm">
                  경험해보고 사용해본 기술
                </p>
              </div>
              <SkillMarquee skills={experiencedSkills} direction="right" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
