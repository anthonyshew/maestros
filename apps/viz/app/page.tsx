import '../components/styles.css';
import { execSync } from 'node:child_process';

export default async function Page() {
  const graphBuffer = await execSync(`turbo build --dry=json`);
  const graph = await graphBuffer.toString();

  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
        <div>
          <pre>{JSON.stringify(graph, null, 2)}</pre>
        </div>
      </body>
    </html>
  );
}
