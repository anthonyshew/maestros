import { allBlogPosts } from "contentlayer/generated";

export const getPost = (slug?: string) => {
	const post = allBlogPosts.find((blogPost) => {
		return blogPost.slug === slug;
	});

	return post;
};
