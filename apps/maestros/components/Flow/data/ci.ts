

import type { MinimumEdge } from '#/components/Flow/utils';
import { handleEdge, handleNode } from '#/components/Flow/utils';

export const ciNodeId = 'ci';

export const ciParentNode = {
  id: ciNodeId,
  data: { label: 'CI' },
  position: { x: 100, y: 850 },
  // Must be defined using style directly on the node
  style: {
    width: 640,
    height: 450,
    background: 'transparent',
    border: 'none',
  },
  type: 'group',
};

export const rawCiNodes = [
  {
    data: { label: 'Remote Cache' },
    type: 'unlinked',
    position: { x: 260, y: 130 },
  },
  {
    data: { label: 'Vercel' },
    type: 'unlinked',
    position: { x: 70, y: 200 },
  },
  {
    data: { label: 'CircleCI' },
    type: 'unlinked',
    position: { x: 420, y: 250 },
  },
  {
    data: { label: 'Docker' },
    type: 'unlinked',
    position: { x: 310, y: 300 },
  },
  {
    data: { label: 'GitHub Actions' },
    type: 'unlinked',
    position: { x: 120, y: 270 },
  },
  {
    data: { label: 'Jenkins' },
    type: 'unlinked',
    position: { x: 480, y: 170 },
  },
  {
    data: { label: 'E2E Testing' },
    type: 'unlinked',
    position: { x: 120, y: 350 },
  },
] as const;

export const ciNodes = rawCiNodes.map((node) =>
  handleNode(ciNodeId, node),
);

const rawCiEdges: MinimumEdge<
  typeof rawCiNodes[number]['data']['label']
>[] = [
    { source: 'Remote Cache', target: 'Jenkins' },
    { source: 'Remote Cache', target: 'CircleCI' },
    { source: 'Remote Cache', target: 'Docker' },
    { source: 'Remote Cache', target: 'GitHub Actions' },
    { source: 'Remote Cache', target: 'Vercel' },
  ];

export const ciEdges = rawCiEdges.map((edge) =>
  handleEdge(ciNodeId, edge),
);
