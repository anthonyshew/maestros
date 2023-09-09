import { useTheme } from 'next-themes';
import type { EdgeProps } from 'reactflow';
import { BaseEdge, getBezierPath } from 'reactflow';

export function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const theme = useTheme();

  return (
    <BaseEdge
      markerEnd={markerEnd}
      path={edgePath}
      style={{
        position: 'absolute',
        zIndex: 30,
        stroke: theme.theme === 'light' ? 'black' : 'white',
        strokeWidth: 2,
      }}
    />
  );
}
