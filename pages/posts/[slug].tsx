import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
}

const PostLayout = ({ post }: { post: Post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="max-w-2xl mx-auto py-16">
        <div className="text-center mb-6">
          <Link href="/">
            <a className="text-sm text-blue-700 uppercase font-bold text-center">
              Home
            </a>
          </Link>
        </div>
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-1">{post.title}</h1>
          <time dateTime={post.date} className="text-sm text-gray-600">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
        <div
          className="cl-post-body"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
    </>
  );
};

export default PostLayout;
