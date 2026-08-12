'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { Button } from '@/components/ui/Button';
import { profileData } from '@/data/profile';
import { Download, ExternalLink, FileText } from 'lucide-react';

export default function ResumePage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="py-6 sm:py-8 md:py-10 min-h-screen">
      <Container size="lg">
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Header */}
          <div className="space-y-3">
            <span className="text-xs font-sans font-medium uppercase tracking-wider text-[#8c6d46]">
              Documentation
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#181816] tracking-tight">
              Resume
            </h1>
            <p className="text-base sm:text-lg text-[#5c5954] font-sans leading-relaxed">
              Official document covering engineering background, work history at Droisys, CDAC PGCP-AI specialization, and technical projects.
            </p>
          </div>

          {/* Action Bar */}
          <AnimateIn>
            <div className="p-4 sm:p-5 rounded-lg bg-[#f4f2eb] border border-[#e6e2da] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#8c6d46]" />
                <span className="text-sm font-sans font-semibold text-[#181816]">
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
          </AnimateIn>

          {/* Canonical Viewer */}
          <AnimateIn delay={50}>
            <div className="rounded-lg border border-[#e6e2da] overflow-hidden min-h-[650px] sm:min-h-[850px] relative bg-[#ffffff]">
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#faf9f5] z-10">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-6 h-6 border-2 border-[#e6e2da] border-t-[#8c6d46] rounded-full animate-spin" />
                    <span className="text-xs font-sans text-[#737067]">Loading Resume...</span>
                  </div>
                </div>
              )}
              <iframe
                src={profileData.resumePreviewUrl}
                title={`${profileData.name} Resume Document`}
                className={`w-full h-full min-h-[650px] sm:min-h-[850px] border-0 transition-opacity duration-300 ${
                  iframeLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setIframeLoaded(true)}
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </div>
          </AnimateIn>
        </div>
      </Container>
    </div>
  );
}
