// hooks/useLoadVerbs.ts
import { useEffect, useState } from "react";
import loadVerbs from "../services/data/loadVerbs";
import Verb from "../models/Verb";
import getRandomVerb from "../utils/getRandomVerb";

function useLoadVerbs(path: string) {
  const [verbs, setVerbs] = useState<Record<string, Verb>>({});
  const [verbToConjugate, setVerbToConjugate] = useState<Verb | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadVerbs(path)
      .then((loadedVerbs) => {
        setVerbs(loadedVerbs);
        setVerbToConjugate(getRandomVerb(loadedVerbs));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [path]);

  return { verbs, verbToConjugate, setVerbToConjugate, loading, error };
}

export default useLoadVerbs;
