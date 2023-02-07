import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allBlogPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { mdxComponents } from "components/mdxComponents";
import { getPost } from "./getPost";

export const generateStaticParams = () =>
  allBlogPosts.map((post) => ({ slug: post.slug }));

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = getPost(params.slug);
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="max-w-xl py-8 mx-auto">
        <div className="mb-8 text-center">
          <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <h1>{post.title}</h1>
        </div>

        <article className="prose lg:prose-xl">
          <MDXContent components={mdxComponents} />
        </article>
      </article>
    </>
  );
};

export default PostLayout;
