export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationExperience {
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  details: string;
  rankOrGrade?: string;
  capstone?: string;
}

export interface Extracurricular {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export const workExperienceData: WorkExperience[] = [
  {
    role: 'Associate Data Analyst',
    company: 'Droisys',
    location: 'Noida, Uttar Pradesh, India',
    startDate: 'April 2025',
    endDate: 'February 2026',
    highlights: [
      'Developed custom "Auto-Annotator" toolkit using Python, localized template matching, and SIFT/FLANN feature matching, cutting manual labeling labor by 60%.',
      'Engineered an automated image cropping pipeline utilizing YOLO (v8/11) and OpenCV, reducing dataset preparation turnaround time by 40-50%.',
      'Designed and deployed automated data validation scripts using Pandas to sanitize preproduction datasets, ensuring production-grade data quality for downstream Computer Vision models.'
    ],
    technologies: ['Python', 'YOLO', 'OpenCV', 'Pandas', 'SIFT/FLANN', 'PyQt']
  },
  {
    role: 'Python AI Intern',
    company: 'Droisys',
    location: 'Noida, Uttar Pradesh, India',
    startDate: 'January 2024',
    endDate: 'May 2024',
    highlights: [
      'Researched and implemented computer vision algorithms for image quality enhancement and low-light object detection on edge devices.',
      'Designed a collaborative recommendation web platform using Django, implementing collaborative filtering scoring with RESTful APIs.',
      'Built and maintained server-side Python scripts for computer vision pipeline orchestration and image preprocessing (Retinex algorithm).'
    ],
    technologies: ['Python', 'YOLOv8', 'Django', 'RESTful API', 'OpenCV', 'Retinex']
  }
];

export const educationData: EducationExperience[] = [
  {
    institution: 'Centre for Development of Advanced Computing (CDAC)',
    degree: 'Post Graduate Certificate Programme in Artificial Intelligence (PGCP-AI)',
    location: 'Noida, Uttar Pradesh, India',
    startDate: 'February 2026',
    endDate: 'August 2026',
    details: '6-month full-time PGCP-AI program at CDAC Noida covering Deep Learning, Computer Vision, NLP, Spark, Kafka, MLOps, Cloud, and Kubernetes.',
    rankOrGrade: 'CCAT AIR 286',
    capstone: 'GraphReg (Hybrid GraphRAG Platform for Regulatory Compliance)'
  },
  {
    institution: 'JSS Academy of Technical Education',
    degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
    location: 'Noida, Uttar Pradesh, India',
    startDate: 'November 2020',
    endDate: 'November 2025',
    details: 'Comprehensive coursework in computer science algorithms, systems, software engineering, and artificial intelligence.',
    rankOrGrade: '78.1% Aggregate'
  }
];

export const extracurricularData: Extracurricular[] = [
  {
    title: 'General Secretary',
    organization: 'Tenacious Technical Club',
    period: 'April 2023 - May 2024',
    description: 'Led technical club operations, coordinated workshops, hackathons, and inter-departmental technical events.'
  },
  {
    title: 'Mentee',
    organization: 'Amazon ML Summer School India',
    period: 'July 2023 - October 2023',
    description: 'Selected for intensive training program covering deep learning, reinforcement learning, GANs, NLP, and AWS SageMaker.'
  }
];
