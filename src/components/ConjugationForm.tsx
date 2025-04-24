// External libraries
import { FormEvent, useState } from "react";

// Components
import FeedbackMessage from "./FeedbackMessage";
import VerbInputForm from "./VerbInputForm";
import VerbPrompt from "./VerbPrompt";

// Hooks
import {
  useFeedbackMessage,
  useRandomConjugation,
  useLoadVerbs,
} from "../hooks";

// Utils
import { convertTense, getConjugation, getRandomVerb } from "../utils";

export default function ConjugationForm() {
  const [spanishVerb, setSpanishVerb] = useState("");
  const { verbToConjugate, setVerbToConjugate, loading, error, topVerbs } =
    useLoadVerbs("/data/conjugated_verbs.csv", "/data/verbs_by_frequency2.csv");
  const { moodDisplay, tenseDisplay, person, setRandomConjugation } =
    useRandomConjugation();
  const { answer, setAnswer, correctVerb, setCorrectVerb, showFeedback } =
    useFeedbackMessage();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!verbToConjugate) return;

    const [mood, tense] = convertTense(moodDisplay, tenseDisplay);
    const expectedVerb = getConjugation(verbToConjugate, mood, tense, person);

    // For debugging purposes
    if (!expectedVerb) {
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
    if (spanishVerb === expectedVerb) {
      setAnswer("correct");
      setVerbToConjugate(getRandomVerb(topVerbs));
      setRandomConjugation();
      setSpanishVerb("");
    } else {
      setAnswer("wrong");
      setCorrectVerb(expectedVerb);
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
          mood={moodDisplay}
          tense={tenseDisplay}
          person={person}
          verbToConjugate={verbToConjugate}
        />
      </VerbInputForm>
    </div>
  );
}
