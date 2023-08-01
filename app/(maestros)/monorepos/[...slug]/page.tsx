import { mdxComponents } from "#/components/mdxComponents";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import { allDocuments } from "contentlayer/generated";
import { getPageDocument } from "#/app/(maestros)/contentHandlers";
import { Callout } from "#/components/Callout";
import { Metadata } from "next";
import { buildMeta } from "#/app/metadata";

export async function generateStaticParams() {
  return [
    allDocuments.filter(
      (doc) => doc.type === "MaestrosLanding" || doc.type === "MaestrosLesson"
    ),
  ];
}

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> => {
  const content = getPageDocument(params.slug);

  return await buildMeta({
    title: `${content.ogTitle ?? content.title} - Monorepo Maestros`,
    description: `${content.ogDescription}`,
    ogImage: encodeURI(
      `https://${process.env.VERCEL_URL}/monorepos/api/og?title=${
        content.ogTitle ?? content.ogTitle
      }&subtitle=${content.ogDescription}`
    ),
  });
};

const Page = ({ params }: { params: { slug: string[] } }) => {
  const content = getPageDocument(params.slug);

  const MDXContent = useMDXComponent(content?.body.code ?? "");
  if (!content) return notFound();
  if (content.unpublished) return notFound();

  return (
    <div className="prose lg:prose-lg dark:prose-invert">
      <Callout type="warning" bold className="mb-10">
        This is an alpha, sneak peek of Monorepo Maestros. For this iteration,
        I'm getting all of my thoughts down. In the future, we'll have better
        information architecture, graphics, and other awesomeness. Your feedback
        is welcome!
      </Callout>

      <h1>{content.title}</h1>

      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default Page;
