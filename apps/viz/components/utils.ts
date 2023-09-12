import type { Edge, Node } from 'reactflow';
import { Position } from 'reactflow';
// @ts-expect-error dagre doesn't have types but that's okay :)
import dagre from 'dagre';
import type { GraphDirection, Turbotask } from '../utils/types';
import type { TurboNodeData } from './TurboNode';


const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 350;
const nodeHeight = 50;

export const edgesBuilder = (taskList: Turbotask[]): Edge[] => {
  const edgesArr: Edge[] = [];

  taskList.forEach((task) => {
    task.dependencies.forEach((dep) => {
      edgesArr.push({
        id: `${task.taskId}-${dep}`,
        source: task.taskId,
        target: dep,
        type: "turbo",
        className: 'full-opacity',
      });
    });
  });

  return edgesArr;
};

export const formatTaskToNode = (
  task: Turbotask,
): Node<TurboNodeData> => {
  return ({
    id: task.taskId,
    position: { x: 0, y: 0 }, // Doesn't actually get used...dagre sets this.
    data: { id: task.taskId, title: task.taskId },
    type: 'turbo',
  })
};


export const topLevelTasks = (tasks: Turbotask[]) =>
  tasks.filter((task) => !task.dependents.length).map(formatTaskToNode);

export const getLayoutedElements = (
  nodes: Node[],
  edges: Edge[],
  direction: GraphDirection = 'LR',
) => {
  const handleDirection = (dir: GraphDirection): [Position, Position] => {
    if (dir === 'BT') {
      return [Position.Top, Position.Bottom];
    }

    if (dir === 'TB') {
      return [Position.Bottom, Position.Top];
    }

    if (dir === 'RL') {
      return [Position.Left, Position.Right];
    }
    return [Position.Right, Position.Left];
  };

  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, {
      width: nodeWidth,
      height: nodeHeight * 2,
    });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);


  nodes.forEach((node) => {
    const nodeSizeAndPosition = dagreGraph.node(node.id);
    node.targetPosition = handleDirection(direction)[0];
    node.sourcePosition = handleDirection(direction)[1];

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeSizeAndPosition.x - nodeWidth / 2,
      y: nodeSizeAndPosition.y - nodeHeight / 2,
    };

    return node;
  });

  // Edge case: If there is only one task at the root of the graph,
  // the red-blue gradient can make the line disappear since the bounding box won't have height.
  // This sub-pixel shift makes the line visible again.
  nodes[0].position.y = nodes[0].position.y + 0.01

  return { nodes, edges };
};
