import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projects';
import { ProjectDetailContent } from '@/components/projects/ProjectDetailContent';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent slug={slug} />;
}
