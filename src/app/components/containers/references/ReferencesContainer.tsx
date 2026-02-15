import { FC } from "react";
import Hero from "@/app/components/system/hero/Hero";
import ListContentSection from "@/app/components/system/listContent/ListContentSection";
import ContentSection from "@/app/components/system/content/ContentSection";

const ReferencesContainer: FC = () => {
  return (
    <>
      <Hero
        title="Ausgewählte Projekte"
        imageSrc="/images/van_inside.jpg"
        titlePosition={"-150px"}
      />

      {/* Intro Text */}
      <ContentSection
        imageSrc="/images/smallVan.jpg"
        title="Vertrauen durch Leistung"
        text="Wir verstehen uns nicht nur als Dienstleister, sondern als Teil Ihres Teams. Unsere Kunden schätzen die Fähigkeit, Verantwortung für komplette Anlagenbereiche zu übernehmen, damit sie sich wieder auf ihr Tagesgeschäft konzentrieren können."
        eyebrow="Erfolgsgeschichten"
        block
      />

      {/* Migros */}
      <ListContentSection
        imageSrc="/images/migros_industries_logo.png"
        eyebrow="Lebensmittelindustrie"
        title="Migros Industrie AG"
        items={[
          "Verantwortlich für 7 Verpackungsanlagen der Marken Restelli und Fuji",
          "Vollständige Übernahme der technischen Betreuung (100% Entlastung des Kunden)",
          "Laufende Optimierung und Störungsbehebung im Tagesgeschäft",
        ]}
      />

      {/* Hochdorf */}
      <ListContentSection
        imageSrc="/images/hochdorf_logo.png"
        eyebrow="Betriebsmechanik"
        title="Hochdorf AG"
        reverse
        items={[
          "3 Jahre Zuständigkeit als externe Betriebsmechanik (Übergangslösung)",
          "Durchführung aller Ventilrevisionen",
          "Wartung der Absack- und Abfüllanlagen",
          "Gewährleistung von 365 Tagen Pikett-Service",
        ]}
      />

      {/* Tschopp */}
      <ListContentSection
        imageSrc="/images/tschop_logo.png"
        eyebrow="Holzverarbeitung"
        title="Tschopp AG"
        items={[
          "Durchführung der grossen Sommer- und Winterrevisionen im Sägewerk",
          "Mechanische Instandsetzung unter anspruchsvollen Bedingungen",
          "Allgemeine Unterstützung bei Betriebsunterbrüchen",
        ]}
      />
    </>
  );
};

export default ReferencesContainer;
