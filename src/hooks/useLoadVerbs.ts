import { useEffect, useState } from "react";
import loadVerbs from "../services/data/loadVerbs";
import Verb from "../models/Verb";
import getRandomVerb from "../utils/getRandomVerb";
import loadTopVerbs from "../services/data/loadTopVerbs";

function useLoadVerbs(verbsPath: string, topVerbsPath: string) {
  const [verbs, setVerbs] = useState<Record<string, Verb>>({});
  const [topVerbs, setTopVerbs] = useState<string[]>([]);
  const [verbToConjugate, setVerbToConjugate] = useState<Verb | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadVerbs(verbsPath)
      .then((loadedVerbs) => {
        setVerbs(loadedVerbs);
        setVerbToConjugate(getRandomVerb(loadedVerbs));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [verbsPath]);

  useEffect(() => {
    loadTopVerbs(topVerbsPath)
      .then((loadedVerbs) => {
        setTopVerbs(loadedVerbs);
        // setVerbToConjugate(getRandomVerb(loadedVerbs));
        // setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        // setLoading(false);
      });
  }, [topVerbsPath]);

  return {
    verbs,
    verbToConjugate,
    setVerbToConjugate,
    loading,
    error,
    topVerbs,
  };
}

export default useLoadVerbs;
