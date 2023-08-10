import React, { useContext } from "react";
import "./Skills.scss";
import { useTranslation } from "react-i18next";
import SkillsList from "./SkillsList";
import { Context } from "../../utils/context";
import { IoShapesOutline } from "react-icons/io5";

function Skills() {
  const { t } = useTranslation();
  const { skillsData } = useContext(Context);
  return (
    <>
      <div id="skills" className="tag">
        <IoShapesOutline /> <span>{t("skills.tag")}</span>
      </div>
      <h1 className="skills-h">
        {t("skills.intro")} <span className="name"> {t("skills.exp")}</span>
      </h1>
      <div className="skills">
        <SkillsList skills={skillsData}></SkillsList>
      </div>
    </>
  );
}

export default Skills;
