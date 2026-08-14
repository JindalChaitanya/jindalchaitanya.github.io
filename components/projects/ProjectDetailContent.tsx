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
      <Section className="pt-4 sm:pt-8 pb-12">
        <div className="mb-4 sm:mb-6">
          <Button
            href="/projects"
            variant="ghost"
            size="sm"
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Back to Projects
          </Button>
        </div>

        <article className="space-y-8 sm:space-y-10 max-w-3xl">
          {/* Header */}
          <header className="space-y-3 border-b border-[#d6dba0] pb-8">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent">{project.category}</Badge>
            </div>

            <h1 className="text-3xl sm:text-5xl font-heading font-bold text-[#23241a] tracking-tight">
              {project.title}
            </h1>
            <p className="text-sm font-sans font-semibold uppercase tracking-wider text-[#5c6b2f]">
              {project.tagline}
            </p>
          </header>

          {/* Overview Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#5c6b2f]">
              Overview
            </h2>
            <p className="text-[#54563f] font-sans text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* GraphReg Case Study */}
          {isGraphReg && (
            <div className="space-y-8 pt-4 border-t border-[#d6dba0]">
              {/* Problem */}
              <div className="space-y-3">
                <h2 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#5c6b2f]">
                  Problem & Motivation
                </h2>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#23241a]">
                  Why Standard Vector RAG Struggles with Regulatory Text
                </h3>
                <p className="text-[#54563f] font-sans text-base leading-relaxed">
                  SEBI circulars contain nested legal structures, cross-referenced clause hierarchies, and complex financial tables. Standard dense vector chunking breaks these cross-document dependencies, resulting in hallucinated context or missed regulatory constraints.
                </p>
              </div>

              {/* Architecture Breakdown */}
              <div className="space-y-4">
                <h2 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#5c6b2f]">
                  Technical Architecture
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#f7f8e8] border border-[#d6dba0] space-y-1 transition-transform hover:-translate-y-0.5">
                    <h4 className="font-sans font-bold text-sm text-[#23241a]">1. Layout-Aware Parsing</h4>
                    <p className="text-xs text-[#54563f] font-sans leading-relaxed">
                      IBM Docling preserves structured tables, multi-page schedules, and section headers.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#f7f8e8] border border-[#d6dba0] space-y-1 transition-transform hover:-translate-y-0.5">
                    <h4 className="font-sans font-bold text-sm text-[#23241a]">2. Zero-Shot Extraction</h4>
                    <p className="text-xs text-[#54563f] font-sans leading-relaxed">
                      GLiNER extracts legal entities, regulatory terms, and clause relationships dynamically.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#f7f8e8] border border-[#d6dba0] space-y-1 transition-transform hover:-translate-y-0.5">
                    <h4 className="font-sans font-bold text-sm text-[#23241a]">3. Hybrid Graph + Vector</h4>
                    <p className="text-xs text-[#54563f] font-sans leading-relaxed">
                      Neo4j property graph (2-hop traversal) merged with Qdrant vector semantic search (BGE-M3).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#f7f8e8] border border-[#d6dba0] space-y-1 transition-transform hover:-translate-y-0.5">
                    <h4 className="font-sans font-bold text-sm text-[#23241a]">4. Context Reranking</h4>
                    <p className="text-xs text-[#54563f] font-sans leading-relaxed">
                      ms-marco-MiniLM cross-encoder reranks retrieved nodes to optimize prompt precision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Key Technical Outcomes */}
          <div className="space-y-4 pt-4 border-t border-[#d6dba0]">
            <h2 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#5c6b2f]">
              Key Engineering Features
            </h2>
            <div className="space-y-2">
              {project.metrics.map((metric, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-[#54563f] font-sans">
                  <CheckCircle className="w-4 h-4 text-[#5c6b2f] shrink-0 mt-0.5" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="space-y-3 pt-4 border-t border-[#d6dba0]">
            <h2 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#5c6b2f]">
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
            <div className="pt-6 border-t border-[#d6dba0]">
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
