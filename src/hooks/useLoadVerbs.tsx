import { useEffect, useState } from "react";
import loadVerbs from "../services/data/loadVerbs";
import Verb from "../models/Verb";

function useLoadVerbs(filePath: string) {
  const [verbs, setVerbs] = useState<Record<string, Verb>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadVerbs(filePath)
      .then((data) => {
        setVerbs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [filePath]);

  return { verbs, loading, error };
}

export default useLoadVerbs;
