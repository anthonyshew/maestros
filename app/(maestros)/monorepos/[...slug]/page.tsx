import { getLanding } from "#/app/(maestros)/monorepos/[...slug]/contentFetchers";
import { mdxComponents } from "#/components/mdxComponents";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import {
  allMaestrosLandings,
  allMaestrosLessons,
} from "contentlayer/generated";

export async function generateStaticParams() {
  return [
    ...allMaestrosLandings.map((landing) => landing.path),
    ...allMaestrosLessons.map((lesson) => lesson.path),
  ];
}

const Page = ({ params }: { params: { slug: string[] } }) => {
  const landing = getLanding(params.slug.join("/"));

  const MDXContent = useMDXComponent(landing?.body.code ?? "");
  if (!landing) return notFound();
  return (
    <div className="prose lg:prose-lg dark:prose-invert">
      <h1>{landing.title}</h1>
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default Page;
