import React, { useState } from "react";

type ExpandableSectionProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  children,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-2">
      <span
        className="inline-flex items-center gap-x-2 cursor-pointer select-none"
        onClick={() => setOpen(!open)}
      >
        <div className="transform transition-transform duration-200">
          {open ? "▾" : "▸"}
        </div>
        <h3 className="m-0">{title}</h3>
      </span>

      {open && (
        <div className="my-3 pl-6 border-l border-neutral-300">{children}</div>
      )}
    </div>
  );
};
