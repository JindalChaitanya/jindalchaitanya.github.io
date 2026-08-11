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
        const panelId = `capability-panel-${group.id}`;

        return (
          <AnimateIn key={group.id} variant="fadeUp" delay={i * 60}>
            <div
              className={`border-b border-[#e6e2da] transition-colors duration-200 ${
                isActive ? 'bg-[#f4f1ea] rounded-xl border border-[#e6e2da] my-2' : ''
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
                className="w-full flex items-center justify-between py-5 sm:py-6 px-4 sm:px-6 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c6d46] rounded-xl"
                aria-expanded={isActive}
                aria-controls={panelId}
              >
                <div className="flex items-center gap-4">
                  <h3
                    className={`text-lg sm:text-xl font-sans font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-[#8c6d46]'
                        : 'text-[#1a1917] group-hover:text-[#8c6d46]'
                    }`}
                  >
                    {group.category}
                  </h3>
                </div>
                <ChevronRight
                  className={`w-4 h-4 text-[#6e6a62] transition-transform duration-300 shrink-0 ${
                    isActive ? 'rotate-90 text-[#8c6d46]' : ''
                  }`}
                />
              </button>

              {/* Accordion Content */}
              <div
                id={panelId}
                role="region"
                aria-label={group.category}
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  isActive ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 pb-5 sm:pb-6 space-y-3">
                  <p className="text-sm text-[#57544e] leading-relaxed max-w-2xl font-sans">
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
              </div>
            </div>
          </AnimateIn>
        );
      })}
    </div>
  );
};
