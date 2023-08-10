import React from "react";
import "./Main.scss";
import { useTranslation } from "react-i18next";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import i18next from "i18next";

export default function Main() {
  const { t } = useTranslation();
  let pdf = i18next.language == "es" ? "/cv_es.pdf" : "/cv_en.pdf";
  return (
    <div className="left-sidebar">
      <div className="sidebar-header ">
        <span>Jonatan Arnandis</span>
        <span className="designation">{t("main.position")}</span>
      </div>
      <h2 className="text-sidebar">jonatanarnandis@gmail.com</h2>
      <h2 className="text-sidebar">{t("main.home")} </h2>
      <ul className="social-profile ">
        <li>
          <a href="https://github.com/jonatan-arn/">
            <i className="home-icon">
              <AiFillGithub />
            </i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jonatan-arnandis/">
            <i className="home-icon">
              <AiFillLinkedin />
            </i>
          </a>
        </li>
      </ul>
      <div className="container-btn">
        <a href={pdf} download className="theme-btn" target="_blank">
          <i className="las la-envelope"></i> {t("main.cv")}
        </a>
      </div>
    </div>
  );
}
