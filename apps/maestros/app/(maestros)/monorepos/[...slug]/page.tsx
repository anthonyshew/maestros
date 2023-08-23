import { Callout } from '@repo/ui';
import { mdxComponents } from '@repo/ui/server-only';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';
import { allDocuments } from 'contentlayer/generated';
import type { Metadata } from 'next';
import { getPageDocument } from '#/app/(maestros)/contentHandlers';
import { buildMeta, metadataBaseURI } from '#/app/metadata';

export function generateStaticParams() {
  return [
    allDocuments.filter(
      (doc) => doc.type === 'MaestrosLanding' || doc.type === 'MaestrosLesson',
    ),
  ];
}

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] };
}): Metadata => {
  const content = getPageDocument(params.slug);

  const title = content.ogTitle ?? content.title;

  return buildMeta({
    title: `${title} - Monorepo Maestros`,
    description: `${content.ogDescription}`,
    ogImage: encodeURI(
      `${metadataBaseURI}/monorepos/api/og?title=${title}&subtitle=${content.ogDescription}`,
    ),
  });
};

function Page({ params }: { params: { slug: string[] } }) {
  const content = getPageDocument(params.slug);

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const MDXContent = useMDXComponent(content.body.code ?? '');
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!content) return notFound();
  if (content.unpublished) return notFound();

  return (
    <div className="prose lg:prose-lg dark:prose-invert">
      <Callout bold className="mb-10" type="warning">
        This is an alpha, sneak peek of Monorepo Maestros. For this iteration,
        I'm getting all of my thoughts down. In the future, we'll have better
        information architecture, graphics, and other awesomeness. Your feedback
        is welcome!
      </Callout>

      <h1>{content.title}</h1>

      {/* @ts-expect-error Don't care, we shippin'! */}
      <MDXContent components={mdxComponents} />
    </div>
  );
}

export default Page;
