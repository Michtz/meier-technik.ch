"use client";

import { useState } from "react";
import Link from "next/link";
import style from "./Header.module.scss";
import LoadingSpinner from "@/app/components/system/loadingSpinner/LoadingSpinner";
import SideNav from "@/app/components/system/sideNav/SideNav";
import HamburgerIcon from "@/app/components/icons/HamburgerIcon";
import LogoIcon from "@/app/components/icons/Logo";
import InstagramIcon from "@/app/components/icons/InstagramIcon";

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
              <Link href={"/about"}>Über uns</Link>
            </li>
            <li className={style.navItem}></li>
          </ul>
        </div>

        <a href={"/"} className={`${style.logo} ${!isLoading ? style.logoSmall : ""}`}>
          <LogoIcon height={60} />
        </a>

        <span className={`${style.rightNavContainer} ${!isLoading ? style.fadeIn : style.fadeOut}`}>
          <Link href={"https://www.instagram.com/meier_technik_gmbh?igsh=MWhuam0waXQzYnpndA=="}>
            <InstagramIcon />
          </Link>
        </span>
      </header>

      <SideNav isOpen={isSideNavOpen} onClose={closeSideNav} />
    </>
  );
};

export default ResponsiveAppBar;
