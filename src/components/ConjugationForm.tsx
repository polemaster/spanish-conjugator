import { FormEvent, useState } from "react";
import useLoadVerbs from "../hooks/useLoadVerbs";
import getRandomVerb from "../utils/getRandomVerb";
import FeedbackMessage from "./FeedbackMessage";
import VerbInputForm from "./VerbInputForm";
import useRandomConjugation from "../hooks/useRandomConjugation";

export default function ConjugationForm() {
  const { verbs, verbToConjugate, setVerbToConjugate, loading, error } =
    useLoadVerbs("/data/conjugated_verbs.csv");
  const [spanishVerb, setSpanishVerb] = useState("");
  const [answer, setAnswer] = useState("");
  const [correctVerb, setCorrectVerb] = useState<string | undefined>("");
  const { mood, tense, person, setRandomConjugation } = useRandomConjugation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(verbs["abandonar"]);

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
    <div className="conjugation">
      <FeedbackMessage messageType={answer} correctVerb={correctVerb} />
      <VerbInputForm
        value={spanishVerb}
        onChange={setSpanishVerb}
        onSubmit={handleSubmit}
        prompt={
          <>
            {JSON.stringify(person) + " " + mood + " " + tense + " "}
            <strong>{verbToConjugate.infinitive}</strong> <br />(
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
