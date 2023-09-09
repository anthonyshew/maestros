'use client';

import type { EdgeTypes } from 'reactflow';
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
} from 'reactflow';
import { nodeTypes, edgeTypes } from '#/components/Flow/utils';
import {
  structureNodes,
  structureEdges,
  structureParentNode,
} from '#/components/Flow/data';

const initialNodes = [structureParentNode, ...structureNodes];

const initialEdges = [...structureEdges];

export function Flow() {
  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
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
