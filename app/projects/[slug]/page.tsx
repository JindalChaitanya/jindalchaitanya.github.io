import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projectsData } from '@/data/projects';
import { ArrowLeft, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { IconGithub } from '@/components/ui/Icons';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <Section className="pb-4">
        <Button href="/projects" variant="ghost" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
          Back to Projects Catalog
        </Button>
      </Section>

      <Section className="pt-0">
        <Card variant="glass" className="p-6 sm:p-10 space-y-6">
          <header className="space-y-3 border-b border-slate-800/80 pb-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={project.tier === 1 ? 'cyan' : 'emerald'}>
                Tier {project.tier} {project.tier === 1 ? 'Flagship Capstone' : 'Project'}
              </Badge>
              <Badge variant="slate">{project.category}</Badge>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl font-mono text-cyan-400">
              {project.tagline}
            </p>
          </header>

          {project.frameworkNote && (
            <div className="bg-amber-950/40 border border-amber-500/40 text-amber-300 p-4 rounded-md flex items-start gap-3 text-xs sm:text-sm font-mono">
              <AlertTriangle className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
              <div>
                <span className="font-bold">UNRESOLVED SOURCE NOTE:</span> {project.frameworkNote}
              </div>
            </div>
          )}

          <div className="space-y-4">
            <h2 className="text-lg font-mono font-semibold text-slate-200 uppercase tracking-wider">// Project Overview</h2>
            <p className="text-slate-300 text-base leading-relaxed">{project.description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-mono font-semibold text-slate-200 uppercase tracking-wider">// Engineering Metrics & Technical Evidence</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.metrics.map((metric, i) => (
                <div key={i} className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-md flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-mono font-semibold text-slate-200 uppercase tracking-wider">// Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="cyan" size="md">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {project.githubUrl && (
            <div className="pt-4 border-t border-slate-800/80">
              <Button href={project.githubUrl} isExternal variant="primary" icon={<IconGithub className="w-4 h-4" />}>
                View Source Repository on GitHub
              </Button>
            </div>
          )}
        </Card>
      </Section>
    </div>
  );
}
