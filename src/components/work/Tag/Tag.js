import "./Tag.scss";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../../utils/context";

export default function Tag({ text, useHandler }) {
  const [color, setColor] = useState("notSelected");
  const [hover, setHover] = useState("");
  const { proyect, setProyect, selectedTags, setSelectedTags } =
    useContext(Context);

  useEffect(() => {
    if (useHandler) {
      setHover("hover-effect");
    }
  }, []);

  const handler = () => {
    if (useHandler) {
      let st = [...selectedTags];
      let p = [...proyect];

      setColor(color === "selected" ? "notSelected" : "selected");
      setHover("hover-effect");
      if (!st.includes(text)) {
        st.push(text);
      } else {
        st = st.filter(function (e) {
          return e !== text;
        });
      }

      p.map((p) => {
        if (st.includes("All")) {
          p.hide = false;
        }
        if (st.length === 0) {
          p.hide = false;
        } else {
          let allFounded = st.every((ai) => p.tags.includes(ai));
          p.hide = !allFounded;
        }
      });
      setSelectedTags(st);
      setProyect(p);
    }
  };
  return (
    <button onClick={handler} className={`Tag ${color} ${hover}`}>
      {text}
    </button>
  );
}
