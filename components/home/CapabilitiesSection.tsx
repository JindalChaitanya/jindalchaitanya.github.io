'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export interface CapabilityCategory {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  relatedProjects: string[]; // Project slugs or names
}

const CAPABILITIES: CapabilityCategory[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Building practical machine learning models, deep learning architectures, and production-oriented pipelines.',
    technologies: ['PyTorch', 'TensorFlow', 'Scikit-Learn'],
    relatedProjects: ['graphreg', 'quickdraw', 'cropvision'],
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    description: 'Object detection, semi-automated annotation tools, dataset preprocessing, and edge deployment.',
    technologies: ['YOLO', 'OpenCV', 'SIFT / FLANN', 'U²-Net', 'ONNX Runtime'],
    relatedProjects: ['quickdraw', 'cropvision', 'ai-cutout-pro'],
  },
  {
    id: 'graphrag-retrieval',
    title: 'GraphRAG & Retrieval',
    description: 'Combining property knowledge graphs, dense vector search, neural entity extraction, and cross-encoder reranking.',
    technologies: ['GraphRAG', 'Neo4j', 'Qdrant', 'BGE-M3', 'GLiNER', 'IBM Docling'],
    relatedProjects: ['graphreg'],
  },
  {
    id: 'ml-infra',
    title: 'ML Infrastructure & MLOps',
    description: 'Containerized deployments, automated data validation pipelines, dataset curation, and reproducible tooling.',
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

  const handleMouseEnter = (cap: CapabilityCategory) => {
    setActiveId(cap.id);
    if (onHoverCategory) {
      onHoverCategory(cap.relatedProjects);
    }
  };

  const handleMouseLeave = () => {
    setActiveId(null);
    if (onHoverCategory) {
      onHoverCategory(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CAPABILITIES.map((cap) => {
          const isHovered = activeId === cap.id;
          const isMuted = activeId !== null && !isHovered;

          return (
            <div
              key={cap.id}
              onMouseEnter={() => handleMouseEnter(cap)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleMouseEnter(cap)}
              onBlur={handleMouseLeave}
              tabIndex={0}
              aria-label={`${cap.title} capabilities`}
              className={`rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a4a2e] ${
                isMuted ? 'opacity-50 grayscale-[30%]' : 'opacity-100'
              }`}
            >
              <Card
                variant="interactive"
                className={`p-6 space-y-3 h-full transition-all duration-200 ${
                  isHovered ? 'border-[#7a4a2e] bg-[#f4ede8]/30 shadow-sm' : ''
                }`}
              >
                <div className="space-y-1">
                  <div className="text-xs font-mono text-[#7a4a2e] font-medium uppercase tracking-wider">
                    // Capability
                  </div>
                  <h3 className="text-xl font-serif font-normal text-[#1a1918]">
                    {cap.title}
                  </h3>
                </div>

                <p className="text-sm text-[#57524d] leading-relaxed">
                  {cap.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {cap.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant={isHovered ? 'coffee' : 'stone'}
                      size="sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
