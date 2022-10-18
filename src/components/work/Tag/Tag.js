import "./Tag.scss";
import React, { useState } from "react";

export default function Tag({ text, useHandler }) {
  const [color, setColor] = useState("notSelected");

  const handler = () => {
    if (useHandler) {
      setColor(color === "selected" ? "notSelected" : "selected");
    }
  };
  return (
    <div>
      <button onClick={handler} className={`Tag ${color}`}>
        {text}
      </button>
    </div>
  );
}
