import Link from 'next/link';
import type { Metadata } from 'next';
import { compareDesc, format, parseISO } from 'date-fns';
import type { BlogPost } from 'contentlayer/generated';
import { allBlogPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { mdxComponents } from '@repo/ui/server-only';
import Balancer from 'react-wrap-balancer';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getPost } from './getPost';
import { metadataBaseURI } from '#/app/metadata';

export const generateStaticParams = () =>
  allBlogPosts.map((post) => ({ slug: post.slug }));

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata | undefined {
  const post = getPost(params.slug);
  if (!post) {
    return;
  }

  const { title, date: publishedTime, summary, slug } = post;

  const ogUrl = new URL('/api/og', metadataBaseURI);
  ogUrl.searchParams.set('title', title);
  ogUrl.searchParams.set('subtitle', summary);

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: 'article',
      publishedTime,
      url: `https://shew.dev/blog/${slug}`,
      images: [
        {
          url: ogUrl,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: summary,
      images: [ogUrl],
    },
  };
}

function PostLayout({ params }: { params: { slug: string } }) {
  const getAdjacentPosts = () => {
    const foundIndex = allBlogPosts
      .sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date));
      })
      .findIndex((post) => post.slug === params.slug);

    if (foundIndex < 0) return notFound();

    return {
      prevPost: allBlogPosts[foundIndex - 1] as BlogPost | undefined,
      nextPost: allBlogPosts[foundIndex + 1] as BlogPost | undefined,
    };
  };

  const prevPost = getAdjacentPosts().prevPost;
  const nextPost = getAdjacentPosts().nextPost;

  const post = getPost(params.slug);

  const MDXContent = useMDXComponent(post?.body.code ?? '');
  if (!post) return notFound();

  return (
    <div className="flex flex-col w-full prose md:pr-8 lg:prose-lg dark:prose-invert">
      <header className="w-full pb-4">
        <div className="text-center">
          <h1 className="mb-4">
            <Balancer>{post.title}</Balancer>
          </h1>
          <div className="flex flex-row gap-4 align-center">
            <time
              className="text-xs text-gray-600 dark:text-gray-400"
              dateTime={post.date}
            >
              {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
            <hr className="flex-grow border-1 !my-auto text-slate-900" />
          </div>
        </div>
      </header>

      <article>
        {/* @ts-expect-error Don't care, we shippin'! */}
        <MDXContent components={mdxComponents({ imgComponent: Image })} />
      </article>

      <footer className="pt-4 mt-4 border-t-2 border-t-slate-600">
        <p className="text-xl font-medium">More Reading</p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row sm:justify-between">
          {prevPost ? (
            <Link
              className="mx-auto font-medium md:text-lg"
              href={`/blog/${prevPost.slug}`}
            >
              <span className="mr-4">👈</span>
              {prevPost.title}
            </Link>
          ) : null}
          {nextPost ? (
            <Link
              className="mx-auto font-medium md:text-lg"
              href={`/blog/${nextPost.slug}`}
            >
              {nextPost.title}
              <span className="ml-4">👉</span>
            </Link>
          ) : null}
        </div>
      </footer>
    </div>
  );
}

export default PostLayout;
