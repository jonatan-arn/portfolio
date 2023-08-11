import React from "react";
import "./Skills.scss";
import SkillItem from "./SkillItem";

function SkillsList({ skills }) {
  return (
    <>
      {skills.map((i, k) => (
        <SkillItem key={k} skill={i}></SkillItem>
      ))}
    </>
  );
}

export default SkillsList;
