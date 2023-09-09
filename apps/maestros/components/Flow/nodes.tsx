// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-explicit-any -- Don't feel like dealing with the anys in Record */
import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

function _GroupNode({ data }: { data: Record<string, any> }) {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-yellow-600/80 to-yellow-400/0 dark:from-yellow-700 dark:to-yellow-400/0 to rounded-3xl">
      {/* <div className="absolute gradient-angle-155 from-50% to-yellow-300/20 dark:to-[rgb(83,76,51)] from-white dark:from-black inset-2 rounded-2xl"> */}
      <div className="absolute bg-gradient-155 from-50% to-yellow-300/20 dark:to-[rgb(83,76,51)]/90 from-white dark:from-black inset-2 rounded-2xl">
        <div className="mt-6 ml-6 text-4xl font-semibold text-left text-black dark:text-white">
          {data.label}
        </div>
      </div>
    </div>
  );
}
function _LinkedNode({ data }: { data: Record<string, any> }) {
  return (
    <div className="px-4 py-2 bg-white border-2 rounded-md shadow-md border-stone-400">
      <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
        {data.label}
      </div>
      <Handle className="w-16" position={Position.Top} type="target" />
      <Handle className="w-16" position={Position.Bottom} type="source" />
    </div>
  );
}
function _UnlinkedNode({ data }: { data: Record<string, any> }) {
  return (
    <div className="px-4 py-2 bg-white border-2 border-yellow-500 rounded-md shadow-md dark:bg-black">
      <div className="flex items-center justify-center font-medium text-black rounded-full dark:text-white">
        {data.label}
      </div>
      <Handle className="w-16" position={Position.Top} type="target" />
      <Handle className="w-16" position={Position.Bottom} type="source" />
    </div>
  );
}

export const GroupNode = memo(_GroupNode);
export const LinkedNode = memo(_LinkedNode);
export const UnlinkedNode = memo(_UnlinkedNode);
