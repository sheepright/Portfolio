import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";
import type { Project } from "@/types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ProjectSwiperProps {
  projects: Project[];
  isInView: boolean;
  isTeam?: boolean;
}

export default function ProjectSwiper({
  projects,
  isInView,
  isTeam = false,
}: ProjectSwiperProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (projects.length === 0) return null;

  // 3개 미만이면 그리드로 표시
  if (projects.length < 3) {
    return (
      <>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.title}
              project={project}
              idx={idx}
              isInView={isInView}
              isTeam={isTeam}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        <ProjectDetailModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          isTeam={isTeam}
        />
      </>
    );
  }

  // 3개 이상이면 스와이퍼로 표시
  return (
    <>
      <div className="relative">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="pb-12"
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={project.title}>
              <ProjectCard
                project={project}
                idx={idx}
                isInView={isInView}
                isTeam={isTeam}
                onClick={() => setSelectedProject(project)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onMouseEnter={() => {
                const swiperElement = document.querySelector(".swiper") as any;
                if (swiperElement?.swiper) {
                  swiperElement.swiper.slideTo(idx);
                }
              }}
              onClick={() => {
                const swiperElement = document.querySelector(".swiper") as any;
                if (swiperElement?.swiper) {
                  swiperElement.swiper.slideTo(idx);
                }
              }}
              className={`h-2 rounded-full transition-all ${
                activeIndex === idx
                  ? "w-8 bg-purple-400"
                  : "w-2 bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        isTeam={isTeam}
      />
    </>
  );
}
