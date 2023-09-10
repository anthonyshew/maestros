import 'reactflow/dist/style.css';
import { Edge, Node } from 'reactflow';
import { Reactflow } from './Reactflow';
import { TurboNodeData } from './TurboNode';
import {
  formatTaskToNode,
  topLevelTasks,
  edgesBuilder,
  getLayoutedElements,
} from './utils';
import { GraphDirection, Turbotask } from '../utils/types';

export const ReactFlowOuter = ({
  tasks,
  activeTask,
  direction,
}: {
  tasks: Array<Turbotask>;
  activeTask: string;
  direction: GraphDirection;
}) => {
  const initialNodes: Node<TurboNodeData>[] = [
    {
      id: '___ROOT___',
      data: { id: '___ROOT___', title: activeTask },
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
    <Reactflow
      direction={direction}
      initialNodes={layoutedNodes}
      initialEdges={layoutedEdges}
      tasks={tasks}
      activeTask={activeTask}
    />
  );
};
