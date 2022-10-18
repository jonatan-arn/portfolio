import "./Proyect.scss";
import React from "react";
import Tag from "../Tag/Tag";
import Eye from "../../../assets/icons/eye.svg";
import gitHubIcon from "../../../assets/icons/githubIcon.png";
export default function Proyect({ img, name, tags, desc, prevLink, codeLink }) {
  const imgProyect = require(`../../../assets/image/` + img);
  return (
    <div className="Proyect">
      <div className="imgContainer">
        <img className="img" src={imgProyect} alt={img} />
      </div>
      <div className="infoContainer">
        <h3 className="name">{name}</h3>
        <div className="tagContainer">
          {tags.map((name, i) => (
            <Tag key={i} text={name}></Tag>
          ))}
        </div>
        <div className="descText">{desc}</div>
        <div className="buttonContainer flexCenter">
          <a
            href={prevLink}
            rel="noreferrer"
            target="_blank"
            className="b bPrev flexCenter"
          >
            <img src={Eye} alt="eye icon" className="img" /> Preview
          </a>
          <a
            href={codeLink}
            rel="noreferrer"
            target="_blank"
            className="b bCode flexCenter"
          >
            <img src={gitHubIcon} alt="git hub icon" className="img" /> Code
          </a>
        </div>
      </div>
    </div>
  );
}
