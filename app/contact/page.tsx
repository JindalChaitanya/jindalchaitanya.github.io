'use client';

import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { IconGithub, IconLinkedin } from '@/components/ui/Icons';

export default function ContactPage() {
  return (
    <div>
      <Section
        label="Communication"
        heading="Get In Touch"
        description="Direct contact channels and verified professional profiles."
      >
        <div className="max-w-4xl space-y-8">
          {/* Primary Email CTA */}
          <AnimateIn variant="fadeUp">
            <div className="relative rounded-xl border border-[rgba(200,164,94,0.15)] bg-[rgba(200,164,94,0.03)] p-8 sm:p-10 space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-[rgba(200,164,94,0.1)] border border-[rgba(200,164,94,0.2)]">
                  <Mail className="w-6 h-6 text-[#c8a45e]" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-[#e8e6e3]">
                    Direct Email
                  </h2>
                  <p className="text-xs font-mono text-[#6b6966]">
                    Preferred for inquiries & opportunities
                  </p>
                </div>
              </div>
              <p className="text-lg sm:text-xl font-mono text-[#c8a45e] break-all">
                chaitanya.jindal2002@gmail.com
              </p>
              <Button
                href="mailto:chaitanya.jindal2002@gmail.com"
                variant="primary"
                size="lg"
              >
                Send Email
              </Button>
            </div>
          </AnimateIn>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* LinkedIn */}
            <AnimateIn variant="fadeUp" delay={100}>
              <a
                href="https://linkedin.com/in/jindalchaitanya"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-[#1e1e22] bg-[#111113] p-6 space-y-4 hover:border-[#2a2a2e] hover:bg-[#151517] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <IconLinkedin className="w-6 h-6 text-[#6b6966] group-hover:text-[#e8e6e3] transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-[#3d3b39] group-hover:text-[#c8a45e] transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#e8e6e3] text-sm">
                    LinkedIn
                  </h3>
                  <p className="text-xs font-mono text-[#6b6966] mt-1 break-all">
                    /in/jindalchaitanya
                  </p>
                </div>
              </a>
            </AnimateIn>

            {/* GitHub */}
            <AnimateIn variant="fadeUp" delay={200}>
              <a
                href="https://github.com/JindalChaitanya"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-[#1e1e22] bg-[#111113] p-6 space-y-4 hover:border-[#2a2a2e] hover:bg-[#151517] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <IconGithub className="w-6 h-6 text-[#6b6966] group-hover:text-[#e8e6e3] transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-[#3d3b39] group-hover:text-[#c8a45e] transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#e8e6e3] text-sm">
                    GitHub
                  </h3>
                  <p className="text-xs font-mono text-[#6b6966] mt-1 break-all">
                    /JindalChaitanya
                  </p>
                </div>
              </a>
            </AnimateIn>

            {/* Location */}
            <AnimateIn variant="fadeUp" delay={300}>
              <div className="rounded-xl border border-[#1e1e22] bg-[#111113] p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <MapPin className="w-6 h-6 text-[#6b6966]" />
                  <span className="text-[10px] font-mono text-[#4ade80] flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4ade80]" />
                    </span>
                    Open to work
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#e8e6e3] text-sm">
                    Noida, India
                  </h3>
                  <p className="text-xs font-mono text-[#6b6966] mt-1">
                    AI / ML Engineering
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </Section>
    </div>
  );
}
