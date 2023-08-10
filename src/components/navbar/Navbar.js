import React, { useState, useEffect } from "react";
import i18next, { use } from "i18next";
import { useTranslation } from "react-i18next";
import "./Navbar.scss";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FiBriefcase } from "react-icons/fi";
import { IoShapesOutline } from "react-icons/io5";
import { TbGripVertical } from "react-icons/tb";
import { MdLanguage } from "react-icons/md";

import NavIcon from "./NavIcon";
import LangIcon from "./LangIcon";

import NavbarMobile from "./NavbarMobile";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const { t } = useTranslation();
  const changeLanguage = (ln) => {
    i18next.changeLanguage(ln);
  };
  const [visible, setVisible] = useState(false);
  const hide = () => setVisible(!visible);
  return (
    <>
      <span className="nav-mov" onClick={() => setVisible(!visible)}>
        <FaBars />
      </span>
      <NavbarMobile visible={visible} hide={hide} />
      <ul className="nav scroll-nav ">
        <NavIcon icon={<AiOutlineHome />} text="home" />
        <NavIcon icon={<AiOutlineUser />} text="about" />
        <NavIcon icon={<FiBriefcase />} text="resume" />
        <NavIcon icon={<IoShapesOutline />} text="skills" />
        <NavIcon icon={<TbGripVertical />} text="portfolios" />
        <LangIcon icon={<MdLanguage />} text="language" />
      </ul>
    </>
  );
}

export default Navbar;
