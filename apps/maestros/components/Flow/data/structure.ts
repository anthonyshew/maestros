import type { MinimumEdge } from '#/components/Flow/utils';
import { handleEdge, handleNode } from '#/components/Flow/utils';

export const structureNodeId = 'structure';

export const structureParentNode = {
  id: structureNodeId,
  data: { label: 'Structure' },
  position: { x: 0, y: 0 },
  // Must be defined using style directly on the node, apparently?
  style: {
    width: 750,
    height: 487.5,
    background: 'transparent',
    border: 'none',
    pointerEvents: "none"
  },
  type: 'group',
};

export const rawStructureNodes = [
  {
    data: { label: 'Root', href: '/monorepos/basics/root' },
    position: { x: 112.5, y: 92.5 },
  },
  {
    data: { label: 'Package managers', href: '/monorepos/package-managers' },
    position: { x: 525, y: 72.5 },
  },
  {
    data: { label: 'Dependency management' },
    position: { x: 127.5, y: 167.5 },
  },
  {
    data: { label: 'npm', href: '/monorepos/package-managers/npm' },
    position: { x: 350, y: 172.5 },
  },
  {
    data: { label: 'yarn', href: '/monorepos/package-managers/yarn' },
    position: { x: 367.5, y: 245 },
  },
  {
    data: { label: 'pnpm', href: '/monorepos/package-managers/pnpm' },
    position: { x: 465, y: 205 },
  },
  {
    data: { label: 'Workspaces', href: '/monorepos/basics/workspaces' },
    position: { x: 572.5, y: 243.75 },
  },
  {
    data: { label: 'Applications', href: '/monorepos/basics/workspaces#apps' },
    position: { x: 592.5, y: 300 },
  },

  {
    data: { label: 'Packages', href: '/monorepos/basics/workspaces#packages' },
    position: { x: 465, y: 300 },
  },
  {
    data: { label: 'manypkg' },
    position: { x: 97.5, y: 262.5 },
  },
  {
    data: { label: 'syncpack' },
    position: { x: 206.25, y: 262.5 },
  },
  {
    data: { label: 'Tasks' },
    position: { x: 562.5, y: 375 },
  },
  {
    data: { label: 'turbo.json' },
    position: { x: 412.5, y: 352.5 },
  },
  {
    data: { label: 'Monorepo managers' },
    position: { x: 120, y: 375 },
  },
  {
    data: { label: 'Turborepo' },
    position: { x: 300, y: 352.5 },
  },
  {
    data: { label: 'Nx' },
    position: { x: 321, y: 397.5 },
  },
  {
    data: { label: 'nx.json' },
    position: { x: 421.5, y: 397.5 },
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
