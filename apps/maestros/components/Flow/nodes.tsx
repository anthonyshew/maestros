// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-explicit-any -- Don't feel like dealing with the anys in Record */
import type { Url } from 'node:url';
import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

function _GroupNode({ data }: { data: Record<string, any> }) {
  return (
    <div className="relative z-10 w-full h-full bg-gradient-155 border-2 border-yellow-200/80 nodrag dark:border-yellow-300/20 nodrag from-50% to-yellow-300/20 dark:to-[rgb(83,76,51)]/90 from-transparent rounded-3xl">
      {/* <div className="absolute z-10 bg-gradient-155 from-50% to-yellow-300/20 dark:to-[rgb(83,76,51)]/90 from-white dark:from-black inset-2 rounded-2xl"> */}
      <div className="mt-6 ml-6 text-3xl font-semibold text-left text-black nodrag dark:text-white">
        {data.label}
      </div>
      {/* </div> */}
    </div>
  );
}

function _ContentNode({ data }: { data: Record<string, any> }) {
  const Component = data.href ? Link : 'div';

  return (
    <Component href={data.href as Url}>
      <div className="px-4 py-2 bg-white border-2 border-yellow-500 rounded-md shadow-md nodrag dark:bg-black">
        <div className="flex items-center justify-center text-xs font-medium text-black rounded-full dark:text-white">
          {data.label}{' '}
          {data.href ? (
            <ExternalLink className="w-[14px] h-[14px] ml-2" />
          ) : null}
        </div>
        <Handle className="hidden" position={Position.Top} type="target" />
        <Handle className="hidden" position={Position.Bottom} type="source" />
      </div>
    </Component>
  );
}

export const GroupNode = memo(_GroupNode);
export const ContentNode = memo(_ContentNode);
