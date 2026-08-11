'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { profileData } from '@/data/profile';
import { workExperienceData, educationData, extracurricularData } from '@/data/experience';
import { skillsData } from '@/data/skills';
import { projectsData } from '@/data/projects';
import {
  Download,
  FileText,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
  ExternalLink,
  Printer,
  Eye,
  CheckCircle2,
} from 'lucide-react';
import { IconGithub, IconLinkedin } from '@/components/ui/Icons';

export default function ResumePage() {
  const [viewMode, setViewMode] = useState<'native' | 'iframe'>('native');
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-8 sm:py-12 md:py-16 min-h-screen">
      <Container size="xl">
        <div className="space-y-8 max-w-5xl mx-auto">
          {/* Header Action Bar */}
          <AnimateIn variant="fadeUp">
            <div className="glass-panel p-4 sm:p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-[#c8a45e]" />
                  <h1 className="text-xl sm:text-2xl font-serif font-normal text-[#f3f2ef]">
                    Curriculum Vitae
                  </h1>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[rgba(74,222,128,0.1)] text-[#4ade80] border border-[rgba(74,222,128,0.2)]">
                    Live Verified
                  </span>
                </div>
                <p className="text-xs font-mono text-[#73706b]">
                  Hosted live on chaitanyajindal.dev • Last updated 2026
                </p>
              </div>

              {/* Action Controls */}
              <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                <Button
                  href={profileData.resumeExportUrl}
                  isExternal
                  variant="primary"
                  size="sm"
                  icon={<Download className="w-4 h-4" />}
                >
                  Download PDF
                </Button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-[#a8a5a0] hover:text-[#f3f2ef] bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all min-h-[44px]"
                >
                  <Printer className="w-4 h-4 text-[#c8a45e]" />
                  <span className="hidden md:inline">Print</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode(viewMode === 'native' ? 'iframe' : 'native')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-[#a8a5a0] hover:text-[#f3f2ef] bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all min-h-[44px]"
                >
                  <Eye className="w-4 h-4 text-[#c8a45e]" />
                  <span>{viewMode === 'native' ? 'Google Doc View' : 'Live UI View'}</span>
                </button>
              </div>
            </div>
          </AnimateIn>

          {/* ─── Mode 1: NATIVE LIVE HOSTED RESUME DOCUMENT ─── */}
          {viewMode === 'native' && (
            <AnimateIn variant="fadeUp" delay={100}>
              <article className="glass-panel p-6 sm:p-10 md:p-14 rounded-2xl space-y-12 shadow-[0_16px_48px_rgba(0,0,0,0.5)] border border-white/10 relative">
                {/* Specular Top Bar Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c8a45e]/20 via-[#c8a45e] to-[#c8a45e]/20 rounded-t-2xl" />

                {/* 1. Resume Identity Header */}
                <header className="space-y-4 border-b border-white/10 pb-8">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                    <div>
                      <h2 className="text-3xl sm:text-5xl font-serif text-[#f3f2ef] tracking-tight">
                        {profileData.name}
                      </h2>
                      <p className="text-sm sm:text-base font-mono text-[#c8a45e] pt-1">
                        {profileData.headline}
                      </p>
                    </div>
                  </div>

                  {/* Contact Telemetry Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 text-xs font-mono text-[#a8a5a0]">
                    <div className="flex items-center gap-2 bg-white/[0.03] p-2.5 rounded-xl border border-white/[0.06]">
                      <Mail className="w-3.5 h-3.5 text-[#c8a45e] shrink-0" />
                      <a href={`mailto:${profileData.email}`} className="hover:text-[#f3f2ef] transition-colors truncate">
                        {profileData.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 bg-white/[0.03] p-2.5 rounded-xl border border-white/[0.06]">
                      <MapPin className="w-3.5 h-3.5 text-[#c8a45e] shrink-0" />
                      <span className="truncate">{profileData.location}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/[0.03] p-2.5 rounded-xl border border-white/[0.06]">
                      <IconGithub className="w-3.5 h-3.5 text-[#c8a45e] shrink-0" />
                      <a href={profileData.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#f3f2ef] transition-colors truncate">
                        github.com/JindalChaitanya
                      </a>
                    </div>
                    <div className="flex items-center gap-2 bg-white/[0.03] p-2.5 rounded-xl border border-white/[0.06]">
                      <IconLinkedin className="w-3.5 h-3.5 text-[#c8a45e] shrink-0" />
                      <a href={profileData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#f3f2ef] transition-colors truncate">
                        linkedin.com/in/jindalchaitanya
                      </a>
                    </div>
                  </div>
                </header>

                {/* 2. Executive Statement */}
                <section className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#c8a45e] font-semibold">
                    // Professional Profile Summary
                  </h3>
                  <p className="text-sm sm:text-base text-[#a8a5a0] leading-relaxed font-sans">
                    {profileData.shortSummary} Specialized in engineering production-oriented retrieval platforms (GraphRAG), classical and neural computer vision tools (YOLO, SIFT, FLANN, OpenCV), automated dataset preparation pipelines, and cloud-native MLOps infrastructure.
                  </p>
                </section>

                {/* 3. Work Experience Section */}
                <section className="space-y-6">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a45e] border-b border-white/10 pb-3">
                    <Briefcase className="w-4 h-4 text-[#c8a45e]" />
                    <span>Work History & Industry Experience</span>
                  </div>

                  <div className="space-y-8">
                    {workExperienceData.map((exp) => (
                      <div key={`${exp.company}-${exp.role}`} className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                          <h4 className="text-lg font-serif font-normal text-[#f3f2ef]">
                            {exp.role} <span className="text-[#c8a45e]">@ {exp.company}</span>
                          </h4>
                          <span className="text-xs font-mono text-[#73706b]">
                            {exp.startDate} — {exp.endDate}
                          </span>
                        </div>
                        <p className="text-xs font-mono text-[#73706b]">{exp.location}</p>
                        <ul className="space-y-2">
                          {exp.highlights.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#a8a5a0]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#c8a45e] shrink-0 mt-1" />
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="accent" size="sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 4. Education & Advanced Specialization */}
                <section className="space-y-6">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a45e] border-b border-white/10 pb-3">
                    <GraduationCap className="w-4 h-4 text-[#c8a45e]" />
                    <span>Education & Advanced Specialization</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {educationData.map((edu) => (
                      <div key={edu.institution} className="glass-panel p-5 rounded-xl space-y-2 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono text-[#73706b]">
                              {edu.startDate} – {edu.endDate}
                            </span>
                            {edu.rankOrGrade && (
                              <Badge variant="success" size="sm">
                                {edu.rankOrGrade}
                              </Badge>
                            )}
                          </div>
                          <h4 className="text-base font-serif text-[#f3f2ef]">
                            {edu.degree}
                          </h4>
                          <p className="text-xs font-mono text-[#73706b]">
                            {edu.institution} • {edu.location}
                          </p>
                          <p className="text-xs text-[#a8a5a0] leading-relaxed pt-1">
                            {edu.details}
                          </p>
                        </div>
                        {edu.capstone && (
                          <div className="pt-2 border-t border-white/[0.08] text-[11px] font-mono text-[#73706b]">
                            <span className="text-[#c8a45e]">Capstone:</span> {edu.capstone}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                {/* 5. Key Engineering Projects Matrix */}
                <section className="space-y-6">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a45e] border-b border-white/10 pb-3">
                    <Sparkles className="w-4 h-4 text-[#c8a45e]" />
                    <span>Key Portfolio Engineering Projects</span>
                  </div>

                  <div className="space-y-4">
                    {projectsData.slice(0, 3).map((proj) => (
                      <div key={proj.slug} className="glass-panel p-5 rounded-xl space-y-2">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex items-center gap-2">
                            <h4 className="text-base font-serif text-[#f3f2ef]">{proj.title}</h4>
                            <Badge variant={proj.tier === 1 ? 'accent' : 'muted'} size="sm">
                              Tier {proj.tier}
                            </Badge>
                          </div>
                          {proj.githubUrl && (
                            <a
                              href={proj.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-mono text-[#c8a45e] hover:underline inline-flex items-center gap-1"
                            >
                              <span>Repository</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                        <p className="text-xs font-mono text-[#c8a45e]/80">{proj.tagline}</p>
                        <p className="text-xs text-[#a8a5a0] leading-relaxed">{proj.description}</p>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {proj.techStack.map((tech) => (
                            <Badge key={tech} variant="muted" size="sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 6. Technical Skill Taxonomy */}
                <section className="space-y-6">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#c8a45e] border-b border-white/10 pb-3">
                    <Award className="w-4 h-4 text-[#c8a45e]" />
                    <span>Technical Skill Matrix</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skillsData.map((group) => (
                      <div key={group.id} className="glass-panel p-4 rounded-xl space-y-2">
                        <h4 className="text-xs font-mono uppercase text-[#f3f2ef] font-semibold">
                          {group.category}
                        </h4>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {group.technologies.map((tech) => (
                            <Badge key={tech} variant="accent" size="sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 7. Leadership & Training */}
                <section className="space-y-4">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#73706b] border-b border-white/10 pb-2">
                    // Leadership & Mentorship
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {extracurricularData.map((extra) => (
                      <div key={extra.organization} className="glass-panel p-4 rounded-xl space-y-1">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-[#f3f2ef] font-semibold">{extra.title}</span>
                          <span className="text-[#73706b]">{extra.period}</span>
                        </div>
                        <p className="text-xs font-mono text-[#c8a45e]/70">{extra.organization}</p>
                        <p className="text-xs text-[#a8a5a0] pt-1">{extra.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </article>
            </AnimateIn>
          )}

          {/* ─── Mode 2: GOOGLE DOC IFRAME VIEW ─── */}
          {viewMode === 'iframe' && (
            <AnimateIn variant="fadeUp">
              <div className="glass-panel rounded-2xl overflow-hidden min-h-[calc(100vh-14rem)] relative border border-white/10">
                {!iframeLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#08080a]/80 z-10">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-8 border-2 border-white/10 border-t-[#c8a45e] rounded-full animate-spin" />
                      <span className="text-xs font-mono text-[#73706b]">Loading Google Doc...</span>
                    </div>
                  </div>
                )}
                <iframe
                  src={profileData.resumePreviewUrl}
                  title={`${profileData.name} Resume Doc`}
                  className={`w-full h-full min-h-[calc(100vh-14rem)] border-0 transition-opacity duration-500 ${
                    iframeLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setIframeLoaded(true)}
                  allow="autoplay"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                />
              </div>
            </AnimateIn>
          )}
        </div>
      </Container>
    </div>
  );
}
