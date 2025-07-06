import { useCallback, useEffect } from 'react';
import type { Node, Edge, Connection } from 'reactflow';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import type { GraphDirection, Turbotask } from '../utils/types';
import { TurboNode, type TurboNodeData } from './TurboNode';
import { TurboEdge } from './TurboEdge';
import { getLayoutedElements } from './utils';

const nodeTypes = {
  turbo: TurboNode,
};

const edgeTypes = {
  turbo: TurboEdge,
};

export function Turboflow({
  initialNodes,
  initialEdges,
  tasks,
  activeTask,
  direction,
}: {
  initialNodes: Node[];
  initialEdges: Edge[];
  tasks: Turbotask[];
  activeTask: string;
  direction: GraphDirection;
}) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    const nextNodes: Node<TurboNodeData>[] = initialNodes;

    const nextEdges: Edge[] = initialEdges;

    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      nextNodes,
      nextEdges,
      direction
    );

    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks, activeTask, direction]);

  const getNeighbors = (targetId: string) => {
    const edgesToNeighbors = edges.filter((edge) => edge.id.includes(targetId));
    const neighbors: Node[] = [];
    edgesToNeighbors.forEach((edge) => {
      const foundNode = nodes.find(
        (node) => node.id === edge.source || node.id === edge.target
      );

      if (!foundNode) return;
      neighbors.push(foundNode);
    });

    setNodes((nodess) => [
      ...nodess,
      ...neighbors.map((node) => ({
        ...node,
        className: 'full-opacity',
      })),
    ]);
  };

  const resetDim = () => {
    setNodes((cur) =>
      cur.map((node) => ({ ...node, className: 'full-opacity' }))
    );
  };

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onLayout = useCallback(
    (dir: GraphDirection) => {
      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(nodes, edges, dir);

      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
    },
    [nodes, edges, setEdges, setNodes]
  );

  useEffect(() => {
    onLayout(direction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);

  return (
    <ReactFlow
      edgeTypes={edgeTypes}
      edges={edges}
      fitView
      nodeTypes={nodeTypes}
      nodes={nodes}
      onConnect={onConnect}
      onEdgesChange={onEdgesChange}
      onNodeMouseEnter={(e) =>
        // @ts-expect-error Difficult to type with Reactflow
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        getNeighbors(e.target.id)
      }
      onNodeMouseLeave={() => resetDim()}
      onNodesChange={onNodesChange}
      style={{ minHeight: '100vh' }}
    >
      {/* <MiniMap /> */}
      <Controls />
      <Background />
      <svg>
        <defs>
          <linearGradient id="edge-gradient">
            <stop offset="0%" stopColor="#ae53ba" />
            <stop offset="100%" stopColor="#2a8af6" />
          </linearGradient>
        </defs>
      </svg>
    </ReactFlow>
  );
}
