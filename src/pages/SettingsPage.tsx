import TenseGroup from "../components/TenseGroup";
import { allMoods } from "../models";
import PersonSelector from "../components/PersonSelector";
import PopularVerbsSelector from "../components/PopularVerbsSelector";

export default function SettingsPage() {
  return (
    <main>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Settings</h1>
        <div className="settings-box">
          <h2 className="text-xl font-bold mb-2">Select moods and tenses</h2>
          {allMoods.map((mood) => (
            <TenseGroup key={mood} mood={mood} />
          ))}
        </div>
        <PersonSelector />
        <PopularVerbsSelector />
      </div>
    </main>
  );
}
