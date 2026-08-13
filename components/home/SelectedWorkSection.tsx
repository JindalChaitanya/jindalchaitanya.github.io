'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { projectsData } from '@/data/projects';

export const SelectedWorkSection: React.FC = () => {
  const selectedProjects = projectsData.filter(
    (p) => p.slug === 'graphreg' || p.slug === 'quickdraw'
  );

  return (
    <div id="selected-work" className="space-y-4">
      {selectedProjects.map((project) => (
        <article
          key={project.slug}
          className="group space-y-2 pb-5 border-b border-[#d6dba0] last:border-b-0 last:pb-0 transition-transform duration-200 hover:translate-x-1"
        >
          {/* Header: Title & Category */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div className="flex items-baseline gap-3 flex-wrap">
              <Link
                href={`/projects/${project.slug}`}
                className="group-hover:text-[#5c6b2f] transition-colors"
              >
                <h3 className="text-[1.75rem] sm:text-[2.15rem] font-heading font-bold text-[#23241a]">
                  {project.title}
                </h3>
              </Link>
              <span className="text-xs font-sans uppercase tracking-wider text-[#6b6e50] font-semibold bg-[#f7f8e8] px-2 py-0.5 rounded-xs border border-[#d6dba0]">
                {project.category}
              </span>
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-[#5c6b2f] hover:text-[#485424] link-draw shrink-0 active:scale-[0.98]"
            >
              <span>Read Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
            </Link>
          </div>

          {/* Tagline */}
          <p className="text-xs font-sans font-semibold uppercase tracking-wider text-[#5c6b2f]">
            {project.tagline}
          </p>

          {/* Integrated Description */}
          <p className="text-lg text-[#54563f] font-sans leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="muted" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};
