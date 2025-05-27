import { getPronounKey, pronounMap } from "data";
import { VerbConjugator } from "pages/home/services";

interface Props {
  verbConjugator: VerbConjugator;
}

export function VerbPrompt({ verbConjugator }: Props) {
  if (!verbConjugator.getConjugatedVerb())
    return <em>verbToConjugate is null in VerbPrompt</em>;

  // "mood" and "tense" are in Mood and Tense format here
  const mood = verbConjugator.getDisplay().mood;
  const tense = verbConjugator.getDisplay().tense;

  // We need to change the display of the default Mood and Tense to be more user-friendly
  let newMood: string = mood;
  const newTense = tense.english;

  // "Other" mood is not displayed because gerund and past participle don't have mood
  // "Indicative" mood is a default mood so that's why it's also not displayed
  if (mood === "Other" || mood === "Indicative") newMood = "";

  return (
    <>
      <div className="text-medium mb-4">
        {newMood} {newTense}
      </div>
      <div className="text-lg">
        {mood !== "Other"
          ? pronounMap[getPronounKey(verbConjugator.getPerson())] + " "
          : ""}
        <strong>{verbConjugator.getCurrentVerb()?.infinitive}</strong>
      </div>
    </>
  );
}
