import { VStack } from "@chakra-ui/react";

import style from "./style.module.css"
import { ReactNode } from "react";

export default function ContainerBox({children}: {children: ReactNode}){
  return(
    <VStack className={style.containerBox}>
      {children}
    </VStack>
  )
}