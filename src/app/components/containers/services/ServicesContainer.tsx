import { FC } from "react";
import Hero from "@/app/components/system/hero/Hero";
import ListContentSection from "@/app/components/system/listContent/ListContentSection";

const ServicesContainer: FC = () => {
  return (
    <>
      <Hero title="Unsere Dienstleistungen" imageSrc="/images/drill.jpg" />

      {/* Block 1: Maschinen & Anlagen */}
      <ListContentSection
        imageSrc="/images/fliessband.jpg"
        eyebrow="Industrieservice"
        title="Wartung & Reparatur"
        items={[
          "Reparaturen an Verpackungsanlagen (Fokus: Restelli & Fuji)",
          "Service für Förderbänder und Transportsysteme",
          "Allgemeiner Industrieanlagenservice",
          "Störungsbehebung und mechanische Instandsetzung",
        ]}
      />

      {/* Block 2: Optimierung & Konstruktion */}
      <ListContentSection
        imageSrc="/images/welding.jpg"
        eyebrow="Optimierung"
        title="Maschinenbau & Schweisstechnik"
        reverse
        items={[
          "Maschinenoptimierungen zur Leistungssteigerung",
          "Zertifizierte Schweissarbeiten für Lebensmittelbetriebe",
          "Aufrüstung von Schmierleitungen (Zentralschmierung)",
          "Konstruktion und Schweissen neuer Anschläge",
          "Individuelle Verbesserungsarbeiten nach Kundenwunsch",
        ]}
      />

      {/* Block 3: Revisionen */}
      <ListContentSection
        imageSrc="/images/ventilAnlage.png"
        eyebrow="Instandhaltung"
        title="Revisionen & Ventilservice"
        items={[
          "Ventilrevisionen im Lebensmittelbetrieb",
          "Sommer- und Winterrevisionen (z.B. in Sägewerken)",
          "Komplette Revisionen von Absack- und Abfüllanlagen",
          "Übernahme von Pikett-Diensten für maximale Ausfallsicherheit",
        ]}
      />
    </>
  );
};

export default ServicesContainer;
