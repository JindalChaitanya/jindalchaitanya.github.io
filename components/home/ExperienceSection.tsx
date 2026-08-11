'use client';

import React from 'react';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { workExperienceData, educationData } from '@/data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <div className="space-y-14">
      {/* Work History */}
      <div className="space-y-1">
        <AnimateIn variant="fadeUp">
          <h3 className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#c8a45e] mb-6 px-2">
            Work Experience — Droisys
          </h3>
        </AnimateIn>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#c8a45e]/40 via-[#1e1e22] to-transparent" />

          <div className="space-y-8">
            {workExperienceData.map((exp, i) => (
              <AnimateIn key={`${exp.company}-${exp.role}`} variant="fadeUp" delay={i * 120}>
                <div className="relative pl-8 group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-[14px] h-[14px] rounded-full border-2 border-[#1e1e22] bg-[#0a0a0b] group-hover:border-[#c8a45e] transition-colors z-10">
                    <div className="absolute inset-1 rounded-full bg-[#2a2a2e] group-hover:bg-[#c8a45e] transition-colors" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h4 className="font-serif text-lg sm:text-xl font-normal text-[#e8e6e3] group-hover:text-[#c8a45e] transition-colors">
                        {exp.role}
                      </h4>
                      <span className="text-[10px] font-mono text-[#6b6966] tracking-wider">
                        {exp.startDate} — {exp.endDate}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-[#c8a45e]/70">
                      {exp.company} • {exp.location}
                    </p>
                    <ul className="space-y-2 pt-1.5">
                      {exp.highlights.map((highlight, hi) => (
                        <li
                          key={hi}
                          className="flex items-start gap-2.5 text-sm text-[#a3a1a0] leading-relaxed"
                        >
                          <span className="text-[#c8a45e] font-mono text-xs shrink-0 pt-1">
                            ›
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="space-y-1">
        <AnimateIn variant="fadeUp">
          <h3 className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#c8a45e] mb-6 px-2">
            Education & Certification
          </h3>
        </AnimateIn>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#c8a45e]/40 via-[#1e1e22] to-transparent" />

          <div className="space-y-8">
            {educationData.map((edu, i) => (
              <AnimateIn key={edu.institution} variant="fadeUp" delay={i * 120}>
                <div className="relative pl-8 group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-[14px] h-[14px] rounded-full border-2 border-[#1e1e22] bg-[#0a0a0b] group-hover:border-[#c8a45e] transition-colors z-10">
                    <div className="absolute inset-1 rounded-full bg-[#2a2a2e] group-hover:bg-[#c8a45e] transition-colors" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h4 className="font-serif text-lg sm:text-xl font-normal text-[#e8e6e3] group-hover:text-[#c8a45e] transition-colors">
                        {edu.degree}
                      </h4>
                      <span className="text-[10px] font-mono text-[#6b6966] tracking-wider">
                        {edu.startDate} — {edu.endDate}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-[#c8a45e]/70">
                      {edu.institution}
                      {edu.rankOrGrade && (
                        <span className="ml-2 text-[#4ade80] font-semibold">
                          [{edu.rankOrGrade}]
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-[#a3a1a0] leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
