import { Mood } from "../models/Mood";

/**
  Returns random mood and tense (in the same format as in /src/constants/tenses.ts)
  Example 1: { "Indicative", "Present" }
  Example 2: { "Imperative", "Affirmative" }
  Example 3: { "Other", "Gerund" }
 */
export const getRandomTense = (
  selectedTenses: Record<Mood, string[]>,
): { mood: Mood; tense: string } | null => {
  // Map object of type Record<Mood, string[]> to array of type { mood: Mood; tense: string }[]
  const allTenses = Object.entries(selectedTenses).flatMap(([mood, tenses]) =>
    tenses.map((tense) => ({ mood: mood as Mood, tense })),
  );

  if (allTenses.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * allTenses.length);
  return allTenses[randomIndex];
};
