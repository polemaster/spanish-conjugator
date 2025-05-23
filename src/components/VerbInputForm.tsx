import { FormEvent, useRef, useEffect } from "react";

type Props = {
  value: string;
  onChange: (val: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children?: React.ReactNode;
};

export default function VerbInputForm({
  value,
  onChange,
  onSubmit,
  children,
}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded"
    >
      <div className="mb-4">{children}</div>
      <input
        type="text"
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-100 cursor-pointer"
      >
        Check
      </button>
    </form>
  );
}
