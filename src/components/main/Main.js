import React from "react";
import main_img from "../../assets/image/main.svg";
import "./Main.scss";
export default function Main() {
  return (
    <div className="main-container">
      <div className="main-img-container">
        <img className="main-img" src={main_img} alt="svg illustration" />
      </div>
      <div className="main-text">
        <h1 className="main-title">
          Hi, I’m Jonatan and I’m a <br />
          <span className="main-position"> Web Fullstack Developer</span>
        </h1>
        <h2 className="main-desc">
          I'm a Fullstack developer based in Valencia, Spain. I start working in
          2022 and I specialize in creating web apps.
        </h2>
      </div>
    </div>
  );
}
