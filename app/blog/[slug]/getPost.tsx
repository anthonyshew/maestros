import { allPosts } from "contentlayer/generated";

export const getPost = (slug: string) => {
  const post = allPosts.find((post) => {
    return post.slug === slug;
  });

  return post;
};
