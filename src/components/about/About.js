import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import "./About.scss";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div id="about" className="tag">
        <AiOutlineUser /> <span>{t("about-tag")}</span>
      </div>
      <h1 className="about-h">
        {t("about-intro")} <span className="name"> {t("about-app")}</span>
      </h1>
      <p className="about-p">{t("about-desc")}</p>
    </>
  );
}

export default Home;
