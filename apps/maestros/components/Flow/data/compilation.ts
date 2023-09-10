import type { MinimumEdge } from '#/components/Flow/utils';
import { handleEdge, handleNode } from '#/components/Flow/utils';

export const compilationNodeId = 'compilation';

export const compilationParentNode = {
  id: compilationNodeId,
  data: { label: 'Compilation' },
  position: { x: 600, y: 600 },
  // Must be defined using style directly on the node
  style: {
    width: 750,
    height: 397.5,
    background: 'transparent',
    border: 'none',
  },
  type: 'group',
};

export const rawCompilationNodes = [
  {
    data: { label: 'Bundlers' },
    position: { x: 405, y: 67.5 },
  },
  {
    data: { label: 'Module Systems' },
    position: { x: 502.5, y: 225 },
  },
  {
    data: { label: 'ESM' },
    position: { x: 570, y: 322.5 },
  },
  {
    data: { label: 'CJS' },
    position: { x: 641.25, y: 300 },
  },
  {
    data: { label: 'tsconfig.json' },
    position: { x: 592.5, y: 75 },
  },
  {
    data: { label: 'tsc' },
    position: { x: 525, y: 33.75 },
  },
  {
    data: { label: 'tsup' },
    position: { x: 615, y: 123.75 },
  },
  {
    data: { label: 'Rollup' },
    position: { x: 570, y: 168.75 },
  },
  {
    data: { label: 'Packaging strategy' },
    position: { x: 142.5, y: 105 },
  },
  {
    data: { label: 'External Packages', href: '/monorepos/packaging/external' },
    position: { x: 30, y: 180 },
  },
  {
    data: { label: 'Just-in-Time Packages', href: '/monorepos/packaging/jit' },
    position: { x: 90, y: 247.5 },
  },
  {
    data: { label: 'Internal Packages', href: '/monorepos/packaging/internal' },
    position: { x: 202.5, y: 195 },
  },
  {
    data: { label: 'Entrypoints' },
    position: { x: 375, y: 202.5 },
  },
  {
    data: { label: 'Single Entrypoint' },
    position: { x: 240, y: 300 },
  },
  {
    data: {
      label: 'Multiple Entrypoint',
      href: '/monorepos/packaging/multiple',
    },
    position: { x: 390, y: 300 },
  },
] as const;

export const compilationNodes = rawCompilationNodes.map((node) =>
  handleNode(compilationNodeId, node),
);

const rawCompilationEdges: MinimumEdge<
  typeof rawCompilationNodes[number]['data']['label']
>[] = [
    { source: 'Bundlers', target: 'tsc' },
    { source: 'Bundlers', target: 'tsup' },
    { source: 'Bundlers', target: 'Rollup' },
    { source: 'Bundlers', target: 'tsconfig.json' },
    { source: 'Bundlers', target: 'Packaging strategy' },
    { source: 'Bundlers', target: 'Module Systems' },
    { source: 'Bundlers', target: 'Entrypoints' },
    { source: 'Module Systems', target: 'ESM' },
    { source: 'Module Systems', target: 'CJS' },
    { source: 'Packaging strategy', target: 'Just-in-Time Packages' },
    { source: 'Packaging strategy', target: 'Internal Packages' },
    { source: 'Packaging strategy', target: 'External Packages' },
    { source: 'Packaging strategy', target: 'Entrypoints' },
    { source: 'Packaging strategy', target: 'Module Systems' },
    { source: 'Entrypoints', target: 'Single Entrypoint' },
    { source: 'Entrypoints', target: 'Multiple Entrypoint' },
  ];

export const compilationEdges = rawCompilationEdges.map((edge) =>
  handleEdge(compilationNodeId, edge),
);
