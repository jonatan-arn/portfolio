import React, { useState } from "react";
import "./Skills.scss";

function SkillItem({ skill }) {
  const itemv = "skill-inner skill-active";
  const item = "skill-inner";
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div
        className="skill"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <div className={isVisible ? itemv : item}>
          {<skill.iconename className="skill-img" />}
          <p className="skill-name"> {skill.name} </p>
        </div>
      </div>
    </>
  );
}

export default SkillItem;
