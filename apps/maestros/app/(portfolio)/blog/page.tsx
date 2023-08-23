import Link from 'next/link';
import type { Metadata } from 'next';
import { compareDesc, format, parseISO } from 'date-fns';
import type { BlogPost } from 'contentlayer/generated';
import { allBlogPosts } from 'contentlayer/generated';
import { buildMeta } from '#/app/metadata';

export function generateMetadata(): Metadata {
  return buildMeta({
    title: 'Blog',
    description: 'Education, ideas, and semi-random musings.',
  });
}

function PostCard(post: BlogPost) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="p-4 mb-4 transition-all rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 md:p-6">
        <h2 className="text-xl font-bold">{post.title}</h2>
        <time
          className="block mb-2 text-xs text-gray-600 dark:text-gray-500"
          dateTime={post.date}
        >
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <p className="mb-0">{post.summary}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  const posts: BlogPost[] = allBlogPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return (
    <div className="py-8">
      <h1 className="mb-8 text-3xl font-bold text-center">Blog</h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
