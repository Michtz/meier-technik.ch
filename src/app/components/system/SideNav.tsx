import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import style from "./SideNav.module.scss";

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, onClose }) => {
  const path: string = usePathname();

  useEffect(() => {
    onClose();
  }, [path]); /* eslint-disable-line react-hooks/exhaustive-deps */

  return (
    <>
      <div
        className={`${style.backdrop} ${isOpen ? style.backdropVisible : ""}`}
        onClick={onClose}
      />

      <nav className={`${style.sideNav} ${isOpen ? style.sideNavOpen : ""}`}>
        <div className={style.sideNavContent}>
          <div className={style.navSection}>
            {/*<Logo.tsx width={250} height={30} />*/}
            <ul className={style.navList}>
              <li className={style.navItem}>
                <Link href="/">home</Link>
              </li>
              <li className={style.navItem}>
                <Link href="/about">about</Link>
              </li>
              <li className={style.navItem}>
                <Link href="/blog">blog</Link>
              </li>
            </ul>
          </div>

          <div className={style.navSection}>
            <h3 className={style.sectionTitle}>sideNav.service</h3>
            <ul className={style.navList}>
              <li className={style.navItem}>
                <Link href="/service/contact">contact</Link>
              </li>
              <li className={style.navItem}>
                <Link href="/service/customer-service">sideNav.customerService</Link>
              </li>
              <li className={style.navItem}>
                <Link href="/service/faq">sideNav.faq</Link>
              </li>
            </ul>
          </div>

          <div className={style.navSection}>
            <h3 className={style.sectionTitle}>sideNav.legal</h3>
            <ul className={style.navList}>
              <li className={style.navItem}>
                <Link href="/legal/imprint">sideNav.imprint</Link>
              </li>
              <li className={style.navItem}>
                <Link href="/legal/privacy">sideNav.privacy</Link>
              </li>
              <li className={style.navItem}>
                <Link href="/legal/terms">sideNav.terms</Link>
              </li>
              <li className={style.navItem}>
                <Link href="/legal/shipping">sideNav.shipping</Link>
              </li>
              <li className={style.navItem}>
                <Link href="/legal/returns">sideNav.returns</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideNav;
