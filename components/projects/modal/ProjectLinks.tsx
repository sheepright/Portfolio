"use client";

import { Github, Video } from "lucide-react";
import { SiNotion, SiFigma } from "react-icons/si";

interface ProjectLinksProps {
  github: string;
  link?: string;
  figma?: string;
  notion?: string;
}

export default function ProjectLinks({
  github,
  link,
  figma,
  notion,
}: ProjectLinksProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-gray-700/40 rounded-lg text-gray-200 font-main hover:text-white hover:bg-gray-600/50 transition-all border border-gray-600/40"
      >
        <Github className="w-4 h-4" />
        GitHub
      </a>
      {figma && (
        <a
          href={figma}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-700/40 rounded-lg text-gray-200 font-main hover:text-white hover:bg-gray-600/50 transition-all border border-gray-600/40"
        >
          <SiFigma className="w-4 h-4" />
          Figma
        </a>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-700/40 rounded-lg text-gray-200 font-main hover:text-white hover:bg-gray-600/50 transition-all border border-gray-600/40"
        >
          <Video className="w-4 h-4" />
          관련 영상
        </a>
      )}
      {notion && (
        <a
          href={notion}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-700/40 rounded-lg text-gray-200 font-main hover:text-white hover:bg-gray-600/50 transition-all border border-gray-600/40"
        >
          <SiNotion className="w-4 h-4" />
          Notion
        </a>
      )}
    </div>
  );
}
