import Image from "next/image";
import style from "./Hero.module.scss";

interface HeroProps {
  title: string;
  imageSrc: string;
}

const Hero = ({ title, imageSrc }: HeroProps) => {
  return (
    <div className={style.titleImageContainer}>
      <Image src={imageSrc} alt={title} fill priority className={style.backgroundImage} />
      <h1 className={style.title}>{title}</h1>
    </div>
  );
};

export default Hero;
