import { type rawCiNodes, ciParentNode } from "./ci";
import { type rawCompilationNodes, compilationParentNode } from "./compilation";
import { type rawConformanceNodes, conformanceParentNode } from "./conformance";
import { type rawStructureNodes, structureParentNode } from "./structure";
import { type MinimumEdge } from "#/components/Flow/utils";

type AllNodes =
	| (typeof rawCiNodes)[number]["data"]["label"]
	| (typeof rawCompilationNodes)[number]["data"]["label"]
	| (typeof rawConformanceNodes)[number]["data"]["label"]
	| (typeof rawStructureNodes)[number]["data"]["label"];

type Groups = "ci" | "compilation" | "conformance" | "structure";

export const handleIntergroupEdge = ({
	sourceGroup,
	targetGroup,
	edge,
}: {
	sourceGroup: Groups;
	targetGroup: Groups;
	edge: MinimumEdge<string>;
}) => {
	if (sourceGroup === targetGroup) {
		throw new Error(
			`handleIntegroupEdge: sourceGroup and targetGroup cannot match.`,
		);
	}

	const parentIdsMap: Record<typeof sourceGroup, typeof ciParentNode> = {
		ci: ciParentNode,
		compilation: compilationParentNode,
		conformance: conformanceParentNode,
		structure: structureParentNode,
	};

	const getParentNodeId = (group: Groups) => {
		return parentIdsMap[group].id;
	};

	return {
		...edge,
		id: `${getParentNodeId(sourceGroup)}-${getParentNodeId(
			targetGroup,
		)}-${targetGroup}-${edge.source}-${edge.target}`,
		source: `${getParentNodeId(sourceGroup)}-${edge.source}`,
		target: `${getParentNodeId(targetGroup)}-${edge.target}`,
		type: "custom",
	};
};

const rawStructureEdges: (MinimumEdge<AllNodes> & {
	sourceGroup: Groups;
	targetGroup: Groups;
})[] = [
	{
		sourceGroup: "structure",
		source: "Workspaces",
		targetGroup: "conformance",
		target: "Guardrails",
	},
	{
		sourceGroup: "conformance",
		source: "TypeScript",
		targetGroup: "compilation",
		target: "Bundlers",
	},
	{
		sourceGroup: "conformance",
		source: "TypeScript",
		targetGroup: "compilation",
		target: "tsc",
	},
	{
		sourceGroup: "conformance",
		source: "TypeScript",
		targetGroup: "compilation",
		target: "tsconfig.json",
	},
	{
		sourceGroup: "structure",
		source: "Tasks",
		targetGroup: "ci",
		target: "Remote Cache",
	},
];

export const intergroupEdges = rawStructureEdges.map((edge) =>
	handleIntergroupEdge({
		edge,
		sourceGroup: edge.sourceGroup,
		targetGroup: edge.targetGroup,
	}),
);
