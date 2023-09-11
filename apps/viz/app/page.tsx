import '../components/styles.css';
import { execSync } from 'node:child_process';

export default async function Page() {
  const graphBuffer = await execSync(`turbo build --dry=json`).toString();
  const graph = JSON.parse(graphBuffer.toString());

  const renderMe = graph.tasks[0];

  return (
    <div>
      <pre className="w-screen h-screen overflow-x-hidden overflow-y-auto text-white">
        {JSON.stringify(renderMe, null, 2)}
      </pre>
    </div>
  );
}
