import { Mood } from "../models/Mood";

/*
Convert mood and tense from settings format to verbs format
Example 1: { "indicative", "Present" } -> { "indicative", "present" }
Example 2: { "imperative", "Affirmative" } -> { "imperative affirmative", "present" }
 */
export default function parseTense(
  mood: Mood,
  tense: string,
): [string, string] {
  let new_mood: string = mood;
  tense = tense.toLowerCase();
  if (mood === "imperative") {
    new_mood = mood + " " + tense;
    tense = "present";
  }
  if (mood === "other") {
    if (tense === "past participle") new_mood = "pastParticiple";
  }
  return [new_mood, tense];
}
