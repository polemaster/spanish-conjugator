import { Settings } from "../contexts/SettingsContext";

const defaultSettings: Settings = {
  selectedTenses: [
    "indicative.Present",
    "indicative.Preterite",
    "indicative.Imperfect",
  ],
  selectedPersons: [
    { number: "singular", person: ["first", "second", "third"] },
    { number: "plural", person: ["first", "third"] },
  ],
};

export default defaultSettings;
