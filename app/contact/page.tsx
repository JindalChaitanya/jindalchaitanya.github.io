import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { IconGithub, IconLinkedin, IconInstagram } from '@/components/ui/Icons';
import { profileData } from '@/data/profile';

export const metadata: Metadata = {
  title: 'Contact | Chaitanya Jindal',
  description:
    'Direct contact channels and professional profiles for Chaitanya Jindal.',
};

export default function ContactPage() {
  return (
    <div>
      <Section className="py-4 sm:py-10">
        <div className="max-w-3xl space-y-5 sm:space-y-8">
          {/* Header */}
          <div className="space-y-2.5 sm:space-y-3">
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#5c6b2f]">
              Reach Out
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-bold text-[#23241a] tracking-tight">
              Contact
            </h1>
            <p className="text-base sm:text-lg text-[#54563f] font-sans leading-relaxed">
              If you&apos;re interested in AI/ML engineering, retrieval platforms, computer vision pipelines, or building production systems, I&apos;d be happy to hear from you.
            </p>
          </div>

          {/* Primary Email Card */}
          <AnimateIn duration={350}>
            <div className="p-5 sm:p-8 rounded-xl bg-[#f7f8e8] border border-[#d6dba0] space-y-3.5 sm:space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#5c6b2f]" />
                <h2 className="text-lg font-sans font-bold text-[#23241a]">
                  Direct Email
                </h2>
              </div>
              <p className="text-lg sm:text-2xl font-sans text-[#5c6b2f] break-all font-semibold">
                {profileData.email}
              </p>
              <div className="pt-1 sm:pt-2">
                <Button
                  href={`mailto:${profileData.email}`}
                  variant="primary"
                  size="md"
                >
                  Send Email
                </Button>
              </div>
            </div>
          </AnimateIn>

          {/* Profiles & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-2 sm:pt-4">
            {/* LinkedIn */}
            <AnimateIn delay={50} duration={300}>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group p-4 sm:p-5 rounded-xl bg-[#f7f8e8] border border-[#d6dba0] hover:border-[#5c6b2f] hover:-translate-y-1 hover:rotate-[0.3deg] transition-all duration-200 active:scale-[0.98]"
              >
                <div className="flex items-center justify-between mb-3">
                  <IconLinkedin className="w-5 h-5 text-[#54563f] group-hover:text-[#23241a] transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-[#6b6e50] group-hover:text-[#5c6b2f] transition-colors" />
                </div>
                <h3 className="font-sans font-bold text-[#23241a] text-sm">
                  LinkedIn
                </h3>
                <p className="text-xs font-sans text-[#6b6e50] mt-1">
                  /in/jindalchaitanya
                </p>
              </a>
            </AnimateIn>

            {/* GitHub */}
            <AnimateIn delay={100} duration={300}>
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group p-4 sm:p-5 rounded-xl bg-[#f7f8e8] border border-[#d6dba0] hover:border-[#5c6b2f] hover:-translate-y-1 hover:rotate-[0.3deg] transition-all duration-200 active:scale-[0.98]"
              >
                <div className="flex items-center justify-between mb-3">
                  <IconGithub className="w-5 h-5 text-[#54563f] group-hover:text-[#23241a] transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-[#6b6e50] group-hover:text-[#5c6b2f] transition-colors" />
                </div>
                <h3 className="font-sans font-bold text-[#23241a] text-sm">
                  GitHub
                </h3>
                <p className="text-xs font-sans text-[#6b6e50] mt-1">
                  /JindalChaitanya
                </p>
              </a>
            </AnimateIn>

            {/* Instagram */}
            <AnimateIn delay={125} duration={300}>
              <a
                href={profileData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group p-4 sm:p-5 rounded-xl bg-[#f7f8e8] border border-[#d6dba0] hover:border-[#b34716] hover:-translate-y-1 hover:rotate-[0.3deg] transition-all duration-200 active:scale-[0.98]"
              >
                <div className="flex items-center justify-between mb-3">
                  <IconInstagram className="w-5 h-5 text-[#54563f] group-hover:text-[#b34716] transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-[#6b6e50] group-hover:text-[#b34716] transition-colors" />
                </div>
                <h3 className="font-sans font-bold text-[#23241a] text-sm">
                  Instagram
                </h3>
                <p className="text-xs font-sans text-[#6b6e50] mt-1">
                  /jindalchaitanya
                </p>
              </a>
            </AnimateIn>

            {/* Location */}
            <AnimateIn delay={150} duration={300}>
              <div className="p-4 sm:p-5 rounded-xl bg-[#f7f8e8] border border-[#d6dba0]">
                <div className="flex items-center justify-between mb-3">
                  <MapPin className="w-5 h-5 text-[#54563f]" />
                  <span className="text-[11px] font-sans text-[#23241a] font-medium px-2 py-0.5 rounded-xs bg-[#e2e8a7] border border-[#d6dba0]">
                    Available
                  </span>
                </div>
                <h3 className="font-sans font-bold text-[#23241a] text-sm">
                  Location
                </h3>
                <p className="text-xs font-sans text-[#6b6e50] mt-1">
                  Noida / Delhi NCR, India
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </Section>
    </div>
  );
}
