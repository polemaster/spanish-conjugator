import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  defaultValue: T,
  version: string,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const versionKey = `${key}_version`;
  const [state, setState] = useState<T>(() => {
    const storedVersion = localStorage.getItem(versionKey);
    const storedValue = localStorage.getItem(key);

    if (storedVersion !== version || !storedValue) {
      localStorage.setItem(versionKey, version);
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }

    try {
      return JSON.parse(storedValue);
    } catch (e) {
      console.warn(
        `Corrupted localStorage for key "${key}". Setting "${key}" to its default value.`,
      );
      localStorage.setItem(versionKey, version);
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
    localStorage.setItem(versionKey, version);
  }, [state, version, key, versionKey]);

  return [state, setState];
}
