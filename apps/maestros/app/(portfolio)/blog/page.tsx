import Link from "next/link";
import type { Metadata } from "next";
import { compareDesc, format } from "date-fns";
import { allBlogs, type Blog } from "content-collections";
import { buildMeta } from "#/app/metadata";

export function generateMetadata(): Metadata {
	return buildMeta({
		title: "Blog",
		description: "Education, ideas, and semi-random musings.",
	});
}

function PostCard(post: Blog) {
	return (
		<Link href={`/blog/${post.slug}`}>
			<div className="p-4 mb-4 transition-all rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 md:p-6">
				<h2 className="text-xl font-bold">{post.title}</h2>
				<time
					className="block mb-2 text-xs text-gray-600 dark:text-gray-500"
					dateTime={post.date}
				>
					{format(new Date(post.date), "LLLL d, yyyy")}
				</time>
				<p className="mb-0">{post.summary}</p>
			</div>
		</Link>
	);
}

export default function Home() {
	const posts: Blog[] = allBlogs.sort((a, b) => {
		return compareDesc(new Date(a.date), new Date(b.date));
	});

	return (
		<div className="py-8">
			<h1 className="mb-8 text-3xl font-bold text-center">Blog</h1>
			{posts.map((post) => (
				<PostCard key={post._meta.path} {...post} />
			))}
		</div>
	);
}
