import { notFound } from "next/navigation";
import { allDocs } from "content-collections";
import type { Metadata } from "next";
import Link from "next/link";
import { Callout } from "@repo/ui";
import { getPageDocument } from "#/app/(maestros)/contentHandlers";
import { buildMeta, metadataBaseURI } from "#/app/metadata";

export function generateStaticParams() {
	return allDocs.map((doc) => ({
		slug: doc._meta.path
			.replace("lessons/", "")
			.replace(".mdx", "")
			.replace("/index", "")
			.split("/"),
	}));
}

export const generateMetadata = ({
	params,
}: {
	params: { slug: string[] };
}): Metadata => {
	const content = getPageDocument(params.slug);

	if (!content) return notFound();

	const title = content.ogTitle ?? content.title;

	return buildMeta({
		title: `${title} - Monorepo Maestros`,
		description: `${content.ogDescription}`,
		ogImage: encodeURI(
			`${metadataBaseURI}/monorepos/api/og?title=${title}&subtitle=${content.ogDescription}`,
		),
	});
};

function Page({ params }: { params: { slug: string[] } }) {
	const content = getPageDocument(params.slug);

	if (!content) return notFound();
	if (content.unpublished) return notFound();
	// For now, disable TOC since we're not pre-compiling MDX
	const headings: Array<{ title: string; url: string }> = [];

	return (
		<main className="relative flex flex-row justify-start overflow-x-hidden flex-auto h-[calc(100vh-3.5rem)] px-8 py-8 md:px-12 overflow-auto mt-14 sm:py-8 lg:py-14">
			<div className="w-full h-full prose lg:prose-lg md:max-w-md lg:max-w-lg xl:max-w-3xl dark:prose-invert [&>*:last-child]:pb-8">
				<Callout bold className="mb-10" type="warning">
					This is an alpha, sneak peek of Monorepo Maestros. For this iteration,
					I'm getting all of my thoughts down. In the future, we'll have better
					information architecture, graphics, and other awesomeness. Your
					feedback is welcome!
				</Callout>
				<h1>{content.title}</h1>
				<div>
					<p>Content migration in progress...</p>
					<pre>{JSON.stringify(content, null, 2)}</pre>
				</div>{" "}
			</div>
			<div className="sticky top-0 hidden max-w-sm xl:block">
				<div className="flex flex-col gap-2 ml-6">
					{headings.length > 0 ? <p>On this page</p> : null}
					{headings.map((heading: { title: string; url: string }) => {
						return (
							<Link
								className="text-gray-600 truncate transition-all dark:text-gray-400 dark:hover:text-yellow-400 hover:text-yellow-700"
								href={heading.url}
								key={heading.title}
							>
								{heading.title}
							</Link>
						);
					})}{" "}
				</div>
			</div>
		</main>
	);
}

export default Page;
