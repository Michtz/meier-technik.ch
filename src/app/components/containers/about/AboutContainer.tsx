import { FC } from "react";
import Hero from "@/app/components/system/hero/Hero";
import ContentSection from "@/app/components/system/content/ContentSection";

const AboutContainer: FC = () => {
  return (
    <>
      <Hero title="Über Meier Technik" imageSrc="/images/smallVan.jpg" />

      <ContentSection
        imageSrc="/images/meier_profil.png"
        title="Handwerk mit Handschlagqualität"
        text="Als selbstständiger Mechaniker und Inhaber der Meier Technik GmbH stehe ich für pragmatische Lösungen und technische Präzision. Wir sind da, wenn es brennt, aber auch, wenn es darum geht, Prozesse langfristig zu verbessern. Unsere Philosophie ist einfach: Wir kümmern uns um die Technik, damit Sie sich um Ihr Geschäft kümmern können."
        eyebrow="Wer wir sind"
        objectFit={"contain"}
      />

      <ContentSection
        imageSrc="/images/logo.png"
        title="Flexibilität ist unsere Stärke"
        text="Ob als langfristiger Partner für die Instandhaltung oder als flexible Übergangslösung bei Personalengpässen: Wir passen uns Ihren Bedürfnissen an. Mit Erfahrung in verschiedensten Branchen – von der strikten Hygiene im Lebensmittelbereich bis zur robusten Umgebung im Sägewerk – bringen wir das nötige Know-how mit."
        eyebrow="Philosophie"
        reverse
        objectFit={"contain"}
      />
    </>
  );
};

export default AboutContainer;
