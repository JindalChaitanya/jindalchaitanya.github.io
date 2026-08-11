'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { projectsData, Project } from '@/data/projects';

interface SelectedWorkSectionProps {
  highlightedSlugs?: string[] | null;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({
  highlightedSlugs,
}) => {
  const selectedProjects: (Project & { number: string })[] = [
    { ...projectsData.find((p) => p.slug === 'graphreg')!, number: '01' },
    { ...projectsData.find((p) => p.slug === 'quickdraw')!, number: '02' },
    { ...projectsData.find((p) => p.slug === 'cropvision')!, number: '03' },
  ];

  return (
    <div className="space-y-3">
      {selectedProjects.map((project, i) => {
        const isFlagship = project.tier === 1;
        const isHighlighted =
          highlightedSlugs && highlightedSlugs.includes(project.slug);
        const isMuted =
          highlightedSlugs && highlightedSlugs.length > 0 && !isHighlighted;

        return (
          <AnimateIn key={project.slug} variant="fadeUp" delay={i * 100}>
            <Link
              href={`/projects/${project.slug}`}
              className={`block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a45e] rounded-xl transition-all duration-300 ${
                isMuted ? 'opacity-30 grayscale-[40%]' : 'opacity-100'
              }`}
            >
              <div
                className={`relative rounded-xl border p-6 sm:p-8 transition-all duration-300 ${
                  isFlagship
                    ? 'border-[rgba(200,164,94,0.15)] bg-[rgba(200,164,94,0.02)] group-hover:border-[rgba(200,164,94,0.35)] group-hover:bg-[rgba(200,164,94,0.04)]'
                    : 'border-[#1e1e22] bg-[#111113] group-hover:border-[#2a2a2e] group-hover:bg-[#151517]'
                } ${
                  isHighlighted
                    ? 'ring-1 ring-[#c8a45e] border-[#c8a45e]'
                    : ''
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-5 sm:gap-7">
                    {/* Number */}
                    <span className="font-mono text-2xl sm:text-3xl font-light text-[#2a2a2e] group-hover:text-[#c8a45e]/40 transition-colors pt-1 select-none shrink-0">
                      {project.number}
                    </span>

                    {/* Project Info */}
                    <div className="space-y-2.5 min-w-0">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#e8e6e3] group-hover:text-[#c8a45e] transition-colors">
                          {project.title}
                        </h3>
                        {isFlagship && (
                          <Badge
                            variant="accent"
                            size="sm"
                            icon={
                              <Sparkles className="w-3 h-3 text-[#c8a45e]" />
                            }
                          >
                            Flagship
                          </Badge>
                        )}
                      </div>

                      <p className="text-sm text-[#a3a1a0] font-sans leading-relaxed">
                        {project.tagline}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {project.techStack.slice(0, 5).map((tech) => (
                          <Badge key={tech} variant="muted" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="self-end sm:self-center shrink-0 flex items-center gap-2 text-[#6b6966] group-hover:text-[#c8a45e] transition-all duration-300">
                    <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-[0.15em]">
                      View
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          </AnimateIn>
        );
      })}
    </div>
  );
};
