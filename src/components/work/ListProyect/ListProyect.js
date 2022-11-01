import React, { useContext } from "react";
import Proyect from "../Proyect/Proyect";
import "./ListProyect.scss";
import Tag from "../Tag/Tag";
import { Context } from "../../../utils/context";

export default function ListProyect() {
  const { listTags, proyect } = useContext(Context);

  return (
    <>
      <div className="tags-list">
        {listTags.map((name, i) => (
          <Tag text={name} useHandler={true} key={i}></Tag>
        ))}
      </div>
      <div className="proyectsContainer">
        {proyect.map((p, i) => (
          <Proyect proyect={p} key={i}></Proyect>
        ))}
      </div>
    </>
  );
}
