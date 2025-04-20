import { FormEvent, useState } from "react";
import useLoadVerbs from "../hooks/useLoadVerbs";
import getRandomVerb from "../utils/getRandomVerb";
import FeedbackMessage from "./FeedbackMessage";
import VerbInputForm from "./VerbInputForm";
import useRandomConjugation from "../hooks/useRandomConjugation";
import { useFeedbackMessage } from "../hooks/useFeedbackMessageEffect";
import VerbPrompt from "./VerbPrompt";

export default function ConjugationForm() {
  const [spanishVerb, setSpanishVerb] = useState("");
  const { verbToConjugate, setVerbToConjugate, loading, error, topVerbs } =
    useLoadVerbs("/data/conjugated_verbs.csv", "/data/verbs_by_frequency2.csv");
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
      setVerbToConjugate(getRandomVerb(topVerbs));
      setRandomConjugation();
      setSpanishVerb("");
      console.log("all verbs: " + Object.keys(topVerbs));
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
      <VerbInputForm
        value={spanishVerb}
        onChange={setSpanishVerb}
        onSubmit={handleSubmit}
      >
        <VerbPrompt
          mood={mood}
          tense={tense}
          person={person}
          verbToConjugate={verbToConjugate}
        />
      </VerbInputForm>
    </div>
  );
}
