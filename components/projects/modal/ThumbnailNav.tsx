"use client";

import { RefObject } from "react";

interface ThumbnailNavProps {
  project: {
    video?: string;
    videoEmbed?: string;
    images?: string[];
  };
  selectedMedia: number;
  totalMedia: number;
  thumbnailContainerRef: RefObject<HTMLDivElement | null>;
  onSelectMedia: (index: number) => void;
}

export default function ThumbnailNav({
  project,
  selectedMedia,
  totalMedia,
  thumbnailContainerRef,
  onSelectMedia,
}: ThumbnailNavProps) {
  if (totalMedia <= 1) return null;

  return (
    <div className="relative">
      <div
        ref={thumbnailContainerRef}
        className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-slate-800/50 scroll-smooth"
      >
        {(project.video || project.videoEmbed) && (
          <button
            onClick={() => onSelectMedia(0)}
            className={`shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
              selectedMedia === 0
                ? "border-purple-400 shadow-md shadow-purple-400/30 scale-[1.02]"
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
              onSelectMedia(idx + (project.video || project.videoEmbed ? 1 : 0))
            }
            className={`shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
              selectedMedia ===
              idx + (project.video || project.videoEmbed ? 1 : 0)
                ? "border-purple-400 shadow-md shadow-purple-400/30 scale-[1.02]"
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
  );
}
