import { StaticImageData } from "next/image"

import comunity from "../images/navbarImages/comunity.png"
import consultation from "../images/navbarImages/consultation.png"
import home from "../images/navbarImages/home.png"
import moodMonitor from "../images/navbarImages/mood-monitor.png"
import settings from "../images/navbarImages/settings.png"
import relax from "../images/navbarImages/relax.png"

export interface NavbarInterface{
  image: StaticImageData;
  link: string;
  title: string
}

const navbarData: NavbarInterface[] = [
  {
    image: home,
    link: "home",
    title: "Inicio",
  },
  {
    image: moodMonitor,
    link: "mood",
    title: "Humor",
  },
  {
    image: relax,
    link: "relax",
    title: "Relaxar",
  },
  {
    image: consultation,
    link: "consultation",
    title: "Consultas",
  },
  {
    image: comunity,
    link: "comunity",
    title: "Comunidade",
  },
  {
    image: settings,
    link: "settings",
    title: "Ajustes",
  },
]

export default navbarData