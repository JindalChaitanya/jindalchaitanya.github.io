'use client';

import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { workExperienceData, educationData, extracurricularData } from '@/data/experience';
import { skillsData } from '@/data/skills';
import { GraduationCap, Briefcase, Award, FileText } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      <Section
        label="Engineering Background"
        heading="About & Background"
        description="Academic qualifications, professional history at Droisys, technical leadership, and complete skill taxonomy."
      >
        <div className="space-y-16">
          {/* Resume Download CTA */}
          <AnimateIn variant="fadeUp">
            <div className="relative rounded-xl border border-[rgba(200,164,94,0.15)] bg-[rgba(200,164,94,0.03)] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-lg font-semibold text-[#e8e6e3]">
                  Official Curriculum Vitae
                </h2>
                <p className="text-xs text-[#6b6966] font-mono">
                  View and download the official resume document.
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

          {/* Education */}
          <div className="space-y-6">
            <AnimateIn variant="fadeUp">
              <div className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#c8a45e]">
                <GraduationCap className="w-4 h-4" />
                <span>Education & Advanced Training</span>
              </div>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {educationData.map((edu, i) => (
                <AnimateIn key={edu.institution} variant="fadeUp" delay={i * 100}>
                  <div className="rounded-xl border border-[#1e1e22] bg-[#111113] p-6 space-y-3 h-full flex flex-col justify-between group hover:border-[#2a2a2e] transition-colors">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="text-[10px] font-mono text-[#6b6966]">
                          {edu.startDate} – {edu.endDate}
                        </span>
                        {edu.rankOrGrade && (
                          <Badge variant="success">{edu.rankOrGrade}</Badge>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-[#e8e6e3] group-hover:text-[#c8a45e] transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-xs font-mono text-[#6b6966]">
                        {edu.institution} • {edu.location}
                      </p>
                      <p className="text-sm text-[#a3a1a0] pt-1 leading-relaxed">
                        {edu.details}
                      </p>
                    </div>

                    {edu.capstone && (
                      <div className="pt-3 border-t border-[#1e1e22] text-xs font-mono text-[#6b6966]">
                        <span className="text-[#c8a45e]">Capstone:</span>{' '}
                        {edu.capstone}
                      </div>
                    )}
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <AnimateIn variant="fadeUp">
              <div className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#c8a45e]">
                <Briefcase className="w-4 h-4" />
                <span>Employment History — Droisys</span>
              </div>
            </AnimateIn>

            <div className="space-y-4">
              {workExperienceData.map((exp, i) => (
                <AnimateIn key={`${exp.company}-${exp.role}`} variant="fadeUp" delay={i * 100}>
                  <div className="rounded-xl border border-[#1e1e22] bg-[#111113] p-6 space-y-4 group hover:border-[#2a2a2e] transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1e1e22] pb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-[#e8e6e3] group-hover:text-[#c8a45e] transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-xs font-mono text-[#c8a45e]/70">
                          {exp.company} • {exp.location}
                        </p>
                      </div>
                      <Badge variant="muted">
                        {exp.startDate} – {exp.endDate}
                      </Badge>
                    </div>

                    <ul className="space-y-2.5">
                      {exp.highlights.map((highlight, hi) => (
                        <li
                          key={hi}
                          className="flex items-start gap-2.5 text-sm text-[#a3a1a0]"
                        >
                          <span className="text-[#c8a45e] font-mono text-xs shrink-0 mt-0.5">
                            ›
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="muted" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <AnimateIn variant="fadeUp">
              <div className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#c8a45e]">
                <Award className="w-4 h-4" />
                <span>Technical Skill Taxonomy</span>
              </div>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillsData.map((cat, i) => (
                <AnimateIn key={cat.category} variant="fadeUp" delay={i * 60}>
                  <div className="rounded-xl border border-[#1e1e22] p-5 space-y-3 hover:border-[#2a2a2e] transition-colors">
                    <h3 className="text-sm font-mono font-semibold text-[#e8e6e3] border-b border-[#1e1e22] pb-2">
                      {cat.category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <Badge key={skill} variant="accent" size="sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="space-y-6">
            <AnimateIn variant="fadeUp">
              <div className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#6b6966]">
                Leadership & Extra Training
              </div>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {extracurricularData.map((extra, i) => (
                <AnimateIn key={extra.organization} variant="fadeUp" delay={i * 100}>
                  <div className="rounded-xl border border-[#1e1e22] bg-[#111113] p-5 space-y-2 hover:border-[#2a2a2e] transition-colors">
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
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
