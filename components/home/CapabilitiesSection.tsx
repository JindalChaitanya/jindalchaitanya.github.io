'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { ChevronRight } from 'lucide-react';

export interface CapabilityCategory {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  relatedProjects: string[];
}

const CAPABILITIES: CapabilityCategory[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description:
      'Building practical machine learning models, deep learning architectures, and production-oriented pipelines.',
    technologies: ['PyTorch', 'TensorFlow', 'Scikit-Learn'],
    relatedProjects: ['graphreg', 'quickdraw', 'cropvision'],
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    description:
      'Object detection, semi-automated annotation tools, dataset preprocessing, and edge deployment.',
    technologies: ['YOLO', 'OpenCV', 'SIFT / FLANN', 'U²-Net', 'ONNX Runtime'],
    relatedProjects: ['quickdraw', 'cropvision', 'ai-cutout-pro'],
  },
  {
    id: 'graphrag-retrieval',
    title: 'GraphRAG & Retrieval',
    description:
      'Combining property knowledge graphs, dense vector search, neural entity extraction, and cross-encoder reranking.',
    technologies: [
      'GraphRAG',
      'Neo4j',
      'Qdrant',
      'BGE-M3',
      'GLiNER',
      'IBM Docling',
    ],
    relatedProjects: ['graphreg'],
  },
  {
    id: 'ml-infra',
    title: 'ML Infrastructure & MLOps',
    description:
      'Containerized deployments, automated data validation pipelines, dataset curation, and reproducible tooling.',
    technologies: ['Docker', 'Kubernetes (CDAC)', 'MLflow', 'Spark', 'Pandas'],
    relatedProjects: ['graphreg', 'cropvision', 'home-lab-private-cloud'],
  },
];

interface CapabilitiesSectionProps {
  onHoverCategory?: (relatedProjectSlugs: string[] | null) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({
  onHoverCategory,
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleCapability = (cap: CapabilityCategory) => {
    if (activeId === cap.id) {
      setActiveId(null);
      onHoverCategory?.(null);
    } else {
      setActiveId(cap.id);
      onHoverCategory?.(cap.relatedProjects);
    }
  };

  return (
    <div className="space-y-1">
      {CAPABILITIES.map((cap, i) => {
        const isActive = activeId === cap.id;

        return (
          <AnimateIn key={cap.id} variant="fadeUp" delay={i * 80}>
            <div
              className={`border-b border-[#1e1e22] transition-all duration-300 ${
                isActive ? 'bg-[#111113]' : ''
              }`}
            >
              {/* Accordion Header */}
              <button
                type="button"
                onClick={() => toggleCapability(cap)}
                onMouseEnter={() => {
                  if (!activeId) onHoverCategory?.(cap.relatedProjects);
                }}
                onMouseLeave={() => {
                  if (!activeId) onHoverCategory?.(null);
                }}
                className="w-full flex items-center justify-between py-5 sm:py-6 px-2 sm:px-4 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a45e] rounded-lg"
                aria-expanded={isActive}
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="text-xs font-mono text-[#6b6966] font-medium w-6 shrink-0">
                    0{i + 1}
                  </span>
                  <h3
                    className={`text-lg sm:text-xl font-serif font-normal transition-colors duration-200 ${
                      isActive
                        ? 'text-[#c8a45e]'
                        : 'text-[#e8e6e3] group-hover:text-[#c8a45e]'
                    }`}
                  >
                    {cap.title}
                  </h3>
                </div>
                <ChevronRight
                  className={`w-4 h-4 text-[#6b6966] transition-transform duration-300 shrink-0 ${
                    isActive ? 'rotate-90 text-[#c8a45e]' : ''
                  }`}
                />
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  isActive ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-2 sm:px-4 pb-5 sm:pb-6 pl-12 sm:pl-14 space-y-3">
                  <p className="text-sm text-[#a3a1a0] leading-relaxed max-w-2xl">
                    {cap.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cap.technologies.map((tech) => (
                      <Badge key={tech} variant="accent" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        );
      })}
    </div>
  );
};
