import "./NavbarMobile.scss";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

function LangIconMobile({ icon, text }) {
  const { t } = useTranslation();
  const changeLanguage = () => {
    let next = i18next.language == "es" ? "en" : "es";
    i18next.changeLanguage(next);
  };
  return (
    <>
      <li className="nav-ele" onClick={() => changeLanguage()}>
        <a class="active" href={"#" + text}>
          <i class="nav-icon">
            {icon} <span>{t("nav." + text)}</span>
          </i>
        </a>
      </li>
    </>
  );
}

export default LangIconMobile;
