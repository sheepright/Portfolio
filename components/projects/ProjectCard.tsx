import { motion } from "framer-motion";
import { ExternalLink, Github, User, Users } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  idx: number;
  isInView: boolean;
  isTeam?: boolean;
  onClick: () => void;
}

export default function ProjectCard({
  project,
  idx,
  isInView,
  isTeam = false,
  onClick,
}: ProjectCardProps) {
  const IconComponent = project.icon || (isTeam ? Users : User);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      onClick={onClick}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all group cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          {project.iconImage ? (
            <img
              src={project.iconImage}
              alt={`${project.title} icon`}
              className="w-10 h-10 rounded-lg object-cover group-hover:scale-110 transition-transform"
            />
          ) : (
            <IconComponent className="w-10 h-10 text-purple-400 group-hover:scale-110 transition-transform" />
          )}
          <div>
            <h3 className="text-xl font-main text-white">{project.title}</h3>
            <p className="text-xs font-sub text-gray-400">{project.period}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {isTeam && project.team && project.role && (
        <div className="flex gap-4 mb-3 text-sm">
          <span className="text-purple-300 font-main">
            팀원: {project.team}
          </span>
          <span className="text-gray-400">|</span>
          <span className="text-purple-300 font-main">
            역할: {project.role}
          </span>
        </div>
      )}

      <p className="text-gray-300 font-main mb-4 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-purple-500/20 rounded-full text-sm font-sub text-purple-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 text-sm font-main text-purple-400 group-hover:text-purple-300 transition-colors">
        자세히 보기 →
      </div>
    </motion.div>
  );
}
