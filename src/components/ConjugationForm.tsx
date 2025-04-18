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
  const {
    verbs,
    verbToConjugate,
    setVerbToConjugate,
    loading,
    error,
    topVerbs,
  } = useLoadVerbs(
    "/data/conjugated_verbs.csv",
    "/data/verbs_by_frequency2.csv",
  );
  const { mood, tense, person, setRandomConjugation } = useRandomConjugation();
  const { answer, setAnswer, correctVerb, setCorrectVerb, showFeedback } =
    useFeedbackMessage();

  // Step 1: Create list of cleaned verb infinitives
  const allInfinitives = Object.keys(verbs).map((infinitive) => {
    return infinitive.endsWith("se") ? infinitive.slice(0, -2) : infinitive;
  });

  // Step 2: Remove duplicates after cleaning (optional, but safe)
  const uniqueInfinitives = Array.from(new Set(allInfinitives));

  // Step 3: Compare with topVerbs
  const notInTopVerbs = uniqueInfinitives.filter(
    (verb) => !topVerbs.includes(verb),
  );
  console.log(notInTopVerbs);

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
