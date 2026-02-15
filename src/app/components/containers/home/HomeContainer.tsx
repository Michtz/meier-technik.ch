import { FC } from "react";
import Hero from "@/app/components/system/hero/Hero";
import ContentSection from "@/app/components/system/content/ContentSection";

const HomeContainer: FC = () => {
  return (
    <>
      <Hero title="Präzision in Industrie & Mechanik" imageSrc="/images/smallVan.jpg" />

      {/* Intro */}
      <ContentSection
        imageSrc="/images/smallVan.jpg"
        title="Ihr Partner für Anlagenservice"
        text="Die Meier Technik GmbH steht für Zuverlässigkeit in der Industrie. Von der Wartung komplexer Verpackungsanlagen bis hin zu individuellen Schweissarbeiten im Lebensmittelbetrieb bieten wir Ihnen massgeschneiderte Lösungen. Wir sorgen dafür, dass Ihre Produktion läuft."
        eyebrow="Kompetenz"
      />

      {/* Teaser Referenzen */}
      <ContentSection
        imageSrc="/images/smallVan.jpg" // Hier später passendes Bild (z.B. Migros Anlage)
        title="Erfahrung, die zählt"
        text="Ob 365-Tage-Pikett bei der Hochdorf AG oder die Betreuung der Verpackungsstrassen bei der Migros Industrie: Namhafte Unternehmen vertrauen auf unsere Expertise in der Betriebsmechanik und Revision."
        eyebrow="Referenzen"
        reverse
      />
    </>
  );
};
export default HomeContainer;
