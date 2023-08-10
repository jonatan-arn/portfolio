import "./Navbar.scss";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function LangIcon({ icon, text }) {
  const v = "nav-text visible";
  const nv = "nav-text";
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  const changeLanguage = () => {
    let next = i18next.language == "es" ? "en" : "es";
    i18next.changeLanguage(next);
  };
  return (
    <>
      <li className="nav-ele" onClick={() => changeLanguage()}>
        <a class="active">
          <span className={isVisible ? v : nv}>{t("nav." + text)}</span>
          <i
            class="nav-icon"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            {icon}
          </i>
        </a>
      </li>
    </>
  );
}

export default LangIcon;
