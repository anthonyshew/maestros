import { allBlogPosts } from "contentlayer/generated";

export const getPost = (slug?: string) => {
  const post = allBlogPosts.find((post) => {
    return post.slug === slug;
  });

  return post;
};
