import React, { useState } from "react";
import { proyects, tags, resumeItem, skillData } from "./data";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [proyect, setProyect] = useState(proyects);
  const [resumeItems, setResumeItems] = useState(resumeItem);
  const [skillsData, setSkillsData] = useState(skillData);

  const [listTags, setListTags] = useState(tags);
  const [selectedTags, setSelectedTags] = useState([]);
  return (
    <Context.Provider
      value={{
        proyect,
        setProyect,
        resumeItems,
        setResumeItems,
        skillsData,
        setSkillsData,
        listTags,
        setListTags,
        selectedTags,
        setSelectedTags,
      }}
    >
      {children}
    </Context.Provider>
  );
};
