export interface Project {
  slug: string;
  title: string;
  tier: 1 | 2 | 3;
  tagline: string;
  description: string;
  techStack: string[];
  metrics: string[];
  category: 'GraphRAG & GenAI' | 'Computer Vision' | 'ML Tooling' | 'Web & Backend' | 'DevOps & Infra';
  featured: boolean;
  githubUrl?: string;
  hasCaseStudy: boolean;
  frameworkNote?: string;
}

export const projectsData: Project[] = [
  {
    slug: 'graphreg',
    title: 'GraphReg',
    tier: 1,
    tagline: 'Hybrid GraphRAG Platform for Regulatory Compliance',
    description: 'Enterprise-grade hybrid Graph + Vector RAG platform engineered specifically for complex SEBI and RBI regulatory compliance text.',
    techStack: [
      'Neo4j (Cypher)',
      'Qdrant',
      'ChromaDB',
      'BGE-M3',
      'GLiNER',
      'ms-marco-MiniLM',
      'IBM Docling',
      'FastAPI',
      'React',
      'Docker'
    ],
    metrics: [
      'Layout-aware parsing with IBM Docling',
      'Neural zero-shot entity extraction with GLiNER',
      '2-hop property graph traversal + top-k vector search',
      'Cross-encoder reranking context precision'
    ],
    category: 'GraphRAG & GenAI',
    featured: true,
    githubUrl: 'https://github.com/JindalChaitanya/GraphReg',
    hasCaseStudy: true,
    frameworkNote: 'RAG orchestration: LlamaIndex / LangChain — verify implementation'
  },
  {
    slug: 'quickdraw',
    title: 'QuickDraw',
    tier: 2,
    tagline: 'Smart Reference Annotation Tool',
    description: 'Semi-automatic desktop image annotation application integrating classical computer vision and persistent feature descriptors.',
    techStack: [
      'PyQt6',
      'Python',
      'OpenCV',
      'SIFT',
      'FLANN',
      'HDF5',
      'YOLO Format'
    ],
    metrics: [
      '>70% human review time reduction',
      'Functional with only 10 manual examples',
      'HDF5 persistent feature descriptor database'
    ],
    category: 'Computer Vision',
    featured: true,
    githubUrl: 'https://github.com/JindalChaitanya/QuickDraw',
    hasCaseStudy: true
  },
  {
    slug: 'cropvision',
    title: 'CropVision',
    tier: 2,
    tagline: 'Object Detection & Dataset Preparation Application',
    description: 'Desktop application for large-scale object detection and automated image cropping.',
    techStack: [
      'PyQt6',
      'Python',
      'YOLOv8 / YOLO11',
      'OpenCV',
      'NumPy'
    ],
    metrics: [
      '40–50% faster crop workflows vs manual annotation',
      'Batch processing with visual bounding-box validation',
      'Adjustable confidence thresholds and class filtering'
    ],
    category: 'Computer Vision',
    featured: true,
    githubUrl: 'https://github.com/JindalChaitanya/CropVision',
    hasCaseStudy: true,
    frameworkNote: 'YOLOv8 / YOLO11 — verify per project'
  },
  {
    slug: 'ai-cutout-pro',
    title: 'AI Cutout Pro',
    tier: 3,
    tagline: 'Background Removal & Object Extraction',
    description: 'Desktop application combining YOLO detection with U²-Net segmentation for clean edge object extraction.',
    techStack: [
      'Python',
      'YOLO',
      'U²-Net',
      'ONNX Runtime',
      'PyQt'
    ],
    metrics: [
      'Fast portable edge inference with ONNX Runtime',
      'YOLO detection + U²-Net segmentation integration'
    ],
    category: 'Computer Vision',
    featured: false,
    githubUrl: 'https://github.com/JindalChaitanya/AI-Cutout-Pro',
    hasCaseStudy: false
  },
  {
    slug: 'image-processing-toolkit',
    title: 'Image Processing Toolkit',
    tier: 3,
    tagline: 'Dataset Engineering & Preprocessing Suite',
    description: 'Computer vision preprocessing toolkit for scaling dataset cleaning, duplicate detection, and augmentation.',
    techStack: [
      'Python',
      'OpenCV',
      'Pillow',
      'Pandas',
      'NumPy'
    ],
    metrics: [
      'Dataset validation, cleaning, and duplicate detection',
      'Augmentation and annotation format conversion'
    ],
    category: 'ML Tooling',
    featured: false,
    githubUrl: 'https://github.com/JindalChaitanya/Image-Processing-Toolkit',
    hasCaseStudy: false
  },
  {
    slug: 'django-recommendation-engine',
    title: 'Collaborative Recommendation Engine',
    tier: 3,
    tagline: 'Django Movie Recommendation Platform',
    description: 'Collaborative filtering web application providing scoring algorithms, RESTful APIs, and analytics dashboards.',
    techStack: [
      'Django',
      'Python',
      'RESTful API',
      'Collaborative Filtering'
    ],
    metrics: [
      'Collaborative filtering scoring engine',
      'RESTful APIs for real-time ingestion'
    ],
    category: 'Web & Backend',
    featured: false,
    hasCaseStudy: false
  },
  {
    slug: 'home-lab-private-cloud',
    title: 'Self-Hosted Home Lab',
    tier: 3,
    tagline: 'Private Cloud Infrastructure & Media Server',
    description: 'Self-hosted home lab centered on Raspberry Pi handling NAS storage, data ingestion, and local media streaming.',
    techStack: [
      'Raspberry Pi',
      'Linux',
      'NAS',
      'Docker',
      'Networking'
    ],
    metrics: [
      'Central node private cloud NAS',
      'Real-time data ingestion and streaming'
    ],
    category: 'DevOps & Infra',
    featured: false,
    hasCaseStudy: false
  }
];
