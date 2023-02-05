import { getPost } from "./getPost";

export default function Head({ params }: { params: { slug: string } }) {
  const title = getPost(params.slug).title;

  return (
    <>
      <title>{title}</title>
    </>
  );
}
