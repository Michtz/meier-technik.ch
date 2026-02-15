import Image from "next/image";
import style from "./Hero.module.scss";

interface HeroProps {
  title: string;
  imageSrc: string;
  titlePosition?: string;
}

const Hero = ({ title, imageSrc, titlePosition = "170px" }: HeroProps) => {
  return (
    <div className={style.titleImageContainer}>
      <Image src={imageSrc} alt={title} fill priority className={style.backgroundImage} />
      <h1 className={style.title} style={{ top: titlePosition }}>
        {title}
      </h1>
    </div>
  );
};

export default Hero;
