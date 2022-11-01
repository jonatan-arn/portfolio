import React from "react";
import ListProyect from "./ListProyect/ListProyect";
import { useTranslation } from "react-i18next";
import "./Work.scss";
function Work() {
  const { t } = useTranslation();

  return (
    <div className="work-box">
      <div className="work-text">
        <h1 className="work-title">{t("work.title")}</h1>
        <h2 className="work-desc">
          {t("work.desc")}
          <br />
          {t("work.desc.2")}
        </h2>
      </div>
      <ListProyect id="work"></ListProyect>
    </div>
  );
}

export default Work;
