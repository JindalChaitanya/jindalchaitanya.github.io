# Project Hierarchy & Tiering Architecture
**Target Profile:** Chaitanya Jindal — AI Systems Engineer

This document analyzes every project identified across the source documents (`Docs/Profile.pdf`, `Docs/README.md`, `Docs/ChaitanyaJindal_Resume.pdf`) and establishes a visual and structural tiering strategy.

---

## 1. Executive Tier Summary

```
TIER 1 — FLAGSHIP CAPSTONE (Dedicated Interactive Case Study & Hero Spotlight)
└── GraphReg: Hybrid GraphRAG Platform for Regulatory Compliance

TIER 2 — STRONG ENGINEERING PROJECTS (Interactive Dedicated Case Studies)
├── QuickDraw: Smart Reference Annotator (SIFT/FLANN + HDF5 Descriptor DB)
└── CropVision: Object Detection & Automated Dataset Cropping Pipeline (YOLOv8/11 + OpenCV)

TIER 3 — SUPPORTING & SPECIALIZED PROJECTS (Project Matrix Cards)
├── AI Cutout Pro: Background Removal & Object Extraction (YOLO + U²-Net + ONNX)
├── Image Processing Toolkit: CV Dataset Preprocessing & Cleaning Suite
├── Collaborative Recommendation Engine: Django + Collaborative Filtering Web App
└── Self-Hosted Home Lab: Private Cloud, Data Ingestion & Streaming Infrastructure
```

---

## 2. Granular Tiering Analysis

### Tier 1 — Flagship Capstone

#### Project: GraphReg (Hybrid GraphRAG Platform for Regulatory Compliance)
- **Tier Assignment:** **TIER 1 — FLAGSHIP**
- **Justification from Source Material:**
  - Designated as the official capstone project for the CDAC PGCP-AI program (`README.md` l.76, `Profile.pdf` p.1).
  - Demonstrates the highest architectural complexity of all listed projects: combines layout-aware document parsing (**IBM Docling**), neural zero-shot entity extraction (**GLiNER**), 2-hop property graph traversal (**Neo4j**), top-k semantic vector search (**Qdrant / Chroma**), dense embeddings (**BGE-M3**), cross-encoder reranking (**ms-marco-MiniLM**), FastAPI backend, and an auditable **React UI**.
  - Targets high-stakes enterprise regulatory compliance (SEBI circulars).
- **Technical Evidence Provided:**
  - Enterprise GraphRAG architecture design.
  - Hybrid retrieval mechanics (graph traversal + vector similarity).
  - Neural entity extraction & cross-encoder reranking.
  - Full-stack web integration (FastAPI + React).
  - Containerized reproducible deployment (Docker).
- **Visual Treatment Deserved:**
  - Prominent Hero section spotlight on the Home page (`/`).
  - Interactive multi-stage pipeline diagram (Docling $\rightarrow$ GLiNER $\rightarrow$ Neo4j + Qdrant $\rightarrow$ Reranker $\rightarrow$ React UI).
  - Dedicated interactive case study page (`/projects/graphreg`).
  - 3D interactive knowledge node graph preview powered by React Three Fiber.
- **Dedicated Case-Study Page Required:** **YES** (`/projects/graphreg`).

---

### Tier 2 — Strong Engineering Projects

#### Project 1: QuickDraw (Smart Reference Annotator)
- **Tier Assignment:** **TIER 2 — STRONG ENGINEERING**
- **Justification from Source Material:**
  - Solves a core real-world computer vision bottleneck (manual image annotation).
  - Demonstrates classical computer vision expertise (**SIFT + FLANN** feature matching) rather than relying exclusively on black-box deep learning models.
  - Integrates persistent **HDF5** database storage for feature descriptors, cutting human labeling review time by **>70%** with only 10 manual examples (`Resume.pdf` p.1).
- **Technical Evidence Provided:** Classical CV algorithms, descriptor indexing, persistent HDF5 database engineering, PyQt6 desktop UI design.
- **Visual Treatment Deserved:** Interactive feature card on `/projects` with video/GIF preview of bounding-box generation, plus a dedicated case study page (`/projects/quickdraw`).
- **Dedicated Case-Study Page Required:** **YES** (`/projects/quickdraw`).

#### Project 2: CropVision (Object Detection & Automated Cropping)
- **Tier Assignment:** **TIER 2 — STRONG ENGINEERING**
- **Justification from Source Material:**
  - High quantitative impact: cuts dataset preparation turnaround by **40–50%** vs manual cropping (`README.md` l.83).
  - Combines **YOLOv8 / YOLO11** deep learning inference with OpenCV batch image processing and PyQt6 GUI.
- **Technical Evidence Provided:** Custom object detection deployment, batch image manipulation pipelines, GUI tooling for CV dataset engineering.
- **Visual Treatment Deserved:** Interactive comparison slider (raw input image vs auto-cropped output bounding boxes), dedicated case study page (`/projects/cropvision`).
- **Dedicated Case-Study Page Required:** **YES** (`/projects/cropvision`).

---

### Tier 3 — Supporting & Specialized Projects

#### Project 1: AI Cutout Pro (Background Removal & Object Extraction)
- **Tier Assignment:** **TIER 3 — SUPPORTING**
- **Justification:** Combines YOLO detection with **U²-Net** segmentation using **ONNX Runtime** for edge inference (`README.md` l.100-106).
- **Visual Treatment:** Feature card on `/projects` with technology tag pills and modal deep-dive preview.
- **Dedicated Case-Study Page Required:** No (Covered within `/projects` detail drawer).

#### Project 2: Image Processing Toolkit
- **Tier Assignment:** **TIER 3 — SUPPORTING**
- **Justification:** Demonstrates production dataset hygiene, deduplication, validation, and data augmentation (`README.md` l.109-115).
- **Visual Treatment:** Feature card on `/projects` under "ML Data Tooling".
- **Dedicated Case-Study Page Required:** No.

#### Project 3: Collaborative Recommendation Engine (Django)
- **Tier Assignment:** **TIER 3 — SUPPORTING**
- **Justification:** Built during Droisys internship; demonstrates full-stack Python/Django skills, collaborative filtering algorithms, and RESTful APIs (`Profile.pdf` p.2).
- **Visual Treatment:** Feature card on `/projects` under "Web & API Engineering".
- **Dedicated Case-Study Page Required:** No.

#### Project 4: Self-Hosted Home Lab & Private Cloud
- **Tier Assignment:** **TIER 3 — SPECIALIZED INFRASTRUCTURE**
- **Justification:** Raspberry Pi NAS server handling real-time data ingestion and media streaming (`Resume.pdf` p.1). Demonstrates Linux sysadmin initiative.
- **Visual Treatment:** Compact visual telemetry widget on `/about` and feature card on `/projects` under "DevOps & Hardware".
- **Dedicated Case-Study Page Required:** No.
