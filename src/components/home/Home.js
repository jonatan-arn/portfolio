import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import "./Home.scss";
function Home() {
  return (
    <>
      <div className="tag">
        <AiOutlineHome /> <span>INTRODUCE</span>
      </div>
      <h1>
        Say Hi from <span className="name"> Drake</span> , Framer Designer and
        Developer
      </h1>
      <p>
        I design and code beautifully simple things and i love what i do. Just
        simple like that!
      </p>
    </>
  );
}

export default Home;
