import { FC } from "react";
import Hero from "@/app/components/system/hero/Hero";
import ContentSection from "@/app/components/system/content/ContentSection";
import { BASE_TEXT, BASE_TITLE } from "@/app/components/containers/home/HomeContainer";

const KnowledgeContainer: FC = () => {
  return (
    <>
      <Hero title="Über Uns" imageSrc="/images/smallVan.jpg" />
      <ContentSection
        imageSrc="/images/smallVan.jpg"
        title={BASE_TITLE}
        text={BASE_TEXT}
        eyebrow={BASE_TITLE}
        block
      />
      <ContentSection
        imageSrc="/images/smallVan.jpg"
        title={BASE_TITLE}
        text={BASE_TEXT}
        eyebrow={BASE_TITLE}
      />
    </>
  );
};
export default KnowledgeContainer;
