import { allPersons, getPronounKey } from "../constants/pronouns";
import PersonButton from "../components/PersonButton";

const PersonSelector = () => {
  return (
    <div className="settings-box">
      <h2 className="text-xl font-bold mb-4">Select Persons</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="font-semibold text-center bg-blue-100 p-2 rounded-md">
          Singular
        </div>
        <div className="font-semibold text-center bg-blue-100 p-2 rounded-md">
          Plural
        </div>

        {allPersons.map((person) => (
          <PersonButton key={getPronounKey(person)} person={person} />
        ))}
      </div>
    </div>
  );
};

export default PersonSelector;
