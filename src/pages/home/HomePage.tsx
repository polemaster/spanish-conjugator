import { FormEvent, useState } from "react";
import { useFeedbackMessage, useVerbConjugator } from "./hooks";
import {
  FeedbackMessage,
  ScoreDisplay,
  VerbInputForm,
  VerbPrompt,
} from "./components";
import { useVerbsContext } from "contexts/VerbsContext";

export function HomePage() {
  const [userInputVerb, setUserInputVerb] = useState("");
  const { allVerbs, topVerbs, isLoading: loading, error } = useVerbsContext();

  const { answer, setAnswer, correctVerb, setCorrectVerb, showFeedback } =
    useFeedbackMessage();
  const [correctVerbsScore, setCorrectVerbsScore] = useState(0);
  const [allVerbsScore, setAllVerbsScore] = useState(0);

  const verbConjugator = useVerbConjugator({ allVerbs, topVerbs });

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
      setCorrectVerbsScore(correctVerbsScore + 1);
    } else {
      setAnswer("wrong");
      setCorrectVerb(expectedVerb);
    }

    setAllVerbsScore(allVerbsScore + 1);
  };

  return (
    <main className="mx-auto w-90 mt-25">
      <FeedbackMessage
        messageType={answer}
        correctVerb={correctVerb}
        isVisible={showFeedback}
      />
      <ScoreDisplay
        correctVerbsScore={correctVerbsScore}
        allVerbsScore={allVerbsScore}
      />
      <VerbInputForm
        value={userInputVerb}
        onChange={setUserInputVerb}
        onSubmit={handleSubmit}
      >
        <VerbPrompt verbConjugator={verbConjugator} />
      </VerbInputForm>
    </main>
  );
}
