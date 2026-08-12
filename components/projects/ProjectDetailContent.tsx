'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projectsData } from '@/data/projects';
import { ArrowLeft, CheckCircle } from 'lucide-react';
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
        <article className="space-y-10 max-w-3xl">
          {/* Header */}
          <header className="space-y-3 border-b border-[#e6e2da] pb-8">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent">{project.category}</Badge>
            </div>

            <h1 className="text-3xl sm:text-5xl font-heading font-bold text-[#181816] tracking-tight">
              {project.title}
            </h1>
            <p className="text-sm font-sans font-semibold uppercase tracking-wider text-[#8c6d46]">
              {project.tagline}
            </p>
          </header>

          {/* Overview Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8c6d46]">
              Overview
            </h2>
            <p className="text-[#4a4843] font-sans text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* GraphReg Case Study */}
          {isGraphReg && (
            <div className="space-y-8 pt-4 border-t border-[#e6e2da]">
              {/* Problem */}
              <div className="space-y-3">
                <h2 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8c6d46]">
                  Problem & Motivation
                </h2>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#181816]">
                  Why Standard Vector RAG Struggles with Regulatory Text
                </h3>
                <p className="text-[#4a4843] font-sans text-base leading-relaxed">
                  SEBI circulars contain nested legal structures, cross-referenced clause hierarchies, and complex financial tables. Standard dense vector chunking breaks these cross-document dependencies, resulting in hallucinated context or missed regulatory constraints.
                </p>
              </div>

              {/* Architecture Breakdown */}
              <div className="space-y-4">
                <h2 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8c6d46]">
                  Technical Architecture
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-[#f4f2eb] border border-[#e6e2da] space-y-1">
                    <h4 className="font-sans font-bold text-sm text-[#181816]">1. Layout-Aware Parsing</h4>
                    <p className="text-xs text-[#4a4843] font-sans leading-relaxed">
                      IBM Docling preserves structured tables, multi-page schedules, and section headers.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[#f4f2eb] border border-[#e6e2da] space-y-1">
                    <h4 className="font-sans font-bold text-sm text-[#181816]">2. Zero-Shot Extraction</h4>
                    <p className="text-xs text-[#4a4843] font-sans leading-relaxed">
                      GLiNER extracts legal entities, regulatory terms, and clause relationships dynamically.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[#f4f2eb] border border-[#e6e2da] space-y-1">
                    <h4 className="font-sans font-bold text-sm text-[#181816]">3. Hybrid Graph + Vector</h4>
                    <p className="text-xs text-[#4a4843] font-sans leading-relaxed">
                      Neo4j property graph (2-hop traversal) merged with Qdrant vector semantic search (BGE-M3).
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[#f4f2eb] border border-[#e6e2da] space-y-1">
                    <h4 className="font-sans font-bold text-sm text-[#181816]">4. Context Reranking</h4>
                    <p className="text-xs text-[#4a4843] font-sans leading-relaxed">
                      ms-marco-MiniLM cross-encoder reranks retrieved nodes to optimize prompt precision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Key Technical Outcomes */}
          <div className="space-y-4 pt-4 border-t border-[#e6e2da]">
            <h2 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8c6d46]">
              Key Engineering Features
            </h2>
            <div className="space-y-2">
              {project.metrics.map((metric, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-[#4a4843] font-sans">
                  <CheckCircle className="w-4 h-4 text-[#8c6d46] shrink-0 mt-0.5" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="space-y-3 pt-4 border-t border-[#e6e2da]">
            <h2 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8c6d46]">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="accent" size="md">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* GitHub Link */}
          {project.githubUrl && (
            <div className="pt-6 border-t border-[#e6e2da]">
              <Button
                href={project.githubUrl}
                isExternal
                variant="primary"
                icon={<IconGithub className="w-4 h-4" />}
              >
                View Source Repository
              </Button>
            </div>
          )}
        </article>
      </Section>
    </div>
  );
};
