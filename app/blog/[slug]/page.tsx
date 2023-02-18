import Head from "next/head";
import type { Metadata } from "next";

import { format, parseISO } from "date-fns";
import { allBlogPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { mdxComponents } from "components/mdxComponents";
import { getPost } from "./getPost";
import Balancer from "react-wrap-balancer";

export const generateStaticParams = () =>
  allBlogPosts.map((post) => ({ slug: post.slug }));

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allBlogPosts.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, date: publishedTime, summary: description, slug } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://shew.dev/blog/${slug}`,
      images: [
        {
          url: `https://shew.dev/blog/og?title=${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://shew.dev/blog/og?title=${title}`],
    },
  };
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = getPost(params.slug);
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <header className="w-full py-8">
        <div className="mb-8 text-center">
          <h1 className="mb-4">
            <Balancer>{post.title}</Balancer>
          </h1>
          <div className="flex flex-row gap-4 align-center">
            <time dateTime={post.date} className="text-xs text-gray-600 ">
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
            <hr className="flex-grow m-auto border-1 text-cyan-900" />
          </div>
        </div>

        <article className="prose lg:prose-lg">
          <MDXContent components={mdxComponents} />
        </article>
      </header>
    </>
  );
};

export default PostLayout;
