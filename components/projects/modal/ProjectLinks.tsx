"use client";

import { Github, Video, Figma } from "lucide-react";

interface ProjectLinksProps {
  github: string;
  link?: string;
  figma?: string;
}

export default function ProjectLinks({
  github,
  link,
  figma,
}: ProjectLinksProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-lg text-gray-200 font-main hover:text-white hover:bg-slate-600/50 transition-all border border-slate-600/50"
      >
        <Github className="w-4 h-4" />
        GitHub
      </a>
      {figma && (
        <a
          href={figma}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-pink-500/30 rounded-lg text-pink-200 font-main hover:bg-pink-500/40 transition-all border border-pink-400/50"
        >
          <Figma className="w-4 h-4" />
          Figma
        </a>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-purple-500/30 rounded-lg text-purple-200 font-main hover:bg-purple-500/40 transition-all border border-purple-400/50"
        >
          <Video className="w-4 h-4" />
          관련 영상
        </a>
      )}
    </div>
  );
}
