'use client';

import type { EdgeTypes, Node } from 'reactflow';
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
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
  compilationParentNode,
  compilationNodes,
  compilationEdges,
  ciParentNode,
  ciNodes,
  ciEdges,
  intergroupEdges,
} from '#/components/Flow/data';

const initialNodes = [
  structureParentNode,
  ...structureNodes,
  conformanceParentNode,
  ...conformanceNodes,
  compilationParentNode,
  ...compilationNodes,
  ciParentNode,
  ...ciNodes,
];

const initialEdges = [
  ...structureEdges,
  ...conformanceEdges,
  ...compilationEdges,
  ...ciEdges,
  ...intergroupEdges,
];

export function Flow() {
  const [nodes, _setNodes, onNodesChange] = useNodesState(
    initialNodes as Node[],
  );
  const [edges, _setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <ReactFlow
      defaultViewport={{ x: 250, y: 250, zoom: 0.5 }}
      edgeTypes={edgeTypes as EdgeTypes}
      edges={edges}
      fitView
      nodeTypes={nodeTypes}
      nodes={nodes}
      onEdgesChange={onEdgesChange}
      onNodesChange={onNodesChange}
    >
      <Controls />
      <Background />
    </ReactFlow>
  );
}
