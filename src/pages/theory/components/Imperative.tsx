import { Table } from "components/Table";

export function Imperative() {
  const rules = [
    {
      Person: "tú",
      Affirmative: "3rd person sing. of present indicative",
      Negative: "= present subjuntive",
    },
    {
      Person: "usted",
      Affirmative: "= present subjuntive",
      Negative: "= present subjuntive",
    },
    {
      Person: "nosotros",
      Affirmative: (
        <>
          present indicative yo &rarr; drop <strong>-o</strong> &rarr; add{" "}
          <strong>-emos</strong> (-ar verbs) / <strong>-amos</strong> (-er &-ir
          verbs)
        </>
      ),
      Negative: "= Affirmative",
    },
    {
      Person: "vosotros",
      Affirmative: "?",
      Negative: "?",
    },
    {
      Person: "ustedes",
      Affirmative: "= present subjuntive",
      Negative: "= present subjuntive",
    },
  ];

  const examples = [
    {
      Person: "tú",
      Affirmative: "baila / come / duerme",
      Negative: "no bailes / no comas / no duermas",
    },
    {
      Person: "usted",
      Affirmative: "baile / coma / duerma",
      Negative: "no baile / no coma / no duerma",
    },
    {
      Person: "nosotros",
      Affirmative: "bailemos / comamos / durmamos",
      Negative: "no bailemos / no comamos / no durmamos",
    },
    {
      Person: "vosotros",
      Affirmative: "bailad / comed / dormid",
      Negative: "no bailéis / no comáis / no durmáis",
    },
    {
      Person: "ustedes",
      Affirmative: "bailen / coman / duerman",
      Negative: "no bailen / no coman / no duerman",
    },
  ];

  const irregulars = [
    { Infinitive: "decir", "tú Command": "di", English: "say" },
    { Infinitive: "hacer", "tú Command": "haz", English: "do" },
    { Infinitive: "ir", "tú Command": "ve", English: "go" },
    { Infinitive: "poner", "tú Command": "pon", English: "put" },
    { Infinitive: "salir", "tú Command": "sal", English: "leave" },
    { Infinitive: "ser", "tú Command": "sé", English: "be" },
    { Infinitive: "tener", "tú Command": "ten", English: "have" },
    { Infinitive: "venir", "tú Command": "ven", English: "come" },
  ];

  return (
    <div>
      <h2>Rules</h2>
      <Table
        data={rules}
        renderers={{
          Person: (Person: string) => <strong>{Person}</strong>,
        }}
      />
      <h2>
        Examples <em>(bailar, comer, dormir)</em>
      </h2>
      <Table data={examples} />
      <h2>Irregulars</h2>
      <Table
        data={irregulars}
        renderers={{
          English: (English) => <em>{English}</em>,
        }}
      />
    </div>
  );
}
