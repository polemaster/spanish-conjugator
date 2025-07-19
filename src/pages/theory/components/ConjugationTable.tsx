type ConjugationTableProps = {
  data: string[]; // Should have exactly 6 entries
  title?: string;
  persons?: string[];
  pronouns?: boolean;
};

// TO-DO: change to randomly select el ella Ud. and plural too
const defaultPersons = ["yo", "tú", "él", "nosotros", "vosotros", "ellos"];

export function ConjugationTable({
  title = "",
  data,
  persons = defaultPersons,
  pronouns = false,
}: ConjugationTableProps) {
  if (data.length !== 6 || persons.length !== 6) {
    console.warn(
      "ConjugationTable expects exactly 6 persons and 6 data entries.",
    );
    return <div className="text-red-500">Invalid conjugation data.</div>;
  }

  const leftSide = persons.slice(0, 3).map((person, i) => ({
    person,
    value: data[i],
  }));

  const rightSide = persons.slice(3).map((person, i) => ({
    person,
    value: data[i + 3],
  }));

  return (
    <div className="table-wrapper">
      <table className="table-base">
        <thead className={title ? "table-header" : "hidden"}>
          <tr>
            <th colSpan={4} className="table-th">
              {title}
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Empty row for space between headers and body */}
          <tr className="h-3">
            <td colSpan={4}></td>
          </tr>
          {leftSide.map((leftRow, i) => (
            <tr key={i} className="">
              {pronouns && <td className="table-td">{leftRow.person}</td>}
              <td className="table-td">{leftRow.value}</td>
              {pronouns && (
                <td className="table-td border-l border-neutral-400">
                  {rightSide[i].person}
                </td>
              )}
              <td className="table-td">{rightSide[i].value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
