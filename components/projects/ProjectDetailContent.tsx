'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { projectsData, Project } from '@/data/projects';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { IconGithub } from '@/components/ui/Icons';

interface ProjectDetailContentProps {
  slug: string;
}

export const ProjectDetailContent: React.FC<ProjectDetailContentProps> = ({
  slug,
}) => {
  const project = projectsData.find((p) => p.slug === slug) as Project;

  return (
    <div>
      <Section className="pb-6">
        <Button
          href="/projects"
          variant="ghost"
          size="sm"
          icon={<ArrowLeft className="w-4 h-4" />}
        >
          Back to Projects
        </Button>
      </Section>

      <Section className="pt-0">
        <AnimateIn variant="fadeUp">
          <div className="rounded-xl border border-[#1e1e22] bg-[#111113] p-6 sm:p-10 space-y-8">
            {/* Header */}
            <header className="space-y-4 border-b border-[#1e1e22] pb-8">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={project.tier === 1 ? 'accent' : 'success'}>
                  Tier {project.tier}{' '}
                  {project.tier === 1 ? 'Flagship Capstone' : 'Project'}
                </Badge>
                <Badge variant="muted">{project.category}</Badge>
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#e8e6e3] tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl font-mono text-[#c8a45e]/70">
                {project.tagline}
              </p>
            </header>

            {/* Framework Note */}
            {project.frameworkNote && (
              <AnimateIn variant="fadeUp" delay={100}>
                <div className="bg-[rgba(200,164,94,0.04)] border border-[rgba(200,164,94,0.15)] text-[#c8a45e]/80 p-4 rounded-lg flex items-start gap-3 text-xs sm:text-sm font-mono">
                  <AlertTriangle className="w-5 h-5 shrink-0 text-[#c8a45e] mt-0.5" />
                  <div>
                    <span className="font-bold">Note:</span>{' '}
                    {project.frameworkNote}
                  </div>
                </div>
              </AnimateIn>
            )}

            {/* Overview */}
            <AnimateIn variant="fadeUp" delay={150}>
              <div className="space-y-3">
                <h2 className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#c8a45e]">
                  Project Overview
                </h2>
                <p className="text-[#a3a1a0] text-base leading-relaxed">
                  {project.description}
                </p>
              </div>
            </AnimateIn>

            {/* Metrics */}
            <AnimateIn variant="fadeUp" delay={200}>
              <div className="space-y-4">
                <h2 className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#c8a45e]">
                  Engineering Metrics & Evidence
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="bg-[#0a0a0b] border border-[#1e1e22] p-3.5 rounded-lg flex items-start gap-3 text-sm text-[#a3a1a0]"
                    >
                      <span className="text-[#c8a45e] font-mono shrink-0 mt-0.5">
                        ›
                      </span>
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* Tech Stack */}
            <AnimateIn variant="fadeUp" delay={250}>
              <div className="space-y-4">
                <h2 className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#c8a45e]">
                  Technology Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="accent" size="md">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* GitHub Link */}
            {project.githubUrl && (
              <AnimateIn variant="fadeUp" delay={300}>
                <div className="pt-4 border-t border-[#1e1e22]">
                  <Button
                    href={project.githubUrl}
                    isExternal
                    variant="primary"
                    icon={<IconGithub className="w-4 h-4" />}
                  >
                    View Source Repository
                  </Button>
                </div>
              </AnimateIn>
            )}
          </div>
        </AnimateIn>
      </Section>
    </div>
  );
};
