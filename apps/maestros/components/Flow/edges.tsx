import { useTheme } from 'next-themes';
import type { EdgeProps } from 'reactflow';
import { BaseEdge, getBezierPath, useStore } from 'reactflow';
import { useCallback } from 'react';
import { getEdgeParams } from './utils';

// export function CustomEdge({
//   id,
//   sourceX,
//   sourceY,
//   targetX,
//   targetY,
//   sourcePosition,
//   targetPosition,
//   style = {},
//   markerEnd,
// }: EdgeProps) {
//   const [edgePath, labelX, labelY] = getBezierPath({
//     sourceX,
//     sourceY,
//     sourcePosition,
//     targetX,
//     targetY,
//     targetPosition,
//   });

//   const theme = useTheme();

//   return (
//     <BaseEdge
//       markerEnd={markerEnd}
//       path={edgePath}
//       style={{
//         stroke: theme.theme === 'light' ? 'black' : 'white',
//         strokeWidth: 2,
//       }}
//     />
//   );
// }

export function CustomEdge({
  id,
  source,
  target,
  markerEnd,
}: {
  id: string;
  source: string;
  target: string;
  markerEnd: string | undefined;
}) {
  const sourceNode = useStore(
    useCallback((store) => store.nodeInternals.get(source), [source]),
  );
  const targetNode = useStore(
    useCallback((store) => store.nodeInternals.get(target), [target]),
  );

  const theme = useTheme();

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(
    // @ts-expect-error Don't care right now.
    sourceNode,
    targetNode,
  );

  const [edgePath] = getBezierPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: sourcePos,
    targetPosition: targetPos,
    targetX: tx,
    targetY: ty,
  });

  return (
    <path
      className="react-flow__edge-path"
      d={edgePath}
      id={id}
      markerEnd={markerEnd}
      style={{
        stroke: theme.theme === 'light' ? 'black' : 'white',
        strokeWidth: 2,
      }}
    />
  );
}
