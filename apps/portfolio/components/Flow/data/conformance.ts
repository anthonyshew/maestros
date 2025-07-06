import type { MinimumEdge } from "#/components/Flow/utils";
import { handleEdge, handleNode } from "#/components/Flow/utils";

export const conformanceNodeId = "conformance";

export const conformanceParentNode = {
	id: conformanceNodeId,
	data: { label: "Conformance" },
	position: { x: 805, y: 75 },
	// Must be defined using style directly on the node
	style: {
		width: 487.5,
		height: 382.5,
		background: "transparent",
		border: "none",
		pointerEvents: "none",
	},
	type: "group",
};

export const rawConformanceNodes = [
	{
		data: { label: "Guardrails", href: "/monorepos/guardrails" },
		position: { x: 150, y: 97.5 },
	},
	{
		data: { label: "TypeScript", href: "/monorepos/guardrails/typescript" },
		position: { x: 40.25, y: 202.5 },
	},
	{
		data: { label: "Prettier", href: "/monorepos/guardrails/prettier" },
		position: { x: 287.5, y: 202.5 },
	},
	{
		data: { label: "ESLint", href: "/monorepos/guardrails/eslint" },
		position: { x: 180, y: 202.5 },
	},
	{
		data: { label: "ts-eslint", href: "/monorepos/guardrails/ts-eslint" },
		position: { x: 240, y: 300 },
	},
	{
		data: { label: ".npmrc" },
		position: { x: 276.25, y: 37.5 },
	},
	{
		data: { label: "Precommit hooks" },
		position: { x: 291.25, y: 90 },
	},
	{
		data: { label: ".editorconfig" },
		position: { x: 330, y: 142.5 },
	},
] as const;

export const conformanceNodes = rawConformanceNodes.map((node) =>
	handleNode(conformanceNodeId, node),
);

const rawConformanceEdges: MinimumEdge<
	(typeof rawConformanceNodes)[number]["data"]["label"]
>[] = [
	{ source: "Guardrails", target: "TypeScript" },
	{ source: "Guardrails", target: "Prettier" },
	{ source: "Guardrails", target: "ESLint" },
	{ source: "TypeScript", target: "ts-eslint" },
	{ source: "ESLint", target: "ts-eslint" },
];

export const conformanceEdges = rawConformanceEdges.map((edge) =>
	handleEdge(conformanceNodeId, edge),
);
