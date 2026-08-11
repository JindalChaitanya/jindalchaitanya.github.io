export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Core Languages',
    skills: ['Python', 'SQL', 'C++', 'JavaScript', 'HTML/CSS']
  },
  {
    category: 'AI / Machine Learning & CV',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'YOLO (v8/11)', 'OpenCV', 'SIFT/FLANN', 'U²-Net', 'ONNX Runtime']
  },
  {
    category: 'LLMs, RAG & GenAI',
    skills: [
      'GraphRAG',
      'Neo4j (Cypher)',
      'Qdrant',
      'ChromaDB',
      'BGE-M3 Embeddings',
      'GLiNER Zero-Shot Extraction',
      'ms-marco-MiniLM Reranking',
      'IBM Docling',
      'LlamaIndex / LangChain (verify implementation)'
    ]
  },
  {
    category: 'Data, Infrastructure & MLOps',
    skills: ['Docker', 'Kubernetes (CDAC curriculum)', 'MLflow', 'Apache Spark / PySpark', 'Pandas', 'NumPy', 'HDF5', 'Git', 'Linux']
  },
  {
    category: 'Web & GUI Frameworks',
    skills: ['FastAPI', 'Django', 'Flask', 'PyQt / PyQt6', 'React', 'Tailwind CSS']
  },
  {
    category: 'Spoken Languages',
    skills: ['Hindi (Native/Bilingual)', 'English (Professional Working)', 'German (Elementary)']
  }
];
