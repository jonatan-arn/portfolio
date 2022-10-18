import React, { useState, useEffect } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import "./Navbar.scss";
import gitHubIcon from "../../assets/icons/githubIcon.png";
import lnIcon from "../../assets/icons/ln.svg";

import menuIcon from "../../assets/icons/menu.svg";

function Navbar() {
  const { t } = useTranslation();
  const [showNavbar, setshowNavbar] = useState(
    window.matchMedia("(min-width: 1250px)").matches
  );
  const changeLanguage = (ln) => {
    i18next.changeLanguage(ln);
  };
  useEffect(() => {
    window
      .matchMedia("(min-width: 1250px)")
      .addEventListener("change", (e) => setshowNavbar(e.matches));
  }, []);
  return (
    <nav className="menu">
      <label className="name">JA</label>
      {showNavbar && (
        <>
          <div className="center-nav">
            <a href="#work" className="hover">
              {t("navbar.work")}
            </a>
            <a href="#resume" className="hover">
              {t("navbar.resume")}
            </a>
            <a href="#contact" className="hover">
              {t("navbar.contact")}
            </a>
          </div>
          <div className="info">
            <div className="lang">
              <div onClick={() => changeLanguage("en")}>ENG</div>
              <div>|</div>
              <div onClick={() => changeLanguage("es")}>ESP</div>
            </div>
            <div className="links">
              <a href="">
                <img src={lnIcon} alt="linkedin icon" className="img" />
              </a>
              <a href="">
                <img src={gitHubIcon} alt="git hub icon" className="img" />
              </a>
            </div>
          </div>
        </>
      )}
      {!showNavbar && (
        <div className="navbar-menu">
          <img src={menuIcon} alt="git hub icon" className="menu-icon" />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
