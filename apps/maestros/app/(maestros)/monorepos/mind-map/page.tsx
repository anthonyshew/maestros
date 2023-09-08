import 'reactflow/dist/style.css';
import { Flow } from '#/components/Flow';

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
