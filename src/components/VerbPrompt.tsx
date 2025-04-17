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
  return (
    <>
      <div className="text-center text-medium mb-4">
        {mood === "indicative" ? "" : mood} {tense}
      </div>
      <div className="text-center text-lg">
        {pronounMap[getPronounKey(person)]}{" "}
        <strong>{verbToConjugate.infinitive}</strong>
      </div>
    </>
  );
}

export default VerbPrompt;
