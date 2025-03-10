import { StaticImageData } from "next/image"

import comunity from "../images/navBarImages/comunity.png"
import consultation from "../images/navBarImages/consultation.png"
import home from "../images/navBarImages/home.png"
import moodMonitor from "../images/navBarImages/mood-monitor.png"
import settings from "../images/navBarImages/settings.png"
import relax from "../images/navBarImages/relax.png"

export interface NavbarInterface{
  image: StaticImageData;
  link: string;
  title: string
}

const navbarData: NavbarInterface[] = [
  {
    image: home,
    link: "",
    title: "Tela inicial",
  },
  {
    image: moodMonitor,
    link: "",
    title: "Monitor humor",
  },
  {
    image: relax,
    link: "",
    title: "Relaxar",
  },
  {
    image: consultation,
    link: "",
    title: "Consultas",
  },
  {
    image: comunity,
    link: "",
    title: "Comunidade",
  },
  {
    image: settings,
    link: "",
    title: "Ajustes",
  },
]

export default navbarData