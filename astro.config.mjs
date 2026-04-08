import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jingkarqi.github.io",
  integrations: [sitemap()],
});
