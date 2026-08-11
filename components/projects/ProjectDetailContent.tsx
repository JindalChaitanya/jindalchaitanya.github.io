'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { projectsData } from '@/data/projects';
import { ArrowLeft, AlertTriangle, Cpu, Network, Database, Layers, CheckCircle } from 'lucide-react';
import { IconGithub } from '@/components/ui/Icons';

interface ProjectDetailContentProps {
  slug: string;
}

export const ProjectDetailContent: React.FC<ProjectDetailContentProps> = ({
  slug,
}) => {
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const isGraphReg = slug === 'graphreg';

  return (
    <div>
      <Section className="pb-4 pt-8 sm:pt-12">
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
          <Card variant="default" className="p-6 sm:p-10 space-y-10">
            {/* Header */}
            <header className="space-y-4 border-b border-[#e6e2da] pb-8">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={project.tier === 1 ? 'accent' : 'success'}>
                  Tier {project.tier}{' '}
                  {project.tier === 1 ? 'Flagship Capstone' : 'Project'}
                </Badge>
                <Badge variant="muted">{project.category}</Badge>
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif text-[#1a1917] tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl font-sans font-medium text-[#8c6d46]">
                {project.tagline}
              </p>
            </header>

            {/* Framework Note */}
            {project.frameworkNote && (
              <AnimateIn variant="fadeUp" delay={80}>
                <div className="bg-[#f4f1ea] border border-[rgba(140,109,70,0.2)] text-[#8c6d46] p-4 rounded-lg flex items-start gap-3 text-xs sm:text-sm font-sans">
                  <AlertTriangle className="w-5 h-5 shrink-0 text-[#8c6d46] mt-0.5" />
                  <div>
                    <span className="font-semibold">RAG Orchestration Note:</span>{' '}
                    {project.frameworkNote}
                  </div>
                </div>
              </AnimateIn>
            )}

            {/* Overview Section */}
            <AnimateIn variant="fadeUp" delay={120}>
              <div className="space-y-3 max-w-3xl">
                <h2 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8c6d46]">
                  Overview
                </h2>
                <p className="text-[#57544e] font-sans text-base sm:text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>
            </AnimateIn>

            {/* GraphReg Narrative Case Study (Verified Architecture) */}
            {isGraphReg && (
              <div className="space-y-10 pt-4 border-t border-[#e6e2da]">
                {/* Problem & Motivation */}
                <AnimateIn variant="fadeUp" delay={160}>
                  <div className="space-y-3 max-w-3xl">
                    <h2 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8c6d46]">
                      Problem & Core Challenges
                    </h2>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#1a1917]">
                      Why Standard Vector RAG Struggles with Regulatory Text
                    </h3>
                    <p className="text-[#57544e] font-sans text-sm sm:text-base leading-relaxed">
                      SEBI and RBI circulars contain nested legal structures, cross-referenced clause hierarchies, and complex financial tables. Standard dense vector chunking breaks these cross-document dependencies, resulting in hallucinated context or missed regulatory constraints.
                    </p>
                  </div>
                </AnimateIn>

                {/* Architecture Breakdown */}
                <AnimateIn variant="fadeUp" delay={200}>
                  <div className="space-y-4">
                    <h2 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8c6d46]">
                      Technical Architecture
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <Card variant="paper" className="p-5 space-y-2">
                        <div className="p-2 rounded bg-[rgba(140,109,70,0.1)] text-[#8c6d46] w-fit">
                          <Layers className="w-4 h-4" />
                        </div>
                        <h4 className="font-sans font-semibold text-sm text-[#1a1917]">1. Layout-Aware Parsing</h4>
                        <p className="text-xs text-[#57544e] font-sans leading-relaxed">
                          IBM Docling preserves structured tables, multi-page schedules, and section headers.
                        </p>
                      </Card>

                      <Card variant="paper" className="p-5 space-y-2">
                        <div className="p-2 rounded bg-[rgba(140,109,70,0.1)] text-[#8c6d46] w-fit">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <h4 className="font-sans font-semibold text-sm text-[#1a1917]">2. Zero-Shot Extraction</h4>
                        <p className="text-xs text-[#57544e] font-sans leading-relaxed">
                          GLiNER extracts legal entities, regulatory terms, and clause relationships dynamically.
                        </p>
                      </Card>

                      <Card variant="paper" className="p-5 space-y-2">
                        <div className="p-2 rounded bg-[rgba(140,109,70,0.1)] text-[#8c6d46] w-fit">
                          <Network className="w-4 h-4" />
                        </div>
                        <h4 className="font-sans font-semibold text-sm text-[#1a1917]">3. Hybrid Graph + Vector</h4>
                        <p className="text-xs text-[#57544e] font-sans leading-relaxed">
                          Neo4j property graph (2-hop traversal) merged with Qdrant vector semantic search (BGE-M3).
                        </p>
                      </Card>

                      <Card variant="paper" className="p-5 space-y-2">
                        <div className="p-2 rounded bg-[rgba(140,109,70,0.1)] text-[#8c6d46] w-fit">
                          <Database className="w-4 h-4" />
                        </div>
                        <h4 className="font-sans font-semibold text-sm text-[#1a1917]">4. Context Reranking</h4>
                        <p className="text-xs text-[#57544e] font-sans leading-relaxed">
                          ms-marco-MiniLM cross-encoder reranks retrieved nodes to optimize prompt precision.
                        </p>
                      </Card>
                    </div>
                  </div>
                </AnimateIn>
              </div>
            )}

            {/* Key Engineering Details */}
            <AnimateIn variant="fadeUp" delay={240}>
              <div className="space-y-4">
                <h2 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8c6d46]">
                  Key Technical Features & Evidence
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.metrics.map((metric, i) => (
                    <Card key={i} variant="paper" className="p-3.5 flex items-start gap-3 text-sm text-[#57544e]">
                      <CheckCircle className="w-4 h-4 text-[#8c6d46] shrink-0 mt-0.5" />
                      <span className="font-sans">{metric}</span>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* Technology Stack */}
            <AnimateIn variant="fadeUp" delay={280}>
              <div className="space-y-4">
                <h2 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8c6d46]">
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
              <AnimateIn variant="fadeUp" delay={320}>
                <div className="pt-4 border-t border-[#e6e2da]">
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
          </Card>
        </AnimateIn>
      </Section>
    </div>
  );
};
