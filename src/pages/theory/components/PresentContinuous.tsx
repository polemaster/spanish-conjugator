import { Table, Columns, Column } from "components";

export function PresentContinuous() {
  const conjugation = [{ "-ar": "-ando", "-er & -ir": "-iendo" }];
  const irregular_o = [
    {
      Infinitive: "dormir",
      "Present Tense o → ue": (
        <span>
          d<strong>ue</strong>rmo
        </span>
      ),
      "Gerund o → u": (
        <span>
          d<strong>u</strong>rmiendo
        </span>
      ),
    },
    {
      Infinitive: "morir",
      "Present Tense o → ue": (
        <span>
          m<strong>ue</strong>ro
        </span>
      ),
      "Gerund o → u": (
        <span>
          m<strong>u</strong>riendo
        </span>
      ),
    },
  ];

  const irregular_e_ie = [
    {
      Infinitive: "mentir",
      "Present Tense e → ie": (
        <span>
          m<strong>ie</strong>nto
        </span>
      ),
      "Gerund e → i": (
        <span>
          m<strong>i</strong>ntiendo
        </span>
      ),
    },
    {
      Infinitive: "sugerir",
      "Present Tense e → ie": (
        <span>
          sug<strong>ie</strong>ro
        </span>
      ),
      "Gerund e → i": (
        <span>
          sug<strong>i</strong>riendo
        </span>
      ),
    },
  ];

  const irregular_e_i = [
    {
      Infinitive: "conseguir",
      "Present Tense e → i": (
        <span>
          cons<strong>i</strong>go
        </span>
      ),
      "Gerund e → i": (
        <span>
          cons<strong>i</strong>guiendo
        </span>
      ),
    },
    {
      Infinitive: "pedir",
      "Present Tense e → i": (
        <span>
          p<strong>i</strong>do
        </span>
      ),
      "Gerund e → i": (
        <span>
          p<strong>i</strong>diendo
        </span>
      ),
    },
  ];

  return (
    <>
      <h2>Gerund Formation</h2>

      <p>To the stem of the infinitive add:</p>
      <Table data={conjugation} />
      <br />

      <h3>
        Orthographic Changes in <em>-er</em> and <em>-ir</em> Verbs
      </h3>
      <p>
        <strong>-Er</strong> and <strong>-ir</strong> verbs whose stem ends in a
        vowel form the gerund using <strong>-yendo</strong> instead of{" "}
        <strong>-iendo</strong> in order to avoid having three vowels in a row.
        These are not irregular forms; it is an orthographic change.
      </p>
      <Columns justify="center">
        <Column>
          <div>leer &rarr; leyendo</div>
        </Column>
        <Column>
          <div>traer &rarr; trayendo</div>
        </Column>
      </Columns>
      <br />

      <h2>
        The Gerund of Irregular <em>-ir</em> Verbs
      </h2>
      <p>
        Nearly all gerunds are formed regularly. The only verbs that show an
        irregularity in the gerund are the <strong>-ir</strong> stem-changing
        verbs in the present indicative tense. Learn these irregular gerunds
        now, and you’ll be able to form all the gerunds easily.
      </p>
      <ul className="ul-list">
        <li>
          Forming the gerund of irregular <strong>-ir</strong> verbs with{" "}
          <strong>o</strong> &gt; <strong>ue</strong> and <strong>o</strong>{" "}
          &gt; <strong>u</strong> changes in the stem
          <Table data={irregular_o} />
        </li>
        <li>
          Forming the gerund of irregular <strong>-ir</strong> verbs with{" "}
          <strong>e</strong> &gt; <strong>ie</strong> and <strong>e</strong>{" "}
          &gt; <strong>i</strong> changes in the stem
          <Table data={irregular_e_ie} />
          <Table data={irregular_e_i} />
        </li>
      </ul>

      <br />
      <h2>Placement of Object Pronouns</h2>
      <p>
        The indirect object pronouns, direct object pronouns, and reflexive
        pronouns have two possible positions:
      </p>
      <ul className="ul-list">
        <li>
          The object pronouns may be placed directly before the helping verb{" "}
          <strong>estar</strong>.
        </li>
        <li>The object pronouns may be attached to the gerund.</li>
      </ul>

      <Columns>
        <Column format="italic">
          <div>Los estamos buscando</div>
        </Column>
        <Column format="italic">
          <div>Estamos buscándolos</div>
        </Column>
      </Columns>

      <br />

      <h2>
        Uses of the Gerund with Verbs Other Than <em>estar</em>
      </h2>
      <h3>Use #1</h3>
      <ul className="ul-list">
        <li>
          The gerund with <strong>seguir</strong> expresses{" "}
          <em>to keep/continue (doing something)</em>
          <div className="my-5 grid grid-cols-2 gap-x-10">
            <div>
              Los músicos siguen tocando la música y seguimos escuchándola.
            </div>
            <em>
              The musicians keep playing the music, and we keep listening to it{" "}
              .
            </em>
          </div>
        </li>
        <li>
          The gerund with <strong>ir</strong> expresses{" "}
          <em>gradually, little by little</em>
          <div className="my-5 grid grid-cols-2 gap-x-10 gap-y-3">
            <div>La estudiante va aprendiendo la lección.</div>
            <em>The student is gradually learning the lesson.</em>

            <div>El paciente va mejorándose.</div>
            <em>The patient is getting better little by little.</em>
          </div>
        </li>

        <li>
          The gerund with <strong>llevar</strong> expresses{" "}
          <em>have been doing</em>
          <div className="my-5 grid grid-cols-2 gap-x-10 ">
            <div>Llevo un año estudiando el español.</div>
            <em>I have been studying Spanish for a year.</em>
          </div>
        </li>
      </ul>

      <br />

      <h3>Use #2</h3>
      <p>The gerund can sometimes be used without a helping verb.</p>

      <div className="my-5 grid grid-cols-2 gap-x-10 ">
        <div>Puedo pasar el día mirando a la gente.</div>
        <em>I can pass the day looking at the people.</em>
      </div>

      <p>
        Either the gerund or the infinitive can be used after{" "}
        <strong>ver, mirar, escuchar</strong>, and <strong>oír</strong>. The
        meaning is the same.
      </p>
      <ul className="ul-list">
        <li>Veo a los niños jugando / jugar.</li>
        <li>Escuchamos al hombre cantar / cantando.</li>
        <li>Él vio a María pasar por su casa.</li>
        <li>La vio pasando.</li>
        <li>Susana oyó los loros hablar.</li>
        <li>Ella los oyó hablando.</li>
      </ul>

      <br />
      <h3>Use #3</h3>
      <p>
        Verbs not generally used in the gerund form are{" "}
        <strong>ser, estar, poder, querer, saber, tener, ir </strong> and{" "}
        <strong> venir.</strong> These verbs use the present indicative instead
        of the present progressive.
      </p>
    </>
  );
}
