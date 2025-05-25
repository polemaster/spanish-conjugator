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

  const baseStyles =
    "px-2 col-span-4 md:col-span-3 py-2 rounded-xl flex items-center justify-between font-semibold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer border border-neutral-400 select-none";
  const activeStyles = "bg-neutral-500 ";
  const inactiveStyles = "bg-neutral-600  hover:bg-neutral-400";

  // Widen third person because it contains more text
  const widthClass = person.person === "third" ? "md:col-span-4" : "";

  let displayedProunoun = pronounMap[key];
  if (person.person === "third" && person.number === "singular")
    displayedProunoun = "él/ella/usted";
  if (person.person === "third" && person.number === "plural")
    displayedProunoun = "ellos/ellas/ustedes";

  return (
    <div
      onClick={() => togglePerson(person)}
      className={`${baseStyles} ${selected ? activeStyles : inactiveStyles} ${widthClass}`}
    >
      <input
        type="checkbox"
        checked={selected}
        readOnly
        className="form-checkbox flex-none accent-neutral-700 w-4 h-4 pointer-events-none"
      />
      <span className="flex-auto">{displayedProunoun}</span>
    </div>
  );
};

export default PersonButton;
