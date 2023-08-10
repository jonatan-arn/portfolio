import React from "react";
import "./Container.scss";

function Container({ children }) {
  return (
    <>
      <section className="page-section">
        <div className="container">
          <div className="content">{children}</div>
        </div>
      </section>
    </>
  );
}

export default Container;
