import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { projectsData } from '@/data/projects';
import { ArrowRight } from 'lucide-react';
import { IconGithub } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Projects — Chaitanya Jindal',
  description:
    'Engineering portfolio of production AI platforms, computer vision desktop applications, and dataset toolkits.',
};

export default function ProjectsPage() {
  return (
    <div>
      <Section className="py-10 sm:py-16">
        <div className="space-y-10 max-w-5xl">
          {/* Main Title (Single h1 for WCAG accessibility) */}
          <div className="space-y-3">
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8c6d46]">
              Portfolio Catalog
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#1a1917] tracking-tight">
              Projects & Work
            </h1>
            <p className="text-base sm:text-lg text-[#57544e] font-sans leading-relaxed max-w-3xl">
              Production AI systems, desktop computer vision tools, and ML dataset engineering pipelines.
            </p>
          </div>

          {/* Project List */}
          <div className="space-y-6">
            {projectsData.map((project, i) => (
              <AnimateIn key={project.slug} variant="fadeUp" delay={i * 60}>
                <Card variant="default" className="p-6 sm:p-8 space-y-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge
                          variant={project.tier === 1 ? 'accent' : project.tier === 2 ? 'success' : 'muted'}
                        >
                          Tier {project.tier}{' '}
                          {project.tier === 1 ? 'Flagship Capstone' : 'Project'}
                        </Badge>
                        <span className="text-xs font-sans text-[#6e6a62]">
                          {project.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-serif text-[#1a1917]">
                        {project.title}
                      </h2>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0">
                      {project.githubUrl && (
                        <Button
                          href={project.githubUrl}
                          isExternal
                          variant="ghost"
                          size="sm"
                          icon={<IconGithub className="w-4 h-4" />}
                        >
                          Repository
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
                  <p className="text-sm font-sans font-medium text-[#8c6d46]">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-[#57544e] font-sans text-sm sm:text-base leading-relaxed max-w-4xl">
                    {project.description}
                  </p>

                  {/* Framework Note */}
                  {project.frameworkNote && (
                    <div className="bg-[#f4f1ea] border border-[rgba(140,109,70,0.2)] text-[#8c6d46] text-xs font-sans p-3 rounded-lg">
                      Note: {project.frameworkNote}
                    </div>
                  )}

                  {/* Key Details */}
                  <div className="space-y-2">
                    <div className="text-xs font-sans font-semibold text-[#6e6a62] uppercase tracking-wider">
                      Key Engineering Details
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.metrics.map((metric, mi) => (
                        <li
                          key={mi}
                          className="flex items-start gap-2 text-xs font-sans text-[#57544e] bg-[#f4f1ea] p-2.5 rounded-lg border border-[#e6e2da]"
                        >
                          <span className="text-[#8c6d46] shrink-0">•</span>
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-1">
                    <div className="text-xs font-sans font-semibold text-[#6e6a62] uppercase tracking-wider mb-2">
                      Technology Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="muted" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimateIn>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
