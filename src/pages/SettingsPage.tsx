import {
  useSettings,
  Mood,
  Person,
  Settings,
} from "../contexts/SettingsContext";
import { useState } from "react";

const allMoods: Mood[] = ["indicative", "subjunctive", "imperative"];
const allTenses: Record<Mood, string[]> = {
  indicative: ["present", "preterite", "imperfect"],
  subjunctive: ["present", "imperfect"],
  imperative: ["affirmative", "negative"],
};

const allPersons: Person[] = ["first", "second", "third"];

function SettingsPage() {
  const { settings, updateSettings } = useSettings();
  const [localSettings, setLocalSettings] = useState<Settings>(settings);

  const toggleTense = (mood: Mood, tense: string) => {
    const current = localSettings.moods[mood] || [];
    const updated = current.includes(tense)
      ? current.filter((t) => t !== tense)
      : [...current, tense];
    setLocalSettings({
      ...localSettings,
      moods: { ...localSettings.moods, [mood]: updated },
    });
  };

  const togglePerson = (person: Person) => {
    const updated = localSettings.persons.includes(person)
      ? localSettings.persons.filter((p) => p !== person)
      : [...localSettings.persons, person];
    setLocalSettings({ ...localSettings, persons: updated });
  };

  const saveSettings = () => {
    updateSettings(localSettings);
    alert("Settings saved!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="space-y-4">
        {allMoods.map((mood) => (
          <div key={mood}>
            <h2 className="text-lg font-semibold capitalize">{mood}</h2>
            <div className="flex gap-4 flex-wrap">
              {allTenses[mood].map((tense) => (
                <label key={tense} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={localSettings.moods[mood]?.includes(tense)}
                    onChange={() => toggleTense(mood, tense)}
                  />
                  {tense}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-lg font-semibold">Persons</h2>
        <div className="flex gap-4">
          {allPersons.map((person) => (
            <label key={person} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={localSettings.persons.includes(person)}
                onChange={() => togglePerson(person)}
              />
              {person}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={localSettings.topVerbsOnly}
            onChange={(e) =>
              setLocalSettings({
                ...localSettings,
                topVerbsOnly: e.target.checked,
              })
            }
          />
          Use only most common verbs
        </label>
        {localSettings.topVerbsOnly && (
          <input
            type="number"
            min={1}
            value={localSettings.topVerbLimit}
            onChange={(e) =>
              setLocalSettings({
                ...localSettings,
                topVerbLimit: Number(e.target.value),
              })
            }
            className="ml-4 px-2 py-1 border border-gray-300 rounded w-20"
          />
        )}
      </div>

      <button
        onClick={saveSettings}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        Save Settings
      </button>
    </div>
  );
}

export default SettingsPage;
