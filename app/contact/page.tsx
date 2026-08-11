import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { IconGithub, IconLinkedin } from '@/components/ui/Icons';
import { profileData } from '@/data/profile';

export const metadata: Metadata = {
  title: 'Contact — Chaitanya Jindal',
  description:
    'Direct contact channels and professional profiles for Chaitanya Jindal.',
};

export default function ContactPage() {
  return (
    <div>
      <Section className="py-12 sm:py-20">
        <div className="max-w-3xl space-y-10">
          {/* Header */}
          <div className="space-y-3">
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8c6d46]">
              Reach Out
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#1a1917] tracking-tight">
              Contact
            </h1>
            <p className="text-base sm:text-lg text-[#57544e] font-sans leading-relaxed">
              If you&apos;re interested in AI/ML engineering, retrieval platforms, computer vision pipelines, or building production systems, I&apos;d be happy to hear from you.
            </p>
          </div>

          {/* Primary Email CTA */}
          <AnimateIn variant="fadeUp">
            <Card variant="paper" className="p-8 sm:p-10 space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-[rgba(140,109,70,0.1)] border border-[rgba(140,109,70,0.2)]">
                  <Mail className="w-6 h-6 text-[#8c6d46]" />
                </div>
                <div>
                  <h2 className="text-xl font-sans font-semibold text-[#1a1917]">
                    Direct Email
                  </h2>
                  <p className="text-xs font-sans text-[#6e6a62]">
                    Best channel for engineering opportunities & inquiries
                  </p>
                </div>
              </div>
              <p className="text-lg sm:text-xl font-mono text-[#8c6d46] break-all">
                {profileData.email}
              </p>
              <Button
                href={`mailto:${profileData.email}`}
                variant="primary"
                size="lg"
              >
                Send Email
              </Button>
            </Card>
          </AnimateIn>

          {/* Contact Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* LinkedIn */}
            <AnimateIn variant="fadeUp" delay={80}>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card variant="interactive" className="p-6 space-y-4 h-full">
                  <div className="flex items-center justify-between">
                    <IconLinkedin className="w-6 h-6 text-[#57544e] group-hover:text-[#1a1917] transition-colors" />
                    <ArrowUpRight className="w-4 h-4 text-[#6e6a62] group-hover:text-[#8c6d46] transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-[#1a1917] text-sm">
                      LinkedIn
                    </h3>
                    <p className="text-xs font-mono text-[#6e6a62] mt-1 break-all">
                      /in/jindalchaitanya
                    </p>
                  </div>
                </Card>
              </a>
            </AnimateIn>

            {/* GitHub */}
            <AnimateIn variant="fadeUp" delay={160}>
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card variant="interactive" className="p-6 space-y-4 h-full">
                  <div className="flex items-center justify-between">
                    <IconGithub className="w-6 h-6 text-[#57544e] group-hover:text-[#1a1917] transition-colors" />
                    <ArrowUpRight className="w-4 h-4 text-[#6e6a62] group-hover:text-[#8c6d46] transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-[#1a1917] text-sm">
                      GitHub
                    </h3>
                    <p className="text-xs font-mono text-[#6e6a62] mt-1 break-all">
                      /JindalChaitanya
                    </p>
                  </div>
                </Card>
              </a>
            </AnimateIn>

            {/* Location */}
            <AnimateIn variant="fadeUp" delay={240}>
              <Card variant="default" className="p-6 space-y-4 h-full">
                <div className="flex items-center justify-between">
                  <MapPin className="w-6 h-6 text-[#57544e]" />
                  <span className="text-xs font-sans text-[#5e6653] font-medium px-2 py-0.5 rounded bg-[rgba(94,102,83,0.1)] border border-[rgba(94,102,83,0.2)]">
                    Available
                  </span>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-[#1a1917] text-sm">
                    {profileData.location}
                  </h3>
                  <p className="text-xs font-sans text-[#6e6a62] mt-1">
                    Noida / Delhi NCR, India
                  </p>
                </div>
              </Card>
            </AnimateIn>
          </div>
        </div>
      </Section>
    </div>
  );
}
