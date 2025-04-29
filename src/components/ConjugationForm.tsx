import { FormEvent, useState } from "react";
import FeedbackMessage from "./FeedbackMessage";
import VerbInputForm from "./VerbInputForm";
import VerbPrompt from "./VerbPrompt";
import { useFeedbackMessage, useLoadVerbs, useVerbConjugator } from "../hooks";

export default function ConjugationForm() {
  const [userInputVerb, setUserInputVerb] = useState("");
  const { loading, error, topVerbs } = useLoadVerbs(
    "/data/conjugated_verbs.csv",
    "/data/verbs_by_frequency2.csv",
  );
  const { answer, setAnswer, correctVerb, setCorrectVerb, showFeedback } =
    useFeedbackMessage();

  const verbConjugator = useVerbConjugator(topVerbs);

  if (error) return <div>Error loading verbs: {error}</div>;
  if (!verbConjugator || loading) return <div>Loading verbs...</div>;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const expectedVerb = verbConjugator.getConjugatedVerb();
    if (!expectedVerb) return;

    if (userInputVerb === expectedVerb) {
      setAnswer("correct");
      verbConjugator.setNewRandomConjugation();
      setUserInputVerb("");
    } else {
      setAnswer("wrong");
      setCorrectVerb(expectedVerb);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 pt-16 relative">
      <FeedbackMessage
        messageType={answer}
        correctVerb={correctVerb}
        isVisible={showFeedback}
      />
      <VerbInputForm
        value={userInputVerb}
        onChange={setUserInputVerb}
        onSubmit={handleSubmit}
      >
        <VerbPrompt verbConjugator={verbConjugator} />
      </VerbInputForm>
    </div>
  );
}
