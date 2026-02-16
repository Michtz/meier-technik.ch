"use client";

import React, { FC } from "react";
import style from "./Footer.module.scss";
import Link from "@/app/components/system/link/Link";
import MailIcon from "@/app/components/icons/MailIcon";

const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerContent}>
          <div className={style.footerColumn}>
            <h3 className={style.columnTitle}>Kontakt</h3>
            <ul className={style.linkList}>
              <li>
                <MailIcon />
                <span id="mail" className={style.contactContent}>
                  Email:&nbsp;
                  <a href="mailto:d.meier@meier-technik.ch">d.meier@meier-technik.ch</a>
                </span>
              </li>
              {/*<li>*/}
              {/*  <PhoneIcon />*/}
              {/*  <span id="mail" className={style.contactContent}>*/}
              {/*    Telefon oder Whatsapp:&nbsp; <a href="tel:+41000000000">00000000000</a>*/}
              {/*  </span>*/}
              {/*</li>*/}
            </ul>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.3949397634815!2d8.275774099999998!3d47.2675337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47901b2fdf17bdb1%3A0x88c840983665d868!2sMeier%20Technik%20GmbH!5e0!3m2!1sen!2sch!4v1771180040223!5m2!1sen!2sch"
            loading="lazy"
            title={"Standort"}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={`${style.footerColumn} ${style.additionalInfo}`}>
          <Link href="/legalterms">Impressum</Link>
          <Link href="/privacy">Datenschutz</Link>
        </div>
        <div className={style.footerBottom}>
          <div className={style.copyright}>
            <p>© {new Date().getFullYear()} Meier Technik. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
