# Canonical Content Source of Truth
**Target Profile:** Chaitanya Jindal — AI Systems Engineer

This document establishes the single source of truth extracted exclusively from the three source documents: `Docs/Profile.pdf`, `Docs/README.md`, and `Docs/ChaitanyaJindal_Resume.pdf`.

---

## 1. Identity & Contact Information

| Field | Source(s) | Confidence | Recommended Canonical Wording |
|---|---|---|---|
| **Full Name** | Profile, README, Resume | High (100%) | **Chaitanya Jindal** |
| **Headline / Title** | Profile, README, Resume | High (95%) | **AI Systems Engineer \| GraphRAG · Agentic AI · Computer Vision · MLOps** |
| **Short Summary** | Profile, README, Resume | High (95%) | I build production-focused AI systems across computer vision, retrieval platforms, and data pipelines—not notebooks that score well in isolation and never see production. |
| **Location** | Profile, Resume | High (100%) | **Noida, Uttar Pradesh, India** |
| **Primary Email** | Profile, README, Resume | High (Pending User Approval) | **chaitanya.jindal2002@gmail.com** *(Secondary: jindalchaitanya@icloud.com)* |
| **Phone / Mobile** | Profile, Resume | High (100%) | **+91 7351531311** |
| **GitHub** | README, Resume | High (100%) | **github.com/JindalChaitanya** |
| **LinkedIn** | Profile, README, Resume | High (100%) | **linkedin.com/in/jindalchaitanya** |
| **Linktree / Portfolio Link** | Profile | Medium (100%) | **linktr.ee/jchaitanya** |

---

## 2. Education & Academic Background

### Centre for Development of Advanced Computing (CDAC), Noida
- **Program Name:** Post Graduate Certificate Programme in Artificial Intelligence (PGCP-AI)
- **Period:** February 2026 – August 2026
- **Entrance Examination Rank:** **CCAT AIR 286** (All India Rank 286, CCAT Feb 2026)
- **Canonical Program Description:** **6-month full-time PGCP-AI program at CDAC Noida**
- **Unresolved Discrepancy Note:** Source documents conflict on exact total hours (`Profile.pdf` states 1200-hour; `README.md` states 900+ hour). The canonical summary uses "6-month full-time program" until the user explicitly confirms the official hour count.
- **Curriculum Scope:** Deep Learning, Computer Vision, NLP, Spark, Kafka, MLOps, Cloud, and Kubernetes.
- **Capstone Project:** GraphReg (Hybrid GraphRAG platform for SEBI regulatory compliance).
- **Sources:** Profile.pdf (p.1, p.3), README.md (l.43, l.120), Resume.pdf (p.1).

### JSS Academy of Technical Education, Noida / Gautam Buddh Nagar
- **Degree:** Bachelor of Technology (B.Tech) in Computer Science & Engineering
- **Period:** November 2020 – November 2025 (Graduated / Passing 2025)
- **Aggregate Score:** **78.1%** *(Source: Resume.pdf)*
- **Sources:** Profile.pdf (p.3), README.md (l.123), Resume.pdf (p.1).

### The Adhyyan School
- **Level:** High School / Secondary Diplomas and Certificates (2013 – 2020)
- **Source:** Profile.pdf (p.3).

---

## 3. Work Experience History

### Droisys — Associate Data Analyst
- **Period:** April 2025 – February 2026 (11 months)
- **Location:** Noida, Uttar Pradesh, India
- **Key Achievements & Impact:**
  - **Auto-Annotator Toolkit:** Designed and shipped a Python-based "Auto-Annotator" toolkit using localized template matching and SIFT/FLANN feature matching, reducing manual labeling labor by **60%** and freeing team resources for dataset curation.
  - **Automated Image Cropping Pipeline:** Engineered an automated image cropping pipeline utilizing **YOLO (YOLO11 / YOLOv8 - verify version per project)** and OpenCV, shortening dataset preparation turnaround time by **40–50%** and removing a key production bottleneck.
  - **Data Validation & Sanitization Pipelines:** Designed and deployed automated data validation and preprocessing scripts using Pandas to sanitize large-scale preproduction datasets, ensuring production-grade quality (100% data quality standard) for downstream Computer Vision models.
- **Sources:** Profile.pdf (p.1-2), README.md (l.125-129), Resume.pdf (p.1).

### Droisys — Python AI Intern
- **Period:** January 2024 – May 2024 (5 months)
- **Location:** Noida, Uttar Pradesh, India
- **Key Achievements & Impact:**
  - **Object Detection & Edge Optimization:** Researched and fine-tuned computer vision algorithms (including YOLOv8) for image quality enhancement and low-light object detection on real-time edge devices.
  - **Collaborative Recommendation Platform:** Designed and deployed a collaborative recommendation web application using Django, implementing collaborative filtering-based scoring with RESTful APIs for real-time data ingestion and analytics dashboards.
  - **Core Image Enhancement & Pipeline Orchestration:** Implemented core image-enhancement modules (Retinex algorithm, custom filters) and server-side Python scripts for computer vision pipeline orchestration and preprocessing.
- **Sources:** Profile.pdf (p.2), README.md (l.130-134). *(Omitted in Resume.pdf, retained as approved career progression).*

---

## 4. Featured Projects & Technical Engineering Work

### Project 1: GraphReg (Tier 1 Flagship Capstone)
- **Primary Project Name:** **GraphReg** *(Source alternate: GraphRegAI)*
- **Full Title:** GraphReg: Hybrid GraphRAG Platform for Regulatory Compliance
- **Domain & Context:** Capstone project for CDAC PGCP-AI program targeting SEBI / RBI regulatory circulars.
- **Key Technical Architecture & Features:**
  - **Layout-Aware Document Parsing:** Utilizes **IBM Docling** to parse multi-page regulatory documents while preserving schedules, tables, and visual structure.
  - **Zero-Shot Legal Entity Extraction:** Employs **GLiNER** neural zero-shot entity extraction to identify regulatory entities and legal clauses.
  - **Hybrid Graph + Vector Retrieval:** Combines **Neo4j** 2-hop property graph traversal with top-k semantic vector search over **Qdrant** (or Chroma) using **BGE-M3** dense embeddings.
  - **Cross-Encoder Reranking:** Integrates **ms-marco-MiniLM** cross-encoder reranking to ensure context precision before feeding prompts to LLMs.
  - **Auditable Web UI:** Built with **React** and **FastAPI** to present citation-backed, source-grounded answers for regulatory audits.
  - **Containerization:** Containerized with **Docker** for reproducible deployment.
- **RAG Orchestration Framework Note:** Source documents contain a discrepancy (`Profile.pdf` mentions LlamaIndex; `README.md` lists LangChain). Framework implementation marked as: **RAG orchestration: LlamaIndex / LangChain — verify implementation**. Division of responsibilities is NOT extrapolated as factual until verified.
- **Tech Stack:** Neo4j (Cypher), Qdrant, ChromaDB, BGE-M3, GLiNER, ms-marco-MiniLM, IBM Docling, LlamaIndex / LangChain (verify), FastAPI, React, Docker.
- **Sources:** Profile.pdf (p.1), README.md (l.65-76), Resume.pdf (p.1).

### Project 2: QuickDraw — Smart Reference Annotator (Tier 2 Strong Engineering)
- **Full Title:** QuickDraw: Smart Reference Annotation Desktop Tool
- **Key Features:** Desktop semi-automatic annotation tool built with **PyQt6**, integrating classical computer vision (**SIFT + FLANN** feature matching) and persistent **HDF5** database storage (>70% human review reduction with 10 manual examples). YOLO annotation export.
- **Tech Stack:** PyQt6, Python, OpenCV, SIFT, FLANN, HDF5, YOLO format.
- **Sources:** Profile.pdf (p.1), README.md (l.90-97), Resume.pdf (p.1).

### Project 3: CropVision — Object Detection & Dataset Preparation (Tier 2 Strong Engineering)
- **Full Title:** CropVision: Desktop Application for Large-Scale Object Detection & Automated Cropping
- **Key Features:** Built with **PyQt6** and **YOLO (v8/11 per project history)** for automated image cropping workflows (~50% faster crop workflows vs manual annotation).
- **Tech Stack:** PyQt6, Python, YOLO, OpenCV, NumPy.
- **Sources:** README.md (l.80-87), Profile.pdf (p.1-2), Resume.pdf (p.1).

### Project 4: AI Cutout Pro — Background Removal & Object Extraction (Tier 3 Project)
- **Full Title:** AI Cutout Pro: Desktop Background Removal & Object Extraction Application
- **Key Features:** YOLO detection + **U²-Net** segmentation using **ONNX Runtime** for edge background removal.
- **Tech Stack:** Python, YOLO, U²-Net, ONNX Runtime, PyQt.
- **Source:** README.md (l.100-106).

### Project 5: Image Processing Toolkit (Tier 3 Supporting Project)
- **Full Title:** Dataset Engineering & Preprocessing Toolkit for Computer Vision at Scale
- **Key Features:** Dataset validation, cleaning, duplicate detection, image augmentation, annotation format conversion.
- **Source:** README.md (l.109-115).

### Project 6: Collaborative Recommendation Platform (Tier 3 Supporting Project)
- **Full Title:** Django Collaborative Filtering & Analytics Platform
- **Key Features:** Django movie recommendation web app using collaborative filtering, RESTful APIs, and analytics dashboards.
- **Sources:** Profile.pdf (p.2), README.md (l.132).

### Project 7: Self-Hosted Home Lab / Private Cloud (Tier 3 Specialized Work)
- **Full Title:** Self-Hosted Home Lab Infrastructure & Media Streaming Server
- **Key Features:** Built and self-hosted home lab using Raspberry Pi as central node handling NAS storage, real-time data ingestion, and media streaming.
- **Source:** Resume.pdf (p.1).

---

## 5. Comprehensive Technical Skill Matrix

| Skill Domain | Canonical Technologies Supported by Source Files |
|---|---|
| **Core Languages** | Python, SQL, C++, JavaScript, HTML/CSS |
| **AI / Machine Learning** | PyTorch, TensorFlow, Scikit-Learn, OpenCV, YOLO (v8/11), SIFT/FLANN, U²-Net, ONNX Runtime |
| **LLMs, RAG & GenAI** | GraphRAG, Neo4j (Cypher), Qdrant, ChromaDB, BGE-M3 Embeddings, GLiNER, ms-marco-MiniLM Cross-Encoder Reranking, IBM Docling, LlamaIndex / LangChain (verify implementation) |
| **Data & MLOps** | Docker, Kubernetes (CDAC scope), MLflow, Apache Spark / PySpark, Pandas, NumPy, HDF5, Git, Linux |
| **Web & GUI Frameworks** | FastAPI, Django, Flask, PyQt / PyQt6, React, Tailwind CSS |
| **Languages Spoken** | Hindi (Native/Bilingual), English (Professional Working), German (Elementary) |
