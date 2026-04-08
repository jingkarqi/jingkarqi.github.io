import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishDate: z.coerce.date(),
    repoUrl: z.url(),
    demoUrl: z.url().optional(),
    tech: z.array(z.string()).default([]),
    status: z.enum(["active", "stable", "archived"]).default("active"),
    featured: z.boolean().default(false),
    type: z.enum(["original", "open-source-contribution"]).default("original"),
    order: z.number().int().default(999),
  }),
});

const methods = defineCollection({
  loader: glob({ base: "./src/content/methods", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, projects, methods };
