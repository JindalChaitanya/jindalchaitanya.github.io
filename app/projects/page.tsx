'use client';

import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { projectsData } from '@/data/projects';
import { ArrowRight } from 'lucide-react';
import { IconGithub } from '@/components/ui/Icons';

export default function ProjectsPage() {
  return (
    <div>
      <Section
        label="Engineering Portfolio"
        heading="Projects"
        description="Production AI systems, computer vision desktop applications, and dataset engineering toolkits."
      >
        <div className="space-y-4">
          {projectsData.map((project, i) => (
            <AnimateIn key={project.slug} variant="fadeUp" delay={i * 80}>
              <div className="rounded-xl border border-[#1e1e22] bg-[#111113] p-6 sm:p-8 space-y-5 hover:border-[#2a2a2e] hover:bg-[#151517] transition-all group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge
                        variant={project.tier === 1 ? 'accent' : project.tier === 2 ? 'success' : 'muted'}
                      >
                        Tier {project.tier}{' '}
                        {project.tier === 1 ? 'Flagship' : 'Project'}
                      </Badge>
                      <span className="text-[10px] font-mono text-[#6b6966]">
                        {project.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-serif font-normal text-[#e8e6e3] group-hover:text-[#c8a45e] transition-colors">
                      {project.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2 pt-1 sm:pt-0 shrink-0">
                    {project.githubUrl && (
                      <Button
                        href={project.githubUrl}
                        isExternal
                        variant="ghost"
                        size="sm"
                        icon={<IconGithub className="w-4 h-4" />}
                      >
                        Source
                      </Button>
                    )}
                    {project.hasCaseStudy && (
                      <Button
                        href={`/projects/${project.slug}`}
                        variant="secondary"
                        size="sm"
                        icon={<ArrowRight className="w-3.5 h-3.5" />}
                        iconPosition="right"
                      >
                        Case Study
                      </Button>
                    )}
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-sm font-mono text-[#c8a45e]/70">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-[#a3a1a0] text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Framework Note */}
                {project.frameworkNote && (
                  <div className="bg-[rgba(200,164,94,0.04)] border border-[rgba(200,164,94,0.15)] text-[#c8a45e]/80 text-xs font-mono p-3 rounded-lg">
                    Note: {project.frameworkNote}
                  </div>
                )}

                {/* Metrics */}
                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-[#6b6966] uppercase tracking-[0.15em]">
                    Metrics & Features
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.metrics.map((metric, mi) => (
                      <li
                        key={mi}
                        className="flex items-start gap-2 text-xs text-[#a3a1a0] bg-[#0a0a0b] p-2.5 rounded-lg border border-[#1e1e22]"
                      >
                        <span className="text-[#c8a45e] font-mono shrink-0">
                          ›
                        </span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="pt-2">
                  <div className="text-[10px] font-mono text-[#6b6966] uppercase tracking-[0.15em] mb-2">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="muted" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Section>
    </div>
  );
}
