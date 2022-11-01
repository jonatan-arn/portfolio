import React, { useState } from "react";
import { proyects, tags } from "./data";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [proyect, setProyect] = useState(proyects);
  const [listTags, setListTags] = useState(tags);
  const [selectedTags, setSelectedTags] = useState([]);
  return (
    <Context.Provider
      value={{
        proyect,
        setProyect,
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
