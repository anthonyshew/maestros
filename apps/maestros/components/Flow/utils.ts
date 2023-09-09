
import type { Edge, Node } from "reactflow";
import { GroupNode, LinkedNode, UnlinkedNode } from "#/components/Flow/nodes";
import { CustomEdge } from "#/components/Flow/edges";

interface RequiredEdgeKeys<T extends string> {
  source: T
  target: T
}

export type MinimumEdge<T extends string> = Partial<Edge> & RequiredEdgeKeys<T>

export const handleEdge = (parentNodeId: string, edge: MinimumEdge<string>) => ({
  ...edge,
  id: `${parentNodeId}-${edge.source}-${edge.target}`,
  source: `${parentNodeId}-${edge.source}`,
  target: `${parentNodeId}-${edge.target}`,
  type: "custom"
})

export const edgeTypes = {
  custom: CustomEdge
}

export type NodeTypes = keyof typeof nodeTypes

export interface MinimumNode extends Omit<Node, "id" | "type"> {
  id?: string
  data: { label: string }
  position: Node["position"]
  type: NodeTypes
}

export const handleNode = (parentNodeId: string, node: Omit<MinimumNode, "id">) => ({
  ...node,
  id: `${parentNodeId}-${node.data.label}`,
  data: { label: node.data.label },
  parentNode: parentNodeId,
  extent: 'parent',
})

export const nodeTypes = {
  group: GroupNode,
  linked: LinkedNode,
  unlinked: UnlinkedNode,
}
