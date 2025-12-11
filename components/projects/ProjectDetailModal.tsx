"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { User, Users } from "lucide-react";
import type { Project } from "@/types";
import MediaViewer from "./modal/MediaViewer";
import ThumbnailNav from "./modal/ThumbnailNav";
import ProjectLinks from "./modal/ProjectLinks";
import ProjectDetails from "./modal/ProjectDetails";
import FullScreenImage from "./modal/FullScreenImage";

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
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  const IconComponent = project?.icon || (isTeam ? Users : User);
  const hasMedia =
    (project?.images && project.images.length > 0) ||
    project?.video ||
    project?.videoEmbed;

  const totalMedia =
    (project?.video || project?.videoEmbed ? 1 : 0) +
    (project?.images?.length || 0);

  // 썸네일 자동 스크롤 - selectedMedia가 변경될 때마다 실행
  useEffect(() => {
    if (thumbnailContainerRef.current && totalMedia > 1) {
      const container = thumbnailContainerRef.current;
      const thumbnailWidth = 104; // w-24 (96px) + gap (8px)
      const scrollPosition = selectedMedia * thumbnailWidth;

      container.scrollTo({
        left: scrollPosition - container.clientWidth / 2 + thumbnailWidth / 2,
        behavior: "smooth",
      });
    }
  }, [selectedMedia, totalMedia]);

  const resetMediaState = () => {
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
  };

  const handlePrevMedia = () => {
    setSelectedMedia((prev) => (prev === 0 ? totalMedia - 1 : prev - 1));
    resetMediaState();
  };

  const handleNextMedia = () => {
    setSelectedMedia((prev) => (prev === totalMedia - 1 ? 0 : prev + 1));
    resetMediaState();
  };

  const handleSelectMedia = (index: number) => {
    setSelectedMedia(index);
    resetMediaState();
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 3));

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const newZoom = Math.max(prev - 0.25, 1);
      if (newZoom === 1) resetMediaState();
      return newZoom;
    });
  };

  const toggleFullZoom = () => {
    setIsZoomed(!isZoomed);
    if (!isZoomed) resetMediaState();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - imagePosition.x,
        y: e.clientY - imagePosition.y,
      });
      e.preventDefault();
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setImagePosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const isCurrentMediaImage =
    project?.images &&
    project.images[
      selectedMedia - (project.video || project.videoEmbed ? 1 : 0)
    ];

  if (!isOpen || !project) return null;

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
          <div
            className="mb-6"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <MediaViewer
              project={project}
              selectedMedia={selectedMedia}
              zoomLevel={zoomLevel}
              isHovering={isHovering}
              isDragging={isDragging}
              imagePosition={imagePosition}
              totalMedia={totalMedia}
              onPrevMedia={handlePrevMedia}
              onNextMedia={handleNextMedia}
              onZoomIn={handleZoomIn}
              onZoomOut={handleZoomOut}
              onToggleFullZoom={toggleFullZoom}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            />
            <ThumbnailNav
              project={project}
              selectedMedia={selectedMedia}
              totalMedia={totalMedia}
              thumbnailContainerRef={thumbnailContainerRef}
              onSelectMedia={handleSelectMedia}
            />
          </div>
        )}

        {/* Full Screen Zoom Modal */}
        <AnimatePresence>
          {isZoomed && isCurrentMediaImage && (
            <FullScreenImage
              src={
                project.images![
                  selectedMedia - (project.video || project.videoEmbed ? 1 : 0)
                ]
              }
              alt={`${project.title} full screen`}
              onClose={toggleFullZoom}
            />
          )}
        </AnimatePresence>

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
        <ProjectLinks
          github={project.github}
          link={project.link}
          figma={project.figma}
          notion={project.notion}
        />

        {/* Tech Stack */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-main text-white">Tech Stack</h3>
            {isTeam && project.myTech && project.myTech.length > 0 && (
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-2 bg-purple-500/40 border border-purple-400/60 rounded-md"></div>
                  <span className="text-purple-300">내가 사용한 기술</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-2 bg-slate-600/40 border border-slate-500/60 rounded-md"></div>
                  <span className="text-slate-300">전체 프로젝트 기술</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => {
              const isMyTech = isTeam ? project.myTech?.includes(tech) : true;
              return (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-full text-sm font-sub border ${
                    isMyTech
                      ? "bg-purple-500/30 text-purple-200 border-purple-400/50"
                      : "bg-slate-600/30 text-slate-300 border-slate-500/40"
                  }`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>

        {/* Details */}
        {project.details && <ProjectDetails details={project.details} />}
      </motion.div>
    </motion.div>
  );
}
