import { useState } from "react";
import { useSettingsContext } from "../contexts/SettingsContext";
import PopularVerbsSwitch from "./PopularVerbsSwitch";
import defaultSettings from "../constants/defaultSettings";

function PopularVerbsSelector() {
  const { settings, setTopNVerbs } = useSettingsContext();
  const MIN_VERBS = 1;
  const MAX_VERBS = 1000;

  const [topNInput, setTopNInput] = useState(settings.topNVerbs.toString());

  const isUsingAllVerbs = settings.topNVerbs === MAX_VERBS;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopNInput(e.target.value);
  };

  const handleBlur = () => {
    const raw = parseInt(topNInput, 10);
    const new_value = isNaN(raw)
      ? settings.topNVerbs
      : Math.max(MIN_VERBS, Math.min(raw, MAX_VERBS));

    setTopNVerbs(new_value);
    setTopNInput(new_value.toString());
  };

  const handleSwitchToggle = (checked: boolean) => {
    if (checked) {
      setTopNVerbs(MAX_VERBS);
      setTopNInput(MAX_VERBS.toString());
    } else {
      const n = 50 < MAX_VERBS ? 50 : 1;
      setTopNVerbs(n);
      setTopNInput(n.toString());
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-2">
        Select how many most used verbs you want to learn
      </h2>
      <div className="flex items-center gap-4">
        <input
          value={topNInput}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isUsingAllVerbs}
          className="border border-gray-300 rounded p-2 w-32 disabled:bg-gray-100"
        />
        <PopularVerbsSwitch
          checked={isUsingAllVerbs}
          onChange={handleSwitchToggle}
        />
        <span>Use all verbs</span>
      </div>
      <p className="text-sm text-gray-500 mt-1">
        Enter a number <em>n</em> from {MIN_VERBS} to {MAX_VERBS} if you want to
        learn only the <em>n</em> most popular verbs.
      </p>
    </div>
  );
}

export default PopularVerbsSelector;
