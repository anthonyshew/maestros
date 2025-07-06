import { allBlogs } from "content-collections";

export const getPost = (slug?: string) => {
	const post = allBlogs.find((blogPost) => {
		return blogPost.slug === slug;
	});

	return post;
};
