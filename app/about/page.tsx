import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Experience } from '@/components/sections/Experience';
import { CapabilitiesSection } from '@/components/home/CapabilitiesSection';
import { extracurricularData } from '@/data/experience';
import { profileData } from '@/data/profile';
import { FileText, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | Chaitanya Jindal',
  description:
    'Background, engineering journey, CDAC PGCP-AI specialization, and Droisys experience of Chaitanya Jindal.',
};

export default function AboutPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <Section className="pb-2 pt-4 sm:pt-8">
        <div className="space-y-6 max-w-3xl">
          {/* Header */}
          <div className="space-y-3">
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8c6d46]">
              Background & Experience
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-bold text-[#181816] tracking-tight">
              About Chaitanya Jindal
            </h1>
            <p className="text-base sm:text-lg text-[#4a4843] leading-relaxed font-sans">
              AI Systems Engineer specializing in hybrid GraphRAG retrieval and desktop computer vision tools.
            </p>
          </div>

          {/* Quick Resume Link */}
          <div className="p-5 rounded-lg bg-[#f4f2eb] border border-[#e6e2da] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-base font-sans font-semibold text-[#181816]">
                My Resume
              </h2>
              <p className="text-xs text-[#737067] font-sans">
                Complete career history, education, and technical experience.
              </p>
            </div>
            <Button
              href="/resume"
              variant="primary"
              size="sm"
              icon={<FileText className="w-4 h-4" />}
            >
              View Resume
            </Button>
          </div>

          {/* Narrative Summary */}
          <div className="space-y-4 text-base text-[#4a4843] font-sans leading-relaxed pt-2">
            <h2 className="text-2xl font-heading font-bold text-[#181816]">
              Engineering Journey
            </h2>
            <p>{profileData.bioNarrative.foundation}</p>
            <p>{profileData.bioNarrative.specialization}</p>
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section label="Timeline" heading="Work & Education">
        <Experience />
      </Section>

      {/* Capabilities Section */}
      <Section label="Capabilities" heading="Technical Focus Areas">
        <CapabilitiesSection />
      </Section>

      {/* Leadership Section */}
      <Section label="Leadership" heading="Leadership & Training">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {extracurricularData.map((extra) => (
            <div key={extra.organization} className="space-y-1">
              <h3 className="font-sans font-semibold text-[#181816] text-sm">
                {extra.title} - <span className="text-[#8c6d46] font-normal">{extra.organization}</span>
              </h3>
              <span className="text-xs font-sans text-[#737067] block">
                {extra.period}
              </span>
              <p className="text-xs text-[#4a4843] font-sans leading-relaxed pt-1">
                {extra.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Callout */}
      <Section className="pb-16 pt-4">
        <div className="p-8 rounded-lg bg-[#f4f2eb] border border-[#e6e2da] space-y-4 max-w-3xl">
          <h3 className="text-2xl font-heading font-bold text-[#181816]">
            Interested in discussing AI engineering projects or roles?
          </h3>
          <p className="text-sm text-[#4a4843] font-sans">
            Open to discussions regarding GraphRAG retrieval platforms, regulatory compliance systems, or computer vision pipelines.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              href={`mailto:${profileData.email}`}
              variant="primary"
              icon={<Mail className="w-4 h-4" />}
            >
              Send Email
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Details
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
