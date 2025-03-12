import { VStack } from "@chakra-ui/react";

import style from "./style.module.css"
import { ReactNode } from "react";

interface ContainerBoxInterface extends React.ComponentProps<typeof VStack>{
  children: ReactNode
}

export default function ContainerBox({children, ...props}: ContainerBoxInterface){
  return(
    <VStack className={style.containerBox} {...props}>
      {children}
    </VStack>
  )
}