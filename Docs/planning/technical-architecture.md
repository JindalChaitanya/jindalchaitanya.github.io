# Technical Architecture & System Implementation Blueprint
**Target Profile:** Chaitanya Jindal — AI Systems Engineer

---

## 1. Overview & Framework Selection

This document outlines the **future implementation architecture** for the portfolio website. 

> [!NOTE]
> Per Phase 1 requirements, NO code implementation, dependency installation, or project scaffolding is performed in this phase. This document serves strictly as the architectural blueprint for Phase 2 and beyond.

### Selected Tech Stack Summary
- **Framework:** Next.js 16.x (React 19, App Router)
- **Language:** TypeScript 5.x (Strict Type Checking)
- **Styling:** Tailwind CSS v4 + Vanilla CSS Custom Tokens
- **Animation & Motion:** Motion (Framer Motion)
- **UI Components:** Primitive components built with shadcn/ui patterns
- **3D Graphics:** React Three Fiber (R3F) / Three.js (Lazy-loaded)
- **Hosting & Deployment:** GitHub Pages via GitHub Actions static export

---

## 2. Proposed Directory Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Actions deployment to Pages
├── Docs/
│   ├── Profile.pdf
│   ├── README.md
│   ├── ChaitanyaJindal_Resume.pdf
│   └── planning/
│       ├── portfolio-spec.md
│       ├── content-source-of-truth.md
│       ├── source-conflicts.md
│       ├── sitemap.md
│       ├── ux-flow.md
│       ├── visual-direction.md
│       ├── project-hierarchy.md
│       ├── technical-architecture.md
│       └── phase-2-plan.md
├── app/
│   ├── layout.tsx                # Root layout (Metadata, Fonts, Theme Provider)
│   ├── page.tsx                  # Master Executive Dashboard (Home)
│   ├── globals.css               # Tailwind v4 directives & custom tokens
│   ├── projects/
│   │   ├── page.tsx              # Project Catalog Matrix page
│   │   └── [slug]/
│   │       ├── page.tsx          # Dynamic project case study route
│   │       └── generateStaticParams.ts # Pre-renders static HTML for all slugs
│   ├── about/
│   │   └── page.tsx              # Background, CDAC, Droisys, Certifications
│   └── contact/
│       └── page.tsx              # Contact Hub & Terminal component
├── components/
│   ├── ui/                       # Reusable primitive UI components (Button, Card, Badge)
│   ├── layout/                   # Navbar, Footer, MobileDrawer, Container
│   ├── graphics/                 # Interactive Canvas & R3F Graph Visualizer
│   └── sections/                 # Page-level sections (Hero, GraphRegTeaser, SkillRadar)
├── data/
│   ├── projects.ts               # Strongly typed canonical project data
│   ├── experience.ts             # Employment timeline data
│   └── skills.ts                 # Categorized technical skill definitions
├── public/
│   ├── assets/                   # Project screenshots, diagrams, architecture SVGs
│   ├── docs/                     # Resume.pdf for direct browser view/download
│   └── favicon.ico
├── next.config.ts                # Static export configuration (`output: 'export'`)
├── tailwind.config.ts            # Theme extensions (Color tokens, font families)
├── tsconfig.json                 # TypeScript path aliases (`@/*`)
├── .gitignore
└── package.json (Phase 2)
```

---

## 3. Key Architectural Decisions & Justifications

### Decision 1: Next.js App Router with Static Export (`output: 'export'`)
- **Why:** GitHub Pages provides free, high-performance static hosting via CDN, but does NOT support a Node.js server runtime.
- **Implementation:** Configure `next.config.ts` with `output: 'export'` and `images: { unoptimized: true }`.
- **Pre-rendering:** Use `generateStaticParams()` on `/projects/[slug]` to pre-generate static HTML files at build time for every project slug.

### Decision 2: Strict Server / Client Component Boundaries
- **Why:** Maximizes performance by pushing HTML pre-rendering to build time while isolating interactive animations to client-side JS bundles.
- **Rule:** Default all layout and static text components as **Server Components**. Annotate interactive elements (carousels, filter buttons, 3D canvases, motion wrappers) with `'use client'`.

### Decision 3: Strongly Typed Canonical Data Layer (`data/*.ts`)
- **Why:** Decouples content from UI presentation. Ensures 100% adherence to the source-of-truth established in Phase 1.
- **Implementation:** Define explicit TypeScript interfaces:
  ```typescript
  export interface Project {
    slug: string;
    title: string;
    tier: 1 | 2 | 3;
    tagline: string;
    description: string;
    techStack: string[];
    metrics: string[];
    githubUrl?: string;
    architectureDiagramUrl?: string;
    isFlagship: boolean;
  }
  ```

### Decision 4: Lazy Loading Strategy for 3D & Heavy Graphics
- **Why:** Prevent 3D graph visualizers (R3F/Three.js) from blocking initial page render or degrading mobile performance.
- **Implementation:** Wrap 3D canvas components using `next/dynamic` with `ssr: false` and render a fallback SVG diagram while loading.

### Decision 5: Image Optimization Strategy
- **Why:** Static export disables Next.js dynamic image optimization server.
- **Implementation:** Store optimized WebP/SVG images in `public/assets/` and use native `<img>` tags or standard Next.js `<Image unoptimized />` wrappers.

---

## 4. Quality, SEO, & Target Validation Standards

### SEO & Metadata Strategy
- Define static metadata objects on every page layout:
  ```typescript
  export const metadata: Metadata = {
    title: 'Chaitanya Jindal — AI Systems Engineer',
    description: 'Portfolio of Chaitanya Jindal: AI Systems Engineer specializing in GraphRAG, Computer Vision, and MLOps Infrastructure.',
    openGraph: { title: '...', description: '...', images: ['/assets/og-preview.png'] }
  };
  ```

### Phase 8 Quality Targets (To be measured post-implementation)
- **Lighthouse Performance Target:** Target 95+ score across performance, accessibility, best practices, and SEO.
- **Accessibility Target:** Target WCAG 2.1 AA compliance.
- **Framerate Target:** Target 60fps smooth scrolling.

### Automated GitHub Actions CI/CD (`.github/workflows/deploy.yml`)
- Trigger on `push` to `main` branch.
- Steps: `npm ci` $\rightarrow$ `npm run build` $\rightarrow$ Deploy output folder `out/` to GitHub Pages environment.
