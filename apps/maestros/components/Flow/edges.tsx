import { getBezierPath, useStore } from 'reactflow';
import { useCallback } from 'react';
import { getEdgeParams } from './utils';

export function CustomEdge({
  id,
  source,
  target,
  markerEnd,
}: {
  id: string;
  source: string;
  target: string;
  markerEnd: string;
}) {
  const sourceNode = useStore(
    useCallback((store) => store.nodeInternals.get(source), [source])
  );
  const targetNode = useStore(
    useCallback((store) => store.nodeInternals.get(target), [target])
  );

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(
    // @ts-expect-error Don't care, we shippin'.
    sourceNode,
    targetNode
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
      className="react-flow__edge-path nodrag"
      d={edgePath}
      id={id}
      markerEnd={markerEnd}
      style={{
        stroke: '#f59e0b',
        strokeWidth: 2,
      }}
    />
  );
}
