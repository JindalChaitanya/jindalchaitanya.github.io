'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { HeroIntro } from '@/components/home/HeroIntro';
import { CapabilitiesSection } from '@/components/home/CapabilitiesSection';
import { SelectedWorkSection } from '@/components/home/SelectedWorkSection';
import { ExperienceSection } from '@/components/home/ExperienceSection';
import { ArrowRight, Mail, FileText } from 'lucide-react';
import { IconGithub, IconLinkedin } from '@/components/ui/Icons';

export const HomeContent: React.FC = () => {
  const [highlightedSlugs, setHighlightedSlugs] = useState<string[] | null>(
    null
  );

  return (
    <div>
      {/* ─── 1. Hero ─── */}
      <Section className="pt-16 sm:pt-28 pb-16 border-b border-[#1e1e22]">
        <div className="space-y-10">
          <HeroIntro />

          {/* CTA Buttons */}
          <AnimateIn variant="fadeUp" delay={400}>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                href="/resume"
                variant="primary"
                icon={<FileText className="w-4 h-4" />}
              >
                View Resume
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                icon={<Mail className="w-4 h-4" />}
              >
                Get In Touch
              </Button>
              <div className="flex items-center gap-2 border-l border-[#1e1e22] pl-4 ml-1">
                <a
                  href="https://github.com/JindalChaitanya"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 text-[#6b6966] hover:text-[#e8e6e3] transition-colors rounded-lg hover:bg-[#1e1e22]"
                >
                  <IconGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/jindalchaitanya"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 text-[#6b6966] hover:text-[#e8e6e3] transition-colors rounded-lg hover:bg-[#1e1e22]"
                >
                  <IconLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* ─── 2. Statement ─── */}
      <Section className="py-16 sm:py-24 border-b border-[#1e1e22]">
        <AnimateIn variant="fadeUp">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#c8a45e]">
              Philosophy
            </span>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif text-[#e8e6e3] leading-relaxed font-normal">
              &ldquo;I build AI systems that ship — not notebooks that score
              well in isolation and never see production.&rdquo;
            </blockquote>
            <p className="text-sm text-[#6b6966] font-mono">
              — Focus: retrieval platforms, CV automation, production ML
            </p>
          </div>
        </AnimateIn>
      </Section>

      {/* ─── 3. Background ─── */}
      <Section
        label="Background"
        heading="Engineering Journey"
        className="border-b border-[#1e1e22]"
      >
        <AnimateIn variant="fadeUp">
          <div className="max-w-3xl space-y-5 text-base sm:text-lg text-[#a3a1a0] leading-relaxed">
            <p>
              My engineering foundation began during my B.Tech in Computer
              Science & Engineering at JSSATE Noida (78.1% aggregate). At
              Droisys, I worked hands-on as a Python AI Intern and later as an
              Associate Data Analyst, engineering automated image cropping
              pipelines and Python template-matching tools that cut dataset
              preparation turnaround by 40–50%.
            </p>
            <p>
              Currently completing the 6-month full-time PGCP-AI program at CDAC
              Noida (CCAT AIR 286), I am deepening my specialization in Agentic
              AI design patterns, LLMOps, and cloud-native ML deployments while
              building GraphReg — a hybrid GraphRAG platform for complex
              regulatory compliance text.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-mono font-medium text-[#c8a45e] hover:underline group"
              >
                <span>More about me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </AnimateIn>
      </Section>

      {/* ─── 4. Capabilities ─── */}
      <Section
        label="Capabilities"
        heading="What I Do"
        description="Core technical focus areas spanning AI systems, computer vision tools, grounded retrieval architectures, and ML data pipelines."
        className="border-b border-[#1e1e22]"
      >
        <CapabilitiesSection onHoverCategory={setHighlightedSlugs} />
      </Section>

      {/* ─── 5. Selected Work ─── */}
      <Section
        label="Selected Work"
        heading="Featured Projects"
        description="Flagship and strong engineering projects demonstrating retrieval mechanics, classical computer vision, and dataset tooling."
        className="border-b border-[#1e1e22]"
      >
        <SelectedWorkSection highlightedSlugs={highlightedSlugs} />
        <AnimateIn variant="fadeUp" delay={300}>
          <div className="mt-10 text-center sm:text-left">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-mono font-medium text-[#c8a45e] hover:underline group"
            >
              <span>View complete project catalog</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimateIn>
      </Section>

      {/* ─── 6. Experience ─── */}
      <Section
        label="Timeline"
        heading="Experience & Credentials"
        className="border-b border-[#1e1e22]"
      >
        <ExperienceSection />
      </Section>

      {/* ─── 7. Contact CTA ─── */}
      <Section className="py-20 sm:py-32">
        <AnimateIn variant="fadeUp">
          <div className="max-w-2xl space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#c8a45e]">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#e8e6e3] leading-tight">
                Have an interesting problem?{' '}
                <span className="text-[#c8a45e]">Let&apos;s talk.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#a3a1a0] leading-relaxed font-sans">
              Open to discussing AI/ML engineering roles, GraphRAG platform
              architectures, computer vision pipelines, or production ML
              infrastructure.
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
        </AnimateIn>
      </Section>
    </div>
  );
};
