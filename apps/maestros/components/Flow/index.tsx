'use client';

import type { EdgeTypes, Node } from 'reactflow';
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  // MiniMap,
  Controls,
} from 'reactflow';
import { nodeTypes, edgeTypes } from '#/components/Flow/utils';
import {
  structureNodes,
  structureEdges,
  structureParentNode,
  conformanceParentNode,
  conformanceNodes,
  conformanceEdges,
  compliationParentNode,
  compilationNodes,
  compilationEdges,
} from '#/components/Flow/data';

const initialNodes = [
  structureParentNode,
  ...structureNodes,
  conformanceParentNode,
  ...conformanceNodes,
  compliationParentNode,
  ...compilationNodes,
];

const initialEdges = [
  ...structureEdges,
  ...conformanceEdges,
  ...compilationEdges,
];

export function Flow() {
  const [nodes, _setNodes, onNodesChange] = useNodesState(
    initialNodes as Node[],
  );
  const [edges, _setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <ReactFlow
      edgeTypes={edgeTypes as EdgeTypes}
      edges={edges}
      fitView
      nodeTypes={nodeTypes}
      nodes={nodes}
      // onConnect={onConnect}
      onEdgesChange={onEdgesChange}
      onNodesChange={onNodesChange}
    >
      {/* <MiniMap /> */}
      <Controls />
      <Background />
    </ReactFlow>
  );
}
