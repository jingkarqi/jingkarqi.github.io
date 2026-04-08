import { readFileSync } from "node:fs";

const files = [
  "../src/pages/index.astro",
  "../src/components/Hero.astro",
  "../src/components/ProjectCard.astro",
  "../src/components/PostCard.astro",
  "../src/styles/global.css",
];

const source = files
  .map((path) => readFileSync(new URL(path, import.meta.url), "utf8"))
  .join("\n");

const requiredTokens = [
  "精选项目",
  "最近更新",
  "方法与思考",
  "ambient-bg",
  "cursor-glow",
  "featured-project-grid",
  "latest-writing-shell",
  "hero-parallax",
  "motion-stage",
  "card-gloss",
  "hover-sheen",
  "card-drift",
  "accent-teal",
  "text-ink",
];

const forbiddenTokens = [
  "accent-purple",
  "#8b5cf6",
  "#fae8ff",
  "#ede9fe",
  "text-gradient",
];

for (const token of requiredTokens) {
  if (!source.includes(token)) {
    throw new Error(`Missing homepage token: ${token}`);
  }
}

for (const token of forbiddenTokens) {
  if (source.includes(token)) {
    throw new Error(`Forbidden homepage token still present: ${token}`);
  }
}

if (source.indexOf("精选项目") > source.indexOf("方法与思考")) {
  throw new Error("Featured projects must appear before methods section");
}
