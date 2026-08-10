# Source Conflict Audit & Canonical Recommendations
**Target Profile:** Chaitanya Jindal — AI Systems Engineer

This document catalogs every meaningful conflict, discrepancy, or variance identified across the three authoritative source documents (`Docs/Profile.pdf`, `Docs/README.md`, and `Docs/ChaitanyaJindal_Resume.pdf`).

> [!IMPORTANT]
> Discrepancies between source documents are kept explicit. Where source material conflicts without internal resolution, values remain flagged for verification rather than synthesized into unverified claims.

---

## 1. Structured Conflict Audit Table

| Topic | Profile.pdf | README.md | Resume.pdf | Recommended Canonical Value | Status / Action Required |
|---|---|---|---|---|---|
| **Primary Project Name** | `GraphRegAI` | `GraphReg` | `GraphReg` | **GraphReg** *(GraphRegAI as source alias)* | **APPROVED** — GraphReg used as primary branding. |
| **Primary Contact Email** | `chaitanya.jindal2002@gmail.com` | `chaitanya.jindal2002@gmail.com` | `jindalchaitanya@icloud.com` | **chaitanya.jindal2002@gmail.com** | **APPROVED** — Primary contact email. |
| **RAG Orchestration Framework (GraphReg)** | `LlamaIndex` | `LangChain` | Not specified in project bullet | **RAG orchestration: LlamaIndex / LangChain — verify implementation** | **UNRESOLVED / REQUIRES VERIFICATION** — Do not infer division of responsibilities or claim "multi-framework" until user confirms actual codebase. |
| **CDAC Program Duration & Hours** | `1200-hour full-time program` | `900+ hour program` | Not specified (says "6-month programme") | **6-month full-time PGCP-AI program at CDAC Noida** | **UNRESOLVED / REQUIRES VERIFICATION** — Use "6-month full-time program" as canonical display text; do not advertise "1200 hours" or "900+ / 1200" unless user confirms official figure. |
| **YOLO Version in Cropping Pipelines** | `YOLO11` | `YOLOv8` | `YOLO11` | **YOLOv8 / YOLO11 — verify per project** | **UNRESOLVED / REQUIRES VERIFICATION** — Do not claim CropVision simultaneously uses both in a single pipeline; verify per project. |
| **Droisys Employment Roles** | Associate Data Analyst (Apr 25 - Feb 26) AND AI Intern (Jan 24 - May 24) | Associate Data Analyst (Apr 25 - Feb 26) AND Python AI Intern (Jan 24 - May 24) | Associate Data Analyst ONLY (Apr 25 - Feb 26) | **Retain BOTH Associate Data Analyst AND Python AI Intern** | **APPROVED** — Retain full career progression (Intern $\rightarrow$ Associate Analyst). |
| **Dataset Turnaround Metric** | `40% turnaround reduction` | `~50% turnaround reduction` | `40% turnaround reduction` | **40–50% reduction in dataset preparation turnaround** | **APPROVED** — Reflects conservative PDF figure and upper-bound README figure. |
| **Amazon ML Summer School Dates** | `September 2023 - October 2023` | `July 2023 – October 2023` | Not in experience timeline | **July – October 2023** | **APPROVED** — README covers pre-course modules. |
| **B.Tech Aggregate Percentage (78.1%)** | Not listed | Not listed | Listed as `78.1%` | **Include 78.1%** | **APPROVED** — Preserved from Resume.pdf. |
| **High School Education** | The Adhyyan School (2013-2020) | Not listed | Not listed | **Include in full background view** | **APPROVED** — Preserved from Profile.pdf. |
| **Kubernetes Skill Positioning** | Mentions Cloud-Native ML Deployment | Mentions K8s under CDAC, Currently Building, and Tech Stack | Mentions Docker & Cloud Deployment (no K8s badge) | **Listed under CDAC curriculum & MLOps deployment exploration** | **APPROVED** — Accurately reflects CDAC coursework. |
| **Home Lab / Private Cloud Project** | Not listed | Not listed | Listed under "Beyond Work" | **Include in Tier 3 / Beyond Work section** | **APPROVED** — Preserved from Resume.pdf. |
| **Tenacious Technical Club** | Listed as General Secretary (Apr 23 - May 24) | Not listed | Not listed | **Include under Leadership & Extracurriculars** | **APPROVED** — Preserved from Profile.pdf. |

---

## 2. Detailed Discrepancy & Verification Notes

### Discrepancy 1: CDAC Program Duration & Hours
- **Source Conflict:** `Profile.pdf` states "1200-hour full time program", `README.md` states "900+ hour program", and `Resume.pdf` states "6-month programme".
- **Action Taken:** Removed synthesized string `"900+ / 1200-hour"`. Established `"6-month full-time PGCP-AI program at CDAC Noida"` as the canonical display text. The 900+ vs 1200 hour discrepancy remains documented as an unresolved source variance requiring user verification before any specific hourly count is advertised.

### Discrepancy 2: RAG Orchestration Framework (LlamaIndex vs LangChain)
- **Source Conflict:** `Profile.pdf` states GraphReg is "built on LlamaIndex and FastAPI". `README.md` lists `LangChain` in the stack badges.
- **Action Taken:** Removed unverified inference that LlamaIndex is used for graph traversal and LangChain for orchestration. GraphReg's framework stack is listed as: **RAG orchestration: LlamaIndex / LangChain — verify implementation**. GraphReg is NOT described as a confirmed "multi-framework RAG system" until implementation is verified.

### Discrepancy 3: YOLO Version History
- **Source Conflict:** `Profile.pdf` and `Resume.pdf` reference `YOLO11` for image cropping, while `README.md` references `YOLOv8` for CropVision.
- **Action Taken:** Avoided implying that a single pipeline simultaneously runs both versions. Version history is preserved as: **YOLOv8 / YOLO11 — verify per project**.

### Discrepancy 4: Web Application Performance Claims
- **Clarification:** Targets such as **Lighthouse 95+**, **100% accessibility**, and **flawless 60fps** are classified strictly as **PROJECT TARGETS / GOALS** to be evaluated during Phase 8 testing. They are NOT presented as existing achievements on the site.
