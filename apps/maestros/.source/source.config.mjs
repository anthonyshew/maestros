// source.config.ts
import { defineDocs, defineConfig } from "fumadocs-mdx/config";
import { z } from "zod";
var docs = defineDocs({
  dir: "content/maestros",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    unpublished: z.boolean().optional(),
    sidebarOrderPosition: z.number().optional(),
    ogTitle: z.string().optional(),
    ogDescription: z.string().optional(),
    path: z.string().optional()
  })
});
var blogs = defineDocs({
  dir: "content/blog",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    slug: z.string().optional()
  })
});
var source_config_default = defineConfig({
  mdxOptions: {
    rehypePlugins: [],
    remarkPlugins: []
  }
});
export {
  blogs,
  source_config_default as default,
  docs
};
