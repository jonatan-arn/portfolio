import React, { useState } from "react";
import "./Resume.scss";
import { useTranslation } from "react-i18next";

function ResumeItem({ items }) {
  const { t } = useTranslation();
  const datev = "date date-active";
  const date = "date";
  const itemv = "item item-active";
  const item = "item";
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div
        className={isVisible ? itemv : item}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <span className={isVisible ? datev : date}>{t(items.date)}</span>
        {items.activities.map((i, k) => (
          <span key={k}>
            <h2 className="item-h">{t(i.desc)}</h2>
            <p className="item-p"> {i.place} </p>
          </span>
        ))}
      </div>
    </>
  );
}

export default ResumeItem;
