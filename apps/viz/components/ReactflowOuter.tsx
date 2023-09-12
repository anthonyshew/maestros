'use client';

import 'reactflow/dist/style.css';
import type { Edge, Node } from 'reactflow';
import type { GraphDirection, Turbotask } from '../utils/types';
import { Turboflow } from './Turboflow';
import type { TurboNodeData } from './TurboNode';
import {
  formatTaskToNode,
  topLevelTasks,
  edgesBuilder,
  getLayoutedElements,
} from './utils';

export function ReactFlowOuter({
  tasks,
  activeTask,
  direction,
}: {
  tasks: Turbotask[];
  activeTask: string;
  direction: GraphDirection;
}) {
  const initialNodes: Node<TurboNodeData>[] = [
    {
      id: '___ROOT___',
      data: { id: '___ROOT___', title: `Pipeline: ${activeTask}` },
      position: { x: 0, y: 0 },
      type: 'turbo',
    },
    ...tasks.map(formatTaskToNode),
  ];

  const initialEdges: Edge[] = [
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

  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    initialNodes,
    initialEdges,
  );

  return (
    <Turboflow
      activeTask={activeTask}
      direction={direction}
      initialEdges={layoutedEdges}
      initialNodes={layoutedNodes}
      tasks={tasks}
    />
  );
}
