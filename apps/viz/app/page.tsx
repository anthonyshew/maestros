import '../components/styles.css';
import { execSync } from 'node:child_process';
import { ReactFlowOuter } from '../components/ReactflowOuter';
import { dry } from '../utils/validators';

export const dynamic = 'force-dynamic';

export default function Page() {
  const graphBuffer = execSync(`cd ../.. && turbo build --dry=json`).toString();
  // const graph = JSON.parse(graphBuffer.toString());

  const graph = dry.parse(JSON.parse(graphBuffer.toString()));

  const task = graph.tasks;

  return (
    <>
      <pre className="w-screen h-screen overflow-x-hidden overflow-y-auto text-white">
        {JSON.stringify(task, null, 2)}
      </pre>
      {/* <ReactFlowOuter activeTask="build" direction="BT" tasks={task} /> */}
    </>
  );
}
