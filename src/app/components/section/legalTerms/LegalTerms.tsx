import React from "react";
import style from "./LegalTerms.module.scss";
import { Container } from "@/app/components/system/container/Container";

const LegalTerms = () => {
  return (
    <div className={style.legalTerms}>
      <Container>
        <h1 className={style.title}>Impressum</h1>

        <div className={style.section}>
          <h2>Kontaktadresse</h2>
          <p>
            <strong>Meier Technik GmbH</strong>
            <br />
            Guggibadstrasse 10
            <br />
            6288 Schongau
            <br />
            Schweiz
          </p>

          <p className={style.contactInfo}>
            <strong>E-Mail:</strong> d.meier@meier-technik.ch
            <br />
          </p>
        </div>

        <div className={style.section}>
          <h2>Vertretungsberechtigte Personen</h2>
          <p>
            Herr Meier, Inhaber
            {/* Vorname ergänzen, z.B. Hans Meier */}
          </p>
        </div>

        <div className={style.section}>
          <h2>Handelsregistereintrag</h2>
          <p>
            Eingetragener Firmenname: Meier Technik GmbH
            <br />
            Nummer (UID): CH-100.4.813.051-6
            <br />
            Handelsregisteramt: Luzern
          </p>
        </div>

        <div className={style.section}>
          <h2>Haftungsausschluss</h2>
          <p>
            Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit,
            Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
            Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art,
            welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten
            Informationen, durch Missbrauch der Verbindung oder durch technische Störungen
            entstanden sind, werden ausgeschlossen.
          </p>
          <p>
            Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der
            Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen,
            zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
          </p>
        </div>

        <div className={style.section}>
          <h2>Haftung für Links</h2>
          <p>
            Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
            Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt.
            Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers
            oder der Nutzerin.
          </p>
        </div>

        <div className={style.section}>
          <h2>Urheberrechte</h2>
          <p>
            Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien
            auf der Website gehören ausschliesslich der Firma <strong>Meier Technik GmbH</strong>{" "}
            oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist
            die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default LegalTerms;
