import { useCallback, useEffect } from 'react';
import type { Node, Edge, Connection } from 'reactflow';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  // useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';
import type { GraphDirection, Turbotask } from '../utils/types';
import TurboNode, { type TurboNodeData } from './TurboNode';
import TurboEdge from './TurboEdge';
import {
  edgesBuilder,
  formatTaskToNode,
  getLayoutedElements,
  topLevelTasks,
} from './utils';

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
  // const { setViewport, zoomIn, zoomOut } = useReactFlow();

  useEffect(() => {
    const nextNodes: Node<TurboNodeData>[] = [
      {
        id: '___ROOT___',
        data: { id: '___ROOT___', title: activeTask },
        position: { x: 0, y: 0 },
        type: 'turbo',
      },
      ...tasks.map(formatTaskToNode),
    ];

    const nextEdges: Edge[] = [
      ...topLevelTasks(tasks).map(
        (task): Edge => ({
          id: `___ROOT___-${task.id}`,
          source: '___ROOT___',
          target: task.id,
          className: 'full-opacity',
        }),
      ),
      ...edgesBuilder(tasks),
    ];

    const { nodes, edges } = getLayoutedElements(
      nextNodes,
      nextEdges,
      direction,
    );

    setNodes(nodes);
    setEdges(edges);
  }, [tasks, activeTask]);

  const getNeighbors = (targetId: string) => {
    const edgesToNeighbors = edges.filter((edge) => edge.id.includes(targetId));
    const neighbors: Node[] = [];
    edgesToNeighbors.forEach((edge) => {
      const foundNode = nodes.find(
        (node) => node.id === edge.source || node.id === edge.target,
      );

      if (!foundNode) return;
      neighbors.push(foundNode);
    });

    setNodes((nodes) => [
      ...nodes,
      ...neighbors.map((node) => ({
        ...node,
        className: 'full-opacity background-green',
      })),
    ]);
  };

  const resetDim = () => {
    setNodes((cur) =>
      cur.map((node) => ({ ...node, className: 'full-opacity' })),
    );
  };

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onLayout = useCallback(
    (dir: GraphDirection) => {
      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(nodes, edges, dir);

      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
    },
    [nodes, edges],
  );

  useEffect(() => {
    onLayout(direction);
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
        // @ts-expect-error
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

          <marker
            id="edge-circle"
            markerHeight="10"
            markerUnits="strokeWidth"
            markerWidth="10"
            orient="auto"
            refX="0"
            refY="0"
            viewBox="-5 -5 10 10"
          >
            <circle cx="0" cy="0" r="2" stroke="#2a8af6" strokeOpacity="0.75" />
          </marker>
        </defs>
      </svg>
    </ReactFlow>
  );
}
