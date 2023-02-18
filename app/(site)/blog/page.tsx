import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allBlogPosts, BlogPost } from "contentlayer/generated";

function PostCard(post: BlogPost) {
  return (
    <div className="mb-8">
      <h2 className="text-xl">
        <Link
          href={post._raw.flattenedPath}
          className="text-blue-700 hover:text-blue-900"
          legacyBehavior
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="block mb-2 text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <p>{post.summary}</p>
    </div>
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
