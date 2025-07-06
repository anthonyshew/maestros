import 'reactflow/dist/style.css';
import type { Metadata } from 'next';
import { Flow } from '#/components/Flow';
import { metadataBaseURI, buildMeta } from '#/app/metadata';

export const generateMetadata = (): Metadata => {
  const title = `Mind Map`;
  const description = 'Your roadmap to monorepo mastery';

  return buildMeta({
    title,
    description,
    ogImage: encodeURI(
      `${metadataBaseURI}/monorepos/api/og?title=${title}&subtitle=${description}`
    ),
  });
};

function MindMap() {
  return (
    <main className="relative flex flex-row justify-start overflow-x-hidden flex-auto h-[calc(100vh-3.5rem)] overflow-auto mt-14">
      <div className="w-full h-full">
        <Flow />
      </div>
    </main>
  );
}

export default MindMap;
