import { Heading, HStack, Text, VStack } from "@chakra-ui/react";

import navbarData from "@/assets/data/navbarData";
import Image from "next/image";

export default function Header() {
  return (
    <HStack>
      {navbarData.map((data, index) => (
        <VStack key={index}>
          <VStack>
            <Image src={data.image} alt={data.title} />
          </VStack>
          <Text>{data.title}</Text>
        </VStack>
      ))}
    </HStack>

  )
}