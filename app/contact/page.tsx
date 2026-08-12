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
      <Section className="py-6 sm:py-12">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          {/* Header */}
          <div className="space-y-3">
            <span className="text-xs font-sans font-medium uppercase tracking-wider text-[#8c6d46]">
              Reach Out
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#181816] tracking-tight">
              Contact
            </h1>
            <p className="text-base sm:text-lg text-[#5c5954] font-sans leading-relaxed">
              If you&apos;re interested in AI/ML engineering, retrieval platforms, computer vision pipelines, or building production systems, I&apos;d be happy to hear from you.
            </p>
          </div>

          {/* Primary Email */}
          <AnimateIn>
            <div className="p-8 rounded-lg bg-[#f4f2eb] border border-[#e6e2da] space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#8c6d46]" />
                <h2 className="text-lg font-sans font-semibold text-[#181816]">
                  Direct Email
                </h2>
              </div>
              <p className="text-xl sm:text-2xl font-serif text-[#8c6d46] break-all">
                {profileData.email}
              </p>
              <div className="pt-2">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {/* LinkedIn */}
            <AnimateIn delay={50}>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group p-5 rounded-lg border border-[#e6e2da] hover:border-[#8c6d46] transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <IconLinkedin className="w-5 h-5 text-[#5c5954] group-hover:text-[#181816] transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-[#737067] group-hover:text-[#8c6d46] transition-colors" />
                </div>
                <h3 className="font-sans font-semibold text-[#181816] text-sm">
                  LinkedIn
                </h3>
                <p className="text-xs font-sans text-[#737067] mt-1">
                  /in/jindalchaitanya
                </p>
              </a>
            </AnimateIn>

            {/* GitHub */}
            <AnimateIn delay={100}>
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group p-5 rounded-lg border border-[#e6e2da] hover:border-[#8c6d46] transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <IconGithub className="w-5 h-5 text-[#5c5954] group-hover:text-[#181816] transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-[#737067] group-hover:text-[#8c6d46] transition-colors" />
                </div>
                <h3 className="font-sans font-semibold text-[#181816] text-sm">
                  GitHub
                </h3>
                <p className="text-xs font-sans text-[#737067] mt-1">
                  /JindalChaitanya
                </p>
              </a>
            </AnimateIn>

            {/* Instagram */}
            <AnimateIn delay={125}>
              <a
                href={profileData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group p-5 rounded-lg border border-[#e6e2da] hover:border-[#8c6d46] transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <IconInstagram className="w-5 h-5 text-[#5c5954] group-hover:text-[#8c6d46] transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-[#737067] group-hover:text-[#8c6d46] transition-colors" />
                </div>
                <h3 className="font-sans font-semibold text-[#181816] text-sm">
                  Instagram
                </h3>
                <p className="text-xs font-sans text-[#737067] mt-1">
                  /jindalchaitanya
                </p>
              </a>
            </AnimateIn>

            {/* Location */}
            <AnimateIn delay={150}>
              <div className="p-5 rounded-lg border border-[#e6e2da]">
                <div className="flex items-center justify-between mb-3">
                  <MapPin className="w-5 h-5 text-[#5c5954]" />
                  <span className="text-[11px] font-sans text-[#5e6653] font-medium px-2 py-0.5 rounded bg-[#f4f2eb]">
                    Available
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-[#181816] text-sm">
                  Location
                </h3>
                <p className="text-xs font-sans text-[#737067] mt-1">
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
