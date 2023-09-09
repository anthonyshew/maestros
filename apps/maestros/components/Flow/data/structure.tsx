import type { MinimumEdge, MinimumNode } from '#/components/Flow/utils';
import { handleEdge, handleNode } from '#/components/Flow/utils';

export const structureNodeId = 'structure';

export const structureParentNode = {
  id: structureNodeId,
  data: { label: 'Structure' },
  position: { x: 100, y: 100 },
  // Must be defined using style directly on the node
  style: {
    width: 1000,
    height: 1000,
    background: 'transparent',
    border: 'none',
  },
  type: 'group',
};

const rawStructureNodes: readonly MinimumNode[] = [
  {
    data: { label: 'Root' },
    type: 'unlinked',

    position: { x: 100, y: 100 },
  },
  {
    data: { label: 'Package managers' },
    type: 'unlinked',
    position: { x: 320, y: 100 },
  },
  {
    data: { label: 'Dependency management' },
    type: 'unlinked',
    position: { x: 320, y: 150 },
  },
  {
    data: { label: 'npm' },
    type: 'unlinked',
    position: { x: 320, y: 150 },
  },
  {
    data: { label: 'yarn' },
    type: 'unlinked',
    position: { x: 320, y: 200 },
  },
  {
    data: { label: 'pnpm' },
    type: 'unlinked',
    position: { x: 320, y: 250 },
  },
  {
    data: { label: 'Workspaces' },
    type: 'unlinked',
    position: { x: 320, y: 300 },
  },
  {
    data: { label: 'Applications' },
    type: 'unlinked',
    position: { x: 320, y: 350 },
  },

  {
    data: { label: 'Packages' },
    type: 'unlinked',
    position: { x: 320, y: 350 },
  },

  {
    data: { label: 'manypkg' },
    type: 'unlinked',
    position: { x: 320, y: 450 },
  },
  {
    data: { label: 'syncpack' },
    type: 'unlinked',
    position: { x: 320, y: 500 },
  },
  {
    data: { label: 'Tasks' },
    type: 'unlinked',
    position: { x: 320, y: 550 },
  },
  {
    data: { label: 'turbo.json' },
    type: 'unlinked',
    position: { x: 320, y: 600 },
  },
  {
    data: { label: 'Monorepo managers' },
    type: 'unlinked',
    position: { x: 320, y: 650 },
  },
  {
    data: { label: 'Turborepo' },
    type: 'unlinked',
    position: { x: 320, y: 700 },
  },
  {
    data: { label: 'Nx' },
    type: 'unlinked',
    position: { x: 320, y: 750 },
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
];

export const structureEdges = rawStructureEdges.map((edge) =>
  handleEdge(structureNodeId, edge),
);
