'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { projectsData, Project } from '@/data/projects';

interface SelectedWorkSectionProps {
  highlightedSlugs?: string[] | null;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({
  highlightedSlugs,
}) => {
  const selectedProjects: Project[] = [
    projectsData.find((p) => p.slug === 'graphreg')!,
    projectsData.find((p) => p.slug === 'quickdraw')!,
    projectsData.find((p) => p.slug === 'cropvision')!,
  ];

  return (
    <div className="space-y-6">
      {selectedProjects.map((project, i) => {
        const isFlagship = project.tier === 1;
        const isHighlighted =
          highlightedSlugs && highlightedSlugs.includes(project.slug);
        const isMuted =
          highlightedSlugs && highlightedSlugs.length > 0 && !isHighlighted;

        return (
          <AnimateIn key={project.slug} variant="fadeUp" delay={i * 80}>
            <Link
              href={`/projects/${project.slug}`}
              className={`block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c6d46] rounded-xl transition-all duration-300 ${
                isMuted ? 'opacity-40' : 'opacity-100'
              }`}
            >
              <Card
                variant={isFlagship ? 'interactive' : 'default'}
                className={`p-6 sm:p-8 transition-all duration-200 ${
                  isFlagship
                    ? 'border-[rgba(140,109,70,0.3)] bg-[#ffffff] shadow-[0_2px_12px_rgba(26,25,23,0.04)] group-hover:border-[#8c6d46]'
                    : 'border-[#e6e2da] bg-[#ffffff] group-hover:border-[#c9c4b7]'
                } ${
                  isHighlighted ? 'ring-1 ring-[#8c6d46] border-[#8c6d46]' : ''
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-3 flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#1a1917] group-hover:text-[#8c6d46] transition-colors">
                        {project.title}
                      </h3>
                      {isFlagship && (
                        <Badge
                          variant="accent"
                          size="sm"
                          icon={<Sparkles className="w-3 h-3 text-[#8c6d46]" />}
                        >
                          Flagship Capstone
                        </Badge>
                      )}
                      <span className="text-xs font-sans text-[#6e6a62]">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-[#1a1917] font-sans font-medium">
                      {project.tagline}
                    </p>

                    <p className="text-sm text-[#57544e] font-sans leading-relaxed max-w-3xl">
                      {project.description}
                    </p>

                    {/* Metrics preview */}
                    <div className="pt-1 flex flex-wrap gap-2">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <span key={idx} className="text-xs font-sans text-[#6e6a62] bg-[#f4f1ea] px-2.5 py-1 rounded border border-[#e6e2da]">
                          • {m}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.slice(0, 6).map((tech) => (
                        <Badge key={tech} variant="muted" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 text-[#6e6a62] group-hover:text-[#8c6d46] transition-colors self-end md:self-center">
                    <span className="text-xs font-sans font-medium">
                      View Case Study
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Card>
            </Link>
          </AnimateIn>
        );
      })}
    </div>
  );
};
