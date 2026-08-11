'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { ChevronRight } from 'lucide-react';
import { skillsData, SkillGroup } from '@/data/skills';

interface CapabilitiesSectionProps {
  onHoverCategory?: (relatedProjectSlugs: string[] | null) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({
  onHoverCategory,
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleCapability = (group: SkillGroup) => {
    if (activeId === group.id) {
      setActiveId(null);
      onHoverCategory?.(null);
    } else {
      setActiveId(group.id);
      onHoverCategory?.(group.relatedProjectSlugs || null);
    }
  };

  return (
    <div className="space-y-1">
      {skillsData.map((group, i) => {
        const isActive = activeId === group.id;

        return (
          <AnimateIn key={group.id} variant="fadeUp" delay={i * 80}>
            <div
              className={`border-b border-[#1e1e22] transition-all duration-300 ${
                isActive ? 'bg-[#111113]' : ''
              }`}
            >
              {/* Accordion Header */}
              <button
                type="button"
                onClick={() => toggleCapability(group)}
                onMouseEnter={() => {
                  if (!activeId) onHoverCategory?.(group.relatedProjectSlugs || null);
                }}
                onMouseLeave={() => {
                  if (!activeId) onHoverCategory?.(null);
                }}
                className="w-full flex items-center justify-between py-5 sm:py-6 px-2 sm:px-4 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a45e] rounded-lg"
                aria-expanded={isActive}
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="text-xs font-mono text-[#6b6966] font-medium w-6 shrink-0">
                    0{i + 1}
                  </span>
                  <h3
                    className={`text-lg sm:text-xl font-serif font-normal transition-colors duration-200 ${
                      isActive
                        ? 'text-[#c8a45e]'
                        : 'text-[#e8e6e3] group-hover:text-[#c8a45e]'
                    }`}
                  >
                    {group.category}
                  </h3>
                </div>
                <ChevronRight
                  className={`w-4 h-4 text-[#6b6966] transition-transform duration-300 shrink-0 ${
                    isActive ? 'rotate-90 text-[#c8a45e]' : ''
                  }`}
                />
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  isActive ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-2 sm:px-4 pb-5 sm:pb-6 pl-12 sm:pl-14 space-y-3">
                  <p className="text-sm text-[#a3a1a0] leading-relaxed max-w-2xl">
                    {group.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.technologies.map((tech) => (
                      <Badge key={tech} variant="accent" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        );
      })}
    </div>
  );
};
