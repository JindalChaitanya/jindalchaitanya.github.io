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
  instagramUrl: string;
  resumePreviewUrl: string;
  resumeExportUrl: string;
  statusText: string;
  philosophyQuote: string;
}

export const profileData: Profile = {
  name: 'Chaitanya Jindal',
  headline: 'AI Systems Engineer',
  shortSummary:
    'AI systems for regulatory compliance retrieval and computer vision pipelines.',
  bioNarrative: {
    foundation:
      'I earned my B.Tech in Computer Science & Engineering from JSSATE Noida (78.1% aggregate). At Droisys, I worked as a Python AI Intern and later as an Associate Data Analyst, engineering OpenCV and YOLO image pipelines that reduced dataset preparation turnaround time by 40–50% and built localized annotation tools cutting labeling labor by 60%.',
    specialization:
      'Currently completing the full-time PGCP-AI program at CDAC Noida (CCAT AIR 286), my capstone project is GraphReg, a hybrid Graph + Vector RAG platform that applies structured retrieval to SEBI regulatory compliance text.',
  },
  location: 'Noida, Uttar Pradesh, India',
  email: 'jindalchaitanya@icloud.com',
  githubUrl: 'https://github.com/JindalChaitanya',
  linkedinUrl: 'https://linkedin.com/in/jindalchaitanya',
  instagramUrl: 'https://instagram.com/jindalchaitanya',
  resumePreviewUrl:
    'https://docs.google.com/document/d/1vskU7Fbv3I7aGXUTeFwndJ_giZTD8VEs/preview',
  resumeExportUrl:
    'https://docs.google.com/document/d/1vskU7Fbv3I7aGXUTeFwndJ_giZTD8VEs/export?format=pdf',
  statusText: 'Available for AI/ML engineering roles',
  philosophyQuote:
    'Building practical AI systems designed for real-world deployment.',
};
