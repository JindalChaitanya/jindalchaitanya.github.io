'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { skillsData } from '@/data/skills';

export const CapabilitiesSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {skillsData.map((group, i) => (
        <AnimateIn key={group.id} delay={i * 60} duration={300}>
          <div className="p-4 sm:p-5 rounded-xl bg-[#f7f8e8] border border-[#d6dba0] space-y-3 transition-all duration-200 hover:border-[#5c6b2f] hover:-translate-y-0.5">
            <h3 className="text-base font-sans font-bold text-[#23241a] tracking-tight">
              {group.category}
            </h3>
            <p className="text-sm text-[#54563f] font-sans leading-relaxed">
              {group.description}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {group.technologies.map((tech) => (
                <Badge key={tech} variant="accent" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </AnimateIn>
      ))}
    </div>
  );
};
