'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
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
          <AnimateIn key={group.id} variant="fadeUp" delay={i * 60}>
            <Card variant="default" className="p-5 sm:p-6 space-y-4 h-full flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-sm font-sans font-semibold text-[#1a1917] tracking-tight">
                  {group.category}
                </h3>
                <p className="text-xs text-[#57544e] font-sans leading-relaxed">
                  {group.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#e6e2da]">
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {group.technologies.map((tech) => (
                    <Badge key={tech} variant="accent" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
};
