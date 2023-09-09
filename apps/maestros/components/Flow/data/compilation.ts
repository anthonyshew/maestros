

import type { MinimumEdge } from '#/components/Flow/utils';
import { handleEdge, handleNode } from '#/components/Flow/utils';

export const compilationNodeId = 'compilation';

export const compliationParentNode = {
  id: compilationNodeId,
  data: { label: 'Compilation' },
  position: { x: 300, y: 800 },
  // Must be defined using style directly on the node
  style: {
    width: 1000,
    height: 530,
    background: 'transparent',
    border: 'none',
  },
  type: 'group',
};

const rawCompilationNodes = [
  {
    data: { label: 'Bundlers' },
    type: 'unlinked',
    position: { x: 540, y: 90 },
  },
  {
    data: { label: 'Module Systems' },
    type: 'unlinked',
    position: { x: 670, y: 300 },
  },
  {
    data: { label: 'ESM' },
    type: 'unlinked',
    position: { x: 760, y: 430 },
  },
  {
    data: { label: 'CJS' },
    type: 'unlinked',
    position: { x: 855, y: 400 },
  },
  {
    data: { label: 'tsconfig.json' },
    type: 'unlinked',
    position: { x: 790, y: 100 },
  },
  {
    data: { label: 'tsc' },
    type: 'unlinked',
    position: { x: 700, y: 60 },
  },
  {
    data: { label: 'tsup' },
    type: 'unlinked',
    position: { x: 820, y: 165 },
  },
  {
    data: { label: 'Rollup' },
    type: 'unlinked',
    position: { x: 760, y: 225 },
  },
  {
    data: { label: 'Strategy' },
    type: 'unlinked',
    position: { x: 190, y: 140 },
  },
  {
    data: { label: 'External Packages' },
    type: 'unlinked',
    position: { x: 50, y: 240 },
  },
  {
    data: { label: 'Just-in-Time Packages' },
    type: 'unlinked',
    position: { x: 140, y: 330 },
  },
  {
    data: { label: 'Compiled Packages' },
    type: 'unlinked',
    position: { x: 270, y: 260 },
  },
  {
    data: { label: 'Entrypoints' },
    type: 'unlinked',
    position: { x: 500, y: 250 },
  },
  {
    data: { label: 'Single Entrypoint' },
    type: 'unlinked',
    position: { x: 350, y: 400 },
  },
  {
    data: { label: 'Multiple Entrypoint' },
    type: 'unlinked',
    position: { x: 550, y: 400 },
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
    { source: 'Bundlers', target: 'Strategy' },
    { source: 'Bundlers', target: 'Module Systems' },
    { source: 'Bundlers', target: 'Entrypoints' },
    { source: 'Module Systems', target: 'ESM' },
    { source: 'Module Systems', target: 'CJS' },
    { source: 'Strategy', target: 'Just-in-Time Packages' },
    { source: 'Strategy', target: 'Compiled Packages' },
    { source: 'Strategy', target: 'External Packages' },
    { source: 'Entrypoints', target: 'Single Entrypoint' },
    { source: 'Entrypoints', target: 'Multiple Entrypoint' },
  ];

export const compilationEdges = rawCompilationEdges.map((edge) =>
  handleEdge(compilationNodeId, edge),
);
