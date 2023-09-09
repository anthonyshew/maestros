

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

    position: { x: 700, y: 60 },
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
    data: { label: 'Strategy' },

    position: { x: 190, y: 140 },
  },
  {
    data: { label: 'External Packages' },

    position: { x: 50, y: 240 },
  },
  {
    data: { label: 'Just-in-Time Packages' },

    position: { x: 140, y: 330 },
  },
  {
    data: { label: 'Compiled Packages' },

    position: { x: 270, y: 260 },
  },
  {
    data: { label: 'Entrypoints' },

    position: { x: 500, y: 270 },
  },
  {
    data: { label: 'Single Entrypoint' },

    position: { x: 350, y: 400 },
  },
  {
    data: { label: 'Multiple Entrypoint' },

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
    { source: 'Strategy', target: 'Entrypoints' },
    { source: 'Strategy', target: 'Module Systems' },
    { source: 'Entrypoints', target: 'Single Entrypoint' },
    { source: 'Entrypoints', target: 'Multiple Entrypoint' },
  ];

export const compilationEdges = rawCompilationEdges.map((edge) =>
  handleEdge(compilationNodeId, edge),
);
