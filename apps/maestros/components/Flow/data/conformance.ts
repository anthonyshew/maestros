
import type { MinimumEdge } from '#/components/Flow/utils';
import { handleEdge, handleNode } from '#/components/Flow/utils';

export const conformanceNodeId = 'conformance';

export const conformanceParentNode = {
  id: conformanceNodeId,
  data: { label: 'Conformance' },
  position: { x: 1200, y: 180 },
  // Must be defined using style directly on the node
  style: {
    width: 650,
    height: 510,
    background: 'transparent',
    border: 'none',
  },
  type: 'group',
};

export const rawConformanceNodes = [
  {
    data: { label: 'Guardrails', href: "/monorepos/guardrails" },
    position: { x: 200, y: 130 },
  },
  {
    data: { label: 'TypeScript', href: "/monorepos/guardrails/typescript" },
    position: { x: 75, y: 270 },
  },
  {
    data: { label: 'Prettier', href: "/monorepos/guardrails/prettier" },
    position: { x: 370, y: 270 },
  },
  {
    data: { label: 'ESLint', href: "/monorepos/guardrails/eslint" },
    position: { x: 240, y: 270 },
  },
  {
    data: { label: 'ts-eslint', href: "/monorepos/guardrails/ts-eslint" },
    position: { x: 320, y: 400 },
  },
  {
    data: { label: '.npmrc' },
    position: { x: 355, y: 50 },
  },
  {
    data: { label: 'Precommit hooks' },
    position: { x: 375, y: 120 },
  },
  {
    data: { label: '.editorconfig' },
    position: { x: 420, y: 190 },
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
