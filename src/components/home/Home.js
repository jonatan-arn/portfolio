import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import "./Home.scss";
function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div className="tag" id="home">
        <AiOutlineHome /> <span>{t("home.tag")}</span>
      </div>
      <h1 className="home-intro">
        {t("home.intro")}
        <span className="name"> Jonatan</span> , {t("home.position")}
      </h1>
      <p className="home-p">{t("home.desc")}</p>
      <div className="facts">
        <h1 className="facts-h">{t("home.year")}</h1>
        <p className="facts-p"> {t("home.exp")}</p>
      </div>
    </>
  );
}

export default Home;
