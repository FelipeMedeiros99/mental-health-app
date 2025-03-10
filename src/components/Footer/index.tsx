import { Box, HStack } from "@chakra-ui/react";
import Image from "next/image";

import icon from "@/assets/images/footerImages/icon.png"

export default function Footer() {
  return (
    <HStack> 
      <Box>
        <Image src={icon} alt="Icone de natureza"/>
      </Box>
    </HStack >
  )
}