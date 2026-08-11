export interface SkillGroup {
  id: string;
  category: string;
  description: string;
  technologies: string[];
  relatedProjectSlugs?: string[];
}

export const skillsData: SkillGroup[] = [
  {
    id: 'ai-ml',
    category: 'AI / Machine Learning',
    description:
      'Building practical machine learning models, deep learning architectures, and production-oriented pipelines.',
    technologies: ['PyTorch', 'TensorFlow', 'Scikit-Learn'],
    relatedProjectSlugs: ['graphreg', 'quickdraw', 'cropvision'],
  },
  {
    id: 'computer-vision',
    category: 'Computer Vision',
    description:
      'Object detection, semi-automated annotation tools, dataset preprocessing, and edge deployment.',
    technologies: ['YOLO (v8/11)', 'OpenCV', 'SIFT / FLANN', 'U²-Net', 'ONNX Runtime'],
    relatedProjectSlugs: ['quickdraw', 'cropvision', 'ai-cutout-pro'],
  },
  {
    id: 'graphrag-retrieval',
    category: 'GraphRAG / Retrieval',
    description:
      'Combining property knowledge graphs, dense vector search, neural entity extraction, and cross-encoder reranking.',
    technologies: [
      'GraphRAG',
      'Neo4j (Cypher)',
      'Qdrant',
      'ChromaDB',
      'BGE-M3 Embeddings',
      'GLiNER Zero-Shot Extraction',
      'ms-marco-MiniLM Reranking',
      'IBM Docling',
    ],
    relatedProjectSlugs: ['graphreg'],
  },
  {
    id: 'mlops-infra',
    category: 'MLOps / Infrastructure',
    description:
      'Containerized deployments, automated data validation pipelines, dataset curation, and reproducible tooling.',
    technologies: [
      'Docker',
      'Kubernetes (CDAC curriculum)',
      'MLflow',
      'Apache Spark / PySpark',
      'Pandas',
      'NumPy',
      'HDF5',
      'Git',
      'Linux',
    ],
    relatedProjectSlugs: ['graphreg', 'cropvision', 'home-lab-private-cloud'],
  },
  {
    id: 'languages-frameworks',
    category: 'Languages / Tools',
    description:
      'Core programming languages, RESTful API frameworks, GUI toolkits, and web frontends.',
    technologies: [
      'Python',
      'SQL',
      'C++',
      'JavaScript',
      'HTML/CSS',
      'FastAPI',
      'Django',
      'Flask',
      'PyQt / PyQt6',
      'React',
      'Tailwind CSS',
    ],
    relatedProjectSlugs: ['django-recommendation-engine', 'quickdraw', 'graphreg'],
  },
];
