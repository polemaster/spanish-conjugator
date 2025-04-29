import { Person } from "../models";
import { useSettingsContext } from "../contexts";
import { getPronounKey, pronounMap } from "../data";

interface Props {
  person: Person;
}

const PersonButton = ({ person }: Props) => {
  const { togglePerson, isPersonSelected } = useSettingsContext();
  const key = getPronounKey(person);
  const selected = isPersonSelected(person);

  return (
    <div
      onClick={() => togglePerson(person)}
      className={`cursor-pointer px-4 py-2 rounded border text-center transition-colors duration-200 ${
        selected ? "bg-blue-200 border-blue-500" : "bg-white border-gray-300"
      }`}
    >
      {pronounMap[key]}
    </div>
  );
};

export default PersonButton;
