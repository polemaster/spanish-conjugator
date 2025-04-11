import { FormEvent, useEffect, useState } from "react";
import useLoadVerbs from "../hooks/useLoadVerbs";
import getRandomVerb from "../utils/getRandomVerb";
import Verb from "../models/Verb";
import FeedbackMessage from "./FeedbackMessage";
import VerbInputForm from "./VerbInputForm";

export default function ConjugationForm() {
  const { verbs, loading, error } = useLoadVerbs("/data/conjugated_verbs.csv");
  const [spanishVerb, setSpanishVerb] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [correctVerb, setCorrectVerb] = useState<string | undefined>("");
  const [verbToConjugate, setVerbToConjugate] = useState<Verb | null>(null);

  // set new random verb once verbs are loaded
  useEffect(() => {
    if (!loading && Object.keys(verbs).length > 0) {
      setVerbToConjugate(getRandomVerb(verbs));
    }
  }, [loading, verbs]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const expected =
      verbToConjugate?.conjugations.indicative.present.singular?.first;

    if (spanishVerb === expected) {
      setIsCorrect(true);
      setIsWrong(false);
      setCorrectVerb(expected);
      setVerbToConjugate(getRandomVerb(verbs));
      setSpanishVerb("");
    } else {
      setIsWrong(true);
      setIsCorrect(false);
      setCorrectVerb(expected);
    }
  };

  if (error) return <div>Error loading verbs: {error}</div>;
  if (loading || !verbToConjugate) return <div>Loading verbs...</div>;

  return (
    <div className="conjugation">
      <FeedbackMessage
        isCorrect={isCorrect}
        isWrong={isWrong}
        correctVerb={correctVerb}
      />
      <VerbInputForm
        value={spanishVerb}
        onChange={setSpanishVerb}
        onSubmit={handleSubmit}
        prompt={
          <>
            Type 1st person sing. conjugation of{" "}
            <strong>{verbToConjugate.infinitive}</strong> (
            {verbToConjugate.english})
          </>
        }
      />
      <p className="text-center mt-4 text-gray-600">
        Number of verbs loaded: {Object.keys(verbs).length}
      </p>
    </div>
  );
}
