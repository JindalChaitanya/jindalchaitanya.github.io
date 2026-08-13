'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { profileData } from '@/data/profile';
import { Download, ExternalLink, FileText } from 'lucide-react';

export default function ResumePage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="py-6 sm:py-10 min-h-screen">
      <Container size="lg">
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Header */}
          <div className="space-y-3">
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#5c6b2f]">
              Documentation
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-bold text-[#23241a] tracking-tight">
              Resume
            </h1>
            <p className="text-base sm:text-lg text-[#54563f] font-sans leading-relaxed">
              Official document covering engineering background, work history at Droisys, CDAC PGCP-AI specialization, and technical projects.
            </p>
          </div>

          {/* Action Bar Card */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#f7f8e8] border border-[#d6dba0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#5c6b2f]" />
              <span className="text-sm font-sans font-bold text-[#23241a]">
                Chaitanya Jindal - Curriculum Vitae
              </span>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
              <Button
                href={profileData.resumeExportUrl}
                isExternal
                variant="primary"
                size="sm"
                icon={<Download className="w-4 h-4" />}
              >
                Download PDF
              </Button>
              <Button
                href={profileData.resumePreviewUrl}
                isExternal
                variant="secondary"
                size="sm"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Open in Google Docs
              </Button>
            </div>
          </div>

          {/* Seamless Responsive Live Document Frame */}
          <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-xl border-y sm:border border-[#d6dba0] overflow-hidden relative bg-white shadow-xs w-[calc(100%+2rem)] sm:w-full h-[88vh] sm:h-[1125px] min-h-[620px] sm:min-h-[890px]">
            {!iframeLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#e1e6b8] z-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-6 h-6 border-2 border-[#d6dba0] border-t-[#5c6b2f] rounded-full animate-spin" />
                  <span className="text-xs font-sans text-[#6b6e50]">Loading Live Resume...</span>
                </div>
              </div>
            )}
            <iframe
              src={profileData.resumePreviewUrl}
              title="Chaitanya Jindal Live Resume Document"
              scrolling="no"
              className={`w-full h-full border-0 overflow-hidden transition-opacity duration-300 ${
                iframeLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setIframeLoaded(true)}
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
