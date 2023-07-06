import { getLanding } from "#/app/(maestros)/monorepos/[...slug]/contentFetchers";
import { mdxComponents } from "#/components/mdxComponents";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import { allDocuments } from "contentlayer/generated";

export async function generateStaticParams() {
  return [
    allDocuments.filter(
      (doc) => doc.type === "MaestrosLanding" || doc.type === "MaestrosLesson"
    ),
  ];
}

const Page = ({ params }: { params: { slug: string[] } }) => {
  const content = allDocuments.filter((doc) => {
    return (
      doc._id
        .replaceAll(".mdx", "")
        .replace("/index", "")
        .split("/")
        .slice(2)
        .join("/") === params.slug.join("/")
    );
  })[0];

  const MDXContent = useMDXComponent(content?.body.code ?? "");
  if (!content) return notFound();
  return (
    <div className="prose lg:prose-lg dark:prose-invert">
      <h1>{content.title}</h1>
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default Page;
