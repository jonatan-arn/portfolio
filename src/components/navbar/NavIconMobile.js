import "./NavbarMobile.scss";

import { useTranslation } from "react-i18next";

function NavIconMobile({ icon, text }) {
  const { t } = useTranslation();
  return (
    <>
      <li className="nav-ele">
        <a class="active" href={"#" + text}>
          <i class="nav-icon">
            {icon} <span>{t("nav." + text)}</span>
          </i>
        </a>
      </li>
    </>
  );
}

export default NavIconMobile;
