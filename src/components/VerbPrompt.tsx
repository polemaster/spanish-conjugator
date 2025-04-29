import { getPronounKey, pronounMap } from "../data";
import { VerbConjugator } from "../services";

interface Props {
  verbConjugator: VerbConjugator;
}

function VerbPrompt({ verbConjugator }: Props) {
  if (!verbConjugator.getConjugatedVerb())
    return <em>verbToConjugate is null in VerbPrompt</em>;

  const mood = verbConjugator.getDisplay().mood;
  const tense = verbConjugator.getDisplay().tense;

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
        {mood !== "Other"
          ? pronounMap[getPronounKey(verbConjugator.getPerson())] + " "
          : ""}
        <strong>{verbConjugator.getCurrentVerb()?.infinitive}</strong>
      </div>
    </>
  );
}

export default VerbPrompt;
