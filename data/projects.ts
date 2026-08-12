export interface Project {
  slug: string;
  title: string;
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
    tagline: 'Graph + Vector Retrieval Targeting SEBI Regulations',
    description: 'CDAC PGCP-AI capstone: a hybrid Neo4j and Qdrant retrieval platform that parses and queries complex SEBI regulatory circulars using layout-aware parsing and cross-encoder context reranking.',
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
      'Zero-shot legal entity extraction with GLiNER',
      '2-hop Neo4j property graph traversal + Qdrant dense vector search',
      'ms-marco-MiniLM cross-encoder reranking'
    ],
    category: 'GraphRAG & GenAI',
    featured: true,
    githubUrl: 'https://github.com/JindalChaitanya/GraphReg',
    hasCaseStudy: true,
  },
  {
    slug: 'quickdraw',
    title: 'QuickDraw',
    tagline: 'Reference-Based Dataset Annotation',
    description: 'A PyQt desktop annotation application using SIFT feature matching and FLANN indexing to auto-label image datasets from just 10 manual reference samples, cutting review time by over 70%.',
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
      'Functional with 10 manual reference examples',
      'HDF5 persistent feature descriptor storage'
    ],
    category: 'Computer Vision',
    featured: true,
    githubUrl: 'https://github.com/JindalChaitanya/QuickDraw',
    hasCaseStudy: true
  },
  {
    slug: 'cropvision',
    title: 'CropVision',
    tagline: 'Automated Dataset Cropping',
    description: 'A desktop batch processing tool combining YOLO object detection with OpenCV to validate bounding boxes and crop dataset images 40–50% faster than manual workflows.',
    techStack: [
      'PyQt6',
      'Python',
      'YOLOv8 / YOLO11',
      'OpenCV',
      'NumPy'
    ],
    metrics: [
      '40–50% faster dataset cropping workflows',
      'Batch processing with visual bounding-box validation',
      'Custom class filtering and confidence thresholds'
    ],
    category: 'Computer Vision',
    featured: true,
    githubUrl: 'https://github.com/JindalChaitanya/CropVision',
    hasCaseStudy: true,
  },
  {
    slug: 'ai-cutout-pro',
    title: 'AI Cutout Pro',
    tagline: 'Background Removal & Segmentation',
    description: 'A desktop application combining YOLO detection with U²-Net segmentation on ONNX Runtime for portable, high-precision edge object extraction.',
    techStack: [
      'Python',
      'YOLO',
      'U²-Net',
      'ONNX Runtime',
      'PyQt'
    ],
    metrics: [
      'ONNX Runtime portable edge inference',
      'Combined detection and segmentation pipeline'
    ],
    category: 'Computer Vision',
    featured: false,
    githubUrl: 'https://github.com/JindalChaitanya/AI-Cutout-Pro',
    hasCaseStudy: false
  },
  {
    slug: 'image-processing-toolkit',
    title: 'Image Processing Toolkit',
    tagline: 'Dataset Engineering Suite',
    description: 'A Python dataset preprocessing library that automates duplicate image detection, data augmentation, and annotation format conversions between YOLO, COCO, and Pascal VOC.',
    techStack: [
      'Python',
      'OpenCV',
      'Pillow',
      'Pandas',
      'NumPy'
    ],
    metrics: [
      'Automated dataset cleaning and deduplication',
      'Annotation format conversion (YOLO, Pascal VOC, COCO)'
    ],
    category: 'ML Tooling',
    featured: false,
    githubUrl: 'https://github.com/JindalChaitanya/Image-Processing-Toolkit',
    hasCaseStudy: false
  },
  {
    slug: 'django-recommendation-engine',
    title: 'Collaborative Recommendation Platform',
    tagline: 'Django Recommendation Platform',
    description: 'A Django web application providing collaborative filtering recommendation scoring algorithms and RESTful API ingestion endpoints.',
    techStack: [
      'Django',
      'Python',
      'RESTful API',
      'Collaborative Filtering'
    ],
    metrics: [
      'User item scoring matrix engine',
      'RESTful API endpoints for interaction logging'
    ],
    category: 'Web & Backend',
    featured: false,
    hasCaseStudy: false
  },
  {
    slug: 'home-lab-private-cloud',
    title: 'Self-Hosted Private Cloud',
    tagline: 'Private Cloud Infrastructure',
    description: 'A Raspberry Pi home lab handling NAS storage, local network services, and containerized ingestion workloads.',
    techStack: [
      'Raspberry Pi',
      'Linux',
      'NAS',
      'Docker',
      'Networking'
    ],
    metrics: [
      'Central NAS node on Raspberry Pi',
      'Containerized background ingestion service'
    ],
    category: 'DevOps & Infra',
    featured: false,
    hasCaseStudy: false
  }
];
