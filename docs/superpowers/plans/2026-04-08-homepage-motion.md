# Homepage Motion Enhancement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add restrained premium homepage motion using native CSS and lightweight JavaScript.

**Architecture:** Extend the homepage preview with motion hooks in markup, matching CSS transitions and keyframes, plus a small homepage-only script for damped cursor glow, low-amplitude parallax, and staged reveal activation.

**Tech Stack:** Astro, CSS, native JavaScript, existing homepage structure test

---

## File Structure

- Modify: `tests/homepage-structure.spec.mjs`
- Modify: `src/pages/index.astro`
- Modify: `src/components/Hero.astro`
- Modify: `src/components/ProjectCard.astro`
- Modify: `src/components/PostCard.astro`
- Modify: `src/styles/global.css`

## Task 1: Expand homepage structure test to require motion hooks

**Files:**
- Modify: `tests/homepage-structure.spec.mjs`
- Test: `node tests/homepage-structure.spec.mjs`

- [ ] Add required markers for motion hooks such as `hero-parallax`, `motion-stage`, `card-gloss`, and `cursor-glow`.
- [ ] Run the test and confirm it fails before implementation.

## Task 2: Add homepage motion hooks in markup

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/components/Hero.astro`
- Modify: `src/components/ProjectCard.astro`
- Modify: `src/components/PostCard.astro`

- [ ] Add data attributes or classes to hero layers for stagger and parallax.
- [ ] Add card gloss elements and motion classes to project/post cards.
- [ ] Keep content order unchanged.

## Task 3: Implement restrained motion system

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/pages/index.astro`

- [ ] Add staged hero entrance timing.
- [ ] Add softer reveal transitions with slight blur.
- [ ] Add low-amplitude pointer parallax for hero surfaces.
- [ ] Add gloss and border response on card hover.
- [ ] Add `prefers-reduced-motion` fallback.

## Task 4: Verify

**Files:**
- Test: `node tests/homepage-structure.spec.mjs`
- Test: `npm run build`

- [ ] Run structure test and confirm it passes.
- [ ] Run full build and confirm it passes.
