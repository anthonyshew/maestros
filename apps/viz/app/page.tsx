import '../components/styles.css';
import { execSync } from 'node:child_process';
import { Turboflow } from '../components/Turboflow';
import { ReactFlowOuter } from '../components/ReactflowOuter';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const versionBuffer = execSync(`turbo --version`);
  console.log(versionBuffer.toString());

  const graphBuffer = await execSync(
    `cd ../.. && turbo build --dry=json`,
  ).toString();
  const graph = JSON.parse(graphBuffer.toString());

  const task = graph.tasks;

  return (
    <>
      {/* <pre className="w-screen h-screen overflow-x-hidden overflow-y-auto text-white">
        {JSON.stringify(task, null, 2)}
      </pre> */}
      <ReactFlowOuter activeTask="build" direction="BT" tasks={task} />
    </>
  );
}
