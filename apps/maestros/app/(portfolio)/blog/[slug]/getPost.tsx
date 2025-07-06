import { blogs as allBlogs } from "#/.source";

export const getPost = (slug?: string) => {
	const post = allBlogs.find((blogPost) => {
		return blogPost._file.path.replace(".mdx", "") === slug;
	});

	return post;
};

export const getSlug = (blogPost: (typeof allBlogs)[number]) => {
	return blogPost._file.path.replace(".mdx", "");
};
