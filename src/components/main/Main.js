import React from "react";
import main_img from "../../assets/image/main.svg";
import "./Main.scss";
import { useTranslation } from "react-i18next";

export default function Main() {
  const { t } = useTranslation();
  return (
    <div className="main-container">
      <div className="main-img-container">
        <img className="main-img" src={main_img} alt="svg illustration" />
      </div>
      <div className="main-text">
        <h1 className="main-title">
          {t("main.title")}
          <br />
          <span className="main-position"> {t("main.position")}</span>
        </h1>
        <h2 className="main-desc">{t("main.desc")}</h2>
      </div>
    </div>
  );
}
