import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="py-16 sm:py-24 flex items-center justify-center">
      <Container size="md">
        <div className="p-8 sm:p-12 rounded-xl bg-[#f7f8e8] border border-[#d6dba0] text-center space-y-6 max-w-xl mx-auto shadow-xs">
          <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#5c6b2f] block">
            404 Error
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[#23241a] tracking-tight">
            Page Not Found
          </h1>
          <p className="text-base text-[#54563f] font-sans leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved. You can head back to the homepage or explore recent work.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              href="/"
              variant="primary"
              icon={<Home className="w-4 h-4" />}
            >
              Return Home
            </Button>
            <Button
              href="/projects"
              variant="secondary"
              icon={<ArrowLeft className="w-4 h-4" />}
            >
              View Projects
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
