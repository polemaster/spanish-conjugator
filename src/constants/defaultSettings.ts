import { Settings } from "../contexts/SettingsContext";

/*
  Available moods: /src/models/Mood.ts
  Available tenses: /src/constants/tenses.ts (English ones)
*/
const defaultSettings: Settings = {
  selectedTenses: {
    indicative: ["Present", "Preterite", "Imperfect"],
    subjunctive: [],
    imperative: [],
    other: [],
  },
  selectedPersons: [
    { number: "singular", person: ["first", "second", "third"] },
    { number: "plural", person: ["first", "third"] },
  ],
  numberOfTopVerbs: 50,
};

export default defaultSettings;
