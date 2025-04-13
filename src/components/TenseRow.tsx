import { useSettingsContext } from "../contexts/SettingsContext";
import { Mood } from "../models/Mood";
import Tense from "../models/Tense";

type Props = {
  tense: Tense;
  mood: Mood;
};

export default function TenseRow({ tense, mood }: Props) {
  const { settings, toggleTense } = useSettingsContext();
  const key = `${mood}.${tense.english}`;
  const selected = settings.selectedTenses.includes(key);

  return (
    <tr
      onClick={() => toggleTense(key)}
      className={`cursor-pointer ${
        selected ? "bg-blue-100" : "hover:bg-gray-50"
      }`}
    >
      <td className="p-2">
        <div className="flex items-center h-full">
          <input
            type="checkbox"
            checked={selected}
            onChange={() => toggleTense(key)}
            onClick={(e) => e.stopPropagation()}
            className="h-5 w-5"
          />
        </div>
      </td>
      <td className="p-2">{tense.spanish}</td>
      <td className="p-2">{tense.english}</td>
    </tr>
  );
}
