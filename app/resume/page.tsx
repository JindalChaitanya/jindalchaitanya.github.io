'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { Download, ExternalLink, FileText, X } from 'lucide-react';

const RESUME_PREVIEW_URL =
  'https://docs.google.com/document/d/1vskU7Fbv3I7aGXUTeFwndJ_giZTD8VEs/preview';

const RESUME_EXPORT_URL =
  'https://docs.google.com/document/d/1vskU7Fbv3I7aGXUTeFwndJ_giZTD8VEs/export?format=pdf';

export default function ResumePage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Header Bar */}
      <div className="border-b border-[#1e1e22] bg-[#0a0a0b]">
        <Container size="xl">
          <AnimateIn variant="fadeUp">
            <div className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#c8a45e]" />
                  <h1 className="text-xl sm:text-2xl font-serif font-normal text-[#e8e6e3]">
                    Resume
                  </h1>
                </div>
                <p className="text-xs font-mono text-[#6b6966]">
                  Chaitanya Jindal — AI / ML Engineer
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={RESUME_EXPORT_URL}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c8a45e] text-[#0a0a0b] font-semibold text-sm hover:bg-[#d4b36e] active:bg-[#b8943e] transition-colors shadow-[0_0_20px_rgba(200,164,94,0.15)] min-h-[44px]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
                <a
                  href={RESUME_PREVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#2a2a2e] text-[#a3a1a0] hover:text-[#e8e6e3] hover:border-[#c8a45e]/40 text-sm transition-colors min-h-[44px]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">Open in Google Docs</span>
                  <span className="sm:hidden">Open</span>
                </a>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </div>

      {/* Iframe Viewer */}
      <div className="flex-1 relative bg-[#111113]">
        {/* Loading State */}
        {!iframeLoaded && !iframeError && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#1e1e22] border-t-[#c8a45e] rounded-full animate-spin" />
              <span className="text-xs font-mono text-[#6b6966]">
                Loading resume...
              </span>
            </div>
          </div>
        )}

        {/* Error / Fallback */}
        {iframeError && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center space-y-4 max-w-md px-6">
              <div className="p-4 rounded-full bg-[#1e1e22] inline-flex">
                <X className="w-8 h-8 text-[#6b6966]" />
              </div>
              <h2 className="text-lg font-serif text-[#e8e6e3]">
                Unable to load preview
              </h2>
              <p className="text-sm text-[#6b6966]">
                Your browser may be blocking the embedded document. You can
                still download or view it directly.
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <a
                  href={RESUME_EXPORT_URL}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c8a45e] text-[#0a0a0b] font-semibold text-sm hover:bg-[#d4b36e] transition-colors min-h-[44px]"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
                <a
                  href={RESUME_PREVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#2a2a2e] text-[#a3a1a0] hover:text-[#e8e6e3] text-sm transition-colors min-h-[44px]"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in Browser
                </a>
              </div>
            </div>
          </div>
        )}

        {/* The iframe */}
        <iframe
          src={RESUME_PREVIEW_URL}
          title="Chaitanya Jindal Resume"
          className={`w-full h-full min-h-[calc(100vh-10rem)] border-0 transition-opacity duration-500 ${
            iframeLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIframeLoaded(true)}
          onError={() => setIframeError(true)}
          allow="autoplay"
          sandbox="allow-scripts allow-same-origin allow-popups"
        />
      </div>

      {/* Floating Download Button — Mobile */}
      <div className="fixed bottom-6 right-6 sm:hidden z-50">
        <a
          href={RESUME_EXPORT_URL}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#c8a45e] text-[#0a0a0b] shadow-[0_0_30px_rgba(200,164,94,0.3)] hover:bg-[#d4b36e] transition-colors"
          aria-label="Download Resume PDF"
        >
          <Download className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
