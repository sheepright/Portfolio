import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, User, Users } from "lucide-react";
import type { Project } from "@/types";

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  isTeam: boolean;
}

export default function ProjectDetailModal({
  project,
  isOpen,
  onClose,
  isTeam,
}: ProjectDetailModalProps) {
  const [selectedMedia, setSelectedMedia] = useState(0);

  if (!isOpen || !project) return null;

  const IconComponent = project.icon || (isTeam ? Users : User);
  const hasMedia =
    (project.images && project.images.length > 0) ||
    project.video ||
    project.videoEmbed;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-linear-to-br from-slate-800/90 via-purple-900/20 to-slate-800/90 backdrop-blur-2xl rounded-3xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30 shadow-2xl shadow-purple-500/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            {project.iconImage ? (
              <img
                src={project.iconImage}
                alt={`${project.title} icon`}
                className="w-12 h-12 rounded-lg object-cover"
              />
            ) : (
              <IconComponent className="w-12 h-12 text-purple-400" />
            )}
            <div>
              <h2 className="text-3xl font-main text-white mb-1">
                {project.title}
              </h2>
              <p className="text-sm font-sub text-gray-400">{project.period}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Media Gallery */}
        {hasMedia && (
          <div className="mb-6">
            <div className="bg-slate-950/50 rounded-2xl overflow-hidden mb-4 border border-purple-500/20">
              {project.videoEmbed && selectedMedia === 0 ? (
                <div className="aspect-video">
                  <iframe
                    src={project.videoEmbed}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : project.video && selectedMedia === 0 ? (
                <video
                  src={project.video}
                  controls
                  className="w-full aspect-video object-cover"
                />
              ) : project.images?.[
                  selectedMedia - (project.video || project.videoEmbed ? 1 : 0)
                ] ? (
                <img
                  src={
                    project.images[
                      selectedMedia -
                        (project.video || project.videoEmbed ? 1 : 0)
                    ]
                  }
                  alt={`${project.title} screenshot ${selectedMedia}`}
                  className="w-full aspect-video object-cover"
                />
              ) : null}
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {(project.video || project.videoEmbed) && (
                <button
                  onClick={() => setSelectedMedia(0)}
                  className={`shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedMedia === 0
                      ? "border-purple-400 shadow-lg shadow-purple-400/50"
                      : "border-slate-600/50 hover:border-purple-400/50"
                  }`}
                >
                  <div className="w-full h-full bg-slate-800/80 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </button>
              )}
              {project.images?.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    setSelectedMedia(
                      idx + (project.video || project.videoEmbed ? 1 : 0)
                    )
                  }
                  className={`shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedMedia ===
                    idx + (project.video || project.videoEmbed ? 1 : 0)
                      ? "border-purple-400 shadow-lg shadow-purple-400/50"
                      : "border-slate-600/50 hover:border-purple-400/50"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Team Info */}
        {isTeam && project.team && project.role && (
          <div className="flex gap-6 mb-6 text-sm">
            <div>
              <span className="text-gray-400 font-main">팀원: </span>
              <span className="text-purple-300 font-main">{project.team}</span>
            </div>
            <div>
              <span className="text-gray-400 font-main">역할: </span>
              <span className="text-purple-300 font-main">{project.role}</span>
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex gap-3 mb-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-lg text-gray-200 font-main hover:text-white hover:bg-slate-600/50 transition-all border border-slate-600/50"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-purple-500/30 rounded-lg text-purple-200 font-main hover:bg-purple-500/40 transition-all border border-purple-400/50"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h3 className="text-lg font-main text-white mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-purple-500/30 rounded-full text-sm font-sub text-purple-200 border border-purple-400/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Details */}
        {project.details && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-main text-white mb-2">
                프로젝트 개요
              </h3>
              <p className="text-gray-300 font-sub leading-relaxed">
                {project.details.overview}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-main text-white mb-2">주요 기능</h3>
              <ul className="space-y-2">
                {project.details.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 font-sub text-gray-300"
                  >
                    <span className="text-purple-400 font-sub mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {project.details.myRole && (
              <div>
                <h3 className="text-lg font-main text-white mb-2">나의 역할</h3>
                <p className="text-gray-300 font-sub leading-relaxed">
                  {project.details.myRole}
                </p>
              </div>
            )}

            <div>
              <h3 className="text-lg font-main text-white mb-2">기술적 도전</h3>
              <p className="text-gray-300 font-sub leading-relaxed">
                {project.details.challenges}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-main text-white mb-2">성과</h3>
              <p className="text-gray-300 font-sub leading-relaxed">
                {project.details.results}
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
