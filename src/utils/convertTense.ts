import { Mood } from "../models/Mood";
import { Tense } from "../models/Tense";

/*
Convert mood and tense from display format to verbs format
Example 1: { "Indicative", "Present" } -> { "indicative", "present" }
Example 2: { "Imperative", "Affirmative" } -> { "imperative affirmative", "present" }
Example 3: { "Other", "Past Participle" } -> { "other", "pastParticiple" }
 */
export function convertTense(mood: Mood, tense: Tense): [string, string] {
  let newMood: string = mood.toLowerCase();
  let newTense = tense.english.toLowerCase();

  if (mood === "Imperative") {
    newMood = newMood + " " + newTense;
    newTense = "present";
  }
  if (mood === "Other") {
    if (tense.english === "Past Participle") newTense = "pastParticiple";
  }
  return [newMood, newTense];
}
