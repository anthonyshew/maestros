import React from "react";

export interface TwoColumnsProps {
  items: React.ReactNode[];
}

export const TwoColumns = ({ items }: TwoColumnsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
      {items.map((item, index) => (
        <React.Fragment key={index}>{item}</React.Fragment>
      ))}
    </div>
  );
};
