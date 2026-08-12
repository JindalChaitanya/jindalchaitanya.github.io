import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projectsData } from '@/data/projects';
import { ArrowRight } from 'lucide-react';
import { IconGithub } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Projects | Chaitanya Jindal',
  description:
    'Engineering portfolio of GraphRAG retrieval systems, computer vision desktop applications, and dataset toolkits.',
};

export default function ProjectsPage() {
  return (
    <div>
      <Section className="py-6 sm:py-10">
        <div className="space-y-8 max-w-4xl">
          {/* Main Title */}
          <div className="space-y-3">
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8c6d46]">
              Portfolio Catalog
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-bold text-[#181816] tracking-tight">
              Projects & Work
            </h1>
            <p className="text-base sm:text-lg text-[#4a4843] font-sans leading-relaxed max-w-3xl">
              GraphRAG retrieval systems targeting regulatory compliance, desktop computer vision applications, and dataset engineering pipelines.
            </p>
          </div>

          {/* Project List — Clean Unboxed Entries */}
          <div className="space-y-4">
            {projectsData.map((project) => (
              <article
                key={project.slug}
                className="space-y-2 pb-4 border-b border-[#e6e2da] last:border-b-0 last:pb-0"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="accent">{project.category}</Badge>
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-[#181816]">
                      {project.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
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
                <p className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8c6d46]">
                  {project.tagline}
                </p>

                {/* Integrated Description Folding Concrete Results */}
                <p className="text-[#4a4843] font-sans text-base leading-relaxed max-w-3xl">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="muted" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
