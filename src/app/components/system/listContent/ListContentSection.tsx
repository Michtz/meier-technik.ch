import Image from "next/image";
import style from "./ListContentSection.module.scss";
import { FC } from "react";

interface ListContentSectionProps {
  imageSrc: string;
  title: string;
  items: string[];
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
  return (
    <section className={style.section}>
      <div className={style.container} style={{ direction: reverse ? "rtl" : "ltr" }}>
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
