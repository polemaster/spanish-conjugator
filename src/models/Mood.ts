/*
When adding new moods, the parsing (/src/pages/home/utils/convertTense.ts) should be adjusted too.
*/
export type Mood = "Indicative" | "Subjunctive" | "Imperative" | "Other";

export const allMoods: Mood[] = [
  "Indicative",
  "Subjunctive",
  "Imperative",
  "Other",
];
