import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { site as siteConfig } from "../config/site";

export async function GET(context: { site: URL | undefined }) {
  const posts = (await getCollection("blog"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

  return rss({
    title: `${siteConfig.title} | 博客`,
    description: siteConfig.description,
    site: context.site ?? siteConfig.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.id}/`,
    })),
  });
}
