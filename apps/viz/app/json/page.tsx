import { execSync } from 'node:child_process';
import { Suspense } from 'react';
import { dry } from '../../utils/validators';

export const dynamic = 'force-dynamic';

export default function Page() {
  const taskName = 'lint';
  const graphBuffer = execSync(
    `cd ../.. && turbo ${taskName} --dry=json`,
  ).toString();
  const rawGraph = JSON.parse(graphBuffer.toString());
  const graph = dry.parse(rawGraph);
  const tasks = graph.tasks.filter(
    (graph) => graph.command !== '<NONEXISTENT>',
  );

  return (
    <Suspense fallback={<div>loadinggggg</div>}>
      <pre className="h-screen max-w-screen-md overflow-x-hidden overflow-y-auto text-white">
        {JSON.stringify(tasks, null, 2)}
      </pre>
    </Suspense>
  );
}
