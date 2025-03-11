import { Heading, HStack, Text, VStack } from "@chakra-ui/react";

import style from "./style.module.css"

interface TitleInterface{
  title: string;
  subtitle: string;
}

export default function Title({title, subtitle}: TitleInterface){
  return(
    <VStack alignItems="flex-start" w="100%">
      <Heading className={style.h2}>{title}</Heading>
      <Text className={style.p}>{subtitle}</Text>
    </VStack>
  )
}