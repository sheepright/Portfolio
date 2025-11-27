"use client";

import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
} from "lucide-react";

interface MediaViewerProps {
  project: {
    video?: string;
    videoEmbed?: string;
    images?: string[];
    title: string;
  };
  selectedMedia: number;
  zoomLevel: number;
  isHovering: boolean;
  isDragging: boolean;
  imagePosition: { x: number; y: number };
  totalMedia: number;
  onPrevMedia: () => void;
  onNextMedia: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onToggleFullZoom: () => void;
  onMouseDown: (e: React.MouseEvent) => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseUp: () => void;
}

export default function MediaViewer({
  project,
  selectedMedia,
  zoomLevel,
  isHovering,
  isDragging,
  imagePosition,
  totalMedia,
  onPrevMedia,
  onNextMedia,
  onZoomIn,
  onZoomOut,
  onToggleFullZoom,
  onMouseDown,
  onMouseMove,
  onMouseUp,
}: MediaViewerProps) {
  const isCurrentMediaImage =
    project.images &&
    project.images[
      selectedMedia - (project.video || project.videoEmbed ? 1 : 0)
    ];

  return (
    <div className="relative bg-slate-950/50 rounded-2xl overflow-hidden mb-4 border border-purple-500/20 group">
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
          className="w-full max-h-[500px] object-contain bg-slate-900/50"
        />
      ) : project.images?.[
          selectedMedia - (project.video || project.videoEmbed ? 1 : 0)
        ] ? (
        <div
          className="relative overflow-hidden"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          <img
            src={
              project.images[
                selectedMedia - (project.video || project.videoEmbed ? 1 : 0)
              ]
            }
            alt={`${project.title} screenshot ${selectedMedia}`}
            className={`w-full max-h-[500px] object-contain bg-slate-900/50 transition-transform duration-200 select-none ${
              zoomLevel > 1
                ? isDragging
                  ? "cursor-grabbing"
                  : "cursor-grab"
                : "cursor-zoom-in"
            }`}
            style={{
              transform: `scale(${zoomLevel}) translate(${
                imagePosition.x / zoomLevel
              }px, ${imagePosition.y / zoomLevel}px)`,
            }}
            onClick={zoomLevel === 1 ? onToggleFullZoom : undefined}
            draggable={false}
          />
        </div>
      ) : null}

      {/* Navigation Arrows */}
      {totalMedia > 1 && (
        <>
          <button
            onClick={onPrevMedia}
            className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
            aria-label="이전 미디어"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onNextMedia}
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
            aria-label="다음 미디어"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Zoom Controls */}
      {isCurrentMediaImage && (
        <div
          className={`absolute bottom-4 right-4 flex gap-2 transition-all ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={onZoomOut}
            disabled={zoomLevel <= 1}
            className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg backdrop-blur-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="축소"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <button
            onClick={onZoomIn}
            disabled={zoomLevel >= 3}
            className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg backdrop-blur-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="확대"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={onToggleFullZoom}
            className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg backdrop-blur-sm transition-all"
            aria-label="전체화면"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Media Counter */}
      {totalMedia > 1 && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full backdrop-blur-sm">
          {selectedMedia + 1} / {totalMedia}
        </div>
      )}
    </div>
  );
}
