import React from "react";

type TableProps<T extends object> = {
  data: T[];
  renderers?: Partial<{
    [K in keyof T]: (value: T[K], row: T) => React.ReactNode;
  }>;
};

export function Table<T extends object>({
  data,
  renderers = {},
}: TableProps<T>) {
  if (data.length === 0) {
    return <div className="">No data available.</div>;
  }

  const columnKeys = Object.keys(data[0]) as (keyof T)[];

  return (
    <div className="overflow-x-auto my-5">
      <table className="min-w-full text-sm text-left">
        <thead className="text-xs uppercase border-b">
          <tr>
            {columnKeys.map((key) => (
              <th key={String(key)} className="px-4 py-3">
                {String(key)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="">
              {columnKeys.map((key) => (
                <td key={String(key)} className="px-4 py-2">
                  {renderers[key]
                    ? renderers[key]!(row[key], row)
                    : (row[key] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
