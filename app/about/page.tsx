import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { extracurricularData } from '@/data/experience';
import { profileData } from '@/data/profile';
import { FileText, ArrowRight, Mail, Compass, Cpu, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — Chaitanya Jindal',
  description:
    'Background, engineering journey, CDAC PGCP-AI specialization, Droisys work history, and technical skill taxonomy of Chaitanya Jindal.',
};

export default function AboutPage() {
  return (
    <div>
      {/* ─── 1. Header & Introduction ─── */}
      <Section
        label="Background & Narrative"
        heading="About & Engineering Journey"
        description="Engineering background, career progression at Droisys, CDAC PGCP-AI specialization, and core technical competencies."
      >
        <div className="space-y-16">
          {/* Resume Banner CTA */}
          <AnimateIn variant="fadeUp">
            <div className="relative rounded-xl border border-[rgba(200,164,94,0.15)] bg-[rgba(200,164,94,0.03)] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-lg font-semibold text-[#e8e6e3]">
                  Official Curriculum Vitae
                </h2>
                <p className="text-xs text-[#6b6966] font-mono">
                  Verified career history and source material documented in standard format.
                </p>
              </div>
              <Button
                href="/resume"
                variant="primary"
                icon={<FileText className="w-4 h-4" />}
              >
                View Resume
              </Button>
            </div>
          </AnimateIn>

          {/* Editorial Narrative Section */}
          <div className="space-y-8 max-w-4xl">
            <AnimateIn variant="fadeUp">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#c8a45e]">
                  // Narrative
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#e8e6e3] leading-snug">
                  Bridging computer vision automation, grounded retrieval systems, and production ML infrastructure.
                </h2>
              </div>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <AnimateIn variant="fadeUp" delay={100}>
                <div className="rounded-xl border border-[#1e1e22] bg-[#111113] p-6 space-y-3 h-full">
                  <div className="p-2.5 rounded-lg bg-[rgba(200,164,94,0.08)] text-[#c8a45e] w-fit">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#e8e6e3]">
                    Foundational Engineering
                  </h3>
                  <p className="text-xs text-[#a3a1a0] leading-relaxed">
                    Graduated with B.Tech in CSE from JSSATE Noida (78.1% aggregate). Developed computer science fundamentals in algorithms, systems engineering, and software design.
                  </p>
                </div>
              </AnimateIn>

              <AnimateIn variant="fadeUp" delay={200}>
                <div className="rounded-xl border border-[#1e1e22] bg-[#111113] p-6 space-y-3 h-full">
                  <div className="p-2.5 rounded-lg bg-[rgba(200,164,94,0.08)] text-[#c8a45e] w-fit">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#e8e6e3]">
                    Droisys Work History
                  </h3>
                  <p className="text-xs text-[#a3a1a0] leading-relaxed">
                    Engineered automated image cropping pipelines (YOLO/OpenCV) cutting turnaround by 40–50%, and an Auto-Annotator toolkit reducing manual labeling labor by 60%.
                  </p>
                </div>
              </AnimateIn>

              <AnimateIn variant="fadeUp" delay={300}>
                <div className="rounded-xl border border-[#1e1e22] bg-[#111113] p-6 space-y-3 h-full">
                  <div className="p-2.5 rounded-lg bg-[rgba(200,164,94,0.08)] text-[#c8a45e] w-fit">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#e8e6e3]">
                    CDAC PGCP-AI & GraphRAG
                  </h3>
                  <p className="text-xs text-[#a3a1a0] leading-relaxed">
                    Secured CCAT AIR 286 for full-time CDAC PGCP-AI program. Building GraphReg — a hybrid GraphRAG regulatory compliance platform.
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>

          {/* ─── 2. Career Experience & Education Timeline ─── */}
          <div className="space-y-6">
            <AnimateIn variant="fadeUp">
              <div className="flex items-center justify-between border-b border-[#1e1e22] pb-4">
                <div>
                  <span className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#c8a45e] block mb-1">
                    Timeline
                  </span>
                  <h2 className="text-2xl font-serif text-[#e8e6e3]">
                    Career History & Academic Credentials
                  </h2>
                </div>
              </div>
            </AnimateIn>

            <Experience />
          </div>

          {/* ─── 3. Skills & Capabilities Matrix ─── */}
          <div className="space-y-6">
            <AnimateIn variant="fadeUp">
              <div className="flex items-center justify-between border-b border-[#1e1e22] pb-4">
                <div>
                  <span className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#c8a45e] block mb-1">
                    Taxonomy
                  </span>
                  <h2 className="text-2xl font-serif text-[#e8e6e3]">
                    Technical Skill Taxonomy
                  </h2>
                </div>
              </div>
            </AnimateIn>

            <Skills />
          </div>

          {/* ─── 4. Leadership & Extracurriculars ─── */}
          <div className="space-y-6">
            <AnimateIn variant="fadeUp">
              <span className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#6b6966] block mb-1">
                Leadership
              </span>
              <h2 className="text-xl font-serif text-[#e8e6e3]">
                Leadership Roles & Specialized Training
              </h2>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {extracurricularData.map((extra, i) => (
                <AnimateIn key={extra.organization} variant="fadeUp" delay={i * 100}>
                  <div className="rounded-xl border border-[#1e1e22] bg-[#111113] p-5 space-y-2 hover:border-[#2a2a2e] transition-colors h-full flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-[#e8e6e3] text-sm">
                          {extra.title}
                        </h3>
                        <span className="text-[10px] font-mono text-[#6b6966]">
                          {extra.period}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-[#c8a45e]/70">
                        {extra.organization}
                      </p>
                      <p className="text-xs text-[#a3a1a0] leading-relaxed pt-1">
                        {extra.description}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>

          {/* ─── 5. Contact CTA ─── */}
          <AnimateIn variant="fadeUp">
            <div className="rounded-xl border border-[#1e1e22] bg-[#111113] p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#c8a45e]">
                  Connect
                </span>
                <h3 className="text-2xl font-serif text-[#e8e6e3]">
                  Interested in discussing AI engineering projects or roles?
                </h3>
                <p className="text-sm text-[#a3a1a0]">
                  Open to discussions regarding GraphRAG platforms, computer vision automation pipelines, or ML infrastructure.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Button
                  href={`mailto:${profileData.email}`}
                  variant="primary"
                  icon={<Mail className="w-4 h-4" />}
                >
                  Send Email
                </Button>
                <Button href="/contact" variant="secondary">
                  Contact Hub
                </Button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </Section>
    </div>
  );
}
