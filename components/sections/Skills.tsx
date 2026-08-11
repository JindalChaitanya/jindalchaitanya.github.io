'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { skillsData } from '@/data/skills';

interface SkillsProps {
  className?: string;
}

export const Skills: React.FC<SkillsProps> = ({ className = '' }) => {
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillsData.map((group, i) => (
          <AnimateIn key={group.id} variant="fadeUp" delay={i * 80}>
            <div className="rounded-xl border border-[#1e1e22] bg-[#111113] p-5 sm:p-6 space-y-4 hover:border-[#2a2a2e] transition-colors h-full flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-mono font-semibold text-[#e8e6e3] uppercase tracking-wider">
                    {group.category}
                  </h3>
                  <span className="text-[10px] font-mono text-[#6b6966]">
                    0{i + 1}
                  </span>
                </div>
                <p className="text-xs text-[#a3a1a0] leading-relaxed">
                  {group.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#1e1e22]">
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {group.technologies.map((tech) => (
                    <Badge key={tech} variant="accent" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
};
