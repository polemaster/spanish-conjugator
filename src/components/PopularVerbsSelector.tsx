import { useState } from "react";
import { useSettingsContext } from "../contexts";
import PopularVerbsSwitch from "./PopularVerbsSwitch";

function PopularVerbsSelector() {
  const { settings, setTopNVerbs } = useSettingsContext();
  const MIN_VERBS = 1;
  const MAX_VERBS = 1000;

  const [topNInput, setTopNInput] = useState(
    settings.numberOfTopVerbs.toString(),
  );

  const isUsingAllVerbs = settings.numberOfTopVerbs === MAX_VERBS;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopNInput(e.target.value);
  };

  const handleBlur = () => {
    const raw = parseInt(topNInput, 10);
    const new_value = isNaN(raw)
      ? settings.numberOfTopVerbs
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
    <div className="settings-box ">
      <h2 className="text-xl font-bold mb-2">
        Select how many most used verbs you want to learn
      </h2>
      <div className="flex items-center justify-center gap-4">
        <input
          value={topNInput}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isUsingAllVerbs}
          className="border border-neutral-400 rounded w-32 disabled:bg-neutral-400 my-input text-base"
        />
        <PopularVerbsSwitch
          checked={isUsingAllVerbs}
          onChange={handleSwitchToggle}
        />
        <span>Use all verbs</span>
      </div>
      <p className="text-sm text-neutral-300 mt-2">
        Enter a number <em>n</em> between {MIN_VERBS} and {MAX_VERBS} if you
        want to learn only the <em>n</em> most popular verbs.
      </p>
    </div>
  );
}

export default PopularVerbsSelector;
