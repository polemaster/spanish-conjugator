import { Settings } from "../contexts";

/*
  Available moods: /src/models/Mood.ts
  Available tenses: /src/constants/tenses.ts (English ones)
*/
export const defaultSettings: Settings = {
  selectedTenses: {
    Indicative: ["Present", "Preterite", "Imperfect"],
    Subjunctive: [],
    Imperative: [],
    Other: [],
  },
  selectedPersons: [
    { number: "singular", person: ["first", "second", "third"] },
    { number: "plural", person: ["first", "third"] },
  ],
  numberOfTopVerbs: 50,
};
