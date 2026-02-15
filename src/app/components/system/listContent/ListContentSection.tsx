import Image from "next/image";
import style from "./ListContentSection.module.scss";
import { FC } from "react";

interface ListContentSectionProps {
  imageSrc: string;
  title: string;
  items: string[]; // Hier Array statt String
  eyebrow?: string;
  reverse?: boolean;
}

const ListContentSection: FC<ListContentSectionProps> = ({
  imageSrc,
  title,
  items,
  eyebrow,
  reverse,
}) => {
  // Wir nutzen CSS Grid order oder Template Areas für Reverse,
  // oder drehen die Divs im DOM wie im Original.
  // Hier eine saubere DOM-Lösung passend zum SCSS:

  return (
    <section className={style.section}>
      <div
        className={style.container}
        style={{ direction: reverse ? "rtl" : "ltr" }} // Trick für Grid-Wechsel desktop, reset direction in children
      >
        {/* Text Content */}
        <div className={style.textContent} style={{ direction: "ltr" }}>
          {eyebrow && <span className={style.eyebrow}>{eyebrow}</span>}
          <h2 className={style.headline}>{title}</h2>
          <ul className={style.list}>
            {items.map((item, index) => (
              <li key={index} className={style.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className={style.imageWrapper} style={{ direction: "ltr" }}>
          <Image
            src={imageSrc}
            alt={title}
            fill
            className={style.image}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default ListContentSection;
