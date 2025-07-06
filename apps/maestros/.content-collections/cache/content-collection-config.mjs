// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";
var docs = defineCollection({
  name: "docs",
  directory: "content/maestros",
  include: "**/*.mdx",
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
var blogs = defineCollection({
  name: "blogs",
  directory: "content/blog",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    slug: z.string().optional()
  }),
  transform: (document) => {
    const slug = document._meta.fileName.replace(/\.mdx$/, "");
    return {
      ...document,
      slug
    };
  }
});
var content_collections_default = defineConfig({
  collections: [docs, blogs]
});
export {
  content_collections_default as default
};
