import configuration from "../../content-collections.ts";
import { GetTypeByName } from "@content-collections/core";

export type Doc = GetTypeByName<typeof configuration, "docs">;
export declare const allDocs: Array<Doc>;

export type Blog = GetTypeByName<typeof configuration, "blogs">;
export declare const allBlogs: Array<Blog>;

export {};
