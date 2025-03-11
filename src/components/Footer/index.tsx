"use client"

import { HStack } from "@chakra-ui/react";
import Image from "next/image";

import style from "./style.module.css"
import icon from "@/assets/images/footerImages/icon.png"

export default function Footer() {
  return (
    <HStack className={style.bar}> 
      <Image className={style.image} src={icon} alt="Icone de natureza" />
    </HStack >
  )
}