'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { HeroIntro } from '@/components/home/HeroIntro';
import { CapabilitiesSection } from '@/components/home/CapabilitiesSection';
import { SelectedWorkSection } from '@/components/home/SelectedWorkSection';
import { ExperienceSection } from '@/components/home/ExperienceSection';
import { ArrowRight, Mail, FileText, ArrowUpRight } from 'lucide-react';
import { IconGithub, IconLinkedin } from '@/components/ui/Icons';

export const HomeContent: React.FC = () => {
  const [highlightedSlugs, setHighlightedSlugs] = useState<string[] | null>(null);

  return (
    <div>
      {/* 1. Animated Hero Introduction */}
      <Section className="pt-12 sm:pt-20 pb-12 border-b border-[#e6e1da]">
        <div className="space-y-8">
          <HeroIntro />

          {/* Direct Channels */}
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium pt-2">
            <Button
              href="https://github.com/JindalChaitanya/portfolio/blob/main/Docs/ChaitanyaJindal_Resume.pdf"
              isExternal
              variant="primary"
              icon={<FileText className="w-4 h-4" />}
            >
              Download Resume (PDF)
            </Button>
            <div className="flex items-center gap-3 border-l border-[#e6e1da] pl-4">
              <a
                href="https://github.com/JindalChaitanya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center gap-1.5 text-[#57524d] hover:text-[#1a1918] transition-colors p-1"
              >
                <IconGithub className="w-5 h-5 text-[#7a4a2e]" />
                <span className="text-xs font-mono">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/jindalchaitanya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-1.5 text-[#57524d] hover:text-[#1a1918] transition-colors p-1"
              >
                <IconLinkedin className="w-5 h-5 text-[#7a4a2e]" />
                <span className="text-xs font-mono">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* 2. Personal Statement */}
      <Section className="py-12 sm:py-16 border-b border-[#e6e1da]">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-xs font-mono font-medium uppercase tracking-widest text-[#7a4a2e]">
            // Statement
          </h2>
          <p className="text-xl sm:text-2xl font-serif text-[#1a1918] leading-relaxed font-normal">
            &ldquo;I build AI systems that ship—not notebooks that score well in isolation and never see production. My work sits at the intersection of GenAI retrieval platforms, computer vision automation pipelines, and production ML infrastructure.&rdquo;
          </p>
        </div>
      </Section>

      {/* 3. About Preview */}
      <Section
        label="Background"
        heading="Engineering Journey"
        className="border-b border-[#e6e1da]"
      >
        <div className="max-w-3xl space-y-4 text-base sm:text-lg text-[#57524d] leading-relaxed">
          <p>
            My engineering foundation began during my B.Tech in Computer Science & Engineering at JSSATE Noida (78.1% aggregate). At Droisys, I worked hands-on as a Python AI Intern and later as an Associate Data Analyst, engineering automated image cropping pipelines and Python template-matching tools that cut dataset preparation turnaround by 40–50%.
          </p>
          <p>
            Currently completing the 6-month full-time PGCP-AI program at CDAC Noida (CCAT AIR 286), I am deepening my specialization in Agentic AI design patterns, LLMOps, and cloud-native ML deployments while building GraphReg—a hybrid GraphRAG platform for complex regulatory compliance text.
          </p>
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-mono font-medium text-[#7a4a2e] hover:underline group"
            >
              <span>More about me</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Section>

      {/* 4. What I Do (Interactive Capabilities) */}
      <Section
        label="Capabilities"
        heading="What I Do"
        description="Core technical focus areas spanning AI systems, computer vision tools, grounded retrieval architectures, and ML data pipelines."
        className="border-b border-[#e6e1da]"
      >
        <CapabilitiesSection onHoverCategory={setHighlightedSlugs} />
      </Section>

      {/* 5. Selected Work (Highlighted by Capabilities) */}
      <Section
        label="Selected Work"
        heading="Featured Engineering Projects"
        description="Flagship and strong engineering projects demonstrating retrieval mechanics, classical computer vision, and dataset tooling."
        className="border-b border-[#e6e1da]"
      >
        <SelectedWorkSection highlightedSlugs={highlightedSlugs} />
        <div className="mt-8 text-center sm:text-left">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-mono font-medium text-[#7a4a2e] hover:underline group"
          >
            <span>View complete project catalog</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>

      {/* 6. Experience & Education Timeline */}
      <Section
        label="Timeline"
        heading="Experience & Credentials"
        className="border-b border-[#e6e1da]"
      >
        <ExperienceSection />
      </Section>

      {/* 7. Personal Contact Invitation */}
      <Section className="py-16 sm:py-24">
        <div className="max-w-2xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-medium uppercase tracking-widest text-[#7a4a2e]">
              // Get In Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#1a1918] leading-tight">
              Have an interesting problem? Let&apos;s talk.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#57524d] leading-relaxed font-sans">
            Open to discussing AI/ML engineering roles, GraphRAG platform architectures, computer vision pipelines, or production ML infrastructure.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              href="mailto:chaitanya.jindal2002@gmail.com"
              variant="primary"
              icon={<Mail className="w-4 h-4" />}
            >
              chaitanya.jindal2002@gmail.com
            </Button>
            <Button href="/contact" variant="secondary">
              All Contact Channels
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};
