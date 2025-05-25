import TenseGroup from "./TenseGroup";
import { allMoods } from "../models";
import SettingsBoxTitle from "./SettingsBoxTitle";

export default function MoodAndTenseSelector() {
  return (
    <div className="settings-box">
      <SettingsBoxTitle>Select moods and tenses</SettingsBoxTitle>
      {allMoods.map((mood) => (
        <TenseGroup key={mood} mood={mood} />
      ))}
    </div>
  );
}
