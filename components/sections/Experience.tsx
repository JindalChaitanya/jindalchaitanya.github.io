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
        <div className="space-y-8">
          <AnimateIn duration={300}>
            <h3 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#5c6b2f]">
              Work History
            </h3>
          </AnimateIn>

          <div className="space-y-10 border-l border-[#d6dba0] pl-6 ml-1">
            {workExperienceData.map((exp, i) => (
              <AnimateIn key={`${exp.company}-${exp.role}`} delay={i * 60} duration={350}>
                <div className="space-y-2 relative">
                  {/* Subtle Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#5c6b2f] border-2 border-[#e1e6b8]" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="font-heading text-xl font-bold text-[#23241a]">
                      {exp.role} <span className="text-[#5c6b2f]">@ {exp.company}</span>
                    </h4>
                    <span className="text-xs font-sans text-[#6b6e50]">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>

                  <p className="text-xs font-sans text-[#6b6e50]">
                    {exp.location}
                  </p>

                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="space-y-1.5 pt-1 max-w-3xl">
                      {exp.highlights.map((highlight, hi) => (
                        <li
                          key={hi}
                          className="flex items-start gap-2 text-sm text-[#54563f] font-sans leading-relaxed"
                        >
                          <span className="text-[#5c6b2f] shrink-0 pt-0.5">•</span>
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
        <div className="space-y-8">
          <AnimateIn duration={300}>
            <h3 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#5c6b2f]">
              Education & Specialization
            </h3>
          </AnimateIn>

          <div className="space-y-10 border-l border-[#d6dba0] pl-6 ml-1">
            {educationData.map((edu, i) => (
              <AnimateIn key={edu.institution} delay={i * 60} duration={350}>
                <div className="space-y-2 relative">
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#5c6b2f] border-2 border-[#e1e6b8]" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="font-heading text-xl font-bold text-[#23241a]">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-sans text-[#6b6e50]">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>

                  <p className="text-xs font-sans text-[#6b6e50]">
                    {edu.institution}
                    {edu.rankOrGrade && (
                      <span className="ml-2 text-[#23241a] font-medium bg-[#e2e8a7] px-1.5 py-0.5 rounded-xs border border-[#d6dba0]">
                        {edu.rankOrGrade}
                      </span>
                    )}
                  </p>

                  {edu.details && (
                    <p className="text-sm text-[#54563f] font-sans leading-relaxed max-w-3xl">
                      {edu.details}
                    </p>
                  )}

                  {edu.capstone && (
                    <p className="text-xs font-sans text-[#6b6e50] pt-1">
                      <span className="text-[#5c6b2f] font-semibold">Capstone Project:</span> {edu.capstone}
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
