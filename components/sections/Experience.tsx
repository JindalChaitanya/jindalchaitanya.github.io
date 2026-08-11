'use client';

import React from 'react';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { Badge } from '@/components/ui/Badge';
import { workExperienceData, educationData } from '@/data/experience';

interface ExperienceProps {
  showEducation?: boolean;
  showWork?: boolean;
  className?: string;
}

export const Experience: React.FC<ExperienceProps> = ({
  showEducation = true,
  showWork = true,
  className = '',
}) => {
  return (
    <div className={`space-y-12 ${className}`}>
      {/* Work History */}
      {showWork && (
        <div className="space-y-6">
          <AnimateIn variant="fadeUp">
            <h3 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8c6d46] px-1">
              Work Experience
            </h3>
          </AnimateIn>

          <div className="relative pl-6 border-l border-[#e6e2da] space-y-8 ml-2">
            {workExperienceData.map((exp, i) => (
              <AnimateIn key={`${exp.company}-${exp.role}`} variant="fadeUp" delay={i * 80}>
                <div className="relative group space-y-2">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#e6e2da] bg-[#fbf9f5] group-hover:border-[#8c6d46] transition-colors" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="font-serif text-lg sm:text-xl font-normal text-[#1a1917] group-hover:text-[#8c6d46] transition-colors">
                      {exp.role} <span className="text-[#8c6d46]">@ {exp.company}</span>
                    </h4>
                    <span className="text-xs font-sans text-[#6e6a62]">
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>

                  <p className="text-xs font-sans text-[#6e6a62]">
                    {exp.location}
                  </p>

                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="space-y-2 pt-1">
                      {exp.highlights.map((highlight, hi) => (
                        <li
                          key={hi}
                          className="flex items-start gap-2 text-sm text-[#57544e] font-sans leading-relaxed"
                        >
                          <span className="text-[#8c6d46] shrink-0 pt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="accent" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {showEducation && (
        <div className="space-y-6">
          <AnimateIn variant="fadeUp">
            <h3 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8c6d46] px-1">
              Education & Specialization
            </h3>
          </AnimateIn>

          <div className="relative pl-6 border-l border-[#e6e2da] space-y-8 ml-2">
            {educationData.map((edu, i) => (
              <AnimateIn key={edu.institution} variant="fadeUp" delay={i * 80}>
                <div className="relative group space-y-2">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#e6e2da] bg-[#fbf9f5] group-hover:border-[#8c6d46] transition-colors" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="font-serif text-lg sm:text-xl font-normal text-[#1a1917] group-hover:text-[#8c6d46] transition-colors">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-sans text-[#6e6a62]">
                      {edu.startDate} — {edu.endDate}
                    </span>
                  </div>

                  <p className="text-xs font-sans text-[#6e6a62]">
                    {edu.institution}
                    {edu.rankOrGrade && (
                      <span className="ml-2 text-[#5e6653] font-medium">
                        [{edu.rankOrGrade}]
                      </span>
                    )}
                  </p>

                  {edu.details && (
                    <p className="text-sm text-[#57544e] font-sans leading-relaxed">
                      {edu.details}
                    </p>
                  )}

                  {edu.capstone && (
                    <p className="text-xs font-sans text-[#6e6a62] pt-1">
                      <span className="text-[#8c6d46] font-medium">Capstone Project:</span> {edu.capstone}
                    </p>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
