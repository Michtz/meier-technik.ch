import style from "./Privacy.module.scss";

export const metadata = {
  title: "Datenschutzerklärung | Meier Technik",
  description: "Informationen zum Datenschutz gemäss Schweizer DSG.",
};

const Privacy = () => {
  return (
    <main className={style.container}>
      {/* // Todo: hierkommt noch das gane wen es gehör usw*/}
      <section className={style.content}>
        <h1>Datenschutzerklärung</h1>
        <p className={style.intro}>
          Gestützt auf Artikel 13 der Schweizerischen Bundesverfassung und die
          datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person
          Anspruch auf Schutz ihrer Privatsphäre.
        </p>

        <section>
          <h2>Allgemeines</h2>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften.
          </p>
          <p>
            In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut
            wie möglich vor unberechtigtem Zugriff, Verlust oder Missbrauch zu schützen.
          </p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            Diese Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die es
            ermöglichen, spezifische Informationen auf Ihrem Endgerät zu speichern. Cookies
            ermöglichen es uns, die Nutzungshäufigkeit zu ermitteln und unser Angebot
            kundenfreundlicher zu gestalten.
          </p>
          <p>Sie können die Speicherung von Cookies in Ihren Browsereinstellungen deaktivieren.</p>
        </section>

        <section>
          <h2>SSL/TLS-Verschlüsselung</h2>
          <p>
            Diese Website verwendet aus Sicherheitsgründen eine SSL/TLS-Verschlüsselung. Eine
            verschlüsselte Verbindung erkennen Sie an dem „https://“ in der Adresszeile und dem
            Schloss-Symbol.
          </p>
        </section>

        <section>
          <h2>Dienste von Drittanbietern</h2>
          <p>
            Wir nutzen Google Maps, Google reCAPTCHA und YouTube. Diese Dienste der amerikanischen
            Google LLC verwenden Cookies, wodurch Daten an Google übertragen werden.
          </p>
          <h3>Google reCAPTCHA</h3>
          <p>
            Zum Schutz vor Bots verwenden wir reCAPTCHA. Dieser Dienst unterscheidet, ob eine
            Eingabe durch einen Menschen oder maschinell erfolgt. Hierbei wird Ihre IP-Adresse an
            Google übertragen.
          </p>
          <h3>YouTube</h3>
          <p>
            Integrierte YouTube-Funktionen werden durch Google Ireland Limited bereitgestellt.
            Informationen zur Datenbehandlung finden Sie in den Google-Datenschutzbestimmungen.
          </p>
        </section>

        <section>
          <h2>Haftungsausschluss</h2>
          <p>
            Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität und
            Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden
            materieller oder immaterieller Art sind ausgeschlossen.
          </p>
        </section>
      </section>
    </main>
  );
};

export default Privacy;
