import Image from "next/image";
import style from "./ContentSection.module.scss";
import { Property } from "csstype";
import ObjectFit = Property.ObjectFit;

interface ContentSectionProps {
  imageSrc: string;
  title: string;
  text: string;
  eyebrow?: string;
  reverse?: boolean;
  block?: boolean;
  objectFit?: ObjectFit;
}

const ContentSectionA = ({
  imageSrc,
  title,
  text,
  eyebrow,
  objectFit = "cover",
}: ContentSectionProps) => {
  return (
    <section className={style.section}>
      <div className={style.container} style={{ display: "grid", flexDirection: "column-reverse" }}>
        <div className={style.imageWrapper}>
          <Image
            src={imageSrc}
            alt="Feature Bild"
            fill
            className={style.image}
            style={{ objectFit: objectFit }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className={style.textContent}>
          <span className={style.eyebrow}>{eyebrow}</span>
          <h2 className={style.headline}>{title}</h2>
          <p className={style.text}>{text}</p>
        </div>
      </div>
    </section>
  );
};
const ContentSectionB = ({
  imageSrc,
  title,
  text,
  eyebrow,
  objectFit = "cover",
}: ContentSectionProps) => {
  return (
    <section className={style.section}>
      <div className={style.container} style={{ display: "grid", flexDirection: "column-reverse" }}>
        <div className={style.textContent}>
          <span className={style.eyebrow}>{eyebrow}</span>
          <h2 className={style.headline}>{title}</h2>
          <p className={style.text}>{text}</p>
        </div>

        <div className={style.imageWrapper}>
          <Image
            src={imageSrc}
            alt="Feature Bild"
            fill
            className={style.image}
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: objectFit }}
          />
        </div>
      </div>
    </section>
  );
};

const ContentSectionC = ({
  imageSrc,
  title,
  text,
  eyebrow,
  objectFit = "cover",
}: ContentSectionProps) => {
  return (
    <section className={style.section}>
      <div className={style.container} style={{ display: "block" }}>
        <div className={style.textContent} style={{ marginBottom: "3rem" }}>
          <span className={style.eyebrow}>{eyebrow}</span>
          <h2 className={style.headline}>{title}</h2>
          <p className={style.text}>{text}</p>
        </div>

        {/*<div className={style.imageWrapper}>*/}
        {/*  <Image*/}
        {/*    src={imageSrc}*/}
        {/*    alt="Feature Bild"*/}
        {/*    fill*/}
        {/*    className={style.image}*/}
        {/*    sizes="(max-width: 768px) 100vw, 50vw"*/}
        {/*style={{ objectFit: objectFit }}*/}
        {/*  />*/}
        {/*</div>*/}
      </div>
    </section>
  );
};

const ContentSection = ({
  imageSrc,
  title,
  text,
  eyebrow,
  reverse,
  block,
  objectFit = "cover",
}: ContentSectionProps) => {
  if (block)
    return (
      <ContentSectionC
        imageSrc={imageSrc}
        title={title}
        text={text}
        eyebrow={eyebrow}
        objectFit={objectFit}
      />
    );
  if (reverse)
    return (
      <ContentSectionA
        imageSrc={imageSrc}
        title={title}
        text={text}
        eyebrow={eyebrow}
        objectFit={objectFit}
      />
    );

  return (
    <ContentSectionB
      imageSrc={imageSrc}
      title={title}
      text={text}
      eyebrow={eyebrow}
      objectFit={objectFit}
    />
  );
};

export default ContentSection;
