import "./Proyect.scss";
import React, { useState, useEffect } from "react";
import Tag from "../Tag/Tag";
import Eye from "../../../assets/icons/eye.svg";
import gitHubIcon from "../../../assets/icons/githubIcon.png";
import { Animated } from "react-animated-css";

export default function Proyect({ proyect }) {
  const { img, name, tags, desc, prevLink, codeLink, hide } = proyect;
  const imgProyect = require(`../../../assets/image/` + img);

  const [hidden, setHidden] = useState(hide);
  useEffect(() => {
    setTimeout(() => setHidden(hide), 500);
  }, [hide]);

  return (
    <Animated
      animationIn="zoomIn"
      animationOut="zoomOut"
      animationInDuration={800}
      animationOutDuration={800}
      isVisible={!hide}
      style={!hidden ? null : { display: "none" }}
    >
      <div className={`Proyect`}>
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
    </Animated>
  );
}
