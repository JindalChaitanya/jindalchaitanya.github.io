# Phase 2 Implementation Plan — Next.js Foundation Setup
**Target Profile:** Chaitanya Jindal — AI Systems Engineer

---

## 1. Overview & Objectives

Phase 2 focuses strictly and exclusively on establishing the **technical codebase foundation** for the portfolio website.

> [!IMPORTANT]
> Phase 2 is **brutally foundational**: it validates that Next.js works, TypeScript works, Tailwind works, static export works, route scaffolds work, typed data layers work, and builds pass cleanly.
> 
> NO UI design implementation, NO section animations, NO Framer Motion, NO Three.js / React Three Fiber, and NO production deployment will occur in Phase 2.

---

## 2. Granular Scope Breakdown

### WHAT WILL BE IMPLEMENTED IN PHASE 2 (Foundational Checklist)

1. **Next.js 16 Project Initialization:**
   - Initialize Next.js 16 using App Router with TypeScript.
   - Configure `@/*` path alias mapping in `tsconfig.json`.
2. **Tailwind CSS v4 & Theme Token Baseline:**
   - Install and configure **Tailwind CSS v4**.
   - Configure custom CSS tokens (`globals.css`) for the *Deep Synthetic Laboratory* visual theme baseline (Slate base `#0A0D14`, Cyan `#00F0FF`, Emerald `#00E676`).
3. **Static Export Configuration:**
   - Configure `next.config.ts` for static export (`output: 'export'`, `images: { unoptimized: true }`).
4. **Canonical Typed Data Layer Setup:**
   - Create strongly typed TypeScript data definitions in `data/`:
     - `data/projects.ts` (Typed project list grounded in Phase 1 source-of-truth).
     - `data/experience.ts` (Droisys, CDAC, Education data).
     - `data/skills.ts` (Categorized skill matrix).
5. **Bare Route Scaffolds Creation:**
   - Implement minimal text route scaffolds (no design wrappers):
     - `app/layout.tsx` (Root layout & HTML structure baseline).
     - `app/page.tsx` (Home scaffold: basic text).
     - `app/projects/page.tsx` (Projects matrix scaffold: basic text).
     - `app/projects/[slug]/page.tsx` + `generateStaticParams()` (Case study route scaffold).
     - `app/about/page.tsx` (About page scaffold: basic text).
     - `app/contact/page.tsx` (Contact page scaffold: basic text).
6. **Code Quality & Validation Tooling:**
   - Ensure ESLint, Prettier, and TypeScript `tsc --noEmit` build checks pass with zero warnings or errors.
7. **Git Repository Setup & Verification:**
   - Verify `.gitignore` rules.
   - Connect remote `origin` once repository URL is provided.
   - Prepare clean initial foundation commit.

---

### WHAT WILL NOT BE IMPLEMENTED IN PHASE 2

- ❌ NO polished UI components or section designs.
- ❌ NO Motion (Framer Motion) scroll or layout animations.
- ❌ NO Three.js / React Three Fiber installation or 3D canvas rendering.
- ❌ NO shadcn/ui component installs or design systems.
- ❌ NO GitHub Actions workflow execution or GitHub Pages deployment.
- ❌ NO Git remote push without explicit user approval.

---

## 3. Verification & Approval Gate Before Phase 3

Before proceeding to **Phase 3 (Core UI & Component Implementation)**, the following verification criteria MUST pass:

| Verification Gate | Command / Test | Target Criteria |
|---|---|---|
| **Type Check** | `npx tsc --noEmit` | Clean output (0 errors). |
| **Linting** | `npm run lint` | Clean output (0 warnings/errors). |
| **Static Export Build** | `npm run build` | Builds successfully; generates `out/` folder containing static HTML assets for all routes (`/`, `/projects`, `/projects/graphreg`, `/about`, `/contact`). |
| **User Approval** | Manual User Review | Explicit user approval of Phase 2 foundation before commencing Phase 3. |
