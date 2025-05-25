import { allPersons, getPronounKey } from "../data";
import PersonButton from "./PersonButton";
import SettingsBoxTitle from "./SettingsBoxTitle";

const PersonSelector = () => {
  const singularPersons = allPersons.slice(0, 3);
  const pluralPersons = allPersons.slice(3, 6);

  return (
    <div className="settings-box">
      <SettingsBoxTitle>Select Persons</SettingsBoxTitle>

      <div className="grid grid-cols-12 gap-4 ">
        <div className="person-box">Singular</div>

        {singularPersons.map((person) => (
          <PersonButton key={getPronounKey(person)} person={person} />
        ))}

        <div className="person-box mt-4 md:mt-0">Plural</div>

        {pluralPersons.map((person) => (
          <PersonButton key={getPronounKey(person)} person={person} />
        ))}
      </div>
    </div>
  );
};

export default PersonSelector;
