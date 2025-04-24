import { useEffect, useState } from "react";
import { Verb } from "../models";
import { loadTopVerbs, loadVerbs } from "../services";
import { useSettingsContext } from "../contexts";
import { getRandomVerb, getTopNVerbs } from "../utils";

export function useLoadVerbs(verbsPath: string, topVerbsPath: string) {
  const [allVerbs, setAllVerbs] = useState<Record<string, Verb>>({});
  const [topVerbs, setTopVerbs] = useState<Record<string, Verb>>({});
  const [verbToConjugate, setVerbToConjugate] = useState<Verb | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { settings } = useSettingsContext();

  useEffect(() => {
    const loadAllData = async () => {
      try {
        const [loadedVerbs, loadedTopVerbs] = await Promise.all([
          loadVerbs(verbsPath),
          loadTopVerbs(topVerbsPath),
        ]);

        setAllVerbs(loadedVerbs);

        const sortedTopVerbs = getTopNVerbs(
          loadedVerbs,
          loadedTopVerbs,
          settings.numberOfTopVerbs,
        );
        setTopVerbs(sortedTopVerbs);

        setVerbToConjugate(getRandomVerb(sortedTopVerbs));

        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadAllData();
  }, [verbsPath, topVerbsPath]);

  useEffect(() => {
    const sortedTopVerbs = getTopNVerbs(
      allVerbs,
      Object.keys(topVerbs),
      settings.numberOfTopVerbs,
    );
    setTopVerbs(sortedTopVerbs);
    setVerbToConjugate(getRandomVerb(sortedTopVerbs));
  }, [settings.numberOfTopVerbs, allVerbs]);

  return {
    topVerbs,
    verbToConjugate,
    setVerbToConjugate,
    loading,
    error,
  };
}
