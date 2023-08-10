import React from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import "./NavbarMobile.scss";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FiBriefcase } from "react-icons/fi";
import { IoShapesOutline } from "react-icons/io5";
import { TbGripVertical } from "react-icons/tb";
import NavIconMobile from "./NavIconMobile";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
import LangIconMobile from "./LangIconMobile";

function NavbarMobile({ visible, hide }) {
  const { t } = useTranslation();
  const changeLanguage = (ln) => {
    i18next.changeLanguage(ln);
  };

  return (
    <>
      <div
        className={
          visible
            ? "responsive-sidebar-menu visible"
            : "responsive-sidebar-menu"
        }
      >
        <div className="overlay" onClick={hide}></div>
        <div
          className={
            visible ? "sidebar-menu-inner visible-nav" : "sidebar-menu-inner"
          }
        >
          <div className="menu-wrap">
            <p>Menu</p>
            <ul className=" scroll-nav-responsive ">
              <NavIconMobile icon={<AiOutlineHome />} text="home" />
              <NavIconMobile icon={<AiOutlineUser />} text="about" />
              <NavIconMobile icon={<FiBriefcase />} text="resume" />
              <NavIconMobile icon={<IoShapesOutline />} text="skills" />
              <NavIconMobile icon={<TbGripVertical />} text="portfolios" />
              <LangIconMobile icon={<MdLanguage />} text="language" />
            </ul>
          </div>

          <div className="sidebar-social">
            <p>Social</p>
            <ul className="social-links d-flex align-items-center">
              <li className="nav-ele">
                <a className="active" href="https://github.com/jonatan-arn/">
                  <i className="nav-icon">
                    <AiFillGithub />
                  </i>
                </a>
              </li>
              <li className="nav-ele">
                <a
                  className="active"
                  href="https://www.linkedin.com/in/jonatan-arnandis/"
                >
                  <i className="nav-icon">
                    <AiFillLinkedin />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarMobile;
