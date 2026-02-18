"use client";

import React, { useState } from "react";
import style from "./Header.module.scss";
import LoadingSpinner from "@/app/components/system/loadingSpinner/LoadingSpinner";
import SideNav from "@/app/components/system/sideNav/SideNav";
import HamburgerIcon from "@/app/components/icons/HamburgerIcon";
import InstagramIcon from "@/app/components/icons/InstagramIcon";
import MailIcon from "@/app/components/icons/MailIcon";
import Link from "@/app/components/system/link/Link";

const ResponsiveAppBar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isLoading] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const closeSideNav = () => {
    setIsSideNavOpen(false);
  };

  return (
    <>
      {/* Loading Overlay */}
      <div className={`${style.loadingOverlay} ${!isLoading ? style.hidden : ""}`}>
        <LoadingSpinner color={"white"} />
      </div>

      <header className={`${style.header} ${isLoading ? style.headerHidden : style.headerVisible}`}>
        <div className={`${style.leftNavContainer} ${!isLoading ? style.fadeIn : style.fadeOut}`}>
          <div className={style.hamburgerMenu}>
            <HamburgerIcon isOpen={isSideNavOpen} onClick={toggleSideNav} width={24} height={24} />
          </div>

          <ul className={style.navItemContainer}>
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

        <a href={"/"} className={`${style.logo}`}>
          <img src="/images/logo.png" alt={"logo"} width={"84"} />
        </a>

        <span className={`${style.rightNavContainer} ${!isLoading ? style.fadeIn : style.fadeOut}`}>
          <Link
            aria-label="Besuchen Sie uns auf Instagram"
            href={"https://www.instagram.com/meier_technik_gmbh?igsh=MWhuam0waXQzYnpndA=="}
          >
            <InstagramIcon className={style.instaIcon} />
          </Link>
          <Link href={"#mail"} aria-label="Kontaktieren Sie uns per Mail">
            <MailIcon className={style.mailIcon} width={45} height={45} />
          </Link>
        </span>
      </header>

      <SideNav isOpen={isSideNavOpen} onClose={closeSideNav} />
    </>
  );
};

export default ResponsiveAppBar;
