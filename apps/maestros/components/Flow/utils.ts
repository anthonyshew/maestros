import { Position, MarkerType } from "reactflow";
import type { Edge, Node } from "reactflow";
import { GroupNode, ContentNode } from "#/components/Flow/nodes";
import { CustomEdge } from "#/components/Flow/edges";

interface RequiredEdgeKeys<T extends string> {
	source: T;
	target: T;
}

export type MinimumEdge<T extends string> = Partial<Edge> & RequiredEdgeKeys<T>;

export const handleEdge = (
	parentNodeId: string,
	edge: MinimumEdge<string>,
) => ({
	...edge,
	id: `${parentNodeId}-${edge.source}-${edge.target}`,
	source: `${parentNodeId}-${edge.source}`,
	target: `${parentNodeId}-${edge.target}`,
	type: "custom",
});

export const edgeTypes = {
	custom: CustomEdge,
};

export type NodeTypes = keyof typeof nodeTypes;

export interface MinimumNode extends Omit<Node, "id" | "type"> {
	id?: string;
	data: { label: string };
	position: Node["position"];
}

export const handleNode = (
	parentNodeId: string,
	node: Omit<MinimumNode, "id">,
) => ({
	...node,
	id: `${parentNodeId}-${node.data.label}`,
	data: { ...node.data },
	type: "content",
	parentNode: parentNodeId,
	extent: "parent",
});

export const nodeTypes = {
	group: GroupNode,
	content: ContentNode,
};

// this helper function returns the intersection point
// of the line between the center of the intersectionNode and the target node
function getNodeIntersection(
	intersectionNode: Required<Node> & { width: number; height: number },
	targetNode: Required<Node>,
) {
	// https://math.stackexchange.com/questions/1724792/an-algorithm-for-finding-the-intersection-point-between-a-center-of-vision-and-a
	const {
		width: intersectionNodeWidth,
		height: intersectionNodeHeight,
		positionAbsolute: intersectionNodePosition,
	} = intersectionNode;
	const targetPosition = targetNode.positionAbsolute;

	const w = intersectionNodeWidth / 2;
	const h = intersectionNodeHeight / 2;

	const x2 = intersectionNodePosition.x + w;
	const y2 = intersectionNodePosition.y + h;
	const x1 = targetPosition.x + w;
	const y1 = targetPosition.y + h;

	const xx1 = (x1 - x2) / (2 * w) - (y1 - y2) / (2 * h);
	const yy1 = (x1 - x2) / (2 * w) + (y1 - y2) / (2 * h);
	const a = 1 / (Math.abs(xx1) + Math.abs(yy1));
	const xx3 = a * xx1;
	const yy3 = a * yy1;
	const x = w * (xx3 + yy3) + x2;
	const y = h * (-xx3 + yy3) + y2;

	return { x, y };
}

// returns the position (top,right,bottom or right) passed node compared to the intersection point
function getEdgePosition(
	node: Required<Node>,
	intersectionPoint: { x: number; y: number },
) {
	const n = { ...node.positionAbsolute, ...node };
	const nx = Math.round(n.x);
	const ny = Math.round(n.y);
	const px = Math.round(intersectionPoint.x);
	const py = Math.round(intersectionPoint.y);

	if (px <= nx + 1) {
		return Position.Left;
	}
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	// biome-ignore lint/style/noNonNullAssertion: Ignored when migrating
	if (px >= nx + n.width! - 1) {
		return Position.Right;
	}
	if (py <= ny + 1) {
		return Position.Top;
	}
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	// biome-ignore lint/style/noNonNullAssertion: Ignored when migrating
	if (py >= n.y + n.height! - 1) {
		return Position.Bottom;
	}

	return Position.Top;
}

// returns the parameters (sx, sy, tx, ty, sourcePos, targetPos) you need to create an edge
export function getEdgeParams(
	source: Required<Node> & { width: number; height: number },
	target: Required<Node> & { width: number; height: number },
) {
	const sourceIntersectionPoint = getNodeIntersection(source, target);
	const targetIntersectionPoint = getNodeIntersection(target, source);

	const sourcePos = getEdgePosition(source, sourceIntersectionPoint);
	const targetPos = getEdgePosition(target, targetIntersectionPoint);

	return {
		sx: sourceIntersectionPoint.x,
		sy: sourceIntersectionPoint.y,
		tx: targetIntersectionPoint.x,
		ty: targetIntersectionPoint.y,
		sourcePos,
		targetPos,
	};
}

export function createNodesAndEdges() {
	const nodes = [];
	const edges = [];
	const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

	nodes.push({ id: "target", data: { label: "Target" }, position: center });

	for (let i = 0; i < 8; i++) {
		const degrees = i * (360 / 8);
		const radians = degrees * (Math.PI / 180);
		const x = 250 * Math.cos(radians) + center.x;
		const y = 250 * Math.sin(radians) + center.y;

		nodes.push({ id: `${i}`, data: { label: "Source" }, position: { x, y } });

		edges.push({
			id: `edge-${i}`,
			target: "target",
			source: `${i}`,
			type: "floating",
			markerEnd: {
				type: MarkerType.Arrow,
			},
		});
	}

	return { nodes, edges };
}
