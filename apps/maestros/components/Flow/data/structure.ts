import type { MinimumEdge } from '#/components/Flow/utils';
import { handleEdge, handleNode } from '#/components/Flow/utils';

export const structureNodeId = 'structure';

export const structureParentNode = {
  id: structureNodeId,
  data: { label: 'Structure' },
  position: { x: 100, y: 100 },
  // Must be defined using style directly on the node, apparently?
  style: {
    width: 1000,
    height: 650,
    background: 'transparent',
    border: 'none',
  },
  type: 'group',
};

export const rawStructureNodes = [
  {
    data: { label: 'Root', href: "/monorepos/basics/root" },

    position: { x: 150, y: 150 },
  },
  {
    data: { label: 'Package managers' },

    position: { x: 700, y: 110 },
  },
  {
    data: { label: 'Dependency management' },

    position: { x: 170, y: 250 },
  },
  {
    data: { label: 'npm' },

    position: { x: 480, y: 230 },
  },
  {
    data: { label: 'yarn' },

    position: { x: 510, y: 300 },
  },
  {
    data: { label: 'pnpm' },

    position: { x: 600, y: 300 },
  },
  {
    data: { label: 'Workspaces' },

    position: { x: 750, y: 325 },
  },
  {
    data: { label: 'Applications' },

    position: { x: 770, y: 400 },
  },

  {
    data: { label: 'Packages' },

    position: { x: 620, y: 400 },
  },

  {
    data: { label: 'manypkg' },

    position: { x: 130, y: 350 },
  },
  {
    data: { label: 'syncpack' },

    position: { x: 275, y: 350 },
  },
  {
    data: { label: 'Tasks' },

    position: { x: 750, y: 500 },
  },
  {
    data: { label: 'turbo.json' },

    position: { x: 550, y: 470 },
  },
  {
    data: { label: 'Monorepo managers' },

    position: { x: 160, y: 500 },
  },
  {
    data: { label: 'Turborepo' },

    position: { x: 400, y: 470 },
  },
  {
    data: { label: 'Nx' },

    position: { x: 428, y: 530 },
  },
  {
    data: { label: 'nx.json' },
    type: "content",
    position: { x: 562, y: 530 },
  },
] as const;

export const structureNodes = rawStructureNodes.map((node) =>
  handleNode(structureNodeId, node),
);

const rawStructureEdges: MinimumEdge<
  typeof rawStructureNodes[number]['data']['label']
>[] = [
    { source: 'Monorepo managers', target: 'Nx' },
    { source: 'Monorepo managers', target: 'Turborepo' },
    { source: 'Package managers', target: 'Dependency management' },
    { source: 'Package managers', target: 'pnpm' },
    { source: 'Package managers', target: 'npm' },
    { source: 'Package managers', target: 'yarn' },
    { source: 'Package managers', target: 'Workspaces' },
    { source: 'Dependency management', target: 'manypkg' },
    { source: 'Dependency management', target: 'syncpack' },
    { source: 'Tasks', target: 'turbo.json' },
    { source: 'Turborepo', target: 'turbo.json' },
    { source: 'Workspaces', target: 'Packages' },
    { source: 'Workspaces', target: 'Applications' },
    { source: 'Nx', target: 'nx.json' },
    { source: 'nx.json', target: 'Tasks' },
    { source: 'Tasks', target: 'Packages' },
    { source: 'Tasks', target: 'Applications' },
  ];

export const structureEdges = rawStructureEdges.map((edge) =>
  handleEdge(structureNodeId, edge),
);
