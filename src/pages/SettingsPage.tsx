import TenseGroup from "../components/TenseGroup";
import { Mood } from "../models/Mood";
import PersonSelector from "../components/PersonSelector";

const moods: Mood[] = ["indicative", "subjunctive", "imperative"];

export default function SettingsPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <h2 className="text-lg font-semibold mb-2">Select moods and tenses</h2>
      {moods.map((mood) => (
        <TenseGroup key={mood} mood={mood} />
      ))}
      <PersonSelector />
    </div>
  );
}
