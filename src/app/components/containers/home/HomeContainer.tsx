import { FC } from "react";
import Hero from "@/app/components/system/hero/Hero";
import ContentSection from "@/app/components/system/content/ContentSection";

export const BASE_TITLE = "Lorem Ipsum";

export const BASE_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

const HomeContainer: FC = () => {
  return (
    <>
      <Hero title="Deine Überschrift" imageSrc="/images/smallVan.jpg" />
      <ContentSection
        imageSrc="/images/smallVan.jpg"
        title={BASE_TITLE}
        text={BASE_TEXT}
        eyebrow={BASE_TITLE}
      />
      <ContentSection
        imageSrc="/images/smallVan.jpg"
        title={BASE_TITLE}
        text={BASE_TEXT}
        eyebrow={BASE_TITLE}
        reverse
      />
    </>
  );
};
export default HomeContainer;
