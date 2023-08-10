import React from "react";
import "./Main.scss";
import { useTranslation } from "react-i18next";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Main() {
  const { t } = useTranslation();
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
    </div>
  );
}
