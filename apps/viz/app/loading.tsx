'use client';

import { ReactFlow, Background, Controls } from 'reactflow';
import { TurborepoWordmark } from '../components/TurborepoWordmark';

export default function Loading() {
  return (
    <div className="relative w-full h-full">
      <TurborepoWordmark className="absolute z-40 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
      <ReactFlow fitView style={{ minHeight: '100vh' }}>
        <Controls />
        <Background />
        <svg>
          <defs>
            <linearGradient id="edge-gradient">
              <stop offset="0%" stopColor="#ae53ba" />
              <stop offset="100%" stopColor="#2a8af6" />
            </linearGradient>
          </defs>
        </svg>
      </ReactFlow>
    </div>
  );
}
