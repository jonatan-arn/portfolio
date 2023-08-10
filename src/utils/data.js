import { BiLogoReact, BiLogoNodejs } from "react-icons/bi";
import { FaVuejs } from "react-icons/fa";
import { LiaAngular } from "react-icons/lia";
import { IoLogoIonic } from "react-icons/io";
import { SiSpringboot } from "react-icons/si";
import { DiMysql } from "react-icons/di";
export const skillData = [
  { iconename: BiLogoReact, name: "React" },
  { iconename: FaVuejs, name: "Vue" },
  { iconename: LiaAngular, name: "Angular" },
  { iconename: BiLogoNodejs, name: "Node" },
  { iconename: IoLogoIonic, name: "Ionic" },
  { iconename: SiSpringboot, name: "Spring boot" },
  { iconename: DiMysql, name: "Sql" },
];

export const resumeItem = [
  {
    date: "resume.date.present",
    activities: [
      { desc: "resume.position.present.1", place: "Prodevelop" },
      { desc: "resume.position.present.2", place: "IES font de sant lluis" },
    ],
  },

  {
    date: "resume.date.2021",
    activities: [{ desc: "resume.position.2021.1", place: "Blat Market" }],
  },
  {
    date: "resume.date.2019",
    activities: [
      {
        desc: "resume.position.2019.1",
        place: "IES consuelo aranda",
      },
    ],
  },
  {
    date: "resume.date.2017",
    activities: [
      { desc: "resume.position.2017.1", place: "IES consuelo aranda" },
    ],
  },
];
export const projectData = [
  {
    img: "truc.png",
    name: "project.truc",
    link: "https://truc.netlify.app/home",
    categories: ["Angular", "Express", "Socket.io", "Prisma"],
  },
  {
    img: "onfood.png",
    name: "project.onfood",
    link: "https://jonatan-arn.github.io/foodblog/",
    categories: ["React", "Tailwind"],
  },
];
