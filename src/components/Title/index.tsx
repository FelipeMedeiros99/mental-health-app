import { Heading, Text, VStack } from "@chakra-ui/react";

import style from "./style.module.css"
import { ReactNode } from "react";

interface TitleInterface extends React.ComponentProps<typeof VStack>{
  title: string;
  subtitle?: string;
}

export default function Title({title, subtitle, ...props}: TitleInterface){
  return(
    <VStack alignItems="flex-start" w="100%" {...props}>
      <Heading className={style.h2}>{title}</Heading>
      <Text className={style.p}>{subtitle}</Text>
    </VStack>
  )
}