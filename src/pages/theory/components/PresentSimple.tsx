import { Table } from "components/Table";
import { ConjugationTable } from "./ConjugationTable";

export function PresentSimple() {
  const irregularities = [
    {
      "-ar": "e -> ie",
      "-er": "o -> ie",
      "-ir": "e -> ie",
    },
    {
      "-ar": "o -> ue",
      "-er": "o -> ue",
      "-ir": "e -> i",
    },
    {
      "-ir": "o -> ue",
    },
  ];

  return (
    <div>
      <h2>Regular verbs</h2>
      <p>
        To conjugate regular verbs in the present tense, drop the infinitive
        ending and add:
      </p>
      <div className="flex-center flex-col md:grid md:grid-cols-2 md:gap-x-8 ">
        <ConjugationTable
          data={["-o", "-as", "-a", "-amos", "-áis", "-an"]}
          title="-ar verbs"
          pronouns={true}
        />
        <ConjugationTable
          data={["-o", "-es", "-e", "-emos", "-éis", "-en"]}
          title="-er verbs"
          pronouns={true}
        />
        <ConjugationTable
          data={["-o", "-es", "-e", "-imos", "-ís", "-en"]}
          title="-ir verbs"
          pronouns={true}
        />
      </div>
      <h2>Irregular verbs</h2>
      <p>
        Spanish verbs are considered <em>irregular</em> if there is a{" "}
        <em>change in the stem</em> when they are conjugated.
      </p>
      <p>
        The <strong>nosotros</strong> and <strong>vosotros</strong> forms are{" "}
        <em>unaffected by the stem change</em> in the present tense.
      </p>
      <Table data={irregularities} />
    </div>
  );
}
