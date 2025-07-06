// biome-ignore lint/correctness/noUnusedImports: Ignored when migrating
import React from "react";
import type { EdgeProps } from "reactflow";
import { getBezierPath } from "reactflow";

export function TurboEdge({
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
	const xEqual = sourceX === targetX;
	const yEqual = sourceY === targetY;

	const [edgePath] = getBezierPath({
		// we need this little hack in order to display the gradient for a straight line
		sourceX: xEqual ? sourceX + 0.0001 : sourceX,
		sourceY: yEqual ? sourceY + 0.0001 : sourceY,
		sourcePosition,
		targetX,
		targetY,
		targetPosition,
	});

	return (
		<path
			className="react-flow__edge-path"
			d={edgePath}
			id={id}
			markerEnd={markerEnd}
			style={style}
		/>
	);
}
