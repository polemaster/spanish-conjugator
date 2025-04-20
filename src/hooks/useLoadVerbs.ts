import { useEffect, useState } from "react";
import loadVerbs from "../services/data/loadVerbs";
import Verb from "../models/Verb";
import getRandomVerb from "../utils/getRandomVerb";
import loadTopVerbs from "../services/data/loadTopVerbs";
import getTopNVerbs from "../utils/getTopNVerbs";
import { useSettingsContext } from "../contexts/SettingsContext";

function useLoadVerbs(verbsPath: string, topVerbsPath: string) {
  const [verbs, setVerbs] = useState<Record<string, Verb>>({});
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

        setVerbs(loadedVerbs);

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
      verbs,
      Object.keys(topVerbs),
      settings.numberOfTopVerbs,
    );
    setTopVerbs(sortedTopVerbs);
    setVerbToConjugate(getRandomVerb(sortedTopVerbs));
  }, [settings.numberOfTopVerbs]);

  return {
    topVerbs,
    verbToConjugate,
    setVerbToConjugate,
    loading,
    error,
  };
}

export default useLoadVerbs;
