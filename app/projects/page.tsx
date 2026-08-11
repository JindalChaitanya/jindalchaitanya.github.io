import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projectsData } from '@/data/projects';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { IconGithub } from '@/components/ui/Icons';

export default function ProjectsPage() {
  return (
    <div>
      <Section
        label="Engineering Portfolio"
        heading="Projects Catalog Matrix"
        description="Comprehensive technical catalog of production AI systems, computer vision desktop applications, and dataset engineering toolkits."
      >
        <div className="space-y-6">
          {projectsData.map((project) => (
            <Card key={project.slug} variant="default" className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant={project.tier === 1 ? 'cyan' : project.tier === 2 ? 'emerald' : 'slate'}>
                      Tier {project.tier} {project.tier === 1 ? 'Flagship' : 'Project'}
                    </Badge>
                    <span className="text-xs font-mono text-slate-500">{project.category}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-100">{project.title}</h2>
                </div>

                <div className="flex items-center gap-3 pt-2 sm:pt-0">
                  {project.githubUrl && (
                    <Button
                      href={project.githubUrl}
                      isExternal
                      variant="ghost"
                      size="sm"
                      icon={<IconGithub className="w-4 h-4" />}
                    >
                      Source Code
                    </Button>
                  )}
                  {project.hasCaseStudy && (
                    <Button
                      href={`/projects/${project.slug}`}
                      variant="primary"
                      size="sm"
                      icon={<ArrowRight className="w-3.5 h-3.5" />}
                      iconPosition="right"
                    >
                      Case Study
                    </Button>
                  )}
                </div>
              </div>

              <p className="text-sm font-mono text-cyan-400">{project.tagline}</p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{project.description}</p>

              {project.frameworkNote && (
                <div className="bg-amber-950/30 border border-amber-500/30 text-amber-300 text-xs font-mono p-3 rounded">
                  Note: {project.frameworkNote}
                </div>
              )}

              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">// Metrics & Features</div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {project.metrics.map((metric, i) => (
                    <li key={i} className="flex items-start gap-2 bg-slate-900/40 p-2 rounded border border-slate-800/60">
                      <span className="text-cyan-400 font-mono shrink-0">›</span>
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">// Tech Stack</div>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="slate" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
