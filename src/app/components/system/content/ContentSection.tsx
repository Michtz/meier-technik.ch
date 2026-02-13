import Image from "next/image";
import style from "./ContentSection.module.scss";

interface ContentSectionProps {
  imageSrc: string;
  title: string;
  text: string;
  eyebrow?: string;
  reverse?: boolean;
  block?: boolean;
}

const ContentSectionA = ({ imageSrc, title, text, eyebrow }: ContentSectionProps) => {
  return (
    <section className={style.section}>
      <div className={style.container} style={{ display: "grid", flexDirection: "column-reverse" }}>
        <div className={style.imageWrapper}>
          <Image
            src={imageSrc}
            alt="Feature Bild"
            fill
            className={style.image}
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
const ContentSectionB = ({ imageSrc, title, text, eyebrow }: ContentSectionProps) => {
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
          />
        </div>
      </div>
    </section>
  );
};

const ContentSectionC = ({ imageSrc, title, text, eyebrow }: ContentSectionProps) => {
  return (
    <section className={style.section}>
      <div className={style.container} style={{ display: "block" }}>
        <div className={style.textContent} style={{ marginBottom: "3rem" }}>
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
          />
        </div>
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
}: ContentSectionProps) => {
  if (block)
    return <ContentSectionC imageSrc={imageSrc} title={title} text={text} eyebrow={eyebrow} />;
  if (reverse)
    return <ContentSectionA imageSrc={imageSrc} title={title} text={text} eyebrow={eyebrow} />;

  return <ContentSectionB imageSrc={imageSrc} title={title} text={text} eyebrow={eyebrow} />;
};

export default ContentSection;
