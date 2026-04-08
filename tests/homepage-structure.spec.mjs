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
];

for (const token of requiredTokens) {
  if (!source.includes(token)) {
    throw new Error(`Missing homepage token: ${token}`);
  }
}

if (source.indexOf("精选项目") > source.indexOf("方法与思考")) {
  throw new Error("Featured projects must appear before methods section");
}
