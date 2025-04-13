import { FormEvent, useState } from "react";
import useLoadVerbs from "../hooks/useLoadVerbs";
import getRandomVerb from "../utils/getRandomVerb";
import FeedbackMessage from "./FeedbackMessage";
import VerbInputForm from "./VerbInputForm";
import useRandomConjugation from "../hooks/useRandomConjugation";
import { getPronounKey, pronounMap } from "../constants/pronouns";
import { useFeedbackMessage } from "../hooks/useFeedbackMessageEffect";

export default function ConjugationForm() {
  const [spanishVerb, setSpanishVerb] = useState("");
  const { verbs, verbToConjugate, setVerbToConjugate, loading, error } =
    useLoadVerbs("/data/conjugated_verbs.csv");
  const { mood, tense, person, setRandomConjugation } = useRandomConjugation();
  const { answer, setAnswer, correctVerb, setCorrectVerb, showFeedback } =
    useFeedbackMessage();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const expected =
      verbToConjugate?.conjugations[mood][tense][person.number]?.[
        person.person
      ];

    if (spanishVerb === expected) {
      setAnswer("correct");
      setVerbToConjugate(getRandomVerb(verbs));
      setRandomConjugation();
      setSpanishVerb("");
    } else {
      setAnswer("wrong");
      setCorrectVerb(expected);
    }
  };

  if (error) return <div>Error loading verbs: {error}</div>;
  if (loading || !verbToConjugate) return <div>Loading verbs...</div>;

  return (
    <div className="conjugation max-w-md mx-auto p-4 pt-16 relative">
      <FeedbackMessage
        messageType={answer}
        correctVerb={correctVerb}
        isVisible={showFeedback}
      />
      <div className="mt-4">
        <VerbInputForm
          value={spanishVerb}
          onChange={setSpanishVerb}
          onSubmit={handleSubmit}
          prompt={
            <>
              <div className="text-center text-medium mb-4">
                {mood === "indicative" ? "" : mood} {tense}
              </div>
              <div className="text-center text-lg">
                {pronounMap[getPronounKey(person)]}{" "}
                <strong>{verbToConjugate.infinitive}</strong>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
}
