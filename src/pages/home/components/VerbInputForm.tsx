import { FormEvent, useRef, useEffect } from "react";

type Props = {
  value: string;
  onChange: (val: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children?: React.ReactNode;
};

export function VerbInputForm({ value, onChange, onSubmit, children }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={onSubmit} className="p-4 shadow-lg rounded bg-neutral-700 ">
      <div className="mb-4">{children}</div>
      <input
        type="text"
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full my-input"
      />
      <button
        type="submit"
        className="mt-4 w-full h-10 bg-neutral-600 hover:bg-neutral-800 font-semibold rounded transition duration-100 cursor-pointer"
      >
        Check
      </button>
    </form>
  );
}
