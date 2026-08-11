export interface Profile {
  name: string;
  headline: string;
  shortSummary: string;
  bioNarrative: {
    foundation: string;
    specialization: string;
  };
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumePreviewUrl: string;
  resumeExportUrl: string;
  statusText: string;
  philosophyQuote: string;
}

export const profileData: Profile = {
  name: 'Chaitanya Jindal',
  headline: 'AI Systems Engineer | GraphRAG · Agentic AI · Computer Vision · MLOps',
  shortSummary:
    'Building production-oriented AI systems across GraphRAG retrieval, computer vision pipelines, and ML infrastructure — not notebooks that score well in isolation.',
  bioNarrative: {
    foundation:
      'My engineering foundation began during my B.Tech in Computer Science & Engineering at JSSATE Noida (78.1% aggregate). At Droisys, I worked hands-on as a Python AI Intern and later as an Associate Data Analyst, engineering automated image cropping pipelines and Python template-matching tools that cut dataset preparation turnaround by 40–50%.',
    specialization:
      'Currently completing the 6-month full-time PGCP-AI program at CDAC Noida (CCAT AIR 286), I am deepening my specialization in Agentic AI design patterns, LLMOps, and cloud-native ML deployments while building GraphReg — a hybrid GraphRAG platform for complex SEBI and RBI regulatory compliance text.',
  },
  location: 'Noida, Uttar Pradesh, India',
  email: 'chaitanya.jindal2002@gmail.com',
  githubUrl: 'https://github.com/JindalChaitanya',
  linkedinUrl: 'https://linkedin.com/in/jindalchaitanya',
  resumePreviewUrl:
    'https://docs.google.com/document/d/1vskU7Fbv3I7aGXUTeFwndJ_giZTD8VEs/preview',
  resumeExportUrl:
    'https://docs.google.com/document/d/1vskU7Fbv3I7aGXUTeFwndJ_giZTD8VEs/export?format=pdf',
  statusText: 'Available for opportunities',
  philosophyQuote:
    'I build AI systems that ship — not notebooks that score well in isolation and never see production.',
};
