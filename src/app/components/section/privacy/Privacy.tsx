import React from "react";
import style from "./Privacy.module.scss";
import Container from "@/app/components/system/container/Container";

const Privacy = () => {
  return (
    <div className={style.privacy}>
      <Container>
        <h1 className={style.title}>Datenschutzerklärung</h1>

        <div className={style.section}>
          <p>
            Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere des Schweizer
            Datenschutzgesetzes (nDSG), ist:
          </p>
          <p>
            <strong>Meier Technik GmbH</strong>
            <br />
            Guggibadstrasse 10
            <br />
            6288 Schongau
            <br />
            Schweiz
          </p>
          <p>
            E-Mail: info@meier-technik.ch
            <br />
            Webseite: https://www.meier-technik.ch
          </p>
        </div>

        <div className={style.section}>
          <h2>Allgemeiner Hinweis</h2>
          <p>
            Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die
            datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person
            Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer
            persönlichen Daten. Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
            entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
        </div>

        <div className={style.section}>
          <h2>Hosting durch Netlify</h2>
          <p>
            Wir hosten unsere Website bei <strong>Netlify, Inc.</strong>, 2325 3rd Street, Suite
            296, San Francisco, California 94107, USA.
          </p>
          <p>
            Wenn Sie unsere Website aufrufen, erfasst Netlify automatisch bestimmte Daten in
            sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies können
            sein:
          </p>
          <ul>
            <li>IP-Adresse (wird oft anonymisiert)</li>
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL (die zuvor besuchte Seite)</li>
            <li>Uhrzeit der Serveranfrage</li>
          </ul>
          <p>
            Diese Daten sind notwendig, um die Sicherheit und Stabilität der Webseite zu
            gewährleisten. Netlify ist Teilnehmer des Data Privacy Frameworks (DPF), was einen
            angemessenen Datenschutzstandard für Datenübermittlungen in die USA sicherstellt.
          </p>
        </div>

        <div className={style.section}>
          <h2>SSL- bzw. TLS-Verschlüsselung</h2>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
            Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine
            SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass
            die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem
            Schloss-Symbol in Ihrer Browserzeile.
          </p>
        </div>

        <div className={style.section}>
          <h2>Kontaktaufnahme</h2>
          <p>
            Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen gemachten Angaben zum Zwecke
            der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert. Diese Daten
            geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
        </div>

        <div className={style.section}>
          <h2>Rechte der betroffenen Person</h2>
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
            unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft
            und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung,
            Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
            personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen
            Adresse an uns wenden.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Privacy;
