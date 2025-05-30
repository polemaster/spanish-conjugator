import { Mood } from "models";
import { tenseData } from "data";
import { TenseRow } from ".";

export function TenseGroup({ mood }: { mood: Mood }) {
  const tenses = tenseData[mood];

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">{mood}</h2>
      <div className="rounded-lg overflow-hidden border border-neutral-400">
        <table className="w-full text-left">
          <thead className="bg-neutral-500">
            <tr>
              <th className="p-2 w-10"></th>
              <th className="p-2">Spanish</th>
              <th className="p-2">English</th>
            </tr>
          </thead>
          <tbody>
            {tenses.map((tense) => (
              <TenseRow key={tense.english} tense={tense} mood={mood} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
