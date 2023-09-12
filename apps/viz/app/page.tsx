import '../components/styles.css';
import { execSync } from 'node:child_process';
import { ReactFlowOuter } from '../components/ReactflowOuter';
import { dry } from '../utils/validators';

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
    <>
      {/* <pre className="w-screen h-screen overflow-x-hidden overflow-y-auto text-white">
        {JSON.stringify(task, null, 2)}
      </pre> */}
      <ReactFlowOuter activeTask={taskName} direction="LR" tasks={tasks} />
    </>
  );
}
