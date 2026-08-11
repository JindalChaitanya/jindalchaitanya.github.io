import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { extracurricularData } from '@/data/experience';
import { profileData } from '@/data/profile';
import { FileText, Mail, Compass, Cpu, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — Chaitanya Jindal',
  description:
    'Background, engineering journey, CDAC PGCP-AI specialization, Droisys work history, and technical focus areas of Chaitanya Jindal.',
};

export default function AboutPage() {
  return (
    <div>
      {/* ─── Header & Introduction ─── */}
      <Section className="pb-8 pt-10 sm:pt-16">
        <div className="space-y-12">
          {/* Main Page Title (Single h1 for WCAG accessibility) */}
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8c6d46]">
              Background & Experience
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#1a1917] tracking-tight">
              About Chaitanya Jindal
            </h1>
            <p className="text-base sm:text-lg text-[#57544e] leading-relaxed font-sans">
              AI Systems Engineer specializing in GraphRAG retrieval platforms, computer vision pipelines, and production ML infrastructure.
            </p>
          </div>

          {/* Resume Banner CTA */}
          <AnimateIn variant="fadeUp">
            <Card variant="paper" className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-lg font-sans font-semibold text-[#1a1917]">
                  Curriculum Vitae / Resume
                </h2>
                <p className="text-xs text-[#6e6a62] font-sans">
                  Complete career history, education, and technical experience.
                </p>
              </div>
              <Button
                href="/resume"
                variant="primary"
                icon={<FileText className="w-4 h-4" />}
              >
                View Resume
              </Button>
            </Card>
          </AnimateIn>

          {/* Core Focus Cards */}
          <div className="space-y-6 max-w-4xl">
            <AnimateIn variant="fadeUp">
              <h2 className="text-2xl font-serif text-[#1a1917]">
                Computer Vision, Retrieval Systems & ML Infrastructure
              </h2>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimateIn variant="fadeUp" delay={80}>
                <Card variant="default" className="p-6 space-y-3 h-full">
                  <div className="p-2.5 rounded-lg bg-[rgba(140,109,70,0.08)] text-[#8c6d46] w-fit">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-sans font-semibold text-[#1a1917]">
                    Foundational Engineering
                  </h3>
                  <p className="text-xs text-[#57544e] font-sans leading-relaxed">
                    B.Tech in CSE from JSSATE Noida (78.1% aggregate). Solid foundation in algorithms, operating systems, software architecture, and computer science theory.
                  </p>
                </Card>
              </AnimateIn>

              <AnimateIn variant="fadeUp" delay={160}>
                <Card variant="default" className="p-6 space-y-3 h-full">
                  <div className="p-2.5 rounded-lg bg-[rgba(140,109,70,0.08)] text-[#8c6d46] w-fit">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-sans font-semibold text-[#1a1917]">
                    Droisys Experience
                  </h3>
                  <p className="text-xs text-[#57544e] font-sans leading-relaxed">
                    Engineered automated image cropping pipelines (YOLO/OpenCV) cutting turnaround by 40–50%, and localized Auto-Annotator tools reducing labeling labor by 60%.
                  </p>
                </Card>
              </AnimateIn>

              <AnimateIn variant="fadeUp" delay={240}>
                <Card variant="default" className="p-6 space-y-3 h-full">
                  <div className="p-2.5 rounded-lg bg-[rgba(140,109,70,0.08)] text-[#8c6d46] w-fit">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-sans font-semibold text-[#1a1917]">
                    CDAC PGCP-AI & GraphRAG
                  </h3>
                  <p className="text-xs text-[#57544e] font-sans leading-relaxed">
                    AIR 286 in CCAT for full-time CDAC PGCP-AI program. Building GraphReg — a hybrid Graph + Vector RAG regulatory compliance platform.
                  </p>
                </Card>
              </AnimateIn>
            </div>
          </div>

          {/* ─── Experience Section ─── */}
          <div className="space-y-6 pt-4 border-t border-[#e6e2da]">
            <Experience />
          </div>

          {/* ─── Skills Section ─── */}
          <div className="space-y-6 pt-4 border-t border-[#e6e2da]">
            <AnimateIn variant="fadeUp">
              <h2 className="text-2xl font-serif text-[#1a1917] mb-6">
                Technical Skills & Capabilities
              </h2>
            </AnimateIn>
            <Skills />
          </div>

          {/* ─── Leadership & Extracurriculars ─── */}
          <div className="space-y-6 pt-4 border-t border-[#e6e2da]">
            <AnimateIn variant="fadeUp">
              <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#6e6a62] block mb-1">
                Leadership
              </span>
              <h2 className="text-xl font-serif text-[#1a1917]">
                Leadership & Training Programs
              </h2>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {extracurricularData.map((extra, i) => (
                <AnimateIn key={extra.organization} variant="fadeUp" delay={i * 80}>
                  <Card variant="default" className="p-5 space-y-2 h-full flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-sans font-semibold text-[#1a1917] text-sm">
                          {extra.title}
                        </h3>
                        <span className="text-xs font-sans text-[#6e6a62]">
                          {extra.period}
                        </span>
                      </div>
                      <p className="text-xs font-sans text-[#8c6d46] font-medium">
                        {extra.organization}
                      </p>
                      <p className="text-xs text-[#57544e] font-sans leading-relaxed pt-1">
                        {extra.description}
                      </p>
                    </div>
                  </Card>
                </AnimateIn>
              ))}
            </div>
          </div>

          {/* ─── Contact CTA ─── */}
          <AnimateIn variant="fadeUp">
            <Card variant="paper" className="p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8c6d46]">
                  Reach Out
                </span>
                <h3 className="text-2xl font-serif text-[#1a1917]">
                  Interested in discussing AI engineering projects or roles?
                </h3>
                <p className="text-sm text-[#57544e] font-sans">
                  Open to discussions regarding GraphRAG platforms, computer vision pipelines, or ML infrastructure.
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
                  Contact Info
                </Button>
              </div>
            </Card>
          </AnimateIn>
        </div>
      </Section>
    </div>
  );
}
