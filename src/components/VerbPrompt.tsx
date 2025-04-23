import { getPronounKey, pronounMap } from "../constants/pronouns";
import { Mood } from "../models/Mood";
import { Person } from "../models/Person";
import Tense from "../models/Tense";
import Verb from "../models/Verb";

interface Props {
  mood: Mood;
  tense: Tense;
  person: Person;
  verbToConjugate: Verb;
}

// Mood & tense are in the same format as in /src/constants/tenses.ts
function VerbPrompt({ mood, tense, person, verbToConjugate }: Props) {
  let newMood: string = mood;
  let newTense = tense.english;

  if (mood === "Imperative" && tense.english === "Present") newTense = "";
  if (mood === "Other" || mood === "Indicative") newMood = "";
  return (
    <>
      <div className="text-center text-medium mb-4">
        {newMood} {newTense}
      </div>
      <div className="text-center text-lg">
        {mood !== "Other" ? pronounMap[getPronounKey(person)] + " " : ""}
        <strong>{verbToConjugate.infinitive}</strong>
      </div>
    </>
  );
}

export default VerbPrompt;
