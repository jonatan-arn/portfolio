import "./App.scss";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
function NavIcon({ icon, text }) {
  const v = "nav-text visible";
  const nv = "nav-text";
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <li className="nav-ele">
        <a class="scroll-to active" href={"#" + text}>
          <span className={isVisible ? v : nv}>{text}</span>
          <i
            class="las la-home"
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

export default NavIcon;
