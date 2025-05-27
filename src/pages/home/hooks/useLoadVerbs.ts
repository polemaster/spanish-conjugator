import { useEffect, useState } from "react";
import { Verb } from "pages/home/models";
import { loadTopVerbs, loadVerbs } from "pages/home/services";
import { useSettingsContext } from "contexts";
import { getTopNVerbs } from "pages/home/utils";

/*
This function is responsible for:
- loading all data from csv files
- setting initial verb to conjugate
- updating topVerbs when settings.numberOfTopVerbs change
*/
export function useLoadVerbs(verbsPath: string, topVerbsPath: string) {
  const [allVerbs, setAllVerbs] = useState<Record<string, Verb>>({});
  const [topVerbs, setTopVerbs] = useState<Record<string, Verb>>({});
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { settings } = useSettingsContext();

  // Load all data on startup
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

        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadAllData();
  }, [verbsPath, topVerbsPath]);

  // Set new top verbs if settings change
  useEffect(() => {
    const sortedTopVerbs = getTopNVerbs(
      allVerbs,
      Object.keys(topVerbs),
      settings.numberOfTopVerbs,
    );
    setTopVerbs(sortedTopVerbs);
  }, [settings.numberOfTopVerbs, allVerbs]);

  return {
    loading,
    error,
    topVerbs,
  };
}
