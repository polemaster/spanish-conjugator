import { ConjugationTable } from "./ConjugationTable";

export function PresentSubjunctive() {
  const pensar_conjugation = [
    "piense",
    "pienses",
    "piense",
    "pensemos",
    "penséis",
    "piensen",
  ];
  const querer_conjugation = [
    "piense",
    "pienses",
    "piense",
    "pensemos",
    "penséis",
    "piensen",
  ];
  const vivir_conjugation = [
    "viva",
    "vivas",
    "viva",
    "vivamos",
    "viváis",
    "vivan",
  ];
  const mentir_conjugation = [
    "mienta",
    "mientas",
    "mienta",
    "mintamos",
    "mintáis",
    "mientan",
  ];
  const conocer_conjugation = [
    "conozca",
    "conozcas",
    "conozca",
    "conozcamos",
    "conozcáis",
    "conozcan",
  ];
  const venir_conjugation = [
    "venga",
    "vengas",
    "venga",
    "vengamos",
    "vengáis",
    "vengan",
  ];
  const dar_conjugation = ["dé", "des", "dé", "demos", "deis", "den"];
  const estar_conjugation = [
    "esté",
    "estés",
    "esté",
    "estemos",
    "estéis",
    "estén",
  ];
  const ir_conjugation = [
    "vaya",
    "vayas",
    "vaya",
    "vayamos",
    "vayáis",
    "vayan",
  ];
  const saber_conjugation = [
    "sepa",
    "sepas",
    "sepa",
    "sepamos",
    "sepáis",
    "sepan",
  ];
  const ser_conjugation = ["sea", "seas", "sea", "seamos", "seáis", "sean"];
  const haber_conjugation = [
    "haya",
    "hayas",
    "haya",
    "hayamos",
    "hayáis",
    "hayan",
  ];

  return (
    <>
      <p>
        The present subjunctive cannot exist alone. Another element in the
        sentence always causes it to be used. The subjunctive is often needed
        after the following elements.
      </p>

      <h2>Formation of the Present Subjunctive</h2>
      <ul className="ul-list">
        <li>
          Almost all verbs form the present subjunctive from the first-person
          singular <strong>yo</strong> form of the present indicative. Drop the{" "}
          <strong>-o</strong> to get the stem for the present subjunctive.
        </li>
        <li>
          Verbs that are irregular in the present indicative are irregular in
          the present subjunctive in the same way.
        </li>
        <li>
          There are only six verbs that do not form the present subjunctive from
          the <strong>yo</strong> form of the present indicative.
        </li>
        <li>
          Note that the first-person singular and the third-personal singular
          are identical in the present subjunctive.
        </li>
      </ul>

      <h2>Conjugation</h2>

      <p>
        In order to conjugate verbs in the present subjunctive, you start with
        the <strong>yo</strong> form of the present indicative. Drop the{" "}
        <strong>-o</strong> and add:
      </p>

      <div className="flex-center flex-col sm:grid sm:grid-cols-2 sm:gap-x-8 ">
        <ConjugationTable
          data={["-e", "-es", "-e", "-emos", "-éis", "-en"]}
          title="-ar verbs"
          pronouns={true}
        />
        <ConjugationTable
          data={["-a", "-as", "-a", "-amos", "-áis", "-an"]}
          title="-er & -ir verbs"
          pronouns={true}
        />
      </div>

      <p>
        <small>NOTE</small>: In the irregular <strong>-ir</strong> verbs, there
        is an additional irregularity in the <strong>nosotros</strong> and{" "}
        <strong>vosotros</strong> forms. The stem change{" "}
        <strong>e &rarr; ie</strong> or <strong>e &rarr; i</strong> has an{" "}
        <strong>-i-</strong> in the <strong>nosotros</strong> and{" "}
        <strong>vosotros</strong> forms. The stem change{" "}
        <strong>o &rarr; ue</strong> has a <strong>-u-</strong> in the{" "}
        <strong>nosotros</strong> and <strong>vosotros</strong> forms.
      </p>

      <h3>Examples</h3>

      <div className="grid grid-cols-2 gap-x-8 place-items-center">
        <ConjugationTable data={pensar_conjugation} title="pensar" />
        <ConjugationTable data={querer_conjugation} title="querer" />
        <ConjugationTable data={vivir_conjugation} title="vivir" />
        <ConjugationTable data={mentir_conjugation} title="mentir" />
      </div>

      <h2>
        <em>-Er</em> and <em>-ir</em> Verbs with <em>-g-</em> or <em>-zc-</em>{" "}
        in the <em>yo</em> Form
      </h2>
      <p>
        In the present subjunctive, certain <strong>-er</strong> and{" "}
        <strong>-ir</strong> verbs carry the irregularity of the first-person
        singular throughout the conjugation. There are no <strong>-ar</strong>{" "}
        verbs that have this irregularity.
      </p>

      <div className="grid grid-cols-2 gap-x-8 place-items-center">
        <ConjugationTable data={conocer_conjugation} title="conocer" />
        <ConjugationTable data={venir_conjugation} title="venir" />
      </div>

      <h2>Irregular Verbs</h2>
      <p>
        There are only six verbs that have a present subjunctive that is not
        formed from the first-person singular. They are irregular in that they
        cannot be formed from the <strong>yo</strong> form.
      </p>

      <div className="grid grid-cols-2 gap-x-8 place-items-center sm:grid-cols-3">
        <ConjugationTable data={dar_conjugation} title="dar" />
        <ConjugationTable data={estar_conjugation} title="estar" />
        <ConjugationTable data={ir_conjugation} title="ir" />
        <ConjugationTable data={saber_conjugation} title="saber" />
        <ConjugationTable data={ser_conjugation} title="ser" />
        <ConjugationTable data={haber_conjugation} title="haber" />
      </div>

      <h2>Verbs with Orthographic Changes</h2>
      <p>
        Verbs with orthographic changes are not irregular. The spelling changes
        simply maintain the sound of the <strong>yo</strong> form. Some of the
        most common spelling changes are the following:
      </p>
      <ul className="ul-list mt-3">
        <li>
          Verbs that end in <strong>-gar</strong> change <strong>g</strong> to{" "}
          <strong>gu</strong>: <em>llegar</em> &rarr; <em>llegue</em>
        </li>
        <li>
          Verbs that end in <strong>-car</strong> change <strong>c</strong> to{" "}
          <strong>qu</strong>: <em>buscar</em> &rarr; <em>busque</em>
        </li>
        <li>
          Verbs that end in <strong>-zar</strong> change <strong>z</strong> to{" "}
          <strong>c</strong>: <em>empezar</em> &rarr; <em>empiece</em>
        </li>
      </ul>

      <br />
      <h2>Uses of the Present Subjunctive</h2>

      <h3>After Certain Impersonal Expressions</h3>
      <p>
        A sentence or question may consist of a main clause and a dependent or
        subordinate clause connected by the Spanish conjunction{" "}
        <strong>que</strong>.
      </p>

      <p>
        Here is a sentence with a main clause and a subordinate clause in the
        indicative mood.
      </p>
      <img
        className="w-full h-auto rounded-lg shadow-md"
        alt="Images"
        src="src/assets/f0212-01.jpg"
      />

      <h4>After Certain Verbs</h4>
      <h4>Expressing Wishes or Preferences</h4>
      <p>
        Verbs that express wishes or preferences{" "}
        <em>with regard to other people</em> in the main clause will cause the
        subjunctive mood in the dependent clause. The subject in the main clause
        must be different from the subject in the dependent clause.
      </p>
    </>
  );
}
