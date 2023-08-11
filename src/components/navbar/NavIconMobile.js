import "./NavbarMobile.scss";

import { useTranslation } from "react-i18next";

function NavIconMobile({ icon, text, changeVisible }) {
  const { t } = useTranslation();
  return (
    <>
      <li className="nav-ele" onClick={changeVisible}>
        <a className="active" href={"#" + text}>
          <i className="nav-icon">
            {icon} <span>{t("nav." + text)}</span>
          </i>
        </a>
      </li>
    </>
  );
}

export default NavIconMobile;
