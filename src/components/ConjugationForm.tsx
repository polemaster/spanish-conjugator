import { FormEvent, useState } from "react";
import useLoadVerbs from "../hooks/useLoadVerbs";
import getRandomVerb from "../utils/getRandomVerb";
import FeedbackMessage from "./FeedbackMessage";
import VerbInputForm from "./VerbInputForm";
import useRandomConjugation from "../hooks/useRandomConjugation";
import { useFeedbackMessage } from "../hooks/useFeedbackMessageEffect";
import VerbPrompt from "./VerbPrompt";
import getConjugation from "../utils/getConjugation";

export default function ConjugationForm() {
  const [spanishVerb, setSpanishVerb] = useState("");
  const { verbToConjugate, setVerbToConjugate, loading, error, topVerbs } =
    useLoadVerbs("/data/conjugated_verbs.csv", "/data/verbs_by_frequency2.csv");
  const { mood, tense, person, setRandomConjugation } = useRandomConjugation();
  const { answer, setAnswer, correctVerb, setCorrectVerb, showFeedback } =
    useFeedbackMessage();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!verbToConjugate) return;
    const expected = getConjugation(verbToConjugate, mood, tense, person);

    // For debugging purposes
    if (!expected) {
      console.log("expected verb is empty");
      console.log(
        "mood: " +
          mood +
          ", tense: " +
          tense +
          ", person: " +
          JSON.stringify(person),
      );
      console.log(verbToConjugate);
      console.log(verbToConjugate?.conjugations);
      console.log(verbToConjugate?.conjugations[mood]);
      console.log(verbToConjugate?.conjugations[mood][tense]);
      console.log(verbToConjugate?.conjugations[mood][tense][person.number]);
      console.log(
        verbToConjugate?.conjugations[mood][tense][person.number]?.[
          person.person
        ],
      );
    }
    if (spanishVerb === expected) {
      setAnswer("correct");
      setVerbToConjugate(getRandomVerb(topVerbs));
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
    <div className="max-w-md mx-auto p-4 pt-16 relative">
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
