'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { projectsData, Project } from '@/data/projects';

interface SelectedWorkSectionProps {
  highlightedSlugs?: string[] | null;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({
  highlightedSlugs,
}) => {
  // Get Tier 1 and Tier 2 featured projects: GraphReg (01), QuickDraw (02), CropVision (03)
  const selectedProjects: (Project & { number: string })[] = [
    { ...projectsData.find((p) => p.slug === 'graphreg')!, number: '01' },
    { ...projectsData.find((p) => p.slug === 'quickdraw')!, number: '02' },
    { ...projectsData.find((p) => p.slug === 'cropvision')!, number: '03' },
  ];

  return (
    <div className="space-y-4">
      {selectedProjects.map((project) => {
        const isFlagship = project.tier === 1;
        const isHighlighted =
          highlightedSlugs && highlightedSlugs.includes(project.slug);
        const isMuted =
          highlightedSlugs && highlightedSlugs.length > 0 && !isHighlighted;

        return (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={`block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a4a2e] rounded-lg transition-all duration-200 ${
              isMuted ? 'opacity-40 grayscale-[40%]' : 'opacity-100'
            }`}
          >
            <Card
              variant="interactive"
              className={`p-6 sm:p-8 transition-all duration-200 ${
                isFlagship
                  ? 'border-[#7a4a2e]/40 bg-[#f4ede8]/20 group-hover:border-[#7a4a2e] group-hover:bg-[#f4ede8]/40'
                  : 'group-hover:border-[#b8b0a5]'
              } ${isHighlighted ? 'ring-2 ring-[#7a4a2e] border-[#7a4a2e]' : ''}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Numbering */}
                  <span className="font-mono text-base font-semibold text-[#7a4a2e] tracking-tight pt-1 select-none">
                    {project.number}
                  </span>

                  {/* Project Info */}
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#1a1918] group-hover:text-[#7a4a2e] transition-colors">
                        {project.title}
                      </h3>
                      {isFlagship && (
                        <Badge variant="coffee" size="sm" icon={<Sparkles className="w-3 h-3 text-[#7a4a2e]" />}>
                          Flagship Capstone
                        </Badge>
                      )}
                    </div>

                    <p className="text-base text-[#57524d] font-sans leading-relaxed">
                      {project.tagline}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.slice(0, 5).map((tech) => (
                        <Badge key={tech} variant="stone" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow Navigation Indicator */}
                <div className="self-end sm:self-center shrink-0 flex items-center gap-2 text-sm font-mono font-medium text-[#7a4a2e] group-hover:translate-x-1 transition-transform duration-200">
                  <span className="hidden sm:inline text-xs uppercase tracking-wider text-[#807a75] group-hover:text-[#7a4a2e]">
                    Case Study
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
