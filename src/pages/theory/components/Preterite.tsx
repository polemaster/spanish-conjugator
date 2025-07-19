import { ConjugationTable } from ".";

export function Preterite() {
  const andar_conjugation = [
    "anduve",
    "anduviste",
    "anduvo",
    "anduvimos",
    "anduvisteis",
    "anduvieron",
  ];

  const caber_conjugation = [
    "cupe",
    "cupiste",
    "cupo",
    "cupimos",
    "cupisteis",
    "cupieron",
  ];

  const estar_conjugation = [
    "estuve",
    "estuviste",
    "estuvo",
    "estuvimos",
    "estuvisteis",
    "estuvieron",
  ];
  // TODO: get conjugation data from verbs object (Redux)

  // const hacer_conjugation;
  // const poder_conjugation;
  // const poner_conjugation;
  // const querer_conjugation;
  // const saber_conjugation;
  // const tener_conjugation;
  // const venir_conjugation;
  // const decir_conjugation;
  // const producir_conjugation;
  // const traer_conjugation;
  // const dar_conjugation;
  // const ir_conjugation;
  // const ser_conjugation;

  return (
    <div>
      The preterit expresses an action or actions completed in the past - always
      keep in mind that the action or actions expressed by the preterit are
      over. It doesn’t make any difference how long the action went on before;
      the action has a definite end.
      <h2>Conjugation</h2>
      <h3>Regular Verbs</h3>
      <p>
        In order to conjugate regular verbs in the Preterite tense, drop the
        ending of the infinitive and add:
      </p>
      <div className="flex-center flex-col md:grid md:grid-cols-2 md:gap-x-8 place-items-center">
        <ConjugationTable
          data={["-é", "-aste", "-ó", "-amos", "-asteis", "-aron"]}
          title="-ar verbs"
          pronouns={true}
        />
        <ConjugationTable
          data={["-í", "-iste", "-ió", "-imos", "-isteis", "-ieron"]}
          title="-er / -ir verbs"
          pronouns={true}
        />
      </div>
      <h3>Irregular verbs</h3>
      There are only 17 basic irregular verbs in the Preterite. Irregular verbs
      in the Preterite have an irregular stem and a special set of endings. In
      order to conjugate an irregular verb in the preterit, add the endings{" "}
      <strong>-e, -iste, -o, -imos, -isteis, -ieron</strong> to the irregular
      stems.
      <div className="grid grid-cols-2 gap-x-8 place-items-center sm:grid-cols-3">
        <ConjugationTable data={andar_conjugation} title="andar" />
        <ConjugationTable data={caber_conjugation} title="caber" />
        <ConjugationTable data={estar_conjugation} title="estar" />
        {/* <ConjugationTable data={hacer_conjugation} title="saber" /> */}
        {/* <ConjugationTable data={poder_conjugation} title="ser" /> */}
        {/* <ConjugationTable data={poner_conjugation} title="haber" /> */}
        {/* <ConjugationTable data={querer_conjugation} title="haber" /> */}
        {/* <ConjugationTable data={saber_conjugation} title="haber" /> */}
        {/* <ConjugationTable data={tener_conjugation} title="haber" /> */}
        {/* <ConjugationTable data={venir_conjugation} title="haber" /> */}
        {/* <ConjugationTable data={decir_conjugation} title="haber" /> */}
        {/* <ConjugationTable data={producir_conjugation} title="haber" /> */}
        {/* <ConjugationTable data={traer_conjugation} title="haber" /> */}
      </div>
      Dar, ir, and ser have slightly different endings.
      <div className="grid grid-cols-2 gap-x-8 place-items-center sm:grid-cols-3">
        {/* <ConjugationTable data={dar_conjugation} title="haber" /> */}
        {/* <ConjugationTable data={ir_conjugation} title="haber" /> */}
        {/* <ConjugationTable data={ser_conjugation} title="haber" /> */}
      </div>
      <p>
        <strong>Haber</strong> is used to express English{" "}
        <em>there was, there were, was there?, were there?</em> The third-person
        singular preterit form <strong>hubo</strong> is used with both singular
        and plural subjects.
      </p>
      <p>
        Irregular preterits whose stem ends in <strong>j</strong> have{" "}
        <strong>-eron</strong>, not <strong>-ieron</strong>, in the third-person
        plural, for example, <strong>dijeron, trajeron</strong>.
      </p>
      <h4>
        <strong>
          <em>-Ir</em>
        </strong>{" "}
        Verbs with Stem Changes in the Third Person
      </h4>
      <p>
        <strong>-Ir</strong> verbs that are irregular in the present indicative
        have a stem change in the preterit. This stem change occurs only in the
        third-person singular and plural forms of the preterit.
      </p>
      <p>
        <strong>e</strong> &rarr; <strong>ie</strong> in the present indicative
      </p>
      <p>
        <strong>e</strong> &rarr; <strong>i</strong> in the preterit
      </p>
      <div className="grid grid-cols-2 gap-x-8 place-items-center sm:grid-cols-3">
        {/* <ConjugationTable data={divertirse_conjugation} title="divertirse" /> */}
        {/* <ConjugationTable data={mentir_conjugation} title="mentir" /> */}
        {/* <ConjugationTable data={sentirse_conjugation} title="sentirse" /> */}
      </div>
    </div>
  );
}
