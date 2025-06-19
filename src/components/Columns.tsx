import React, { ReactElement } from "react";

type ColumnFormat = "upper" | "italic" | undefined;

interface ColumnProps {
  format?: ColumnFormat;
  children: React.ReactNode;
}

interface ColumnsProps {
  justify?: "left" | "center" | "right";
  children: ReactElement<ColumnProps> | ReactElement<ColumnProps>[];
}

/**
 * Column is a placeholder component to declare column content and formatting.
 * It does not render anything by itself; its data is consumed by Columns.
 */
export const Column: React.FC<ColumnProps> = () => null;

/**
 * Columns renders its Column children into a table layout where each row
 * has the same height across all columns. Formatting (uppercase, italic)
 * is applied per column.
 */
export const Columns: React.FC<ColumnsProps> = ({
  justify = "left",
  children,
}) => {
  // Turn whatever was passed into a flat array of ReactElement<ColumnProps>
  const columnElements = React.Children.toArray(children)
    .filter(React.isValidElement)
    .map((el) => el as ReactElement<ColumnProps>);

  if (columnElements.length === 0) {
    return null;
  }

  // Extract cells and formats from each Column
  const columns = columnElements.map((child) => {
    const format = child.props.format;
    const cells = React.Children.toArray(child.props.children);
    return { format, cells };
  });

  // Ensure all columns have the same number of rows
  const rowCount = columns[0].cells.length;
  const allSameLength = columns.every((col) => col.cells.length === rowCount);
  if (!allSameLength) {
    console.error(
      "All Column components must have the same number of children (rows).",
    );
  }

  // Map justify prop to Tailwind text alignment classes
  const alignMap = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };
  const alignClass = "flex " + alignMap[justify];

  return (
    <div className={`table-wrapper ${alignClass}`}>
      <table className="table-base ">
        <tbody>
          {Array.from({ length: rowCount }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map(({ format, cells }, colIndex) => {
                const cell = cells[rowIndex] as ReactElement<{
                  children: React.ReactNode;
                }>;

                // Determine formatting classes
                let formatClass = "";
                if (format === "upper") formatClass = "uppercase text-sm";
                else if (format === "italic") formatClass = "italic";
                else if (format === "bold") formatClass = "font-bold";

                return (
                  <td key={colIndex} className={`px-6 ${formatClass}`}>
                    {cell.props.children}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
