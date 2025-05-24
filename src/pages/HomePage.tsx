import { FormEvent, useState } from "react";
import FeedbackMessage from "../components/FeedbackMessage";
import VerbInputForm from "../components/VerbInputForm";
import VerbPrompt from "../components/VerbPrompt";
import { useFeedbackMessage, useLoadVerbs, useVerbConjugator } from "../hooks";
import ScoreDisplay from "../components/ScoreDisplay";

export default function HomePage() {
  const [userInputVerb, setUserInputVerb] = useState("");
  const { loading, error, topVerbs } = useLoadVerbs(
    "/data/conjugated_verbs.csv",
    "/data/verbs_by_frequency2.csv",
  );
  const { answer, setAnswer, correctVerb, setCorrectVerb, showFeedback } =
    useFeedbackMessage();
  const [correctVerbsScore, setCorrectVerbsScore] = useState(0);
  const [allVerbsScore, setAllVerbsScore] = useState(0);

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
      setCorrectVerbsScore(correctVerbsScore + 1);
    } else {
      setAnswer("wrong");
      setCorrectVerb(expectedVerb);
    }

    setAllVerbsScore(allVerbsScore + 1);
  };

  return (
    <main>
      <div className="mx-auto w-90">
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
      </div>
    </main>
  );
}
