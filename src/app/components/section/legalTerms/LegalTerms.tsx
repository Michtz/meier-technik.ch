import style from "./LegalTerms.module.scss";
import React from "react";

export const metadata = {
  title: "Impressum | Meier Technik",
  description: "Impressum und rechtliche Hinweise der Meier Technik.",
};

const LegalTerms = () => {
  return (
    <main className={style.container}>
      <section className={style.content}>
        <h1>Impressum</h1>

        <section className={style.address}>
          <h2>Kontaktadresse</h2>
          <p>
            Meier Technik
            <br />
            Musterstrasse 12
            <br />
            6000 Luzern
            <br />
            Schweiz
          </p>
          <p>
            <a href="mailto:d.meier@meier-technik.ch">d.meier@meier-technik.ch</a>
            <br />
            Telefon oder Whatsapp:&nbsp; <a href="tel:+41000000000">00000000000</a>
          </p>
        </section>

        <section>
          <h2>Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website werden mit grösstmöglicher Sorgfalt erstellt. Der Autor
            übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit,
            Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
          </p>
          <p>
            Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, die
            aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen,
            durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden
            ausgeschlossen.
          </p>
          <p>
            Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der
            Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen,
            zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
          </p>
        </section>

        <section>
          <h2>Haftung für Links</h2>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle liegen Verweise und Links auf Webseiten
            Dritter ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für
            solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf
            eigene Gefahr der Nutzerin oder des Nutzers.
          </p>
        </section>

        <section>
          <h2>Urheberrecht</h2>
          <p>
            Alle Inhalte dieser Website sind urheberrechtlich geschützt. Jegliche Verwendung,
            Vervielfältigung oder Verbreitung bedarf der schriftlichen Zustimmung von Meier Technik
            Gmbh .
          </p>
        </section>

        <footer className={style.credits}>
          <p>
            Webentwicklung: <strong>Michael Venetz</strong>
          </p>
        </footer>
      </section>
    </main>
  );
};

export default LegalTerms;
