# Homepage Template Preview Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the homepage to match the supplied light glassmorphism template aesthetic while preserving Jingkarqi's existing content model and homepage information hierarchy.

**Architecture:** Keep the existing Astro content collections and routes. Replace the homepage visual system with a template-derived light glass system, introduce homepage-specific sections and light interaction effects, and leave non-homepage routes functionally intact for this preview.

**Tech Stack:** Astro, TypeScript, Markdown content collections, CSS, lightweight inline client script

---

## File Structure

- Modify: `src/styles/global.css`
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/components/Header.astro`
- Modify: `src/components/Footer.astro`
- Modify: `src/components/Hero.astro`
- Modify: `src/components/ProjectCard.astro`
- Modify: `src/components/PostCard.astro`
- Modify: `src/components/SectionTitle.astro`
- Modify: `src/pages/index.astro`
- Optional Create: `src/components/HomepageAmbient.astro`
- Optional Create: `src/components/HomepageSectionShell.astro`

## Task 1: Write a failing visual-regression guard for homepage structure

**Files:**
- Create: `tests/homepage-structure.spec.mjs`
- Test: `node tests/homepage-structure.spec.mjs`

- [ ] **Step 1: Write the failing test**

Write a lightweight Node test that builds expectations around homepage source structure:

```js
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../src/pages/index.astro", import.meta.url), "utf8");

const requiredTokens = [
  "精选项目",
  "最近更新",
  "方法与思考",
];

for (const token of requiredTokens) {
  if (!source.includes(token)) {
    throw new Error(`Missing homepage token: ${token}`);
  }
}

if (source.indexOf("精选项目") > source.indexOf("方法与思考")) {
  throw new Error("Featured projects must appear before methods section");
}
```

- [ ] **Step 2: Run the test to verify it passes as a baseline**

Run: `node tests/homepage-structure.spec.mjs`
Expected: exit code `0`

- [ ] **Step 3: Tighten the test for the new structure**

Add checks for template-driven homepage markers that do not exist yet:

```js
const newTokens = [
  "ambient-bg",
  "cursor-glow",
  "latest-writing-shell",
  "featured-project-grid",
];
```

Assert all are present in `src/pages/index.astro` or homepage-specific components it imports.

- [ ] **Step 4: Run the test to verify it fails**

Run: `node tests/homepage-structure.spec.mjs`
Expected: FAIL with missing token errors for the new homepage markers

## Task 2: Rebuild the shared visual system for the homepage preview

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/components/Header.astro`
- Modify: `src/components/Footer.astro`
- Test: `npm run build`

- [ ] **Step 1: Replace the dark shared palette with a light glass palette**

Update `src/styles/global.css` root tokens to a light system inspired by the reference template:

```css
:root {
  --page-bg: #f8fafc;
  --page-bg-alt: #f1f5f9;
  --glass-bg: rgba(255, 255, 255, 0.5);
  --glass-border: rgba(255, 255, 255, 0.78);
  --glass-shadow: 0 14px 40px rgba(15, 23, 42, 0.08);
  --text-title: #0f172a;
  --text-body: #475569;
  --text-light: #94a3b8;
  --accent-blue: #3b82f6;
  --accent-purple: #8b5cf6;
}
```

- [ ] **Step 2: Add template-style shared utility classes**

Add classes for:

- `.glass`
- `.ambient-bg`
- `.blob`
- `.blob-1`, `.blob-2`, `.blob-3`
- `.reveal`
- `.reveal.active`
- `.floating-nav`

- [ ] **Step 3: Update the layout shell**

Modify `src/layouts/BaseLayout.astro` so the page body can host:

- ambient background layer
- cursor glow container
- optional slot or shared wrapper that keeps non-homepage pages legible

Keep metadata and canonical tags intact.

- [ ] **Step 4: Restyle header and footer**

Update `Header.astro` and `Footer.astro` to use the lighter template style:

- nav becomes centered floating pill
- text becomes dark-on-light
- footer becomes lighter and quieter

- [ ] **Step 5: Run build verification**

Run: `npm run build`
Expected: build succeeds with `0 errors`

## Task 3: Rebuild the homepage hero and section layout

**Files:**
- Modify: `src/components/Hero.astro`
- Modify: `src/pages/index.astro`
- Optional Create: `src/components/HomepageAmbient.astro`
- Test: `node tests/homepage-structure.spec.mjs`

- [ ] **Step 1: Rewrite the hero to fit the approved content hierarchy**

Hero should include:

- content-first headline
- supporting copy
- primary CTA to `/projects`
- secondary CTA to `/blog`
- side panel listing focus areas

Use reference-template cues:

- big title
- gradient word emphasis
- glass wrapper
- centered composition

- [ ] **Step 2: Add homepage-only ambient wrapper markup**

Ensure homepage contains identifiable markers for:

```html
<div class="ambient-bg">
<div id="cursor-glow">
```

- [ ] **Step 3: Reorder homepage sections**

Ensure homepage order is:

1. hero
2. featured projects
3. methods and writing layer
4. compact about block

- [ ] **Step 4: Run the structure test**

Run: `node tests/homepage-structure.spec.mjs`
Expected: PASS

## Task 4: Adapt project and writing cards to the template style

**Files:**
- Modify: `src/components/ProjectCard.astro`
- Modify: `src/components/PostCard.astro`
- Modify: `src/components/SectionTitle.astro`
- Modify: `src/pages/index.astro`
- Test: `npm run build`

- [ ] **Step 1: Restyle project cards**

Project cards should feel like the reference template's project panels:

- soft icon or badge block
- clearer title hierarchy
- summary copy
- less developer-dashboard heaviness

- [ ] **Step 2: Build a methods/blog split section**

Rework homepage so methods and recent writing are visually distinct but related:

- one side: stable method highlights
- one side: recent blog items

- [ ] **Step 3: Add a restrained about block**

Keep it compact and non-dominant.

- [ ] **Step 4: Run build verification**

Run: `npm run build`
Expected: build succeeds and homepage remains statically generated

## Task 5: Add lightweight interaction polish

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/styles/global.css`
- Test: `npm run build`

- [ ] **Step 1: Add reveal animation hooks**

Homepage sections/cards should use `.reveal` classes.

- [ ] **Step 2: Add minimal inline script for reveal and cursor glow**

Use a small inline script modeled on the reference template:

- `IntersectionObserver` for reveal
- mousemove listener for glow position

Keep script homepage-only.

- [ ] **Step 3: Run final build verification**

Run: `npm run build`
Expected: build succeeds with static routes intact

- [ ] **Step 4: Review visual diff manually**

Run:

```bash
npm run dev
```

Open the homepage locally and confirm:

- hero is light and glassmorphic
- featured projects are first below hero
- homepage feels closer to the provided HTML than the current dark version

