import '../../components/styles.css';
import { execSync } from 'node:child_process';
import { ReactFlowOuter } from '../../components/ReactflowOuter';
import { dry } from '../../utils/validators';
import type { Dry } from '../../utils/types';

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
  let graph: Dry | null = null;

  try {
    const graphBuffer = execSync(command).toString();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const rawGraph = JSON.parse(graphBuffer.toString());
    graph = dry.parse(rawGraph);
  } catch (error) {
    // @ts-expect-error We shippin'!
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    throw new Error(error.message);
  }

  const tasks = graph.tasks.filter(
    (parsedGraph) => parsedGraph.command !== '<NONEXISTENT>',
  );

  return <ReactFlowOuter activeTask={taskName} direction="LR" tasks={tasks} />;
}
