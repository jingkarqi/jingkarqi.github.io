import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");

const layoutSource = read("../src/layouts/BaseLayout.astro");
const componentSource = read("../src/components/PageHero.astro");

const listPages = [
  read("../src/pages/projects/index.astro"),
  read("../src/pages/blog/index.astro"),
  read("../src/pages/methods/index.astro"),
  read("../src/pages/about.astro"),
  read("../src/pages/tags/[tag].astro"),
].join("\n");

const detailPages = [
  read("../src/pages/projects/[slug].astro"),
  read("../src/pages/blog/[slug].astro"),
  read("../src/pages/methods/[slug].astro"),
].join("\n");

const requiredLayoutTokens = [
  "ambient-bg",
  "cursor-glow",
];

const requiredListTokens = [
  "PageHero",
  "page-hero-shell",
  "page-rail",
  "catalog-grid",
];

const requiredDetailTokens = [
  "detail-hero-shell",
  "detail-body-grid",
  "meta-card",
];

for (const token of requiredLayoutTokens) {
  if (!layoutSource.includes(token)) {
    throw new Error(`Missing shared layout token: ${token}`);
  }
}

for (const token of requiredListTokens) {
  if (![componentSource, listPages].join("\n").includes(token)) {
    throw new Error(`Missing list-page token: ${token}`);
  }
}

for (const token of requiredDetailTokens) {
  if (!detailPages.includes(token)) {
    throw new Error(`Missing detail-page token: ${token}`);
  }
}
