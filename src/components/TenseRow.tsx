import { useSettingsContext } from "../contexts/SettingsContext";
import { Mood } from "../models/Mood";
import Tense from "../models/Tense";

type Props = {
  tense: Tense;
  mood: Mood;
};

export default function TenseRow({ tense, mood }: Props) {
  const { settings, toggleTense } = useSettingsContext();
  const selected = settings.selectedTenses[mood].includes(tense.english);

  return (
    <tr
      onClick={() => toggleTense(mood, tense.english)}
      className={`cursor-pointer ${
        selected ? "bg-blue-100" : "hover:bg-gray-50"
      }`}
    >
      <td className="p-2">
        <div className="flex items-center h-full">
          <input
            type="checkbox"
            checked={selected}
            onChange={() => toggleTense(mood, tense.english)}
            onClick={(e) => e.stopPropagation()}
            className="h-5 w-5 cursor-pointer"
          />
        </div>
      </td>
      <td className="p-2">{tense.spanish}</td>
      <td className="p-2">{tense.english}</td>
    </tr>
  );
}
