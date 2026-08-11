import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Mail, FileText, MapPin, ArrowUpRight } from 'lucide-react';
import { IconGithub, IconLinkedin } from '@/components/ui/Icons';

export default function ContactPage() {
  return (
    <div>
      <Section
        label="Communication Channels"
        heading="Contact & Communications"
        description="Direct contact channels, verified professional profiles, and official PDF resume access."
      >
        <div className="max-w-4xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Contact Card */}
            <Card variant="interactive" className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-100">Primary Email</h2>
                  <p className="text-xs font-mono text-slate-400">Direct Inquiries & Opportunities</p>
                </div>
              </div>
              <p className="text-sm font-mono text-cyan-300 bg-slate-900/60 p-3 rounded border border-slate-800 break-all">
                chaitanya.jindal2002@gmail.com
              </p>
              <Button
                href="mailto:chaitanya.jindal2002@gmail.com"
                variant="primary"
                size="sm"
                className="w-full justify-center"
              >
                Send Direct Email
              </Button>
            </Card>

            {/* LinkedIn Card */}
            <Card variant="interactive" className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                  <IconLinkedin className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-100">LinkedIn Profile</h2>
                  <p className="text-xs font-mono text-slate-400">Professional Network</p>
                </div>
              </div>
              <p className="text-sm font-mono text-cyan-300 bg-slate-900/60 p-3 rounded border border-slate-800 break-all">
                linkedin.com/in/jindalchaitanya
              </p>
              <Button
                href="https://linkedin.com/in/jindalchaitanya"
                isExternal
                variant="secondary"
                size="sm"
                icon={<ArrowUpRight className="w-4 h-4" />}
                iconPosition="right"
                className="w-full justify-center"
              >
                Connect on LinkedIn
              </Button>
            </Card>

            {/* GitHub Profile Card */}
            <Card variant="interactive" className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                  <IconGithub className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-100">GitHub Repositories</h2>
                  <p className="text-xs font-mono text-slate-400">Open-Source Code & Repos</p>
                </div>
              </div>
              <p className="text-sm font-mono text-cyan-300 bg-slate-900/60 p-3 rounded border border-slate-800 break-all">
                github.com/JindalChaitanya
              </p>
              <Button
                href="https://github.com/JindalChaitanya"
                isExternal
                variant="secondary"
                size="sm"
                icon={<ArrowUpRight className="w-4 h-4" />}
                iconPosition="right"
                className="w-full justify-center"
              >
                View GitHub Repositories
              </Button>
            </Card>

            {/* Location & Status Card */}
            <Card variant="default" className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-100">Location & Availability</h2>
                  <p className="text-xs font-mono text-slate-400">Current Base</p>
                </div>
              </div>
              <div className="space-y-2 text-xs font-mono">
                <p className="text-slate-200 flex items-center justify-between bg-slate-900/60 p-3 rounded border border-slate-800">
                  <span>Location:</span>
                  <span className="text-cyan-400">Noida, Uttar Pradesh, India</span>
                </p>
                <p className="text-slate-200 flex items-center justify-between bg-slate-900/60 p-3 rounded border border-slate-800">
                  <span>Role Target:</span>
                  <span className="text-emerald-400">AI / ML Engineering</span>
                </p>
              </div>
            </Card>
          </div>

          {/* Official PDF Resume Card */}
          <Card variant="glass" className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-400" />
                <h2 className="text-xl font-bold text-slate-100">Official PDF Curriculum Vitae</h2>
              </div>
              <p className="text-xs font-mono text-slate-400">
                Direct view/download access to the official resume document.
              </p>
            </div>
            <Button
              href="https://github.com/JindalChaitanya/portfolio/blob/main/Docs/ChaitanyaJindal_Resume.pdf"
              isExternal
              variant="primary"
              icon={<ArrowUpRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Open PDF Resume
            </Button>
          </Card>
        </div>
      </Section>
    </div>
  );
}
