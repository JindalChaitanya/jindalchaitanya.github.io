'use client';

import React, { useEffect, useRef, useState } from 'react';

interface PdfResumeViewerProps {
  pdfUrl: string;
  fallbackUrl?: string;
}

export const PdfResumeViewer: React.FC<PdfResumeViewerProps> = ({
  pdfUrl,
  fallbackUrl = '/resume.pdf',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    async function loadPdf() {
      setLoading(true);
      setError(null);

      try {
        // Dynamically import pdfjs-dist
        const pdfjsLib = await import('pdfjs-dist');
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

        // Fetch PDF arraybuffer with cache-busting timestamp for live updates
        let arrayBuffer: ArrayBuffer;
        try {
          const timestamp = Date.now();
          const res = await fetch(`${pdfUrl}&t=${timestamp}`, {
            cache: 'no-store',
          });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          arrayBuffer = await res.arrayBuffer();
        } catch (fetchErr) {
          console.warn('Live Google Docs PDF fetch failed, falling back to local snapshot:', fetchErr);
          const fallbackRes = await fetch(fallbackUrl);
          if (!fallbackRes.ok) throw new Error('Failed to load resume document');
          arrayBuffer = await fallbackRes.arrayBuffer();
        }

        if (isCancelled) return;

        const loadingTask = pdfjsLib.getDocument({
          data: new Uint8Array(arrayBuffer),
          useSystemFonts: true,
        });
        const pdf = await loadingTask.promise;

        if (isCancelled) return;

        const pageImages: string[] = [];

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          // Scale 2.5x for Retina crisp text rendering
          const viewport = page.getViewport({ scale: 2.5 });

          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d', { alpha: false });
          if (!context) continue;

          canvas.height = viewport.height;
          canvas.width = viewport.width;

          // Fill white background for crisp contrast
          context.fillStyle = '#ffffff';
          context.fillRect(0, 0, canvas.width, canvas.height);

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };

          // Render page to canvas
          await page.render(renderContext).promise;
          pageImages.push(canvas.toDataURL('image/webp', 0.95));
        }

        if (!isCancelled) {
          setPages(pageImages);
          setLoading(false);
        }
      } catch (err: unknown) {
        if (!isCancelled) {
          console.error('PDF rendering error:', err);
          setError(err instanceof Error ? err.message : 'Error rendering PDF');
          setLoading(false);
        }
      }
    }

    loadPdf();

    return () => {
      isCancelled = true;
    };
  }, [pdfUrl, fallbackUrl]);

  return (
    <div ref={containerRef} className="w-full space-y-6">
      {loading ? (
        <div className="w-full rounded-2xl border border-[#d6dba0] bg-white shadow-xs p-8 sm:p-14 flex flex-col items-center justify-center min-h-[520px] sm:min-h-[700px] gap-3 text-center">
          <div className="w-7 h-7 border-2 border-[#d6dba0] border-t-[#5c6b2f] rounded-full animate-spin" />
          <span className="text-xs font-sans font-medium text-[#6b6e50]">
            Syncing live resume from Google Docs...
          </span>
        </div>
      ) : error ? (
        <div className="w-full rounded-xl border border-red-200 bg-red-50 p-6 text-center text-sm text-red-700">
          <p className="font-semibold">Unable to render document preview</p>
          <p className="text-xs mt-1">
            Please use the &quot;Download PDF&quot; button above to view the file directly.
          </p>
        </div>
      ) : (
        pages.map((imgSrc, index) => (
          <div
            key={index}
            className="w-full rounded-2xl border border-[#d6dba0] bg-white shadow-xs overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgSrc}
              alt={`Chaitanya Jindal Resume Page ${index + 1}`}
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        ))
      )}
    </div>
  );
};
