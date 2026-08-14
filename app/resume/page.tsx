'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { profileData } from '@/data/profile';
import { PdfResumeViewer } from '@/components/resume/PdfResumeViewer';
import { Download, ExternalLink, FileText } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="py-6 sm:py-10 min-h-screen">
      <Container size="lg">
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Header */}
          <div className="space-y-2.5 sm:space-y-3">
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
              <FileText className="w-5 h-5 text-[#5c6b2f] shrink-0" />
              <span className="text-sm font-sans font-bold text-[#23241a]">
                Chaitanya Jindal - Curriculum Vitae
              </span>
            </div>

            {/* Controls: Aligned to right on mobile and desktop */}
            <div className="flex items-center justify-end gap-2.5 w-full sm:w-auto">
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

          {/* High-Fidelity Responsive PDF Document Viewer */}
          <PdfResumeViewer
            pdfUrl={profileData.resumeExportUrl}
            fallbackUrl="/resume.pdf"
          />
        </div>
      </Container>
    </div>
  );
}
