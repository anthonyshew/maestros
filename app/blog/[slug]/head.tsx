import { getPost } from "./getPost";

export default function Head({ params }: { params: { slug: string } }) {
  const title = getPost(params.slug).title;

  return (
    <>
      <head>
        <title>The post&apos;s title</title>
        <meta
          property="og:image:url"
          content={`/blog/${params.slug}/og?title=${title}`}
        />
      </head>
    </>
  );
}
