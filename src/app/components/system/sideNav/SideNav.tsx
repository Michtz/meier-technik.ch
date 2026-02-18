import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import style from "./SideNav.module.scss";
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
              <img src="/images/logo.png" alt={"logo"} width={"84"} />
            </Link>
            <ul className={style.navList}>
              <li className={style.navItem}>
                <Link href={"/services"} aria-label="Unsere Services">
                  Dienstleistungen
                </Link>
              </li>
              <li className={style.navItem}>
                <Link href={"/references"} aria-label="Unsere Referenzen">
                  Referenzen
                </Link>
              </li>
              <li className={style.navItem}>
                <Link href={"/about"} aria-label="Etwas Über Uns">
                  Über uns
                </Link>
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
                  aria-label="Folgen Sie uns auf Instagramm"
                >
                  <InstagramIcon />
                </Link>
              </li>
              <li className={style.navItem}>
                <a href="mailto:d.meier@meier-technik.ch" aria-label="Schreiben Sie uns eine Mail">
                  d.meier@meier-technik.ch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideNav;
