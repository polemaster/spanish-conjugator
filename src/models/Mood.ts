/*
When adding new moods, the parsing (/src/utils/parseTense.ts) should be adjusted too.
*/
export type Mood = "indicative" | "subjunctive" | "imperative" | "other";

export const allMoods: Mood[] = [
  "indicative",
  "subjunctive",
  "imperative",
  "other",
];
