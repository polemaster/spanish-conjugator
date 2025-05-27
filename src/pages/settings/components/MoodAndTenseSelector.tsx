import { allMoods, Mood } from "models";
import { SettingsBoxTitle, TenseGroup } from ".";

export function MoodAndTenseSelector() {
  return (
    <div className="settings-box">
      <SettingsBoxTitle>Select moods and tenses</SettingsBoxTitle>
      {allMoods.map((mood: Mood) => (
        <TenseGroup key={mood} mood={mood} />
      ))}
    </div>
  );
}
