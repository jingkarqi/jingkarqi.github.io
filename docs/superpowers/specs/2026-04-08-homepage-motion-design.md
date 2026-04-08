# Homepage Motion Enhancement Design

**Goal:** Add a restrained premium motion layer to the approved homepage preview using only native CSS and lightweight JavaScript.

## Scope

This pass only changes the homepage preview branch.

Affected areas:

- hero atmosphere
- reveal timing
- project and writing card hover polish

Not in scope:

- restyling non-homepage pages
- adding animation libraries
- changing content hierarchy

## Approved Motion Direction

The user approved:

- `原生 CSS + 少量原生 JS`
- tone: `克制高级`
- priority: hero first, but cards and scrolling should also improve
- all of the following should be present:
  - light parallax
  - staged entrance
  - hover gloss / border polish

## Motion Principles

The motion should feel:

- slow enough to read as premium
- short enough not to distract
- layered enough to feel intentional
- subtle enough that content still leads

The motion should not:

- bounce aggressively
- scale dramatically
- use neon or flashy glow effects
- turn the homepage into an animation demo

## Motion Layers

### 1. Hero Atmosphere

Add:

- slower multi-layer blob drift
- cursor glow with damping rather than direct snapping
- slight parallax response on hero surfaces
- staggered hero entrance for eyebrow, title, copy, CTA, tags, and focus panel

### 2. Section Entrance

Refine reveal behavior:

- shorter travel distance
- mild blur fade on entry
- slight stagger for cards inside the same section
- section title enters before card grid

### 3. Card Interaction

Enhance project and writing cards with:

- smoother lift
- soft specular highlight sweep
- slightly stronger border and shadow response
- tiny internal content shift

## Accessibility And Performance

- keep interaction code homepage-only
- support `prefers-reduced-motion: reduce`
- use transforms and opacity rather than layout-heavy properties
- keep pointer-based parallax very low amplitude

## Success Criteria

This pass succeeds if:

- hero feels more alive without becoming loud
- cards feel more tactile on hover
- reveal timing feels more editorial and less generic
- homepage still passes `npm run build`
