import React from 'react';
import { workExperienceData, educationData } from '@/data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Work History */}
      <div className="space-y-6">
        <h3 className="text-xs font-mono font-medium uppercase tracking-widest text-[#7a4a2e]">
          // Work Experience — Droisys
        </h3>

        <div className="space-y-8">
          {workExperienceData.map((exp) => (
            <div key={`${exp.company}-${exp.role}`} className="border-l-2 border-[#e6e1da] pl-6 space-y-2 group hover:border-[#7a4a2e] transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h4 className="font-serif text-xl font-normal text-[#1a1918] group-hover:text-[#7a4a2e] transition-colors">
                  {exp.role}
                </h4>
                <span className="text-xs font-mono text-[#807a75]">
                  {exp.startDate} — {exp.endDate}
                </span>
              </div>
              <p className="text-xs font-mono text-[#7a4a2e]">
                {exp.company} • {exp.location}
              </p>
              <ul className="space-y-1.5 pt-1 text-sm text-[#57524d] leading-relaxed">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#7a4a2e] font-mono text-xs shrink-0 pt-0.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="space-y-6 pt-4 border-t border-[#e6e1da]">
        <h3 className="text-xs font-mono font-medium uppercase tracking-widest text-[#7a4a2e]">
          // Education & Certification
        </h3>

        <div className="space-y-8">
          {educationData.map((edu) => (
            <div key={edu.institution} className="border-l-2 border-[#e6e1da] pl-6 space-y-2 group hover:border-[#7a4a2e] transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h4 className="font-serif text-xl font-normal text-[#1a1918] group-hover:text-[#7a4a2e] transition-colors">
                  {edu.degree}
                </h4>
                <span className="text-xs font-mono text-[#807a75]">
                  {edu.startDate} — {edu.endDate}
                </span>
              </div>
              <p className="text-xs font-mono text-[#7a4a2e]">
                {edu.institution}
                {edu.rankOrGrade && <span className="ml-2 text-[#4a5a4c] font-semibold">[{edu.rankOrGrade}]</span>}
              </p>
              <p className="text-sm text-[#57524d] leading-relaxed">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
