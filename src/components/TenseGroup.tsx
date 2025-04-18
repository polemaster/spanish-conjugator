import { Mood } from "../models/Mood";
import { tenseData } from "../constants/tenses";
import TenseRow from "./TenseRow";

export default function TenseGroup({ mood }: { mood: Mood }) {
  const tenses = tenseData[mood];

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold capitalize mb-2">{mood}</h2>
      <table className="w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
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
  );
}
