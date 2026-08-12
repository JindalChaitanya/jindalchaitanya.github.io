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
          <AnimateIn>
            <h3 className="text-xs font-sans font-medium uppercase tracking-wider text-[#8c6d46]">
              Work History
            </h3>
          </AnimateIn>

          <div className="space-y-10 border-l border-[#e6e2da] pl-6 ml-1">
            {workExperienceData.map((exp, i) => (
              <AnimateIn key={`${exp.company}-${exp.role}`} delay={i * 60}>
                <div className="space-y-2 relative">
                  {/* Subtle Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-[#8c6d46]" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="font-serif text-xl font-normal text-[#181816]">
                      {exp.role} <span className="text-[#8c6d46]">@ {exp.company}</span>
                    </h4>
                    <span className="text-xs font-sans text-[#737067]">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>

                  <p className="text-xs font-sans text-[#737067]">
                    {exp.location}
                  </p>

                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="space-y-1.5 pt-1 max-w-3xl">
                      {exp.highlights.map((highlight, hi) => (
                        <li
                          key={hi}
                          className="flex items-start gap-2 text-sm text-[#5c5954] font-sans leading-relaxed"
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
        <div className="space-y-8">
          <AnimateIn>
            <h3 className="text-xs font-sans font-medium uppercase tracking-wider text-[#8c6d46]">
              Education & Specialization
            </h3>
          </AnimateIn>

          <div className="space-y-10 border-l border-[#e6e2da] pl-6 ml-1">
            {educationData.map((edu, i) => (
              <AnimateIn key={edu.institution} delay={i * 60}>
                <div className="space-y-2 relative">
                  <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-[#8c6d46]" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="font-serif text-xl font-normal text-[#181816]">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-sans text-[#737067]">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>

                  <p className="text-xs font-sans text-[#737067]">
                    {edu.institution}
                    {edu.rankOrGrade && (
                      <span className="ml-2 text-[#5e6653] font-medium">
                        [{edu.rankOrGrade}]
                      </span>
                    )}
                  </p>

                  {edu.details && (
                    <p className="text-sm text-[#5c5954] font-sans leading-relaxed max-w-3xl">
                      {edu.details}
                    </p>
                  )}

                  {edu.capstone && (
                    <p className="text-xs font-sans text-[#737067] pt-1">
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
