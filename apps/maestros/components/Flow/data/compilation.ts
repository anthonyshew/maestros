import type { MinimumEdge } from '#/components/Flow/utils';
import { handleEdge, handleNode } from '#/components/Flow/utils';

export const compilationNodeId = 'compilation';

export const compilationParentNode = {
  id: compilationNodeId,
  data: { label: 'Compilation' },
  position: { x: 800, y: 800 },
  // Must be defined using style directly on the node
  style: {
    width: 1000,
    height: 530,
    background: 'transparent',
    border: 'none',
  },
  type: 'group',
};

export const rawCompilationNodes = [
  {
    data: { label: 'Bundlers' },
    position: { x: 540, y: 90 },
  },
  {
    data: { label: 'Module Systems' },
    position: { x: 670, y: 300 },
  },
  {
    data: { label: 'ESM' },
    position: { x: 760, y: 430 },
  },
  {
    data: { label: 'CJS' },
    position: { x: 855, y: 400 },
  },
  {
    data: { label: 'tsconfig.json' },
    position: { x: 790, y: 100 },
  },
  {
    data: { label: 'tsc' },
    position: { x: 700, y: 45 },
  },
  {
    data: { label: 'tsup' },
    position: { x: 820, y: 165 },
  },
  {
    data: { label: 'Rollup' },
    position: { x: 760, y: 225 },
  },
  {
    data: { label: 'Packaging strategy' },
    position: { x: 190, y: 140 },
  },
  {
    data: { label: 'External Packages', href: '/monorepos/packaging/external' },
    position: { x: 40, y: 240 },
  },
  {
    data: { label: 'Just-in-Time Packages', href: '/monorepos/packaging/jit' },
    position: { x: 120, y: 330 },
  },
  {
    data: { label: 'Internal Packages', href: '/monorepos/packaging/internal' },
    position: { x: 270, y: 260 },
  },
  {
    data: { label: 'Entrypoints' },
    position: { x: 500, y: 270 },
  },
  {
    data: { label: 'Single Entrypoint' },
    position: { x: 320, y: 400 },
  },
  {
    data: {
      label: 'Multiple Entrypoint',
      href: '/monorepos/packaging/multiple',
    },
    position: { x: 520, y: 400 },
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
