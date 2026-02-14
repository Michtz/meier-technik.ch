import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import style from "./SideNav.module.scss";
import LogoIcon from "@/app/components/icons/Logo";
import InstagramIcon from "@/app/components/icons/InstagramIcon";
import Link from "@/app/components/system/link/Link";
import MaterialIcon from "@/app/components/system/materialIcon/MaterialIcon";

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, onClose }) => {
  const path: string = usePathname();

  useEffect(() => {
    onClose();
  }, [path]);

  return (
    <>
      <div
        className={`${style.backdrop} ${isOpen ? style.backdropVisible : ""}`}
        onClick={onClose}
      />

      <nav className={`${style.sideNav} ${isOpen ? style.sideNavOpen : ""}`}>
        <span className={style.close}>
          <MaterialIcon onClick={onClose} icon={"close"} />
        </span>

        <div className={style.sideNavContent}>
          <div className={style.navSection}>
            <Link href="/" className={style.logoWrapper}>
              <LogoIcon height={60} />
            </Link>
            <ul className={style.navList}>
              <li className={style.navItem}>
                <Link href="/about">Über uns</Link>
              </li>
              <li className={style.navItem}>
                <Link href="/knowledge">Erfahrung</Link>
              </li>
            </ul>
          </div>

          <div className={style.navSection}>
            <h3 className={style.sectionTitle}>Kontakt & Social</h3>
            <ul className={`${style.navList} ${style.socialList}`}>
              <li className={style.navItem}>
                <Link
                  href="https://www.instagram.com/meier_technik_gmbh?igsh=MWhuam0waXQzYnpndA=="
                  external
                  className={style.iconLink}
                >
                  <InstagramIcon />
                </Link>
              </li>
              <li className={style.navItem}>
                <a href="mailto:d.meier@meier-technik.ch">d.meier@meier-technik.ch</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideNav;
