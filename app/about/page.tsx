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
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#5c6b2f]">
              Background & Experience
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-bold text-[#23241a] tracking-tight">
              About Chaitanya Jindal
            </h1>
            <p className="text-base sm:text-lg text-[#54563f] leading-relaxed font-sans">
              AI Systems Engineer specializing in hybrid GraphRAG retrieval and desktop computer vision tools.
            </p>
          </div>

          {/* Quick Resume Link */}
          <div className="p-5 rounded-xl bg-[#f7f8e8] border border-[#d6dba0] flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-transform hover:-translate-y-0.5">
            <div className="space-y-1">
              <h2 className="text-base font-sans font-semibold text-[#23241a]">
                My Resume
              </h2>
              <p className="text-xs text-[#6b6e50] font-sans">
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
          <div className="space-y-4 text-base text-[#54563f] font-sans leading-relaxed pt-2">
            <h2 className="text-2xl font-heading font-bold text-[#23241a]">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {extracurricularData.map((extra) => (
            <div key={extra.organization} className="p-4 sm:p-5 rounded-xl bg-[#f7f8e8] border border-[#d6dba0] space-y-1.5 transition-transform hover:-translate-y-0.5">
              <h3 className="font-sans font-semibold text-[#23241a] text-sm">
                {extra.title} - <span className="text-[#5c6b2f] font-normal">{extra.organization}</span>
              </h3>
              <span className="text-xs font-sans text-[#6b6e50] block">
                {extra.period}
              </span>
              <p className="text-xs text-[#54563f] font-sans leading-relaxed pt-1">
                {extra.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Callout */}
      <Section className="pb-16 pt-4">
        <div className="p-6 sm:p-8 rounded-xl bg-[#f7f8e8] border border-[#d6dba0] space-y-4 max-w-3xl">
          <h3 className="text-2xl font-heading font-bold text-[#23241a]">
            Interested in discussing AI engineering projects or roles?
          </h3>
          <p className="text-sm text-[#54563f] font-sans">
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
