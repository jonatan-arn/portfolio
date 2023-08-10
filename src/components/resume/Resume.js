import React, { useContext } from "react";
import { FiBriefcase } from "react-icons/fi";
import "./Resume.scss";
import { useTranslation } from "react-i18next";
import ResumeItem from "./ResumeItem";
import { Context } from "../../utils/context";

function Resume() {
  const { t } = useTranslation();
  const { resumeItems } = useContext(Context);
  return (
    <>
      <div id="resume" className="tag">
        <FiBriefcase /> <span>{t("resume-tag")}</span>
      </div>
      <h1 className="resume-h">
        {t("resume-intro")} <span className="name"> {t("resume-exp")}</span>
      </h1>
      <div className="resume-timeline">
        {resumeItems.map((i, k) => (
          <ResumeItem items={i} key={k}></ResumeItem>
        ))}
      </div>
    </>
  );
}

export default Resume;
