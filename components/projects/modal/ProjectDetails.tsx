"use client";

import type { ProjectDetails as ProjectDetailsType } from "@/types";

interface ProjectDetailsProps {
  details: ProjectDetailsType;
}

export default function ProjectDetails({ details }: ProjectDetailsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-main text-white mb-2">프로젝트 개요</h3>
        <p className="text-gray-300 font-sub leading-relaxed">
          {details.overview}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-main text-white mb-2">주요 기능</h3>
        <ul className="space-y-2">
          {details.features.map((feature, idx) => (
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

      {details.myRole && (
        <div>
          <h3 className="text-lg font-main text-white mb-2">나의 역할</h3>
          <p className="text-gray-300 font-sub leading-relaxed">
            {details.myRole}
          </p>
        </div>
      )}

      <div>
        <h3 className="text-lg font-main text-white mb-2">
          개발 경험 & 학습 내용
        </h3>
        <p className="text-gray-300 font-sub leading-relaxed">
          {details.challenges}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-main text-white mb-2">성과</h3>
        <p className="text-gray-300 font-sub leading-relaxed">
          {details.results}
        </p>
      </div>
    </div>
  );
}
