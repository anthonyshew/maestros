import '../../components/styles.css';
import { execSync } from 'node:child_process';
import { ReactFlowOuter } from '../../components/ReactflowOuter';
import { dry } from '../../utils/validators';
import type { Dry } from '../../utils/types';
import { ClientErrorProxy } from '#/[...task]/ClientErrorProxy';

export const dynamic = 'force-dynamic';

export default function Content({ params }: { params: { task: string } }) {
  const taskName = decodeURIComponent(params.task);

  // Not totally sure why this is happening...?
  if (taskName === 'favicon.ico') {
    return null;
  }

  const command = `cd ${
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    process.env.REPO_RELATIVE_ROOT_LOCATION ?? '../..'
  } && turbo ${taskName} --dry=json`;

  try {
    const graphBuffer = execSync(command).toString();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const rawGraph = JSON.parse(graphBuffer.toString());
    const graph: Dry = dry.parse(rawGraph);

    const tasks = graph.tasks.filter(
      (parsedGraph) => parsedGraph.command !== '<NONEXISTENT>',
    );

    return (
      <ReactFlowOuter activeTask={taskName} direction="LR" tasks={tasks} />
    );
  } catch (err) {
    if (err instanceof Error) {
      return <ClientErrorProxy error={err.message} />;
    }
    // eslint-disable-next-line no-console
    console.error('Something quite unexpected has happened.');
    // eslint-disable-next-line no-console
    console.error('Please file an issue on the repo with a reproduction.');
  }

  return null;
}
