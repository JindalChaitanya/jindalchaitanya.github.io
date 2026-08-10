# Sitemap & Information Architecture Strategy
**Target Profile:** Chaitanya Jindal — AI Systems Engineer

---

## 1. Overview & Architecture Philosophy

To achieve the dual objectives (AI/ML career credibility + modern frontend engineering excellence) without over-engineering or creating thin, empty pages, we propose a **hybrid static application architecture**.

The website combines:
1. A **High-Impact Master Home Page (`/`)** designed for fast recruiter scanning and immediate visual impression.
2. A **Filterable Engineering Project Catalog (`/projects`)** to showcase project breadth.
3. **Dedicated Interactive Deep-Dive Case Studies (`/projects/[slug]`)** for flagship projects (starting with `graphreg`, `quickdraw`, and `cropvision`).
4. A **Dedicated Background & Credentials Page (`/about`)** detailing CDAC, Droisys experience, and technical leadership.
5. A **Streamlined Interactive Contact Page (`/contact`)** with direct resume access and communication channels.

---

## 2. Recommended Route Hierarchy

```
/                             -> Master Executive Dashboard (Hero, GraphReg Teaser, Quick Metrics, Top Skills)
├── /projects                 -> Full Engineering Project Matrix (Tier 1, 2, 3 filterable by CV, RAG, MLOps, Web)
│   ├── /projects/graphreg    -> Flagship Case Study: GraphReg (Hybrid GraphRAG, Neo4j, Qdrant, BGE-M3, React UI)
│   ├── /projects/quickdraw   -> Case Study: QuickDraw (PyQt6, SIFT/FLANN, HDF5 Descriptor DB)
│   └── /projects/cropvision  -> Case Study: CropVision (YOLOv8/11 + OpenCV Automated Dataset Pipeline)
├── /about                    -> Background, CDAC PGCP-AI (AIR 286), Droisys History, Certifications, Leadership
└── /contact                  -> Interactive Command-Line / Terminal Contact + Direct PDF Resume Access
```

---

## 3. Detailed Route Justifications

### Route 1: `/` — Master Executive Dashboard
- **Purpose:** Serve as the main landing node for all visitors (recruiters, ML engineers, software developers).
- **Core Sections:**
  - **Hero Header:** Bold identity statement, status indicator (`Available for ML/AI Roles`), AIR 286 rank badge, immediate Resume PDF download CTA.
  - **Flagship Teaser (GraphReg):** High-impact interactive diagram preview showing Neo4j + Vector hybrid retrieval.
  - **Career Impact Bar:** Highlight numbers ($\text{40–60\%}$ efficiency gain, $100\%$ data quality, AIR 286).
  - **Featured Project Cards:** Direct entry points to Tier 1 and Tier 2 projects.
  - **Tech Stack Radar:** Interactive categorised skill matrix.
- **Why it exists:** Provides instant clarity within 5 seconds; ensures recruiters don't need to click multiple pages to evaluate core candidate viability.

### Route 2: `/projects` — Full Engineering Project Matrix
- **Purpose:** Showcase the breadth of engineering output beyond the capstone.
- **Features:** Categorized matrix with real-time filtering by tech tags (`GraphRAG`, `Computer Vision`, `MLOps / Infra`, `Desktop / Web`).
- **Includes:** GraphReg, QuickDraw, CropVision, AI Cutout Pro, Image Processing Toolkit, Recommendation Engine, Home Lab.
- **Why it exists:** Prevents homepage clutter while providing deep technical proof for senior engineering leads.

### Route 3: `/projects/[slug]` — Dedicated Interactive Case Studies
- **Purpose:** Provide rigorous, audit-level technical documentation for top-tier projects.
- **Initial Slugs:**
  1. `/projects/graphreg` (Flagship GraphRAG capstone design, Neo4j traversal mechanics, GLiNER extraction, ms-marco reranking, auditable React UI).
  2. `/projects/quickdraw` (Classical computer vision, SIFT/FLANN feature descriptors, persistent HDF5 feature DB, PyQt6 GUI).
  3. `/projects/cropvision` (Automated dataset engineering, YOLOv8/11 bounding box inference, OpenCV batch cropping).
- **Why it exists:** Technical interviewers often want to inspect architectural choices, system boundaries, and code snippets before an interview.

### Route 4: `/about` — Engineering Background & Credentials
- **Purpose:** Complete narrative of education, professional experience, certifications, and leadership.
- **Core Sections:**
  - **CDAC PGCP-AI Deep Dive:** AIR 286 achievement, 900+/1200 hrs curriculum breakdown.
  - **Droisys Employment Timeline:** Progression from AI Intern to Associate Data Analyst.
  - **Extracurricular & Leadership:** Tenacious Technical Club General Secretary, Amazon ML Summer School.
  - **Certifications Grid:** 5 verified certifications with credential verification links.
- **Why it exists:** Satisfies recruiters and HR managers checking education credentials and career timeline continuity.

### Route 5: `/contact` — Interactive Contact & Resume Hub
- **Purpose:** Convert interest into communication.
- **Features:** Direct email action, LinkedIn redirect, GitHub link, 1-click PDF resume view/download, and an optional interactive terminal mode (`contact.sh`).
- **Why it exists:** Ensures zero friction for scheduling interviews or reaching out via email/LinkedIn.
