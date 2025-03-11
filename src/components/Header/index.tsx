import { HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

import navbarData from "@/assets/data/navbarData";
import Image from "next/image";
import style from "./style.module.css"

export default function Header() {
  return (
    <HStack className={style.bar}>
      {navbarData.map((data, index) => (
        <Link className={style.container} key={index} href={data.link}>
          <VStack>
            <Image className={style.image} src={data.image} alt={data.title} />
          </VStack>
          <Text className={style.title}>{data.title}</Text>
        </Link>
      ))}
    </HStack>

  )
}