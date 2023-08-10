import React, { useState } from "react";
import "./Portfolio.scss";
import PortfolioItem from "./PortfolioItem";

function PortfolioList({ projects }) {
  return (
    <>
      {projects.map((i, k) => (
        <PortfolioItem key={k} project={i}></PortfolioItem>
      ))}
    </>
  );
}

export default PortfolioList;
