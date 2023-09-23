import type { MinimumEdge } from '#/components/Flow/utils';
import { handleEdge, handleNode } from '#/components/Flow/utils';

export const ciNodeId = 'ci';

export const ciParentNode = {
  id: ciNodeId,
  data: { label: 'CI' },
  position: { x: 0, y: 542.5 },
  // Must be defined using style directly on the node
  style: {
    width: 480,
    height: 285,
    background: 'transparent',
    border: 'none',
    pointerEvents: 'none',
  },
  type: 'group',
};

export const rawCiNodes = [
  {
    data: { label: 'Remote Cache' },
    position: { x: 195, y: 47.5 },
  },
  {
    data: { label: 'Vercel' },
    position: { x: 52.5, y: 100 },
  },
  {
    data: { label: 'CircleCI' },
    position: { x: 315, y: 137.5 },
  },
  {
    data: { label: 'Docker' },
    position: { x: 232.5, y: 175 },
  },
  {
    data: { label: 'GitHub Actions' },
    position: { x: 90, y: 152.5 },
  },
  {
    data: { label: 'Jenkins' },
    position: { x: 360, y: 77.5 },
  },
  {
    data: { label: 'E2E Testing' },
    position: { x: 90, y: 212.5 },
  },
  {
    data: { label: 'Changesets' },
    position: { x: 320, y: 222.5 },
  },
] as const;

export const ciNodes = rawCiNodes.map((node) => handleNode(ciNodeId, node));

const rawCiEdges: MinimumEdge<(typeof rawCiNodes)[number]['data']['label']>[] =
  [
    { source: 'Remote Cache', target: 'Jenkins' },
    { source: 'Remote Cache', target: 'CircleCI' },
    { source: 'Remote Cache', target: 'Docker' },
    { source: 'Remote Cache', target: 'GitHub Actions' },
    { source: 'Remote Cache', target: 'Vercel' },
  ];

export const ciEdges = rawCiEdges.map((edge) => handleEdge(ciNodeId, edge));
