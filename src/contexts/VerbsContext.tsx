import { Verb } from "pages/home/models";
import { loadTopVerbs, loadVerbs } from "pages/home/services";
import { createContext, useContext, useEffect, useState } from "react";

type VerbsContextType = {
  allVerbs: Record<string, Verb>;
  topVerbs: string[];
  error: string | null;
  isLoading: boolean;
};

const VerbsContext = createContext<VerbsContextType>({
  allVerbs: {},
  topVerbs: [],
  error: "",
  isLoading: true,
});

export const useVerbsContext = () => useContext(VerbsContext);

export function VerbsProvider({ children }: { children: React.ReactNode }) {
  const [allVerbs, setAllVerbs] = useState<Record<string, Verb>>({});
  const [topVerbs, setTopVerbs] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Load all data on startup
  useEffect(() => {
    const verbsPath = "data/conjugated_verbs.csv";
    const topVerbsPath = "data/verbs_by_frequency2.csv";

    const loadAllData = async () => {
      try {
        const [loadedVerbs, loadedTopVerbs] = await Promise.all([
          loadVerbs(verbsPath),
          loadTopVerbs(topVerbsPath),
        ]);
        setAllVerbs(loadedVerbs);
        setTopVerbs(loadedTopVerbs);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message);
        setIsLoading(false);
        throw new Error(err.message);
      }
    };

    loadAllData();
  }, []);

  return (
    <VerbsContext.Provider value={{ allVerbs, topVerbs, error, isLoading }}>
      {children}
    </VerbsContext.Provider>
  );
}
