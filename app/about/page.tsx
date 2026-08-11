import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { workExperienceData, educationData, extracurricularData } from '@/data/experience';
import { skillsData } from '@/data/skills';
import { GraduationCap, Briefcase, Award, CheckCircle2, FileText } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      <Section
        label="Engineering Background"
        heading="About & Background"
        description="Academic qualifications, professional history at Droisys, technical leadership, and complete skill taxonomy."
      >
        <div className="space-y-8">
          {/* Resume Download CTA Bar */}
          <Card variant="glass" className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-slate-100">Official Curriculum Vitae</h2>
              <p className="text-xs text-slate-400 font-mono">
                Verified background and source material documented in portfolio repository.
              </p>
            </div>
            <Button
              href="https://github.com/JindalChaitanya/portfolio/blob/main/Docs/ChaitanyaJindal_Resume.pdf"
              isExternal
              variant="primary"
              icon={<FileText className="w-4 h-4" />}
            >
              Download PDF Resume
            </Button>
          </Card>

          {/* Education & Academic Excellence */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-sm font-semibold text-cyan-400 uppercase tracking-wider">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>// Education & Advanced Training</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationData.map((edu) => (
                <Card key={edu.institution} variant="default" className="p-6 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-400">{edu.startDate} – {edu.endDate}</span>
                      {edu.rankOrGrade && <Badge variant="emerald">{edu.rankOrGrade}</Badge>}
                    </div>

                    <h3 className="text-lg font-bold text-slate-100">{edu.degree}</h3>
                    <p className="text-xs font-mono text-slate-400">{edu.institution} • {edu.location}</p>
                    <p className="text-sm text-slate-300 pt-1 leading-relaxed">{edu.details}</p>
                  </div>

                  {edu.capstone && (
                    <div className="pt-3 border-t border-slate-800/80 text-xs font-mono text-slate-400">
                      <span className="text-cyan-400">Capstone:</span> {edu.capstone}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Work Experience */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-sm font-semibold text-cyan-400 uppercase tracking-wider">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span>// Employment History — Droisys</span>
            </div>

            <div className="space-y-6">
              {workExperienceData.map((exp) => (
                <Card key={`${exp.company}-${exp.role}`} variant="default" className="p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                      <p className="text-xs font-mono text-cyan-400">{exp.company} • {exp.location}</p>
                    </div>
                    <Badge variant="slate">{exp.startDate} – {exp.endDate}</Badge>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="slate" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Skill Taxonomy */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-sm font-semibold text-cyan-400 uppercase tracking-wider">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>// Technical Skill Taxonomy</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillsData.map((cat) => (
                <Card key={cat.category} variant="bordered" className="p-5 space-y-3">
                  <h3 className="text-sm font-mono font-bold text-slate-200 border-b border-slate-800 pb-2">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <Badge key={skill} variant="cyan" size="sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Leadership & Extracurriculars */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">// Leadership & Extra Training</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {extracurricularData.map((extra) => (
                <Card key={extra.organization} variant="default" className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-200 text-sm">{extra.title}</h3>
                    <span className="text-xs font-mono text-slate-500">{extra.period}</span>
                  </div>
                  <p className="text-xs font-mono text-cyan-400">{extra.organization}</p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">{extra.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
