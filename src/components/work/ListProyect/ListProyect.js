import React from "react";
import { proyects } from "../../../data";
import Proyect from "../Proyect/Proyect";
import "./ListProyect.scss";
export default function ListProyect() {
  return (
    <div className="proyectsContainer">
      {proyects.map(({ name, desc, img, tags, codeLink, prevLink }, i) => (
        <Proyect
          name={name}
          desc={desc}
          img={img}
          tags={tags}
          codeLink={codeLink}
          precLink={prevLink}
          key={i}
        ></Proyect>
      ))}
    </div>
  );
}
