'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { profileData } from '@/data/profile';
import { Download, ExternalLink, FileText, Printer } from 'lucide-react';

export default function ResumePage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-8 sm:py-12 md:py-16 min-h-screen">
      <Container size="xl">
        <div className="space-y-8 max-w-5xl mx-auto">
          {/* Header & Page Title */}
          <div className="space-y-3">
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8c6d46]">
              Documentation
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#1a1917] tracking-tight">
              Resume
            </h1>
            <p className="text-base sm:text-lg text-[#57544e] font-sans leading-relaxed">
              Official document covering engineering background, work experience, CDAC specialization, and technical projects.
            </p>
          </div>

          {/* Action Bar */}
          <AnimateIn variant="fadeUp">
            <Card variant="paper" className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#8c6d46]" />
                <span className="text-sm font-sans font-semibold text-[#1a1917]">
                  Chaitanya Jindal — Resume
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
                <button
                  type="button"
                  onClick={handlePrint}
                  className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-sans text-[#57544e] hover:text-[#1a1917] bg-[#ffffff] border border-[#e6e2da] hover:border-[#c9c4b7] transition-all min-h-[44px]"
                >
                  <Printer className="w-4 h-4 text-[#8c6d46]" />
                  <span>Print</span>
                </button>
              </div>
            </Card>
          </AnimateIn>

          {/* Mobile Direct PDF View Banner (<640px) */}
          <div className="block sm:hidden">
            <Card variant="paper" className="p-4 text-center space-y-2 border-[rgba(140,109,70,0.3)]">
              <p className="text-xs text-[#57544e] font-sans">
                Reading on a smartphone? Open or download the PDF directly for the clearest document layout.
              </p>
              <Button
                href={profileData.resumeExportUrl}
                isExternal
                variant="secondary"
                size="sm"
                className="w-full"
                icon={<Download className="w-4 h-4" />}
              >
                View / Download PDF Resume
              </Button>
            </Card>
          </div>

          {/* Canonical Google Docs Embedded Viewer Container */}
          <AnimateIn variant="fadeUp" delay={80}>
            <Card variant="default" className="p-0 overflow-hidden min-h-[650px] sm:min-h-[850px] relative shadow-[0_2px_12px_rgba(26,25,23,0.04)]">
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#fbf9f5] z-10">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-2 border-[#e6e2da] border-t-[#8c6d46] rounded-full animate-spin" />
                    <span className="text-xs font-sans text-[#6e6a62]">Loading Resume Document...</span>
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
                allow="autoplay"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </Card>
          </AnimateIn>
        </div>
      </Container>
    </div>
  );
}
