# Sitewide Ink Teal Restyle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extend the approved homepage preview visual system across the remaining public pages so the whole site reads as one coherent black-white-ink-teal publication.

**Architecture:** Keep the existing Astro content collections and routes, but move shared ambient markup and reveal behavior into the base layout, add a reusable page hero shell for list pages, and restyle detail pages with consistent glass cards, rails, and spacing. The homepage remains the reference surface; non-home pages inherit its tone instead of inventing a second system.

**Tech Stack:** Astro, TypeScript, Markdown content collections, CSS, lightweight inline client script, Node-based structure tests

---

## File Structure

- Create: `src/components/PageHero.astro`
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/styles/global.css`
- Modify: `src/pages/projects/index.astro`
- Modify: `src/pages/blog/index.astro`
- Modify: `src/pages/methods/index.astro`
- Modify: `src/pages/about.astro`
- Modify: `src/pages/projects/[slug].astro`
- Modify: `src/pages/blog/[slug].astro`
- Modify: `src/pages/methods/[slug].astro`
- Modify: `src/pages/tags/[tag].astro`
- Create: `tests/site-shell-structure.spec.mjs`

## Task 1: Add a failing cross-page structure test

**Files:**
- Create: `tests/site-shell-structure.spec.mjs`
- Test: `node tests/site-shell-structure.spec.mjs`

- [ ] **Step 1: Write the failing test**

Read the shared layout and the list/detail page sources, then assert that the new cross-page shell markers exist:

```js
const requiredTokens = [
  "ambient-bg",
  "cursor-glow",
  "PageHero",
  "page-hero-shell",
  "page-rail",
  "detail-hero-shell",
  "detail-body-grid",
  "meta-card",
];
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node tests/site-shell-structure.spec.mjs`
Expected: FAIL because those markers are not present yet on the non-home pages.

## Task 2: Move the shared visual shell into the layout

**Files:**
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/styles/global.css`
- Test: `node tests/site-shell-structure.spec.mjs`

- [ ] **Step 1: Move ambient markup into the base layout**

Put the shared ambient background and cursor glow markup inside `BaseLayout.astro` so every page gets the same atmosphere:

```astro
<body class:list={["site-body", { "is-home": isHome }]}>
  <div class="ambient-bg" aria-hidden="true">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
  </div>
  <div id="cursor-glow" aria-hidden="true"></div>
  <Header />
```

- [ ] **Step 2: Move sitewide reveal/glow script into the layout**

Keep the reveal observer and glow damping global, but leave homepage-only parallax logic out of the layout.

- [ ] **Step 3: Run the structure test**

Run: `node tests/site-shell-structure.spec.mjs`
Expected: still FAIL because the page hero and detail shell work are not implemented yet.

## Task 3: Build a reusable hero shell for list-like pages

**Files:**
- Create: `src/components/PageHero.astro`
- Modify: `src/pages/projects/index.astro`
- Modify: `src/pages/blog/index.astro`
- Modify: `src/pages/methods/index.astro`
- Modify: `src/pages/about.astro`
- Modify: `src/pages/tags/[tag].astro`
- Modify: `src/styles/global.css`
- Test: `node tests/site-shell-structure.spec.mjs`

- [ ] **Step 1: Create the shared `PageHero` component**

The component should render:

```astro
<section class="page-hero-shell">
  <div class="glass page-hero-main reveal">...</div>
  <aside class="glass page-rail reveal">...</aside>
</section>
```

Use slots so each page can supply counts, positioning notes, or actions without forking the structure.

- [ ] **Step 2: Replace ad-hoc list page intros with `PageHero`**

Update the projects, blog, methods, tags, and about pages to use the shared hero shell and add page-specific rail content such as counts, focus notes, and outbound links.

- [ ] **Step 3: Add matching page-shell styles**

Add CSS for:

```css
.page-hero-shell
.page-hero-main
.page-rail
.page-rail-list
.catalog-grid
```

- [ ] **Step 4: Run the structure test**

Run: `node tests/site-shell-structure.spec.mjs`
Expected: FAIL only on detail-page tokens.

## Task 4: Restyle detail pages with a shared editorial shell

**Files:**
- Modify: `src/pages/projects/[slug].astro`
- Modify: `src/pages/blog/[slug].astro`
- Modify: `src/pages/methods/[slug].astro`
- Modify: `src/styles/global.css`
- Test: `node tests/site-shell-structure.spec.mjs`

- [ ] **Step 1: Replace plain detail intros with a two-column hero shell**

Each detail page should use:

```astro
<section class="detail-hero-shell">
  <div class="glass detail-intro reveal">...</div>
  <aside class="glass meta-card reveal">...</aside>
</section>
```

- [ ] **Step 2: Rename and restyle the body grid**

Use a consistent content structure:

```astro
<section class="detail-body-grid">
  <div class="prose content-card">...</div>
  <aside class="sidebar-card meta-card">...</aside>
</section>
```

- [ ] **Step 3: Run the structure test**

Run: `node tests/site-shell-structure.spec.mjs`
Expected: PASS

## Task 5: Full verification and commit

**Files:**
- Test: `node tests/homepage-structure.spec.mjs`
- Test: `node tests/site-shell-structure.spec.mjs`
- Test: `npm run build`

- [ ] **Step 1: Re-run homepage guard**

Run: `node tests/homepage-structure.spec.mjs`
Expected: PASS

- [ ] **Step 2: Run new cross-page guard**

Run: `node tests/site-shell-structure.spec.mjs`
Expected: PASS

- [ ] **Step 3: Run the full build**

Run: `npm run build`
Expected: Astro check reports `0 errors`, `0 warnings`, then static build succeeds.

- [ ] **Step 4: Commit**

Run:

```bash
git add src/components/PageHero.astro src/layouts/BaseLayout.astro src/styles/global.css src/pages/projects/index.astro src/pages/blog/index.astro src/pages/methods/index.astro src/pages/about.astro src/pages/projects/[slug].astro src/pages/blog/[slug].astro src/pages/methods/[slug].astro src/pages/tags/[tag].astro tests/site-shell-structure.spec.mjs
git commit -m "feat: extend ink teal preview across site"
```
