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
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#5c6b2f]">
              Portfolio Catalog
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-bold text-[#23241a] tracking-tight">
              Projects & Work
            </h1>
            <p className="text-base sm:text-lg text-[#54563f] font-sans leading-relaxed max-w-3xl">
              GraphRAG retrieval systems targeting regulatory compliance, desktop computer vision applications, and dataset engineering pipelines.
            </p>
          </div>

          {/* Project List - Clean Unboxed Entries */}
          <div className="space-y-4">
            {projectsData.map((project) => (
              <article
                key={project.slug}
                className="group space-y-2 pb-5 border-b border-[#d6dba0] last:border-b-0 last:pb-0 transition-transform duration-200 hover:translate-x-1"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="accent">{project.category}</Badge>
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-[#23241a] group-hover:text-[#5c6b2f] transition-colors">
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
                <p className="text-xs font-sans font-semibold uppercase tracking-wider text-[#5c6b2f]">
                  {project.tagline}
                </p>

                {/* Integrated Description */}
                <p className="text-[#54563f] font-sans text-base leading-relaxed max-w-3xl">
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
