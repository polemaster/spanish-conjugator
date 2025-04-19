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

  // Problem - verbs should be loaded before this
  useEffect(() => {
    loadTopVerbs(topVerbsPath)
      .then((loadedVerbs) => {
        // Is it deep cloning??? TODO
        const infinitives = Object.keys(verbs).map((infinitive) => {
          return infinitive.endsWith("se")
            ? infinitive.slice(0, -2)
            : infinitive;
        });

        const uniqueInfinitives = Array.from(new Set(infinitives));

        const correctInfinitives = uniqueInfinitives.filter((verb) =>
          topVerbs.includes(verb),
        );

        // sort the new verbs by frequency
        const indexMap = new Map<string, number>();
        loadedVerbs.forEach((verb, index) => indexMap.set(verb, index));

        correctInfinitives.sort((a, b) => {
          const indexA = indexMap.get(a) ?? Infinity;
          const indexB = indexMap.get(b) ?? Infinity;
          return indexA - indexB;
        });

        console.log(correctInfinitives);
        console.log(verbs);

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
