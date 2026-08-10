# User Experience (UX) Flow & Visitor Journeys
**Target Profile:** Chaitanya Jindal — AI Systems Engineer

---

## 1. Persona-Based Visitor Journeys

### Persona A: Technical Recruiter
*Goal: Fast qualification, verification of title/degree/metrics, and immediate resume retrieval.*

| Time Elapsed | Target UX State & Information Absorbed |
|---|---|
| **5 Seconds** | Sees hero headline ("AI Systems Engineer"), CDAC AIR 286 rank badge, location (Noida), and prominent **"Download Resume (PDF)"** CTA. Confirms candidate identity instantly. |
| **20 Seconds** | Scans career impact highlights: Associate Data Analyst at Droisys, **40–60% efficiency gains** in annotation/cropping, CDAC 6-month full-time PGCP-AI qualification. |
| **60 Seconds** | Reviews top skill badges (GraphRAG, PyTorch, Docker, OpenCV, FastAPI, Neo4j) and notes availability for ML/AI roles. |
| **3 Minutes** | Clicks "Download Resume" or navigates to `/contact` to send an email / LinkedIn message. |

---

### Persona B: AI/ML Engineer & Technical Lead Interviewer
*Goal: Evaluate technical depth, system design rigor, GraphRAG pipeline mechanics, and production readiness.*

| Time Elapsed | Target UX State & Information Absorbed |
|---|---|
| **5 Seconds** | Recognizes non-trivial AI positioning: GraphRAG, Neo4j knowledge graphs, Qdrant vector retrieval, zero-shot GLiNER extraction, MLOps. |
| **20 Seconds** | Interacts with the **GraphReg Architecture Diagram** on the home page, observing layout-aware parsing (IBM Docling) $\rightarrow$ GLiNER entity extraction $\rightarrow$ 2-hop Neo4j graph traversal + Qdrant semantic search $\rightarrow$ Cross-encoder reranking. |
| **60 Seconds** | Navigates to `/projects/graphreg` case study. Reads about property graph retrieval mechanics, citation-backed auditable React UI, and Docker containerization. |
| **3 Minutes** | Explores `/projects/quickdraw` to inspect SIFT/FLANN feature matching descriptors in persistent HDF5 databases and evaluates overall ML software design patterns. |

---

### Persona C: Frontend / Software Engineer
*Goal: Evaluate web development standards, UI/UX polish, app performance, clean code architecture, and interactive quality.*

| Time Elapsed | Target UX State & Information Absorbed |
|---|---|
| **5 Seconds** | Wowed by visual aesthetics: deep obsidian slate palette, crisp status telemetry, subtle animated network graph background, high-contrast typography. |
| **20 Seconds** | Tests responsive interactions, smooth hover states, glassmorphic card overlays, and subtle scroll-triggered micro-animations. |
| **60 Seconds** | Inspects page transitions, dynamic project filtering in `/projects`, and instant route changes powered by Next.js static routing. |
| **3 Minutes** | Observes accessibility features, clean DOM hierarchy, dark-mode color balance, and fast static export execution. |

---

## 2. Core Interaction Strategies

### Navigation & Header Strategy
- **Sticky Glassmorphic Navbar:** Remains visible on scroll with backdrop blur (`backdrop-blur-md bg-slate-950/80`).
- **Brand Identity:** Left-aligned active logo mark `CJ // AI Systems Engineer`.
- **Primary Nav Links:** `Home`, `Projects`, `About`, `Contact`.
- **Quick Action CTA:** Distinct highlighted button for **`Resume (PDF)`** with direct download fallback.

### CTA (Call-to-Action) Architecture
- **Primary Hero CTA:** Dual buttons: `[ Explore GraphReg Architecture ]` (Primary Glowing Cyan) and `[ Download Resume (PDF) ]` (Secondary Slate Border).
- **In-Page Project CTAs:** Every project card features `[ View Case Study ]` and `[ Source Code / GitHub ]`.
- **Footer CTA:** Persistent contact bar: `Interested in building production AI systems together? [ Get in Touch ]`.

### Project Discovery & Deep-Dive Flow
```
[ Home Page Teaser ] ---> Clicks "Explore Projects" ---> [ /projects Matrix ]
                                                                 │
                                                    Filters by Tag (CV / GraphRAG / MLOps)
                                                                 │
                                                      Clicks Project Card
                                                                 │
                                                       ▼
                                            [ /projects/[slug] Case Study ]
                                            ├── System Architecture Flowchart
                                            ├── Problem vs Solution Engineering
                                            ├── Key Technical Decisions & Metrics
                                            └── GitHub / Interactive Demo Link
```

### Mobile UX & Responsive Strategy
- **Mobile Navigation:** Slide-over drawer menu triggered by a clean hamburger toggle with animated icon transformation.
- **Touch Targets:** Minimum 44x44px hit areas for all buttons, links, and filter pills.
- **Heavy Graphics Scaling:** Complex 3D/canvas graph visualizers automatically downscale or render as clean SVG vector diagrams on mobile devices to preserve battery and smooth scrolling.

### Resume Access & Direct Contact Flow
- Resume download button is present in the global header, hero section, about page, and contact page.
- Direct `mailto:chaitanya.jindal2002@gmail.com` link copies address or opens default mail client without intrusive popup modals.
