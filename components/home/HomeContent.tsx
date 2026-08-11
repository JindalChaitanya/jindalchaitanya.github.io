'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { HeroIntro } from '@/components/home/HeroIntro';
import { CapabilitiesSection } from '@/components/home/CapabilitiesSection';
import { SelectedWorkSection } from '@/components/home/SelectedWorkSection';
import { Experience } from '@/components/sections/Experience';
import { ArrowRight, Mail, FileText } from 'lucide-react';
import { IconGithub, IconLinkedin } from '@/components/ui/Icons';
import { profileData } from '@/data/profile';

export const HomeContent: React.FC = () => {
  const [highlightedSlugs, setHighlightedSlugs] = useState<string[] | null>(
    null
  );

  return (
    <div>
      {/* ─── 1. Hero ─── */}
      <Section className="pt-16 sm:pt-24 pb-16 border-b border-[#e6e2da]">
        <div className="space-y-10">
          <HeroIntro />

          {/* CTA Buttons */}
          <AnimateIn variant="fadeUp" delay={300}>
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
              <div className="flex items-center gap-2 border-l border-[#e6e2da] pl-4 ml-1">
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 text-[#57544e] hover:text-[#1a1917] transition-colors rounded-lg hover:bg-[#f4f1ea]"
                >
                  <IconGithub className="w-5 h-5" />
                </a>
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 text-[#57544e] hover:text-[#1a1917] transition-colors rounded-lg hover:bg-[#f4f1ea]"
                >
                  <IconLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* ─── 2. Background Overview ─── */}
      <Section
        label="Background"
        heading="Engineering Focus"
        className="border-b border-[#e6e2da]"
      >
        <AnimateIn variant="fadeUp">
          <div className="max-w-3xl space-y-5 text-base sm:text-lg text-[#57544e] leading-relaxed">
            <p>{profileData.bioNarrative.foundation}</p>
            <p>{profileData.bioNarrative.specialization}</p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-[#8c6d46] hover:underline group"
              >
                <span>Read full background & experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </AnimateIn>
      </Section>

      {/* ─── 3. Capabilities ─── */}
      <Section
        label="Focus Areas"
        heading="What I Work On"
        description="Core technical capabilities across GraphRAG retrieval platforms, computer vision tools, and production ML infrastructure."
        className="border-b border-[#e6e2da]"
      >
        <CapabilitiesSection onHoverCategory={setHighlightedSlugs} />
      </Section>

      {/* ─── 4. Selected Work ─── */}
      <Section
        label="Projects"
        heading="Featured Work"
        description="Production AI platforms, desktop CV applications, and dataset engineering tools."
        className="border-b border-[#e6e2da]"
      >
        <SelectedWorkSection highlightedSlugs={highlightedSlugs} />
        <AnimateIn variant="fadeUp" delay={250}>
          <div className="mt-10 text-center sm:text-left">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#8c6d46] hover:underline group"
            >
              <span>Explore all projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimateIn>
      </Section>

      {/* ─── 5. Timeline ─── */}
      <Section
        label="Timeline"
        heading="Work & Credentials"
        className="border-b border-[#e6e2da]"
      >
        <Experience />
      </Section>

      {/* ─── 6. Contact CTA ─── */}
      <Section className="py-20 sm:py-28">
        <AnimateIn variant="fadeUp">
          <div className="max-w-2xl space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8c6d46]">
                Reach Out
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#1a1917] leading-tight">
                Interested in working together?{' '}
                <span className="text-[#8c6d46]">Let&apos;s talk.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#57544e] leading-relaxed font-sans">
              Open to discussing AI/ML engineering roles, GraphRAG platform architectures, computer vision pipelines, or production ML infrastructure.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href={`mailto:${profileData.email}`}
                variant="primary"
                icon={<Mail className="w-4 h-4" />}
              >
                {profileData.email}
              </Button>
              <Button href="/contact" variant="secondary">
                Contact Information
              </Button>
            </div>
          </div>
        </AnimateIn>
      </Section>
    </div>
  );
};
