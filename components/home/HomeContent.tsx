'use client';

import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { HeroIntro } from '@/components/home/HeroIntro';
import { SelectedWorkSection } from '@/components/home/SelectedWorkSection';
import { CapabilitiesSection } from '@/components/home/CapabilitiesSection';
import { ArrowRight, Mail, FileText } from 'lucide-react';
import { profileData } from '@/data/profile';

export const HomeContent: React.FC = () => {
  return (
    <div className="space-y-6 sm:space-y-12">
      {/* 1. Hero Viewport */}
      <Section className="pt-4 sm:pt-8 pb-4 sm:pb-4">
        <HeroIntro />
      </Section>

      {/* 2. Flagship Selected Work */}
      <Section
        label="Selected Work"
        heading="Featured Projects"
        description="GraphRAG retrieval systems and desktop computer vision applications."
        className="pt-10 sm:pt-8 pb-4 sm:pb-6"
      >
        <SelectedWorkSection />
        <div className="pt-4 text-left">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-base font-sans font-semibold text-[#5c6b2f] hover:text-[#485424] link-draw group active:scale-[0.98]"
          >
            <span>Explore more work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
          </Link>
        </div>
      </Section>

      {/* 3. Skills / Technical Focus Areas */}
      <Section
        label="Skills"
        heading="Technical Focus Areas"
        description="Building practical machine learning models, deep learning architectures, and production-oriented pipelines."
        className="py-4 sm:py-6"
      >
        <CapabilitiesSection />
      </Section>

      {/* 4. Streamlined Focus & Credentials Summary */}
      <Section
        label="Credentials"
        heading="Background Summary"
        className="py-4 sm:py-6"
      >
        <div className="max-w-2xl space-y-3 text-lg text-[#54563f] font-sans leading-relaxed">
          <p>
            Former Python AI Intern and Associate Data Analyst at Droisys; currently specializing in AI systems at CDAC Noida (CCAT AIR 286).
          </p>
          <div className="pt-1 flex flex-wrap items-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-base font-sans font-semibold text-[#5c6b2f] hover:text-[#485424] link-draw group active:scale-[0.98]"
            >
              <span>Read complete career history</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
            </Link>
            <Button
              href="/resume"
              variant="secondary"
              size="sm"
              icon={<FileText className="w-4 h-4" />}
            >
              View Resume
            </Button>
          </div>
        </div>
      </Section>

      {/* 5. Contact Callout Line */}
      <Section className="pt-2 sm:pt-4 pb-6 sm:pb-10">
        <div className="p-5 sm:p-8 rounded-xl bg-[#f7f8e8] border border-[#d6dba0] max-w-2xl space-y-3">
          <h2 className="text-[1.75rem] sm:text-[2.25rem] font-heading font-bold text-[#23241a] leading-tight">
            Interested in working together?
          </h2>
          <p className="text-base sm:text-lg text-[#54563f] font-sans leading-relaxed">
            Open to discussions regarding AI/ML engineering roles, regulatory compliance retrieval, and computer vision pipelines.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              href={`mailto:${profileData.email}`}
              variant="primary"
              icon={<Mail className="w-4 h-4" />}
            >
              {profileData.email}
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Details
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};
