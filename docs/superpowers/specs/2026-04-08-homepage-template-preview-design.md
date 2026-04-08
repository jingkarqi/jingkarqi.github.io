# Homepage Template Preview Design

**Goal:** Rebuild only the homepage so it inherits the visual language of `C:/Users/SoraE/Downloads/ai_studio_code (13).html` while still reading like Jingkarqi's personal site rather than a generic UI demo.

## Scope

This redesign only affects the homepage:

- `src/pages/index.astro`
- homepage-facing components used only there
- shared styles required to express the homepage look

This redesign does not yet restyle:

- project list/detail pages
- blog list/detail pages
- methods list/detail pages
- about page

## Approved Direction

The user approved a `content-first` adaptation rather than a direct visual translation.

That means the page should:

- keep the template's light glassmorphism aesthetic
- keep the floating ambient background and reveal feel
- keep a soft editorial tone
- reorder sections to fit the personal-site goal

The user also approved these homepage priorities:

1. First impression: sustained methods and blog output
2. Primary CTA: featured projects
3. First section after hero: featured projects

## Visual System To Borrow From The HTML Template

The homepage should inherit these traits from the reference file:

- light background with ambient blurred blobs
- translucent white cards with soft borders and shadows
- centered floating navigation pill
- large editorial hero with gradient-highlighted text
- gentle hover motion on cards
- scroll reveal entrance transitions

## Homepage Information Architecture

### 1. Hero

The hero should stop behaving like a developer portfolio landing page and start behaving like a content-driven homepage.

It should communicate:

- Jingkarqi writes methods, not just ships repos
- projects are still the main proof layer
- the site is both a studio notebook and a curated body of work

Hero structure:

- eyebrow: content-driven positioning
- large two-line statement
- supporting paragraph
- primary CTA to featured projects
- secondary CTA to latest writing
- compact side panel with current focus areas

### 2. Featured Projects

This must come immediately after the hero.

The section should use the template's glass cards, but adapted for:

- real project titles
- short positioning summaries
- visible type/status metadata
- links into current Astro project pages

### 3. Methods And Writing Split

Instead of separate full-width blocks, the homepage should show methods and recent writing as adjacent content layers within the same aesthetic system.

The methods side should feel more stable and principle-driven.
The writing side should feel more recent and living.

### 4. Compact About Block

The homepage should end with a restrained about block rather than a dominant profile card.

It should reinforce:

- what Jingkarqi builds
- how he works
- why the site exists

## Adaptation Rules

The reference HTML is a parent style, not a wireframe to copy literally.

Specific adaptation rules:

- do not reuse generic placeholder copy
- do not copy the original section wording or labels beyond broad style cues
- do not make the homepage look like a design-agency demo
- keep current project/blog/method data sources intact
- keep existing internal routes working

## Technical Approach

The homepage will be rebuilt using existing Astro content collections rather than static template content.

Implementation should:

- create homepage-specific sections/components only where reuse helps
- move the shared style system from dark mode to a light glass system
- preserve shared layout, navigation, and footer behavior
- ensure the homepage compiles without needing client-heavy JS frameworks

The reference template's mouse glow and reveal effects may be adapted with lightweight inline script and CSS, but only if they do not compromise static output simplicity.

## Success Criteria

The redesign succeeds if:

- the homepage visibly resembles the reference template's aesthetic
- the page reads as Jingkarqi's personal homepage, not a template clone
- the first screen emphasizes methods/blog output
- featured projects are still the first content block after hero
- current Astro routes and content collections remain intact
- `npm run build` still passes
