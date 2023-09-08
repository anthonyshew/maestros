'use client';

import { ReactFlow, Controls, Background } from 'reactflow';

const edges = [
  { id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' },
];

const nodes = [
  {
    id: '1',
    data: { label: 'Hello' },
    position: { x: 0, y: 0 },
    type: 'input',
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: 100, y: 100 },
  },
];

export function Flow() {
  return (
    <div style={{ height: '100%' }}>
      <ReactFlow edges={edges} fitView nodes={nodes}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
