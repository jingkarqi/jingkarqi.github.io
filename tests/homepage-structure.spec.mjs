import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../src/pages/index.astro", import.meta.url), "utf8");

const requiredTokens = [
  "精选项目",
  "最近更新",
  "方法与思考",
  "ambient-bg",
  "cursor-glow",
  "featured-project-grid",
  "latest-writing-shell",
];

for (const token of requiredTokens) {
  if (!source.includes(token)) {
    throw new Error(`Missing homepage token: ${token}`);
  }
}

if (source.indexOf("精选项目") > source.indexOf("方法与思考")) {
  throw new Error("Featured projects must appear before methods section");
}
