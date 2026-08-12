'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { skillsData } from '@/data/skills';

export const CapabilitiesSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {skillsData.map((group, i) => (
        <AnimateIn key={group.id} delay={i * 50}>
          <div className="space-y-3">
            <h3 className="text-lg font-sans font-semibold text-[#181816] tracking-tight">
              {group.category}
            </h3>
            <p className="text-base text-[#5c5954] font-sans leading-relaxed">
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
