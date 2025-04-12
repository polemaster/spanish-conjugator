import { FormEvent, useState } from "react";
import useLoadVerbs from "../hooks/useLoadVerbs";
import getRandomVerb from "../utils/getRandomVerb";
import FeedbackMessage from "./FeedbackMessage";
import VerbInputForm from "./VerbInputForm";

export default function ConjugationForm() {
  const { verbs, verbToConjugate, setVerbToConjugate, loading, error } =
    useLoadVerbs("/data/conjugated_verbs.csv");
  const [spanishVerb, setSpanishVerb] = useState("");
  const [answer, setAnswer] = useState("");
  const [correctVerb, setCorrectVerb] = useState<string | undefined>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const expected =
      verbToConjugate?.conjugations.indicative.present.singular?.first;

    if (spanishVerb === expected) {
      setAnswer("correct");
      setVerbToConjugate(getRandomVerb(verbs));
      setSpanishVerb("");
    } else {
      setAnswer("wrong");
      setCorrectVerb(expected);
    }
  };

  if (error) return <div>Error loading verbs: {error}</div>;
  if (loading || !verbToConjugate) return <div>Loading verbs...</div>;

  return (
    <div className="conjugation">
      <FeedbackMessage messageType={answer} correctVerb={correctVerb} />
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
