import { Mood } from "../models/Mood";

/**
  Returns random mood and tense (in the same form as in /src/constants/tenses.ts)
  Example 1: { "indicative", "Present" }
  Example 2: { "imperative", "Affirmative" }
 */
export const getRandomTense = (
  selectedTenses: Record<Mood, string[]>,
): { mood: Mood; tense: string } | null => {
  const allTenses: { mood: Mood; tense: string }[] = [];

  for (const mood in selectedTenses) {
    const tenses = selectedTenses[mood as Mood];
    tenses.forEach((tense) => {
      allTenses.push({ mood: mood as Mood, tense });
    });
  }

  if (allTenses.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * allTenses.length);
  return allTenses[randomIndex];
};
