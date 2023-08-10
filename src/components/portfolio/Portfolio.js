import React, { useContext } from "react";
import "./Portfolio.scss";
import { useTranslation } from "react-i18next";
import PortfolioList from "./PortfolioList";
import { Context } from "../../utils/context";
import { TbGripVertical } from "react-icons/tb";

function Portfolio() {
  const { t } = useTranslation();
  const { projectsData } = useContext(Context);

  return (
    <>
      <div id="portfolio" className="tag">
        <TbGripVertical /> <span>{t("portfolio.tag")}</span>
      </div>
      <h1 className="portfolio-h">
        {t("portfolio.intro")}
        <span className="name"> {t("portfolio.exp")}</span>
      </h1>
      <div className="portfolio">
        <PortfolioList projects={projectsData}></PortfolioList>
      </div>
    </>
  );
}

export default Portfolio;
