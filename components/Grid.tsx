import React from "react";

export interface GridProps {
  items: React.ReactNode[];
}

export const Grid = ({ items }: GridProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item, index) => (
        <React.Fragment key={index}>{item}</React.Fragment>
      ))}
    </div>
  );
};
