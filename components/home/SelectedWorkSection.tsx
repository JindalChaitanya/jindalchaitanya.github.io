'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { projectsData } from '@/data/projects';

export const SelectedWorkSection: React.FC = () => {
  // Show 2 flagship capstone projects on homepage per Rule 10 (progressive depth)
  const selectedProjects = projectsData.filter(
    (p) => p.slug === 'graphreg' || p.slug === 'quickdraw'
  );

  return (
    <div id="selected-work" className="space-y-4">
      {selectedProjects.map((project) => (
        <article
          key={project.slug}
          className="group space-y-2 pb-4 border-b border-[#e6e2da] last:border-b-0 last:pb-0"
        >
          {/* Header: Title & Category */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div className="flex items-baseline gap-3 flex-wrap">
              <Link
                href={`/projects/${project.slug}`}
                className="group-hover:text-[#8c6d46] transition-colors"
              >
                <h3 className="text-[1.75rem] sm:text-[2.15rem] font-heading font-bold text-[#181816]">
                  {project.title}
                </h3>
              </Link>
              <span className="text-sm font-sans text-[#737067] font-medium">
                {project.category}
              </span>
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-[#8c6d46] hover:underline shrink-0"
            >
              <span>Read Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
            </Link>
          </div>

          {/* Tagline */}
          <p className="text-sm font-sans font-semibold uppercase tracking-wider text-[#8c6d46]">
            {project.tagline}
          </p>

          {/* Integrated Description Folding Concrete Results (No Bullet Clutter) */}
          <p className="text-lg text-[#4a4843] font-sans leading-relaxed max-w-3xl">
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
