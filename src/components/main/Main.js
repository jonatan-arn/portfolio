import React, { useState } from "react";
import "./Main.scss";
import { useTranslation } from "react-i18next";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import i18next from "i18next";

export default function Main() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(i18next.language);
  let pdf = language == "es" ? "/cv_es.pdf" : "/cv_en.pdf";
  return (
    <div class="left-sidebar">
      <div class="sidebar-header ">
        <span>Jonatan Arnandis</span>
        <span class="designation">{t("main.position")}</span>
      </div>
      <h2 class="text-sidebar">jonatanarnandis@gmail.com</h2>
      <h2 class="text-sidebar">{t("main.home")} </h2>
      <ul class="social-profile ">
        <li>
          <a href="https://github.com/jonatan-arn/">
            <i class="home-icon">
              <AiFillGithub />
            </i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jonatan-arnandis/">
            <i class="home-icon">
              <AiFillLinkedin />
            </i>
          </a>
        </li>
      </ul>
      <div className="container-btn">
        <a href={pdf} download class="theme-btn" target="_blank">
          <i class="las la-envelope"></i> {t("main.cv")}
        </a>
      </div>
    </div>
  );
}
