import { allPersons, getPronounKey } from "../constants/pronouns";
import PersonButton from "../components/PersonButton";

const PersonSelector = () => {
  const singularPersons = allPersons.filter(
    (person) => person.number === "singular",
  );
  const pluralPersons = allPersons.filter(
    (person) => person.number === "plural",
  );

  const interlacedPersons = singularPersons.flatMap((singular, index) => [
    singular,
    pluralPersons[index],
  ]);

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Select Persons</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="font-semibold text-center bg-blue-100 p-2 rounded-md">
          Singular
        </div>
        <div className="font-semibold text-center bg-blue-100 p-2 rounded-md">
          Plural
        </div>

        {interlacedPersons.map((person) => (
          <PersonButton key={getPronounKey(person)} person={person} />
        ))}
      </div>
    </div>
  );
};

export default PersonSelector;
