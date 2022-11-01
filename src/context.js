import React, { useState } from "react";
import { proyects, tags } from "./data";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [proyect, setProyect] = useState(proyects);
  const [listTags, setListTags] = useState(tags);
  return (
    <Context.Provider
      value={({ proyect, setProyect }, { listTags, setListTags })}
    >
      {children}
    </Context.Provider>
  );
};
