import { Heading, HStack, Text, VStack } from "@chakra-ui/react";

import navbarData from "@/assets/data/navbarData";
import Image from "next/image";
import style from "./style.module.css"

export default function Header() {
  return (
    <HStack className={style.bar}>
      {navbarData.map((data, index) => (
        <VStack className={style.container} key={index}>
          <VStack>
            <Image className={style.image} src={data.image} alt={data.title} />
          </VStack>
          <Text>{data.title}</Text>
        </VStack>
      ))}
    </HStack>

  )
}