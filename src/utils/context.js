import React, { useState } from "react";
import { resumeItem, skillData, projectData } from "./data";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [resumeItems, setResumeItems] = useState(resumeItem);
  const [skillsData, setSkillsData] = useState(skillData);
  const [projectsData, setProjectsData] = useState(projectData);

  return (
    <Context.Provider
      value={{
        resumeItems,
        setResumeItems,
        skillsData,
        setSkillsData,
        projectsData,
        setProjectsData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
