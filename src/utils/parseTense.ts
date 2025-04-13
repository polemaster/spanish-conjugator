export default function parseTense(key: string): [string, string] {
  let [mood, tense] = key.split(".");
  tense = tense.toLowerCase();
  if (mood == "imperative") {
    mood = mood + " " + tense;
    tense = "present";
  }
  return [mood, tense];
}
