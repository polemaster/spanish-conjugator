import React, { useState } from "react";

type SizeOption = "small" | "medium" | "large";

type ExpandableSectionProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  size?: SizeOption;
};

export const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  children,
  size = "medium",
}) => {
  const [open, setOpen] = useState(false);

  // Map size to heading level
  const sizeToHeading: Record<SizeOption, React.ElementType> = {
    large: "h2",
    medium: "h3",
    small: "h4",
  };

  const HeadingTag = sizeToHeading[size];

  return (
    <div className="my-2">
      <span
        className="inline-flex items-center gap-x-2 cursor-pointer select-none"
        onClick={() => setOpen(!open)}
      >
        <div className="transform transition-transform duration-200">
          {open ? "▾" : "▸"}
        </div>
        <HeadingTag className="m-0 font-normal">{title}</HeadingTag>
      </span>

      {open && (
        <div className="my-3 pl-6 border-l border-neutral-300">{children}</div>
      )}
    </div>
  );
};
