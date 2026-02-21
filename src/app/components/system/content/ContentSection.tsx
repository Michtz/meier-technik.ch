"use client";

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
  button?: string;
  href?: string;
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

const ContentSectionD = ({
  imageSrc,
  title,
  text,
  eyebrow,
  objectFit = "cover",
  button,
  href,
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
          {href && (
            <button
              className={style.button}
              data-right={true}
              onClick={() => (window.location.pathname = href)}
            >
              {button}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

const ContentSectionE = ({
  imageSrc,
  title,
  text,
  eyebrow,
  objectFit = "cover",
  button,
  href,
}: ContentSectionProps) => {
  return (
    <section className={style.section}>
      <div className={style.container} style={{ display: "grid", flexDirection: "column-reverse" }}>
        <div className={style.textContent}>
          <span className={style.eyebrow}>{eyebrow}</span>
          <h2 className={style.headline}>{title}</h2>
          <p className={style.text}>{text}</p>
          {href && (
            <button className={style.button} onClick={() => (window.location.pathname = href)}>
              {button}
            </button>
          )}
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

const ContentSection = ({
  imageSrc,
  title,
  text,
  eyebrow,
  reverse,
  block,
  button,
  href,
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
  if (!!button && reverse)
    return (
      <ContentSectionD
        imageSrc={imageSrc}
        title={title}
        text={text}
        eyebrow={eyebrow}
        objectFit={objectFit}
        button={button}
        href={href}
      />
    );

  if (reverse && !button)
    return (
      <ContentSectionA
        imageSrc={imageSrc}
        title={title}
        text={text}
        eyebrow={eyebrow}
        objectFit={objectFit}
      />
    );

  if (!!button)
    return (
      <ContentSectionE
        imageSrc={imageSrc}
        title={title}
        text={text}
        eyebrow={eyebrow}
        objectFit={objectFit}
        button={button}
        href={href}
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
