import React, { memo, ReactNode } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

export type TurboNodeData = {
  id: string;
  title: string;
  icon?: ReactNode;
  subline?: string;
};

export default memo(
  ({ data, sourcePosition, targetPosition }: NodeProps<TurboNodeData>) => {
    return (
      <>
        <div id={data.id} className="wrapper gradient">
          <div id={data.id} className="inner">
            <div id={data.id} className="body">
              {data.icon && <div className="icon">{data.icon}</div>}
              <div>
                <div className="title">{data.title}</div>
                {data.subline && <div className="subline">{data.subline}</div>}
              </div>
            </div>
            <Handle type="target" position={sourcePosition!} />
            <Handle type="source" position={targetPosition!} />{' '}
          </div>
        </div>
      </>
    );
  },
);
