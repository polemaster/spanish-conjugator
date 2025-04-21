import { getPronounKey, pronounMap } from "../constants/pronouns";
import { Person } from "../models/Person";
import Verb from "../models/Verb";

interface Props {
  mood: string;
  tense: string;
  person: Person;
  verbToConjugate: Verb;
}

function VerbPrompt({ mood, tense, person, verbToConjugate }: Props) {
  let new_mood = mood;
  if (mood === "imperative affirmative" && tense === "present") tense = "";
  if (mood === "other" || mood === "indicative") new_mood = "";
  return (
    <>
      <div className="text-center text-medium mb-4">
        {new_mood} {tense}
      </div>
      <div className="text-center text-lg">
        {mood !== "other" ? pronounMap[getPronounKey(person)] + " " : ""}
        <strong>{verbToConjugate.infinitive}</strong>
      </div>
    </>
  );
}

export default VerbPrompt;
