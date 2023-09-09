
import type { MinimumEdge } from '#/components/Flow/utils';
import { handleEdge, handleNode } from '#/components/Flow/utils';

export const conformanceNodeId = 'conformance';

export const conformanceParentNode = {
  id: conformanceNodeId,
  data: { label: 'Conformance' },
  position: { x: 1200, y: 180 },
  // Must be defined using style directly on the node
  style: {
    width: 760,
    height: 510,
    background: 'transparent',
    border: 'none',
  },
  type: 'group',
};

export const rawConformanceNodes = [
  {
    data: { label: 'Guardrails' },
    type: 'unlinked',
    position: { x: 200, y: 130 },
  },
  {
    data: { label: 'TypeScript' },
    type: 'unlinked',
    position: { x: 110, y: 270 },
  },
  {
    data: { label: 'Prettier' },
    type: 'unlinked',
    position: { x: 350, y: 270 },
  },
  {
    data: { label: 'ESLint' },
    type: 'unlinked',
    position: { x: 240, y: 270 },
  },
  {
    data: { label: 'ts-eslint' },
    type: 'unlinked',
    position: { x: 320, y: 400 },
  },
  {
    data: { label: '.npmrc' },
    type: 'unlinked',
    position: { x: 555, y: 150 },
  },
  {
    data: { label: 'Precommit hooks' },
    type: 'unlinked',
    position: { x: 520, y: 220 },
  },
  {
    data: { label: '.editorconfig' },
    type: 'unlinked',
    position: { x: 540, y: 290 },
  },
] as const;

export const conformanceNodes = rawConformanceNodes.map((node) =>
  handleNode(conformanceNodeId, node),
);

const rawConformanceEdges: MinimumEdge<
  typeof rawConformanceNodes[number]['data']['label']
>[] = [
    { source: 'Guardrails', target: 'TypeScript' },
    { source: 'Guardrails', target: 'Prettier' },
    { source: 'Guardrails', target: 'ESLint' },
    { source: 'TypeScript', target: 'ts-eslint' },
    { source: 'ESLint', target: 'ts-eslint' },
  ];

export const conformanceEdges = rawConformanceEdges.map((edge) =>
  handleEdge(conformanceNodeId, edge),
);
