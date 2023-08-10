import React, { useState } from "react";
import "./Portfolio.scss";
import { getImage } from "../../utils/images.js";

function PortfolioItem({ project }) {
  const namev = "project-name  project-name-active";
  const name = "project-name ";
  const categoriev = "categorie categorie-active";
  const categorie = "categorie";
  const [isVisible, setIsVisible] = useState(false);
  const img = getImage(project.img);

  return (
    <>
      <div
        className="portfolio-container"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <div className="portfolio-item">
          <div className="portfolio-item-inner">
            <a href={project.link} className="portfolio-container-img">
              <img src={img} className="portfolio-img" alt={project.img} />
            </a>

            <ul className="portfolio-categories">
              {project.categories.map((c, k) => (
                <li key={k}>
                  <a href="" className={isVisible ? categoriev : categorie}>
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <h2>
            <a href="" className={isVisible ? namev : name}>
              {project.name}
            </a>
          </h2>
        </div>
      </div>
    </>
  );
}

export default PortfolioItem;
